import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiMessageSquare, FiX, FiSend, FiActivity, FiZap, FiCpu } from "react-icons/fi";
import api from "@/lib/api";

const SYSTEM_PROMPT = `
You are Vexon AI Support, a highly advanced neural assistant for Vexon AI.
Vexon AI is the world's first AI-powered neural audio synthesis platform.

Key Product Features:
- Neural Lab: Real-time high-definition audio synthesis using deep learning.
- Spectral Pro: Advanced frequency modulation and waveform manipulation.
- Voice Cloning: High-fidelity identity transfer for vocal assets.
- Integrated SaaS Dashboard: Subscription management, usage analytics, and project hub.

Industrial Utility & Use Cases:
- Acoustic Creators: Hyper-realistic voiceovers and studio-grade podcasts.
- Enterprise Logic: Global audio analytics with sentiment and intent detection.
- Media Networks: Multi-language synthesis for international distribution (60+ dialects).

Technical Foundation:
- Neural Pipeline: Modular architecture for custom spectral routing.
- Zero-Latency PNE: Proprietary Neural Engine for real-time 32-bit float processing.
- Global Synthesis: Cloud-to-edge synchronization.
- SHA-256 secure handshake protocols.

Instructions:
- Be helpful, professional, and futuristic. Use terminology like "neural", "frequency", "protocol", "uplink", "spectral".
- If you don't know something about Vexon, tell the user to contact the core engineers through the contact page.
- Keep responses concise.
`;

const ChatWidget = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<{ role: string, content: string }[]>([
        { role: "assistant", content: "Neural link established. How can I assist with your Vexon uplink today?" }
    ]);
    const [input, setInput] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const scrollRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
    }, [messages, isOpen]);

    const handleSendMessage = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!input.trim() || isLoading) return;

        const userMessage = { role: "user", content: input };
        setMessages(prev => [...prev, userMessage]);
        setInput("");
        setIsLoading(true);

        try {
            const chatHistory = [
                { role: "system", content: SYSTEM_PROMPT },
                ...messages,
                userMessage
            ];

            const resp = await api.generateChat(chatHistory);

            if (resp.status === "success" && resp.data?.response) {
                setMessages(prev => [...prev, { role: "assistant", content: resp.data.response }]);
            } else {
                setMessages(prev => [...prev, { role: "assistant", content: "Signal interference detected. Handshake failed." }]);
            }
        } catch (err) {
            setMessages(prev => [...prev, { role: "assistant", content: "Neural uplink severed. Please try again." }]);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="fixed bottom-6 right-24 z-[100]">
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        className="mb-6 w-[350px] sm:w-[400px] h-[500px] rounded-[2.5rem] border border-white/10 bg-black/80 backdrop-blur-2xl shadow-2xl flex flex-col overflow-hidden"
                    >
                        {/* Header */}
                        <div className="p-6 border-b border-white/5 bg-gradient-to-r from-primary/20 to-purple-600/20 flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center shadow-lg shadow-primary/20">
                                    <FiCpu className="text-white" />
                                </div>
                                <div>
                                    <h4 className="text-sm font-bold tracking-tight">Vexon Neural Core</h4>
                                    <div className="flex items-center gap-1.5">
                                        <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                                        <span className="text-[10px] text-white/40 uppercase font-bold tracking-widest">Active</span>
                                    </div>
                                </div>
                            </div>
                            <button
                                onClick={() => setIsOpen(false)}
                                className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors"
                            >
                                <FiX size={16} />
                            </button>
                        </div>

                        {/* Messages */}
                        <div
                            ref={scrollRef}
                            className="flex-grow p-6 space-y-4 overflow-y-auto scrollbar-hide"
                        >
                            {messages.map((msg, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                                >
                                    <div className={`max-w-[85%] p-4 rounded-2xl text-sm leading-relaxed ${msg.role === "user"
                                        ? "bg-primary text-white rounded-tr-none"
                                        : "bg-white/5 text-white/70 border border-white/5 rounded-tl-none"
                                        }`}>
                                        {msg.content}
                                    </div>
                                </motion.div>
                            ))}
                            {isLoading && (
                                <div className="flex justify-start">
                                    <div className="bg-white/5 p-4 rounded-2xl border border-white/5 rounded-tl-none flex items-center gap-2">
                                        <div className="w-1 h-1 bg-white/40 rounded-full animate-bounce" />
                                        <div className="w-1 h-1 bg-white/40 rounded-full animate-bounce [animation-delay:0.2s]" />
                                        <div className="w-1 h-1 bg-white/40 rounded-full animate-bounce [animation-delay:0.4s]" />
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Input */}
                        <form onSubmit={handleSendMessage} className="p-4 bg-white/[0.02] border-t border-white/5">
                            <div className="relative group">
                                <input
                                    type="text"
                                    value={input}
                                    onChange={(e) => setInput(e.target.value)}
                                    placeholder="SYNTHESIZE COMMAND..."
                                    className="w-full h-12 bg-white/5 border border-white/5 rounded-xl pl-4 pr-12 text-sm focus:border-primary/50 outline-none transition-all"
                                />
                                <button
                                    type="submit"
                                    disabled={!input.trim() || isLoading}
                                    className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-lg bg-white text-black flex items-center justify-center hover:bg-primary transition-colors disabled:opacity-30"
                                >
                                    <FiSend size={14} />
                                </button>
                            </div>
                        </form>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Toggle Button */}
            <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsOpen(!isOpen)}
                className={`w-14 h-14 rounded-2xl flex items-center justify-center shadow-2xl transition-all duration-500 ${isOpen ? "bg-white text-black rotate-90" : "bg-primary text-white"
                    }`}
            >
                {isOpen ? <FiX size={24} /> : <FiMessageSquare size={24} />}
                {!isOpen && (
                    <div className="absolute -top-1 -right-1 w-4 h-4 bg-purple-600 rounded-full border-2 border-black flex items-center justify-center">
                        <FiActivity size={8} className="text-white animate-pulse" />
                    </div>
                )}
            </motion.button>
        </div>
    );
};

export default ChatWidget;
