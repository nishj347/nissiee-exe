import { useState } from "react";
import Reveal from "../components/Reveal";
import Sticker from "../components/Sticker";
import { statusItems } from "../data/content";

function Tooltip({ children, tip }) {
  const [show, setShow] = useState(false);
  return (
    <span
      className="relative text-blue cursor-help border-b border-dashed border-blue/40"
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
      onFocus={() => setShow(true)}
      onBlur={() => setShow(false)}
      tabIndex={0}
    >
      {children}
      {show && (
        <span className="absolute bottom-[120%] left-1/2 -translate-x-1/2 bg-navy-3 border border-border-2 rounded-md px-3 py-1.5 text-xs font-mono text-cyan whitespace-nowrap z-10">
          {tip}
        </span>
      )}
    </span>
  );
}

export default function About() {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <Sticker
        type="sparkle"
        color="text-cyan"
        size={26}
        className="top-10 left-[6vw]"
        delay={0}
        rotate={-8}
      />
      <Sticker
        type="coffee"
        color="text-amber-400"
        size={32}
        className="top-6 right-[8vw]"
        delay={0.6}
        rotate={6}
      />
      <Sticker
        type="bolt"
        color="text-blue"
        size={28}
        className="bottom-16 left-[10vw]"
        delay={1.1}
        rotate={-10}
      />
      <Sticker
        type="star"
        color="text-indigo-400"
        size={22}
        className="top-1/2 right-[4vw]"
        delay={1.6}
        rotate={12}
      />
      <Sticker
        type="heart"
        color="text-pink-400"
        size={20}
        className="bottom-8 right-[14vw]"
        delay={0.3}
        rotate={-6}
      />

      <Reveal className="px-[4vw] mb-12">
        <div className="font-mono text-xs text-cyan tracking-[0.2em] uppercase mb-3">
          // about.me
        </div>
        <h2 className="font-display text-[clamp(2rem,4vw,3rem)] font-bold tracking-tight leading-tight">
          The human behind
          <br />
          the commits
        </h2>
      </Reveal>

      <div className="flex flex-col sm:flex-row overflow-x-visible sm:overflow-x-auto gap-6 sm:gap-0 px-[4vw] pb-8 sm:snap-x sm:snap-mandatory no-scrollbar">
        <Reveal
          className="w-full sm:min-w-[min(80vw,600px)] sm:w-auto snap-start p-8 sm:p-12 bg-navy-2 border border-border rounded-2xl sm:mr-6 relative overflow-hidden"
        >
          <div
            className="absolute top-0 left-0 w-full h-0.5"
            style={{
              background:
                "linear-gradient(90deg, var(--color-blue), var(--color-cyan), transparent)",
            }}
            aria-hidden="true"
          />
          <p className="text-lg leading-loose">
            I'm <strong className="text-slate-200">Nishpriya</strong>.
            <br />
            <br />
            A product-minded engineer who enjoys turning vague ideas into
            useful products.
            <br />
            <br />
            Currently pursuing Computer Science while building projects that
            teach me more than any classroom ever could.
            <br />
            <br />I care about the <em className="text-cyan">why</em> behind
            every feature — not just the implementation.
            <br />
            <br />
            Fueled by <Tooltip tip="critical infrastructure ☕">coffee</Tooltip>{" "}
            and the confidence of it worked on {" "}
            <Tooltip tip="the only environment I fully trust">my machine</Tooltip>.
          </p>
        </Reveal>

        <Reveal
          delay={0.1}
          className="w-full sm:min-w-[min(80vw,520px)] sm:w-auto snap-start p-8 sm:p-12 bg-navy-2 border border-border rounded-2xl sm:mr-6 relative overflow-hidden"
        >
          <div
            className="absolute top-0 left-0 w-full h-0.5"
            style={{
              background:
                "linear-gradient(90deg, var(--color-blue), var(--color-cyan), transparent)",
            }}
            aria-hidden="true"
          />
          <div className="bg-black border border-border-2 rounded-xl overflow-hidden font-mono">
            <div className="bg-[#1a1a2e] px-4 py-2.5 flex items-center gap-2 border-b border-border">
              <span className="w-3 h-3 rounded-full bg-[#ff5f57]" />
              <span className="w-3 h-3 rounded-full bg-[#febc2e]" />
              <span className="w-3 h-3 rounded-full bg-[#28c840]" />
              <span className="text-xs text-slate-600 ml-2">
                nissiee.js
              </span>
            </div>
            <div className="p-5 text-[0.82rem] leading-loose text-text-2">
              <div className="text-slate-600">// nissiee.getProfile()</div>
              <div>{"{"}</div>
              <div>
                &nbsp;&nbsp;<span className="text-blue">buildsFor</span>:{" "}
                <span className="text-cyan-200">"users"</span>,
              </div>
              <div>
                &nbsp;&nbsp;<span className="text-blue">shipsFast</span>:{" "}
                <span className="text-indigo-400">true</span>,
              </div>
              <div>
                &nbsp;&nbsp;
                <span className="text-blue">favouriteBug</span>:{" "}
                <span className="text-cyan-200">"works on localhost"</span>,
              </div>
              <div>
                &nbsp;&nbsp;
                <span className="text-blue">currentlyLearning</span>:{" "}
                <span className="text-cyan-200">"System Design"</span>,
              </div>
              <div>
                &nbsp;&nbsp;
                <span className="text-blue">sleepSchedule</span>:{" "}
                <span className="text-indigo-400">undefined</span>,
              </div>
              <div>
                &nbsp;&nbsp;<span className="text-blue">mindset</span>:{" "}
                <span className="text-cyan-200">
                  "ship first, optimize later"
                </span>
                ,
              </div>
              <div>
                &nbsp;&nbsp;
                <span className="text-blue">cssRelationship</span>:{" "}
                <span className="text-cyan-200">"complicated"</span>
              </div>
              <div>{"}"}</div>
            </div>
          </div>
        </Reveal>

        <Reveal
          delay={0.2}
          className="w-full sm:min-w-[min(80vw,400px)] sm:w-auto snap-start p-8 sm:p-12 bg-navy-2 border border-border rounded-2xl sm:mr-6 relative overflow-hidden"
        >
          <div
            className="absolute top-0 left-0 w-full h-0.5"
            style={{
              background:
                "linear-gradient(90deg, var(--color-blue), var(--color-cyan), transparent)",
            }}
            aria-hidden="true"
          />
          <div className="font-mono text-xs text-cyan tracking-[0.2em] uppercase mb-5">
            Current status
          </div>
          <div className="flex flex-col gap-3">
            {statusItems.map((item, idx) => (
              <div key={idx} className="flex items-center gap-3 text-[0.95rem]">
                <span className="w-6 text-center">{item.emoji}</span>
                <span>
                  {item.highlight ? (
                    <>
                      {item.text.split(item.highlight)[0]}
                      <span className="text-cyan">{item.highlight}</span>
                      {item.text.split(item.highlight)[1]}
                    </>
                  ) : (
                    item.text
                  )}
                </span>
              </div>
            ))}
            <div className="flex items-center gap-3">
              <span className="w-6 text-center">☕</span>
              <div className="flex-1">
                <div className="mb-1">
                  Coffee level: <span className="text-blue">13%</span>
                </div>
                <div className="h-1 bg-border rounded-full overflow-hidden">
                  <div
                    className="h-full rounded-full"
                    style={{
                      width: "13%",
                      background:
                        "linear-gradient(90deg, var(--color-blue), var(--color-cyan))",
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>

      <div className="text-center mt-2 hidden sm:block">
        <span className="font-mono text-xs text-text-3">
          ← drag to explore →
        </span>
      </div>
    </section>
  );
}
