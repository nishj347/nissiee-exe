import { useEffect, useState } from "react";

const KONAMI = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a",
];

export default function useKonamiCode() {
  const [unlocked, setUnlocked] = useState(false);

  useEffect(() => {
    let buffer = [];

    const handleKey = (e) => {
      buffer.push(e.key);
      buffer = buffer.slice(-KONAMI.length);
      if (buffer.join(",") === KONAMI.join(",")) {
        setUnlocked(true);
        buffer = [];
      }
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  return [unlocked, setUnlocked];
}
