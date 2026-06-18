import { motion } from "framer-motion";

export default function Reveal({ children, className = "", delay = 0, as = "div" }) {
  const Component = motion[as] || motion.div;
  return (
    <Component
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.6, delay }}
      className={className}
    >
      {children}
    </Component>
  );
}
