import { motion } from "framer-motion";
import heroImage from "@/assets/hero-waveform.jpg";

const HeroSection = () => (
  <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-noise">
    {/* Background layers */}
    <div className="absolute inset-0">
      <img src={heroImage} alt="" className="h-full w-full object-cover opacity-30" />
      <div className="absolute inset-0 bg-gradient-hero" />
    </div>

    {/* Orbital decoration */}
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] md:w-[800px] md:h-[800px] opacity-20">
      <div className="orbital-ring absolute inset-0" />
      <div className="orbital-ring absolute inset-8" style={{ animationDirection: "reverse", animationDuration: "30s" }} />
      <div className="orbital-ring absolute inset-16" style={{ animationDuration: "25s" }} />
    </div>

    {/* Content */}
    <div className="container relative z-10 mx-auto px-6 pt-20 pb-24">
      <div className="mx-auto max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="mb-8 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-medium tracking-widest text-primary">
            <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
            EARLY ACCESS NOW OPEN
          </span>

          <h1 className="mt-6 font-display text-5xl font-bold leading-[1.1] tracking-tight text-foreground sm:text-6xl md:text-8xl">
            From Sound
            <br />
            to <span className="font-serif-accent text-gradient-primary">Sense</span>
          </h1>

          <p className="mx-auto mt-8 max-w-xl text-lg leading-relaxed text-muted-foreground md:text-xl">
            Vexon helps businesses and creators generate, enhance, and understand
            audio like never before.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mt-12 flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
        >
          <button className="group relative rounded-xl bg-primary px-8 py-4 font-display text-base font-semibold text-primary-foreground transition-all hover:shadow-glow-primary hover:scale-[1.02] active:scale-[0.98]">
            Join Early Access
            <span className="absolute inset-0 rounded-xl" style={{ animation: "pulse-glow 3s ease-in-out infinite" }} />
          </button>
          <button className="rounded-xl border border-border/80 px-8 py-4 font-display text-base font-semibold text-foreground transition-all hover:bg-muted hover:border-muted-foreground/20">
            Watch Demo →
          </button>
        </motion.div>

        {/* Waveform visualizer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 1.2 }}
          className="mt-20 flex items-end justify-center gap-[2px]"
        >
          {Array.from({ length: 80 }).map((_, i) => {
            const center = 40;
            const dist = Math.abs(i - center);
            const maxH = Math.max(6, 40 - dist * 0.8);
            return (
              <span
                key={i}
                className="waveform-line opacity-60"
                style={{
                  animationDelay: `${i * 0.03}s`,
                  height: maxH,
                  width: 2,
                }}
              />
            );
          })}
        </motion.div>
      </div>
    </div>

    {/* Bottom fade */}
    <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
  </section>
);

export default HeroSection;
