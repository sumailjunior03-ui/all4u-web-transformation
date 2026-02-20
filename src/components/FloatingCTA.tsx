import { motion } from "framer-motion";

export default function FloatingCTA() {
  const scrollTo = () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 2, duration: 0.5 }}
      className="fixed right-0 top-1/2 z-50 -translate-y-1/2"
    >
      <button
        onClick={scrollTo}
        className="flex items-center justify-center text-white text-xs font-bold tracking-widest py-5 px-3 rounded-l-xl shadow-lg transition-all duration-300 hover:px-5"
        style={{
          background: "hsl(var(--teal))",
          writingMode: "vertical-rl",
          textOrientation: "mixed",
          letterSpacing: "0.15em",
        }}
      >
        Let's Talk Business
      </button>
    </motion.div>
  );
}
