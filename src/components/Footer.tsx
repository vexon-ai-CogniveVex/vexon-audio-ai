import { Link } from "react-router-dom";
import { FiTwitter, FiGithub, FiLinkedin, FiActivity } from "react-icons/fi";

const Footer = () => (
  <footer className="relative bg-[#050505] pt-32 pb-16 overflow-hidden">
    {/* Subtle glow */}
    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[300px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />

    <div className="container relative z-10 mx-auto px-6">
      <div className="grid gap-16 md:grid-cols-2 lg:grid-cols-5 mb-24">
        <div className="lg:col-span-2">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center">
              <FiActivity className="text-black text-lg" />
            </div>
            <span className="font-display text-xl font-bold tracking-tighter text-white">
              VEXON<span className="text-white/30 italic">AI</span>
            </span>
          </div>
          <p className="text-white/40 font-light leading-relaxed max-w-sm mb-10 text-lg">
            Architecting the future of intelligent audio synthesis. From neural generation to quantum enhancement.
          </p>
          <div className="flex items-center gap-4">
            {[
              { icon: FiTwitter, href: "#" },
              { icon: FiGithub, href: "#" },
              { icon: FiLinkedin, href: "#" }
            ].map((social, i) => (
              <a
                key={i}
                href={social.href}
                className="w-12 h-12 rounded-2xl border border-white/5 bg-white/[0.02] flex items-center justify-center text-white/40 transition-all hover:text-white hover:bg-white/5 hover:border-white/10"
              >
                <social.icon size={20} />
              </a>
            ))}
          </div>
        </div>

        {[
          {
            title: "Foundation",
            links: [
              { label: "Neural Engine", to: "/product" },
              { label: "Synthesis", to: "/features" },
              { label: "Enhancement", to: "/features" },
              { label: "API", to: "#" },
            ],
          },
          {
            title: "Network",
            links: [
              { label: "Origins", to: "/about" },
              { label: "Vanguard", to: "#" },
              { label: "Protocols", to: "/contact" },
              { label: "Archives", to: "#" },
            ],
          },
          {
            title: "Protocols",
            links: [
              { label: "Privacy", to: "#" },
              { label: "Terms", to: "#" },
              { label: "Security", to: "#" },
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
                  className="text-white/30 text-sm font-light transition-colors hover:text-white"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="flex flex-col md:flex-row items-center justify-between pt-12 border-t border-white/5">
        <p className="text-white/20 text-xs tracking-widest uppercase mb-4 md:mb-0">
          © 2026 VEXON AUDIO AI · Neural Processing Unit
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

