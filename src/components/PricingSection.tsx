import { motion } from "framer-motion";
import { FiCheck, FiZap, FiStar } from "react-icons/fi";

const plans = [
  {
    name: "Acoustic",
    price: "0",
    description: "Perfect for exploring the basics of neural audio.",
    features: ["5 Enhancement Credits", "Standard Quality (44.1kHz)", "Community Access"],
    popular: false,
    cta: "Start Free"
  },
  {
    name: "Studio",
    price: "29",
    description: "The choice for professional creators and musicians.",
    features: ["Unlimited Enhancements", "Studio Quality (96kHz)", "Voice Synthesis Engine", "Priority Support"],
    popular: true,
    cta: "Launch Studio"
  },
  {
    name: "Orchestral",
    price: "89",
    description: "Unprecedented power for teams and agencies.",
    features: ["Everything in Studio", "Technical API Access", "Custom Model Training", "Dedicated Architect"],
    popular: false,
    cta: "Scale Now"
  }
];

const PricingSection = () => (
  <section className="relative py-40 bg-[#0a0a0a] overflow-hidden">
    {/* Decorative Gradients */}
    <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px]" />
    <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-[120px]" />

    <div className="container relative z-10 mx-auto px-6">
      <div className="text-center mb-24">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-[10px] tracking-[0.5em] uppercase text-primary font-bold mb-4 block"
        >
          Investment
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="font-display text-5xl md:text-6xl font-bold text-white mb-6"
        >
          Choose your <span className="text-white/30 italic">Frequency.</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-white/40 max-w-xl mx-auto font-light text-lg"
        >
          Simple, transparent commitments for every stage of your creative journey.
        </motion.p>
      </div>

      <div className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto items-center">
        {plans.map((plan, i) => (
          <motion.div
            key={plan.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.8 }}
            whileHover={{ y: -15 }}
            className={`relative flex flex-col h-full rounded-[2.5rem] p-10 backdrop-blur-3xl transition-all duration-500 ${plan.popular
                ? "bg-white/[0.05] border border-primary/30 py-16"
                : "bg-white/[0.02] border border-white/5 py-12"
              }`}
          >
            {plan.popular && (
              <div className="absolute -top-6 left-1/2 -translate-x-1/2 rounded-full bg-primary px-6 py-2 flex items-center gap-2 text-[10px] font-bold tracking-[0.2em] text-black">
                <FiStar className="text-xs" />
                RECOMMENDED
              </div>
            )}

            <div className="mb-10">
              <h3 className="font-display text-2xl font-bold text-white mb-2">{plan.name}</h3>
              <p className="text-white/30 text-sm font-light leading-relaxed">{plan.description}</p>
            </div>

            <div className="mb-10 flex items-baseline gap-2">
              <span className="font-display text-6xl font-bold text-white">${plan.price}</span>
              <span className="text-white/30 font-light lowercase">/period</span>
            </div>

            <div className="w-full h-px bg-white/5 mb-10" />

            <ul className="space-y-5 mb-12 flex-grow">
              {plan.features.map((feature) => (
                <li key={feature} className="flex items-start gap-4 text-white/50 text-sm font-light">
                  <FiCheck className="text-primary mt-1 shrink-0" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <button
              className={`w-full rounded-2xl py-5 text-sm font-bold tracking-[0.1em] uppercase transition-all flex items-center justify-center gap-2 ${plan.popular
                  ? "bg-white text-black hover:bg-primary transition-colors"
                  : "bg-white/5 text-white border border-white/10 hover:bg-white/10"
                }`}
            >
              {plan.cta}
              {plan.popular && <FiZap className="text-lg" />}
            </button>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default PricingSection;

