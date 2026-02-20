import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import officeTeamVideo from "@/assets/office-team-video.mp4";
import { ArrowRight } from "lucide-react";

export default function ScrollImageSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Smooth spring on top of scroll progress — eliminates jank/lag feel
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 60,
    damping: 20,
    restDelta: 0.001,
  });

  // Scale: 1 → 0.55 (shrinks both width and height uniformly)
  const videoScale = useTransform(
    smoothProgress,
    [0, 0.2, 0.7],
    [1, 1, 0.55]
  );

  // X translation: shifts left so scaled video sits in left half
  const videoX = useTransform(
    smoothProgress,
    [0.2, 0.7],
    ["0%", "-24%"]
  );

  // Border radius: 0 → 20px as it shrinks into a card
  const videoBorderRadius = useTransform(
    smoothProgress,
    [0.2, 0.7],
    ["0px", "20px"]
  );

  // Content: fades + slides in from right
  const contentOpacity = useTransform(
    smoothProgress,
    [0.45, 0.72],
    [0, 1]
  );

  const contentX = useTransform(
    smoothProgress,
    [0.45, 0.72],
    ["80px", "0px"]
  );

  return (
    <section
      ref={containerRef}
      className="relative"
      style={{ height: "300vh" }}
      id="culture"
    >
      {/* Sticky full-screen stage */}
      <div className="sticky top-0 h-screen overflow-hidden bg-background flex items-center justify-center">

        {/* Video card — full screen initially, scales+translates left on scroll */}
        <motion.div
          className="absolute inset-0 overflow-hidden origin-center"
          style={{
            scale: videoScale,
            x: videoX,
            borderRadius: videoBorderRadius,
          }}
        >
          <video
            src={officeTeamVideo}
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Content panel — absolutely positioned right half, invisible until scroll */}
        <motion.div
          className="absolute right-0 top-0 h-full flex items-center"
          style={{
            width: "45%",
            opacity: contentOpacity,
            x: contentX,
          }}
        >
          <div className="px-10 lg:px-14 xl:px-16 max-w-lg">
            <p className="section-tag mb-4">CAREERS</p>
            <h2
              className="text-4xl lg:text-5xl font-extrabold text-foreground mb-6"
              style={{ lineHeight: 1.1 }}
            >
              Human-first is our{" "}
              <span className="text-teal">foundation.</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Join a culture that celebrates excellence and diversity, Globally!
            </p>
            <button className="btn-primary text-base px-10 py-4">
              Join Us <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
