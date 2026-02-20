import { motion } from "framer-motion";
import { CheckCircle, Users, Shield, Zap, Globe, Award } from "lucide-react";

const reasons = [
  {
    icon: Users,
    title: "150+ Pre-Vetted Engineers",
    description:
      "Every engineer passes rigorous technical and soft-skills assessments before joining our network.",
  },
  {
    icon: Zap,
    title: "72-Hour Talent Matching",
    description:
      "We place the right candidate in record time, without compromising on quality or fit.",
  },
  {
    icon: Globe,
    title: "Global Delivery Model",
    description:
      "Nearshore, offshore, and hybrid delivery models tailored to your time zone and workflow.",
  },
  {
    icon: Shield,
    title: "IP & Security First",
    description:
      "Robust NDAs, secure development environments, and enterprise-grade data protection.",
  },
  {
    icon: Award,
    title: "98% Client Retention",
    description:
      "Our long-term client relationships speak louder than any marketing claim.",
  },
  {
    icon: CheckCircle,
    title: "Agile-Ready Teams",
    description:
      "We integrate seamlessly into your existing sprints, tools, and workflows from day one.",
  },
];

export default function WhyUsSection() {
  return (
    <section className="py-24 bg-secondary/20" id="about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="section-tag mb-4">Why All4u</p>
            <h2 className="text-4xl lg:text-5xl font-extrabold text-foreground leading-tight mb-6">
              Human-First is Our{" "}
              <span className="text-teal">Foundation</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              All4u Software Solutions LLC is an IT staffing and software services company
              that believes in people-powered technology. We don't just fill roles —
              we build partnerships that accelerate your growth and deliver measurable results.
            </p>

            <div className="space-y-4 mb-10">
              {[
                "Certified professionals across 20+ technology stacks",
                "Dedicated project managers & delivery leads",
                "Transparent communication & weekly reporting",
                "Flexible engagement models: T&M, Fixed, Retainer",
              ].map((point) => (
                <div key={point} className="flex items-start gap-3">
                  <div
                    className="mt-1 w-5 h-5 rounded-full flex items-center justify-center shrink-0"
                    style={{ background: "hsl(var(--teal) / 0.1)" }}
                  >
                    <div
                      className="w-2 h-2 rounded-full"
                      style={{ background: "hsl(var(--teal))" }}
                    />
                  </div>
                  <p className="text-foreground/80 text-sm leading-relaxed">{point}</p>
                </div>
              ))}
            </div>

            <button className="btn-primary">Schedule a Call →</button>
          </motion.div>

          {/* Right — Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {reasons.map((reason, i) => {
              const Icon = reason.icon;
              return (
                <motion.div
                  key={reason.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  whileHover={{ y: -4 }}
                  className="p-5 rounded-2xl border group transition-all duration-300"
                  style={{
                    background: "white",
                    borderColor: "hsl(var(--border))",
                    boxShadow: "0 1px 3px hsl(220 50% 5% / 0.05)",
                  }}
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110"
                    style={{
                      background: "hsl(var(--teal) / 0.1)",
                      color: "hsl(var(--teal))",
                    }}
                  >
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-bold text-foreground text-sm mb-2">{reason.title}</h3>
                  <p className="text-muted-foreground text-xs leading-relaxed">{reason.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
