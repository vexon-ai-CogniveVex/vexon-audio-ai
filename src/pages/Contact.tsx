import { motion } from "framer-motion";
import { useState } from "react";
import { toast } from "sonner";
import { FiSend, FiMapPin, FiMail, FiPhone, FiActivity, FiGlobe } from "react-icons/fi";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import api from "@/lib/api";
import ReCAPTCHA from "react-google-recaptcha";
import contactImage from "@/assets/images/contact_connectivity_waves_1771846672305.png";
import { useEffect } from "react";

const VITE_RECAPTCHA_SITE_KEY = import.meta.env.VITE_RECAPTCHA_SITE_KEY;

const contactInfo = [
  { icon: FiMail, label: "Neural Interface", value: "protocols@vexon.ai" },
  { icon: FiMapPin, label: "Node Location", value: "SF-01 Base, California" },
  { icon: FiPhone, label: "Secure Line", value: "+1 (888) VEXON-AI" },
];

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);
  const [mapData, setMapData] = useState<any>(null);

  useEffect(() => {
    const fetchMap = async () => {
      try {
        const resp = await api.getMapPin("SF-01 Base, California");
        if (resp.status === "success") {
          setMapData(resp.data);
        }
      } catch (err) {
        console.error("Failed to load map data");
      }
    };
    fetchMap();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!captchaToken) {
      toast.error("Please complete the neural handshake (CAPTCHA).");
      return;
    }

    setIsSubmitting(true);

    try {
      const resp = await api.submitContactForm({ ...form, captchaToken });
      if (resp.status === "success") {
        toast.success("Packet received. Transmission complete.");
        setForm({ name: "", email: "", message: "" });
      } else {
        toast.error(resp.message || "Transmission failed.");
      }
    } catch (err) {
      toast.error("Network interference. Uplink failed.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#050505] text-white">
      <Navbar />

      <section className="relative pt-48 pb-32 overflow-hidden">
        {/* Background Graphic */}
        <div className="absolute top-0 right-0 w-full h-full opacity-10 blur-[80px] pointer-events-none">
          <img src={contactImage} alt="" className="object-cover w-full h-full scale-125 -rotate-6" />
        </div>

        <div className="container relative z-10 mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            {/* Transmission Info */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            >
              <span className="text-[10px] tracking-[0.5em] uppercase text-primary font-bold mb-8 block">Open Protocol</span>
              <h1 className="font-display text-5xl font-bold leading-[1.05] tracking-tight text-white sm:text-7xl md:text-8xl mb-10">
                Establish <br />
                <span className="text-white/30 italic font-light">Contact.</span>
              </h1>
              <p className="max-w-md text-white/40 text-xl font-light leading-relaxed mb-16">
                Direct all neural transmissions and inquiries through our secure encryption hub.
              </p>

              <div className="grid gap-12">
                {contactInfo.map((info, i) => (
                  <motion.div
                    key={info.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 + i * 0.1 }}
                    className="flex items-start gap-6 group"
                  >
                    <div className="w-12 h-12 rounded-2xl border border-white/5 bg-white/[0.02] flex items-center justify-center text-white/40 group-hover:text-primary group-hover:border-primary/50 transition-all duration-500">
                      <info.icon size={22} />
                    </div>
                    <div>
                      <div className="text-[10px] tracking-[0.2em] font-bold text-white/20 uppercase mb-1">{info.label}</div>
                      <div className="text-lg font-medium text-white group-hover:text-primary transition-colors">{info.value}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Neural Uplink Form */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
              className="relative"
            >
              <div className="absolute -inset-4 bg-primary/5 blur-3xl rounded-[4rem] group-hover:bg-primary/10 transition-colors" />
              <div className="relative overflow-hidden rounded-[3.5rem] border border-white/10 bg-white/[0.03] p-12 md:p-16 backdrop-blur-3xl shadow-2xl">
                <div className="absolute top-0 right-0 p-8 opacity-20">
                  <FiActivity className="text-primary text-xl" />
                </div>

                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="grid gap-8 md:grid-cols-2">
                    <div className="space-y-3">
                      <label className="text-[10px] tracking-[0.3em] font-bold text-white/30 uppercase ml-1">Entity Name</label>
                      <input
                        type="text"
                        required
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        className="w-full h-16 rounded-2xl border border-white/5 bg-white/[0.02] px-6 text-white placeholder:text-white/10 focus:border-primary/40 focus:bg-white/[0.04] outline-none transition-all"
                        placeholder="IDENTIFY"
                      />
                    </div>
                    <div className="space-y-3">
                      <label className="text-[10px] tracking-[0.3em] font-bold text-white/30 uppercase ml-1">Frequency Address</label>
                      <input
                        type="email"
                        required
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        className="w-full h-16 rounded-2xl border border-white/5 bg-white/[0.02] px-6 text-white placeholder:text-white/10 focus:border-primary/40 focus:bg-white/[0.04] outline-none transition-all"
                        placeholder="PROTOCOL"
                      />
                    </div>
                  </div>

                  <div className="space-y-3">
                    <label className="text-[10px] tracking-[0.3em] font-bold text-white/30 uppercase ml-1">Information Packet</label>
                    <textarea
                      required
                      rows={4}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="w-full rounded-2xl border border-white/5 bg-white/[0.02] p-6 text-white placeholder:text-white/10 focus:border-primary/40 focus:bg-white/[0.04] outline-none transition-all resize-none"
                      placeholder="DESCRIBE THE FREQUENCY..."
                    />
                  </div>

                  {/* reCAPTCHA */}
                  <div className="flex justify-center py-2">
                    <ReCAPTCHA
                      sitekey={VITE_RECAPTCHA_SITE_KEY} // Testing key
                      onChange={(token) => setCaptchaToken(token)}
                      theme="dark"
                    />
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    disabled={isSubmitting}
                    type="submit"
                    className="group w-full h-20 rounded-[2rem] bg-white flex items-center justify-center gap-4 text-black font-display font-bold text-lg tracking-widest uppercase hover:bg-primary transition-colors disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <FiGlobe className="animate-spin text-2xl" />
                    ) : (
                      <>
                        Initialize Uplink
                        <FiSend className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                      </>
                    )}
                  </motion.button>
                </form>

                <div className="mt-12 pt-12 border-t border-white/5 flex items-center justify-between text-[10px] tracking-[0.2em] font-bold text-white/10 uppercase">
                  <span>Encryption: Active</span>
                  <span>Latency: Minimal</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="pb-32 px-6">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative h-[500px] rounded-[3rem] overflow-hidden border border-white/10 bg-white/[0.03] backdrop-blur-3xl"
          >
            {mapData ? (
              <iframe
                width="100%"
                height="100%"
                frameBorder="0"
                style={{ border: 0 }}
                src={mapData.embed_url}
                allowFullScreen
              ></iframe>
            ) : (
              <div className="w-full h-full flex items-center justify-center text-white/20 uppercase tracking-[0.3em] font-bold">
                <FiActivity className="animate-pulse mr-4" />
                Initializing Node Visualization...
              </div>
            )}
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;

