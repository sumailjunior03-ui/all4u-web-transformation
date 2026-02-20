import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, CheckCircle } from "lucide-react";

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "", email: "", company: "", service: "", message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="py-24 bg-white" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="section-tag mb-3">Contact Us</p>
          <h2 className="text-4xl lg:text-5xl font-extrabold text-foreground">
            Let's Talk{" "}
            <span className="text-teal">Business</span>
          </h2>
          <p className="mt-4 text-muted-foreground text-lg max-w-xl mx-auto">
            Ready to transform your business? Our team typically responds within 2 hours.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Left info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 space-y-8"
          >
            {[
              {
                icon: Mail,
                label: "Email Us",
                value: "hello@all4usoftware.com",
                href: "mailto:hello@all4usoftware.com",
              },
              {
                icon: Phone,
                label: "Call Us",
                value: "+1 (800) ALL-4U-IT",
                href: "tel:+18002554848",
              },
              {
                icon: MapPin,
                label: "Headquarters",
                value: "United States & Global Delivery",
                href: "#",
              },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <a key={item.label} href={item.href} className="flex items-start gap-4 group">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 transition-all duration-300 group-hover:scale-110"
                    style={{ background: "hsl(var(--teal) / 0.1)", color: "hsl(var(--teal))" }}
                  >
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-muted-foreground text-sm">{item.label}</p>
                    <p className="font-semibold text-foreground">{item.value}</p>
                  </div>
                </a>
              );
            })}

            {/* CTA box */}
            <div
              className="p-6 rounded-2xl mt-8"
              style={{ background: "hsl(var(--navy))" }}
            >
              <h3 className="text-white font-bold text-lg mb-2">
                Need Immediate Staffing?
              </h3>
              <p className="text-white/60 text-sm mb-4">
                We can have qualified engineers ready to start within 72 hours.
              </p>
              <div className="text-teal font-bold text-2xl" style={{ fontFamily: "Syne, sans-serif" }}>
                72-Hour Guarantee
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3"
          >
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="h-full flex flex-col items-center justify-center text-center py-20"
              >
                <div
                  className="w-20 h-20 rounded-full flex items-center justify-center mb-6"
                  style={{ background: "hsl(var(--teal) / 0.1)" }}
                >
                  <CheckCircle className="w-10 h-10 text-teal" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-3">Message Sent!</h3>
                <p className="text-muted-foreground">
                  Our team will get back to you within 2 business hours.
                </p>
              </motion.div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="p-8 rounded-2xl border space-y-5"
                style={{ borderColor: "hsl(var(--border))", background: "hsl(var(--secondary) / 0.3)" }}
              >
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Full Name *</label>
                    <input
                      required
                      type="text"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="John Smith"
                      className="w-full px-4 py-3 rounded-xl border text-sm outline-none transition-all focus:ring-2"
                      style={{
                        borderColor: "hsl(var(--border))",
                        background: "white",
                      }}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Work Email *</label>
                    <input
                      required
                      type="email"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="john@company.com"
                      className="w-full px-4 py-3 rounded-xl border text-sm outline-none transition-all focus:ring-2"
                      style={{ borderColor: "hsl(var(--border))", background: "white" }}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Company</label>
                  <input
                    type="text"
                    value={form.company}
                    onChange={(e) => setForm({ ...form, company: e.target.value })}
                    placeholder="Your Company Name"
                    className="w-full px-4 py-3 rounded-xl border text-sm outline-none transition-all"
                    style={{ borderColor: "hsl(var(--border))", background: "white" }}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Service Needed</label>
                  <select
                    value={form.service}
                    onChange={(e) => setForm({ ...form, service: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border text-sm outline-none transition-all"
                    style={{ borderColor: "hsl(var(--border))", background: "white", color: form.service ? "inherit" : "hsl(var(--muted-foreground))" }}
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
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Project Details *</label>
                  <textarea
                    required
                    rows={4}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Tell us about your project, timeline, and budget..."
                    className="w-full px-4 py-3 rounded-xl border text-sm outline-none transition-all resize-none"
                    style={{ borderColor: "hsl(var(--border))", background: "white" }}
                  />
                </div>

                <button type="submit" className="btn-primary w-full justify-center py-4 text-base">
                  Send Message <Send className="w-4 h-4" />
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
