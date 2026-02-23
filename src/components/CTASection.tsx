import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FiArrowRight, FiActivity } from "react-icons/fi";

const CTASection = () => (
  <section className="relative overflow-hidden py-40 bg-[#050505]">
    {/* Dynamic Background */}
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[160px] opacity-50" />

    <div className="container relative z-10 mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        className="relative overflow-hidden rounded-[4rem] border border-white/10 bg-gradient-to-br from-white/5 to-transparent p-16 md:p-32 text-center backdrop-blur-3xl"
      >
        {/* Animated Accent */}
        <motion.div
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute -top-1/2 -left-1/2 w-full h-full border border-primary/10 rounded-full border-dashed"
        />

        <div className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-3 mb-10"
          >
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-primary" />
            <FiActivity className="text-primary text-2xl animate-pulse" />
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-primary" />
          </motion.div>

          <h2 className="mx-auto max-w-4xl font-display text-5xl font-bold leading-[1.1] text-white md:text-8xl">
            The era of <span className="text-white/30 italic">Pure Sound</span> begins now.
          </h2>

          <p className="mx-auto mt-10 max-w-2xl text-xl text-white/40 font-light leading-relaxed">
            Dont just process audio. Transcend it. Join the vanguard of creators defining the next auditory frontier.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            <Link
              to="/signup"
              className="group relative inline-flex items-center gap-4 rounded-full bg-white px-12 py-6 font-display text-lg font-bold text-black transition-all hover:shadow-[0_0_60px_rgba(255,255,255,0.3)]"
            >
              Secure Encryption Node
              <FiArrowRight size={24} className="transition-transform group-hover:translate-x-1" />
            </Link>
            <Link to="/contact" className="text-white/40 font-display font-medium tracking-widest uppercase text-sm hover:text-white transition-colors">
              Access Protocols →
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </div>
  </section>
);

export default CTASection;

