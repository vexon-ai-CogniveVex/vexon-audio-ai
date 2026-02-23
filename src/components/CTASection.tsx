import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const CTASection = () => (
  <section className="relative overflow-hidden py-32 bg-noise">
    {/* Decorative circles */}
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] md:w-[700px] md:h-[700px]">
      <div className="orbital-ring absolute inset-0 opacity-20" />
      <div className="orbital-ring absolute inset-12 opacity-10" style={{ animationDirection: "reverse" }} />
    </div>
    <div className="absolute inset-0 bg-glow opacity-60" />

    <div className="container relative z-10 mx-auto px-6 text-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <h2 className="mx-auto max-w-3xl font-display text-4xl font-bold leading-tight text-foreground md:text-6xl">
          Be among the first to shape the{" "}
          <span className="font-serif-accent text-gradient-primary">future</span> of audio AI
        </h2>
        <p className="mx-auto mt-6 max-w-lg text-lg text-muted-foreground">
          Join our early access program and get exclusive benefits, priority support, and influence Vexon's roadmap.
        </p>
        <motion.button
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          className="mt-12 inline-flex items-center gap-2 rounded-xl bg-secondary px-10 py-5 font-display text-lg font-bold text-secondary-foreground shadow-glow-accent transition-all"
          style={{ animation: "pulse-glow 4s ease-in-out infinite" }}
        >
          Reserve Your Spot
          <ArrowRight size={20} />
        </motion.button>
      </motion.div>
    </div>
  </section>
);

export default CTASection;
