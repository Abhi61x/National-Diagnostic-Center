import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenAI } from "@google/genai";
import { Sparkles, Send, Loader2, AlertCircle, BrainCircuit, HeartPulse, Stethoscope, ChevronRight } from 'lucide-react';
import { PACKAGES } from '../constants';

const AIGuide: React.FC = () => {
  const [userInput, setUserInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [suggestion, setSuggestion] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const resultRef = useRef<HTMLDivElement>(null);

  const handleAnalyze = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!userInput.trim()) return;

    setLoading(true);
    setError(null);
    setSuggestion(null);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const model = 'gemini-3-flash-preview';
      
      const packagesList = PACKAGES.map(p => `- ${p.title}: ${p.features.join(', ')}`).join('\n');

      const prompt = `
        You are a helpful medical diagnostic assistant for "National Diagnostic Center".
        The user is describing their health concerns or goals: "${userInput}"
        
        Based on our available packages:
        ${packagesList}
        
        Suggest the most relevant test or package. 
        - Keep the tone professional, empathetic, and clear.
        - ALWAYS include a disclaimer that this is an AI suggestion and they should consult a doctor.
        - Format the response in a clean, readable way with a clear recommendation.
        - If no specific test matches, suggest a "General Full Body Checkup".
        - Keep it concise (max 150 words).
      `;

      const response = await ai.models.generateContent({
        model,
        contents: [{ role: 'user', parts: [{ text: prompt }] }],
      });

      setSuggestion(response.text || "I couldn't generate a suggestion. Please contact our support.");
    } catch (err) {
      console.error("AI Analysis Error:", err);
      setError("Failed to connect to AI assistant. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (suggestion && resultRef.current) {
      resultRef.current.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
  }, [suggestion]);

  return (
    <section className="py-16 lg:py-24 bg-slate-50 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none">
        <div className="absolute top-10 left-10 w-64 h-64 bg-primary rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-secondary rounded-full blur-3xl" />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary/10 text-primary rounded-full text-xs font-bold uppercase tracking-wider mb-4">
            <BrainCircuit size={16} />
            <span>Smart Health AI Guide</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-extrabold text-slate-900 mb-4">
            Not sure which test is right for you?
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-base lg:text-lg">
            Describe your symptoms or health goals, and our AI assistant will suggest the most relevant diagnostic packages for you.
          </p>
        </div>

        <div className="bg-white rounded-[2.5rem] shadow-xl shadow-slate-200/60 border border-slate-100 overflow-hidden">
          <div className="p-6 sm:p-10">
            <form onSubmit={handleAnalyze} className="relative">
              <textarea
                value={userInput}
                onChange={(e) => setUserInput(e.target.value)}
                placeholder="e.g., I've been feeling very tired lately and having frequent headaches..."
                className="w-full min-h-[120px] p-6 text-slate-700 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-4 focus:ring-primary/10 focus:border-primary outline-none transition-all text-lg placeholder:text-slate-400"
                disabled={loading}
              />
              <div className="mt-4 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-2 text-slate-500 text-sm">
                  <Stethoscope size={16} className="text-primary" />
                  <span>AI-powered test recommendations</span>
                </div>
                <button
                  type="submit"
                  disabled={loading || !userInput.trim()}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-white rounded-xl font-bold hover:bg-sky-600 transition-all shadow-lg shadow-primary/25 disabled:opacity-50 disabled:shadow-none"
                >
                  {loading ? (
                    <>
                      <Loader2 size={20} className="animate-spin" />
                      Analyzing...
                    </>
                  ) : (
                    <>
                      <Sparkles size={20} />
                      Get AI Suggestion
                    </>
                  )}
                </button>
              </div>
            </form>

            {error && (
              <div className="mt-8 p-4 bg-red-50 border border-red-100 rounded-xl flex items-center gap-3 text-red-600 animate-in fade-in slide-in-from-top-2">
                <AlertCircle size={20} />
                <p className="text-sm font-medium">{error}</p>
              </div>
            )}

            {suggestion && (
              <div 
                ref={resultRef}
                className="mt-10 p-8 bg-slate-900 text-white rounded-3xl relative overflow-hidden animate-in zoom-in-95 duration-500"
              >
                {/* Background pattern */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 rounded-full -mr-16 -mt-16 blur-2xl" />
                
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 bg-primary/20 rounded-xl flex items-center justify-center">
                      <HeartPulse size={24} className="text-primary" />
                    </div>
                    <h3 className="text-xl font-bold">AI Recommendation</h3>
                  </div>
                  
                  <div className="prose prose-invert max-w-none mb-8">
                    <p className="text-slate-300 leading-relaxed whitespace-pre-wrap text-lg">
                      {suggestion}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-4 pt-6 border-t border-white/10">
                    <a 
                      href="/packages"
                      className="inline-flex items-center gap-2 text-primary font-bold hover:text-white transition-colors group"
                    >
                      Browse All Packages
                      <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </div>
              </div>
            )}
          </div>
          
          <div className="bg-slate-50 px-10 py-4 border-t border-slate-100">
            <p className="text-[10px] text-slate-400 text-center uppercase tracking-widest font-bold">
              Disclaimer: AI suggestions are for informational purposes only. Always consult a qualified medical professional.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIGuide;
