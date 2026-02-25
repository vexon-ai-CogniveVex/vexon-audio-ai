import { ReactNode, useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
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
    FiUser,
    FiChevronLeft,
    FiChevronRight
} from "react-icons/fi";
import Logo from "../Logo";
import api, { User } from "@/lib/api";
import { toast } from "sonner";

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
    const [isCollapsed, setIsCollapsed] = useState(false);
    const [user, setUser] = useState<User | null>(null);
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        const session = api.getCurrentUser();
        if (session) {
            setUser(session.user);
        }
    }, [location]);

    const handleLogout = () => {
        api.logout();
        toast.success("Identity purged. Connection closed.");
        navigate("/");
    };

    return (
        <div className="min-h-screen bg-[#050505] text-white flex overflow-hidden">
            {/* Desktop Sidebar */}
            <aside className={`hidden lg:flex flex-col relative border-r border-white/5 bg-white/[0.02] backdrop-blur-3xl pt-10 transition-all duration-500 ease-[0.22, 1, 0.36, 1] ${isCollapsed ? 'w-24' : 'w-72'}`}>
                {/* Collapse Toggle */}
                <button
                    onClick={() => setIsCollapsed(!isCollapsed)}
                    className="absolute -right-3 top-12 w-6 h-6 rounded-full bg-white border border-white/10 text-black flex items-center justify-center z-10 hover:bg-primary transition-colors hover:text-white"
                >
                    {isCollapsed ? <FiChevronRight size={12} /> : <FiChevronLeft size={12} />}
                </button>

                <div className={`mb-16 transition-all duration-500 ${isCollapsed ? 'px-4' : 'px-8'}`}>
                    <Logo
                        size={isCollapsed ? "sm" : "md"}
                        iconOnly={isCollapsed}
                        className="transition-all duration-500"
                        to="/dashboard"
                    />
                </div>

                <nav className="flex-grow px-4 space-y-2">
                    {sidebarLinks.map((link) => {
                        const isActive = location.pathname === link.path;
                        return (
                            <Link
                                key={link.path}
                                to={link.path}
                                title={isCollapsed ? link.label : ""}
                                className={`flex items-center rounded-2xl transition-all duration-300 group ${isActive
                                    ? "bg-white/5 text-primary shadow-inner"
                                    : "text-white/40 hover:text-white hover:bg-white/[0.02]"
                                    } ${isCollapsed ? 'justify-center py-4 px-0' : 'gap-4 px-6 py-4'}`}
                            >
                                <link.icon className={`text-xl ${isActive ? "text-primary" : "group-hover:text-primary transition-colors"} ${isCollapsed ? 'scale-110' : ''}`} />
                                {!isCollapsed && <span className="font-medium tracking-wide">{link.label}</span>}
                                {isActive && !isCollapsed && (
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
                    <button
                        onClick={handleLogout}
                        className={`flex items-center w-full text-white/40 hover:text-white transition-colors rounded-2xl hover:bg-white/[0.02] ${isCollapsed ? 'justify-center py-4 px-0' : 'gap-4 px-6 py-4'}`}
                    >
                        <FiLogOut className="text-xl" />
                        {!isCollapsed && <span className="font-medium">Logout</span>}
                    </button>
                </div>
            </aside>

            {/* Mobile Top Nav */}
            <div className="lg:hidden fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 bg-black/40 backdrop-blur-2xl border-b border-white/5">
                <Link to="/dashboard" className="flex items-center gap-2">
                    <Logo size="sm" iconOnly className="scale-75" />
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
                                    <Logo size="sm" iconOnly />
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

                            <button
                                onClick={handleLogout}
                                className="flex items-center gap-4 px-6 py-5 text-red-500/60 hover:text-red-500"
                            >
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
                                <p className="text-sm font-bold truncate max-w-[150px]">{user?.first_name ? `${user.first_name} ${user.last_name || ''}` : user?.username || "Protocol User"}</p>
                                <p className="text-[10px] text-white/20 tracking-widest uppercase">Rank: {user?.current_plan || "Pro"}</p>
                            </div>
                            <div className="w-12 h-12 rounded-2xl border border-white/10 bg-gradient-to-br from-primary/10 to-purple-600/10 flex items-center justify-center overflow-hidden">
                                {user?.avatar ? (
                                    <img src={user.avatar} alt="Avatar" className="w-full h-full object-cover" />
                                ) : (
                                    <FiUser className="text-primary text-xl" />
                                )}
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

