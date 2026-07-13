import { Mail, MapPin, Phone } from 'lucide-react';
import Reveal from './Reveal';
import { profile } from '../data';
import { GithubIcon, LinkedinIcon } from './icons';

const contactMeta = [
  { icon: Mail, label: profile.email, href: `mailto:${profile.email}` },
  { icon: Phone, label: profile.phone, href: `tel:${profile.phone.replace(/\s+/g, '')}` },
  { icon: MapPin, label: profile.location, href: undefined },
  { icon: GithubIcon, label: profile.githubLabel, href: profile.github },
  { icon: LinkedinIcon, label: profile.linkedinLabel, href: profile.linkedin },
];

export default function Contact() {
  return (
    <section id="contact" className="border-b border-line py-24 sm:py-32">
      <div className="mx-auto max-w-content px-6">
        <Reveal className="mx-auto max-w-xl text-center">
          <span className="font-mono text-xs uppercase tracking-[0.25em] text-teal">07 / Contact</span>
          <h2 className="mt-4 font-display text-3xl font-semibold leading-tight text-ink sm:text-4xl">
            Let's build something.
          </h2>
          <p className="mx-auto mt-4 max-w-sm text-sm leading-relaxed text-muted sm:text-base">
            Open to internships, collaborations, and interesting problems across AI, full-stack, and product
            design.
          </p>

          <ul className="mx-auto mt-8 inline-flex flex-col items-start gap-3">
            {contactMeta.map(({ icon: Icon, label, href }) => {
              const content = (
                <span className="flex items-center gap-3 text-sm text-muted transition-colors group-hover:text-ink">
                  <span className="flex h-8 w-8 items-center justify-center rounded-lg border border-line bg-surface text-iris">
                    <Icon size={14} />
                  </span>
                  {label}
                </span>
              );
              return (
                <li key={label}>
                  {href ? (
                    <a
                      href={href}
                      target={href.startsWith('http') ? '_blank' : undefined}
                      rel={href.startsWith('http') ? 'noreferrer' : undefined}
                      className="group inline-flex"
                    >
                      {content}
                    </a>
                  ) : (
                    <span className="inline-flex">{content}</span>
                  )}
                </li>
              );
            })}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
