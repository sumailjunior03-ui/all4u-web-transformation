import { useState } from "react";
import { motion } from "framer-motion";
import {
  Plane, Phone, Zap, ShoppingBag, Droplets, TrendingUp,
  ShoppingCart, CreditCard, HeartPulse, Gamepad2, Building2, Cpu, ArrowUpRight
} from "lucide-react";

const industries = [
  { icon: Plane, name: "Travel & Hospitality", description: "Digital experiences for modern travelers", number: "01" },
  { icon: Building2, name: "Public Sector", description: "Government and civic tech solutions", number: "02" },
  { icon: Phone, name: "Telecommunication", description: "Next-gen telecom platform development", number: "03" },
  { icon: ShoppingBag, name: "Retail & CPG", description: "Omnichannel retail transformation", number: "04" },
  { icon: Droplets, name: "Oil, Gas & Energy", description: "Operational technology for energy sector", number: "05" },
  { icon: TrendingUp, name: "Startups", description: "MVP to scale-up engineering support", number: "06" },
  { icon: ShoppingCart, name: "E-commerce", description: "High-converting digital storefronts", number: "07" },
  { icon: CreditCard, name: "Banking & Fintech", description: "Secure financial technology solutions", number: "08" },
  { icon: HeartPulse, name: "Healthcare", description: "HIPAA-compliant health platforms", number: "09" },
  { icon: Gamepad2, name: "Gaming", description: "Immersive gaming and metaverse experiences", number: "10" },
  { icon: Cpu, name: "Manufacturing", description: "Industry 4.0 automation solutions", number: "11" },
  { icon: Zap, name: "SaaS Platforms", description: "Scalable software-as-a-service products", number: "12" },
];

export default function IndustriesSection() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section className="py-16 bg-navy" id="industries" style={{ background: "hsl(var(--navy))" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="section-tag mb-3">Industry Expertise</p>
            <h2 className="text-4xl lg:text-5xl font-extrabold text-white">
              Discover Our Impact{" "}
              <span className="text-teal">Across Industries</span>
            </h2>
          </motion.div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-white/50 text-sm max-w-xs lg:text-right leading-relaxed"
          >
            We deliver specialized solutions across 12+ verticals globally.
          </motion.p>
        </div>

        {/* Industry cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px"
          style={{ background: "hsl(var(--navy-light) / 0.4)" }}
        >
          {industries.map((industry, i) => {
            const Icon = industry.icon;
            const isHovered = hovered === i;
            return (
              <motion.div
                key={industry.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-20px" }}
                transition={{ duration: 0.5, delay: (i % 3) * 0.07 }}
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
                className="relative group p-8 cursor-pointer transition-all duration-300"
                style={{
                  background: isHovered ? "hsl(var(--teal) / 0.08)" : "hsl(var(--navy))",
                  borderLeft: isHovered ? "2px solid hsl(var(--teal))" : "2px solid transparent",
                }}
              >
                {/* Number */}
                <span
                  className="text-xs font-bold tracking-widest mb-5 block transition-colors duration-300"
                  style={{ color: isHovered ? "hsl(var(--teal))" : "hsl(220 30% 35%)" }}
                >
                  {industry.number}
                </span>

                {/* Icon */}
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-all duration-300"
                  style={{
                    background: isHovered ? "hsl(var(--teal))" : "hsl(var(--navy-light))",
                    color: isHovered ? "white" : "hsl(var(--teal))",
                  }}
                >
                  <Icon className="w-5 h-5" />
                </div>

                {/* Text */}
                <h3
                  className="font-bold text-base mb-2 transition-colors duration-300"
                  style={{ color: isHovered ? "hsl(var(--teal))" : "white" }}
                >
                  {industry.name}
                </h3>
                <p className="text-white/40 text-sm leading-relaxed">{industry.description}</p>

                {/* Arrow */}
                <motion.div
                  animate={{ opacity: isHovered ? 1 : 0, x: isHovered ? 0 : -8 }}
                  transition={{ duration: 0.2 }}
                  className="absolute top-6 right-6"
                >
                  <ArrowUpRight className="w-4 h-4" style={{ color: "hsl(var(--teal))" }} />
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-12 text-center"
        >
          <button className="btn-primary text-base px-10 py-4">
            Let's Talk Business
          </button>
        </motion.div>
      </div>
    </section>
  );
}
