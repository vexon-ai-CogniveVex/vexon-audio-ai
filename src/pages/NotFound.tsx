import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { FiHome, FiActivity } from "react-icons/fi";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: Protocol mismatch or non-existent node accessed:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#050505] text-white p-6 overflow-hidden relative">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-[2rem] border border-white/10 bg-white/5 mb-10">
            <FiActivity className="text-primary text-3xl animate-pulse" />
          </div>

          <h1 className="font-display text-[10rem] md:text-[15rem] font-bold leading-none tracking-tighter text-white opacity-10 select-none">
            404
          </h1>

          <div className="mt-[-4rem] md:mt-[-6rem]">
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
              Neural Path <span className="text-white/30 italic">Severed.</span>
            </h2>
            <p className="text-white/40 text-lg font-light mb-12 max-w-md mx-auto">
              The requested node at <code className="bg-white/5 px-2 py-1 rounded text-primary text-sm">{location.pathname}</code> could not be located in the Vexon central database.
            </p>

            <Link to="/">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group inline-flex items-center gap-4 rounded-full bg-white px-10 py-5 font-display text-sm font-bold tracking-widest uppercase text-black transition-all hover:bg-primary"
              >
                Restore Core Link
                <FiHome className="text-lg group-hover:rotate-12 transition-transform" />
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Status Indicators */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex gap-8">
        <span className="text-[10px] tracking-[0.2em] font-bold text-white/10 uppercase">Error: Protocol_Mismatch</span>
        <span className="text-[10px] tracking-[0.2em] font-bold text-white/10 uppercase">System: Vexon-v2.0.4</span>
      </div>
    </div>
  );
};

export default NotFound;

