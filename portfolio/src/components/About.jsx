import Reveal from './Reveal';
import { about } from '../data';

const pillars = [
  { code: 'UX', label: 'Design' },
  { code: '</>', label: 'Build' },
  { code: 'AI', label: 'Reason' },
];

export default function About() {
  return (
    <section id="about" className="border-b border-line py-24 sm:py-32">
      <div className="mx-auto max-w-content px-6">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <Reveal>
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-teal">01 / About</span>
            <h2 className="mt-4 font-display text-3xl font-semibold leading-tight text-ink sm:text-4xl">
              One builder,
              <br />
              three disciplines.
            </h2>
            <div className="mt-8 flex gap-3">
              {pillars.map((p, i) => (
                <Reveal key={p.code} delay={0.1 + i * 0.08} y={12}>
                  <div className="flex h-16 w-16 flex-col items-center justify-center rounded-2xl border border-line bg-surface font-display text-sm font-semibold text-iris sm:h-20 sm:w-20">
                    {p.code}
                    <span className="mt-1 font-mono text-[9px] font-normal uppercase tracking-widest text-muted">
                      {p.label}
                    </span>
                  </div>
                </Reveal>
              ))}
            </div>
          </Reveal>

          <div className="space-y-5">
            {about.paragraphs.map((p, i) => (
              <Reveal key={i} delay={i * 0.08}>
                <p className="text-base leading-relaxed text-muted sm:text-lg">{p}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
