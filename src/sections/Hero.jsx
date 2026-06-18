import { motion } from "framer-motion";
import Avatar from "../components/Avatar";
import Ticker from "../components/Ticker";
import { roles } from "../data/content";

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen grid md:grid-cols-[1.3fr_auto_1fr] grid-cols-1 items-center pt-28 pb-16 px-[4vw] gap-8 relative overflow-hidden"
    >
      <div
        className="pointer-events-none absolute top-[30%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(59,130,246,0.07) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-[620px] text-center md:text-left mx-auto md:mx-0 relative"
      >
        <div className="font-mono text-sm text-cyan tracking-wide mb-3 flex items-center gap-2 justify-center md:justify-start flex-wrap">
          <span>&gt; hello, world 🤙</span>
          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-300 text-[0.65rem] font-mono">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            open to work
          </span>
        </div>

        <div className="relative">
          <h1
            aria-hidden="true"
            className="font-display absolute top-0 left-0 select-none pointer-events-none font-bold leading-[0.95] tracking-tight text-transparent whitespace-nowrap hidden md:block"
            style={{
              fontSize: "clamp(3.4rem, 9vw, 7.5rem)",
              WebkitTextStroke: "1px rgba(59,130,246,0.12)",
            }}
          >
            NISHPRIYA
          </h1>
          <h1
            className="font-display relative font-bold leading-[0.95] tracking-tight mb-3 bg-gradient-to-br from-slate-100 via-blue to-cyan bg-clip-text text-transparent whitespace-nowrap"
            style={{ fontSize: "clamp(3rem, 8vw, 6.5rem)" }}
          >
            Nishpriya
          </h1>
        </div>
        <h2
          className="font-display font-bold leading-[0.95] tracking-tight mb-4 text-slate-300"
          style={{ fontSize: "clamp(2.2rem, 6vw, 4.5rem)" }}
        >
          Jain<span className="text-blue">.</span>
        </h2>

        <div className="font-display text-2xl font-medium text-blue h-8 overflow-hidden mb-5">
          <div className="role-cycle">
            {[...roles, roles[0]].map((role, idx) => (
              <span
                key={idx}
                className="h-8 flex items-center justify-center md:justify-start"
              >
                {role}
              </span>
            ))}
          </div>
        </div>

        <p className="text-base text-text-2 leading-relaxed mb-8 max-w-[460px] mx-auto md:mx-0">
          I build products that solve real problems, obsess over user
          experience, and occasionally spend hours debugging a missing
          semicolon.
        </p>

        <div className="flex gap-4 flex-wrap justify-center md:justify-start">
          <a
            href="#projects"
            data-cursor-hover
            className="inline-flex items-center gap-1.5 px-7 py-3 bg-blue text-white rounded-md text-sm font-medium no-underline transition-all hover:bg-blue-600 hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(59,130,246,0.35)]"
          >
            View Projects →
          </a>
          <a
            href="#"
            data-cursor-hover
            className="inline-flex items-center gap-1.5 px-7 py-3 bg-transparent text-slate-200 border border-border-2 rounded-md text-sm font-medium no-underline transition-all hover:border-blue hover:text-blue hover:-translate-y-0.5"
          >
            Resume ↗
          </a>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.15 }}
        className="hidden md:flex flex-col items-center gap-4 relative"
      >
        <Avatar />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="flex justify-center md:justify-end items-center"
      >
        <Ticker />
      </motion.div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex-col items-center gap-2 hidden md:flex">
        <span className="font-mono text-xs text-text-3 tracking-wide">
          scroll
        </span>
        <div className="w-px h-10 bg-gradient-to-b from-blue to-transparent" />
      </div>
    </section>
  );
}
