import Reveal from './Reveal';
import { leadership } from '../data';

export default function Leadership() {
  return (
    <section id="leadership" className="border-b border-line py-24 sm:py-32">
      <div className="mx-auto max-w-content px-6">
        <Reveal>
          <span className="font-mono text-xs uppercase tracking-[0.25em] text-teal">05 / Leadership</span>
          <h2 className="mt-4 font-display text-3xl font-semibold leading-tight text-ink sm:text-4xl">
            Beyond the codebase.
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-5 md:grid-cols-2">
          {leadership.map((role, i) => (
            <Reveal key={role.id} delay={i * 0.1}>
              <div className="h-full rounded-2xl border border-line bg-surface p-6 transition-all duration-300 ease-snap hover:border-teal/50 sm:p-7">
                <p className="font-mono text-xs uppercase tracking-widest text-muted">{role.period}</p>
                <h3 className="mt-2 font-display text-lg font-semibold text-ink sm:text-xl">{role.role}</h3>
                <p className="mt-1 text-sm font-medium text-teal">{role.org}</p>
                <ul className="mt-4 space-y-2.5">
                  {role.points.map((point, idx) => (
                    <li key={idx} className="flex gap-3 text-sm leading-relaxed text-muted">
                      <span className="mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-muted" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
