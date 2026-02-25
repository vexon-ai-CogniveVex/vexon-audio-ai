import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
    FiActivity,
    FiMic,
    FiZap,
    FiClock,
    FiArrowUpRight,
    FiPlus,
    FiPlay,
    FiTrendingUp
} from "react-icons/fi";
import api, { User } from "@/lib/api";

const stats = [
    { label: "Neural Computations", value: "1,284", change: "+12.5%", icon: FiZap, color: "text-primary" },
    { label: "Hours Processed", value: "48.2h", change: "+5.1%", icon: FiClock, color: "text-purple-400" },
    { label: "Active Nodes", value: "12", change: "Stable", icon: FiActivity, color: "text-blue-400" },
    { label: "Generation Rank", value: "Top 2%", change: "+0.4%", icon: FiTrendingUp, color: "text-green-400" },
];

const recentGenerations = [
    { id: 1, name: "Ambient Void - Layer 4", type: "Neural Synth", time: "2h ago", status: "Completed" },
    { id: 2, name: "Vocal Isolation (Clean)", type: "Spectral Pro", time: "5h ago", status: "Completed" },
    { id: 3, name: "Cyberpunk Rhythmic Loop", type: "Neural Synth", time: "Yesterday", status: "Exported" },
];

const Overview = () => {
    const [user, setUser] = useState<User | null>(null);

    useEffect(() => {
        const session = api.getCurrentUser();
        if (session) setUser(session.user);
    }, []);

    return (
        <div className="space-y-10">
            {/* Welcome Hero */}
            <div className="relative overflow-hidden rounded-[3rem] border border-white/5 bg-gradient-to-br from-primary/10 via-transparent to-purple-600/5 p-10 md:p-16">
                <div className="relative z-10 max-w-2xl">
                    <h1 className="font-display text-4xl md:text-5xl font-bold mb-6">
                        Protocol Initialized. <br />
                        <span className="text-white/30 italic">Welcome back, {user?.first_name || user?.username || "Operator"}.</span>
                    </h1>

                    <p className="text-white/40 text-lg font-light leading-relaxed mb-10">
                        Systems are running at optimal efficiency. Neural clusters are ready for high-fidelity audio synthesis.
                    </p>
                    <div className="flex gap-4">
                        <button className="group flex items-center gap-3 rounded-2xl bg-white px-8 py-4 font-bold text-black transition-all hover:bg-primary active:scale-95 text-xs tracking-widest uppercase">
                            Start New Experiment
                            <FiPlus className="transition-transform group-hover:rotate-90" />
                        </button>
                    </div>
                </div>

                {/* Abstract deco */}
                <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] pointer-events-none opacity-50" />
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {stats.map((stat, i) => (
                    <motion.div
                        key={stat.label}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className="p-8 rounded-[2.5rem] border border-white/5 bg-white/[0.02] backdrop-blur-3xl hover:bg-white/[0.04] transition-colors group"
                    >
                        <div className="flex justify-between items-start mb-6">
                            <div className={`w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center ${stat.color} group-hover:scale-110 transition-transform`}>
                                <stat.icon size={24} />
                            </div>
                            <span className={`text-[10px] font-bold tracking-widest flex items-center gap-1 ${stat.change.startsWith('+') ? 'text-green-400' : 'text-white/20'}`}>
                                {stat.change} <FiArrowUpRight />
                            </span>
                        </div>
                        <p className="text-white/30 text-xs font-bold tracking-widest uppercase mb-1">{stat.label}</p>
                        <h3 className="font-display text-3xl font-bold">{stat.value}</h3>
                    </motion.div>
                ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Recent Activity */}
                <div className="lg:col-span-2 space-y-6">
                    <div className="flex items-center justify-between px-4">
                        <h3 className="font-display text-xl font-bold">Recent Projects</h3>
                        <button className="text-primary text-xs font-bold tracking-widest uppercase hover:underline">View Archives</button>
                    </div>

                    <div className="space-y-4">
                        {recentGenerations.map((gen) => (
                            <div key={gen.id} className="group p-6 rounded-3xl border border-white/5 bg-white/[0.01] hover:bg-white/[0.03] transition-all flex items-center justify-between">
                                <div className="flex items-center gap-6">
                                    <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center text-white/20 group-hover:text-primary group-hover:bg-primary/10 transition-all">
                                        <FiPlay className="translate-x-0.5" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-lg mb-1">{gen.name}</h4>
                                        <p className="text-xs text-white/20 uppercase tracking-[0.2em] font-bold">{gen.type} • {gen.time}</p>
                                    </div>
                                </div>
                                <div className="flex flex-col items-end">
                                    <span className="px-4 py-1.5 rounded-full text-[10px] font-bold tracking-widest uppercase bg-green-400/10 text-green-400">
                                        {gen.status}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* System Monitor */}
                <div className="space-y-6">
                    <h3 className="font-display text-xl font-bold px-4">System Monitor</h3>
                    <div className="p-8 rounded-[3rem] border border-white/5 bg-white/[0.02] backdrop-blur-3xl space-y-8">
                        <div className="space-y-3">
                            <div className="flex justify-between text-xs tracking-widest uppercase font-bold">
                                <span className="text-white/40 italic">Buffer Load</span>
                                <span className="text-primary">64%</span>
                            </div>
                            <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                                <motion.div
                                    initial={{ width: 0 }}
                                    animate={{ width: "64%" }}
                                    className="h-full bg-primary"
                                />
                            </div>
                        </div>

                        <div className="space-y-3">
                            <div className="flex justify-between text-xs tracking-widest uppercase font-bold">
                                <span className="text-white/40 italic">Neural Sync</span>
                                <span className="text-purple-400">92%</span>
                            </div>
                            <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                                <motion.div
                                    initial={{ width: 0 }}
                                    animate={{ width: "92%" }}
                                    className="h-full bg-purple-400"
                                />
                            </div>
                        </div>

                        <div className="pt-6 border-t border-white/5">
                            <div className="flex items-center gap-3 text-white/40 text-xs font-light tracking-wide mb-4">
                                <FiMic className="text-primary" />
                                <span>Microphone status: Active</span>
                            </div>
                            <div className="flex items-center gap-3 text-white/40 text-xs font-light tracking-wide">
                                <FiZap className="text-primary" />
                                <span>NPU Encryption: Secured</span>
                            </div>
                        </div>

                        <button className="w-full py-4 rounded-2xl bg-white/5 border border-white/5 text-[10px] tracking-[0.3em] font-bold uppercase hover:bg-white/10 transition-colors">
                            Check Global Status
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Overview;
