import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const items = [
  { label: "status", value: "online · chaotic" },
  { label: "coffee_consumed", value: "dangerously low" },
  { label: "prod_fires", value: "1 (contained)" },
  { label: "localhost_trust_level", value: "100%" },
  { label: "prod_trust_level", value: "69%" },
  { label: "current_mood", value: "shipping.gif" },
];

export default function EasterEgg({ open, onClose }) {
  const [bugs, setBugs] = useState(0);
  const [lines, setLines] = useState(0);

  useEffect(() => {
    if (open) {
      setBugs(Math.floor(Math.random() * 12) + 1);
      setLines(Math.floor(Math.random() * 400) + 100);
    }
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const handleKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[8000] bg-black/95 flex items-center justify-center font-mono px-4"
          role="dialog"
          aria-label="Secret developer dashboard"
          aria-modal="true"
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-navy border border-blue rounded-2xl p-10 max-w-[480px] w-full shadow-[0_0_40px_rgba(59,130,246,0.3)]"
          >
            <div className="text-base text-blue mb-6 tracking-wide">
              // secret dev dashboard
            </div>
            {items.map((item) => (
              <div
                key={item.label}
                className="flex justify-between py-2.5 border-b border-border text-sm text-text-2"
              >
                <span>{item.label}</span>
                <span className="text-cyan">{item.value}</span>
              </div>
            ))}
            <div className="flex justify-between py-2.5 border-b border-border text-sm text-text-2">
              <span>bugs_squashed_today</span>
              <span className="text-cyan">{bugs}</span>
            </div>
            <div className="flex justify-between py-2.5 border-b border-border text-sm text-text-2">
              <span>lines_written_today</span>
              <span className="text-cyan">{lines}</span>
            </div>
            <button
              onClick={onClose}
              data-cursor-hover
              className="mt-6 w-full bg-transparent border border-border-2 text-text-2 py-2.5 rounded-md font-mono text-sm transition-colors hover:border-blue hover:text-blue"
            >
              // close --force
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
