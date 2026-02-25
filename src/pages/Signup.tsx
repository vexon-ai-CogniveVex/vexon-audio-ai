import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { FiUser, FiMail, FiLock, FiArrowRight, FiActivity } from "react-icons/fi";
import { FaGoogle, FaGithub } from "react-icons/fa";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import api from "@/lib/api";
import { toast } from "sonner";
import ReCAPTCHA from "react-google-recaptcha";

const VITE_RECAPTCHA_SITE_KEY = import.meta.env.VITE_RECAPTCHA_SITE_KEY;

const Signup = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        username: "",
        email: "",
        first_name: "",
        last_name: "",
        password: ""
    });
    const [isLoading, setIsLoading] = useState(false);
    const [captchaToken, setCaptchaToken] = useState<string | null>(null);

    const handleSignup = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!captchaToken) {
            toast.error("Please complete the neural handshake (CAPTCHA).");
            return;
        }

        setIsLoading(true);

        try {
            const resp = await api.signup(formData, captchaToken);
            if (resp.status === "success") {
                toast.success("Entity registered in the database.");
                navigate("/dashboard");
            } else {
                toast.error(resp.message || "Registration failed.");
            }
        } catch (err) {
            toast.error("Network rejection. Identity verification failed.");
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
                        <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-purple-600 mb-8 shadow-2xl shadow-primary/20">
                            <FiActivity className="text-white text-2xl" />
                        </div>

                        <h1 className="font-display text-4xl font-bold mb-3">Join the Vanguard</h1>
                        <p className="text-white/40 font-light mb-10 tracking-wide text-sm uppercase">Initialize your neural identity</p>

                        {/* Social Logins */}
                        <div className="grid grid-cols-2 gap-4 mb-8">
                            <button
                                onClick={() => window.location.href = "https://api.cognivevex.com/api/auth/google/redirect"}
                                className="flex items-center justify-center gap-3 h-14 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] transition-all text-sm font-bold tracking-tight"
                            >
                                <FaGoogle className="text-red-500" />
                                Google
                            </button>
                            <button
                                onClick={() => window.location.href = "https://api.cognivevex.com/api/auth/github/redirect"}
                                className="flex items-center justify-center gap-3 h-14 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] transition-all text-sm font-bold tracking-tight"
                            >
                                <FaGithub />
                                GitHub
                            </button>
                        </div>

                        <div className="flex items-center gap-4 mb-8 text-white/10">
                            <div className="h-px flex-grow bg-white/5" />
                            <span className="text-[10px] font-bold tracking-[0.2em] uppercase">OR</span>
                            <div className="h-px flex-grow bg-white/5" />
                        </div>

                        <form className="space-y-6 text-left" onSubmit={handleSignup}>
                            <div className="space-y-2">
                                <label className="text-[10px] tracking-[0.3em] font-bold text-white/30 uppercase ml-1">Entity Name</label>
                                <div className="relative group">
                                    <FiUser className="absolute left-5 top-1/2 -translate-y-1/2 text-white/20 group-focus-within:text-primary transition-colors" />
                                    <input
                                        type="text"
                                        required
                                        value={formData.username}
                                        onChange={(e) => setFormData({ ...formData, username: e.target.value })}
                                        placeholder="IDENTIFY"
                                        className="w-full h-14 rounded-2xl border border-white/5 bg-white/[0.02] pl-12 pr-6 text-sm text-white placeholder:text-white/10 focus:border-primary/40 focus:bg-white/[0.04] outline-none transition-all"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-[10px] tracking-[0.3em] font-bold text-white/30 uppercase ml-1">Frequency Address</label>
                                <div className="relative group">
                                    <FiMail className="absolute left-5 top-1/2 -translate-y-1/2 text-white/20 group-focus-within:text-primary transition-colors" />
                                    <input
                                        type="email"
                                        required
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                        placeholder="PROTOCOL"
                                        className="w-full h-14 rounded-2xl border border-white/5 bg-white/[0.02] pl-12 pr-6 text-sm text-white placeholder:text-white/10 focus:border-primary/40 focus:bg-white/[0.04] outline-none transition-all"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-[10px] tracking-[0.3em] font-bold text-white/30 uppercase ml-1">Secure Key</label>
                                <div className="relative group">
                                    <FiLock className="absolute left-5 top-1/2 -translate-y-1/2 text-white/20 group-focus-within:text-primary transition-colors" />
                                    <input
                                        type="password"
                                        required
                                        value={formData.password}
                                        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                                        placeholder="••••••••"
                                        className="w-full h-14 rounded-2xl border border-white/5 bg-white/[0.02] pl-12 pr-6 text-sm text-white placeholder:text-white/10 focus:border-primary/40 focus:bg-white/[0.04] outline-none transition-all"
                                    />
                                </div>
                            </div>

                            {/* reCAPTCHAHandshake */}
                            <div className="flex justify-center py-2">
                                <ReCAPTCHA
                                    sitekey={VITE_RECAPTCHA_SITE_KEY} // Testing key
                                    onChange={(token) => setCaptchaToken(token)}
                                    theme="dark"
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={isLoading}
                                className="group w-full h-16 rounded-2xl bg-white flex items-center justify-center gap-3 text-black font-display font-bold text-sm tracking-widest uppercase hover:bg-primary transition-colors mt-8 disabled:opacity-50"
                            >
                                {isLoading ? "Initialize Creation..." : "Initialize Creation"}
                                <FiArrowRight className="transition-transform group-hover:translate-x-1" />
                            </button>
                        </form>

                        <div className="mt-10 pt-10 border-t border-white/5 text-center">
                            <p className="text-white/30 text-xs font-light tracking-wide">
                                Already part of the network? <Link to="/login" className="text-white font-bold hover:text-primary transition-colors">Acknowledge Login</Link>
                            </p>
                        </div>
                    </div>
                </motion.div>
            </div>

            <Footer />
        </div>
    );
};

export default Signup;
