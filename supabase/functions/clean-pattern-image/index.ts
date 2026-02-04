import "https://deno.land/x/xhr@0.3.0/mod.ts";
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { encode as base64Encode } from "https://deno.land/std@0.168.0/encoding/base64.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const LOVABLE_API_KEY = Deno.env.get('LOVABLE_API_KEY');
    if (!LOVABLE_API_KEY) {
      throw new Error('LOVABLE_API_KEY is not configured');
    }

    const { imageUrl, questionNumber, imageBase64 } = await req.json();

    if (!imageUrl && !imageBase64) {
      throw new Error('imageUrl or imageBase64 is required');
    }

    console.log(`Processing question ${questionNumber}`);

    let imageDataUrl: string;

    // If base64 is provided directly, use it; otherwise fetch and convert
    if (imageBase64) {
      imageDataUrl = imageBase64.startsWith('data:') ? imageBase64 : `data:image/jpeg;base64,${imageBase64}`;
    } else {
      // Fetch the image and convert to base64
      console.log(`Fetching image from: ${imageUrl}`);
      const imageResponse = await fetch(imageUrl);
      
      if (!imageResponse.ok) {
        throw new Error(`Failed to fetch image: ${imageResponse.status}`);
      }
      
      const imageBuffer = await imageResponse.arrayBuffer();
      const base64String = base64Encode(imageBuffer);
      const contentType = imageResponse.headers.get('content-type') || 'image/jpeg';
      imageDataUrl = `data:${contentType};base64,${base64String}`;
      console.log('Image converted to base64');
    }

    // Use AI image editing to remove checkmarks from the image
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
                image_url: {
                  url: imageDataUrl
                }
              }
            ]
          }
        ],
        modalities: ["image", "text"]
      })
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('AI API error:', errorText);
      throw new Error(`AI API error: ${response.status}`);
    }

    const data = await response.json();
    console.log('AI response received');

    // Extract the generated image
    const generatedImage = data.choices?.[0]?.message?.images?.[0]?.image_url?.url;

    if (!generatedImage) {
      console.log('No image generated, returning original');
      return new Response(
        JSON.stringify({ 
          success: false, 
          message: 'Could not generate clean image',
          questionNumber 
        }),
        { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    return new Response(
      JSON.stringify({ 
        success: true, 
        cleanedImageBase64: generatedImage,
        questionNumber 
      }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );

  } catch (error: unknown) {
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    console.error('Error in clean-pattern-image:', errorMessage);
    return new Response(
      JSON.stringify({ error: errorMessage }),
      { 
        status: 500, 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
      }
    );
  }
});
