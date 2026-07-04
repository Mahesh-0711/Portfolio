import React, { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Hash, Sun, Moon, FileDown } from 'lucide-react';

interface CommandPaletteProps {
  darkMode: boolean;
  setDarkMode: (dark: boolean) => void;
}

export const CommandPalette: React.FC<CommandPaletteProps> = ({ darkMode, setDarkMode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const sections = [
    { name: 'About Me', type: 'section', id: '#about', keywords: 'profile summary objective' },
    { name: 'Technical Stack', type: 'section', id: '#skills', keywords: 'skills languages databases tools coding' },
    { name: 'Journey Timeline', type: 'section', id: '#timeline', keywords: 'career milestones college study' },
    { name: 'Featured Projects', type: 'section', id: '#projects', keywords: 'flagship business blood group software' },
    { name: 'Education history', type: 'section', id: '#education', keywords: 'school college marks college grades' },
    { name: 'Certifications', type: 'section', id: '#certifications', keywords: 'nptel mongodb infosys springboard' },
    { name: 'Achievements', type: 'section', id: '#achievements', keywords: 'hackathon call agent award victory' },
    { name: 'Get In Touch', type: 'section', id: '#contact', keywords: 'email phone location map write letter' },
  ];

  const actions = [
    { name: 'Toggle Dark Mode', type: 'action', perform: () => setDarkMode(!darkMode), keywords: 'theme light sun moon color swap' },
    { name: 'Download Resume PDF', type: 'action', perform: () => {
      const link = document.createElement('a');
      link.href = '/resume.pdf';
      link.download = 'Mahesh_Gajanan_Kamat_Resume.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }, keywords: 'cv resume profile download document pdf' },
  ];

  const items = [...sections, ...actions];

  // Filter based on search query
  const filteredItems = items.filter((item) => {
    const query = search.toLowerCase();
    return (
      item.name.toLowerCase().includes(query) ||
      (item.keywords && item.keywords.toLowerCase().includes(query))
    );
  });

  // Handle Ctrl+K shortcut
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        setIsOpen((prev) => !prev);
      } else if (e.key === 'Escape') {
        setIsOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Autofocus input
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
      setSelectedIndex(0);
      setSearch('');
    }
  }, [isOpen]);

  const executeItem = (item: typeof items[number]) => {
    setIsOpen(false);
    if (item.type === 'section' && 'id' in item) {
      const target = document.querySelector(item.id);
      if (target) {
        const offsetTop = (target as HTMLElement).offsetTop - 80;
        window.scrollTo({ top: offsetTop, behavior: 'smooth' });
      }
    } else if (item.type === 'action' && 'perform' in item) {
      item.perform();
    }
  };

  // Keyboard navigation inside palette
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIndex((prev) => (prev + 1) % filteredItems.length);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex((prev) => (prev - 1 + filteredItems.length) % filteredItems.length);
    } else if (e.key === 'Enter') {
      e.preventDefault();
      if (filteredItems[selectedIndex]) {
        executeItem(filteredItems[selectedIndex]);
      }
    }
  };

  return (
    <>
      {/* Visual shortcut hint at top of screen or inside floating hub */}
      <div className="fixed bottom-6 left-6 z-30 hidden md:block">
        <button
          onClick={() => setIsOpen(true)}
          className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-950/80 border border-white/5 backdrop-blur-md text-[10px] font-mono text-dark-textMuted hover:text-white hover:border-white/15 transition-all shadow-lg shadow-black/30"
        >
          <span>Search</span>
          <kbd className="px-1.5 py-0.5 rounded bg-slate-900 border border-white/10 text-[9px]">Ctrl + K</kbd>
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-50 flex items-start justify-center pt-24 px-4">
            {/* Backdrop overlay */}
            <motion.div
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
            />

            {/* Panel container */}
            <motion.div
              className="w-full max-w-lg bg-[#0E1321] border border-white/10 rounded-2xl overflow-hidden shadow-2xl z-10"
              initial={{ opacity: 0, scale: 0.95, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -20 }}
              transition={{ duration: 0.2 }}
            >
              {/* Search Bar Input */}
              <div className="flex items-center gap-3 px-4 border-b border-white/5 py-4">
                <Search size={18} className="text-dark-textMuted" />
                <input
                  ref={inputRef}
                  value={search}
                  onChange={(e) => {
                    setSearch(e.target.value);
                    setSelectedIndex(0);
                  }}
                  onKeyDown={handleKeyDown}
                  type="text"
                  placeholder="Search sections or actions..."
                  className="w-full bg-transparent text-sm text-white focus:outline-none placeholder-dark-textMuted font-sans"
                />
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-[10px] font-mono text-dark-textMuted border border-white/5 px-2 py-0.5 rounded-md bg-slate-950/40"
                >
                  ESC
                </button>
              </div>

              {/* Suggestions List */}
              <div className="max-h-80 overflow-y-auto p-2 no-scrollbar">
                {filteredItems.length === 0 ? (
                  <div className="text-center py-8 text-xs text-dark-textMuted font-mono">
                    No results matched your query
                  </div>
                ) : (
                  filteredItems.map((item, idx) => {
                    const isSelected = idx === selectedIndex;
                    const isSection = item.type === 'section';

                    return (
                      <button
                        key={item.name}
                        onClick={() => executeItem(item)}
                        className={`w-full flex items-center justify-between px-3 py-3 rounded-xl text-left transition-all ${
                          isSelected
                            ? 'bg-slate-900 text-white border border-brand-cyan/25'
                            : 'text-dark-textMuted border border-transparent'
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          {isSection ? (
                            <Hash size={16} className={isSelected ? 'text-brand-cyan' : 'text-slate-700'} />
                          ) : item.name.includes('Theme') ? (
                            darkMode ? <Sun size={16} className="text-amber-400" /> : <Moon size={16} />
                          ) : (
                            <FileDown size={16} className="text-brand-purple" />
                          )}
                          <span className="text-xs font-semibold">{item.name}</span>
                        </div>

                        {isSelected && (
                          <span className="text-[9px] font-mono text-brand-cyan uppercase tracking-wider">
                            Execute ↵
                          </span>
                        )}
                      </button>
                    );
                  })
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};

export default CommandPalette;
