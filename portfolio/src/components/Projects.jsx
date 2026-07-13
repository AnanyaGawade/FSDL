import { ArrowUpRight } from 'lucide-react';
import Reveal from './Reveal';
import { projects } from '../data';

export default function Projects() {
  return (
    <section id="projects" className="border-b border-line py-24 sm:py-32">
      <div className="mx-auto max-w-content px-6">
        <Reveal>
          <span className="font-mono text-xs uppercase tracking-[0.25em] text-teal">04 / Projects</span>
          <h2 className="mt-4 font-display text-3xl font-semibold leading-tight text-ink sm:text-4xl">
            Things I've shipped.
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2">
          {projects.map((proj, i) => (
            <Reveal key={proj.id} delay={(i % 2) * 0.08} className="h-full">
              <a
                href={proj.href}
                target="_blank"
                rel="noreferrer"
                className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-surface p-6 transition-all duration-300 ease-snap hover:-translate-y-1.5 hover:border-iris/50 hover:shadow-[0_20px_50px_-20px_rgb(var(--c-iris)/0.45)] sm:p-7"
              >
                <div
                  className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-iris/0 blur-3xl transition-all duration-500 group-hover:bg-iris/20"
                  aria-hidden="true"
                />

                <div className="relative flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-display text-lg font-semibold text-ink transition-colors group-hover:text-iris sm:text-xl">
                      {proj.title}
                    </h3>
                    <p className="mt-1 font-mono text-[11px] uppercase tracking-wide text-muted">{proj.subtitle}</p>
                  </div>
                  <ArrowUpRight
                    size={18}
                    className="mt-1 flex-shrink-0 text-muted transition-all duration-300 ease-snap group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-iris"
                  />
                </div>

                <p className="relative mt-4 flex-1 text-sm leading-relaxed text-muted">{proj.description}</p>

                <p className="relative mt-4 font-mono text-xs font-medium text-teal">{proj.metric}</p>

                <div className="relative mt-5 flex flex-wrap gap-1.5 border-t border-line pt-4 opacity-80 transition-opacity duration-300 group-hover:opacity-100">
                  {proj.stack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-md bg-surface2 px-2 py-1 font-mono text-[10px] uppercase tracking-wide text-muted transition-colors duration-300 group-hover:text-ink"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
