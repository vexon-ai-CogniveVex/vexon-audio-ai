import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Product", path: "/product" },
  { label: "Features", path: "/features" },
  { label: "About", path: "/about" },
  { label: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-strong">
      <div className="container mx-auto flex h-16 items-center justify-between px-6">
        <Link to="/" className="flex items-center gap-3 group">
          <div className="relative flex items-center justify-center w-8 h-8">
            <div className="absolute inset-0 rounded-lg bg-primary/20 group-hover:bg-primary/30 transition-colors" />
            <div className="flex items-center gap-[2px]">
              {[10, 16, 22, 16, 10].map((h, i) => (
                <span key={i} className="waveform-line" style={{ height: h, width: 2 }} />
              ))}
            </div>
          </div>
          <span className="font-display text-lg font-bold tracking-tight text-foreground">
            Cognive<span className="text-gradient-primary">Vex</span>
          </span>
        </Link>

        <div className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`relative rounded-lg px-4 py-2 text-sm font-medium transition-all duration-300 ${
                location.pathname === link.path
                  ? "text-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {location.pathname === link.path && (
                <motion.div
                  layoutId="nav-active"
                  className="absolute inset-0 rounded-lg bg-muted"
                  transition={{ type: "spring", duration: 0.5 }}
                />
              )}
              <span className="relative z-10">{link.label}</span>
            </Link>
          ))}
          <div className="ml-4 h-5 w-px bg-border" />
          <Link
            to="/"
            className="ml-4 rounded-lg bg-primary px-5 py-2 text-sm font-semibold text-primary-foreground transition-all hover:shadow-glow-primary hover:scale-[1.02] active:scale-[0.98]"
          >
            Early Access
          </Link>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="relative z-50 rounded-lg p-2 text-foreground hover:bg-muted md:hidden"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-16 left-0 right-0 glass-strong border-t border-border/50 md:hidden"
          >
            <div className="flex flex-col gap-1 px-6 py-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-4 py-3 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                to="/"
                onClick={() => setOpen(false)}
                className="mt-2 rounded-lg bg-primary px-4 py-3 text-center text-sm font-semibold text-primary-foreground"
              >
                Early Access
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
