import "https://deno.land/x/xhr@0.3.0/mod.ts";
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { encode as base64Encode } from "https://deno.land/std@0.168.0/encoding/base64.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.45.0";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

const json = (body: unknown, status = 200) =>
  new Response(JSON.stringify(body), {
    status,
    headers: { ...corsHeaders, 'Content-Type': 'application/json' },
  });

// Simple in-memory rate limit: max 60 requests per user per 10 minutes
const RATE_LIMIT = 60;
const WINDOW_MS = 10 * 60 * 1000;
const hits = new Map<string, number[]>();

const isRateLimited = (key: string) => {
  const now = Date.now();
  const recent = (hits.get(key) ?? []).filter((t) => now - t < WINDOW_MS);
  recent.push(now);
  hits.set(key, recent);
  return recent.length > RATE_LIMIT;
};

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const SUPABASE_URL = Deno.env.get('SUPABASE_URL');
    const SERVICE_ROLE_KEY = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY');
    const LOVABLE_API_KEY = Deno.env.get('LOVABLE_API_KEY');

    if (!SUPABASE_URL || !SERVICE_ROLE_KEY || !LOVABLE_API_KEY) {
      return json({ error: 'Server is not configured' }, 500);
    }

    // --- Authentication: require a signed-in user with the admin role ---
    const authHeader = req.headers.get('Authorization') ?? '';
    const token = authHeader.replace(/^Bearer\s+/i, '');
    if (!token) {
      return json({ error: 'Authentication required' }, 401);
    }

    const admin = createClient(SUPABASE_URL, SERVICE_ROLE_KEY, {
      auth: { persistSession: false, autoRefreshToken: false },
    });

    const { data: userData, error: userError } = await admin.auth.getUser(token);
    const user = userData?.user;
    if (userError || !user) {
      return json({ error: 'Authentication required' }, 401);
    }

    const { data: roleRow } = await admin
      .from('user_roles')
      .select('role')
      .eq('user_id', user.id)
      .eq('role', 'admin')
      .maybeSingle();

    if (!roleRow) {
      return json({ error: 'Admin access required' }, 403);
    }

    if (isRateLimited(user.id)) {
      return json({ error: 'Too many requests. Please try again later.' }, 429);
    }

    // --- Input validation ---
    let body: { imageUrl?: unknown; questionNumber?: unknown; imageBase64?: unknown };
    try {
      body = await req.json();
    } catch {
      return json({ error: 'Invalid JSON body' }, 400);
    }

    const imageUrl = typeof body.imageUrl === 'string' ? body.imageUrl : undefined;
    const imageBase64 = typeof body.imageBase64 === 'string' ? body.imageBase64 : undefined;
    const questionNumber = typeof body.questionNumber === 'number' ? body.questionNumber : undefined;

    if (!imageUrl && !imageBase64) {
      return json({ error: 'imageUrl or imageBase64 is required' }, 400);
    }
    if (imageBase64 && imageBase64.length > 12_000_000) {
      return json({ error: 'Image is too large' }, 400);
    }

    let imageDataUrl: string;

    if (imageBase64) {
      imageDataUrl = imageBase64.startsWith('data:')
        ? imageBase64
        : `data:image/jpeg;base64,${imageBase64}`;
    } else {
      const imageResponse = await fetch(imageUrl!);
      if (!imageResponse.ok) {
        return json({ error: `Failed to fetch image: ${imageResponse.status}` }, 400);
      }
      const imageBuffer = await imageResponse.arrayBuffer();
      const base64String = base64Encode(imageBuffer);
      const contentType = imageResponse.headers.get('content-type') || 'image/jpeg';
      imageDataUrl = `data:${contentType};base64,${base64String}`;
    }

    const response = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${LOVABLE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "google/gemini-2.5-flash-image",
        messages: [
          {
            role: "user",
            content: [
              {
                type: "text",
                text: "Remove all checkmarks, tick marks, circles around options, and answer indicators from this non-verbal intelligence test image. Keep all the geometric patterns, shapes, options labels (A, B, C, D or 1, 2, 3, 4) and question structure completely intact. Make the image clean and clear for students to attempt without any answer hints visible. Do not change any patterns or shapes - only remove the checkmarks/ticks that indicate the correct answer."
              },
              {
                type: "image_url",
                image_url: { url: imageDataUrl }
              }
            ]
          }
        ],
        modalities: ["image", "text"]
      })
    });

    if (response.status === 429) {
      return json({ error: 'AI rate limit reached. Please try again shortly.' }, 429);
    }
    if (response.status === 402) {
      return json({ error: 'AI credits exhausted. Please top up to continue.' }, 402);
    }
    if (!response.ok) {
      return json({ error: `AI service error: ${response.status}` }, 502);
    }

    const data = await response.json();
    const generatedImage = data.choices?.[0]?.message?.images?.[0]?.image_url?.url;

    if (!generatedImage) {
      return json({ success: false, message: 'Could not generate clean image', questionNumber });
    }

    return json({ success: true, cleanedImageBase64: generatedImage, questionNumber });
  } catch (error: unknown) {
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    return json({ error: errorMessage }, 500);
  }
});
