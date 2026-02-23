import { Link } from "react-router-dom";
import { Github, Twitter, Linkedin } from "lucide-react";

const Footer = () => (
  <footer className="border-t border-border/50 bg-background py-20">
    <div className="container mx-auto px-6">
      <div className="grid gap-12 md:grid-cols-5">
        <div className="md:col-span-2">
          <div className="flex items-center gap-3 mb-5">
            <div className="relative flex items-center justify-center w-7 h-7">
              <div className="absolute inset-0 rounded-md bg-primary/20" />
              <div className="flex items-center gap-[2px]">
                {[8, 12, 16, 12, 8].map((h, i) => (
                  <span key={i} className="waveform-line" style={{ height: h, width: 2 }} />
                ))}
              </div>
            </div>
            <span className="font-display text-base font-bold text-foreground">
              Cognive<span className="text-gradient-primary">Vex</span>
            </span>
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed max-w-xs mb-6">
            From Sound to Sense — AI Audio Reinvented. Building the future of intelligent audio processing.
          </p>
          <div className="flex items-center gap-3">
            {[Twitter, Github, Linkedin].map((Icon, i) => (
              <a key={i} href="#" className="rounded-lg border border-border/50 p-2.5 text-muted-foreground transition-all hover:text-foreground hover:border-primary/40 hover:bg-muted">
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>

        {[
          {
            title: "Product",
            links: [
              { label: "Features", to: "/features" },
              { label: "Use Cases", to: "/product" },
              { label: "Pricing", to: "/" },
              { label: "API Docs", to: "#" },
            ],
          },
          {
            title: "Company",
            links: [
              { label: "About", to: "/about" },
              { label: "Blog", to: "#" },
              { label: "Contact", to: "/contact" },
              { label: "Careers", to: "#" },
            ],
          },
          {
            title: "Legal",
            links: [
              { label: "Privacy", to: "#" },
              { label: "Terms", to: "#" },
              { label: "Security", to: "#" },
            ],
          },
        ].map((section) => (
          <div key={section.title}>
            <h4 className="mb-5 font-display text-xs font-semibold tracking-widest text-muted-foreground uppercase">
              {section.title}
            </h4>
            <div className="flex flex-col gap-3">
              {section.links.map((link) => (
                <Link
                  key={link.label}
                  to={link.to}
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="divider-gradient mt-16 mb-8" />
      <p className="text-center text-xs text-muted-foreground">
        © 2026 CogniveVex. All rights reserved.
      </p>
    </div>
  </footer>
);

export default Footer;
