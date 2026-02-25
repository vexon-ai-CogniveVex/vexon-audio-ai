import { FiCpu, FiMusic, FiActivity, FiArrowRight, FiX, FiCheck, FiZap } from "react-icons/fi";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import featuresImage from "@/assets/images/features_neural_soundscape_1771846610136.png";

const features = [
  {
    id: "generation",
    icon: FiMusic,
    title: "Neural Generation",
    description: "Compose entire soundscapes or individual instruments from skeletal prompts. True creative synthesis.",
    color: "primary",
    details: {
      tag: "Synthesis Engine",
      headline: "Creative Autonomy through Latent Diffusion.",
      points: [
        "Hyper-parametric Waveform Modeling for organic textures.",
        "Zero-Shot Vocal Profiling for instant character creation.",
        "Dynamic Rhythmic Seed generation and expansion."
      ],
      capability: "99.2% Human Parity"
    }
  },
  {
    id: "enhancement",
    icon: FiCpu,
    title: "Quantum Enhancement",
    description: "Reconstruct degraded audio using temporal alignment and spectral deep-cleaning.",
    color: "secondary",
    details: {
      tag: "Restoration Protocol",
      headline: "Surgical Precision in Spectral Recovery.",
      points: [
        "Temporal Spectral Alignment (TSA) for jitter correction.",
        "Deep De-noising Neurons targeting non-linear noise.",
        "Autonomous Mastering with adaptive resonance logic."
      ],
      capability: "32-bit Internal Resolution"
    }
  },
  {
    id: "analysis",
    icon: FiActivity,
    title: "Semantic Analysis",
    description: "Extract emotional intent, subtext, and rhythmic structures from any audio stream instantly.",
    color: "accent",
    details: {
      tag: "Intelligence Core",
      headline: "Decoding the DNA of Every Frequency.",
      points: [
        "Multi-modal Sentiment Mapping across vocal tracks.",
        "High-fidelity Rhythmic Feature Extraction for metadata.",
        "Real-time speaker diarization and intent modeling."
      ],
      capability: "Real-time Processing Matrix"
    }
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  },
};

const FeaturesSection = () => {
  const [selectedFeature, setSelectedFeature] = useState<typeof features[0] | null>(null);

  return (
    <section className="relative py-40 overflow-hidden bg-[#0a0a0a]">
      {/* Decorative background image */}
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 blur-3xl pointer-events-none">
        <img src={featuresImage} alt="" className="object-cover h-full w-full" />
      </div>

      <div className="container relative z-10 mx-auto px-6">
        <div className="flex flex-col md:flex-row items-end justify-between mb-24 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <span className="text-[10px] tracking-[0.4em] uppercase text-primary font-bold mb-6 block">Capabilities</span>
            <h2 className="font-display text-5xl md:text-7xl font-bold text-white leading-tight">
              Transcending the <br />
              <span className="text-white/30 italic text-gradient-accent">Auditory Horizon.</span>
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-md text-white/40 text-lg font-light leading-relaxed"
          >
            Our platform leverages next-generation neural architectures to redefine what's possible in the audio landscape.
          </motion.p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid gap-8 md:grid-cols-3"
        >
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="group relative h-full overflow-hidden rounded-[2.5rem] border border-white/5 bg-white/[0.02] p-12 backdrop-blur-3xl transition-colors hover:bg-white/[0.04] cursor-pointer"
              onClick={() => setSelectedFeature(f)}
            >
              <div className={`absolute -inset-px rounded-[2.5rem] bg-gradient-to-b from-${f.color}/20 to-transparent opacity-0 transition-opacity group-hover:opacity-100`} />

              <div className={`mb-10 inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-${f.color}/10 text-${f.color} transition-transform group-hover:scale-110 group-hover:rotate-3`}>
                <f.icon className="text-3xl" />
              </div>

              <h3 className="mb-6 font-display text-2xl font-bold text-white">
                {f.title}
              </h3>

              <p className="text-white/40 leading-relaxed mb-8 font-light text-lg">
                {f.description}
              </p>

              <div className="flex items-center gap-2 text-white font-medium">
                <span className="text-sm tracking-widest uppercase">Deep Dive</span>
                <FiArrowRight className="text-primary group-hover:translate-x-2 transition-transform" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Interactive Modal */}
      <AnimatePresence>
        {selectedFeature && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedFeature(null)}
              className="absolute inset-0 bg-black/80 backdrop-blur-xl"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-4xl rounded-[3rem] border border-white/10 bg-[#0d0d0d] overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.5)]"
            >
              <button
                onClick={() => setSelectedFeature(null)}
                className="absolute top-8 right-8 w-12 h-12 rounded-full border border-white/5 bg-white/5 flex items-center justify-center text-white/40 hover:text-white transition-colors z-10"
              >
                <FiX size={20} />
              </button>

              <div className="grid md:grid-cols-2">
                <div className="p-12 md:p-16 border-b md:border-b-0 md:border-r border-white/5">
                  <div className={`mb-10 inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-${selectedFeature.color}/10 text-${selectedFeature.color}`}>
                    <selectedFeature.icon size={40} />
                  </div>
                  <span className={`text-[10px] tracking-[0.4em] uppercase text-${selectedFeature.color} font-bold mb-6 block`}>{selectedFeature.details.tag}</span>
                  <h2 className="font-display text-4xl font-bold text-white mb-8 leading-tight">{selectedFeature.title}</h2>
                  <p className="text-white/40 text-lg font-light leading-relaxed mb-10 italic">"{selectedFeature.details.headline}"</p>

                  <div className="flex items-center gap-4 p-6 rounded-2xl bg-white/[0.03] border border-white/5">
                    <FiZap className={`text-${selectedFeature.color}`} />
                    <span className="text-sm tracking-widest uppercase text-white/60 font-medium">{selectedFeature.details.capability}</span>
                  </div>
                </div>

                <div className="p-12 md:p-16 bg-white/[0.01]">
                  <h4 className="text-[10px] tracking-[0.3em] uppercase text-white/20 font-bold mb-10">Technical Specifications</h4>
                  <ul className="space-y-8">
                    {selectedFeature.details.points.map((point, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.1 + 0.3 }}
                        className="flex gap-6"
                      >
                        <div className={`mt-1.5 flex-shrink-0 w-5 h-5 rounded-full border border-${selectedFeature.color}/30 flex items-center justify-center text-${selectedFeature.color}`}>
                          <FiCheck size={12} />
                        </div>
                        <p className="text-white/50 font-light leading-relaxed tracking-wide">{point}</p>
                      </motion.li>
                    ))}
                  </ul>

                  <button
                    onClick={() => setSelectedFeature(null)}
                    className={`mt-16 w-full py-5 rounded-2xl border border-white/5 bg-${selectedFeature.color}/5 text-white/60 hover:text-white hover:bg-${selectedFeature.color}/10 transition-all font-bold tracking-widest uppercase text-[10px]`}
                  >
                    Close Protocol
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default FeaturesSection;

