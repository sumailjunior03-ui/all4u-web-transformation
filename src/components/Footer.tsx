import { Facebook, Linkedin, Instagram, Twitter, ArrowUp } from "lucide-react";

const navColumns = [
  {
    title: "What We Do",
    links: ["Staff Augmentation", "Web Development", "AI & Generative AI", "Cybersecurity"],
  },
  {
    title: "Industries",
    links: ["Healthcare", "Banking & Fintech", "E-commerce", "Gaming"],
  },
  {
    title: "Who We Are",
    links: ["Why All4u", "Our Team", "Achievements", "Careers"],
  },
  {
    title: "Get In Touch",
    links: ["Contact Us", "hello@all4usoftware.com", "+1 (800) ALL-4U-IT", "Schedule a Call"],
  },
];


const socials = [
  { icon: Facebook, href: "#" },
  { icon: Linkedin, href: "#" },
  { icon: Instagram, href: "#" },
  { icon: Twitter, href: "#" },
];

export default function Footer() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer style={{ background: "hsl(var(--navy))" }}>

      {/* ── Top: Logo + Nav columns ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="flex flex-col lg:flex-row gap-12">

          {/* Logo */}
          <div className="shrink-0 lg:w-48">
            <div className="flex items-center gap-2 mb-1">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center text-white font-bold text-sm"
                style={{ background: "hsl(var(--teal))" }}
              >
                A4
              </div>
              <div>
                <p className="font-bold text-white text-sm leading-tight" style={{ fontFamily: "Syne, sans-serif" }}>
                  All4u Software
                </p>
                <p className="text-xs" style={{ color: "hsl(var(--teal))" }}>Solutions LLC</p>
              </div>
            </div>
          </div>

          {/* Nav columns */}
          <div className="flex-1 grid grid-cols-2 md:grid-cols-4 gap-8">
            {navColumns.map(({ title, links }) => (
              <div key={title}>
                <h4 className="text-white font-semibold text-sm mb-4 flex items-center gap-1">
                  {title}
                  <span className="text-white/40 text-xs">▾</span>
                </h4>
                <ul className="space-y-2.5">
                  {links.map((link) => (
                    <li key={link}>
                      <a href="#" className="text-white/50 text-sm hover:text-teal transition-colors duration-200">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Divider ── */}
      <div className="border-t" style={{ borderColor: "hsl(var(--navy-light))" }} />
      {/* ── Divider ── */}
      <div className="border-t" style={{ borderColor: "hsl(var(--navy-light))" }} />

      {/* ── Bottom bar with teal gradient ── */}
      <div
        style={{
          background: "linear-gradient(to bottom, hsl(var(--navy)), hsl(172 80% 22%))",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">

            {/* Email */}
            <a
              href="mailto:global.business@all4usoftware.com"
              className="text-white font-semibold text-sm hover:text-teal transition-colors duration-200"
            >
              global.business@all4usoftware.com
            </a>

            {/* Social icons */}
            <div className="flex items-center gap-3">
              {socials.map(({ icon: Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  className="w-9 h-9 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110 hover:bg-teal"
                  style={{ background: "hsl(var(--navy-light))", color: "white" }}
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Legal + back to top */}
          <div className="mt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
            <div className="flex items-center gap-5">
              <a href="#" className="text-white/40 text-xs hover:text-white transition-colors duration-200">Terms and Conditions</a>
              <a href="#" className="text-white/40 text-xs hover:text-white transition-colors duration-200">Privacy Policy</a>
              <span className="text-white/30 text-xs">© {new Date().getFullYear()} All4u Software Solutions LLC</span>
            </div>
            <button
              onClick={scrollTop}
              className="flex items-center gap-1.5 text-xs font-medium text-white/40 hover:text-teal transition-colors duration-200"
            >
              Back to Top <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>

    </footer>
  );
}
