import { motion, AnimatePresence } from "framer-motion";
import { FiUpload, FiPlay, FiPause, FiDisc } from "react-icons/fi";
import { useState } from "react";

const WaveformBar = ({ delay, height, isActive }: { delay: number; height: number; isActive: boolean }) => (
  <motion.div
    className="rounded-full bg-gradient-to-t from-primary via-purple-500 to-blue-400"
    style={{
      width: 4,
    }}
    animate={{
      height: isActive ? [height * 0.4, height, height * 0.4] : height * 0.2,
      opacity: isActive ? 1 : 0.3
    }}
    transition={{
      duration: 1,
      repeat: isActive ? Infinity : 0,
      delay: isActive ? delay : 0,
      ease: "easeInOut"
    }}
  />
);

const DemoSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className="relative py-40 bg-[#050505] overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="container relative z-10 mx-auto px-6">
        <div className="text-center mb-24">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[10px] tracking-[0.5em] uppercase text-primary font-bold mb-4 block"
          >
            Tactile Interface
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display text-5xl md:text-6xl font-bold text-white"
          >
            Experience the <span className="text-white/30 italic">Vexon Edge.</span>
          </motion.h2>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto max-w-5xl"
        >
          <div className="group relative overflow-hidden rounded-[3rem] border border-white/5 bg-white/[0.02] p-12 backdrop-blur-3xl">
            {/* Inner glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />

            <div className="relative z-10 flex flex-col items-center">
              {/* Virtual Disc / Record Visual */}
              <div className="relative mb-16">
                <motion.div
                  animate={{ rotate: isPlaying ? 360 : 0 }}
                  transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                  className="w-48 h-48 rounded-full border-4 border-white/5 flex items-center justify-center bg-gradient-to-br from-[#121212] to-[#242424] shadow-2xl"
                >
                  <FiDisc className={`text-6xl ${isPlaying ? 'text-primary' : 'text-white/20'} transition-colors duration-500`} />
                  {/* Grooves */}
                  <div className="absolute inset-4 rounded-full border border-white/5" />
                  <div className="absolute inset-8 rounded-full border border-white/5" />
                  <div className="absolute inset-12 rounded-full border border-white/5" />
                </motion.div>

                {/* Status Indicator */}
                <div className="absolute -top-4 -right-4">
                  <span className={`flex h-4 w-4 rounded-full ${isPlaying ? 'bg-primary shadow-[0_0_15px_rgba(255,255,255,0.5)]' : 'bg-white/10'}`} />
                </div>
              </div>

              {/* Advanced Waveform */}
              <div className="flex items-end gap-1.5 h-32 mb-16 px-10 w-full overflow-hidden">
                {Array.from({ length: 48 }).map((_, i) => (
                  <WaveformBar
                    key={i}
                    delay={i * 0.04}
                    height={Math.random() * 80 + 30}
                    isActive={isPlaying}
                  />
                ))}
              </div>

              {/* Controls Layout */}
              <div className="flex flex-col md:flex-row items-center justify-between w-full gap-12 border-t border-white/5 pt-12">
                <div className="text-left">
                  <h3 className="text-white font-display text-xl font-bold mb-2">Neural Master Engine</h3>
                  <p className="text-white/40 font-light">48kHz / 32-bit Float Processing</p>
                </div>

                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="w-24 h-24 rounded-full bg-white flex items-center justify-center text-black shadow-[0_0_40px_rgba(255,255,255,0.2)] transition-shadow hover:shadow-[0_0_60px_rgba(255,255,255,0.4)]"
                >
                  <AnimatePresence mode="wait">
                    {isPlaying ? (
                      <motion.div
                        key="pause"
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.5 }}
                      >
                        <FiPause className="text-4xl" />
                      </motion.div>
                    ) : (
                      <motion.div
                        key="play"
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.5 }}
                      >
                        <FiPlay className="text-4xl translate-x-1" />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.button>

                <div className="flex items-center gap-6">
                  <button className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-8 py-4 text-sm font-bold text-white transition-all hover:bg-white/10 active:scale-95">
                    <FiUpload className="text-lg" />
                    Load Workspace
                  </button>
                  <div className="hidden lg:block w-px h-10 bg-white/10" />
                  <p className="hidden lg:block text-[10px] text-white/20 tracking-widest uppercase">
                    Ready for <br /> Injection
                  </p>
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

