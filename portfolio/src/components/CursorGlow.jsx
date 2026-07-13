import { useEffect, useRef } from 'react';

/**
 * A soft gradient blob that eases toward the pointer within the hero.
 * Pure CSS transform updates via rAF — no layout thrash, no external deps,
 * so it stays cheap even on lower-end devices. Disabled for users who
 * prefer reduced motion.
 */
export default function CursorGlow() {
  const blobRef = useRef(null);
  const target = useRef({ x: 0, y: 0 });
  const current = useRef({ x: 0, y: 0 });
  const frame = useRef(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return undefined;

    const handleMove = (e) => {
      const rect = e.currentTarget.getBoundingClientRect();
      target.current = { x: e.clientX - rect.left, y: e.clientY - rect.top };
    };

    const section = blobRef.current?.parentElement;
    section?.addEventListener('mousemove', handleMove);

    const animate = () => {
      current.current.x += (target.current.x - current.current.x) * 0.08;
      current.current.y += (target.current.y - current.current.y) * 0.08;
      if (blobRef.current) {
        blobRef.current.style.transform = `translate3d(${current.current.x - 220}px, ${current.current.y - 220}px, 0)`;
      }
      frame.current = requestAnimationFrame(animate);
    };
    frame.current = requestAnimationFrame(animate);

    return () => {
      section?.removeEventListener('mousemove', handleMove);
      if (frame.current) cancelAnimationFrame(frame.current);
    };
  }, []);

  return (
    <div
      ref={blobRef}
      aria-hidden="true"
      className="pointer-events-none absolute left-0 top-0 h-[440px] w-[440px] rounded-full opacity-40 blur-[90px] will-change-transform"
      style={{
        background:
          'radial-gradient(circle, rgb(var(--c-iris) / 0.9) 0%, rgb(var(--c-teal) / 0.55) 45%, transparent 70%)',
      }}
    />
  );
}
