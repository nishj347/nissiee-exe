import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { speechBubbles } from "../data/content";

export default function Avatar() {
  const wrapRef = useRef(null);
  const svgRef = useRef(null);
  const [eyeOffset, setEyeOffset] = useState({ x: 0, y: 0 });
  const [bubbleIdx, setBubbleIdx] = useState(null);

  useEffect(() => {
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (reducedMotion) return;

    const handleMove = (e) => {
      const wrap = wrapRef.current;
      if (!wrap) return;
      const rect = wrap.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const angle = Math.atan2(e.clientY - cy, e.clientX - cx);
      const dist = 3;
      setEyeOffset({ x: Math.cos(angle) * dist, y: Math.sin(angle) * dist });
    };

    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  useEffect(() => {
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (reducedMotion) return;

    let raf;
    let t = 0;
    const breathe = () => {
      t += 0.02;
      if (svgRef.current) {
        const scale = 1 + Math.sin(t) * 0.008;
        svgRef.current.style.transform = `scaleY(${scale})`;
      }
      raf = requestAnimationFrame(breathe);
    };
    raf = requestAnimationFrame(breathe);
    return () => cancelAnimationFrame(raf);
  }, []);

  useEffect(() => {
    let timeout;
    let idx = 0;
    const cycle = () => {
      setBubbleIdx(idx % speechBubbles.length);
      idx += 1;
      timeout = setTimeout(() => {
        setBubbleIdx(null);
        timeout = setTimeout(cycle, 1500 + Math.random() * 1500);
      }, 3500);
    };
    timeout = setTimeout(cycle, 3000);
    return () => clearTimeout(timeout);
  }, []);

  const ex = eyeOffset.x;
  const ey = eyeOffset.y;

  return (
    <div ref={wrapRef} className="relative w-[220px] h-[280px]" data-cursor-hover>
      <div className="w-full h-full rounded-[120px_120px_100px_100px] bg-gradient-to-br from-slate-900 via-slate-950 to-indigo-950 border border-border-2 relative overflow-hidden shadow-[0_0_40px_rgba(99,102,241,0.15),0_0_80px_rgba(59,130,246,0.1)]">
        <svg
          ref={svgRef}
          viewBox="0 0 220 280"
          className="w-full h-full block"
          role="img"
          aria-label="Illustrated avatar of a developer at a laptop, with eyes that follow the cursor"
        >
          <defs>
            <radialGradient id="skinGrad" cx="50%" cy="40%" r="50%">
              <stop offset="0%" stopColor="#f0c898" />
              <stop offset="100%" stopColor="#d4976a" />
            </radialGradient>
            <radialGradient id="bgGrad" cx="50%" cy="100%" r="80%">
              <stop offset="0%" stopColor="#1e1b4b" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#0f172a" stopOpacity="0" />
            </radialGradient>
          </defs>
          <rect width="220" height="280" fill="url(#bgGrad)" />
          <text x="10" y="30" fontFamily="monospace" fontSize="8" fill="#1e3a5f" opacity="0.5">
            &lt;/&gt; building...
          </text>
          <text x="150" y="50" fontFamily="monospace" fontSize="7" fill="#1e3a5f" opacity="0.4">
            npm run dev
          </text>
          <text x="20" y="250" fontFamily="monospace" fontSize="7" fill="#1e3a5f" opacity="0.4">
            git push origin main
          </text>

          <ellipse cx="110" cy="260" rx="70" ry="50" fill="#1e293b" />
          <rect x="60" y="210" width="100" height="70" rx="8" fill="#1e293b" />

          <rect x="97" y="175" width="26" height="40" rx="6" fill="url(#skinGrad)" />
          <ellipse cx="110" cy="155" rx="52" ry="58" fill="url(#skinGrad)" />

          <ellipse cx="110" cy="108" rx="55" ry="30" fill="#1a0a05" />
          <ellipse cx="58" cy="130" rx="12" ry="25" fill="#1a0a05" />
          <ellipse cx="162" cy="130" rx="12" ry="25" fill="#1a0a05" />
          <rect x="55" y="105" width="110" height="20" rx="8" fill="#1a0a05" />

          <circle cx="58" cy="158" r="5" fill="#334155" stroke="#475569" strokeWidth="1" />
          <circle cx="162" cy="158" r="5" fill="#334155" stroke="#475569" strokeWidth="1" />

          <ellipse cx="88" cy="155" rx="10" ry="11" fill="#fff" />
          <circle cx={88 + ex} cy={155 + ey} r="7" fill="#1a0a05" />
          <circle cx={91 + ex} cy={152 + ey} r="2" fill="#fff" />

          <ellipse cx="132" cy="155" rx="10" ry="11" fill="#fff" />
          <circle cx={132 + ex} cy={155 + ey} r="7" fill="#1a0a05" />
          <circle cx={135 + ex} cy={152 + ey} r="2" fill="#fff" />

          <path d="M78 141 Q88 136 98 141" stroke="#1a0a05" strokeWidth="2.5" fill="none" strokeLinecap="round" />
          <path d="M122 141 Q132 136 142 141" stroke="#1a0a05" strokeWidth="2.5" fill="none" strokeLinecap="round" />

          <path d="M108 160 Q105 175 110 178 Q115 175 112 160" stroke="#c4855a" strokeWidth="1.5" fill="none" strokeLinecap="round" />
          <path d="M97 192 Q110 200 123 192" stroke="#c4855a" strokeWidth="2" fill="none" strokeLinecap="round" />

          <text x="110" y="233" textAnchor="middle" fontFamily="monospace" fontSize="9" fill="#3b82f6" fontWeight="bold">
            {"{ code }"}
          </text>

          <rect x="45" y="255" width="130" height="8" rx="3" fill="#334155" opacity="0.8" />
          <rect x="50" y="240" width="120" height="18" rx="3" fill="#1e293b" stroke="#334155" strokeWidth="1" />
        </svg>
        <div
          className="absolute -bottom-5 left-1/2 -translate-x-1/2 w-40 h-10 rounded-full blur-md"
          style={{ background: "radial-gradient(ellipse, rgba(59,130,246,0.4), transparent)" }}
          aria-hidden="true"
        />
      </div>

      <AnimatePresence>
        {bubbleIdx !== null && (
          <motion.div
            initial={{ opacity: 0, y: 5, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute -top-12 left-1/2 -translate-x-1/2 bg-navy-3 border border-border-2 rounded-xl px-3.5 py-2 font-mono text-xs text-text-2 max-w-[220px] text-center"
            role="status"
          >
            {speechBubbles[bubbleIdx]}
            <div
              className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-0 h-0 border-4 border-transparent"
              style={{ borderTopColor: "var(--color-border-2)" }}
              aria-hidden="true"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
