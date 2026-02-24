import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
    FiCreditCard,
    FiLock,
    FiShield,
    FiArrowLeft,
    FiZap,
    FiActivity
} from "react-icons/fi";
import api from "@/lib/api";
import { toast } from "sonner";

const Checkout = () => {
    const { planSlug } = useParams();
    const navigate = useNavigate();
    const [isProcessing, setIsProcessing] = useState(false);
    const [cardData, setCardData] = useState({
        card_number: "",
        expiry_month: "",
        expiry_year: "",
        cvv: "",
        card_holder: ""
    });

    const handlePayment = async (e: React.FormEvent) => {
        e.preventDefault();

        // Basic validation for 4242 dummy card
        if (cardData.card_number.replace(/\s/g, "") !== "4242424242424242" && !cardData.card_number.startsWith("4111")) {
            toast.error("Vocal authentication failed. Card pattern unrecognized by neural core.");
            return;
        }

        setIsProcessing(true);
        toast.info("Sending encrypted packet to payment gateway...");

        try {
            const resp = await api.subscribe(planSlug || "pro", cardData);
            if (resp.status === "success") {
                toast.success(`Protocol elevation to ${planSlug} complete.`);
                navigate("/dashboard/billing");
            } else {
                toast.error(resp.message || "Payment protocol rejected.");
            }
        } catch (err) {
            toast.error("Neural interference. Payment broadcast interrupted.");
        } finally {
            setIsProcessing(false);
        }
    };

    const formatCardNumber = (value: string) => {
        const v = value.replace(/\s+/g, "").replace(/[^0-9]/gi, "");
        const matches = v.match(/\d{4,16}/g);
        const match = (matches && matches[0]) || "";
        const parts = [];

        for (let i = 0, len = match.length; i < len; i += 4) {
            parts.push(match.substring(i, i + 4));
        }

        if (parts.length > 0) {
            return parts.join(" ");
        } else {
            return value;
        }
    };

    return (
        <div className="max-w-4xl mx-auto space-y-12 pb-20">
            <button
                onClick={() => navigate(-1)}
                className="flex items-center gap-2 text-white/40 hover:text-white transition-colors text-xs tracking-widest uppercase font-bold"
            >
                <FiArrowLeft /> Back to Clusters
            </button>

            <header>
                <span className="text-[10px] tracking-[0.5em] uppercase text-primary font-bold mb-4 block">Secure Checkout</span>
                <h1 className="font-display text-5xl font-bold mb-6">Initialize Migration</h1>
                <p className="text-white/40 text-lg font-light leading-relaxed">
                    Confirm your identity and authorize the neural credit transfer to synchronize with the <span className="text-white font-bold">{planSlug?.toUpperCase()}</span> cluster.
                </p>
            </header>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                {/* Checkout Form */}
                <form onSubmit={handlePayment} className="space-y-8 p-10 rounded-[3rem] border border-white/5 bg-white/[0.02] backdrop-blur-3xl">
                    <div className="space-y-6">
                        <div className="space-y-2">
                            <label className="text-[10px] tracking-widest uppercase text-white/20 font-bold ml-1">Card Holder Identity</label>
                            <input
                                type="text"
                                required
                                value={cardData.card_holder}
                                onChange={(e) => setCardData({ ...cardData, card_holder: e.target.value })}
                                placeholder="OPERATOR NAME"
                                className="w-full h-14 rounded-2xl border border-white/5 bg-white/[0.02] px-6 text-sm text-white placeholder:text-white/10 focus:border-primary/40 focus:bg-white/[0.04] outline-none transition-all uppercase tracking-widest"
                            />
                        </div>

                        <div className="space-y-2">
                            <label className="text-[10px] tracking-widest uppercase text-white/20 font-bold ml-1">Card Frequency Number</label>
                            <div className="relative">
                                <FiCreditCard className="absolute left-5 top-1/2 -translate-y-1/2 text-white/20" />
                                <input
                                    type="text"
                                    required
                                    maxLength={19}
                                    value={cardData.card_number}
                                    onChange={(e) => setCardData({ ...cardData, card_number: formatCardNumber(e.target.value) })}
                                    placeholder="4242 4242 4242 4242"
                                    className="w-full h-14 rounded-2xl border border-white/5 bg-white/[0.02] pl-14 pr-6 text-sm text-white placeholder:text-white/10 focus:border-primary/40 focus:bg-white/[0.04] outline-none transition-all"
                                />
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-[10px] tracking-widest uppercase text-white/20 font-bold ml-1">Expiry Alignment</label>
                                <input
                                    type="text"
                                    required
                                    placeholder="MM / YY"
                                    onChange={(e) => {
                                        const [m, y] = e.target.value.split(" / ");
                                        setCardData({ ...cardData, expiry_month: m || "", expiry_year: y || "" });
                                    }}
                                    className="w-full h-14 rounded-2xl border border-white/5 bg-white/[0.02] px-6 text-sm text-white placeholder:text-white/10 focus:border-primary/40 focus:bg-white/[0.04] outline-none transition-all"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-[10px] tracking-widest uppercase text-white/20 font-bold ml-1">Secure CVV</label>
                                <div className="relative">
                                    <FiLock className="absolute left-5 top-1/2 -translate-y-1/2 text-white/20" />
                                    <input
                                        type="password"
                                        required
                                        maxLength={4}
                                        value={cardData.cvv}
                                        onChange={(e) => setCardData({ ...cardData, cvv: e.target.value })}
                                        placeholder="•••"
                                        className="w-full h-14 rounded-2xl border border-white/5 bg-white/[0.02] pl-14 pr-6 text-sm text-white placeholder:text-white/10 focus:border-primary/40 focus:bg-white/[0.04] outline-none transition-all"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="pt-6 border-t border-white/5 flex flex-col gap-6">
                        <div className="flex items-center justify-between px-2">
                            <div className="flex items-center gap-3 text-white/40 text-[10px] tracking-widest uppercase font-bold">
                                <FiShield className="text-primary" />
                                SSL Encrypted
                            </div>
                            <div className="flex items-center gap-3 text-white/40 text-[10px] tracking-widest uppercase font-bold">
                                <FiZap className="text-primary" />
                                Instant Sync
                            </div>
                        </div>

                        <button
                            type="submit"
                            disabled={isProcessing}
                            className="group relative w-full h-20 rounded-[2rem] bg-white flex items-center justify-center gap-4 text-black font-display font-bold text-lg tracking-widest uppercase hover:bg-primary transition-all active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed group overflow-hidden"
                        >
                            {isProcessing ? (
                                <FiActivity className="animate-spin" />
                            ) : (
                                <>
                                    Authorize Protocol
                                    <motion.div
                                        className="absolute inset-0 bg-primary/20"
                                        initial={{ x: "-100%" }}
                                        whileHover={{ x: "0%" }}
                                        transition={{ duration: 0.4 }}
                                    />
                                </>
                            )}
                        </button>
                    </div>
                </form>

                {/* Summary Panel */}
                <div className="space-y-8">
                    <div className="p-10 rounded-[3rem] border border-white/5 bg-white/[0.02] relative overflow-hidden group">
                        <span className="text-[10px] tracking-[0.4em] uppercase text-white/20 font-bold mb-8 block">Neural Selection</span>
                        <div className="space-y-8 mb-12">
                            <div className="flex items-start justify-between">
                                <div>
                                    <h3 className="text-2xl font-bold italic mb-2 uppercase">{planSlug} Access</h3>
                                    <p className="text-sm text-white/40 font-light">Sub-atomic frequency processing & high-fidelity synthesis</p>
                                </div>
                                <div className="text-right">
                                    <p className="text-2xl font-bold">${planSlug === 'pro' ? '29.99' : planSlug === 'enterprise' ? '299.99' : '0.00'}</p>
                                    <p className="text-[10px] text-white/20 font-bold tracking-widest uppercase">/ cycle</p>
                                </div>
                            </div>
                        </div>

                        <div className="pt-8 border-t border-white/5 space-y-4">
                            <div className="flex justify-between text-xs font-bold tracking-widest uppercase">
                                <span className="text-white/40">Sync Initiation</span>
                                <span>$0.00</span>
                            </div>
                            <div className="flex justify-between text-xl font-bold tracking-widest uppercase pt-4 border-t border-white/5 text-primary">
                                <span>Total Payload</span>
                                <span>${planSlug === 'pro' ? '29.99' : planSlug === 'enterprise' ? '299.99' : '0.00'}</span>
                            </div>
                        </div>

                        <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary/5 rounded-full blur-[80px] group-hover:bg-primary/10 transition-colors" />
                    </div>

                    <div className="p-8 rounded-[2.5rem] border border-white/5 bg-white/[0.01]">
                        <p className="text-[10px] text-white/20 font-light leading-relaxed">
                            By authorizing, you agree to the Vexon Neural Protocols. Your payment frequency is set to automatic monthly synchronization. All credit transfers are final within the current cycle.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Checkout;
