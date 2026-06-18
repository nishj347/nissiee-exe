import { useEffect, useState } from "react";

const PHRASE = "sudo hire nissiee";

export default function useSudoHire() {
  const [triggered, setTriggered] = useState(false);

  useEffect(() => {
    let typed = "";

    const handleKey = (e) => {
      if (e.key.length === 1) {
        typed += e.key.toLowerCase();
        typed = typed.slice(-PHRASE.length);
        if (typed === PHRASE) {
          setTriggered(true);
          typed = "";
        }
      }
    };

    window.addEventListener("keypress", handleKey);
    return () => window.removeEventListener("keypress", handleKey);
  }, []);

  return [triggered, setTriggered];
}
