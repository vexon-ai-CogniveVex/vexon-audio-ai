import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FiCpu, FiMusic, FiActivity, FiArrowRight } from "react-icons/fi";
import featuresImage from "@/assets/images/features_neural_soundscape_1771846610136.png";

const features = [
  {
    icon: FiMusic,
    title: "Neural Generation",
    description: "Compose entire soundscapes or individual instruments from skeletal prompts. True creative synthesis.",
    color: "primary",
  },
  {
    icon: FiCpu,
    title: "Quantum Enhancement",
    description: "Reconstruct degraded audio using temporal alignment and spectral deep-cleaning.",
    color: "purple-400",
  },
  {
    icon: FiActivity,
    title: "Semantic Analysis",
    description: "Extract emotional intent, subtext, and rhythmic structures from any audio stream instantly.",
    color: "blue-400",
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

const FeaturesSection = () => (
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
            <span className="text-white/30 italic">Auditory Horizon.</span>
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
            className="group relative h-full overflow-hidden rounded-[2.5rem] border border-white/5 bg-white/[0.02] p-12 backdrop-blur-3xl transition-colors hover:bg-white/[0.04]"
          >
            {/* Hover glow */}
            <div className="absolute -inset-px rounded-[2.5rem] bg-gradient-to-b from-primary/20 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />

            <div className={`mb-10 inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-${f.color}/10 text-${f.color} transition-transform group-hover:scale-110 group-hover:rotate-3`}>
              <f.icon className="text-3xl" />
            </div>

            <h3 className="mb-6 font-display text-2xl font-bold text-white">
              {f.title}
            </h3>

            <p className="text-white/40 leading-relaxed mb-8 font-light text-lg">
              {f.description}
            </p>

            <Link
              to="/technology"
              className="flex items-center gap-2 text-white font-medium cursor-pointer"
            >
              <span className="text-sm tracking-widest uppercase">Deep Dive</span>
              <FiArrowRight className="text-primary" />
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </section>
);

export default FeaturesSection;

