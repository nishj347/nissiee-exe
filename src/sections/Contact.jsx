import { useState } from "react";
import emailjs from "@emailjs/browser";
import Reveal from "../components/Reveal";
import { socials } from "../data/content";

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle");

  const handleChange = (field) => (e) =>
    setForm((prev) => ({ ...prev, [field]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;

    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
      console.warn(
        "EmailJS env vars are not set. Add VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_TEMPLATE_ID and VITE_EMAILJS_PUBLIC_KEY to your .env file."
      );
      setStatus("sent");
      return;
    }

    setStatus("sending");
    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          from_name: form.name,
          from_email: form.email,
          message: form.message,
        },
        PUBLIC_KEY
      );
      setStatus("sent");
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="py-24 px-[4vw] relative overflow-hidden">
      <div
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px]"
        style={{
          background:
            "radial-gradient(ellipse, rgba(59,130,246,0.05), transparent 70%)",
        }}
        aria-hidden="true"
      />

      <Reveal className="text-center">
        <div className="font-mono text-xs text-cyan tracking-[0.2em] uppercase mb-3 flex justify-center">
          // contact.init()
        </div>
        <h2 className="font-display text-[clamp(2.5rem,5vw,4rem)] font-bold tracking-tight leading-tight mb-3">
          Let's Build Something
          <br />
          <span className="text-blue">Useful.</span>
        </h2>
        <p className="text-text-2 text-base mb-12">
          Or just say hi. Both are equally welcome.
        </p>
      </Reveal>

      <Reveal delay={0.1} className="max-w-[640px] mx-auto">
        <form
          onSubmit={handleSubmit}
          className="bg-black border border-border-2 rounded-2xl overflow-hidden"
        >
          <div className="bg-[#1a1a2e] px-4 py-2.5 flex items-center gap-2 border-b border-border">
            <span className="w-3 h-3 rounded-full bg-[#ff5f57]" />
            <span className="w-3 h-3 rounded-full bg-[#febc2e]" />
            <span className="w-3 h-3 rounded-full bg-[#28c840]" />
            <span className="text-xs text-slate-600 ml-2 font-mono">
              send_message.sh
            </span>
          </div>

          <label className="flex items-start px-6 py-4 border-b border-white/5 gap-3">
            <span className="font-mono text-sm text-[#008f24] whitespace-nowrap pt-px">
              name:~$
            </span>
            <span className="sr-only">Your name</span>
            <input
              type="text"
              required
              value={form.name}
              onChange={handleChange("name")}
              placeholder="your name here"
              autoComplete="off"
              className="bg-transparent border-none outline-none text-[#00ff41] font-mono text-sm flex-1 placeholder:text-[#1a4d1a]"
            />
          </label>

          <label className="flex items-start px-6 py-4 border-b border-white/5 gap-3">
            <span className="font-mono text-sm text-[#008f24] whitespace-nowrap pt-px">
              email:~$
            </span>
            <span className="sr-only">Your email</span>
            <input
              type="email"
              required
              value={form.email}
              onChange={handleChange("email")}
              placeholder="your@email.com"
              autoComplete="off"
              className="bg-transparent border-none outline-none text-[#00ff41] font-mono text-sm flex-1 placeholder:text-[#1a4d1a]"
            />
          </label>

          <label className="flex items-start px-6 py-4 border-b border-white/5 gap-3">
            <span className="font-mono text-sm text-[#008f24] whitespace-nowrap pt-px">
              msg:~$
            </span>
            <span className="sr-only">Your message</span>
            <textarea
              required
              rows={4}
              value={form.message}
              onChange={handleChange("message")}
              placeholder="say something... or don't, no pressure."
              className="bg-transparent border-none outline-none text-[#00ff41] font-mono text-sm flex-1 resize-none leading-relaxed placeholder:text-[#1a4d1a]"
            />
          </label>

          <div className="px-6 py-4 flex justify-end">
            <button
              type="submit"
              data-cursor-hover
              disabled={status === "sending"}
              className="bg-blue text-white border-none rounded-md px-6 py-2.5 font-mono text-sm transition-colors hover:bg-blue-600 disabled:opacity-60"
            >
              {status === "sending" ? "./sending..." : "./send_message.sh ↗"}
            </button>
          </div>
        </form>

        {status === "sent" && (
          <div className="bg-black border border-[#008f24] rounded-xl p-6 font-mono text-sm text-[#00ff41] leading-loose mt-6">
            <div>&gt; Message received.</div>
            <div>&gt; Added to queue.</div>
            <div>&gt; Nishpriya will reply shortly.</div>
            <div className="text-slate-600">
              &gt; Unless currently fighting a production bug.
            </div>
            <div className="text-[#008f24] mt-2">✓ Status: delivered</div>
          </div>
        )}

        {status === "error" && (
          <div className="bg-black border border-red-700 rounded-xl p-6 font-mono text-sm text-red-400 leading-loose mt-6">
            <div>&gt; Message failed to send.</div>
            <div>&gt; Try again, or reach out directly via email.</div>
          </div>
        )}

        <div className="flex justify-center gap-6 mt-10">
          {socials.map((social) => (
            <a
              key={social.label}
              href={social.href}
              data-cursor-hover
              title={social.label}
              target={social.href.startsWith("http") ? "_blank" : undefined}
              rel={
                social.href.startsWith("http")
                  ? "noopener noreferrer"
                  : undefined
              }
              className="w-11 h-11 border border-border-2 rounded-[10px] flex items-center justify-center text-text-2 no-underline text-base transition-all hover:border-blue hover:text-blue hover:-translate-y-0.5"
            >
              {social.short}
            </a>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
