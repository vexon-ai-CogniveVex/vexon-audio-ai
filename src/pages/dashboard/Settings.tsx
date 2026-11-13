import { useState, useEffect } from "react";
import api, { User } from "@/lib/api";
import { toast } from "sonner";
import { FiUser, FiMail, FiCamera, FiShield, FiLock, FiBell, FiMonitor, FiGlobe } from "react-icons/fi";
import { motion } from "framer-motion";

const Settings = () => {
    const [user, setUser] = useState<User | null>(null);
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [notifications, setNotifications] = useState(true);

    useEffect(() => {
        const session = api.getCurrentUser();
        if (session) {
            setUser(session.user);
            setFullName(session.user.first_name ? `${session.user.first_name} ${session.user.last_name || ''}` : session.user.username);
            setEmail(session.user.email);
        }
    }, []);

    const handleSave = () => {
        toast.success("Settings synchronized with the neural core.");
    };

    return (
        <div className="space-y-12">
            <header className="max-w-3xl">
                <span className="text-[10px] tracking-[0.5em] uppercase text-white/30 font-bold mb-4 block">Core Configuration</span>
                <h1 className="font-display text-5xl font-bold mb-6">Settings</h1>
                <p className="text-white/40 text-lg font-light leading-relaxed">
                    Manage your neural identity, security protocols, and interface preferences.
                </p>
            </header>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                {/* Main Settings */}
                <div className="lg:col-span-2 space-y-8">
                    {/* Profile Section */}
                    <section className="p-10 rounded-[3rem] border border-white/5 bg-white/[0.01] space-y-10">
                        <div className="flex items-center gap-8 border-b border-white/5 pb-10">
                            <div className="relative group cursor-pointer">
                                <div className="w-24 h-24 rounded-[2rem] bg-gradient-to-br from-primary to-purple-600 flex items-center justify-center shadow-2xl overflow-hidden">
                                    {user?.avatar ? (
                                        <img src={user.avatar} alt="Avatar" className="w-full h-full object-cover" />
                                    ) : (
                                        <FiUser className="text-white text-4xl" />
                                    )}
                                </div>
                                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 bg-black/60 rounded-[2rem] transition-all">
                                    <FiCamera className="text-white" />
                                </div>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold mb-2 uppercase tracking-wide italic">{user?.username || "Protocol_User"}</h3>
                                <p className="text-white/20 text-xs font-bold tracking-widest uppercase">Public Node Identity</p>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="space-y-3">
                                <label className="text-[10px] tracking-widest uppercase text-white/20 font-bold ml-1">Entity Name</label>
                                <div className="relative group">
                                    <FiUser className="absolute left-5 top-1/2 -translate-y-1/2 text-white/20" />
                                    <input
                                        type="text"
                                        value={fullName}
                                        onChange={(e) => setFullName(e.target.value)}
                                        placeholder="John Doe"
                                        className="w-full h-14 rounded-2xl border border-white/5 bg-white/[0.02] pl-12 pr-6 text-sm text-white focus:border-primary/40 outline-none transition-all"
                                    />
                                </div>
                            </div>
                            <div className="space-y-3">
                                <label className="text-[10px] tracking-widest uppercase text-white/20 font-bold ml-1">Frequency Address</label>
                                <div className="relative group">
                                    <FiMail className="absolute left-5 top-1/2 -translate-y-1/2 text-white/20" />
                                    <input
                                        type="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        placeholder="john@protocol.ai"
                                        className="w-full h-14 rounded-2xl border border-white/5 bg-white/[0.02] pl-12 pr-6 text-sm text-white focus:border-primary/40 outline-none transition-all"
                                    />
                                </div>
                            </div>
                        </div>
                    </section>


                    {/* Security Section */}
                    <section className="p-10 rounded-[3rem] border border-white/5 bg-white/[0.01] space-y-10">
                        <h3 className="font-display text-xl font-bold flex items-center gap-4">
                            <FiShield className="text-primary" />
                            Security Protocols
                        </h3>

                        <div className="space-y-6">
                            <div className="flex items-center justify-between p-6 rounded-2xl border border-white/5 bg-white/[0.01]">
                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                                        <FiLock />
                                    </div>
                                    <div>
                                        <p className="text-sm font-bold">Two-Factor Authentication</p>
                                        <p className="text-[10px] text-white/20 tracking-widest uppercase font-bold">Additional encryption layer</p>
                                    </div>
                                </div>
                                <div className="w-12 h-6 bg-primary/20 rounded-full flex items-center justify-end px-1 cursor-pointer">
                                    <div className="w-4 h-4 bg-primary rounded-full shadow-[0_0_10px_rgba(var(--primary-rgb),0.5)]" />
                                </div>
                            </div>

                            <button className="w-full py-4 rounded-xl border border-white/5 bg-white/5 text-[10px] tracking-widest uppercase font-bold hover:bg-white/10 transition-colors">
                                Rotate Encryption Keys
                            </button>
                        </div>
                    </section>
                </div>

                {/* Sidebar Config */}
                <div className="space-y-8">
                    <div className="p-10 rounded-[3rem] border border-white/5 bg-white/[0.02] space-y-8">
                        <h4 className="font-bold text-xs tracking-widest uppercase text-white/30">System Prefs</h4>

                        <div className="space-y-6">
                            <div className="flex items-center justify-between opacity-50">
                                <div className="flex items-center gap-3 text-xs font-bold">
                                    <FiMonitor />
                                    Interface Theme
                                </div>
                                <span className="text-[10px] tracking-widest uppercase font-bold italic">Deep Void</span>
                            </div>
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-3 text-xs font-bold">
                                    <FiBell />
                                    Neural Notifications
                                </div>
                                <div
                                    onClick={() => setNotifications(!notifications)}
                                    className={`w-10 h-5 rounded-full flex items-center px-1 cursor-pointer transition-colors ${notifications ? 'bg-primary' : 'bg-white/10'}`}
                                >
                                    <motion.div
                                        animate={{ x: notifications ? 20 : 0 }}
                                        className="w-3 h-3 bg-white rounded-full"
                                    />
                                </div>
                            </div>
                            <div className="flex items-center justify-between opacity-100">
                                <div className="flex items-center gap-3 text-xs font-bold">
                                    <FiGlobe />
                                    Local Node Sync
                                </div>
                                <span className="text-[10px] tracking-widest uppercase font-bold italic text-green-400">Online</span>
                            </div>
                        </div>

                        <div className="pt-8 border-t border-white/5">
                            <button
                                onClick={handleSave}
                                className="w-full py-5 rounded-2xl bg-white text-black font-display font-bold text-xs tracking-widest uppercase hover:bg-primary transition-all active:scale-95"
                            >
                                Synchronize Cloud
                            </button>
                        </div>
                    </div>

                    <div className="p-10 rounded-[3rem] border border-red-500/10 bg-red-500/[0.02] space-y-4">
                        <p className="text-[10px] tracking-widest uppercase font-bold text-red-500/40">Danger Zone</p>
                        <button className="w-full py-4 text-xs font-bold text-red-500 hover:bg-red-500/10 rounded-2xl transition-colors">
                            De-initialize Account
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Settings;
