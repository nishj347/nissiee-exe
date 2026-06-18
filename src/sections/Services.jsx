import Reveal from "../components/Reveal";
import { services } from "../data/content";

export default function Services() {
  return (
    <section id="services" className="py-24 px-[4vw]">
      <Reveal>
        <div className="font-mono text-xs text-cyan tracking-[0.2em] uppercase mb-3">
          // what.I.do()
        </div>
        <h2 className="font-display text-[clamp(2rem,4vw,3rem)] font-bold tracking-tight leading-tight mb-6">
          How I spend my
          <br />
          waking hours
        </h2>
      </Reveal>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
        {services.map((service, idx) => (
          <Reveal
            key={service.title}
            delay={idx * 0.08}
            className="bg-navy-2 border border-border rounded-2xl p-8 relative overflow-hidden transition-all hover:border-blue/30 hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(0,0,0,0.3),0_0_0_1px_rgba(59,130,246,0.1)]"
          >
            <div className="w-11 h-11 rounded-[10px] flex items-center justify-center text-xl mb-5 border border-blue/20 bg-gradient-to-br from-blue/20 to-indigo/20">
              {service.icon}
            </div>
            <div className="font-display text-lg font-semibold mb-2">
              {service.title}
            </div>
            <p className="text-sm text-text-2 leading-relaxed mb-3">
              {service.desc}
            </p>
            <div className="font-mono text-xs text-cyan border-l-2 border-cyan pl-3 opacity-80">
              "{service.quote}"
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
