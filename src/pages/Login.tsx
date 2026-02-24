import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { FiMail, FiLock, FiArrowRight, FiActivity } from "react-icons/fi";
import { FaGoogle, FaGithub } from "react-icons/fa";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import api from "@/lib/api";
import { toast } from "sonner";
import ReCAPTCHA from "react-google-recaptcha";

const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [captchaToken, setCaptchaToken] = useState<string | null>(null);

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!captchaToken) {
            toast.error("Please complete the neural handshake (CAPTCHA).");
            return;
        }

        setIsLoading(true);

        try {
            const resp = await api.login(email, password, captchaToken);
            if (resp.status === "success") {
                toast.success("Connection established.");
                navigate("/dashboard");
            } else {
                toast.error(resp.message);
            }
        } catch (err) {
            toast.error("Vocal match failed. Network interference detected.");
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

                        <h1 className="font-display text-4xl font-bold mb-3">Welcome Back</h1>
                        <p className="text-white/40 font-light mb-10 tracking-wide text-sm uppercase">Re-establish neural connection</p>

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

                        <form className="space-y-6 text-left" onSubmit={handleLogin}>
                            <div className="space-y-2">
                                <label className="text-[10px] tracking-[0.3em] font-bold text-white/30 uppercase ml-1">Frequency Email</label>
                                <div className="relative group">
                                    <FiMail className="absolute left-5 top-1/2 -translate-y-1/2 text-white/20 group-focus-within:text-primary transition-colors" />
                                    <input
                                        type="email"
                                        required
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        placeholder="name@protocol.ai"
                                        className="w-full h-14 rounded-2xl border border-white/5 bg-white/[0.02] pl-12 pr-6 text-sm text-white placeholder:text-white/10 focus:border-primary/40 focus:bg-white/[0.04] outline-none transition-all"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <div className="flex justify-between items-center">
                                    <label className="text-[10px] tracking-[0.3em] font-bold text-white/30 uppercase ml-1">Secure Key</label>
                                    <Link to="/forgot-password" title="Recover Frequency" className="text-[10px] tracking-[0.2em] font-bold text-primary/60 hover:text-primary uppercase transition-colors">Lost Key?</Link>
                                </div>
                                <div className="relative group">
                                    <FiLock className="absolute left-5 top-1/2 -translate-y-1/2 text-white/20 group-focus-within:text-primary transition-colors" />
                                    <input
                                        type="password"
                                        required
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        placeholder="••••••••"
                                        className="w-full h-14 rounded-2xl border border-white/5 bg-white/[0.02] pl-12 pr-6 text-sm text-white placeholder:text-white/10 focus:border-primary/40 focus:bg-white/[0.04] outline-none transition-all"
                                    />
                                </div>
                            </div>

                            {/* reCAPTCHAHandshake */}
                            <div className="flex justify-center py-2">
                                <ReCAPTCHA
                                    sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI" // Testing key
                                    onChange={(token) => setCaptchaToken(token)}
                                    theme="dark"
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={isLoading}
                                className="group w-full h-16 rounded-2xl bg-white flex items-center justify-center gap-3 text-black font-display font-bold text-sm tracking-widest uppercase hover:bg-primary transition-colors mt-8 disabled:opacity-50"
                            >
                                {isLoading ? "Connecting..." : "Initialize Login"}
                                <FiArrowRight className="transition-transform group-hover:translate-x-1" />
                            </button>
                        </form>

                        <div className="mt-10 pt-10 border-t border-white/5 text-center">
                            <p className="text-white/30 text-xs font-light tracking-wide">
                                New to the network? <Link to="/signup" className="text-white font-bold hover:text-primary transition-colors">Register Entity</Link>
                            </p>
                        </div>
                    </div>
                </motion.div>
            </div>

            <Footer />
        </div>
    );
};

export default Login;
