import { motion } from "framer-motion";
import { Layers, Zap, Globe, ArrowRight, Users, Building2, Megaphone } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const useCases = [
  {
    icon: Users,
    label: "Creators",
    desc: "Generate voiceovers, enhance podcasts, add multilingual dubbing effortlessly.",
    stat: "10x faster",
    statLabel: "audio production",
  },
  {
    icon: Building2,
    label: "Businesses",
    desc: "Analyze call center audio, detect sentiment, ensure compliance automatically.",
    stat: "95%",
    statLabel: "accuracy rate",
  },
  {
    icon: Megaphone,
    label: "Agencies",
    desc: "Scale audio production, deliver mastered content, streamline review workflows.",
    stat: "50+",
    statLabel: "languages supported",
  },
];

const techItems = [
  { icon: Layers, label: "Modular Pipeline", desc: "Mix and match AI modules for your exact workflow." },
  { icon: Zap, label: "Real-time Processing", desc: "Sub-second latency for live audio applications." },
  { icon: Globe, label: "Multi-language", desc: "50+ languages with native-quality pronunciation." },
];

const Product = () => (
  <div className="min-h-screen bg-background">
    <Navbar />

    {/* Hero - Split layout */}
    <section className="relative pt-32 pb-24 bg-noise overflow-hidden">
      <div className="absolute inset-0 bg-gradient-hero" />
      <div className="absolute top-1/2 right-0 w-[400px] h-[400px] -translate-y-1/2 translate-x-1/4">
        <div className="orbital-ring absolute inset-0 opacity-10" />
        <div className="orbital-ring absolute inset-8 opacity-5" style={{ animationDirection: "reverse" }} />
      </div>

      <div className="container relative z-10 mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
          <p className="text-sm font-semibold tracking-widest text-primary mb-4">PRODUCT</p>
          <h1 className="font-display text-5xl font-bold text-foreground md:text-7xl max-w-3xl leading-[1.1]">
            Meet <span className="font-serif-accent text-gradient-primary">Vexon</span>
            <br />
            Your AI Audio Brain
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-xl">
            A modular AI platform that transforms how you create, process, and analyze audio content.
          </p>
        </motion.div>
      </div>
    </section>

    {/* Use Cases - Cards with stats */}
    <section className="py-32">
      <div className="container mx-auto px-6">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-sm font-semibold tracking-widest text-accent mb-4"
        >
          USE CASES
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-4xl font-bold text-foreground md:text-5xl mb-16"
        >
          Built for <span className="font-serif-accent text-gradient-accent">every</span> workflow
        </motion.h2>

        <div className="grid gap-6 md:grid-cols-3">
          {useCases.map((uc, i) => (
            <motion.div
              key={uc.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.5 }}
              className="group relative overflow-hidden rounded-2xl border border-border/50 bg-gradient-card transition-all duration-500 hover:border-accent/30"
            >
              <div className="p-10">
                <div className="mb-6 inline-flex rounded-xl bg-accent/10 p-3 text-accent">
                  <uc.icon size={24} strokeWidth={1.5} />
                </div>
                <h3 className="font-display text-xl font-bold text-foreground mb-3">{uc.label}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-8">{uc.desc}</p>
                <span className="inline-flex items-center gap-1 text-sm font-medium text-accent opacity-0 group-hover:opacity-100 transition-all cursor-pointer">
                  Explore <ArrowRight size={14} />
                </span>
              </div>
              <div className="border-t border-border/50 px-10 py-5 bg-muted/20">
                <span className="font-display text-2xl font-bold text-foreground">{uc.stat}</span>
                <span className="ml-2 text-xs text-muted-foreground">{uc.statLabel}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Tech Stack */}
    <section className="py-32 bg-noise">
      <div className="absolute inset-0 bg-glow opacity-30" />
      <div className="container relative z-10 mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold tracking-widest text-primary mb-4">TECHNOLOGY</p>
          <h2 className="font-display text-4xl font-bold text-foreground md:text-5xl">
            Powered by <span className="font-serif-accent text-gradient-primary">Modular AI</span>
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3 max-w-4xl mx-auto">
          {techItems.map((t, i) => (
            <motion.div
              key={t.label}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass rounded-2xl p-8 text-center transition-all duration-500 hover:shadow-glow-primary"
            >
              <div className="mb-5 inline-flex rounded-xl bg-primary/10 p-4 text-primary">
                <t.icon size={28} strokeWidth={1.5} />
              </div>
              <h3 className="font-display text-lg font-semibold text-foreground mb-2">{t.label}</h3>
              <p className="text-sm text-muted-foreground">{t.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    <Footer />
  </div>
);

export default Product;
