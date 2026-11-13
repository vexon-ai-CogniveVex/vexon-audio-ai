import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    FiZap,
    FiWind,
    FiLayers,
    FiPlay,
    FiArrowRight,
    FiTerminal,
    FiActivity,
    FiDisc
} from "react-icons/fi";
import api from "@/lib/api";
import { toast } from "sonner";

const NeuralLab = () => {
    const [prompt, setPrompt] = useState("");
    const [isGenerating, setIsGenerating] = useState(false);
    const [result, setResult] = useState<any>(null);

    const handleGenerate = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!prompt) return;

        setIsGenerating(true);
        setResult(null);

        try {
            const resp = await api.generateAi(prompt);
            if (resp.status === "success") {
                setResult(resp.data);
                toast.success("Generation complete. Spectral data ready.");
            }
        } catch (err) {
            toast.error("Neural collapse. Try re-prompting.");
        } finally {
            setIsGenerating(false);
        }
    };

    return (
        <div className="space-y-12">
            <header className="max-w-3xl">
                <span className="text-[10px] tracking-[0.5em] uppercase text-primary font-bold mb-4 block">Synthesis Lab</span>
                <h1 className="font-display text-5xl font-bold mb-6">Neural Generation</h1>
                <p className="text-white/40 text-lg font-light leading-relaxed">
                    Convert semantic concepts into high-fidelity auditory buffers. Access the Transformer-based core engine for experimental soundscape synthesis.
                </p>
            </header>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Control Panel */}
                <div className="lg:col-span-2 space-y-6">
                    <form onSubmit={handleGenerate} className="p-10 rounded-[3rem] border border-white/5 bg-white/[0.02] backdrop-blur-3xl space-y-8">
                        <div className="space-y-4">
                            <label className="text-[10px] tracking-[0.3em] font-bold text-white/30 uppercase ml-2 flex items-center gap-2">
                                <FiTerminal className="text-primary" />
                                Neural Prompt Injection
                            </label>
                            <textarea
                                value={prompt}
                                onChange={(e) => setPrompt(e.target.value)}
                                placeholder="e.g. Cinematic ambient texture with rhythmic quantum pulses and spectral glass transients..."
                                className="w-full h-40 rounded-[2rem] border border-white/5 bg-white/[0.02] p-8 text-lg font-light text-white placeholder:text-white/10 outline-none focus:border-primary/40 focus:bg-white/[0.04] transition-all resize-none"
                            />
                        </div>

                        <div className="flex flex-wrap gap-4 items-center justify-between">
                            <div className="flex gap-4">
                                <div className="p-4 rounded-2xl border border-white/5 bg-white/[0.02] flex items-center gap-3">
                                    <FiLayers className="text-primary" />
                                    <span className="text-[10px] font-bold tracking-widest uppercase">Layer: 4</span>
                                </div>
                                <div className="p-4 rounded-2xl border border-white/5 bg-white/[0.02] flex items-center gap-3">
                                    <FiActivity className="text-primary" />
                                    <span className="text-[10px] font-bold tracking-widest uppercase">Mode: Full</span>
                                </div>
                            </div>

                            <button
                                type="submit"
                                disabled={isGenerating || !prompt}
                                className="group flex items-center gap-4 rounded-2xl bg-white px-10 py-5 font-bold text-black transition-all hover:bg-primary active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed text-xs tracking-[0.2em] uppercase"
                            >
                                {isGenerating ? "Synthesizing..." : "Initialize Synth"}
                                <FiZap className={`${isGenerating ? "animate-pulse" : "group-hover:scale-110 transition-transform"}`} />
                            </button>
                        </div>
                    </form>

                    {/* Result Visualization */}
                    <AnimatePresence mode="wait">
                        {isGenerating && (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                className="p-20 rounded-[3rem] border border-white/5 bg-white/[0.01] flex flex-col items-center justify-center text-center gap-8"
                            >
                                <div className="relative">
                                    <motion.div
                                        animate={{ rotate: 360 }}
                                        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                                        className="w-32 h-32 rounded-full border-t-2 border-primary"
                                    />
                                    <FiDisc className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-primary text-4xl" />
                                </div>
                                <div>
                                    <h3 className="font-display text-xl font-bold mb-2 uppercase tracking-widest">Processing Spectral Clusters</h3>
                                    <p className="text-white/20 text-sm italic">Allocating neural resources in sector 7...</p>
                                </div>
                            </motion.div>
                        )}

                        {result && (
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="p-10 rounded-[3rem] border border-primary/20 bg-primary/5 backdrop-blur-3xl"
                            >
                                <div className="flex items-center justify-between mb-8">
                                    <div className="flex items-center gap-6">
                                        <div className="w-16 h-16 rounded-2xl bg-white flex items-center justify-center text-black shadow-xl shadow-primary/20">
                                            <FiPlay className="text-2xl translate-x-0.5" />
                                        </div>
                                        <div>
                                            <h3 className="font-display text-xl font-bold italic">Cluster_Result_88.npx</h3>
                                            <p className="text-white/40 text-xs font-bold tracking-widest uppercase">Format: Neural RAW • 32-bit</p>
                                        </div>
                                    </div>
                                    <button className="px-6 py-3 rounded-xl border border-white/10 bg-white/5 text-[10px] tracking-widest uppercase font-bold hover:bg-white/10 transition-colors">
                                        Export Buffer
                                    </button>
                                </div>
                                <div className="h-24 w-full flex items-end gap-1 opacity-50">
                                    {Array.from({ length: 60 }).map((_, i) => (
                                        <div
                                            key={i}
                                            className="bg-primary flex-grow rounded-full"
                                            style={{ height: `${Math.random() * 100}%` }}
                                        />
                                    ))}
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>

                {/* Sidebar Info */}
                <div className="space-y-6">
                    <div className="p-10 rounded-[3rem] border border-white/5 bg-white/[0.02] space-y-8">
                        <div>
                            <h4 className="font-bold text-xs tracking-widest uppercase text-white/30 mb-6 flex items-center gap-2">
                                <FiWind className="text-primary" />
                                Spectral Guide
                            </h4>
                            <p className="text-sm text-white/40 leading-relaxed italic">
                                Use technical descriptors like "spectral", "quantum", "harmonic", or "transient" for better results across the neural pipeline.
                            </p>
                        </div>

                        <div className="space-y-4 pt-6 border-t border-white/5">
                            <p className="text-[10px] font-bold tracking-widest uppercase text-white/20">Active Presets</p>
                            <div className="space-y-2">
                                <button className="w-full p-4 rounded-2xl border border-white/5 bg-white/[0.02] text-left text-xs font-bold hover:bg-primary/10 hover:border-primary/30 transition-all flex items-center justify-between group">
                                    Cinematic Core
                                    <FiArrowRight className="opacity-0 group-hover:opacity-100 transition-opacity" />
                                </button>
                                <button className="w-full p-4 rounded-2xl border border-white/5 bg-white/[0.02] text-left text-xs font-bold hover:bg-primary/10 hover:border-primary/30 transition-all flex items-center justify-between group">
                                    Hyper-Dry Isolation
                                    <FiArrowRight className="opacity-0 group-hover:opacity-100 transition-opacity" />
                                </button>
                                <button className="w-full p-4 rounded-2xl border border-white/5 bg-white/[0.02] text-left text-xs font-bold hover:bg-primary/10 hover:border-primary/30 transition-all flex items-center justify-between group">
                                    Sub-Atomic Granular
                                    <FiArrowRight className="opacity-0 group-hover:opacity-100 transition-opacity" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NeuralLab;
