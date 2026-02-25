import { motion } from "framer-motion";
import { FiActivity } from "react-icons/fi";
import { Link } from "react-router-dom";

interface LogoProps {
    className?: string;
    size?: "sm" | "md" | "lg";
    iconOnly?: boolean;
    to?: string;
}

const Logo = ({ className = "", size = "lg", iconOnly = false, to = "/" }: LogoProps) => {
    const sizes = {
        sm: "w-16 h-8",
        md: "w-24 h-16",
        lg: "w-32 h-24",
    };

    const iconSizes = {
        sm: "w-8 h-8",
        md: "w-12 h-12",
        lg: "w-16 h-16",
    };

    const content = (
        <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`${iconOnly ? iconSizes[size] : sizes[size]} rounded-xl flex items-center justify-center overflow-hidden relative ${iconOnly ? 'bg-primary/10 border border-white/10' : ''}`}
        >
            <img src="/logo.webp" alt="Logo" className="w-full h-full object-cover" />

            {/* Animated Scanning Line */}
            <motion.div
                animate={{
                    top: ["-100%", "200%"],
                }}
                transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "linear",
                }}
                className="absolute left-0 right-0 h-1/2 bg-white/20 blur-md pointer-events-none"
            />
        </motion.div>
    );

    if (!to) return <div className={`flex items-center justify-center ${className}`}>{content}</div>;

    return (
        <Link to={to} className={`group flex items-center justify-center ${className}`}>
            {content}
        </Link>
    );
};

export default Logo;
