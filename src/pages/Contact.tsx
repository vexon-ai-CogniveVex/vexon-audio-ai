import { motion } from "framer-motion";
import { useState } from "react";
import { toast } from "sonner";
import { Send, MapPin, Mail, Phone } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const contactInfo = [
  { icon: Mail, label: "hello@cognivevex.ai" },
  { icon: MapPin, label: "San Francisco, CA" },
  { icon: Phone, label: "+1 (555) 123-4567" },
];

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent! We'll get back to you soon.");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="relative pt-32 pb-32 bg-noise overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero" />
        <div className="absolute inset-0 dot-grid opacity-15" />

        {/* Decorative glow */}
        <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] rounded-full bg-primary/5 blur-[100px]" />

        <div className="container relative z-10 mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 lg:gap-24 items-start">
            {/* Left - Info */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <p className="text-sm font-semibold tracking-widest text-primary mb-4">CONTACT</p>
              <h1 className="font-display text-5xl font-bold text-foreground md:text-6xl leading-[1.1] mb-6">
                Get in <span className="font-serif-accent text-gradient-primary">touch</span>
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed mb-12 max-w-md">
                Have a question, partnership idea, or just want to say hello? We'd love to hear from you.
              </p>

              <div className="space-y-6">
                {contactInfo.map((info) => (
                  <div key={info.label} className="flex items-center gap-4">
                    <div className="rounded-xl bg-muted p-3 text-primary">
                      <info.icon size={18} strokeWidth={1.5} />
                    </div>
                    <span className="text-sm text-muted-foreground">{info.label}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Right - Glassmorphic form */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.7 }}
            >
              <form onSubmit={handleSubmit} className="glass rounded-2xl p-8 md:p-10 shadow-elevated">
                <div className="space-y-5">
                  {[
                    { key: "name", label: "Name", type: "text", maxLen: 100 },
                    { key: "email", label: "Email", type: "email", maxLen: 255 },
                  ].map((field) => (
                    <div key={field.key}>
                      <label className="mb-2 block text-xs font-semibold tracking-widest text-muted-foreground uppercase">
                        {field.label}
                      </label>
                      <input
                        type={field.type}
                        required
                        maxLength={field.maxLen}
                        value={form[field.key as keyof typeof form]}
                        onChange={(e) => setForm({ ...form, [field.key]: e.target.value })}
                        className="w-full rounded-xl border border-border/80 bg-background/50 px-4 py-3.5 text-sm text-foreground placeholder:text-muted-foreground/50 focus:border-primary/60 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                        placeholder={`Your ${field.label.toLowerCase()}`}
                      />
                    </div>
                  ))}
                  <div>
                    <label className="mb-2 block text-xs font-semibold tracking-widest text-muted-foreground uppercase">
                      Message
                    </label>
                    <textarea
                      required
                      maxLength={1000}
                      rows={5}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="w-full rounded-xl border border-border/80 bg-background/50 px-4 py-3.5 text-sm text-foreground placeholder:text-muted-foreground/50 focus:border-primary/60 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all resize-none"
                      placeholder="Tell us what's on your mind..."
                    />
                  </div>
                </div>
                <button
                  type="submit"
                  className="mt-6 w-full inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-6 py-4 font-display text-sm font-semibold text-primary-foreground transition-all hover:shadow-glow-primary hover:scale-[1.01] active:scale-[0.99]"
                >
                  <Send size={16} />
                  Send Message
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
