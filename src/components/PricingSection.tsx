import { motion } from "framer-motion";
import { Check, Sparkles } from "lucide-react";

const plans = [
  { name: "Starter", price: "Free", period: "", features: ["Limited minutes", "Watermarked output", "Basic support"], highlight: false },
  { name: "Creator", price: "$19", period: "/mo", features: ["Unlimited enhancement", "Voice generation", "Priority support"], highlight: true },
  { name: "Business", price: "$49", period: "/mo", features: ["Analytics dashboard", "Multilingual dubbing", "Team access"], highlight: false },
  { name: "Enterprise", price: "Custom", period: "", features: ["Compliance-ready", "API integrations", "Dedicated support"], highlight: false },
];

const PricingSection = () => (
  <section className="relative py-32 bg-noise">
    <div className="absolute inset-0 bg-glow-accent opacity-40" />
    <div className="container relative z-10 mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-20"
      >
        <p className="text-sm font-semibold tracking-widest text-accent mb-4">PRICING</p>
        <h2 className="font-display text-4xl font-bold text-foreground md:text-6xl">
          Early Access <span className="font-serif-accent text-gradient-accent">Special</span>
        </h2>
      </motion.div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto">
        {plans.map((plan, i) => (
          <motion.div
            key={plan.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            className={`relative overflow-hidden rounded-2xl p-8 transition-all duration-500 ${
              plan.highlight
                ? "border-2 border-primary/60 bg-primary/5 shadow-glow-primary scale-[1.02]"
                : "border border-border/50 bg-gradient-card hover:border-primary/30"
            }`}
          >
            {plan.highlight && (
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-primary via-purple-400 to-primary" />
            )}
            {plan.highlight && (
              <span className="mb-6 inline-flex items-center gap-1 rounded-full bg-primary/15 px-3 py-1 text-xs font-bold text-primary">
                <Sparkles size={12} /> MOST POPULAR
              </span>
            )}
            <h3 className="font-display text-lg font-semibold text-foreground">{plan.name}</h3>
            <div className="mt-4 flex items-baseline gap-1">
              <span className="font-display text-4xl font-bold text-foreground">{plan.price}</span>
              {plan.period && <span className="text-sm text-muted-foreground">{plan.period}</span>}
            </div>
            <div className="divider-gradient my-6" />
            <ul className="space-y-3 mb-8">
              {plan.features.map((f) => (
                <li key={f} className="flex items-center gap-3 text-sm text-muted-foreground">
                  <Check size={14} className="text-primary shrink-0" />
                  {f}
                </li>
              ))}
            </ul>
            <button
              className={`w-full rounded-xl px-4 py-3 text-sm font-semibold transition-all ${
                plan.highlight
                  ? "bg-primary text-primary-foreground hover:shadow-glow-primary hover:scale-[1.02] active:scale-[0.98]"
                  : "border border-border bg-muted/50 text-foreground hover:border-primary/40 hover:bg-muted"
              }`}
            >
              Get Started
            </button>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default PricingSection;
