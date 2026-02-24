import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FiMail, FiArrowRight, FiActivity, FiArrowLeft } from "react-icons/fi";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import api from "@/lib/api";
import { toast } from "sonner";

const ForgotPassword = () => {
    const [email, setEmail] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);

        try {
            const resp = await api.forgotPassword(email);
            if (resp.status === "success") {
                toast.success("Reset pulse broadcasted. Check your address.");
            } else {
                toast.error(resp.message || "Protocol rejection.");
            }
        } catch (err) {
            toast.error("Network interference. Broadcast failed.");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-[#050505] text-white">
            <Navbar />

            <div className="relative pt-48 pb-32 flex items-center justify-center px-6">
                {/* Decorative Background */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] opacity-50" />

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                    className="relative w-full max-w-md"
                >
                    <div className="relative overflow-hidden rounded-[3rem] border border-white/10 bg-white/[0.03] p-10 md:p-14 backdrop-blur-3xl shadow-2xl text-center">
                        <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-white/5 mb-8 border border-white/10">
                            <FiActivity className="text-primary text-2xl" />
                        </div>

                        <h1 className="font-display text-4xl font-bold mb-3">Recover Protocol</h1>
                        <p className="text-white/40 font-light mb-10 tracking-wide text-sm uppercase">Re-initialize neural frequency</p>

                        <form className="space-y-6 text-left" onSubmit={handleSubmit}>
                            <div className="space-y-2">
                                <label className="text-[10px] tracking-[0.3em] font-bold text-white/30 uppercase ml-1">Linked Address</label>
                                <div className="relative group">
                                    <FiMail className="absolute left-5 top-1/2 -translate-y-1/2 text-white/20 group-focus-within:text-primary transition-colors" />
                                    <input
                                        type="email"
                                        required
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        placeholder="frequency@vexon.ai"
                                        className="w-full h-14 rounded-2xl border border-white/5 bg-white/[0.02] pl-12 pr-6 text-sm text-white placeholder:text-white/10 focus:border-primary/40 focus:bg-white/[0.04] outline-none transition-all"
                                    />
                                </div>
                            </div>

                            <button
                                type="submit"
                                disabled={isLoading}
                                className="group w-full h-16 rounded-2xl bg-white flex items-center justify-center gap-3 text-black font-display font-bold text-sm tracking-widest uppercase hover:bg-primary transition-colors mt-8 disabled:opacity-50"
                            >
                                {isLoading ? "Broadcasting..." : "Send Reset Pulse"}
                                <FiArrowRight className="transition-transform group-hover:translate-x-1" />
                            </button>
                        </form>

                        <div className="mt-10 pt-10 border-t border-white/5 text-center underline-offset-4">
                            <Link to="/login" className="inline-flex items-center gap-2 text-white/30 hover:text-white transition-colors text-xs font-bold tracking-[0.2em] uppercase">
                                <FiArrowLeft />
                                Back to Login
                            </Link>
                        </div>
                    </div>
                </motion.div>
            </div>

            <Footer />
        </div>
    );
};

export default ForgotPassword;
