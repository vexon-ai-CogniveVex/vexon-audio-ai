import { motion } from "framer-motion";
import { Upload, Play, Pause } from "lucide-react";
import { useState } from "react";

const WaveformBar = ({ delay, height }: { delay: number; height: number }) => (
  <motion.div
    className="rounded-full"
    style={{
      width: 3,
      background: "linear-gradient(180deg, hsl(277, 68%, 55%), hsl(277, 68%, 25%))",
    }}
    animate={{ height: [height * 0.3, height, height * 0.3] }}
    transition={{ duration: 1.2, repeat: Infinity, delay, ease: "easeInOut" }}
  />
);

const DemoSection = () => {
  const [playing, setPlaying] = useState(false);

  return (
    <section className="relative py-32">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-4xl"
        >
          <div className="relative overflow-hidden rounded-3xl border border-border/50 bg-gradient-card shadow-elevated">
            {/* Dot grid background */}
            <div className="absolute inset-0 dot-grid opacity-30" />
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent opacity-50" />

            <div className="relative z-10 p-10 md:p-16">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
                <div>
                  <p className="text-xs font-semibold tracking-widest text-accent mb-3">INTERACTIVE DEMO</p>
                  <h2 className="font-display text-3xl font-bold text-foreground md:text-4xl">
                    Try a <span className="font-serif-accent text-gradient-accent">Sample</span>
                  </h2>
                  <p className="mt-4 text-muted-foreground max-w-md">
                    Experience Vexon's AI-powered enhancement. Upload your audio or play our sample.
                  </p>
                </div>

                {/* Player visualization */}
                <div className="flex flex-col items-center gap-6">
                  <div className="flex items-end gap-[3px] h-16">
                    {Array.from({ length: 24 }).map((_, i) => (
                      <WaveformBar
                        key={i}
                        delay={i * 0.06}
                        height={Math.random() * 40 + 16}
                      />
                    ))}
                  </div>
                  <button
                    onClick={() => setPlaying(!playing)}
                    className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary text-primary-foreground transition-all hover:shadow-glow-primary hover:scale-105 active:scale-95"
                  >
                    {playing ? <Pause size={20} /> : <Play size={20} className="ml-0.5" />}
                  </button>
                </div>
              </div>

              <div className="divider-gradient my-10" />

              <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
                <button className="inline-flex items-center gap-2 rounded-xl border border-border bg-muted/50 px-6 py-3 text-sm font-semibold text-foreground transition-all hover:border-primary/50 hover:bg-muted">
                  <Upload size={16} />
                  Upload Audio
                </button>
                <span className="text-xs text-muted-foreground">
                  Supports MP3, WAV, FLAC · Max 10MB
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DemoSection;
