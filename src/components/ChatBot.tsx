import React, { useState, useEffect, useRef } from 'react';
import { MessageCircle, X, Send, Loader2, Minimize2, Maximize2 } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { ScrollArea } from './ui/scroll-area';
import { cn } from '@/lib/utils';
import Groq from "groq-sdk";

const SYSTEM_PROMPT = `
You are the official AI assistant for Aravind Kannan Photography. 
Your goal is to provide helpful, professional, and concise information about Aravind Kannan's photography services.

Key Information:
- Photographer: Aravind Kannan, a professional photographer based in Chennai, India.
- Experience: Over 15 years in the industry.
- Portfolio Categories: 
  - Weddings: Timeless celebrations (500+ weddings captured).
  - Bridal & Couple: Intimate portraits.
  - Fashion & Editorial: Artistic vision.
  - Portraits: Authentic moments.
  - Commercial: Brand storytelling.
- Locations: Based in Chennai, but works across India and internationally (12+ countries visited).
- Philosophy: "Photography is the art of seeing what others overlook." He focuses on authentic human moments, light, and shadow.
- Contact Info:
  - Email: hello@aravindkannan.com
  - Phone: +91 98765 43210
  - Studio Location: Chennai, Tamil Nadu, India.
- Response Time: Typically 24-48 hours.
- Brand Collaborations: 50+ successful collaborations.

Detailed Answers for Common Questions:
1. Pricing: "Pricing varies based on the type of event, duration, and specific requirements. For a detailed quote, please share your event details via the contact form or email hello@aravindkannan.com."
2. Booking: "To book a session, a 50% advance payment is required to secure the date. We recommend booking at least 3-6 months in advance for weddings."
3. Delivery Timeline: "Edited highlights are usually delivered within 2 weeks. The full gallery is typically ready within 6-8 weeks after the event."
4. Travel: "Yes, Aravind travels globally. Travel and accommodation costs are to be covered by the client for outstation or international projects."
5. Gear/Equipment: "We use top-tier professional full-frame cameras and prime lenses to ensure the highest image quality and low-light performance."
6. Raw Files: "We do not provide unedited raw files as they are unfinished products. Our service includes carefully curated and professionally edited high-resolution images."

Guidelines:
- Be polite, professional, and enthusiastic about photography.
- Keep your answers relatively short and helpful.
- If unsure, encourage the user to use the contact form or reach out via email/phone.
- Mention that Aravind is based in Chennai but travels globally for projects.
- Always provide a "short note" or summary if the answer is long.
`;

interface Message {
    role: 'user' | 'assistant';
    content: string;
}

