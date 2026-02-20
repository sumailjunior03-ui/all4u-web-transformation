import { useEffect, useRef } from "react";
import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import { ArrowRight } from "lucide-react";

const stats = [
  { value: 500, suffix: "+", label: "Projects Delivered" },
  { value: 150, suffix: "+", label: "Expert Engineers" },
  { value: 12, suffix: "+", label: "Years of Excellence" },
  { value: 98, suffix: "%", label: "Client Satisfaction" },
];

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const motionVal = useMotionValue(0);
  const spring = useSpring(motionVal, { stiffness: 80, damping: 20 });

  useEffect(() => {
    if (inView) motionVal.set(value);
  }, [inView, motionVal, value]);

  useEffect(() => {
    return spring.on("change", (v) => {
      if (ref.current) ref.current.textContent = Math.round(v).toString();
    });
  }, [spring]);

  return (
    <span ref={ref} className="stat-number text-5xl lg:text-6xl">
      0
    </span>
  );
}

export default function StatsSection() {
  return (
    <section className="py-16 bg-background" id="stats">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="section-tag mb-3">PIONEERING TRUST AND INNOVATION</p>
            <h2 className="text-4xl lg:text-5xl font-extrabold text-foreground mb-6">
              All4u's <span className="text-teal">Achievements</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-4">
              We take pride in empowering businesses worldwide with innovative solutions.
            </p>
            <p className="text-muted-foreground text-base leading-relaxed mb-8">
              All4u brings an unwavering commitment to excellence, backed by a global presence.
            </p>
            <button className="btn-primary text-base">
              Get in Touch <ArrowRight className="w-4 h-4" />
            </button>
          </motion.div>

          {/* Right stats grid */}
          <div className="grid grid-cols-2 gap-8">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.12 }}
                className="text-center"
              >
                <div className="flex items-end justify-center gap-0.5 mb-2">
                  <Counter value={stat.value} suffix={stat.suffix} />
                  <span className="stat-number text-5xl lg:text-6xl mb-0.5">{stat.suffix}</span>
                </div>
                <p className="text-foreground font-semibold text-base">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

    </section>
  );
}
