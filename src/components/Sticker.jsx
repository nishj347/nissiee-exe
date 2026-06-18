import { motion } from "framer-motion";

const STICKERS = {
  sparkle: (
    <svg viewBox="0 0 40 40" fill="none">
      <path
        d="M20 4 L23 16 L36 20 L23 24 L20 36 L17 24 L4 20 L17 16 Z"
        fill="currentColor"
      />
    </svg>
  ),
  coffee: (
    <svg viewBox="0 0 40 40" fill="none">
      <path
        d="M9 16h20v9a8 8 0 0 1-8 8h-4a8 8 0 0 1-8-8v-9Z"
        stroke="currentColor"
        strokeWidth="2.2"
        fill="none"
      />
      <path
        d="M29 18h3a4 4 0 0 1 0 8h-3"
        stroke="currentColor"
        strokeWidth="2.2"
        fill="none"
      />
      <path
        d="M14 9c0 2-2 2-2 4M20 9c0 2-2 2-2 4M26 9c0 2-2 2-2 4"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  ),
  bolt: (
    <svg viewBox="0 0 40 40" fill="none">
      <path d="M22 4 L10 22 H18 L16 36 L30 16 H22 L24 4 Z" fill="currentColor" />
    </svg>
  ),
  heart: (
    <svg viewBox="0 0 40 40" fill="none">
      <path
        d="M20 33c-1-1-15-9.5-15-19.5C5 8 8.5 5 13 5c3 0 5.5 2 7 4.5C21.5 7 24 5 27 5c4.5 0 8 3 8 8.5C35 23.5 21 32 20 33Z"
        fill="currentColor"
      />
    </svg>
  ),
  star: (
    <svg viewBox="0 0 40 40" fill="none">
      <path
        d="M20 4l4.7 11.2L36 17l-9 8 2.4 12L20 31l-9.4 6L13 25l-9-8 11.3-1.8L20 4Z"
        fill="currentColor"
      />
    </svg>
  ),
};

export default function Sticker({
  type = "sparkle",
  className = "",
  color = "text-cyan",
  size = 28,
  delay = 0,
  rotate = 0,
}) {
  return (
    <motion.div
      aria-hidden="true"
      className={`absolute pointer-events-none ${color} ${className} hidden sm:block`}
      style={{ width: size, height: size }}
      initial={{ opacity: 0, y: 6, rotate: rotate - 6 }}
      animate={{
        opacity: 0.85,
        y: [0, -6, 0],
        rotate: [rotate - 4, rotate + 4, rotate - 4],
      }}
      transition={{
        opacity: { duration: 0.6, delay },
        y: { duration: 4 + delay, repeat: Infinity, ease: "easeInOut" },
        rotate: { duration: 5 + delay, repeat: Infinity, ease: "easeInOut" },
      }}
    >
      {STICKERS[type] || STICKERS.sparkle}
    </motion.div>
  );
}
