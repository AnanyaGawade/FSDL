import { motion } from 'framer-motion';
import Reveal from './Reveal';
import { experience } from '../data';

export default function Experience() {
  return (
    <section id="experience" className="border-b border-line py-24 sm:py-32">
      <div className="mx-auto max-w-content px-6">
        <Reveal>
          <span className="font-mono text-xs uppercase tracking-[0.25em] text-teal">03 / Experience</span>
          <h2 className="mt-4 font-display text-3xl font-semibold leading-tight text-ink sm:text-4xl">
            On the job.
          </h2>
        </Reveal>

        <div className="relative mt-14 pl-8 sm:pl-10">
          <svg
            className="absolute left-0 top-1 h-full w-6 overflow-visible"
            aria-hidden="true"
          >
            <motion.line
              x1="12"
              y1="0"
              x2="12"
              y2="100%"
              stroke="rgb(var(--c-line))"
              strokeWidth="2"
            />
            <motion.line
              x1="12"
              y1="0"
              x2="12"
              y2="100%"
              stroke="rgb(var(--c-iris))"
              strokeWidth="2"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: 'easeOut' }}
            />
          </svg>

          <ul className="space-y-14">
            {experience.map((role, i) => (
              <li key={role.id} className="relative">
                <Reveal delay={i * 0.1}>
                  <motion.span
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + i * 0.1, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    className="absolute -left-8 top-1.5 h-3 w-3 rounded-full bg-teal shadow-[0_0_0_4px_rgb(var(--c-teal)/0.18)] sm:-left-10"
                  />
                  <p className="font-mono text-xs uppercase tracking-widest text-muted">{role.period}</p>
                  <h3 className="mt-2 font-display text-xl font-semibold text-ink sm:text-2xl">{role.role}</h3>
                  <p className="mt-1 text-sm font-medium text-iris">{role.org}</p>
                  <ul className="mt-4 space-y-2.5">
                    {role.points.map((point, idx) => (
                      <li key={idx} className="flex gap-3 text-sm leading-relaxed text-muted sm:text-base">
                        <span className="mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-muted" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
