import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Reveal from "../components/Reveal";
import { projects } from "../data/content";

function ProjectCard({ project, delay }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <Reveal
      delay={delay}
      className="bg-navy-2 border border-border rounded-2xl overflow-hidden transition-all hover:border-blue/30 hover:-translate-y-1.5 hover:shadow-[0_24px_48px_rgba(0,0,0,0.4)]"
    >
      <div className="p-8 pb-5 border-b border-border">
        <div className="font-mono text-xs text-text-3 tracking-wide mb-2">
          {project.num} · {project.category}
        </div>
        <div className="font-display text-2xl font-bold mb-1.5">
          {project.title}
        </div>
        <div className="text-sm text-text-2">{project.subtitle}</div>
      </div>
      <div className="p-8 pt-5">
        <p className="text-sm text-text-2 leading-relaxed mb-4">
          {project.story}
        </p>
        <div className="font-mono text-[0.7rem] text-text-3 tracking-wide uppercase mb-1.5">
          Key challenge
        </div>
        <div className="text-sm text-cyan italic mb-4 px-3.5 py-2.5 bg-cyan/5 border-l-2 border-cyan rounded-r">
          "{project.challenge}"
        </div>

        <AnimatePresence initial={false}>
          {expanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <div className="font-mono text-[0.7rem] text-text-3 tracking-wide uppercase mb-1.5">
                What I learned
              </div>
              <p className="text-sm text-text-2 leading-relaxed mb-4">
                {project.learnings}
              </p>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="flex flex-wrap gap-1.5 mb-5">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-2.5 py-1 bg-indigo/10 border border-indigo/20 rounded font-mono text-xs text-indigo-300"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="flex gap-3">
          <button
            onClick={() => setExpanded((prev) => !prev)}
            data-cursor-hover
            aria-expanded={expanded}
            className="px-4 py-2 bg-blue border border-blue rounded-md text-sm text-white font-mono transition-colors hover:bg-blue-600"
          >
            {expanded ? "Show less ↑" : "Read more →"}
          </button>
          <a
            href={project.repoHref}
            data-cursor-hover
            className="px-4 py-2 border border-border-2 rounded-md text-sm text-text-2 no-underline font-mono transition-colors hover:border-blue hover:text-blue"
          >
            GitHub
          </a>
        </div>
      </div>
    </Reveal>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-[4vw]">
      <Reveal>
        <div className="font-mono text-xs text-cyan tracking-[0.2em] uppercase mb-3">
          // projects.getAll()
        </div>
        <h2 className="font-display text-[clamp(2rem,4vw,3rem)] font-bold tracking-tight leading-tight">
          Things I actually
          <br />
          shipped
        </h2>
      </Reveal>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12 max-w-4xl">
        {projects.map((project, idx) => (
          <ProjectCard key={project.title} project={project} delay={idx * 0.1} />
        ))}
      </div>
    </section>
  );
}
