import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Reveal from './Reveal';
import { skills } from '../data';

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.035 } },
};

const tagItem = {
  hidden: { opacity: 0, scale: 0.85, y: 8 },
  show: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.3, ease: [0.16, 1, 0.3, 1] } },
};

export default function Skills() {
  const [activeId, setActiveId] = useState(skills[0].id);
  const active = skills.find((s) => s.id === activeId);

  return (
    <section id="skills" className="border-b border-line py-24 sm:py-32">
      <div className="mx-auto max-w-content px-6">
        <Reveal>
          <span className="font-mono text-xs uppercase tracking-[0.25em] text-teal">02 / Skills</span>
          <h2 className="mt-4 font-display text-3xl font-semibold leading-tight text-ink sm:text-4xl">
            What I reach for.
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <div
            role="tablist"
            aria-label="Skill categories"
            className="mt-10 flex flex-wrap gap-2 border-b border-line pb-4"
          >
            {skills.map((cat) => (
              <button
                key={cat.id}
                role="tab"
                aria-selected={activeId === cat.id}
                onClick={() => setActiveId(cat.id)}
                className={`relative rounded-full px-4 py-2 font-mono text-xs uppercase tracking-wide transition-all duration-300 ease-snap ${
                  activeId === cat.id
                    ? 'bg-ink text-canvas'
                    : 'border border-line text-muted hover:border-iris/50 hover:text-ink'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </Reveal>

        <div className="mt-10 min-h-[200px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeId}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            >
              <p className="mb-6 font-mono text-xs uppercase tracking-widest text-muted">{active.eyebrow}</p>
              <motion.ul variants={container} initial="hidden" animate="show" className="flex flex-wrap gap-2.5">
                {active.items.map((skill) => (
                  <motion.li
                    key={skill}
                    variants={tagItem}
                    className="group cursor-default rounded-xl border border-line bg-surface px-3.5 py-2 text-sm text-ink transition-all duration-200 ease-snap hover:-translate-y-0.5 hover:border-iris/60 hover:shadow-[0_8px_20px_-8px_rgb(var(--c-iris)/0.5)]"
                  >
                    {skill}
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
