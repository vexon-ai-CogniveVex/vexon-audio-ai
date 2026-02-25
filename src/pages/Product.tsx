import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FiLayers, FiZap, FiGlobe, FiArrowRight, FiUsers, FiBriefcase, FiCast, FiCpu } from "react-icons/fi";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import productImage from "@/assets/images/product_sleek_interface_abstract_1771846626569.png";

const useCases = [
  {
    icon: FiUsers,
    label: "Acoustic Creators",
    desc: "Generate hyper-realistic voiceovers and enhance studio-grade podcasts with sub-millisecond precision.",
    stat: "12x",
    statLabel: "Production Velocity",
    color: "secondary",
  },
  {
    icon: FiBriefcase,
    label: "Enterprise Logic",
    desc: "Scale audio analytics across global infrastructure. Detect sentiment and intent with quantum accuracy.",
    stat: "99.9%",
    statLabel: "Neural Precision",
    color: "primary",
  },
  {
    icon: FiCast,
    label: "Media Networks",
    desc: "Broadcast-ready mastering and multi-language synthesis for international content distribution.",
    stat: "60+",
    statLabel: "Native Dialects",
    color: "accent",
  },
];

const techSpecs = [
  { icon: FiLayers, label: "Neural Pipeline", desc: "A modular architecture allowing for custom spectral routing and model injection.", color: "primary" },
  { icon: FiCpu, label: "Zero-Latency PNE", desc: "Proprietary Neural Engine capable of real-time 32-bit float processing.", color: "secondary" },
  { icon: FiGlobe, label: "Global Synthesis", desc: "Cross-platform cloud-to-edge synchronization for consistent audio performance.", color: "accent" },
];

const Product = () => (
  <div className="min-h-screen bg-[#050505] text-white">
    <Navbar />

    {/* Product Hero - High Contrast Split */}
    <section className="relative pt-48 pb-32 overflow-hidden border-b border-white/5">
      <div className="container relative z-10 mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="flex-1"
          >
            <span className="text-[10px] tracking-[0.5em] uppercase text-secondary font-bold mb-8 block">Project Vexon</span>
            <h1 className="font-display text-5xl font-bold leading-[1.05] tracking-tight text-white sm:text-7xl md:text-8xl mb-10">
              The Architecture of <br />
              <span className="text-white/30 italic font-light text-gradient-accent">Pure Sound.</span>
            </h1>
            <p className="max-w-xl text-white/40 text-xl font-light leading-relaxed mb-12">
              Vexon is more than a tool—it's a high-performance neural processing ecosystem designed to bridge the gap between human creativity and AI precision.
            </p>
            <div className="flex items-center gap-8">
              <button className="rounded-full bg-white px-10 py-5 font-bold text-black hover:bg-primary transition-colors tracking-widest uppercase text-xs">
                Initialize System
              </button>
              <Link to="/technology" className="text-[10px] tracking-[0.3em] uppercase text-white/20 font-bold underline underline-offset-8 cursor-pointer hover:text-white transition-colors">Technical Briefing</Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="flex-1 relative"
          >
            <div className="absolute inset-x-0 h-[200px] bg-secondary/20 blur-[100px] opacity-30 rounded-full top-1/2 -translate-y-1/2" />
            <div className="relative overflow-hidden rounded-[3rem] border border-white/10 p-4 bg-white/5 backdrop-blur-2xl">
              <img src={productImage} alt="Vexon Interface" className="w-full h-auto rounded-[2.5rem] grayscale group-hover:grayscale-0 transition-all duration-700" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>

    {/* Use Case Matrix */}
    <section className="py-40">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-end justify-between mb-24 gap-8">
          <div className="max-w-2xl">
            <span className="text-[10px] tracking-[0.4em] uppercase text-primary font-bold mb-6 block">Industrial Utility</span>
            <h2 className="font-display text-5xl md:text-6xl font-bold text-white leading-tight">
              One Engine. <br />
              <span className="text-white/30 italic text-gradient-accent">infinite Scenarios.</span>
            </h2>
          </div>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {useCases.map((uc, i) => (
            <motion.div
              key={uc.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.8 }}
              className="group relative flex flex-col h-full rounded-[2.5rem] border border-white/5 bg-white/[0.02] p-12 transition-all hover:bg-white/[0.04]"
            >
              <div className={`mb-12 inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-${uc.color}/5 text-${uc.color}`}>
                <uc.icon size={28} />
              </div>

              <h3 className="font-display text-2xl font-bold text-white mb-4">{uc.label}</h3>
              <p className="text-white/30 font-light leading-relaxed mb-12 flex-grow">{uc.desc}</p>

              <div className="pt-8 border-t border-white/5 flex items-baseline gap-4">
                <span className="font-display text-4xl font-bold text-white">{uc.stat}</span>
                <span className={`text-[10px] tracking-[0.2em] font-bold text-${uc.color} uppercase`}>{uc.statLabel}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Tech Specs Terminal */}
    <section className="py-40 bg-[#0a0a0a] relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="container mx-auto px-6">
        <div className="text-center mb-24">
          <span className="text-[10px] tracking-[0.5em] uppercase text-primary font-bold mb-4 block">Core Protocol</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white">Technological Underpinnings</h2>
        </div>

        <div className="grid gap-12 md:grid-cols-3 max-w-6xl mx-auto">
          {techSpecs.map((spec, i) => (
            <motion.div
              key={spec.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center group"
            >
              <div className={`mb-8 inline-flex items-center justify-center w-20 h-20 rounded-full border border-white/5 bg-white/[0.02] text-white/40 group-hover:text-${spec.color} group-hover:border-${spec.color}/50 transition-all duration-500`}>
                <spec.icon size={32} />
              </div>
              <h3 className="font-display text-xl font-bold text-white mb-4">{spec.label}</h3>
              <p className="text-white/30 font-light leading-relaxed">{spec.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    <Footer />
  </div>
);

export default Product;

