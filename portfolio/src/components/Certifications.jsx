import { motion } from 'framer-motion';
import { Award } from 'lucide-react';
import Reveal from './Reveal';
import { certifications } from '../data';

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.06 } },
};

const badgeItem = {
  hidden: { opacity: 0, scale: 0.9, y: 12 },
  show: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.35, ease: [0.16, 1, 0.3, 1] } },
};

export default function Certifications() {
  return (
    <section id="certifications" className="border-b border-line py-24 sm:py-32">
      <div className="mx-auto max-w-content px-6">
        <Reveal>
          <span className="font-mono text-xs uppercase tracking-[0.25em] text-teal">06 / Certifications</span>
          <h2 className="mt-4 font-display text-3xl font-semibold leading-tight text-ink sm:text-4xl">
            Proof of the reps.
          </h2>
        </Reveal>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
          className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
        >
          {certifications.map((cert) => (
            <motion.div
              key={cert.id}
              variants={badgeItem}
              className="group flex items-start gap-3.5 rounded-xl border border-line bg-surface p-5 transition-all duration-300 ease-snap hover:-translate-y-1 hover:border-iris/50 hover:shadow-[0_16px_40px_-20px_rgb(var(--c-iris)/0.5)]"
            >
              <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg bg-surface2 text-iris transition-colors duration-300 group-hover:bg-iris/15">
                <Award size={16} />
              </span>
              <div>
                <p className="text-sm font-medium leading-snug text-ink">{cert.title}</p>
                <p className="mt-1 font-mono text-[11px] uppercase tracking-wide text-muted">{cert.issuer}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
