import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Landmark, School } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

// SVG representations for premium school icons
const SchoolLogo: React.FC<{ type: string }> = ({ type }) => {
  switch (type) {
    case 'college':
      return (
        <div className="w-14 h-14 rounded-2xl bg-slate-900 border border-brand-purple/20 flex items-center justify-center text-brand-purple shrink-0 shadow-lg">
          <Landmark size={24} />
        </div>
      );
    case 'puc':
      return (
        <div className="w-14 h-14 rounded-2xl bg-slate-900 border border-brand-blue/20 flex items-center justify-center text-brand-blue shrink-0 shadow-lg">
          <School size={24} />
        </div>
      );
    default:
      return (
        <div className="w-14 h-14 rounded-2xl bg-slate-900 border border-brand-cyan/20 flex items-center justify-center text-brand-cyan shrink-0 shadow-lg">
          <GraduationCap size={24} />
        </div>
      );
  }
};

export const Education: React.FC = () => {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as any } },
  };

  return (
    <section id="education" className="py-24 relative overflow-hidden bg-slate-950/20">
      <div className="absolute left-0 top-1/4 w-72 h-72 rounded-full bg-brand-blue/5 filter blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6">
        {/* Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-white tracking-tight mb-2 uppercase">
            Education
          </h2>
          <p className="text-sm font-mono text-dark-textMuted tracking-wider mt-1 uppercase">
            Academic Milestones & Standards
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-brand-purple via-brand-blue to-brand-cyan mx-auto rounded-full mt-4" />
        </motion.div>

        {/* Education Cards Stack */}
        <motion.div
          className="space-y-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {portfolioData.education.map((item, idx) => {
            const type = idx === 0 ? 'college' : idx === 1 ? 'puc' : 'school';
            const accentColor = idx === 0 ? 'border-brand-purple/20 shadow-brand-purple/5' : idx === 1 ? 'border-brand-blue/20 shadow-brand-blue/5' : 'border-brand-cyan/20 shadow-brand-cyan/5';

            return (
              <motion.div
                key={item.institution}
                variants={cardVariants}
                className={`group p-8 rounded-3xl glass-panel relative flex flex-col md:flex-row items-start gap-6 transition-all duration-300 hover:border-brand-purple/20 hover:shadow-xl ${accentColor}`}
              >
                {/* School Icon */}
                <SchoolLogo type={type} />

                {/* Content */}
                <div className="flex-grow space-y-2">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
                    <h3 className="font-display font-extrabold text-lg sm:text-xl text-white tracking-wide uppercase group-hover:text-brand-cyan transition-colors">
                      {item.institution}
                    </h3>
                    <span className="text-xs font-mono font-bold tracking-wider text-dark-textMuted border border-white/5 px-3 py-1 rounded-full bg-slate-950/40 shrink-0 self-start md:self-auto">
                      {item.duration}
                    </span>
                  </div>

                  <p className="text-sm font-mono text-brand-cyan font-semibold tracking-wide uppercase">
                    {item.degree}
                  </p>

                  <p className="text-xs sm:text-sm text-slate-400 font-sans leading-relaxed">
                    {item.details}
                  </p>
                </div>

                {/* Grade Badge */}
                <div className="w-full md:w-auto mt-4 md:mt-0 flex md:flex-col justify-between items-center bg-slate-950/40 border border-white/5 px-5 py-3 rounded-2xl shrink-0 self-stretch md:self-auto">
                  <span className="text-[10px] font-mono text-dark-textMuted uppercase tracking-widest leading-none mb-1">
                    Grade Score
                  </span>
                  <span className="text-base font-display font-extrabold text-white tracking-wide">
                    {item.score}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
