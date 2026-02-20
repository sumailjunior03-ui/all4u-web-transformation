import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, CheckCircle, Clock, Shield, Zap } from "lucide-react";

const contactInfo = [
  { icon: Mail, label: "Email Us", value: "hello@all4usoftware.com", href: "mailto:hello@all4usoftware.com" },
  { icon: Phone, label: "Call Us", value: "+1 (800) ALL-4U-IT", href: "tel:+18002554848" },
  { icon: MapPin, label: "Headquarters", value: "United States & Global Delivery", href: "#" },
];

const trustPoints = [
  { icon: Clock, text: "2-hour response guarantee" },
  { icon: Shield, text: "NDA signed before any discussion" },
  { icon: Zap, text: "Engineers ready in 72 hours" },
];

const inputStyle = {
  background: "hsl(var(--navy-light))",
  borderColor: "hsl(220 30% 28%)",
  color: "white",
};

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", company: "", service: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="py-24" id="contact" style={{ background: "hsl(var(--navy))" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* LEFT — bold pitch */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="section-tag mb-4">Contact Us</p>
            <h2 className="text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight">
              Let's Build{" "}
              <span className="text-teal">Something</span>{" "}
              Great Together
            </h2>
            <p className="text-white/50 text-lg leading-relaxed mb-10">
              Ready to transform your business? Tell us what you need and our team will get back to you within 2 hours.
            </p>

            {/* Trust points */}
            <div className="space-y-4 mb-12">
              {trustPoints.map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-3">
                  <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0"
                    style={{ background: "hsl(var(--teal) / 0.15)" }}
                  >
                    <Icon className="w-4 h-4 text-teal" />
                  </div>
                  <span className="text-white/70 text-sm">{text}</span>
                </div>
              ))}
            </div>

            {/* Contact links */}
            <div className="space-y-5 pt-8 border-t" style={{ borderColor: "hsl(220 30% 18%)" }}>
              {contactInfo.map(({ icon: Icon, label, value, href }) => (
                <a key={label} href={href} className="flex items-center gap-4 group">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-all duration-300 group-hover:scale-110"
                    style={{ background: "hsl(var(--teal) / 0.12)", color: "hsl(var(--teal))" }}
                  >
                    <Icon className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-white/40 text-xs">{label}</p>
                    <p className="text-white font-semibold text-sm">{value}</p>
                  </div>
                </a>
              ))}
            </div>
          </motion.div>

          {/* RIGHT — form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div
              className="rounded-3xl p-8 lg:p-10"
              style={{ background: "hsl(var(--navy-mid))", border: "1px solid hsl(220 30% 20%)" }}
            >
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center text-center py-16"
                >
                  <div
                    className="w-20 h-20 rounded-full flex items-center justify-center mb-6"
                    style={{ background: "hsl(var(--teal) / 0.15)" }}
                  >
                    <CheckCircle className="w-10 h-10 text-teal" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">Message Sent!</h3>
                  <p className="text-white/50">Our team will get back to you within 2 business hours.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <h3 className="text-white font-bold text-xl mb-6">Send us a message</h3>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-white/60 text-xs font-medium mb-2 uppercase tracking-wide">Full Name *</label>
                      <input
                        required type="text" value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        placeholder="John Smith"
                        className="w-full px-4 py-3 rounded-xl border text-sm outline-none transition-all placeholder:text-white/25 focus:border-teal"
                        style={inputStyle}
                      />
                    </div>
                    <div>
                      <label className="block text-white/60 text-xs font-medium mb-2 uppercase tracking-wide">Work Email *</label>
                      <input
                        required type="email" value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        placeholder="john@company.com"
                        className="w-full px-4 py-3 rounded-xl border text-sm outline-none transition-all placeholder:text-white/25 focus:border-teal"
                        style={inputStyle}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-white/60 text-xs font-medium mb-2 uppercase tracking-wide">Company</label>
                    <input
                      type="text" value={form.company}
                      onChange={(e) => setForm({ ...form, company: e.target.value })}
                      placeholder="Your Company Name"
                      className="w-full px-4 py-3 rounded-xl border text-sm outline-none transition-all placeholder:text-white/25 focus:border-teal"
                      style={inputStyle}
                    />
                  </div>

                  <div>
                    <label className="block text-white/60 text-xs font-medium mb-2 uppercase tracking-wide">Service Needed</label>
                    <select
                      value={form.service}
                      onChange={(e) => setForm({ ...form, service: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border text-sm outline-none transition-all focus:border-teal"
                      style={{ ...inputStyle, color: form.service ? "white" : "hsl(220 30% 50%)" }}
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
                    <label className="block text-white/60 text-xs font-medium mb-2 uppercase tracking-wide">Project Details *</label>
                    <textarea
                      required rows={4} value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      placeholder="Tell us about your project, timeline, and budget..."
                      className="w-full px-4 py-3 rounded-xl border text-sm outline-none transition-all resize-none placeholder:text-white/25 focus:border-teal"
                      style={inputStyle}
                    />
                  </div>

                  <button type="submit" className="btn-primary w-full justify-center py-4 text-base">
                    Send Message <Send className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
