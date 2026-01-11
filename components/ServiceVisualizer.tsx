import React, { useEffect, useState } from 'react';
import { GoogleGenAI } from "@google/genai";
import { Sparkles, Loader2, Image as ImageIcon, AlertCircle, RefreshCw } from 'lucide-react';

interface ServiceImage {
  id: string;
  title: string;
  prompt: string;
  imageUrl: string | null;
  loading: boolean;
  error: boolean;
}

const STORAGE_KEY = 'lab_website_ai_images';

const ServiceVisualizer: React.FC = () => {
  const [services, setServices] = useState<ServiceImage[]>([
    {
      id: '1',
      title: 'Robotic Analysis',
      prompt: 'A close up photo of a modern automated blood analyzer machine in a clean white medical laboratory, blue lighting accents, high detail, photorealistic 8k, bokeh background',
      imageUrl: null,
      loading: false,
      error: false
    },
    {
      id: '2',
      title: 'Sterile Collection',
      prompt: 'A professional medical phlebotomist wearing blue gloves holding a vacuum blood collection tube, sterile environment, soft focus background, photorealistic, safe and hygienic',
      imageUrl: null,
      loading: false,
      error: false
    },
    {
      id: '3',
      title: 'Digital Reports',
      prompt: 'A doctor holding a high tech digital tablet showing a modern medical health report with colorful graphs and charts, clean bright hospital background, photorealistic',
      imageUrl: null,
      loading: false,
      error: false
    }
  ]);

  // Load from local storage on mount to prevent regeneration
  useEffect(() => {
    try {
      const cachedData = localStorage.getItem(STORAGE_KEY);
      if (cachedData) {
        const parsedData = JSON.parse(cachedData);
        setServices(prev => prev.map(service => {
          const cachedService = parsedData.find((p: ServiceImage) => p.id === service.id);
          // Only restore if we have an image URL
          if (cachedService && cachedService.imageUrl) {
            return { ...service, imageUrl: cachedService.imageUrl };
          }
          return service;
        }));
      }
    } catch (error) {
      console.warn("Failed to load images from cache", error);
    }
  }, []);

  const generateImage = async (index: number) => {
    // Prevent multiple calls if already loading or has image
    if (services[index].loading || services[index].imageUrl) return;

    setServices(prev => prev.map((s, i) => i === index ? { ...s, loading: true, error: false } : s));

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash-image',
        contents: {
          parts: [{ text: services[index].prompt }],
        },
        config: {
            imageConfig: {
                aspectRatio: "4:3",
            }
        }
      });

      let imageUrl: string | null = null;
      
      if (response.candidates?.[0]?.content?.parts) {
        for (const part of response.candidates[0].content.parts) {
          if (part.inlineData) {
            const base64EncodeString = part.inlineData.data;
            const mimeType = part.inlineData.mimeType || 'image/png';
            imageUrl = `data:${mimeType};base64,${base64EncodeString}`;
            break;
          }
        }
      }

      if (imageUrl) {
        setServices(prev => {
          const newState = prev.map((s, i) => i === index ? { ...s, imageUrl, loading: false } : s);
          // Save to local storage
          try {
            localStorage.setItem(STORAGE_KEY, JSON.stringify(newState));
          } catch (e) {
            console.warn("Failed to save image to cache (likely quota exceeded)", e);
          }
          return newState;
        });
      } else {
        throw new Error("No image data found in response");
      }

    } catch (err) {
      console.error("Error generating image:", err);
      setServices(prev => prev.map((s, i) => i === index ? { ...s, loading: false, error: true } : s));
    }
  };

  const handleGenerateAll = () => {
    services.forEach((service, index) => {
        if (!service.imageUrl) {
            generateImage(index);
        }
    });
  };

  return (
    <section className="py-12 lg:py-20 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-indigo-50 text-indigo-600 rounded-full text-xs font-bold uppercase tracking-wide mb-3">
            <Sparkles size={14} />
            <span>AI Powered Visualization</span>
          </div>
          <h2 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-3">See Our Advanced Facilities</h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-sm lg:text-base">
            Experience our state-of-the-art diagnostic environment through AI-generated visualizations of our key processes.
          </p>
          
          <button 
             onClick={handleGenerateAll}
             className="mt-6 inline-flex items-center gap-2 px-5 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl font-medium transition-colors shadow-lg shadow-indigo-200"
          >
            <Sparkles size={18} />
            {services.some(s => s.imageUrl) ? 'Generate Missing Previews' : 'Generate Previews'}
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div key={service.id} className="group relative rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 bg-slate-100 border border-slate-200 h-[280px] lg:h-[320px]">
              
              {/* Image Area */}
              <div className="absolute inset-0 flex items-center justify-center bg-slate-200">
                {service.imageUrl ? (
                  <img 
                    src={service.imageUrl} 
                    alt={service.title} 
                    className="w-full h-full object-cover animate-in fade-in duration-700"
                  />
                ) : service.loading ? (
                  <div className="flex flex-col items-center gap-3 text-slate-500">
                    <Loader2 size={32} className="animate-spin text-indigo-500" />
                    <span className="text-xs font-medium animate-pulse">Generating AI Image...</span>
                  </div>
                ) : service.error ? (
                  <div className="flex flex-col items-center gap-2 text-slate-400 p-4 text-center">
                    <AlertCircle size={32} />
                    <span className="text-xs">Failed to generate preview.</span>
                    <button onClick={() => generateImage(index)} className="text-indigo-600 text-xs font-bold hover:underline">Retry</button>
                  </div>
                ) : (
                  <div className="flex flex-col items-center gap-3 text-slate-400">
                    <ImageIcon size={48} className="opacity-50" />
                    <span className="text-xs">Waiting to generate...</span>
                  </div>
                )}
              </div>

              {/* Overlay Content */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-6 pt-12 translate-y-2 group-hover:translate-y-0 transition-transform">
                <h3 className="text-white font-bold text-lg mb-1">{service.title}</h3>
                <p className="text-white/80 text-xs">AI Generated Representation</p>
              </div>

              {/* Generate Button (if not generated) */}
              {!service.imageUrl && !service.loading && (
                 <button 
                    onClick={() => generateImage(index)}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-sm hover:bg-white text-slate-900 px-4 py-2 rounded-lg font-medium text-sm shadow-lg transition-all opacity-0 group-hover:opacity-100 transform scale-95 group-hover:scale-100 flex items-center gap-2"
                 >
                    <Sparkles size={16} className="text-indigo-600" />
                    Visualize
                 </button>
              )}
              
              {/* Refresh Button (if generated) */}
              {service.imageUrl && (
                <button
                    onClick={() => {
                        setServices(prev => prev.map((s, i) => i === index ? { ...s, imageUrl: null } : s));
                        // Remove from cache if user manually refreshes
                        try {
                           const currentCache = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
                           const newCache = currentCache.map((s: ServiceImage) => s.id === service.id ? { ...s, imageUrl: null } : s);
                           localStorage.setItem(STORAGE_KEY, JSON.stringify(newCache));
                        } catch(e) {}
                        
                        setTimeout(() => generateImage(index), 100);
                    }}
                    className="absolute top-3 right-3 p-2 bg-black/40 hover:bg-black/60 text-white rounded-full backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity"
                    title="Regenerate"
                >
                    <RefreshCw size={14} />
                </button>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceVisualizer;