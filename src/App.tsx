import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Toaster } from 'react-hot-toast';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Certifications } from './components/Certifications';
import { Achievements } from './components/Achievements';
import { StatsDashboard } from './components/StatsDashboard';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ChevronUp } from 'lucide-react';

export const App: React.FC = () => {
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem('theme');
    return saved === null ? true : saved === 'dark';
  });
  
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  // Scroll Percentage & Active Section Monitor
  useEffect(() => {
    const handleScroll = () => {
      // 1. Scroll percentage calculation
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const progress = (window.scrollY / totalHeight) * 100;
        setScrollProgress(progress);
      }

      // 2. Show/hide Back-to-top button
      if (window.scrollY > 400) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }

      // 3. Section monitoring
      const sections = ['home', 'about', 'skills', 'projects', 'certifications', 'contact'];
      const scrollPosition = window.scrollY + 200; // Trigger threshold offset

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Theme Class Toggle on Body with localStorage persistence
  useEffect(() => {
    localStorage.setItem('theme', darkMode ? 'dark' : 'light');
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <>
      {/* Toast notifications */}
      <Toaster position="bottom-right" />

      <div className="min-h-screen text-slate-900 dark:text-slate-100 bg-white dark:bg-[#0B0F19] selection:bg-brand-cyan/20 selection:text-brand-cyan relative transition-colors duration-300">
        {/* Fine Noise overlay texture for premium detail */}
        <div className="noise-overlay" />

        {/* Soft background glow - shifts based on theme */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[600px] bg-[radial-gradient(circle_at_center,rgba(124,58,237,0.06),transparent_60%)] dark:bg-[radial-gradient(circle_at_center,rgba(124,58,237,0.04),transparent_60%)] pointer-events-none" />

        {/* Top Scroll Progress Indicator */}
        <div className="fixed top-0 left-0 right-0 h-[2.5px] bg-slate-200 dark:bg-slate-900 z-50">
          <motion.div
            className="h-full bg-gradient-to-r from-brand-purple via-brand-blue to-brand-cyan"
            style={{ width: `${scrollProgress}%` }}
          />
        </div>

        {/* Navigation Header */}
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} activeSection={activeSection} />

        {/* Layout Main Sections */}
        <main>
          {/* Hero Presentation */}
          <Hero />

          {/* Professional Profile */}
          <About />

          {/* Stack Details */}
          <Skills />

          {/* Projects List */}
          <Projects />

          {/* Stats dashboard */}
          <StatsDashboard />

          {/* Certifications Grid */}
          <Certifications />

          {/* Trophy Achievements */}
          <Achievements />

          {/* Contact Form Details */}
          <Contact />
        </main>

        {/* Page Footer */}
        <Footer />

        {/* Floating Back To Top button */}
        <AnimatePresence>
          {showScrollTop && (
            <motion.button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="fixed bottom-6 right-6 p-4 rounded-2xl bg-white/80 dark:bg-slate-950/80 border border-slate-200 dark:border-white/10 text-brand-cyan hover:text-brand-purple dark:hover:text-white hover:border-brand-cyan/40 hover:shadow-lg hover:shadow-brand-cyan/10 transition-all z-35 backdrop-blur-md"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
              title="Scroll back to top"
            >
              <ChevronUp size={20} />
            </motion.button>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};

export default App;
