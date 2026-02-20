import { Mail, Linkedin, Twitter, Github, ArrowUp } from "lucide-react";

const footerLinks = {
  Services: [
    "Staff Augmentation",
    "Web Development",
    "Mobile Apps",
    "AI Solutions",
    "Cybersecurity",
    "Cloud Solutions",
  ],
  Company: ["About Us", "Our Team", "Careers", "Case Studies", "Blog"],
  Industries: [
    "Healthcare",
    "Fintech",
    "E-commerce",
    "SaaS",
    "Telecom",
    "Gaming",
  ],
  Contact: [
    "hello@all4usoftware.com",
    "+1 (800) ALL-4U-IT",
    "United States",
    "Privacy Policy",
    "Terms of Service",
  ],
};

export default function Footer() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer style={{ background: "hsl(var(--navy))" }}>
      {/* CTA Banner */}
      <div
        className="py-16"
        style={{
          background: "linear-gradient(135deg, hsl(var(--teal-dark)), hsl(var(--teal)))",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-between gap-8">
          <div>
            <h2 className="text-3xl lg:text-4xl font-extrabold text-white mb-3">
              Ready to Build Something Great?
            </h2>
            <p className="text-white/80 text-lg">
              Let's discuss how All4u can accelerate your technology roadmap.
            </p>
          </div>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="shrink-0 px-8 py-4 rounded-full bg-white font-bold text-base transition-all duration-300 hover:-translate-y-1"
            style={{ color: "hsl(var(--teal-dark))" }}
          >
            Start a Conversation →
          </a>
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10">
          {/* Brand */}
          <div className="col-span-2 md:col-span-3 lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center text-white font-bold"
                style={{ background: "hsl(var(--teal))" }}
              >
                A4
              </div>
              <div>
                <p className="font-bold text-white text-sm" style={{ fontFamily: "Syne, sans-serif" }}>
                  All4u Software
                </p>
                <p className="text-teal text-xs">Solutions LLC</p>
              </div>
            </div>
            <p className="text-white/50 text-sm leading-relaxed mb-6">
              Delivering world-class IT staffing and software solutions across the globe since 2012.
            </p>
            <div className="flex gap-3">
              {[Linkedin, Twitter, Github, Mail].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 rounded-lg flex items-center justify-center transition-all duration-200 hover:scale-110"
                  style={{
                    background: "hsl(var(--navy-mid))",
                    color: "hsl(var(--teal))",
                  }}
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4
                className="font-bold text-sm mb-5 text-white tracking-wide"
                style={{ fontFamily: "Syne, sans-serif" }}
              >
                {title}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-white/50 text-sm hover:text-teal transition-colors duration-200"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div
          className="mt-16 pt-8 border-t flex flex-col sm:flex-row items-center justify-between gap-4"
          style={{ borderColor: "hsl(var(--navy-light))" }}
        >
          <p className="text-white/40 text-sm">
            © {new Date().getFullYear()} All4u Software Solutions LLC. All rights reserved.
          </p>
          <button
            onClick={scrollTop}
            className="flex items-center gap-2 text-sm font-medium text-teal hover:text-white transition-colors duration-200"
          >
            Back to Top <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
}
