import React from 'react';
import { motion } from 'framer-motion';
import { School, Code, Database, Brain, TrendingUp, Briefcase } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const Timeline: React.FC = () => {
  const getTimelineIcon = (iconName: string) => {
    switch (iconName) {
      case 'school':
        return <School size={16} className="text-brand-purple" />;
      case 'code':
        return <Code size={16} className="text-brand-blue" />;
      case 'database':
        return <Database size={16} className="text-brand-cyan" />;
      case 'brain':
        return <Brain size={16} className="text-brand-purple" />;
      case 'trending-up':
        return <TrendingUp size={16} className="text-brand-cyan" />;
      default:
        return <Briefcase size={16} className="text-brand-blue" />;
    }
  };

  const getTimelineColors = (iconName: string) => {
    switch (iconName) {
      case 'school':
      case 'brain':
        return 'border-brand-purple/20 bg-brand-purple/10 text-brand-purple';
      case 'code':
      case 'briefcase':
        return 'border-brand-blue/20 bg-brand-blue/10 text-brand-blue';
      default:
        return 'border-brand-cyan/20 bg-brand-cyan/10 text-brand-cyan';
    }
  };

  return (
    <section id="timeline" className="py-24 relative overflow-hidden">
      <div className="absolute right-0 top-1/2 w-72 h-72 rounded-full bg-brand-cyan/5 filter blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-white tracking-tight mb-2 uppercase">
            Milestones & Progression
          </h2>
          <p className="text-sm font-mono text-dark-textMuted tracking-wider mt-1 uppercase">
            A chronological timeline of my academic and technical journey
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-brand-purple via-brand-blue to-brand-cyan mx-auto rounded-full mt-4" />
        </motion.div>

        {/* Simplified Left-Aligned Timeline */}
        <div className="relative pl-8 border-l border-white/10 ml-4 md:ml-6 space-y-12">
          {/* Timeline central line gradient fade */}
          <div className="absolute top-0 bottom-0 left-0 w-[1px] bg-gradient-to-b from-brand-purple via-brand-blue to-brand-cyan opacity-40 pointer-events-none" />

          {portfolioData.journeyTimeline.map((event, idx) => (
            <motion.div
              key={event.title}
              className="relative group"
              initial={{ opacity: 0, x: -15 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
            >
              {/* Timeline dot */}
              <div
                className={`absolute -left-[45px] top-1.5 w-7 h-7 rounded-full border flex items-center justify-center z-10 bg-[#0B0F19] ${getTimelineColors(
                  event.iconName
                )}`}
              >
                {getTimelineIcon(event.iconName)}
              </div>

              {/* Event Content card (flat, minimal) */}
              <div className="p-6 rounded-2xl bg-slate-900/30 border border-white/5 relative overflow-hidden transition-all duration-300 hover:border-white/10">
                {/* Accent line */}
                <div className="absolute top-0 bottom-0 left-0 w-[2px] bg-gradient-to-b from-brand-purple to-brand-cyan opacity-30 group-hover:opacity-100 transition-opacity" />

                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                  <span className="inline-block px-3 py-1 rounded-lg bg-slate-950 border border-white/5 text-[10px] font-mono font-bold tracking-wider text-brand-cyan">
                    {event.year}
                  </span>
                </div>

                <h3 className="font-display font-extrabold text-sm sm:text-base text-white tracking-wide uppercase group-hover:text-brand-cyan transition-colors">
                  {event.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 font-sans leading-relaxed mt-2">
                  {event.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;
