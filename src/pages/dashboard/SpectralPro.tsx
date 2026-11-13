import { useState } from "react";
import { motion } from "framer-motion";
import {
    FiActivity,
    FiScissors,
    FiRefreshCw,
    FiMaximize,
    FiMic,
    FiUpload,
    FiZap,
    FiSliders,
    FiArrowRight
} from "react-icons/fi";
import { toast } from "sonner";

const SpectralPro = () => {
    const [isInjecting, setIsInjecting] = useState(false);
    const [isLoaded, setIsLoaded] = useState(false);

    const handleInject = () => {
        setIsInjecting(true);
        setTimeout(() => {
            setIsInjecting(false);
            setIsLoaded(true);
            toast.success("Buffer injection successful. Frequency map active.");
        }, 2000);
    };

    return (
        <div className="space-y-12">
            <header className="max-w-3xl">
                <span className="text-[10px] tracking-[0.5em] uppercase text-purple-400 font-bold mb-4 block">Precision Workspace</span>
                <h1 className="font-display text-5xl font-bold mb-6">Spectral Pro</h1>
                <p className="text-white/40 text-lg font-light leading-relaxed">
                    High-end architectural tools for audio cleaning, de-noising, and transient isolation. Reconstruct degraded content with sub-atomic frequency control.
                </p>
            </header>

            {/* Main Workbench */}
            <div className="relative rounded-[3rem] border border-white/10 bg-[#080808] overflow-hidden">
                {/* Header/Controls */}
                <div className="flex items-center justify-between p-8 border-b border-white/5 bg-white/[0.01]">
                    <div className="flex items-center gap-10">
                        <button
                            onClick={handleInject}
                            disabled={isInjecting}
                            className={`flex items-center gap-4 px-6 py-3 rounded-xl border border-white/10 transition-all ${isInjecting ? 'opacity-50' : 'hover:bg-white/5 active:scale-95'}`}
                        >
                            <FiUpload className={`${isInjecting ? 'animate-bounce' : 'text-purple-400'}`} />
                            <span className="text-xs font-bold tracking-widest uppercase">{isInjecting ? 'Injecting...' : 'Inject Buffer'}</span>
                        </button>
                        <div className="h-8 w-px bg-white/10 hidden md:block" />
                        <div className="hidden md:flex items-center gap-6 text-white/40 italic text-xs">
                            <span className="text-purple-400/60 not-italic font-bold tracking-widest uppercase">Target:</span>
                            <span>{isLoaded ? 'Neural_Result_X22.npx' : 'None Loaded'}</span>
                        </div>
                    </div>
                    <div className="flex items-center gap-4">
                        <button className="p-3 rounded-xl border border-white/10 hover:bg-white/5 transition-colors text-white/40 hover:text-white">
                            <FiMaximize />
                        </button>
                        <button className="p-3 rounded-xl border border-white/10 hover:bg-white/5 transition-colors text-white/40 hover:text-white">
                            <FiSliders />
                        </button>
                    </div>
                </div>

                {/* Spectral Canvas */}
                <div className="relative h-[500px] w-full overflow-hidden">
                    <div className={`absolute inset-0 bg-[url('https://images.unsplash.com/photo-1557683316-973673baf926?auto=format&fit=crop&q=80&w=1600')] bg-cover transition-opacity duration-1000 ${isLoaded ? 'opacity-40 scale-105' : 'opacity-20 grayscale'}`} />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-transparent to-[#080808] opacity-80" />

                    {isLoaded && (
                        <div className="absolute inset-0 flex items-center justify-around px-20">
                            {Array.from({ length: 40 }).map((_, i) => (
                                <motion.div
                                    key={i}
                                    animate={{ height: [`${Math.random() * 40 + 20}%`, `${Math.random() * 40 + 20}%`] }}
                                    transition={{ duration: 0.5 + Math.random(), repeat: Infinity, repeatType: "reverse" }}
                                    className="w-1 bg-purple-400/30 rounded-full"
                                />
                            ))}
                        </div>
                    )}

                    <motion.div
                        animate={{ opacity: isInjecting ? [0.2, 0.8, 0.2] : [0.2, 0.4, 0.2] }}
                        transition={{ duration: isInjecting ? 0.5 : 4, repeat: Infinity }}
                        className="relative z-10 flex flex-col items-center gap-6"
                    >
                        <FiActivity className={`text-8xl transition-colors duration-1000 ${isLoaded ? 'text-purple-400' : 'text-purple-400/40'}`} />
                        <p className="text-[10px] tracking-[0.4em] uppercase font-bold text-white/20">
                            {isInjecting ? 'Decoding Neural Streams...' : isLoaded ? 'Frequency Map Active' : 'Waiting for injection...'}
                        </p>
                    </motion.div>
                </div>


                {/* Tools Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 border-t border-white/5">
                    {[
                        { icon: FiZap, label: "De-Noise", color: "text-blue-400" },
                        { icon: FiMic, label: "Vocal Extract", color: "text-primary" },
                        { icon: FiScissors, label: "Transient Cut", color: "text-purple-400" },
                        { icon: FiRefreshCw, label: "Sync Align", color: "text-green-400" }
                    ].map((tool, i) => (
                        <button key={i} className="flex flex-col items-center justify-center p-10 border-r border-white/5 last:border-0 hover:bg-white/[0.02] transition-colors group">
                            <tool.icon className={`text-2xl mb-4 ${tool.color} group-hover:scale-110 transition-transform`} />
                            <span className="text-[10px] font-bold tracking-widest uppercase text-white/30 group-hover:text-white transition-colors">{tool.label}</span>
                        </button>
                    ))}
                </div>
            </div>

            {/* Bottom Info Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="p-10 rounded-[3rem] border border-white/5 bg-white/[0.02]">
                    <h3 className="font-display text-xl font-bold mb-6">Quantum Restoration</h3>
                    <p className="text-white/40 text-sm font-light leading-relaxed mb-8">
                        Our restoration engine uses deep spectral reconstruction (DSR) to repair clipped audio and fill missing frequency gaps with sample-perfect accuracy.
                    </p>
                    <div className="flex items-center gap-6">
                        <div className="flex-1 space-y-2">
                            <div className="flex justify-between text-[10px] font-bold text-white/20 tracking-widest uppercase">Repair Success Rate</div>
                            <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                                <div className="h-full bg-purple-400 w-[99.9%]" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="p-10 rounded-[3rem] border border-white/5 bg-white/[0.02]">
                    <h3 className="font-display text-xl font-bold mb-6">Algorithm Version</h3>
                    <p className="text-white/40 text-sm font-light leading-relaxed mb-8">
                        Currently running Spectral Engine v8.2.4 "Void Runner". All processing is hardware-accelerated via your local NPU cluster.
                    </p>
                    <button className="text-[10px] tracking-widest font-bold uppercase text-primary flex items-center gap-2 hover:underline">
                        View Patch Notes <FiArrowRight />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SpectralPro;
