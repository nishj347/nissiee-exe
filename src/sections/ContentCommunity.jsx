import Reveal from "../components/Reveal";
import { contentPlatforms } from "../data/content";

export default function ContentCommunity() {
  return (
    <section id="content" className="py-24 px-[4vw]">
      <Reveal>
        <div className="font-mono text-xs text-cyan tracking-[0.2em] uppercase mb-3">
          // content.create()
        </div>
        <h2 className="font-display text-[clamp(2rem,4vw,3rem)] font-bold tracking-tight leading-tight mb-2">
          Not everything
          <br />
          has to compile
        </h2>
        <p className="text-text-2 text-base max-w-xl">
          Code isn't the only thing I ship. I'm also active on social media —
          part personal builder-in-public account, part content creator for a
          community I care about.
        </p>
      </Reveal>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12 max-w-4xl">
        {contentPlatforms.map((platform, idx) => (
          <Reveal
            key={platform.title}
            delay={idx * 0.1}
            className="bg-gradient-to-br from-indigo/[0.07] to-cyan/[0.04] border border-indigo/25 rounded-2xl p-8 flex flex-col gap-4 transition-all hover:border-indigo/40 hover:-translate-y-1"
          >
            <div className="w-12 h-12 flex-shrink-0 bg-indigo/15 border border-indigo/30 rounded-xl flex items-center justify-center text-2xl">
              {platform.icon}
            </div>
            <div>
              <div className="font-mono text-[0.68rem] tracking-[0.15em] uppercase text-indigo-300 mb-1.5">
                {platform.eyebrow}
              </div>
              <div className="font-display text-xl font-semibold mb-2">
                {platform.title}
              </div>
              <p className="text-sm text-text-2 leading-relaxed mb-3">
                {platform.desc}
              </p>
            </div>
            <a
              href={platform.href}
              data-cursor-hover
              className="font-mono text-sm text-cyan no-underline border-b border-cyan/30 pb-px transition-colors hover:text-cyan-300 mt-auto self-start"
            >
              {platform.linkLabel}
            </a>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
