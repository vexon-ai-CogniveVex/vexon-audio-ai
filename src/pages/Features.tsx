import { motion } from "framer-motion";
import { Mic, Headphones, BarChart3, Wand2, Languages, ShieldCheck, Waves, FileAudio, MessageSquare } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const features = [
  { icon: Mic, title: "Voice Generation", desc: "Create lifelike synthetic voices in dozens of languages and emotional tones.", category: "Generate", size: "large" },
  { icon: Languages, title: "Multilingual Dubbing", desc: "Dub content across languages preserving speaker identity.", category: "Generate", size: "small" },
  { icon: Waves, title: "Emotion-Aware Audio", desc: "Generate audio with nuanced emotional expression.", category: "Generate", size: "small" },
  { icon: Headphones, title: "Noise Reduction", desc: "AI-powered background noise removal for crystal-clear output.", category: "Enhance", size: "small" },
  { icon: Wand2, title: "Auto Mastering", desc: "Professional-grade audio mastering — one click, studio quality.", category: "Enhance", size: "large" },
  { icon: FileAudio, title: "Filler Removal", desc: "Automatically detect and remove filler words and silences.", category: "Enhance", size: "small" },
  { icon: BarChart3, title: "Emotion Detection", desc: "Analyze speaker sentiment and emotional patterns in real time.", category: "Understand", size: "large" },
  { icon: ShieldCheck, title: "Compliance Insights", desc: "Automated compliance checks for regulated industries.", category: "Understand", size: "small" },
  { icon: MessageSquare, title: "Transcription", desc: "Accurate multi-language transcription with speaker diarization.", category: "Understand", size: "small" },
];

const categoryColors: Record<string, string> = {
  Generate: "text-primary",
  Enhance: "text-secondary",
  Understand: "text-accent",
};

const Features = () => (
  <div className="min-h-screen bg-background">
    <Navbar />

    <section className="relative pt-32 pb-24 bg-noise overflow-hidden">
      <div className="absolute inset-0 bg-gradient-hero" />
      <div className="absolute inset-0 dot-grid opacity-20" />
      <div className="container relative z-10 mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
          <p className="text-sm font-semibold tracking-widest text-primary mb-4">FEATURES</p>
          <h1 className="font-display text-5xl font-bold text-foreground md:text-7xl max-w-2xl leading-[1.1]">
            Everything your <span className="font-serif-accent text-gradient-primary">audio</span> needs
          </h1>
        </motion.div>
      </div>
    </section>

    {/* Bento grid */}
    <section className="py-24">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 auto-rows-auto">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06, duration: 0.5 }}
              className={`bento-item group ${f.size === "large" ? "md:col-span-2" : ""}`}
            >
              <div className="flex items-start justify-between mb-6">
                <div className={`inline-flex rounded-xl bg-muted p-3 ${categoryColors[f.category]}`}>
                  <f.icon size={24} strokeWidth={1.5} />
                </div>
                <span className={`text-[10px] font-bold tracking-widest ${categoryColors[f.category]}`}>
                  {f.category.toUpperCase()}
                </span>
              </div>
              <h3 className="mb-3 font-display text-xl font-bold text-foreground">{f.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    <Footer />
  </div>
);

export default Features;
