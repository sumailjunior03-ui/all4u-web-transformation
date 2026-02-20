import { motion } from "framer-motion";

const clients = [
  "TechNova", "FinBridge", "MediCore", "CloudStack", "RetailX",
  "DataPeak", "StartupLab", "SecureNet", "AgilePro", "NexusTech",
  "InnovateCo", "GlobalSoft", "PrimeDev", "SmartSys", "BuilderIO",
];

export default function ClientsSection() {
  const doubled = [...clients, ...clients];

  return (
    <section className="py-20 overflow-hidden bg-background border-y" style={{ borderColor: "hsl(var(--border))" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="section-tag mb-3">Trusted By</p>
          <h2 className="text-3xl lg:text-4xl font-extrabold text-foreground">
            Clients Who{" "}
            <span className="text-teal">Trust Us</span>
          </h2>
        </motion.div>
      </div>

      {/* Marquee Row 1 */}
      <div className="relative overflow-hidden py-4">
        <div className="flex gap-8 marquee-track" style={{ width: "max-content" }}>
          {doubled.map((client, i) => (
            <div
              key={`${client}-${i}`}
              className="flex items-center gap-3 px-6 py-3 rounded-full whitespace-nowrap"
              style={{
                background: "hsl(var(--muted))",
                border: "1px solid hsl(var(--border))",
              }}
            >
              <div
                className="w-2 h-2 rounded-full"
                style={{ background: "hsl(var(--teal))" }}
              />
              <span className="text-foreground/70 font-semibold text-sm">{client}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Marquee Row 2 — reverse */}
      <div className="relative overflow-hidden py-4">
        <div
          className="flex gap-8 marquee-track"
          style={{
            width: "max-content",
            animationDirection: "reverse",
            animationDuration: "25s",
          }}
        >
          {[...doubled].reverse().map((client, i) => (
            <div
              key={`rev-${client}-${i}`}
              className="flex items-center gap-3 px-6 py-3 rounded-full whitespace-nowrap"
              style={{
                background: "hsl(var(--secondary))",
                border: "1px solid hsl(var(--border))",
              }}
            >
              <span className="text-foreground/50 font-medium text-sm">{client}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
