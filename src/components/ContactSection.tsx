import { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle, Globe, Users, Clock, ArrowRight } from "lucide-react";

const infoCards = [
  {
    icon: Globe,
    title: "Global Presence",
    desc: "We're across 5 continents — North America, Middle East, South Asia, Europe & APAC.",
    cta: "View Offices",
  },
  {
    icon: Users,
    title: "Global Leaders",
    desc: "Our capability and competencies are backed by diverse global leadership.",
    cta: "Meet the Team",
  },
  {
    icon: Clock,
    title: "72-Hour Guarantee",
    desc: "Qualified engineers ready to start within 72 hours. NDA signed before any discussion.",
    cta: "Learn More",
  },
];

const fieldClass =
  "w-full px-4 py-3 rounded-lg border text-sm outline-none transition-all focus:border-teal focus:ring-1 focus:ring-teal/30 bg-[hsl(180_30%_97%)] border-[hsl(214_25%_88%)] text-foreground placeholder:text-muted-foreground/60";

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", phone: "", company: "", service: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="py-20 bg-white" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid lg:grid-cols-5 gap-16 items-start">

          {/* LEFT — form column (3/5) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65 }}
            className="lg:col-span-3"
          >
            <p className="section-tag mb-3">Contact Us</p>
            <h2
              className="text-5xl lg:text-6xl font-extrabold mb-10 leading-tight"
              style={{ color: "hsl(var(--teal))" }}
            >
              Get In Touch
            </h2>

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center text-center py-20"
              >
                <div
                  className="w-20 h-20 rounded-full flex items-center justify-center mb-6"
                  style={{ background: "hsl(var(--teal) / 0.1)" }}
                >
                  <CheckCircle className="w-10 h-10 text-teal" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-3">Message Sent!</h3>
                <p className="text-muted-foreground">Our team will get back to you within 2 business hours.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">Full Name *</label>
                  <input required type="text" value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="John Smith" className={fieldClass} />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">Email *</label>
                  <input required type="email" value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="john@company.com" className={fieldClass} />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">Phone Number</label>
                  <input type="tel" value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    placeholder="+1 (201) 555-0123" className={fieldClass} />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">Company Name</label>
                  <input type="text" value={form.company}
                    onChange={(e) => setForm({ ...form, company: e.target.value })}
                    placeholder="Your Company" className={fieldClass} />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">Service Needed</label>
                  <select value={form.service}
                    onChange={(e) => setForm({ ...form, service: e.target.value })}
                    className={fieldClass}
                    style={{ color: form.service ? undefined : "hsl(var(--muted-foreground))" }}
                  >
                    <option value="">Select a service...</option>
                    <option>Staff Augmentation</option>
                    <option>Web Development</option>
                    <option>Mobile App Development</option>
                    <option>AI & Generative AI</option>
                    <option>Cybersecurity</option>
                    <option>Cloud Solutions</option>
                    <option>UI/UX Design</option>
                    <option>DevOps & Automation</option>
                    <option>Custom Software Development</option>
                    <option>Dynamics 365 ERP / CRM</option>
                    <option>Blockchain & Web3</option>
                    <option>Game Development</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">Project Details *</label>
                  <textarea required rows={4} value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Tell us about your project, timeline, and budget..."
                    className={`${fieldClass} resize-none`} />
                </div>

                <button type="submit" className="btn-primary px-10 py-3.5 text-base">
                  Submit <Send className="w-4 h-4" />
                </button>
              </form>
            )}
          </motion.div>

          {/* RIGHT — info cards (2/5) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, delay: 0.15 }}
            className="lg:col-span-2 space-y-6 lg:pt-28"
          >
            {infoCards.map(({ icon: Icon, title, desc, cta }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="p-6 rounded-2xl border group hover:border-teal transition-all duration-300"
                style={{ borderColor: "hsl(var(--border))", background: "hsl(var(--secondary) / 0.4)" }}
              >
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center mb-4 transition-all duration-300 group-hover:bg-teal"
                  style={{ background: "hsl(var(--teal) / 0.1)", color: "hsl(var(--teal))" }}
                >
                  <Icon className="w-5 h-5 group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="font-bold text-foreground text-lg mb-2">{title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">{desc}</p>
                <button className="flex items-center gap-1.5 text-sm font-semibold text-teal hover:gap-3 transition-all duration-200">
                  {cta} <ArrowRight className="w-4 h-4" />
                </button>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
