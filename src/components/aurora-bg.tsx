import { motion } from "framer-motion";

export function AuroraBg() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <motion.div
        className="aurora-blob"
        style={{ width: 600, height: 600, top: -150, left: -100, background: "radial-gradient(circle, rgba(59,130,246,0.55), transparent 60%)" }}
        animate={{ x: [0, 80, -40, 0], y: [0, 60, -30, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="aurora-blob"
        style={{ width: 700, height: 700, top: 100, right: -200, background: "radial-gradient(circle, rgba(168,85,247,0.5), transparent 60%)" }}
        animate={{ x: [0, -90, 40, 0], y: [0, -50, 30, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="aurora-blob"
        style={{ width: 500, height: 500, bottom: -150, left: "30%", background: "radial-gradient(circle, rgba(217,70,239,0.35), transparent 60%)" }}
        animate={{ x: [0, 60, -60, 0], y: [0, -40, 20, 0] }}
        transition={{ duration: 26, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}
