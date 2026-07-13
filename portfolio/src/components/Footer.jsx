import { Mail } from 'lucide-react';
import { navLinks, profile } from '../data';
import { GithubIcon, LinkedinIcon } from './icons';

export default function Footer() {
  const year = new Date().getFullYear();

  const handleClick = (id) => (e) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="py-12">
      <div className="mx-auto flex max-w-content flex-col items-center gap-6 px-6 text-center sm:flex-row sm:justify-between sm:text-left">
        <p className="font-mono text-xs text-muted">
          © {year} {profile.name}. Built end-to-end, on purpose.
        </p>

        <ul className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
          {navLinks.slice(0, 5).map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                onClick={handleClick(link.id)}
                className="font-mono text-[11px] uppercase tracking-wide text-muted transition-colors hover:text-ink"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-4">
          <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="text-muted transition-colors hover:text-iris">
            <GithubIcon size={16} />
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="text-muted transition-colors hover:text-iris">
            <LinkedinIcon size={16} />
          </a>
          <a href={`mailto:${profile.email}`} aria-label="Email" className="text-muted transition-colors hover:text-iris">
            <Mail size={16} />
          </a>
        </div>
      </div>
    </footer>
  );
}
