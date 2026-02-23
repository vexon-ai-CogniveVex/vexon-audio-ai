import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiArrowUp } from "react-icons/fi";

const ScrollToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.button
                    initial={{ opacity: 0, scale: 0.5, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.5, y: 20 }}
                    onClick={scrollToTop}
                    className="fixed bottom-10 right-10 z-50 flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-black/40 text-white backdrop-blur-2xl transition-all hover:border-primary/50 hover:bg-black/60 group shadow-2xl"
                    aria-label="Scroll to top"
                >
                    <FiArrowUp className="text-xl transition-transform group-hover:-translate-y-1" />
                </motion.button>
            )}
        </AnimatePresence>
    );
};

export default ScrollToTop;
