import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { motion } from "framer-motion";
import { FiActivity, FiZap } from "react-icons/fi";
import api from "@/lib/api";
import { toast } from "sonner";

const AuthCallback = () => {
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const [status, setStatus] = useState("Synchronizing identity...");

    useEffect(() => {
        const handleCallback = async () => {
            const token = searchParams.get("token");
            const provider = searchParams.get("provider"); // google or github
            const error = searchParams.get("error");

            if (error) {
                toast.error(`Authentication failed: ${error}`);
                navigate("/login");
                return;
            }

            if (!token || !provider) {
                toast.error("Malformed authentication handshake.");
                navigate("/login");
                return;
            }

            setStatus(`Establishing link via ${provider}...`);

            try {
                let resp;
                if (provider === "google") {
                    resp = await api.loginWithGoogle(token);
                } else if (provider === "github") {
                    resp = await api.loginWithGitHub(token);
                }

                if (resp?.status === "success") {
                    toast.success("Neural connection established.");
                    navigate("/dashboard");
                } else {
                    toast.error(resp?.message || "Handshake rejected.");
                    navigate("/login");
                }
            } catch (err) {
                toast.error("Network interference during handshake.");
                navigate("/login");
            }
        };

        handleCallback();
    }, [searchParams, navigate]);

    return (
        <div className="min-h-screen bg-[#050505] text-white flex items-center justify-center p-6">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] opacity-50" />

            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="relative z-10 text-center"
            >
                <div className="inline-flex h-20 w-20 items-center justify-center rounded-[2rem] bg-gradient-to-br from-primary to-purple-600 mb-8 shadow-2xl shadow-primary/20 animate-pulse">
                    <FiActivity className="text-white text-3xl" />
                </div>

                <h2 className="font-display text-2xl font-bold mb-4">{status}</h2>
                <div className="flex items-center justify-center gap-4 text-white/40 text-sm tracking-widest uppercase">
                    <FiZap className="animate-bounce" />
                    <span>Neural handshake in progress</span>
                    <FiZap className="animate-bounce" />
                </div>
            </motion.div>
        </div>
    );
};

export default AuthCallback;
