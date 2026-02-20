import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ChevronDown, ChevronUp } from "lucide-react";
import serviceStaff from "@/assets/service-staff.jpg";
import serviceWeb from "@/assets/service-web.jpg";
import serviceMobile from "@/assets/service-mobile.jpg";
import serviceCloud from "@/assets/service-cloud.jpg";
import serviceSecurity from "@/assets/service-security.jpg";
import serviceDesign from "@/assets/service-design.jpg";
import serviceDevops from "@/assets/service-devops.jpg";
import serviceAi from "@/assets/service-ai.jpg";

// First 8 — shown by default, use local images to fill masonry with no gaps
const primaryServices = [
  { title: "Staff Augmentation", description: "Scale your team instantly with vetted senior engineers, developers, and IT experts.", image: serviceStaff, tag: "TALENT" },
  { title: "Web Development", description: "High-performance web applications built with modern frameworks and best practices.", image: serviceWeb, tag: "DEV" },
  { title: "Mobile App Development", description: "iOS and Android apps that deliver seamless user experiences at scale.", image: serviceMobile, tag: "MOBILE" },
  { title: "AI & Generative AI", description: "Leverage the power of AI to automate workflows and unlock new business value.", image: serviceAi, tag: "AI" },
  { title: "Cybersecurity", description: "Protect your digital assets with enterprise-grade security solutions and audits.", image: serviceSecurity, tag: "SECURITY" },
  { title: "UI/UX Design", description: "Human-centered design that creates intuitive, beautiful digital experiences.", image: serviceDesign, tag: "DESIGN" },
  { title: "Cloud Solutions", description: "Cloud migration, architecture, and management across AWS, Azure, and GCP.", image: serviceCloud, tag: "CLOUD" },
  { title: "DevOps & Automation", description: "Streamline your CI/CD pipeline and accelerate software delivery cycles.", image: serviceDevops, tag: "DEVOPS" },
];

