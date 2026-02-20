import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";

const navItems = [
  { label: "What We Do", href: "#services" },
  { label: "Who We Help", href: "#industries" },
  { label: "Who We Are", href: "#about" },
  { label: "How We Deliver", href: "#process" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-[var(--shadow-nav)]"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-18 py-4">
            {/* Logo */}
            <motion.a
              href="/"
              className="flex items-center gap-2"
              whileHover={{ scale: 1.03 }}
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center text-white font-bold text-lg"
                style={{ background: "hsl(var(--teal))" }}
              >
                A4
              </div>
              <div className="hidden sm:block">
                <p
                  className={`font-bold text-base leading-tight transition-colors ${
                    scrolled ? "text-foreground" : "text-white"
                  }`}
                  style={{ fontFamily: "Syne, sans-serif" }}
                >
                  All4u Software
                </p>
                <p className="text-xs text-teal font-medium">Solutions LLC</p>
              </div>
            </motion.a>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-8">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => scrollTo(item.href)}
                  className={`nav-link flex items-center gap-1 ${
                    scrolled ? "text-foreground hover:text-teal" : "text-white/90 hover:text-white"
                  }`}
                >
                  {item.label}
                  <ChevronDown className="w-3.5 h-3.5 opacity-60" />
                </button>
              ))}
            </nav>

            {/* CTA Buttons */}
            <div className="hidden lg:flex items-center gap-3">
              <button
                onClick={() => scrollTo("#contact")}
                className={`px-5 py-2.5 rounded-full text-sm font-semibold border-2 transition-all duration-300 ${
                  scrolled
                    ? "border-foreground/20 text-foreground hover:border-teal hover:text-teal"
                    : "border-white/50 text-white hover:bg-white hover:text-foreground"
                }`}
              >
                Explore Careers
              </button>
              <button
                onClick={() => scrollTo("#contact")}
                className="btn-primary text-sm py-2.5 px-6"
              >
                Let's Talk Business
              </button>
            </div>

            {/* Mobile Toggle */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className={`lg:hidden p-2 rounded-lg ${scrolled ? "text-foreground" : "text-white"}`}
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 pt-20 bg-white"
          >
            <div className="flex flex-col p-6 gap-2">
              {navItems.map((item, i) => (
                <motion.button
                  key={item.label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.07 }}
                  onClick={() => scrollTo(item.href)}
                  className="text-left py-4 px-4 text-lg font-semibold text-foreground border-b border-border hover:text-teal transition-colors"
                >
                  {item.label}
                </motion.button>
              ))}
              <div className="mt-6 flex flex-col gap-3">
                <button
                  onClick={() => scrollTo("#contact")}
                  className="btn-primary w-full justify-center text-base py-4"
                >
                  Let's Talk Business
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
