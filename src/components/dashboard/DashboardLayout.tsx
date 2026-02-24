import { ReactNode, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
    FiHome,
    FiZap,
    FiActivity,
    FiCreditCard,
    FiSettings,
    FiLogOut,
    FiMenu,
    FiX,
    FiBell,
    FiUser
} from "react-icons/fi";

const sidebarLinks = [
    { icon: FiHome, label: "Overview", path: "/dashboard" },
    { icon: FiZap, label: "Neural Lab", path: "/dashboard/neural-lab" },
    { icon: FiActivity, label: "Spectral Pro", path: "/dashboard/spectral-pro" },
    { icon: FiCreditCard, label: "Billing", path: "/dashboard/billing" },
    { icon: FiSettings, label: "Settings", path: "/dashboard/settings" },
];

interface DashboardLayoutProps {
    children: ReactNode;
}

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const location = useLocation();

    return (
        <div className="min-h-screen bg-[#050505] text-white flex overflow-hidden">
            {/* Desktop Sidebar */}
            <aside className="hidden lg:flex flex-col w-72 border-r border-white/5 bg-white/[0.02] backdrop-blur-3xl pt-10">
                <div className="px-8 mb-16">
                    <Link to="/" className="flex items-center gap-3 group">
                        <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center shadow-lg shadow-primary/20 transition-transform group-hover:scale-110">
                            <FiActivity className="text-white text-xl" />
                        </div>
                        <span className="font-display text-xl font-bold tracking-tight">Vexon AI</span>
                    </Link>
                </div>

                <nav className="flex-grow px-4 space-y-2">
                    {sidebarLinks.map((link) => {
                        const isActive = location.pathname === link.path;
                        return (
                            <Link
                                key={link.path}
                                to={link.path}
                                className={`flex items-center gap-4 px-6 py-4 rounded-2xl transition-all duration-300 group ${isActive
                                        ? "bg-white/5 text-primary shadow-inner"
                                        : "text-white/40 hover:text-white hover:bg-white/[0.02]"
                                    }`}
                            >
                                <link.icon className={`text-xl ${isActive ? "text-primary" : "group-hover:text-primary transition-colors"}`} />
                                <span className="font-medium tracking-wide">{link.label}</span>
                                {isActive && (
                                    <motion.div
                                        layoutId="active-pill"
                                        className="ml-auto w-1.5 h-1.5 rounded-full bg-primary shadow-[0_0_10px_rgba(var(--primary-rgb),0.5)]"
                                    />
                                )}
                            </Link>
                        );
                    })}
                </nav>

                <div className="p-6 border-t border-white/5">
                    <button className="flex items-center gap-4 w-full px-6 py-4 text-white/40 hover:text-white transition-colors rounded-2xl hover:bg-white/[0.02]">
                        <FiLogOut className="text-xl" />
                        <span className="font-medium">Logout</span>
                    </button>
                </div>
            </aside>

            {/* Mobile Top Nav */}
            <div className="lg:hidden fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 bg-black/40 backdrop-blur-2xl border-b border-white/5">
                <Link to="/" className="flex items-center gap-2">
                    <FiActivity className="text-primary text-2xl" />
                    <span className="font-display font-bold">Vexon</span>
                </Link>
                <button onClick={() => setIsSidebarOpen(true)} className="p-2 text-white/60 hover:text-white">
                    <FiMenu size={24} />
                </button>
            </div>

            {/* Mobile Sidebar Overlay */}
            <AnimatePresence>
                {isSidebarOpen && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsSidebarOpen(false)}
                            className="lg:hidden fixed inset-0 z-[60] bg-black/80 backdrop-blur-sm"
                        />
                        <motion.aside
                            initial={{ x: "-100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "-100%" }}
                            transition={{ type: "spring", damping: 25, stiffness: 200 }}
                            className="lg:hidden fixed top-0 left-0 bottom-0 w-80 z-[70] bg-[#0a0a0a] border-r border-white/5 p-8 flex flex-col"
                        >
                            <div className="flex items-center justify-between mb-16">
                                <div className="flex items-center gap-3">
                                    <FiActivity className="text-primary text-2xl" />
                                    <span className="font-display text-xl font-bold">Vexon AI</span>
                                </div>
                                <button onClick={() => setIsSidebarOpen(false)} className="text-white/40 hover:text-white">
                                    <FiX size={24} />
                                </button>
                            </div>

                            <nav className="flex-grow space-y-2">
                                {sidebarLinks.map((link) => (
                                    <Link
                                        key={link.path}
                                        to={link.path}
                                        onClick={() => setIsSidebarOpen(false)}
                                        className={`flex items-center gap-4 px-6 py-5 rounded-2xl ${location.pathname === link.path ? "bg-white/5 text-primary" : "text-white/40"
                                            }`}
                                    >
                                        <link.icon size={22} />
                                        <span className="text-lg">{link.label}</span>
                                    </Link>
                                ))}
                            </nav>

                            <button className="flex items-center gap-4 px-6 py-5 text-red-500/60 hover:text-red-500">
                                <FiLogOut size={22} />
                                <span className="text-lg">Logout</span>
                            </button>
                        </motion.aside>
                    </>
                )}
            </AnimatePresence>

            {/* Main Content */}
            <main className="flex-grow flex flex-col min-w-0 h-screen overflow-y-auto pt-20 lg:pt-0">
                <header className="hidden lg:flex items-center justify-between px-12 py-8 border-b border-white/5">
                    <div>
                        <h2 className="text-white/40 text-xs font-bold tracking-[0.3em] uppercase">Core Interface</h2>
                        <p className="font-display font-bold text-lg">
                            {sidebarLinks.find(l => l.path === location.pathname)?.label || "Dashboard"}
                        </p>
                    </div>

                    <div className="flex items-center gap-6">
                        <button className="relative w-12 h-12 rounded-2xl border border-white/5 bg-white/[0.02] flex items-center justify-center text-white/40 hover:text-white transition-all">
                            <FiBell size={20} />
                            <div className="absolute top-3 right-3 w-2 h-2 rounded-full bg-primary shadow-[0_0_8px_rgba(var(--primary-rgb),0.5)]" />
                        </button>
                        <div className="flex items-center gap-4 border-l border-white/5 pl-6">
                            <div className="text-right">
                                <p className="text-sm font-bold">Protocol User</p>
                                <p className="text-[10px] text-white/20 tracking-widest uppercase">Rank: Pro</p>
                            </div>
                            <div className="w-12 h-12 rounded-2xl border border-white/10 bg-gradient-to-br from-primary/10 to-purple-600/10 flex items-center justify-center">
                                <FiUser className="text-primary text-xl" />
                            </div>
                        </div>
                    </div>
                </header>

                <section className="flex-grow p-6 lg:p-12">
                    <motion.div
                        key={location.pathname}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4 }}
                    >
                        {children}
                    </motion.div>
                </section>
            </main>
        </div>
    );
};

export default DashboardLayout;
