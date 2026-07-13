import { motion } from 'framer-motion';

/**
 * Signature motif: a thin circuit-trace line with a node, echoing a PCB
 * trace / schematic connector. Used between sections to visually thread
 * the three disciplines (AI, full-stack, UI/UX) into one continuous system.
 */
export default function TraceDivider({ label }) {
  return (
    <div className="relative flex items-center justify-center py-2 select-none" aria-hidden="true">
      <svg width="100%" height="32" viewBox="0 0 400 32" preserveAspectRatio="none" className="max-w-content w-full px-6">
        <motion.path
          d="M0 16 H160 L180 4 H220 L240 16 H400"
          className="trace-line"
          style={{ stroke: 'rgb(var(--c-line))' }}
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        />
        <circle cx="200" cy="10" r="3" className="node-pulse" fill="rgb(var(--c-teal))" />
      </svg>
      {label && (
        <span className="absolute bg-canvas px-3 font-mono text-[11px] uppercase tracking-[0.2em] text-muted">
          {label}
        </span>
      )}
    </div>
  );
}
