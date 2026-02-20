import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import heroBgVideo from "@/assets/hero-bg-video.mp4";

const featuredIn = ["Forbes", "Business Insider", "TechCrunch", "Yahoo Finance", "Mashable"];

const ease: [number, number, number, number] = [0.25, 0.46, 0.45, 0.94];

export default function HeroSection() {
  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden" id="home">
      {/* Background Video */}
      <div className="absolute inset-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
          src={heroBgVideo}
        />
        <div
          className="absolute inset-0"
          style={{ background: "var(--gradient-hero)" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/60" />
      </div>

      {/* Animated grid lines */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "linear-gradient(hsl(172 100% 50% / 0.3) 1px, transparent 1px), linear-gradient(90deg, hsl(172 100% 50% / 0.3) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-24">
        <div className="max-w-3xl">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0, ease }}
            className="inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-full border border-teal/40 bg-teal/10 backdrop-blur-sm"
          >
            <span className="w-2 h-2 rounded-full bg-teal animate-pulse-teal" />
            <span className="text-teal text-sm font-semibold tracking-wide">
              IT Staffing & Software Solutions
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease }}
            className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white mb-6"
          >
            Building at the{" "}
            <span className="text-teal">Speed of</span>{" "}
            Innovation
          </motion.h1>

          {/* Sub */}
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease }}
            className="text-lg sm:text-xl text-white/75 max-w-xl mb-10 leading-relaxed"
          >
            We help companies across North America, Middle East and Asia Pacific
            with cutting-edge software development, IT staffing, and digital
            transformation.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45, ease }}
            className="flex flex-wrap items-center gap-4"
          >
            <button
              onClick={() => scrollTo("#contact")}
              className="btn-primary text-base gap-2"
            >
              Get in Touch <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => scrollTo("#services")}
              className="btn-outline-white text-base gap-2"
            >
              <Play className="w-4 h-4" /> Our Services
            </button>
          </motion.div>

          {/* Hero Stats */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease }}
            className="mt-16 flex flex-wrap gap-10"
          >
            {[
              { value: "500+", label: "Projects Delivered" },
              { value: "150+", label: "Expert Engineers" },
              { value: "12+", label: "Years Experience" },
              { value: "30+", label: "Global Clients" },
            ].map((s) => (
              <div key={s.label}>
                <p
                  className="text-3xl font-extrabold text-teal"
                  style={{ fontFamily: "Syne, sans-serif" }}
                >
                  {s.value}
                </p>
                <p className="text-white/60 text-sm mt-1">{s.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Featured In strip */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
        className="absolute bottom-0 left-0 right-0 bg-black/50 backdrop-blur-sm border-t border-white/10 py-5"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center gap-8 flex-wrap justify-center sm:justify-start">
          <span className="text-white/50 text-sm font-medium whitespace-nowrap">
            As Seen On:
          </span>
          {featuredIn.map((name) => (
            <span
              key={name}
              className="text-white/70 font-bold text-sm sm:text-base tracking-tight whitespace-nowrap"
            >
              {name}
            </span>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
