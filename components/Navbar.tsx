'use client';
import { useTheme } from 'next-themes';
import { useLanguage } from '@/hooks/useLanguage';
import { Sun, Moon, Globe } from 'lucide-react';

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const { lang, setLang, t } = useLanguage();

  return (
    <nav className="glass fixed top-0 z-50 w-full py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-sky-500 rounded-xl flex items-center justify-center text-white font-bold text-2xl">GO</div>
          <h1 className="text-2xl font-bold tracking-tight">{t('title')}</h1>
        </div>

        <div className="flex items-center gap-8">
          {/* Links */}
          <div className="hidden md:flex gap-8 text-lg">
            <a href="/">{t('home')}</a>
            <a href="/about">{t('about')}</a>
            <a href="/services">{t('services')}</a>
            <a href="/contact">{t('contact')}</a>
          </div>

          {/* Toggles */}
          <div className="flex items-center gap-4">
            <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} className="glass p-3 rounded-2xl">
              {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            <button onClick={() => setLang(lang === 'bn' ? 'en' : 'bn')} className="glass px-4 py-2 rounded-2xl flex items-center gap-2">
              <Globe className="w-5 h-5" /> {lang.toUpperCase()}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
