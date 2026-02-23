import { motion } from "framer-motion";
import { ShieldCheck, Eye, Heart, Sparkles } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const values = [
  { icon: Eye, title: "Transparency", desc: "Every AI decision is explainable. No black boxes." },
  { icon: ShieldCheck, title: "Security", desc: "End-to-end encryption. SOC 2 compliant infrastructure." },
  { icon: Heart, title: "Consent", desc: "Voice cloning requires explicit consent. Always." },
  { icon: Sparkles, title: "Innovation", desc: "Pushing the boundaries of what audio AI can achieve." },
];

const About = () => (
  <div className="min-h-screen bg-background">
    <Navbar />

    {/* Editorial hero */}
    <section className="relative pt-32 pb-24 bg-noise overflow-hidden">
      <div className="absolute inset-0 bg-gradient-hero" />
      <div className="container relative z-10 mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-end">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <p className="text-sm font-semibold tracking-widest text-primary mb-4">ABOUT US</p>
            <h1 className="font-display text-5xl font-bold text-foreground md:text-7xl leading-[1.1]">
              Our <span className="font-serif-accent text-gradient-primary">Vision</span>
            </h1>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.7 }}>
            <p className="text-xl text-muted-foreground leading-relaxed font-light">
              Turning complex audio challenges into clear, actionable intelligence. We believe audio is the most underutilized data source — and Vexon is here to change that.
            </p>
          </motion.div>
        </div>
      </div>
    </section>

    {/* Pull quote */}
    <section className="py-24">
      <div className="container mx-auto px-6">
        <motion.blockquote
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mx-auto max-w-3xl text-center"
        >
          <div className="divider-gradient mb-10" />
          <p className="font-serif text-3xl italic text-foreground leading-relaxed md:text-4xl">
            "We don't just process audio — we <span className="text-gradient-primary">understand</span> it."
          </p>
          <div className="divider-gradient mt-10" />
        </motion.blockquote>
      </div>
    </section>

    {/* Values grid */}
    <section className="py-24 bg-noise">
      <div className="container mx-auto px-6">
        <div className="mb-16">
          <p className="text-sm font-semibold tracking-widest text-accent mb-4">OUR VALUES</p>
          <h2 className="font-display text-4xl font-bold text-foreground md:text-5xl">
            Ethical <span className="font-serif-accent text-gradient-accent">AI</span> at our core
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {values.map((v, i) => (
            <motion.div
              key={v.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass rounded-2xl p-8 transition-all duration-500 hover:shadow-glow-primary"
            >
              <div className="mb-6 inline-flex rounded-xl bg-accent/10 p-3 text-accent">
                <v.icon size={24} strokeWidth={1.5} />
              </div>
              <h3 className="font-display text-lg font-semibold text-foreground mb-2">{v.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Watermark & ethics note */}
    <section className="py-24">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-2xl rounded-2xl border border-border/50 bg-gradient-card p-12 text-center"
        >
          <ShieldCheck size={40} className="mx-auto mb-6 text-primary" />
          <h3 className="font-display text-2xl font-bold text-foreground mb-4">
            Every synthetic voice is watermarked
          </h3>
          <p className="text-muted-foreground leading-relaxed">
            We embed imperceptible watermarks in all AI-generated audio to ensure traceability, 
            prevent misuse, and maintain trust in the audio ecosystem.
          </p>
        </motion.div>
      </div>
    </section>

    <Footer />
  </div>
);

export default About;
