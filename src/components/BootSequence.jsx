import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { bootLines } from "../data/content";

export default function BootSequence({ onComplete }) {
  const [visible, setVisible] = useState(false);
  const [lines, setLines] = useState([]);
  const [showPrompt, setShowPrompt] = useState(false);
  const [exiting, setExiting] = useState(false);
  const containerRef = useRef(null);
  const completedRef = useRef(false);

  useEffect(() => {
    const alreadyBooted = sessionStorage.getItem("nissiee_booted");
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (alreadyBooted) {
      onComplete();
      return;
    }

    if (reducedMotion) {
      sessionStorage.setItem("nissiee_booted", "1");
      onComplete();
      return;
    }

    setVisible(true);

    let lineIndex = 0;
    let charTimeout;

    const typeLine = (lineObj, cb) => {
      let text = "";
      let i = 0;
      const tick = () => {
        if (i < lineObj.text.length) {
          text += lineObj.text[i];
          i += 1;
          setLines((prev) => {
            const next = [...prev];
            next[lineIndex] = { ...lineObj, text };
            return next;
          });
          charTimeout = setTimeout(tick, 18 + Math.random() * 35);
        } else {
          cb();
        }
      };
      tick();
    };

    const runNext = () => {
      if (lineIndex >= bootLines.length) {
        setShowPrompt(true);
        return;
      }
      const lineObj = bootLines[lineIndex];
      setLines((prev) => [...prev, { ...lineObj, text: "" }]);
      typeLine(lineObj, () => {
        lineIndex += 1;
        setTimeout(runNext, 150);
      });
    };

    runNext();

    return () => clearTimeout(charTimeout);
  }, [onComplete]);

  const finish = () => {
    if (completedRef.current) return;
    completedRef.current = true;
    sessionStorage.setItem("nissiee_booted", "1");
    setExiting(true);
    setTimeout(onComplete, 650);
  };

  useEffect(() => {
    if (!showPrompt) return;
    const handleKey = (e) => {
      if (e.key === "Enter") finish();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [showPrompt]);

  if (!visible) return null;

  return (
    <AnimatePresence>
      {!exiting && (
        <motion.div
          ref={containerRef}
          onClick={() => showPrompt && finish()}
          exit={{
            opacity: 0,
            filter: "brightness(3) blur(2px)",
            transition: { duration: 0.6 },
          }}
          className="fixed inset-0 z-[9000] bg-black overflow-hidden flex flex-col items-start justify-center px-[10vw] cursor-pointer"
          style={{ fontFamily: "var(--font-mono)" }}
        >
          <div
            className="pointer-events-none absolute inset-0 opacity-40"
            style={{
              background:
                "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,255,65,0.03) 2px, rgba(0,255,65,0.03) 4px)",
            }}
            aria-hidden="true"
          />
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse at center, transparent 60%, rgba(0,0,0,0.7))",
            }}
            aria-hidden="true"
          />

          <div className="relative z-10 max-w-2xl">
            {lines.map((line, idx) => (
              <div
                key={idx}
                style={{
                  color: line.color,
                  fontSize: "clamp(11px, 1.4vw, 15px)",
                }}
                className="my-1"
              >
                {line.text}
                {idx === lines.length - 1 && !showPrompt && (
                  <span className="inline-block w-2.5 h-[1.2em] bg-current ml-0.5 align-bottom animate-pulse" />
                )}
              </div>
            ))}

            {showPrompt && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="mt-6 text-[#008f24]"
                style={{ fontSize: "clamp(10px, 1.2vw, 13px)" }}
              >
                Press{" "}
                <span className="border border-[#00ff41] px-1.5 py-0.5 rounded text-[#00ff41]">
                  Enter
                </span>{" "}
                or click anywhere to continue
              </motion.div>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
