import { Link } from "react-router-dom";
import { FiGithub, FiLinkedin, FiYoutube, FiFacebook } from "react-icons/fi";
import { FaXTwitter, FaPinterest } from "react-icons/fa6";
import Logo from "./Logo";

const Footer = () => (
  <footer className="relative bg-[#050505] pt-32 pb-16 overflow-hidden">
    {/* Subtle glow */}
    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[300px] bg-secondary/5 blur-[120px] rounded-full pointer-events-none" />

    <div className="container relative z-10 mx-auto px-6">
      <div className="grid gap-16 md:grid-cols-2 lg:grid-cols-5 mb-24 text-center md:text-left">
        <div className="lg:col-span-2 flex flex-col items-center md:items-start">
          <Logo size="md" className="mb-8" />
          <p className="text-white/40 font-light leading-relaxed max-w-sm mb-10 text-lg">
            Architecting the future of intelligent audio synthesis. From neural generation to quantum enhancement.
          </p>
          <div className="flex items-center flex-wrap justify-center md:justify-start gap-4">
            {[
              { icon: FaXTwitter, href: "https://x.com/cognivevex" },
              { icon: FaPinterest, href: "https://www.pinterest.com/CogniveVex/" },
              { icon: FiYoutube, href: "https://www.youtube.com/@CogniveVexAI" },
              { icon: FiFacebook, href: "https://www.facebook.com/CogniveVexAI/" },
            ].map((social, i) => (
              <a
                key={i}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-2xl border border-white/5 bg-white/[0.02] flex items-center justify-center text-white/40 transition-all hover:text-white hover:bg-white/5 hover:border-white/10"
              >
                <social.icon size={20} />
              </a>
            ))}
          </div>
        </div>

        {[
          {
            title: "Engine",
            links: [
              { label: "Vexon AI", to: "/product", highlight: true },
              { label: "Technology", to: "/technology" },
              { label: "Features", to: "/features" },
              { label: "Pricing", to: "/pricing" },
            ],
          },
          {
            title: "Network",
            links: [
              { label: "About", to: "/about" },
              { label: "Contact", to: "/contact" },
            ],
          },
          {
            title: "Protocols",
            links: [
              { label: "Privacy Policy", to: "/privacy" },
              { label: "Terms of Service", to: "/terms" },
            ],
          },
        ].map((section) => (
          <div key={section.title}>
            <h4 className="mb-8 font-display text-[10px] font-bold tracking-[0.4em] text-white uppercase">
              {section.title}
            </h4>
            <div className="flex flex-col gap-4">
              {section.links.map((link) => (
                <Link
                  key={link.label}
                  to={link.to}
                  className={`text-sm font-light transition-colors hover:text-white ${link.highlight ? "text-secondary font-bold" : "text-white/30"}`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="flex flex-col md:flex-row items-center justify-between pt-12 border-t border-white/5">
        <p className="text-white/20 text-[10px] tracking-[0.3em] uppercase mb-4 md:mb-0 font-bold">
          © {new Date().getFullYear()} VEXON AUDIO AI · NEURAL PROCESSING UNIT
        </p>
        <div className="flex items-center gap-8">
          <span className="text-white/20 text-[10px] tracking-[0.2em] uppercase">Status: Optimal</span>
          <span className="text-white/20 text-[10px] tracking-[0.2em] uppercase">Latency: 2ms</span>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
