-- Make nonverbals bucket public so images can be displayed
UPDATE storage.buckets SET public = true WHERE id = 'nonverbals';

-- Create RLS policy to allow public read access
CREATE POLICY "Public can view nonverbal images"
ON storage.objects FOR SELECT
USING (bucket_id = 'nonverbals');