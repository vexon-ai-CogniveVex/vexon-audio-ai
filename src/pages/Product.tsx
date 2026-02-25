import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FiLayers, FiZap, FiGlobe, FiArrowRight, FiUsers, FiBriefcase, FiCast, FiCpu, FiDatabase, FiActivity, FiServer } from "react-icons/fi";
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

const techStack = [
  {
    id: "nemo",
    name: "NVIDIA NeMo Framework",
    role: "The AI Model Factory",
    desc: "Our core R&D lab for building, customizing, and deploying proprietary generative AI, speech, and NLP models. It powers everything from emotive TTS to global voice cloning.",
    features: ["Neural Voice Synthesis", "Global Dubbing", "Autonomous Mastering"],
    color: "primary",
  },
  {
    id: "riva",
    name: "NVIDIA Riva",
    role: "Real-Time Speech Engine",
    desc: "A GPU-accelerated SDK for industrial-grade speech processing. Riva ensures sub-second latency and high throughput for our enterprise Voice Agents.",
    features: ["Sub-second Latency", "High Concurrency", "Production-Ready STT/TTS"],
    color: "secondary",
  },
  {
    id: "triton",
    name: "Triton & TensorRT",
    role: "Deployment & Optimization",
    desc: "The unified backbone for scaling our entire multi-modal pipeline. TensorRT optimizes for maximum performance while Triton handles infinite scalability.",
    features: ["Unified Inference Server", "TensorRT Optimization", "Infinite Auto-Scaling"],
    color: "accent",
  },
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
              Vexon is more than a tool—it's a high-performance neural processing ecosystem built on NVIDIA's state-of-the-art Conversational AI stack.
            </p>
            <div className="flex items-center gap-8">
              <a
                href="/dashboard"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-white px-10 py-5 font-bold text-black hover:bg-primary transition-colors tracking-widest uppercase text-xs shadow-[0_0_30px_rgba(255,100,100,0.2)] flex items-center gap-3"
              >
                Launch Dashboard
                <FiArrowRight />
              </a>
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
              <img src={productImage} alt="Vexon Interface" className="w-full h-auto rounded-[2.5rem] grayscale group-hover:grayscale-0 transition-all duration-700 shadow-2xl" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>

    {/* The AudioTensor Pipeline - NEW TECHNICAL SECTION */}
    <section className="py-40 bg-[#080808] relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-secondary/20 rounded-full blur-[120px]" />
      </div>

      <div className="container relative z-10 mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-32">
          <span className="text-[10px] tracking-[0.5em] uppercase text-accent font-bold mb-8 block underline underline-offset-8 decoration-accent/30">Infrastructure Matrix</span>
          <h2 className="font-display text-4xl md:text-6xl font-bold text-white mb-10 leading-[1.1]">
            Powered by the <br />
            <span className="text-white/30 italic font-light text-gradient-accent leading-normal">NVIDIA AudioTensor Pipeline.</span>
          </h2>
          <p className="text-white/40 text-lg font-light leading-relaxed">
            Vexon AI leverages NVIDIA's enterprise-grade SDKs to deliver ultimate performance,
            low-latency synthesis, and industrial-scale dubbing capabilities.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {techStack.map((stack, i) => (
            <motion.div
              key={stack.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.8 }}
              className="group relative h-full rounded-[2.5rem] border border-white/5 bg-white/[0.02] p-10 transition-all hover:bg-white/[0.04] hover:border-white/10"
            >
              <div className={`mb-8 inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-${stack.color}/10 text-${stack.color}`}>
                {stack.id === "nemo" && <FiCpu size={32} />}
                {stack.id === "riva" && <FiActivity size={32} />}
                {stack.id === "triton" && <FiServer size={32} />}
              </div>

              <span className={`text-[10px] tracking-[0.3em] uppercase text-${stack.color} font-bold mb-4 block`}>{stack.role}</span>
              <h3 className="font-display text-2xl font-bold text-white mb-6 underline underline-offset-4 decoration-white/5">{stack.name}</h3>
              <p className="text-white/30 font-light leading-relaxed mb-10">{stack.desc}</p>

              <ul className="space-y-4">
                {stack.features.map(feat => (
                  <li key={feat} className="flex items-center gap-3 text-xs text-white/50 tracking-wider">
                    <div className={`w-1.5 h-1.5 rounded-full bg-${stack.color}`} />
                    {feat}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Pipeline Flow Visualization */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-32 max-w-5xl mx-auto p-12 rounded-[3.5rem] border border-white/5 bg-gradient-to-br from-white/[0.03] to-transparent relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl pointer-events-none" />

          <div className="flex flex-col md:flex-row items-center justify-between gap-12 relative z-10">
            <div className="text-center md:text-left">
              <h4 className="font-display text-2xl font-bold text-white mb-2">Unified Deployment Node</h4>
              <p className="text-sm text-white/30 font-light">Triton Inference Server Orchestration</p>
            </div>

            <div className="flex-1 flex items-center justify-center gap-4 text-white/10">
              <div className="h-px bg-white/10 flex-1 hidden md:block" />
              <FiZap className="text-accent animate-pulse" size={24} />
              <div className="h-px bg-white/10 flex-1 hidden md:block" />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="px-6 py-4 rounded-2xl bg-white/5 border border-white/5 text-center transition-all hover:bg-white/10">
                <span className="text-[10px] font-bold text-white uppercase tracking-widest">Latency</span>
                <p className="text-lg font-display font-bold text-secondary">{"<"}15ms</p>
              </div>
              <div className="px-6 py-4 rounded-2xl bg-white/5 border border-white/5 text-center transition-all hover:bg-white/10">
                <span className="text-[10px] font-bold text-white uppercase tracking-widest">Precision</span>
                <p className="text-lg font-display font-bold text-accent">FP32/INT8</p>
              </div>
            </div>
          </div>
        </motion.div>
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
              <span className="text-white/30 italic text-gradient-accent">Infinite Scenarios.</span>
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

    <Footer />
  </div>
);

export default Product;

