import { tickerWords } from "../data/content";

export default function Ticker() {
  const doubled = [...tickerWords, ...tickerWords];

  return (
    <div
      className="h-20 sm:h-[340px] overflow-hidden relative"
      aria-hidden="true"
    >
      <div className="ticker-track flex sm:flex-col flex-row">
        {doubled.map((word, idx) => (
          <span key={idx} className="ticker-item">
            {word}
          </span>
        ))}
      </div>
    </div>
  );
}
