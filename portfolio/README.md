# Ananya Gawade — Portfolio

A single-page portfolio built with React, Tailwind CSS, and Framer Motion.

## Design system

- **Palette:** near-black base (`#08080C`) with an iris/violet primary (`#7C6CF0`) and a teal signal accent (`#2FE0C6`), used sparingly for CTAs, metrics, and the active-state underline. Light mode swaps to a soft off-white base with deepened accent tones for contrast — toggle in the navbar, preference persists via `localStorage`.
- **Type:** Space Grotesk for display/headings, Inter for body copy, JetBrains Mono for labels, eyebrows, tags, and dates — a nod to the "engineering" register of the brief.
- **Signature motif:** a circuit-trace line (`TraceDivider`) that threads between sections, echoing a PCB trace / schematic connector — tying together the three disciplines (AI, full-stack, UI/UX) into one visual system. The same line-draw technique reappears in the Experience timeline.
- Colors and copy live in `src/data.js` and `tailwind.config.js` / `src/index.css` (CSS variables) — edit there rather than hunting through components.

## Getting started

```bash
npm install
npm run dev       # local dev server
npm run build     # production build to /dist
npm run preview   # preview the production build locally
```

## Adding your real photo and resume

Two placeholder files ship in the `public/` folder so the site works out of the box:

- **`public/profile-photo.png`** — a placeholder silhouette shown next to your name in the hero section. Replace it with your own cutout photo (subject with a transparent background, PNG or WebP) **using the exact same filename**, and it'll appear automatically. If you use a different filename or format, update `profile.photoSrc` in `src/data.js` to match (e.g. `'/photo.webp'`).
- **`public/resume.pdf`** — a placeholder PDF behind the "Download Resume" button. Replace it with your actual resume, keeping the filename `resume.pdf`, and the button will download your real file. To use a different filename, update `profile.resumeHref` in `src/data.js` (e.g. `'/my-resume.pdf'`).

Any file placed directly in `public/` is served from the site's root — so `public/resume.pdf` becomes reachable at `/resume.pdf`, which is exactly what `resumeHref` points to.

## Editing content

All copy — name, tagline, bio, skills, experience, projects, leadership, certifications, contact details — lives in **`src/data.js`**. Update it there and every section re-renders automatically.

## Contact section

The contact section shows your email, phone, location, and social links, plus a short name + email form. Submitting the form opens the visitor's email client with a pre-filled message (no backend required) — see `src/components/Contact.jsx`'s `handleSubmit` if you'd rather wire it to a real form endpoint (Formspree, Resend, a serverless function, etc.).

## Deploying

**Vercel**
```bash
npm i -g vercel
vercel
```
Framework preset: Vite. No extra config needed.

**Netlify**
- Build command: `npm run build`
- Publish directory: `dist`

Both platforms auto-detect this as a Vite project if you push it to a Git repo and import it directly instead.

## Performance & accessibility notes

- No external images — icons are inline SVG (lucide-react + two hand-drawn brand icons), so there's nothing to lazy-load.
- Motion is kept under ~400ms with an `ease-out`-style curve; `prefers-reduced-motion` is respected globally (see `src/index.css`).
- All interactive elements have visible focus states, `aria-label`s on icon-only buttons/links, and the mobile nav exposes `aria-expanded`.
- Section navigation uses `IntersectionObserver` (`src/hooks/useScrollSpy.js`) rather than scroll-position math, so it stays cheap on lower-end devices.
