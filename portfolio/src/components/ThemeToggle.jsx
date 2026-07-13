import { Moon, Sun } from 'lucide-react';

export default function ThemeToggle({ theme, toggleTheme }) {
  const isDark = theme === 'dark';
  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
      aria-pressed={!isDark}
      className="group relative flex h-9 w-9 items-center justify-center rounded-full border border-line bg-surface/60 text-ink transition-all duration-300 ease-snap hover:border-iris/60 hover:shadow-[0_0_0_4px_rgb(var(--c-iris)/0.12)]"
    >
      <Sun
        size={16}
        className={`absolute transition-all duration-300 ease-snap ${
          isDark ? 'scale-100 rotate-0 opacity-100' : 'scale-50 -rotate-90 opacity-0'
        }`}
      />
      <Moon
        size={16}
        className={`absolute transition-all duration-300 ease-snap ${
          isDark ? 'scale-50 rotate-90 opacity-0' : 'scale-100 rotate-0 opacity-100'
        }`}
      />
    </button>
  );
}
