import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { toast } from "sonner";
import { FiSend, FiMapPin, FiMail, FiPhone, FiActivity, FiGlobe } from "react-icons/fi";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import api from "@/lib/api";
import ReCAPTCHA from "react-google-recaptcha";
import contactImage from "@/assets/images/contact_connectivity_waves_1771846672305.png";

const VITE_RECAPTCHA_SITE_KEY = import.meta.env.VITE_RECAPTCHA_SITE_KEY?.trim() || "";
const FALLBACK_MAP_EMBED_URL =
  "https://maps.google.com/maps?q=90+Broad+St,+New+York,+NY+10004&t=&z=15&ie=UTF8&iwloc=&output=embed";

interface MapData {
  embed_url?: string;
}

const contactInfo = [
  { icon: FiMail, label: "Neural Interface", value: "help@cognivevex.com", href: "mailto:help@cognivevex.com" },
  { icon: FiMapPin, label: "Node Location", value: "90 Broad St, New York, NY 10004" },
  { icon: FiPhone, label: "Secure Line", value: "+12126845973", href: "tel:+12126845973" },
];

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);
  const [mapData, setMapData] = useState<MapData | null>(null);
  const [mapLoading, setMapLoading] = useState(true);

  useEffect(() => {
    let active = true;
    const fetchMap = async () => {
      try {
        const resp = await api.getMapPin("90 Broad St, New York, NY 10004, United States");
        if (active && resp.status === "success" && resp.data?.embed_url) {
          setMapData(resp.data);
        } else if (active) {
          setMapData({ embed_url: FALLBACK_MAP_EMBED_URL });
        }
      } catch {
        if (active) {
          setMapData({ embed_url: FALLBACK_MAP_EMBED_URL });
        }
      } finally {
        if (active) {
          setMapLoading(false);
        }
      }
    };
    fetchMap();
    return () => {
      active = false;
    };
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (VITE_RECAPTCHA_SITE_KEY && !captchaToken) {
      toast.error("Please complete the neural handshake (CAPTCHA).");
      return;
    }

    setIsSubmitting(true);

    try {
      const resp = await api.submitContactForm({ ...form, captchaToken: captchaToken ?? undefined });
      if (resp.status === "success") {
        toast.success("Packet received. Transmission complete.");
        setForm({ name: "", email: "", message: "" });
        setCaptchaToken(null);
      } else {
        toast.error(resp.message || "Transmission failed.");
      }
    } catch {
      toast.error("Network interference. Uplink failed.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const embedUrl = mapData?.embed_url || FALLBACK_MAP_EMBED_URL;

  return (
    <div className="min-h-screen bg-[#050505] text-white">
      <Navbar />

      <section className="relative pt-32 md:pt-44 pb-20 md:pb-32 overflow-hidden">
        {/* Background Graphic */}
        <div className="absolute top-0 right-0 w-full h-full opacity-10 blur-[80px] pointer-events-none">
          <img src={contactImage} alt="" className="object-cover w-full h-full scale-125 -rotate-6" />
        </div>

        <div className="container relative z-10 mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Transmission Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            >
              <span className="text-[10px] tracking-[0.5em] uppercase text-secondary font-bold mb-6 block">
                Open Protocol
              </span>
              <h1 className="font-display text-5xl font-bold leading-[1.05] tracking-tight text-white sm:text-7xl md:text-8xl mb-8">
                Establish <br />
                <span className="text-white/30 italic font-light text-gradient-accent">Contact.</span>
              </h1>
              <p className="max-w-md text-white/50 text-lg sm:text-xl font-light leading-relaxed mb-12">
                Direct all neural transmissions and inquiries through our secure encryption hub.
              </p>

              <div className="grid gap-8">
                {contactInfo.map((info, i) => (
                  <motion.div
                    key={info.label}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.25 + i * 0.1 }}
                    className="flex items-start gap-5 group"
                  >
                    <div className="w-12 h-12 rounded-2xl border border-white/10 bg-white/[0.03] flex items-center justify-center text-white/60 group-hover:text-secondary group-hover:border-secondary/50 transition-all duration-300 shrink-0">
                      <info.icon size={20} />
                    </div>
                    <div>
                      <div className="text-[10px] tracking-[0.2em] font-bold text-white/40 uppercase mb-1">
                        {info.label}
                      </div>
                      {info.href ? (
                        <a
                          href={info.href}
                          className="text-base sm:text-lg font-medium text-white hover:text-secondary transition-colors break-all"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <div className="text-base sm:text-lg font-medium text-white">{info.value}</div>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Neural Uplink Form */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
              className="relative group"
            >
              <div className="absolute -inset-4 bg-primary/5 blur-3xl rounded-[3.5rem] group-hover:bg-primary/10 transition-colors pointer-events-none" />
              <div className="relative overflow-hidden rounded-[2rem] sm:rounded-[3rem] border border-white/10 bg-white/[0.03] p-6 sm:p-10 md:p-14 backdrop-blur-3xl shadow-2xl">
                <div className="absolute top-6 right-6 sm:top-8 sm:right-8 opacity-30">
                  <FiActivity className="text-secondary text-xl" />
                </div>

                <form onSubmit={handleSubmit} className="space-y-6 sm:space-y-8">
                  <div className="grid gap-6 md:grid-cols-2">
                    <div className="space-y-2.5">
                      <label htmlFor="contact-name" className="text-[10px] tracking-[0.3em] font-bold text-white/50 uppercase ml-1 block">
                        Entity Name
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        required
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        className="w-full h-14 rounded-2xl border border-white/10 bg-white/[0.03] px-5 text-white placeholder:text-white/25 focus:border-secondary/50 focus:bg-white/[0.05] outline-none transition-all"
                        placeholder="Your name"
                      />
                    </div>
                    <div className="space-y-2.5">
                      <label htmlFor="contact-email" className="text-[10px] tracking-[0.3em] font-bold text-white/50 uppercase ml-1 block">
                        Frequency Address
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        required
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        className="w-full h-14 rounded-2xl border border-white/10 bg-white/[0.03] px-5 text-white placeholder:text-white/25 focus:border-secondary/50 focus:bg-white/[0.05] outline-none transition-all"
                        placeholder="you@domain.com"
                      />
                    </div>
                  </div>

                  <div className="space-y-2.5">
                    <label htmlFor="contact-message" className="text-[10px] tracking-[0.3em] font-bold text-white/50 uppercase ml-1 block">
                      Information Packet
                    </label>
                    <textarea
                      id="contact-message"
                      required
                      rows={4}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="w-full rounded-2xl border border-white/10 bg-white/[0.03] p-5 text-white placeholder:text-white/25 focus:border-secondary/50 focus:bg-white/[0.05] outline-none transition-all resize-none"
                      placeholder="Describe your inquiry..."
                    />
                  </div>

                  {VITE_RECAPTCHA_SITE_KEY && (
                    <div className="flex justify-center py-1 overflow-x-auto">
                      <ReCAPTCHA
                        sitekey={VITE_RECAPTCHA_SITE_KEY}
                        onChange={(token) => setCaptchaToken(token)}
                        theme="dark"
                      />
                    </div>
                  )}

                  <motion.button
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                    disabled={isSubmitting}
                    type="submit"
                    className="group/btn w-full h-16 sm:h-18 rounded-2xl bg-white flex items-center justify-center gap-3 text-black font-display font-bold text-sm sm:text-base tracking-widest uppercase hover:bg-secondary hover:text-white transition-colors disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <FiGlobe className="animate-spin text-xl" />
                    ) : (
                      <>
                        Initialize Uplink
                        <FiSend className="group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                      </>
                    )}
                  </motion.button>
                </form>

                <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between text-[10px] tracking-[0.2em] font-bold text-white/35 uppercase">
                  <span>Encryption: Active</span>
                  <span>Latency: Minimal</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="pb-24 sm:pb-32 px-6">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative h-[380px] sm:h-[460px] rounded-[2rem] sm:rounded-[3rem] overflow-hidden border border-white/10 bg-white/[0.03] backdrop-blur-3xl"
          >
            {mapLoading ? (
              <div className="w-full h-full flex items-center justify-center text-white/40 uppercase tracking-[0.25em] text-xs font-bold">
                <FiActivity className="animate-pulse mr-3 text-secondary" />
                Initializing Node Visualization...
              </div>
            ) : (
              <iframe
                title="Vexon Audio AI Node Location"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                src={embedUrl}
                loading="lazy"
                allowFullScreen
              />
            )}
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
