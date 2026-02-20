import { useState } from "react";
import { motion } from "framer-motion";
import {
  Plane, Phone, Zap, ShoppingBag, Droplets, TrendingUp,
  ShoppingCart, CreditCard, HeartPulse, Gamepad2, Building2, Cpu, ArrowRight
} from "lucide-react";

const industries = [
  { icon: Plane, name: "Travel & Hospitality", description: "Digital experiences for modern travelers" },
  { icon: Building2, name: "Public Sector", description: "Government and civic tech solutions" },
  { icon: Phone, name: "Telecommunication", description: "Next-gen telecom platform development" },
  { icon: ShoppingBag, name: "Retail & CPG", description: "Omnichannel retail transformation" },
  { icon: Droplets, name: "Oil, Gas & Energy", description: "Operational technology for energy sector" },
  { icon: TrendingUp, name: "Startups", description: "MVP to scale-up engineering support" },
  { icon: ShoppingCart, name: "E-commerce", description: "High-converting digital storefronts" },
  { icon: CreditCard, name: "Banking & Fintech", description: "Secure financial technology solutions" },
  { icon: HeartPulse, name: "Healthcare & Pharmaceuticals", description: "HIPAA-compliant health platforms" },
  { icon: Gamepad2, name: "Gaming", description: "Immersive gaming and metaverse experiences" },
  { icon: Cpu, name: "Manufacturing", description: "Industry 4.0 automation solutions" },
  { icon: Zap, name: "SaaS Platforms", description: "Scalable software-as-a-service products" },
];

export default function IndustriesSection() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section className="py-20 bg-white" id="industries">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Centered heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="section-tag mb-3">Industry Expertise</p>
          <h2 className="text-4xl lg:text-5xl font-extrabold text-foreground">
            Discover Our Impact{" "}
            <span className="text-teal">Across Industries</span>
          </h2>
        </motion.div>

        {/* 2-column list */}
        <div className="grid grid-cols-1 md:grid-cols-2">
          {industries.map((industry, i) => {
            const Icon = industry.icon;
            const isHovered = hovered === i;
            return (
              <motion.div
                key={industry.name}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-20px" }}
                transition={{ duration: 0.45, delay: Math.floor(i / 2) * 0.06 }}
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
                className="flex items-center gap-5 py-5 px-4 cursor-pointer group transition-all duration-200 border-b"
                style={{
                  borderColor: isHovered ? "hsl(var(--teal))" : "hsl(var(--border))",
                  background: isHovered ? "hsl(var(--teal) / 0.03)" : "transparent",
                }}
              >
                {/* Icon */}
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0 transition-all duration-300"
                  style={{
                    background: isHovered ? "hsl(var(--teal))" : "hsl(var(--teal-light))",
                    color: isHovered ? "white" : "hsl(var(--teal))",
                  }}
                >
                  <Icon className="w-5 h-5" />
                </div>

                {/* Name */}
                <span
                  className="font-semibold text-base flex-1 transition-colors duration-200"
                  style={{ color: isHovered ? "hsl(var(--teal))" : "hsl(var(--foreground))" }}
                >
                  {industry.name}
                </span>

                {/* Arrow — slides in on hover */}
                <motion.div
                  animate={{ opacity: isHovered ? 1 : 0, x: isHovered ? 0 : -12 }}
                  transition={{ duration: 0.2 }}
                  className="shrink-0"
                  style={{ color: "hsl(var(--teal))" }}
                >
                  <ArrowRight className="w-5 h-5" />
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-14 text-center"
        >
          <button className="btn-primary text-base px-12 py-4">
            Let's Talk Business
          </button>
        </motion.div>
      </div>
    </section>
  );
}
