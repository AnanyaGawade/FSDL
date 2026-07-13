import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Mail } from 'lucide-react';
import { profile } from '../data';
import CursorGlow from './CursorGlow';
import { GithubIcon, LinkedinIcon } from './icons';

const TYPE_SPEED = 55;
const DELETE_SPEED = 30;
const HOLD_MS = 1400;

function useTypewriter(words) {
  const [text, setText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex % words.length];
    let timeout;

    if (!deleting && text === currentWord) {
      timeout = setTimeout(() => setDeleting(true), HOLD_MS);
    } else if (deleting && text === '') {
      setDeleting(false);
      setWordIndex((i) => i + 1);
    } else {
      timeout = setTimeout(
        () => {
          setText((t) =>
            deleting ? currentWord.slice(0, t.length - 1) : currentWord.slice(0, t.length + 1)
          );
        },
        deleting ? DELETE_SPEED : TYPE_SPEED
      );
    }
    return () => clearTimeout(timeout);
  }, [text, deleting, wordIndex, words]);

  return text;
}

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.15 } },
};

const item = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] } },
};

export default function Hero() {
  const typed = useTypewriter(profile.taglines);

  return (
    <section
      id="home"
      className="dot-grid relative flex min-h-[100svh] items-center overflow-hidden border-b border-line pt-24"
    >
      <CursorGlow />
      <div className="relative z-10 mx-auto w-full max-w-content px-6">
        <div className="flex flex-col-reverse items-center gap-12 lg:flex-row lg:items-center lg:justify-between lg:gap-10">
          <motion.div variants={container} initial="hidden" animate="show" className="w-full lg:flex-1">
            <motion.p
              variants={item}
              className="mb-5 inline-flex items-center gap-2 rounded-full border border-line bg-surface/60 px-3 py-1 font-mono text-[11px] uppercase tracking-[0.2em] text-muted"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-teal" />
              {profile.location}
            </motion.p>

            <motion.h1
              variants={item}
              className="font-display text-[13vw] font-semibold leading-[0.95] tracking-tight text-ink sm:text-6xl md:text-7xl lg:text-[5.5rem]"
            >
              {profile.name}
            </motion.h1>

            <motion.div
              variants={item}
              className="mt-4 flex h-9 items-center font-display text-xl font-medium text-transparent sm:text-2xl md:text-3xl"
            >
              <span className="bg-gradient-to-r from-iris to-teal bg-clip-text">{typed}</span>
              <span className="ml-1 inline-block h-6 w-[2px] animate-pulse bg-teal sm:h-7" aria-hidden="true" />
            </motion.div>

            <motion.p variants={item} className="mt-6 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
              {profile.intro}
            </motion.p>

            <motion.div variants={item} className="mt-9 flex flex-wrap items-center gap-4">
              <a
                href="#projects"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="group relative overflow-hidden rounded-full bg-ink px-6 py-3 font-mono text-xs uppercase tracking-wide text-canvas transition-transform duration-300 ease-snap hover:scale-[1.03] active:scale-[0.98]"
              >
                View Projects
              </a>
              <a
                href={profile.resumeHref}
                download="Ananya_Gawade_Resume.pdf"
                className="rounded-full border border-line px-6 py-3 font-mono text-xs uppercase tracking-wide text-ink transition-all duration-300 ease-snap hover:border-iris/60 hover:shadow-[0_0_0_4px_rgb(var(--c-iris)/0.12)]"
              >
                Download Resume
              </a>
            </motion.div>

            <motion.div variants={item} className="mt-10 flex items-center gap-5">
              {[
                { href: profile.github, icon: GithubIcon, label: 'GitHub' },
                { href: profile.linkedin, icon: LinkedinIcon, label: 'LinkedIn' },
                { href: `mailto:${profile.email}`, icon: Mail, label: 'Email' },
              ].map(({ href, icon: Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel={href.startsWith('http') ? 'noreferrer' : undefined}
                  aria-label={label}
                  className="text-muted transition-all duration-200 hover:-translate-y-0.5 hover:text-iris"
                >
                  <Icon size={20} />
                </a>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative flex-shrink-0"
          >
            {/* Soft gradient glow behind the cutout — gives the photo a "floating" feel
                without needing a background image of its own. */}
            <div
              aria-hidden="true"
              className="absolute inset-0 -z-10 rounded-full opacity-60 blur-2xl"
              style={{
                background:
                  'radial-gradient(circle, rgb(var(--c-iris) / 0.55) 0%, rgb(var(--c-teal) / 0.35) 55%, transparent 75%)',
              }}
            />
            <motion.img
              src={profile.photoSrc}
              alt={profile.name}
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              className="h-[26rem] w-[26rem] object-contain drop-shadow-[0_20px_40px_rgb(0_0_0/0.35)] sm:h-[32rem] sm:w-[32rem] lg:h-[36rem] lg:w-[36rem]"
            />
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-muted sm:flex"
      >
        <span className="font-mono text-[10px] uppercase tracking-[0.3em]">Scroll</span>
        <motion.span animate={{ y: [0, 6, 0] }} transition={{ repeat: Infinity, duration: 1.6, ease: 'easeInOut' }}>
          <ArrowDown size={14} />
        </motion.span>
      </motion.div>
    </section>
  );
}
