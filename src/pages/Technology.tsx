import { motion } from "framer-motion";
import { FiCpu, FiActivity, FiZap, FiLayers, FiRadio, FiTerminal, FiDatabase } from "react-icons/fi";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const techPillars = [
    {
        icon: FiCpu,
        title: "Neural Synergy Engine",
        desc: "A distributed neural architecture that processes audio packets with quantum-level precision, enabling real-time voice synthesis and spectral reconstruction.",
        specs: ["Latency: < 0.5ms", "Bit-depth: 32-bit Float", "Architecture: Transformer-based"],
        color: "primary"
    },
    {
        icon: FiLayers,
        title: "Temporal Alignment Protocol",
        desc: "Proprietary algorithms that align phasing and transient responses across multiple audio streams, ensuring perfect synchronization even in complex environments.",
        specs: ["Jitter Reduction: 99.9%", "Sync Accuracy: Sample-perfect", "Buffer Type: Zero-delay"],
        color: "secondary"
    },
    {
        icon: FiDatabase,
        title: "Spectral Deep-Learning",
        desc: "Advanced restoration models trained on petabytes of high-fidelity audio data to identify and remove noise while preserving original harmonic content.",
        specs: ["Noise Reduction: -60dB+", "Harmonic Retention: 100%", "Resolution: up to 192kHz"],
        color: "accent"
    }
];

const Technology = () => {
    return (
        <div className="min-h-screen bg-[#050505] text-white">
            <Navbar />

            <section className="relative pt-48 pb-32 overflow-hidden">
                {/* Abstract Background Graphic */}
                <div className="absolute top-0 right-0 w-full h-full opacity-10 bg-[url('https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?auto=format&fit=crop&q=80&w=2000')] bg-cover mix-blend-screen pointer-events-none" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-secondary/5 rounded-full blur-[160px] opacity-50" />

                <div className="container relative z-10 mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                        className="text-center max-w-4xl mx-auto"
                    >
                        <span className="text-[10px] tracking-[0.6em] uppercase text-secondary font-bold mb-8 block">Project Vexon Intel</span>
                        <h1 className="font-display text-6xl font-bold leading-[1.1] tracking-tight text-white sm:text-7xl md:text-8xl mb-12">
                            Neural <br />
                            <span className="text-white/30 italic font-light text-gradient-accent">Architecture.</span>
                        </h1>
                        <p className="text-white/40 text-xl font-light leading-relaxed max-w-2xl mx-auto">
                            Deep dive into the protocols and neural networks that power the next generation of auditory intelligence.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Technical Pillars */}
            <section className="py-32 relative">
                <div className="container mx-auto px-6">
                    <div className="grid gap-16">
                        {techPillars.map((pillar, i) => (
                            <motion.div
                                key={pillar.title}
                                initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                                className={`flex flex-col ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-16 md:gap-32`}
                            >
                                <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left">
                                    <div className={`w-16 h-16 rounded-2xl bg-${pillar.color}/10 flex items-center justify-center text-${pillar.color} mb-10 border border-white/10 group-hover:border-${pillar.color}/50 transition-colors`}>
                                        <pillar.icon size={32} />
                                    </div>
                                    <h2 className={`font-display text-4xl font-bold text-white mb-6 underline decoration-${pillar.color}/30 decoration-4 underline-offset-8`}>
                                        {pillar.title}
                                    </h2>
                                    <p className="text-white/40 text-lg font-light leading-relaxed mb-10 max-w-lg">
                                        {pillar.desc}
                                    </p>
                                    <div className="flex flex-wrap gap-4">
                                        {pillar.specs.map(spec => (
                                            <span key={spec} className="px-4 py-2 rounded-full border border-white/5 bg-white/[0.02] text-[10px] tracking-widest uppercase font-bold text-white/30 italic">
                                                {spec}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                                <div className="flex-1 relative w-full aspect-video rounded-[3rem] overflow-hidden border border-white/10 bg-white/5 group">
                                    <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-50" />
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <FiActivity size={120} className="text-white/[0.03] animate-pulse" />
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Technical Briefing Footer */}
            <section className="py-40 border-t border-white/5 text-center">
                <div className="container mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="max-w-2xl mx-auto rounded-[4rem] border border-white/10 bg-gradient-to-br from-white/5 to-transparent p-20 backdrop-blur-3xl"
                    >
                        <FiTerminal className="text-secondary text-5xl mx-auto mb-10" />
                        <h2 className="font-display text-4xl font-bold text-white mb-6">Full Whitepaper Access</h2>
                        <p className="text-white/40 mb-12 font-light">Explore the complete mathematical proofs and architectural documentation of our engine.</p>
                        <button className="rounded-full bg-white px-10 py-5 font-bold text-black hover:bg-primary transition-colors tracking-widest uppercase text-xs">
                            Download Docs (PDF)
                        </button>
                    </motion.div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default Technology;
