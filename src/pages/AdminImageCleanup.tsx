import { useState } from "react";
import { ArrowLeft, Play, Check, X, Loader2, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";


interface ProcessedImage {
  questionNumber: number;
  status: 'pending' | 'processing' | 'success' | 'error';
  originalUrl: string;
  cleanedBase64?: string;
  error?: string;
}

const AdminImageCleanup = () => {
  const [images, setImages] = useState<ProcessedImage[]>(() => 
    Array.from({ length: 50 }, (_, i) => ({
      questionNumber: i + 1,
      status: 'pending' as const,
      originalUrl: `/nonverbal/page_${i + 1}.jpg`,
    }))
  );
  const [isProcessing, setIsProcessing] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const imageToBase64 = async (url: string): Promise<string> => {
    const response = await fetch(url);
    const blob = await response.blob();
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onloadend = () => resolve(reader.result as string);
      reader.onerror = reject;
      reader.readAsDataURL(blob);
    });
  };

  const processImage = async (image: ProcessedImage, index: number) => {
    setImages(prev => prev.map((img, i) => 
      i === index ? { ...img, status: 'processing' } : img
    ));

    try {
      // Convert image to base64 on client side
      const base64 = await imageToBase64(image.originalUrl);
      
      const response = await fetch(
        `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/clean-pattern-image`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'apikey': import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY,
            'Authorization': `Bearer ${import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY}`,
          },
          body: JSON.stringify({
            imageBase64: base64,
            questionNumber: image.questionNumber,
          }),
        }
      );

      const data = await response.json();

      if (data.success && data.cleanedImageBase64) {
        setImages(prev => prev.map((img, i) => 
          i === index ? { 
            ...img, 
            status: 'success', 
            cleanedBase64: data.cleanedImageBase64 
          } : img
        ));
      } else {
        throw new Error(data.error || 'Failed to process image');
      }
    } catch (error) {
      setImages(prev => prev.map((img, i) => 
        i === index ? { 
          ...img, 
          status: 'error', 
          error: error instanceof Error ? error.message : 'Unknown error' 
        } : img
      ));
    }
  };

  const processAllImages = async () => {
    setIsProcessing(true);
    
    for (let i = 0; i < images.length; i++) {
      if (images[i].status !== 'success') {
        setCurrentIndex(i);
        await processImage(images[i], i);
        // Small delay between requests to avoid rate limiting
        await new Promise(resolve => setTimeout(resolve, 2000));
      }
    }
    
    setIsProcessing(false);
  };

  const downloadImage = (base64: string, questionNumber: number) => {
    const link = document.createElement('a');
    link.href = base64;
    link.download = `page_${questionNumber}_clean.jpg`;
    link.click();
  };

  const downloadAllAsJson = () => {
    const successImages = images.filter(img => img.status === 'success');
    const jsonData = successImages.map(img => ({
      questionNumber: img.questionNumber,
      cleanedBase64: img.cleanedBase64,
    }));
    
    const blob = new Blob([JSON.stringify(jsonData, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'cleaned_images.json';
    link.click();
    URL.revokeObjectURL(url);
  };

  const successCount = images.filter(img => img.status === 'success').length;
  const errorCount = images.filter(img => img.status === 'error').length;
  const progress = ((successCount + errorCount) / images.length) * 100;

  return (
    <div className="min-h-screen bg-background p-4">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-4 mb-6">
          <Button variant="ghost" onClick={() => window.history.back()}>
            <ArrowLeft className="w-5 h-5" />
          </Button>
          <h1 className="text-2xl font-bold text-foreground">Image Cleanup Admin</h1>
        </div>

        <div className="bg-card p-6 rounded-xl border border-border mb-6">
          <h2 className="text-lg font-semibold mb-4">Process Non-Verbal Pattern Images</h2>
          <p className="text-muted-foreground mb-4">
            This will use AI to remove checkmarks from all 50 non-verbal pattern images.
          </p>
          
          <div className="flex gap-4 mb-4">
            <Button 
              onClick={processAllImages} 
              disabled={isProcessing}
              className="flex items-center gap-2"
            >
              {isProcessing ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  Processing Q{currentIndex + 1}...
                </>
              ) : (
                <>
                  <Play className="w-4 h-4" />
                  Start Processing
                </>
              )}
            </Button>
            
            {successCount > 0 && (
              <Button variant="outline" onClick={downloadAllAsJson}>
                <Download className="w-4 h-4 mr-2" />
                Download All ({successCount})
              </Button>
            )}
          </div>

          <div className="mb-4">
            <div className="flex justify-between text-sm mb-2">
              <span className="text-muted-foreground">Progress</span>
              <span className="text-foreground">{successCount + errorCount} / {images.length}</span>
            </div>
            <Progress value={progress} className="h-2" />
          </div>

          <div className="flex gap-4 text-sm">
            <span className="text-success">✓ {successCount} Success</span>
            <span className="text-destructive">✗ {errorCount} Errors</span>
            <span className="text-muted-foreground">○ {images.length - successCount - errorCount} Pending</span>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {images.map((image, index) => (
            <div 
              key={image.questionNumber}
              className={`relative aspect-square rounded-lg border overflow-hidden ${
                image.status === 'success' ? 'border-success' :
                image.status === 'error' ? 'border-destructive' :
                image.status === 'processing' ? 'border-primary' :
                'border-border'
              }`}
            >
              <img 
                src={image.cleanedBase64 || image.originalUrl} 
                alt={`Q${image.questionNumber}`}
                className="w-full h-full object-cover"
              />
              
              <div className="absolute top-1 left-1 bg-black/70 px-2 py-0.5 rounded text-xs text-white">
                Q{image.questionNumber}
              </div>
              
              <div className="absolute top-1 right-1">
                {image.status === 'success' && (
                  <div className="bg-success rounded-full p-1">
                    <Check className="w-3 h-3 text-white" />
                  </div>
                )}
                {image.status === 'error' && (
                  <div className="bg-destructive rounded-full p-1" title={image.error}>
                    <X className="w-3 h-3 text-white" />
                  </div>
                )}
                {image.status === 'processing' && (
                  <div className="bg-primary rounded-full p-1">
                    <Loader2 className="w-3 h-3 text-white animate-spin" />
                  </div>
                )}
              </div>

              {image.status === 'success' && image.cleanedBase64 && (
                <button
                  onClick={() => downloadImage(image.cleanedBase64!, image.questionNumber)}
                  className="absolute bottom-1 right-1 bg-black/70 rounded p-1 hover:bg-black/90"
                >
                  <Download className="w-3 h-3 text-white" />
                </button>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdminImageCleanup;
