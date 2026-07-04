import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface LoaderProps {
  onComplete: () => void;
}

export const Loader: React.FC<LoaderProps> = ({ onComplete }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const duration = 1200; // Total duration in ms
    const intervalTime = 12; // Update speed
    const step = 100 / (duration / intervalTime);

    const timer = setInterval(() => {
      setCount((prev) => {
        const next = prev + step;
        if (next >= 100) {
          clearInterval(timer);
          setTimeout(onComplete, 300); // Small pause at 100% before transition
          return 100;
        }
        return Math.floor(next);
      });
    }, intervalTime);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 bg-dark-bg z-50 flex flex-col items-center justify-center text-white"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.6, ease: 'easeInOut' } }}
    >
      <div className="relative flex flex-col items-center">
        {/* Animated Initials Logo */}
        <div className="relative w-28 h-28 flex items-center justify-center rounded-3xl bg-slate-900/60 border border-brand-purple/20 overflow-hidden shadow-2xl">
          {/* Animated Background Gradients */}
          <div className="absolute inset-0 bg-gradient-to-tr from-brand-purple/10 via-transparent to-brand-cyan/10 animate-pulse" />
          
          <motion.div
            className="text-4xl font-display font-extrabold tracking-wider bg-clip-text text-transparent bg-gradient-to-r from-brand-purple via-brand-blue to-brand-cyan"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: [0.8, 1.1, 1], opacity: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            MK
          </motion.div>
          
          {/* Outer Rotating Edge Line */}
          <div className="absolute inset-0 border border-t-brand-cyan border-r-transparent border-b-brand-purple border-l-transparent rounded-3xl animate-spin-slow opacity-60" />
        </div>

        {/* Counter Display */}
        <div className="mt-8 text-center">
          <motion.div
            className="text-3xl font-display font-semibold tracking-widest text-slate-100"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            {count}%
          </motion.div>
          <p className="text-xs text-dark-textMuted uppercase tracking-widest mt-2">
            Loading System Environment
          </p>
        </div>

        {/* Loading Progress Bar */}
        <div className="w-48 h-1 bg-slate-800 rounded-full mt-6 overflow-hidden relative">
          <motion.div
            className="absolute left-0 top-0 bottom-0 bg-gradient-to-r from-brand-purple via-brand-blue to-brand-cyan"
            style={{ width: `${count}%` }}
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Loader;
