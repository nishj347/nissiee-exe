import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function SudoHireToast({ open, onClose }) {
  useEffect(() => {
    if (!open) return;
    const timeout = setTimeout(onClose, 5000);
    return () => clearTimeout(timeout);
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 20, opacity: 0 }}
          className="fixed bottom-8 right-8 bg-black border border-blue rounded-xl px-6 py-5 font-mono text-sm text-[#00ff41] z-[7000] max-w-[340px] shadow-[0_0_24px_rgba(59,130,246,0.25)]"
          role="status"
        >
          <div className="text-cyan mb-2">$ sudo hire nissiee</div>
          <div className="text-[#008f24] mb-1.5">
            [sudo] password for hiring_manager: ****
          </div>
          <div className="mb-1">✓ Verifying skills... done</div>
          <div className="mb-1">
            ✓ Checking shipping record... 2 projects found
          </div>
          <div className="mb-1">✓ Running vibe check... passed</div>
          <div className="text-blue mb-1">
            → RECOMMENDATION: HIRE IMMEDIATELY
          </div>
          <div className="text-text-3 text-[0.72rem] mt-2">
            // she might be debugging something rn tho
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
