import React from 'react';
import { motion } from 'framer-motion';
import { X, ExternalLink, ShieldCheck, Zap, Lightbulb, Compass } from 'lucide-react';
import type { Project } from '../data/portfolioData';

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop overlay */}
      <motion.div
        className="absolute inset-0 bg-dark-bg/85 backdrop-blur-md"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      />

      {/* Modal Container */}
      <motion.div
        className="relative w-full max-w-4xl max-h-[90vh] bg-[#0E1321] border border-white/10 rounded-3xl overflow-y-auto z-10 shadow-2xl no-scrollbar"
        initial={{ opacity: 0, scale: 0.95, y: 30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 30 }}
        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
      >
        {/* Glow Header Background */}
        <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-brand-purple/10 to-transparent pointer-events-none" />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-xl bg-slate-900 border border-white/10 text-dark-textMuted hover:text-white transition-all z-20"
        >
          <X size={20} />
        </button>

        {/* Modal content */}
        <div className="p-8 md:p-10">
          {/* Header */}
          <div className="mb-8">
            <span className="inline-block px-3.5 py-1.5 rounded-full bg-brand-purple/10 border border-brand-purple/20 text-xs font-mono font-bold tracking-wider text-brand-purple uppercase mb-4">
              {project.tagline}
            </span>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-display font-extrabold text-white tracking-tight leading-tight">
              {project.title}
            </h3>
            <p className="text-slate-400 mt-3 text-base leading-relaxed max-w-2xl font-sans">
              {project.longDescription}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Left Column: Details */}
            <div className="lg:col-span-8 space-y-8">
              {/* Problem vs Solution */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-6 rounded-2xl bg-red-950/10 border border-red-500/10 relative overflow-hidden">
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-red-500/40" />
                  <h4 className="text-xs font-mono font-bold tracking-widest text-red-400 uppercase mb-2">
                    Problem Statement
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-300 font-sans leading-relaxed">
                    {project.problemStatement}
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-emerald-950/10 border border-emerald-500/10 relative overflow-hidden">
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-emerald-500/40" />
                  <h4 className="text-xs font-mono font-bold tracking-widest text-emerald-400 uppercase mb-2">
                    Engineered Solution
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-300 font-sans leading-relaxed">
                    {project.solution}
                  </p>
                </div>
              </div>

              {/* Challenges & Solutions */}
              <div className="p-6 rounded-2xl bg-amber-950/10 border border-amber-500/10 relative overflow-hidden">
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-amber-500/40" />
                <h4 className="text-xs font-mono font-bold tracking-widest text-amber-400 uppercase mb-2 flex items-center gap-1.5">
                  <Zap size={14} />
                  <span>Technical Challenges & Resolution</span>
                </h4>
                <div className="space-y-3 font-sans text-xs sm:text-sm text-slate-300 leading-relaxed">
                  <div>
                    <span className="font-bold text-slate-100">Challenge:</span> {project.challenges}
                  </div>
                  <div>
                    <span className="font-bold text-brand-cyan">Solution Applied:</span> {project.solutions}
                  </div>
                </div>
              </div>

              {/* Key Features */}
              <div>
                <h4 className="text-sm font-mono font-bold tracking-widest text-white uppercase mb-4 flex items-center gap-2">
                  <ShieldCheck size={16} className="text-brand-cyan" />
                  <span>Core Implementation Features</span>
                </h4>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 pl-1 font-sans text-xs sm:text-sm text-slate-300">
                  {project.keyFeatures.map((feat) => (
                    <li key={feat} className="flex gap-2 items-start">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-cyan mt-1.5 shrink-0" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Future Scope */}
              <div className="p-6 rounded-2xl bg-slate-900/30 border border-white/5">
                <h4 className="text-sm font-mono font-bold tracking-widest text-white uppercase mb-4 flex items-center gap-2">
                  <Compass size={16} className="text-brand-purple" />
                  <span>Future Roadmap</span>
                </h4>
                <ul className="space-y-2 text-xs sm:text-sm text-slate-300 font-sans">
                  {project.futureScope.map((scope) => (
                    <li key={scope} className="flex gap-2 items-center">
                      <span className="text-brand-purple">→</span>
                      <span>{scope}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right Column: Sidebar Specs */}
            <div className="lg:col-span-4 space-y-6">
              {/* Architecture flow */}
              <div className="p-6 rounded-2xl bg-slate-900/40 border border-white/5">
                <h4 className="text-xs font-mono font-bold tracking-widest text-white uppercase mb-4 flex items-center gap-1.5">
                  <Lightbulb size={14} className="text-brand-blue" />
                  <span>Architecture</span>
                </h4>
                <div className="space-y-4">
                  {project.architecture.map((arch, idx) => (
                    <div key={arch} className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-full bg-slate-900 border border-white/10 flex items-center justify-center text-[10px] font-mono font-bold text-dark-textMuted shrink-0">
                        0{idx + 1}
                      </div>
                      <span className="text-xs text-slate-300 font-sans leading-tight">
                        {arch}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tech Stack list */}
              <div className="p-6 rounded-2xl bg-slate-900/40 border border-white/5">
                <h4 className="text-xs font-mono font-bold tracking-widest text-white uppercase mb-4">
                  Technologies Used
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-lg bg-slate-950 border border-white/5 text-[10px] font-mono font-semibold tracking-wide text-brand-cyan"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-3">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-slate-900 border border-white/10 hover:border-white/20 text-slate-200 hover:text-white font-semibold text-sm transition-all flex items-center"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                  <span>Explore Repository</span>
                </a>
                
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-gradient-to-r from-brand-purple to-brand-blue text-white font-semibold text-sm hover:brightness-115 transition-all shadow-md shadow-brand-purple/10"
                  >
                    <ExternalLink size={16} />
                    <span>Launch Demo</span>
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ProjectModal;
