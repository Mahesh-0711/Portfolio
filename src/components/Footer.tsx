import React from 'react';
import { Mail, ArrowUp } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Certificates', href: '#certifications' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="py-12 bg-slate-50 dark:bg-slate-950/80 border-t border-slate-200 dark:border-white/5 relative z-10 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
        
        {/* Left Side: Brand Credit */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left gap-1">
          <p className="text-xs text-slate-400 dark:text-dark-textMuted font-mono">
            Designed with ❤️ by
          </p>
          <h4 className="font-display font-extrabold text-sm text-slate-800 dark:text-white uppercase tracking-wider">
            {portfolioData.personalInfo.name}
          </h4>
          <span className="text-[10px] text-slate-400 dark:text-dark-textMuted font-mono mt-1">
            Built with React + TypeScript + Tailwind CSS
          </span>
        </div>

        {/* Middle: Links */}
        <div className="flex flex-wrap justify-center gap-x-5 gap-y-2 max-w-md">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                const target = document.querySelector(link.href);
                if (target) {
                  const offsetTop = (target as HTMLElement).offsetTop - 80;
                  window.scrollTo({ top: offsetTop, behavior: 'smooth' });
                }
              }}
              className="text-xs text-slate-500 dark:text-dark-textMuted hover:text-brand-purple dark:hover:text-white transition-colors font-semibold uppercase tracking-wider"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Right Side: Social & Back-To-Top */}
        <div className="flex items-center gap-6">
          {/* Socials */}
          <div className="flex gap-4 items-center">
            <a
              href={`https://github.com/${portfolioData.personalInfo.github}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-500 dark:text-dark-textMuted hover:text-slate-900 dark:hover:text-white transition-colors flex items-center"
              title="GitHub"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
            </a>
            <a
              href={`https://linkedin.com/in/${portfolioData.personalInfo.linkedin}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-500 dark:text-dark-textMuted hover:text-slate-900 dark:hover:text-white transition-colors flex items-center"
              title="LinkedIn"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
            </a>
            <a
              href={`mailto:${portfolioData.personalInfo.email}`}
              className="text-slate-500 dark:text-dark-textMuted hover:text-slate-900 dark:hover:text-white transition-colors flex items-center"
              title="Email"
            >
              <Mail size={18} />
            </a>
          </div>

          {/* Quick Back to Top */}
          <button
            onClick={scrollToTop}
            className="p-3 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-white/10 text-slate-500 dark:text-dark-textMuted hover:text-slate-950 dark:hover:text-white hover:border-slate-300 dark:hover:border-white/20 transition-all flex items-center justify-center shadow-md"
            title="Back to Top"
          >
            <ArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
