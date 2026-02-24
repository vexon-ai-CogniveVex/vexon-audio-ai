import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
    FiCreditCard,
    FiCheck,
    FiCalendar,
    FiFileText,
    FiArrowRight,
    FiZap,
    FiShield
} from "react-icons/fi";
import api from "@/lib/api";
import { toast } from "sonner";

const Billing = () => {
    const navigate = useNavigate();
    const [plans, setPlans] = useState<any[]>([]);
    const [currentPlan, setCurrentPlan] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const plansResp = await api.getPlans();
                const userSession = api.getCurrentUser();

                if (plansResp.status === "success") {
                    setPlans(plansResp.data || []);
                }
                if (userSession) {
                    setCurrentPlan(userSession.user.current_plan);
                }
            } catch (err) {
                toast.error("Failed to load billing data.");
            } finally {
                setIsLoading(false);
            }
        };
        fetchData();
    }, []);

    const handleUpgrade = (slug: string) => {
        navigate(`/dashboard/checkout/${slug}`);
    };

    if (isLoading) return <div className="flex items-center justify-center min-h-[400px]">
        <FiZap className="text-primary animate-pulse text-4xl" />
    </div>;

    return (
        <div className="space-y-12">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Current Plan Status */}
                <div className="lg:col-span-2 p-10 rounded-[3rem] border border-white/5 bg-white/[0.02] backdrop-blur-3xl relative overflow-hidden">
                    <div className="relative z-10">
                        <span className="text-[10px] tracking-[0.4em] uppercase text-primary font-bold mb-6 block">Account Status</span>
                        <h2 className="font-display text-3xl font-bold mb-4">Neural Tier: {currentPlan?.toUpperCase()}</h2>
                        <p className="text-white/40 text-sm font-light leading-relaxed mb-10 max-w-md">
                            Your identity is currently synchronized with the {currentPlan} processing cluster. Next refresh: March 24, 2026.
                        </p>

                        <div className="flex flex-wrap gap-8">
                            <div className="space-y-2">
                                <p className="text-[10px] tracking-widest uppercase text-white/20 font-bold">Billing Cycle</p>
                                <div className="flex items-center gap-3 text-white">
                                    <FiCalendar className="text-primary" />
                                    <span className="font-bold">Monthly</span>
                                </div>
                            </div>
                            <div className="space-y-2">
                                <p className="text-[10px] tracking-widest uppercase text-white/20 font-bold">Active Shield</p>
                                <div className="flex items-center gap-3 text-white">
                                    <FiShield className="text-primary" />
                                    <span className="font-bold">Enabled</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Deco */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-[80px] -mr-32 -mt-32" />
                </div>

                {/* Card Management */}
                <div className="p-10 rounded-[3rem] border border-white/5 bg-white/[0.02] backdrop-blur-3xl flex flex-col justify-between">
                    <div>
                        <span className="text-[10px] tracking-[0.4em] uppercase text-white/20 font-bold mb-6 block">Payment Method</span>
                        <div className="p-6 rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent mb-6">
                            <div className="flex justify-between items-start mb-8">
                                <FiCreditCard className="text-2xl text-white/40" />
                                <span className="text-[10px] font-bold text-white/20 tracking-widest uppercase italic font-display">Neural Card</span>
                            </div>
                            <p className="text-lg font-bold tracking-[0.2em] text-white">•••• •••• •••• 4111</p>
                        </div>
                    </div>
                    <button className="w-full py-4 rounded-xl border border-white/5 bg-white/5 text-[10px] tracking-widest uppercase font-bold hover:bg-white/10 transition-colors">
                        Update Card
                    </button>
                </div>
            </div>

            {/* Plans Grid */}
            <div className="space-y-8">
                <h3 className="font-display text-2xl font-bold px-4 text-center lg:text-left">Cluster Migration</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {plans.map((plan, i) => (
                        <motion.div
                            key={plan.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            className={`p-10 rounded-[3rem] border ${currentPlan === plan.slug ? 'border-primary/50 bg-primary/5' : 'border-white/5 bg-white/[0.02]'} backdrop-blur-3xl flex flex-col`}
                        >
                            <h4 className="font-display text-2xl font-bold mb-2">{plan.name}</h4>
                            <p className="text-white/40 text-sm font-light mb-8">{plan.description}</p>

                            <div className="mb-10 flex items-baseline gap-2">
                                <span className="text-4xl font-bold">${plan.price}</span>
                                <span className="text-xs text-white/20 font-bold tracking-widest uppercase">/ cycle</span>
                            </div>

                            <ul className="space-y-4 mb-12 flex-grow">
                                <li className="flex items-center gap-3 text-sm text-white/60">
                                    <FiCheck className="text-primary" />
                                    <span>Spectral Filtering</span>
                                </li>
                                <li className="flex items-center gap-3 text-sm text-white/60">
                                    <FiCheck className="text-primary" />
                                    <span>Neural Synth v1.4</span>
                                </li>
                                {plan.slug !== 'basic' && (
                                    <>
                                        <li className="flex items-center gap-3 text-sm text-white/60">
                                            <FiCheck className="text-primary" />
                                            <span>Full Architecture Access</span>
                                        </li>
                                        <li className="flex items-center gap-3 text-sm text-white/60">
                                            <FiCheck className="text-primary" />
                                            <span>Zero-Latency Routing</span>
                                        </li>
                                    </>
                                )}
                            </ul>

                            <button
                                onClick={() => handleUpgrade(plan.slug)}
                                disabled={currentPlan === plan.slug}
                                className={`w-full py-5 rounded-2xl font-bold text-[10px] tracking-widest uppercase transition-all ${currentPlan === plan.slug
                                    ? 'bg-white/5 text-white/20 border border-white/5 cursor-not-allowed'
                                    : 'bg-white text-black hover:bg-primary active:scale-95'
                                    }`}
                            >
                                {currentPlan === plan.slug ? "Active Tier" : "Initialize Migration"}
                            </button>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Invoice List */}
            <div className="pt-12 border-t border-white/5">
                <div className="flex items-center justify-between mb-8 px-4">
                    <h3 className="font-display text-xl font-bold">Transaction History</h3>
                    <button className="flex items-center gap-2 text-primary text-[10px] tracking-widest uppercase font-bold hover:underline">
                        Download All <FiFileText />
                    </button>
                </div>

                <div className="rounded-[2.5rem] border border-white/5 bg-white/[0.01] overflow-hidden">
                    {[
                        { date: "Feb 24, 2026", invoice: "INV-88219", amount: "$29.99", status: "Success" },
                        { date: "Jan 24, 2026", invoice: "INV-87211", amount: "$29.99", status: "Success" }
                    ].map((row, i) => (
                        <div key={i} className="flex items-center justify-between p-8 border-b border-white/5 last:border-0 hover:bg-white/[0.02] transition-colors">
                            <div className="flex items-center gap-8">
                                <p className="text-sm font-bold text-white/60">{row.date}</p>
                                <p className="text-[10px] font-bold text-white/20 tracking-widest uppercase">{row.invoice}</p>
                            </div>
                            <div className="flex items-center gap-12 text-right">
                                <p className="font-bold">{row.amount}</p>
                                <span className="px-4 py-1.5 rounded-full bg-green-400/10 text-green-400 text-[10px] font-bold tracking-widest uppercase">
                                    {row.status}
                                </span>
                                <button className="p-2 text-white/20 hover:text-white transition-colors">
                                    <FiFileText size={18} />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Billing;