// Remaining services — revealed on "See All"
const extendedServices = [
  { title: "Custom Software Development", description: "Tailor-made software solutions engineered to your exact business requirements.", image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&q=80", tag: "CUSTOM" },
  { title: "Data Analytics & Insights", description: "Transform raw data into actionable intelligence with advanced analytics platforms.", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80", tag: "DATA" },
  { title: "Dynamics 365 ERP", description: "End-to-end Microsoft Dynamics 365 ERP implementation, customization, and support.", image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80", tag: "ERP" },
  { title: "MS D365 CRM", description: "Streamline customer relationships with Microsoft Dynamics 365 CRM solutions.", image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&q=80", tag: "CRM" },
  { title: "Power Apps", description: "Rapid low-code application development on the Microsoft Power Platform.", image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=600&q=80", tag: "POWER" },
  { title: "Cloud Migration & Cloud Ops", description: "Seamless cloud migration strategies and ongoing operations management.", image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&q=80", tag: "CLOUD OPS" },
  { title: "Cloud Maintenance & Integration", description: "Continuous cloud health monitoring, optimization, and third-party integrations.", image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&q=80", tag: "CLOUD INT" },
  { title: "Salesforce", description: "Salesforce implementation, customization, and managed services for enterprise CRM.", image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&q=80", tag: "SALESFORCE" },
  { title: "Quality Assurance", description: "Comprehensive QA testing — manual, automated, performance, and security testing.", image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&q=80", tag: "QA" },
  { title: "SaaS", description: "End-to-end SaaS product engineering from architecture to multi-tenant deployment.", image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600&q=80", tag: "SAAS" },
  { title: "E-commerce", description: "High-converting e-commerce platforms built for scale, speed, and conversions.", image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&q=80", tag: "E-COMM" },
  { title: "Blockchain & Cryptography", description: "Decentralized applications, smart contracts, and enterprise blockchain solutions.", image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=600&q=80", tag: "BLOCKCHAIN" },
  { title: "Metaverse", description: "Immersive virtual world experiences and metaverse platform development.", image: "https://images.unsplash.com/photo-1617802690992-15d93263d3a9?w=600&q=80", tag: "METAVERSE" },
  { title: "Augmented Reality", description: "AR experiences that bridge the physical and digital worlds for enterprise and consumer.", image: "https://images.unsplash.com/photo-1592478411213-6153e4ebc07d?w=600&q=80", tag: "AR" },
  { title: "Game Development", description: "Full-cycle game development across PC, console, and mobile platforms.", image: "https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?w=600&q=80", tag: "GAMING" },
  { title: "Web3 Gaming", description: "Play-to-earn and NFT-integrated Web3 gaming experiences on blockchain.", image: "https://images.unsplash.com/photo-1614680376573-df3480f0c6ff?w=600&q=80", tag: "WEB3" },
  { title: "AR/VR/XR Gaming", description: "Next-generation immersive gaming experiences across AR, VR, and mixed reality.", image: "https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?w=600&q=80", tag: "XR" },
  { title: "Gaming Art & Design", description: "Concept art, character design, 3D modeling, and animation for games.", image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=600&q=80", tag: "ART" },
  { title: "Design & Development", description: "Unified design-to-development pipelines delivering pixel-perfect digital products.", image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&q=80", tag: "D&D" },
  { title: "Automation & Apps", description: "Intelligent process automation and enterprise app development to eliminate bottlenecks.", image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&q=80", tag: "AUTO" },
  { title: "Maintenance & Support", description: "24/7 application maintenance, monitoring, and technical support services.", image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=600&q=80", tag: "SUPPORT" },
];

// Stagger pattern: tall cards at these indices within each group
// Using aspect ratios — tall = 2/3, short = 4/3 — columns layout packs them with zero gaps
const TALL_PATTERN = [0, 3, 5, 6, 10, 13, 15, 16, 20];

function ServiceCard({
  service,
  index,
  isTall,
}: {
  service: { title: string; description: string; image: string; tag: string };
  index: number;
  isTall: boolean;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.6, delay: (index % 4) * 0.08, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="relative rounded-3xl overflow-hidden cursor-pointer group break-inside-avoid mb-4 lg:mb-5"
      style={{ aspectRatio: isTall ? "3/4.2" : "3/2.2" }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <img
        src={service.image}
        alt={service.title}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
      />

      {/* Gradient overlay */}
      <div
        className="absolute inset-0 transition-all duration-500"
        style={{
          background: hovered
            ? "linear-gradient(180deg, hsl(172 100% 37% / 0.15) 0%, hsl(220 50% 5% / 0.97) 100%)"
            : "linear-gradient(180deg, transparent 40%, hsl(220 50% 5% / 0.9) 100%)",
        }}
      />

      {/* Tag */}
      <div className="absolute top-5 left-5 z-10">
        <span
          className="text-xs font-bold tracking-widest px-3 py-1.5 rounded-full backdrop-blur-sm"
          style={{
            background: "hsl(var(--teal) / 0.2)",
            color: "hsl(var(--teal))",
            border: "1px solid hsl(var(--teal) / 0.3)",
          }}
        >
          {service.tag}
        </span>
      </div>

      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
        <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
        <AnimatePresence>
          {hovered && (
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.25 }}
              className="text-white/70 text-sm leading-relaxed"
            >
              {service.description}
            </motion.p>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}

const allServices = [...primaryServices, ...extendedServices];
const INITIAL_COUNT = 8;

export default function ServicesSection() {
  const [showAll, setShowAll] = useState(false);
  const visibleServices = showAll ? allServices : allServices.slice(0, INITIAL_COUNT);
  const total = allServices.length;

  return (
    <section className="py-16 bg-background" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-14">
          <div>
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="section-tag mb-3"
            >
              Our Services
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl lg:text-5xl font-extrabold text-foreground"
            >
              Transform Your{" "}
              <span className="text-teal">Business</span>
            </motion.h2>
          </div>
          <motion.button
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            onClick={() => setShowAll((v) => !v)}
            className="btn-primary self-start lg:self-auto whitespace-nowrap gap-2"
          >
            {showAll ? (
              <>Show Less <ChevronUp className="w-4 h-4" /></>
            ) : (
              <>See All Services <ArrowRight className="w-4 h-4" /></>
            )}
          </motion.button>
        </div>

        {/* Single unified masonry columns — no boundary gap */}
        <div className="columns-2 md:columns-3 lg:columns-4 gap-4 lg:gap-5">
          {visibleServices.map((service, i) => (
            <ServiceCard
              key={service.title}
              service={service}
              index={i}
              isTall={TALL_PATTERN.includes(i)}
            />
          ))}
        </div>

        {/* Bottom toggle button */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-10 flex justify-center"
        >
          <button
            onClick={() => setShowAll((v) => !v)}
            className="flex items-center gap-2 px-8 py-3 rounded-full border font-semibold text-sm transition-all duration-300 hover:bg-teal hover:text-white hover:border-teal"
            style={{ borderColor: "hsl(var(--teal))", color: "hsl(var(--teal))" }}
          >
            {showAll ? (
              <><ChevronUp className="w-4 h-4" /> Show Less</>
            ) : (
              <><ChevronDown className="w-4 h-4" /> See All {total} Services</>
            )}
          </button>
        </motion.div>
      </div>
    </section>
  );
}
