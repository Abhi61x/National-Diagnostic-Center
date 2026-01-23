import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenAI, Chat, GenerateContentResponse } from "@google/genai";
import { MessageSquare, X, Send, Bot, User, Loader2, Sparkles } from 'lucide-react';
import { PACKAGES } from '../constants';

interface Message {
  role: 'user' | 'model';
  text: string;
}

const HealthAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: 'model', text: "Namaste! I am your AI Health Assistant from National Diagnostic Center. Ask me about test preparations, report timings, or package details." }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  
  // Chat session reference to maintain context
  const chatSession = useRef<Chat | null>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const initializeChat = async () => {
    try {
      if (!process.env.API_KEY) return;
      
      const packageDescriptions = PACKAGES.map(p => 
        `- ${p.title} (₹${p.price}): Includes ${p.features.join(', ')}. Recommended for ${p.recommendedFor}.`
      ).join('\n');
      
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      chatSession.current = ai.chats.create({
        model: 'gemini-3-flash-preview',
        config: {
          systemInstruction: `You are the friendly, professional AI Receptionist for 'National Diagnostic Center' in Lucknow.
          
          **Your Knowledge Base:**
          1. **Packages & Services:**
             ${packageDescriptions}
          2. **Logistics:**
             - Address: Shop number 3, Ring Road, Tedi Pulia, Vasundhara Vihar Gate, Lucknow.
             - Phone: +91 75059 32068.
             - Home Collection: Free for orders > ₹500.
             - Report Time: 6-24 hours typically (Digital via WhatsApp).
             - Opening Hours: 8:00 AM - 9:30 PM (Daily).
             - Emergency Services: Open 24x7.

          **Your Role:**
          - Help users choose the right package based on their age or symptoms.
          - Explain test preparations (e.g., 10-12 hours fasting for Thyroid/Lipid).
          - Provide price estimates and confirm we are NABL compliant.

          **CRITICAL MEDICAL PROTOCOL:**
          - **NEVER** provide a medical diagnosis or treatment plan.
          - If a user asks about specific test results (e.g., "Is 150 blood sugar high?", "What does high TSH mean?"):
            1. You may provide general reference information (e.g., "A fasting blood sugar of 150 mg/dL is generally considered above normal...").
            2. BUT you MUST immediately follow up with: "**However, I am an AI assistant, not a doctor. Please consult a physician for a proper clinical diagnosis and treatment.**"
          - **NEVER** suggest medications.
          
          **Tone:** Warm, empathetic, clear, and professional. Use "We" when referring to the center.
          `,
        },
      });
    } catch (error) {
      console.error("Failed to init chat", error);
    }
  };

  // Initialize on first open
  useEffect(() => {
    if (isOpen && !chatSession.current) {
      initializeChat();
    }
  }, [isOpen]);

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMsg = input.trim();
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setInput('');
    setIsLoading(true);

    try {
      if (!chatSession.current) await initializeChat();
      
      if (chatSession.current) {
        const result = await chatSession.current.sendMessageStream({ message: userMsg });
        
        let fullResponse = "";
        
        // Add a placeholder for the model response
        setMessages(prev => [...prev, { role: 'model', text: "" }]);

        for await (const chunk of result) {
          const c = chunk as GenerateContentResponse;
          if (c.text) {
            fullResponse += c.text;
            // Update the last message with the accumulating text
            setMessages(prev => {
              const newHistory = [...prev];
              newHistory[newHistory.length - 1].text = fullResponse;
              return newHistory;
            });
          }
        }
      } else {
        throw new Error("Chat not initialized");
      }
    } catch (error) {
      console.error("Chat Error:", error);
      
      let errorMessage = "I apologize, but I'm experiencing a temporary connection issue. Please try asking again.";
      
      if (error instanceof Error) {
         if (error.message.includes("Chat not initialized")) {
             errorMessage = "I'm having trouble starting the conversation. Please refresh the page or call us directly.";
         } else if (error.message.includes("API key") || error.message.includes("403")) {
             errorMessage = "I am currently undergoing system maintenance. Please call +91 75059 32068 for immediate assistance.";
         }
      }

      setMessages(prev => {
          // Remove the empty loading message if it exists
          const history = [...prev];
          if (history.length > 0 && history[history.length - 1].role === 'model' && history[history.length - 1].text === "") {
              history.pop(); 
          }
          return [...history, { role: 'model', text: errorMessage }];
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Floating Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-6 right-6 z-50 p-4 rounded-full shadow-2xl transition-all duration-300 ${
          isOpen ? 'bg-slate-800 rotate-90' : 'bg-primary hover:bg-sky-600 hover:scale-110'
        } text-white flex items-center justify-center`}
        aria-label="Toggle Health Assistant"
      >
        {isOpen ? <X size={24} /> : <MessageSquare size={24} />}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50 w-[90vw] sm:w-[380px] h-[500px] bg-white rounded-2xl shadow-2xl border border-slate-200 flex flex-col overflow-hidden animate-in slide-in-from-bottom-10 fade-in duration-300">
          
          {/* Header */}
          <div className="bg-slate-900 p-4 flex items-center gap-3 border-b border-slate-800">
            <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center border border-primary/50">
              <Sparkles size={20} className="text-primary" />
            </div>
            <div>
              <h3 className="font-bold text-white text-sm">AI Health Assistant</h3>
              <p className="text-xs text-slate-400 flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
                Online • Powered by Gemini
              </p>
            </div>
          </div>

          {/* Messages Area */}
          <div className="flex-grow overflow-y-auto p-4 space-y-4 bg-slate-50 scrollbar-thin">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`flex items-start gap-2.5 ${
                  msg.role === 'user' ? 'flex-row-reverse' : 'flex-row'
                }`}
              >
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${
                    msg.role === 'user' ? 'bg-indigo-100 text-indigo-600' : 'bg-white border border-slate-200 text-primary'
                  }`}
                >
                  {msg.role === 'user' ? <User size={16} /> : <Bot size={16} />}
                </div>
                <div
                  className={`p-3 rounded-2xl max-w-[80%] text-sm leading-relaxed shadow-sm ${
                    msg.role === 'user'
                      ? 'bg-indigo-600 text-white rounded-tr-none'
                      : 'bg-white text-slate-700 border border-slate-100 rounded-tl-none'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex items-center gap-2 text-slate-400 text-xs ml-10">
                <Loader2 size={12} className="animate-spin" />
                <span>Thinking...</span>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <form onSubmit={handleSend} className="p-3 bg-white border-t border-slate-100">
            <div className="relative flex items-center">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about tests, fasting..."
                className="w-full pl-4 pr-12 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 focus:bg-white transition-all"
              />
              <button
                type="submit"
                disabled={isLoading || !input.trim()}
                className="absolute right-2 p-2 bg-primary text-white rounded-lg hover:bg-sky-600 disabled:opacity-50 disabled:hover:bg-primary transition-colors"
              >
                <Send size={16} />
              </button>
            </div>
            <p className="text-[10px] text-center text-slate-400 mt-2">
              AI can make mistakes. For medical advice, consult a doctor.
            </p>
          </form>
        </div>
      )}
    </>
  );
};

export default HealthAssistant;