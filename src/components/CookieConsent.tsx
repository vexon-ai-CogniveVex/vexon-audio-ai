import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiShield, FiX } from "react-icons/fi";

const CookieConsent = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const consent = localStorage.getItem("vexon_cookie_consent");
        if (!consent) {
            const timer = setTimeout(() => setIsVisible(true), 2000);
            return () => clearTimeout(timer);
        }
    }, []);

    const handleAccept = () => {
        localStorage.setItem("vexon_cookie_consent", "true");
        setIsVisible(false);
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 100, opacity: 0 }}
                    className="fixed bottom-6 left-6 right-6 md:left-8 md:right-auto md:max-w-md z-[100]"
                >
                    <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-black/60 backdrop-blur-2xl p-6 shadow-2xl">
                        <div className="absolute top-0 left-0 w-1 h-full bg-primary" />

                        <div className="flex items-start gap-4">
                            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                                <FiShield size={20} />
                            </div>

                            <div className="flex-grow">
                                <h4 className="text-sm font-bold mb-1 tracking-tight">Neural Cookie Protocol</h4>
                                <p className="text-xs text-white/40 leading-relaxed mb-4">
                                    We use encrypted identifiers to optimize your neural synthesis experience and maintain session stability.
                                </p>

                                <div className="flex items-center gap-3">
                                    <button
                                        onClick={handleAccept}
                                        className="px-6 h-10 rounded-xl bg-white text-black text-[10px] font-bold uppercase tracking-widest hover:bg-primary transition-colors"
                                    >
                                        Acknowledge
                                    </button>
                                    <button
                                        onClick={() => setIsVisible(false)}
                                        className="text-[10px] font-bold text-white/20 hover:text-white uppercase tracking-widest transition-colors"
                                    >
                                        Decline
                                    </button>
                                </div>
                            </div>
                        </div>

                        <button
                            onClick={() => setIsVisible(false)}
                            className="absolute top-4 right-4 text-white/20 hover:text-white transition-colors"
                        >
                            <FiX size={16} />
                        </button>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default CookieConsent;
