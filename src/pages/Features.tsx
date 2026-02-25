import { motion } from "framer-motion";
import { FiMic, FiHeadphones, FiBarChart, FiZap, FiGlobe, FiShield, FiActivity, FiFileText, FiMessageSquare } from "react-icons/fi";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import featuresImage from "@/assets/images/features_neural_soundscape_1771846610136.png";

const features = [
  { icon: FiMic, title: "Neural Voice Synthesis", desc: "Craft hyper-realistic synthetic voices with nuanced emotional control and multi-dialect capabilities.", category: "Generation", size: "large", color: "primary" },
  { icon: FiGlobe, title: "Global Dubbing", desc: "Seamlessly translate and dub content while preserving the original speaker's unique vocal identity.", category: "Generation", size: "small", color: "secondary" },
  { icon: FiActivity, title: "Rhythmic Alignment", desc: "Automated temporal correction for perfectly synced audio-to-video or beat-matched loops.", category: "Generation", size: "small", color: "accent" },
  { icon: FiShield, title: "Quantum Filtering", desc: "Remove complex environmental noise and interference with proprietary neural cleaning algorithms.", category: "Enhancement", size: "small", color: "secondary" },
  { icon: FiZap, title: "Autonomous Mastering", desc: "Elevate your audio to studio standards with AI that understands genre-specific spectral dynamics.", category: "Enhancement", size: "large", color: "accent" },
  { icon: FiFileText, title: "Adaptive Restoration", desc: "Repair clipped or degraded samples using deep-learning spectral reconstruction techniques.", category: "Enhancement", size: "small", color: "primary" },
  { icon: FiBarChart, title: "Sentiment Analysis", desc: "Decode the subtext of any conversation with real-time emotional and psychological profiling.", category: "Intelligence", size: "large", color: "accent" },
  { icon: FiActivity, title: "NPU Compliance", desc: "Automated audits for regulatory standards across finance, healthcare, and security sectors.", category: "Intelligence", size: "small", color: "primary" },
  { icon: FiMessageSquare, title: "Semantic Transcribe", desc: "Context-aware transcription that distinguishes intent and speaker hierarchy with 99% accuracy.", category: "Intelligence", size: "small", color: "secondary" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  },
};

const Features = () => (
  <div className="min-h-screen bg-[#050505] text-white">
    <Navbar />

    {/* Cinematic Hero */}
    <section className="relative pt-48 pb-32 overflow-hidden">
      {/* Background Graphic */}
      <div className="absolute top-0 right-0 w-full h-full opacity-20 blur-[100px] pointer-events-none">
        <img src={featuresImage} alt="" className="object-cover w-full h-full scale-125 rotate-12" />
      </div>

      <div className="container relative z-10 mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-4xl"
        >
          <span className="text-[10px] tracking-[0.5em] uppercase text-secondary font-bold mb-6 block">The Tech Stack</span>
          <h1 className="font-display text-6xl font-bold leading-[1.05] tracking-tight text-white sm:text-7xl md:text-9xl mb-8">
            Audio <br />
            <span className="text-white/30 italic text-gradient-accent">Redefined.</span>
          </h1>
          <p className="max-w-xl text-white/40 text-xl font-light leading-relaxed">
            From the core neural engine to the final spectral output, Vexon provides a total ecosystem for high-fidelity audio intelligence.
          </p>
        </motion.div>
      </div>
    </section>

    {/* Bento Grid Features */}
    <section className="py-24 relative">
      <div className="container mx-auto px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className={`relative overflow-hidden rounded-[3rem] border border-white/5 bg-white/[0.02] p-12 backdrop-blur-3xl transition-colors hover:bg-white/[0.04] ${f.size === "large" ? "md:col-span-2" : ""}`}
            >
              <div className="flex items-start justify-between mb-12">
                <div className={`w-14 h-14 rounded-2xl bg-${f.color}/10 flex items-center justify-center text-${f.color}`}>
                  <f.icon size={28} />
                </div>
                <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-white/20">
                  {f.category}
                </span>
              </div>

              <h3 className="mb-4 font-display text-2xl font-bold text-white">{f.title}</h3>
              <p className="text-white/40 font-light leading-relaxed text-lg">{f.desc}</p>

              {/* Subtle background glow for cards */}
              <div className="absolute -bottom-16 -right-16 w-32 h-32 bg-primary/5 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>

    {/* Section Link to Product */}
    <section className="py-40 bg-[#0a0a0a]">
      <div className="container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto"
        >
          <h2 className="font-display text-4xl font-bold mb-8 text-white">Ready to witness the power?</h2>
          <Link to="/product" className="inline-block rounded-full bg-white px-10 py-5 font-bold text-black hover:bg-primary transition-colors tracking-widest uppercase text-sm">
            View Live Architecture
          </Link>
        </motion.div>
      </div>
    </section>

    <Footer />
  </div>
);

export default Features;

