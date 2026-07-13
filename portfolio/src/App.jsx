import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Leadership from './components/Leadership';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';
import TraceDivider from './components/TraceDivider';
import { useScrollSpy } from './hooks/useScrollSpy';
import { useTheme } from './hooks/useTheme';
import { navLinks } from './data';

const sectionIds = navLinks.map((l) => l.id);

export default function App() {
  const activeId = useScrollSpy(sectionIds);
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="min-h-screen bg-canvas font-body text-ink antialiased">
      <Navbar activeId={activeId} theme={theme} toggleTheme={toggleTheme} />
      <main>
        <Hero />
        <About />
        <TraceDivider label="Skillset" />
        <Skills />
        <Experience />
        <Projects />
        <TraceDivider label="Impact" />
        <Leadership />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
