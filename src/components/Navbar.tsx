import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FiMenu, FiX, FiActivity } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "./Logo";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "Vexon AI", path: "/product" },
  { label: "Features", path: "/features" },
  { label: "About", path: "/about" },
  { label: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'py-4' : 'py-8'}`}>
      <div className="container mx-auto px-6">
        <div className={`flex h-20 items-center justify-between px-8 transition-all duration-500 rounded-[2rem] border ${scrolled ? 'bg-black/40 border-white/10 backdrop-blur-2xl py-2' : 'bg-transparent border-transparent'}`}>
          <Logo size="md" />
          <div className="flex items-center gap-8">
            <div className="hidden items-center gap-1 lg:flex">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`relative px-5 py-2 text-[10px] font-bold tracking-[0.3em] uppercase transition-all duration-300 ${location.pathname === link.path
                    ? "text-primary"
                    : "text-white/40 hover:text-white"
                    }`}
                >
                  {location.pathname === link.path && (
                    <motion.div
                      layoutId="nav-dot"
                      className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-secondary shadow-[0_0_8px_rgba(255,100,100,0.8)]"
                    />
                  )}
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="hidden items-center gap-6 md:flex">
            <Link
              to="/product"
              className="relative group overflow-hidden rounded-full bg-white px-8 py-3 text-[10px] font-bold tracking-[0.2em] uppercase text-black transition-all hover:pr-10"
            >
              <span className="relative z-10 transition-transform group-hover:-translate-x-1 inline-block">Initialize Engine</span>
              <div className="absolute top-1/2 -right-4 -translate-y-1/2 opacity-0 transition-all group-hover:right-4 group-hover:opacity-100">
                <FiActivity className="text-sm" />
              </div>
            </Link>
          </div>

          <button
            onClick={() => setOpen(!open)}
            className="relative z-50 flex items-center justify-center w-12 h-12 rounded-full bg-white/5 border border-white/10 text-white lg:hidden"
          >
            {open ? <FiX size={20} /> : <FiMenu size={20} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="absolute top-full left-6 right-6 mt-4 p-8 rounded-[3rem] bg-black/95 border border-white/10 backdrop-blur-3xl lg:hidden"
          >
            <div className="flex flex-col gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setOpen(false)}
                  className="text-2xl font-display font-bold text-white/40 hover:text-white transition-colors"
                >
                  {link.label}
                </Link>
              ))}
              <div className="h-px bg-white/10 my-4" />
              <Link
                to="/product"
                onClick={() => setOpen(false)}
                className="rounded-full bg-white px-8 py-5 text-center text-xs font-bold tracking-[0.2em] uppercase text-black"
              >
                Launch Platform
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;

