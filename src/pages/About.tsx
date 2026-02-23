import { motion } from "framer-motion";
import { FiEye, FiShield, FiHeart, FiZap, FiActivity } from "react-icons/fi";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import aboutImage from "@/assets/images/about_company_mission_abstract_1771846645347.png";

const values = [
  { icon: FiEye, title: "Total Transparency", desc: "Our neural logic isn't a black box. We prioritize explainability in every generated waveform.", color: "primary" },
  { icon: FiShield, title: "Hardened Security", desc: "End-to-end encryption for every byte of audio, hosted on SOC 2 Type II infrastructure.", color: "purple-400" },
  { icon: FiHeart, title: "Ethical Consent", desc: "Voice synthesis requires cryptographic proof of consent. We build with respect for identity.", color: "blue-400" },
  { icon: FiZap, title: "Relentless R&D", desc: "Staying at the bleeding edge of spectral reconstruction and neural synthesis research.", color: "primary" },
];

const About = () => (
  <div className="min-h-screen bg-[#050505] text-white">
    <Navbar />

    {/* Cinematic Editorial Hero */}
    <section className="relative pt-48 pb-32 overflow-hidden border-b border-white/5">
      <div className="container relative z-10 mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-end gap-20">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="flex-1"
          >
            <span className="text-[10px] tracking-[0.5em] uppercase text-primary font-bold mb-8 block">The Vexon Manifesto</span>
            <h1 className="font-display text-6xl font-bold leading-[1.05] tracking-tight text-white sm:text-7xl md:text-9xl mb-10">
              Sound is <br />
              <span className="text-white/30 italic font-light">Intelligence.</span>
            </h1>
            <p className="max-w-xl text-white/40 text-xl font-light leading-relaxed">
              We started with a simple belief: that the world's most critical data is audio. We are dedicated to building the infrastructure that lets humanity hear what it's been missing.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
            className="flex-1 h-[600px] relative overflow-hidden rounded-[4rem] border border-white/10"
          >
            <img src={aboutImage} alt="Mission Abstract" className="absolute inset-0 w-full h-full object-cover scale-110" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
            <div className="absolute bottom-12 left-12 right-12">
              <div className="flex items-center gap-4 text-white/60">
                <FiActivity className="text-primary animate-pulse" />
                <span className="text-[10px] tracking-[0.2em] font-bold uppercase">System Status: Active</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>

    {/* Values Matrix */}
    <section className="py-40 relative">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/4 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="container mx-auto px-6">
        <div className="mb-24">
          <span className="text-[10px] tracking-[0.4em] uppercase text-primary font-bold mb-6 block">Our Foundation</span>
          <h2 className="font-display text-5xl md:text-6xl font-bold text-white leading-tight max-w-2xl">
            Ethical <span className="text-white/30 italic">Precedents.</span>
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {values.map((v, i) => (
            <motion.div
              key={v.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.8 }}
              className="group relative flex flex-col h-full rounded-[2.5rem] border border-white/5 bg-white/[0.02] p-10 transition-all hover:bg-white/[0.04] hover:border-white/10"
            >
              <div className={`mb-10 inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-${v.color}/10 text-${v.color}`}>
                <v.icon size={26} />
              </div>
              <h3 className="font-display text-xl font-bold text-white mb-4">{v.title}</h3>
              <p className="text-white/30 font-light leading-relaxed text-sm flex-grow">{v.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* High-End Trust Section */}
    <section className="py-40 bg-[#0a0a0a]">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-[4rem] border border-white/10 bg-gradient-to-br from-white/5 to-transparent p-16 md:p-32 text-center backdrop-blur-3xl"
        >
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

          <FiShield size={60} className="mx-auto mb-10 text-primary opacity-50" />
          <h3 className="font-display text-4xl md:text-6xl font-bold text-white mb-8 max-w-4xl mx-auto leading-tight">
            Every synthetic voice is <span className="text-white/30 italic">Permanently Indexed.</span>
          </h3>
          <p className="text-white/40 text-xl font-light leading-relaxed max-w-2xl mx-auto">
            We embed imperceptible neural watermarks in every millisecond of generated audio. Integrity is built into the bitstream, ensuring total traceability and ecosystem trust.
          </p>

          <div className="mt-16 flex items-center justify-center gap-12">
            <div className="text-center">
              <div className="text-2xl font-bold text-white mb-1">SOC 2</div>
              <div className="text-[10px] tracking-[0.2em] text-white/20 uppercase font-bold">Compliant</div>
            </div>
            <div className="w-px h-10 bg-white/10" />
            <div className="text-center">
              <div className="text-2xl font-bold text-white mb-1">AES-256</div>
              <div className="text-[10px] tracking-[0.2em] text-white/20 uppercase font-bold">Encrypted</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>

    <Footer />
  </div>
);

export default About;