const ChatBot: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isMinimized, setIsMinimized] = useState(false);
    const [messages, setMessages] = useState<Message[]>([
        { role: 'assistant', content: "Hello! I'm Aravind's digital assistant. How can I help you today? I can answer questions about our wedding packages, pricing, or travel availability." }
    ]);
    const [input, setInput] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const apiKey = import.meta.env.VITE_GROQ_API_KEY;

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const handleSend = async () => {
        if (!input.trim() || isLoading) return;

        const userMessage: Message = { role: 'user', content: input };
        setMessages(prev => [...prev, userMessage]);
        setInput('');
        setIsLoading(true);

        if (!apiKey || apiKey === 'your_groq_api_key_here') {
            setMessages(prev => [...prev, {
                role: 'assistant',
                content: "API Key is missing. Please add your Groq API key to the .env file as VITE_GROQ_API_KEY to enable me!"
            }]);
            setIsLoading(false);
            return;
        }

        try {
            const groq = new Groq({
                apiKey: apiKey,
                dangerouslyAllowBrowser: true
            });

            const response = await groq.chat.completions.create({
                model: "llama-3.3-70b-versatile",
                messages: [
                    { role: "system", content: SYSTEM_PROMPT },
                    ...messages.map(m => ({ role: m.role as any, content: m.content })),
                    { role: "user", content: input }
                ],
                temperature: 0.7,
                max_tokens: 1024,
            });

            const assistantMessage: Message = {
                role: 'assistant',
                content: response.choices[0]?.message?.content || "I'm sorry, I couldn't process that. Please try again."
            };
            setMessages(prev => [...prev, assistantMessage]);
        } catch (error: any) {
            console.error("Error communicating with Groq:", error);
            const errorMessage = error?.message || "connection error";
            setMessages(prev => [...prev, {
                role: 'assistant',
                content: `Sorry, I'm having some trouble: ${errorMessage}. Please check your API key or connectivity.`
            }]);
        } finally {
            setIsLoading(false);
        }
    };

    if (!isOpen) {
        return (
            <button
                onClick={() => setIsOpen(true)}
                className="fixed bottom-6 right-6 group z-50 flex items-center gap-3"
                aria-label="Open Chat"
            >
                <div className="bg-foreground text-background px-4 py-2 rounded-full shadow-2xl text-sm font-medium opacity-0 group-hover:opacity-100 transition-all transform translate-x-4 group-hover:translate-x-0 hidden md:block border border-background/20 backdrop-blur-sm">
                    Questions? Ask me!
                </div>
                <div className="w-16 h-16 bg-foreground text-background rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.12)] flex items-center justify-center hover:scale-110 transition-all duration-300 relative border-2 border-background animate-fade-in">
                    <MessageCircle size={30} strokeWidth={1.5} />
                    <span className="absolute top-1 right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-foreground" />
                </div>
            </button>
        );
    }

    return (
        <div className={cn(
            "fixed bottom-6 right-6 w-[90vw] md:w-[400px] bg-background border border-border rounded-2xl shadow-2xl z-50 transition-all duration-500 ease-out flex flex-col overflow-hidden backdrop-blur-xl",
            isMinimized ? "h-[70px]" : "h-[600px] max-h-[85vh]"
        )}>
            {/* Header */}
            <div className="p-5 bg-gradient-to-r from-foreground to-foreground/90 text-background flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <div className="relative">
                        <div className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center border border-background/20">
                            <MessageCircle size={20} className="text-background" />
                        </div>
                        <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-foreground" />
                    </div>
                    <div>
                        <h3 className="font-serif text-lg leading-tight tracking-wide">Aravind Kannan</h3>
                        <p className="text-[10px] uppercase tracking-widest opacity-70">Always Online</p>
                    </div>
                </div>
                <div className="flex items-center gap-3">
                    <button onClick={() => setIsMinimized(!isMinimized)} className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-background/10 transition-colors">
                        {isMinimized ? <Maximize2 size={16} /> : <Minimize2 size={16} />}
                    </button>
                    <button onClick={() => setIsOpen(false)} className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-background/10 transition-colors">
                        <X size={16} />
                    </button>
                </div>
            </div>

            {!isMinimized && (
                <>
                    {/* Messages */}
                    <ScrollArea className="flex-1 px-4 py-6 bg-gradient-to-b from-secondary/5 to-secondary/20">
                        <div className="space-y-6">
                            {messages.map((m, i) => (
                                <div key={i} className={cn(
                                    "flex flex-col animate-fade-in-up",
                                    m.role === 'user' ? "items-end" : "items-start"
                                )} style={{ animationDelay: `${i * 0.05}s` }}>
                                    <div className={cn(
                                        "max-w-[85%] p-4 rounded-2xl text-sm leading-relaxed shadow-sm",
                                        m.role === 'user'
                                            ? "bg-foreground text-background rounded-tr-none"
                                            : "bg-background border border-border text-foreground rounded-tl-none"
                                    )}>
                                        {m.content}
                                    </div>
                                    <span className="text-[10px] mt-1 opacity-40 uppercase tracking-tighter">
                                        {m.role === 'user' ? "You" : "Assistant"}
                                    </span>
                                </div>
                            ))}
                            {isLoading && (
                                <div className="flex justify-start">
                                    <div className="bg-background border border-border p-4 rounded-2xl rounded-tl-none shadow-sm flex gap-1">
                                        <div className="w-1.5 h-1.5 bg-foreground/30 rounded-full animate-bounce" />
                                        <div className="w-1.5 h-1.5 bg-foreground/30 rounded-full animate-bounce [animation-delay:0.2s]" />
                                        <div className="w-1.5 h-1.5 bg-foreground/30 rounded-full animate-bounce [animation-delay:0.4s]" />
                                    </div>
                                </div>
                            )}
                            <div ref={messagesEndRef} />
                        </div>
                    </ScrollArea>

                    {/* Input */}
                    <div className="p-4 bg-background border-t border-border/50">
                        <div className="relative group">
                            <Input
                                placeholder="Write a message..."
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                                className="pr-12 py-6 bg-secondary/30 border-none focus-visible:ring-1 focus-visible:ring-foreground/20 rounded-xl"
                            />
                            <button
                                onClick={handleSend}
                                disabled={isLoading || !input.trim()}
                                className="absolute right-2 top-1/2 -translate-y-1/2 w-9 h-9 flex items-center justify-center bg-foreground text-background rounded-lg hover:scale-105 active:scale-95 disabled:opacity-30 disabled:hover:scale-100 transition-all duration-200"
                            >
                                <Send size={18} />
                            </button>
                        </div>
                        <p className="text-center text-[9px] text-muted-foreground mt-3 uppercase tracking-[0.2em] opacity-50">
                            Powered by Aravind Kannan AI
                        </p>
                    </div>
                </>
            )}
        </div>
    );
};

export default ChatBot;
