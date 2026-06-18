import { useState } from "react";
import Reveal from "../components/Reveal";
import { stackCategories } from "../data/content";

const colorMap = {
  blue: {
    border: "border-blue/25",
    hoverBorder: "hover:border-blue",
    text: "text-blue",
    bg: "bg-blue/10",
  },
  cyan: {
    border: "border-cyan/25",
    hoverBorder: "hover:border-cyan",
    text: "text-cyan",
    bg: "bg-cyan/10",
  },
  indigo: {
    border: "border-indigo/25",
    hoverBorder: "hover:border-indigo",
    text: "text-indigo-300",
    bg: "bg-indigo/10",
  },
};

function initials(name) {
  const clean = name.replace(/[^a-zA-Z0-9+]/g, "");
  if (clean.length <= 2) return clean.toUpperCase();
  // Keep meaningful short codes for known tools
  const known = {
    "C++": "C++",
    JavaScript: "JS",
    TypeScript: "TS",
    PostgreSQL: "PG",
    MongoDB: "Mo",
    Postman: "Po",
  };
  if (known[name]) return known[name];
  return clean.slice(0, 2);
}

function SkillBlock({ name, tip, color }) {
  const [show, setShow] = useState(false);
  const c = colorMap[color] || colorMap.blue;

  return (
    <div
      className={`relative flex items-center gap-2.5 px-3 py-2.5 bg-navy border ${c.border} ${c.hoverBorder} rounded-xl cursor-help transition-all hover:-translate-y-0.5`}
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
      onFocus={() => setShow(true)}
      onBlur={() => setShow(false)}
      tabIndex={0}
      data-cursor-hover
    >
      <span
        className={`w-7 h-7 flex-shrink-0 rounded-lg flex items-center justify-center font-mono text-[0.65rem] font-bold ${c.bg} ${c.text}`}
      >
        {initials(name)}
      </span>
      <span className="text-sm text-text-2 font-medium whitespace-nowrap">
        {name}
      </span>

      {show && (
        <span className="absolute bottom-[calc(100%+8px)] left-1/2 -translate-x-1/2 bg-navy-3 border border-border-2 rounded-md px-3 py-1.5 text-xs font-mono text-cyan whitespace-normal max-w-[200px] w-max z-10">
          {tip}
        </span>
      )}
    </div>
  );
}

export default function Stack() {
  return (
    <section
      id="stack"
      className="py-24 px-[4vw] bg-navy-2 border-t border-b border-border"
    >
      <Reveal>
        <div className="font-mono text-xs text-cyan tracking-[0.2em] uppercase mb-3">
          // tech.stack
        </div>
        <h2 className="font-display text-[clamp(2rem,4vw,3rem)] font-bold tracking-tight leading-tight mb-2">
          Tools of the trade
        </h2>
        <p className="text-text-2 text-base">Hover a block for the honest review.</p>
      </Reveal>

      <div className="mt-12 flex flex-col gap-8">
        {stackCategories.map((category, idx) => (
          <Reveal key={category.label} delay={idx * 0.05}>
            <div className="flex items-center gap-3 mb-3">
              <h4 className="font-mono text-xs text-cyan tracking-[0.15em] uppercase">
                {category.label}
              </h4>
              <div className="flex-1 h-px bg-border" />
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2.5">
              {category.items.map((item) => (
                <SkillBlock
                  key={item.name}
                  name={item.name}
                  tip={item.tip}
                  color={category.color}
                />
              ))}
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
