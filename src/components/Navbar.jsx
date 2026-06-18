import { useEffect, useState } from "react";

const links = [
  { href: "#about", label: "about" },
  { href: "#services", label: "services" },
  { href: "#stack", label: "stack" },
  { href: "#projects", label: "projects" },
  { href: "#content", label: "content" },
  { href: "#contact", label: "contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-100 px-6 sm:px-10 py-4 flex items-center justify-between backdrop-blur-md transition-colors duration-300 border-b ${
        scrolled
          ? "bg-navy/80 border-border"
          : "border-transparent bg-transparent"
      }`}
    >
      <a
        href="#hero"
        data-cursor-hover
        className="font-mono text-sm tracking-wide text-cyan no-underline"
      >
        &gt; <span className="text-blue">nissiee</span>.exe
      </a>
      <ul className="hidden sm:flex gap-8 list-none m-0 p-0">
        {links.map((link) => (
          <li key={link.href}>
            <a
              href={link.href}
              data-cursor-hover
              className="font-mono text-sm tracking-wide text-text-2 no-underline hover:text-blue transition-colors"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
