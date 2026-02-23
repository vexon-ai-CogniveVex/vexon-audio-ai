import { motion } from "framer-motion";
import { Mic, Headphones, BarChart3, ArrowRight } from "lucide-react";

const features = [
  {
    icon: Mic,
    title: "Generate",
    description: "Synthetic voices, multilingual dubbing, emotion-aware audio production at scale.",
    accent: "from-primary to-purple-400",
    iconBg: "bg-primary/10 text-primary",
  },
  {
    icon: Headphones,
    title: "Enhance",
    description: "Noise reduction, mastering, filler word removal — studio quality in seconds.",
    accent: "from-secondary to-orange-400",
    iconBg: "bg-secondary/10 text-secondary",
  },
  {
    icon: BarChart3,
    title: "Understand",
    description: "Transcription, emotion detection, compliance insights powered by AI.",
    accent: "from-accent to-yellow-300",
    iconBg: "bg-accent/10 text-accent",
  },
];

const item = {
  hidden: { opacity: 0, y: 30 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  }),
};

const FeaturesSection = () => (
  <section className="relative py-32 bg-noise">
    <div className="absolute inset-0 bg-glow opacity-50" />
    <div className="container relative z-10 mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-20"
      >
        <p className="text-sm font-semibold tracking-widest text-primary mb-4">CAPABILITIES</p>
        <h2 className="font-display text-4xl font-bold text-foreground md:text-6xl max-w-2xl">
          What <span className="font-serif-accent text-gradient-primary">Vexon</span> can do
        </h2>
      </motion.div>

      <div className="grid gap-6 md:grid-cols-3">
        {features.map((f, i) => (
          <motion.div
            key={f.title}
            custom={i}
            variants={item}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="group relative overflow-hidden rounded-2xl border border-border/50 bg-gradient-card p-10 transition-all duration-500 hover:border-primary/40 hover:shadow-glow-primary"
          >
            {/* Gradient line at top */}
            <div className={`absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r ${f.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

            <div className={`mb-8 inline-flex rounded-xl p-4 ${f.iconBg}`}>
              <f.icon size={28} strokeWidth={1.5} />
            </div>
            <h3 className="mb-4 font-display text-2xl font-bold text-foreground">
              {f.title}
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              {f.description}
            </p>
            <span className="inline-flex items-center gap-1 text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
              Learn more <ArrowRight size={14} />
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default FeaturesSection;
