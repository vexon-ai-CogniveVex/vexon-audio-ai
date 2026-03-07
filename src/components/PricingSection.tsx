import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { FiCheck, FiZap, FiStar } from "react-icons/fi";
import api from "@/lib/api";

// Fallback plans if API is unavailable
const fallbackPlans = [
  {
    slug: "basic",
    name: "Acoustic",
    price: 0,
    description: "Perfect for exploring the basics of neural audio.",
    features: ["5 Enhancement Credits", "Standard Quality (44.1kHz)", "Community Access"],
    popular: false,
    cta: "Start Free"
  },
  {
    slug: "pro",
    name: "Studio",
    price: 29.99,
    description: "The choice for professional creators and musicians.",
    features: ["Unlimited Enhancements", "Studio Quality (96kHz)", "Voice Synthesis Engine", "Priority Support"],
    popular: true,
    cta: "Launch Studio"
  },
  {
    slug: "enterprise",
    name: "Orchestral",
    price: 89.99,
    description: "Unprecedented power for teams and agencies.",
    features: ["Everything in Studio", "Technical API Access", "Custom Model Training", "Dedicated Architect"],
    popular: false,
    cta: "Scale Now"
  }
];

const PricingSection = () => {
  const navigate = useNavigate();
  const [plans, setPlans] = useState<any[]>(fallbackPlans);
  const [isLoading, setIsLoading] = useState(true);
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');

  useEffect(() => {
    const fetchPlans = async () => {
      try {
        const resp = await api.getPlans();
        if (resp.status === "success" && resp.data && resp.data.length > 0) {
          // Map API plans to display format, preserve popular flag for middle plan
          const mapped = resp.data.map((p: any, i: number) => ({
            slug: p.slug,
            name: p.name,
            price: p.price,
            description: p.description,
            features: p.features || [],
            popular: i === 1 || p.slug === "pro",
            cta: p.price === 0 ? "Start Free" : i === 1 ? "Launch Studio" : "Scale Now"
          }));
          setPlans(mapped);
        }
      } catch (err) {
        // Keep fallback plans on error
      } finally {
        setIsLoading(false);
      }
    };
    fetchPlans();
  }, []);

  const handlePlanClick = (slug: string) => {
    window.open(`/dashboard/checkout/${slug}`, '_blank');
  };

  return (
    <section className="relative py-40 bg-[#0a0a0a] overflow-hidden">
      {/* Decorative Gradients */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px]" />

      <div className="container relative z-10 mx-auto px-6">
        <div className="text-center mb-24">
          <span className="text-[10px] tracking-[0.5em] uppercase text-secondary font-bold mb-4 block" >
            Investment
          </span>
          <h2 className="font-display text-5xl md:text-6xl font-bold text-white mb-6">
            Choose your <span className="text-white/30 italic text-gradient-accent">Frequency.</span>
          </h2>
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

        {/* Billing Toggle */}
        <div className="flex justify-center mb-16">
          <div className="relative p-1 bg-white/[0.03] border border-white/5 rounded-2xl flex items-center gap-2">
            <button
              onClick={() => setBillingCycle('monthly')}
              className={`px-8 py-3 rounded-xl text-sm font-bold transition-all duration-300 ${billingCycle === 'monthly' ? 'bg-white text-black shadow-xl' : 'text-white/40 hover:text-white'
                }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBillingCycle('yearly')}
              className={`px-8 py-3 rounded-xl text-sm font-bold transition-all duration-300 relative ${billingCycle === 'yearly' ? 'bg-white text-black shadow-xl' : 'text-white/40 hover:text-white'
                }`}
            >
              Yearly
              <span className="absolute -top-3 -right-3 bg-primary text-black text-[9px] font-black px-2 py-1 rounded-full border-2 border-[#0a0a0a] animate-pulse">
                SAVE 20%
              </span>
            </button>
          </div>
        </div>

        <div className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto items-center">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.slug || plan.name}
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
                <span className="font-display text-6xl font-bold text-white">
                  ${billingCycle === 'yearly' && plan.price > 0
                    ? ((plan.price * 12 * 0.8) / 12).toFixed(0)
                    : typeof plan.price === 'number' ? plan.price.toFixed(0) : plan.price}
                </span>
                <span className="text-white/30 font-light lowercase">
                  /{billingCycle === 'monthly' ? 'month' : 'month'}
                </span>
              </div>
              {billingCycle === 'yearly' && plan.price > 0 && (
                <div className="mb-6 -mt-8">
                  <span className="text-primary text-[10px] font-bold tracking-wider uppercase">
                    Billed ${(plan.price * 12 * 0.8).toFixed(0)} annually
                  </span>
                </div>
              )}

              <div className="w-full h-px bg-white/5 mb-10" />

              <ul className="space-y-5 mb-12 flex-grow">
                {plan.features.map((feature: string) => (
                  <li key={feature} className="flex items-start gap-4 text-white/50 text-sm font-light">
                    <FiCheck className="text-primary mt-1 shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                onClick={() => handlePlanClick(plan.slug)}
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
};

export default PricingSection;
