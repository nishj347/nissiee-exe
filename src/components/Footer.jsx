import { useEffect, useState } from "react";
import { commitMessages } from "../data/content";

export default function Footer() {
  const [commit, setCommit] = useState(commitMessages[3]);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCommit(
          commitMessages[Math.floor(Math.random() * commitMessages.length)]
        );
        setFade(true);
      }, 300);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="px-[4vw] py-8 border-t border-border flex flex-wrap items-center justify-between gap-4">
      <div className="font-mono text-xs text-text-3">
        Built with React, caffeine, and questionable sleep decisions.
        <br />
        <span className="text-[0.68rem]">
          © {new Date().getFullYear()} Nishpriya Jain · nissiee
        </span>
      </div>
      <div className="font-mono text-[0.72rem] text-text-3 flex items-center gap-2">
        <span>last commit:</span>
        <span
          className="bg-indigo/15 border border-indigo/20 rounded px-2 py-0.5 text-indigo-300 text-xs transition-opacity duration-300"
          style={{ opacity: fade ? 1 : 0 }}
        >
          {commit}
        </span>
      </div>
    </footer>
  );
}
