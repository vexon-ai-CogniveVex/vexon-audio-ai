import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import heroImage from "@/assets/images/hero_abstract_audio_ai_1771846585741.png";
import { Link } from "react-router-dom";
import { FiArrowRight, FiPlayCircle } from "react-icons/fi";

const HeroSection = () => {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);
  const y = useTransform(scrollYProgress, [0, 0.5], [0, -100]);

  return (
    <section ref={targetRef} className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#050505]">
      {/* Background with parallax effect */}
      <motion.div style={{ opacity, scale }} className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#050505]/50 to-[#050505] z-10" />
        <img
          src={heroImage}
          alt="Abstract Audio AI"
          className="h-full w-full object-cover opacity-60"
        />

        {/* Animated Orbs */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px]"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-[150px]"
        />
      </motion.div>

      {/* Content */}
      <div className="container relative z-20 mx-auto px-6 pt-20">
        <motion.div
          style={{ y, opacity }}
          className="mx-auto max-w-5xl text-center"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium tracking-[0.2em] text-white/70 backdrop-blur-md">
              <span className="h-1 w-1 rounded-full bg-primary shadow-[0_0_8px_rgba(255,255,255,0.8)]" />
              THE FUTURE OF AUDIO INTELLIGENCE
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="mt-8 font-display text-6xl font-bold leading-[1.05] tracking-tight text-white sm:text-7xl md:text-9xl"
          >
            Sculpting <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-purple-400 to-blue-400">Silence</span>
            <br />
            into Soul.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="mx-auto mt-10 max-w-2xl text-lg leading-relaxed text-white/50 md:text-xl font-light"
          >
            Vexon transcends traditional processing. Harness advanced neural waves to generate, refine, and experience audio with unprecedented clarity and emotion.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
            className="mt-14 flex flex-col items-center gap-6 sm:flex-row sm:justify-center"
          >
            <Link to="/signup" className="group relative flex items-center gap-2 overflow-hidden rounded-full bg-white px-10 py-5 font-display text-sm font-bold text-black transition-all hover:pr-12 active:scale-95">
              <span>Initialize Vexon</span>
              <FiArrowRight className="text-lg transition-transform group-hover:translate-x-1" />
              <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-primary to-purple-500 scale-x-0 transition-transform group-hover:scale-x-100" />
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/20"
      >
        <span className="text-[10px] tracking-[0.3em] uppercase">Scroll to explore</span>
        <div className="h-12 w-[1px] bg-gradient-to-b from-white/40 to-transparent" />
      </motion.div>
    </section>
  );
};

export default HeroSection;

