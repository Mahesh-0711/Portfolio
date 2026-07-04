import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sun, Moon, Mail, FileDown } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

interface NavbarProps {
  darkMode: boolean;
  setDarkMode: (dark: boolean) => void;
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({ darkMode, setDarkMode, activeSection }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Certificates', href: '#certifications' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Blur check
      if (currentScrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Hide / Show on Scroll Up/Down
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setVisible(false); // scrolling down
      } else {
        setVisible(true); // scrolling up
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    const target = document.querySelector(href);
    if (target) {
      const offsetTop = (target as HTMLElement).offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth',
      });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          visible || isOpen ? 'translate-y-0' : '-translate-y-full'
        } ${
          scrolled || isOpen
            ? 'bg-white dark:bg-[#0B0F19] border-b border-slate-200 dark:border-white/10 py-4 shadow-md'
            : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo / Initials */}
          <a
            href="#home"
            onClick={(e) => handleLinkClick(e, '#home')}
            className="flex items-center gap-2 group"
          >
            <div className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-white/10 flex items-center justify-center font-display font-extrabold text-lg text-brand-purple relative overflow-hidden transition-all duration-300 group-hover:border-brand-purple/40">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-brand-purple to-brand-cyan">
                MK
              </span>
              <div className="absolute inset-0 bg-brand-purple/5 opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <div className="flex flex-col hidden sm:flex">
              <span className="font-display font-bold text-sm tracking-wide text-slate-800 dark:text-white leading-tight">
                Mahesh Kamat
              </span>
              <span className="text-[10px] text-slate-500 dark:text-dark-textMuted font-mono">
                AI / ML / Full-Stack
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className={`text-sm font-medium tracking-wide transition-all duration-300 hover:text-slate-900 dark:hover:text-white relative py-1 ${
                    isActive ? 'text-brand-purple dark:text-brand-cyan font-bold' : 'text-slate-500 dark:text-dark-textMuted'
                  }`}
                >
                  <span>{link.name}</span>
                  {isActive && (
                    <motion.div
                      layoutId="activeUnderline"
                      className="absolute -bottom-1.5 left-0 right-0 h-[2.5px] bg-gradient-to-r from-brand-purple to-brand-cyan rounded-full shadow-[0_0_8px_#06B6D4]"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Action Buttons: Social, Theme, Resume */}
          <div className="hidden lg:flex items-center gap-4">
            {/* Social Links */}
            <div className="flex items-center gap-3 border-r border-slate-200 dark:border-white/10 pr-4">
              <a
                href={`https://github.com/${portfolioData.personalInfo.github}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-500 dark:text-dark-textMuted hover:text-slate-900 dark:hover:text-white transition-colors p-1.5 flex items-center"
                title="GitHub"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
              </a>
              <a
                href={`https://linkedin.com/in/${portfolioData.personalInfo.linkedin}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-500 dark:text-dark-textMuted hover:text-slate-900 dark:hover:text-white transition-colors p-1.5 flex items-center"
                title="LinkedIn"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
              </a>
              <a
                href={`mailto:${portfolioData.personalInfo.email}`}
                className="text-slate-500 dark:text-dark-textMuted hover:text-slate-900 dark:hover:text-white transition-colors p-1.5 flex items-center"
                title="Email"
              >
                <Mail size={18} />
              </a>
            </div>

            {/* Theme Toggle */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-white/10 hover:border-slate-300 dark:hover:border-white/20 text-slate-600 dark:text-dark-textMuted hover:text-slate-950 dark:hover:text-white transition-all"
              title="Toggle Theme"
            >
              {darkMode ? <Sun size={18} className="text-amber-400 animate-pulse" /> : <Moon size={18} className="text-slate-700" />}
            </button>

            {/* Resume Download */}
            <a
              href="#resume-download"
              onClick={(e) => {
                e.preventDefault();
                const link = document.createElement('a');
                link.href = '/resume.pdf';
                link.download = 'Mahesh_Gajanan_Kamat_Resume.pdf';
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
              }}
              className="flex items-center gap-2 text-xs font-semibold px-4 py-2 rounded-xl bg-gradient-to-r from-brand-purple to-brand-blue border border-white/10 shadow-lg shadow-brand-purple/10 hover:brightness-110 transition-all text-white"
            >
              <FileDown size={14} />
              <span>Resume</span>
            </a>
          </div>

          {/* Mobile Right Buttons Menu */}
          <div className="flex items-center gap-3 lg:hidden">
            {/* Theme Toggle (Mobile) */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-white/10 text-slate-600 dark:text-dark-textMuted transition-all"
            >
              {darkMode ? <Sun size={18} className="text-amber-400" /> : <Moon size={18} className="text-slate-700" />}
            </button>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-white/10 text-slate-600 dark:text-dark-textMuted transition-all"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 bg-white dark:bg-[#0B0F19] z-40 flex flex-col pt-24 px-6 lg:hidden overflow-y-auto"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex flex-col gap-6 text-center text-lg font-display">
              {navLinks.map((link, idx) => {
                const isActive = activeSection === link.href.substring(1);
                return (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className={`font-semibold tracking-wide py-2 border-b border-slate-200 dark:border-white/5 ${
                      isActive ? 'text-brand-purple dark:text-brand-cyan font-bold' : 'text-slate-500 dark:text-dark-textMuted'
                    }`}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.05 }}
                  >
                    {link.name}
                  </motion.a>
                );
              })}
            </div>

            <div className="mt-auto mb-10 flex flex-col gap-6 items-center">
              {/* Resume download mobile */}
              <a
                href="#resume-download"
                onClick={(e) => {
                  e.preventDefault();
                  const link = document.createElement('a');
                  link.href = '/resume.pdf';
                  link.download = 'Mahesh_Gajanan_Kamat_Resume.pdf';
                  document.body.appendChild(link);
                  link.click();
                  document.body.removeChild(link);
                }}
                className="w-full text-center flex items-center justify-center gap-2 text-sm font-semibold py-3.5 rounded-2xl bg-gradient-to-r from-brand-purple to-brand-blue border border-white/10 text-white"
              >
                <FileDown size={16} />
                <span>Download Resume</span>
              </a>

              {/* Social items mobile */}
              <div className="flex gap-6 items-center">
                <a
                  href={`https://github.com/${portfolioData.personalInfo.github}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-2xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-white/10 flex items-center justify-center text-slate-500 dark:text-dark-textMuted"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                </a>
                <a
                  href={`https://linkedin.com/in/${portfolioData.personalInfo.linkedin}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-2xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-white/10 flex items-center justify-center text-slate-500 dark:text-dark-textMuted"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                </a>
                <a
                  href={`mailto:${portfolioData.personalInfo.email}`}
                  className="w-12 h-12 rounded-2xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-white/10 flex items-center justify-center text-slate-500 dark:text-dark-textMuted"
                >
                  <Mail size={20} />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
