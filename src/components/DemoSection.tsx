import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { FiUpload, FiPlay, FiPause, FiDisc, FiActivity, FiServer, FiCpu, FiPlus } from "react-icons/fi";
import { useState, useEffect } from "react";

const WaveformBar = ({ delay, height, isActive, index }: { delay: number; height: number; isActive: boolean; index: number }) => {
  // Use a sine-like wave for dynamic movement
  const dynamicHeight = isActive ? [height * 0.3, height, height * 0.3] : height * 0.1;
  const opacity = isActive ? 0.8 : 0.15;

  return (
    <div className="flex flex-col items-center gap-[2px]">
      <motion.div
        className="w-[3px] rounded-full bg-gradient-to-t from-primary/80 via-secondary/60 to-accent/40"
        animate={{
          height: dynamicHeight,
          opacity: opacity
        }}
        transition={{
          duration: 1.2,
          repeat: isActive ? Infinity : 0,
          delay: delay,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="w-[3px] rounded-full bg-gradient-to-b from-primary/30 via-secondary/20 to-transparent"
        animate={{
          height: isActive ? height * 0.4 : height * 0.05,
          opacity: opacity * 0.5
        }}
        transition={{
          duration: 1.2,
          repeat: isActive ? Infinity : 0,
          delay: delay,
          ease: "easeInOut"
        }}
      />
    </div>
  );
};

const MetadataTag = ({ icon: Icon, label, value, className }: any) => (
  <div className={`flex items-center gap-3 px-4 py-2 rounded-full border border-white/5 bg-white/[0.02] backdrop-blur-md ${className}`}>
    <Icon className="text-primary text-[10px]" />
    <span className="text-[9px] font-mono tracking-widest text-white/40 uppercase">{label}</span>
    <span className="text-[9px] font-mono tracking-widest text-primary font-bold">{value}</span>
  </div>
);

const DemoSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [rotation, setRotation] = useState(0);

  // Manual rotation drive for the needle arm sync
  useEffect(() => {
    let interval: any;
    if (isPlaying) {
      interval = setInterval(() => {
        setRotation(prev => (prev + 1) % 360);
      }, 50);
    }
    return () => clearInterval(interval);
  }, [isPlaying]);

  return (
    <section className="relative py-48 bg-[#030303] overflow-hidden">
      {/* Immersive Background */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[140px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-secondary/5 rounded-full blur-[140px] animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-[0.03] mix-blend-overlay" />
      </div>

      <div className="container relative z-10 mx-auto px-6">
        <div className="text-center mb-28">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 mb-6"
          >
            <div className="w-8 h-px bg-primary/50" />
            <span className="text-[10px] tracking-[0.6em] uppercase text-primary font-black">
              Neural Audio Hub
            </span>
            <div className="w-8 h-px bg-primary/50" />
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display text-6xl md:text-8xl font-bold text-white tracking-tighter"
          >
            Sonic <span className="text-transparent bg-clip-text bg-gradient-to-r from-white/40 to-white/10 italic">Precision.</span>
          </motion.h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto max-w-6xl relative"
        >
          {/* Floating Metadata - Top Left */}
          <div className="absolute -top-6 -left-6 z-20 flex flex-col gap-3">
            <MetadataTag icon={FiCpu} label="Processing" value="Real-time" />
            <MetadataTag icon={FiServer} label="Buffer" value="Ready" className="hidden sm:flex" />
          </div>

          {/* Floating Metadata - Bottom Right */}
          <div className="absolute -bottom-6 -right-6 z-20 hidden md:flex flex-col gap-3 items-end">
            <MetadataTag icon={FiActivity} label="Latency" value="1.2ms" />
            <MetadataTag icon={FiPlus} label="Engine" value="v2.4.0" />
          </div>

          <div className="group relative overflow-hidden rounded-[4rem] border border-white/10 bg-gradient-to-b from-white/[0.04] to-transparent p-1 sm:p-2 backdrop-blur-3xl shadow-[0_0_100px_rgba(0,0,0,0.5)]">
            <div className="relative bg-[#080808] rounded-[3.8rem] p-12 lg:p-20 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 via-transparent to-secondary/5 opacity-50" />

              <div className="relative z-10 flex flex-col lg:flex-row items-center gap-16 lg:gap-24">

                {/* Turntable / Record Section */}
                <div className="relative shrink-0">
                  <div className="absolute -inset-8 bg-primary/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />

                  {/* Turntable Base */}
                  <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] border-8 border-[#121212] shadow-[0_0_50px_rgba(0,0,0,1)] flex items-center justify-center p-4">

                    {/* The Disc */}
                    <motion.div
                      animate={{ rotate: isPlaying ? 360 : 0 }}
                      transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                      className="relative w-full h-full rounded-full bg-[#111] border border-white/5 flex items-center justify-center overflow-hidden"
                      style={{ boxShadow: 'inset 0 0 40px rgba(255,255,255,0.02)' }}
                    >
                      {/* Grooves */}
                      {[...Array(12)].map((_, i) => (
                        <div
                          key={i}
                          className="absolute rounded-full border border-white/5"
                          style={{ inset: `${(i + 1) * 8}px` }}
                        />
                      ))}

                      {/* Label Center */}
                      <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-secondary p-[2px]">
                        <div className="w-full h-full rounded-full bg-black flex items-center justify-center">
                          <FiDisc className={`text-2xl ${isPlaying ? 'text-white animate-spin' : 'text-white/20'}`} />
                        </div>
                      </div>

                      {/* Light Reflection */}
                      <div className="absolute inset-0 bg-gradient-to-tr from-white/10 via-transparent to-transparent pointer-events-none" />
                    </motion.div>

                    {/* Strobe Light */}
                    <div className="absolute top-8 left-8">
                      <div className={`w-3 h-3 rounded-full ${isPlaying ? 'bg-primary shadow-[0_0_15px_rgba(255,100,100,0.8)] animate-pulse' : 'bg-white/10'}`} />
                    </div>

                    {/* Tonearm / Needle */}
                    <motion.div
                      className="absolute top-1/2 left-1/2 -translate-y-1/2 w-48 h-4 origin-left z-20 pointer-events-none"
                      style={{ left: '50%' }}
                      animate={{ rotate: isPlaying ? [15, 17, 15] : 45 }}
                      transition={{ duration: 2, repeat: isPlaying ? Infinity : 0, ease: "easeInOut" }}
                    >
                      <div className="w-full h-[2px] bg-white/20 rounded-full relative">
                        <div className="absolute right-0 -top-2 w-4 h-6 bg-[#222] border border-white/20 rounded-sm" />
                        <div className="absolute right-1 -top-1 w-1 h-3 bg-primary/40 rounded-full" />
                      </div>
                    </motion.div>
                  </div>
                </div>

                {/* Main Content Area */}
                <div className="flex-grow w-full">

                  {/* Title & Technical Specs */}
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-6 mb-12">
                    <div>
                      <h3 className="text-3xl font-display font-bold text-white mb-2 tracking-tight">Spectral Pro Suite</h3>
                      <div className="flex items-center gap-4 text-[10px] tracking-[0.3em] font-mono text-white/30 uppercase">
                        <span>48kHz</span>
                        <span className="w-1 h-1 rounded-full bg-white/10" />
                        <span>32-bit Float</span>
                        <span className="w-1 h-1 rounded-full bg-white/10" />
                        <span className="text-primary italic">Live Syncing</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <div className="text-right">
                        <p className="text-[9px] font-mono text-white/20 uppercase tracking-widest mb-1">Signal Strength</p>
                        <div className="flex gap-1">
                          {[1, 2, 3, 4, 5].map(i => (
                            <div key={i} className={`w-3 h-1 rounded-full ${isPlaying ? 'bg-primary' : 'bg-white/5'}`} />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Enhanced Mirror Waveform */}
                  <div className="relative w-full h-40 bg-white/[0.01] rounded-3xl border border-white/5 flex items-center justify-center p-8 mb-12 overflow-hidden group/wave">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent opacity-0 group-hover/wave:opacity-100 transition-opacity duration-700" />
                    <div className="flex items-center gap-[4px] h-full justify-center w-full">
                      {Array.from({ length: 64 }).map((_, i) => (
                        <WaveformBar
                          key={i}
                          index={i}
                          delay={i * 0.02}
                          height={15 + Math.sin(i * 0.2) * 20 + Math.random() * 30}
                          isActive={isPlaying}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Interactive Controls Container */}
                  <div className="flex flex-wrap items-center gap-6 sm:gap-10">

                    {/* Play Button with Progress Ring */}
                    <div className="relative group/btn">
                      <motion.div
                        className="absolute -inset-4 bg-primary/20 rounded-full blur-xl opacity-0 group-hover/btn:opacity-100 transition-opacity"
                        animate={isPlaying ? { scale: [1, 1.2, 1], opacity: [0.1, 0.3, 0.1] } : {}}
                        transition={{ duration: 2, repeat: Infinity }}
                      />
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setIsPlaying(!isPlaying)}
                        className="relative w-24 h-24 rounded-full bg-white flex items-center justify-center text-black z-10 transition-colors shadow-2xl"
                      >
                        <AnimatePresence mode="wait">
                          {isPlaying ? (
                            <motion.div key="pause" initial={{ opacity: 0, rotate: -90 }} animate={{ opacity: 1, rotate: 0 }} exit={{ opacity: 0, rotate: 90 }}>
                              <FiPause className="text-4xl" />
                            </motion.div>
                          ) : (
                            <motion.div key="play" initial={{ opacity: 0, rotate: -90 }} animate={{ opacity: 1, rotate: 0 }} exit={{ opacity: 0, rotate: 90 }}>
                              <FiPlay className="text-4xl translate-x-1" />
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </motion.button>

                      {/* SVG Progress Ring */}
                      <svg className="absolute -inset-2 w-28 h-28 -rotate-90 pointer-events-none">
                        <circle
                          cx="56" cy="56" r="52"
                          fill="none"
                          stroke="rgba(255,255,255,0.1)"
                          strokeWidth="2"
                        />
                        <motion.circle
                          cx="56" cy="56" r="52"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          className="text-primary"
                          strokeDasharray="327"
                          animate={{ strokeDashoffset: isPlaying ? [327, 0] : 327 }}
                          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                        />
                      </svg>
                    </div>

                    <div className="flex flex-col gap-6">
                      <Link to="/product" className="group/link inline-flex items-center gap-4 text-xs font-bold tracking-[0.3em] uppercase text-white/40 hover:text-white transition-all">
                        <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover/link:bg-primary group-hover/link:text-black transition-colors">
                          <FiUpload />
                        </div>
                        <span>Inject Workspace</span>
                      </Link>
                      <Link to="/technology" className="group/link inline-flex items-center gap-4 text-xs font-bold tracking-[0.3em] uppercase text-white/40 hover:text-white transition-all">
                        <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover/link:bg-secondary group-hover/link:text-black transition-colors">
                          <FiCpu />
                        </div>
                        <span>Engine Architecture</span>
                      </Link>
                    </div>

                  </div>
                </div>

              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DemoSection;
