import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Target, Award, ArrowUpRight } from 'lucide-react';

export const Achievements: React.FC = () => {
  return (
    <section id="achievements" className="py-24 relative overflow-hidden bg-slate-950/10">
      <div className="absolute left-0 bottom-1/4 w-80 h-80 rounded-full bg-brand-cyan/5 filter blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-white tracking-tight mb-2 uppercase">
            Achievements
          </h2>
          <p className="text-sm font-mono text-dark-textMuted tracking-wider mt-1 uppercase">
            Milestones & Project Merits
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-brand-purple via-brand-blue to-brand-cyan mx-auto rounded-full mt-4" />
        </motion.div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          {/* Sclerathon Hackathon Card */}
          <motion.div
            className="group p-8 rounded-3xl glass-panel relative flex flex-col justify-between overflow-hidden border border-white/10 hover:border-brand-purple/20 transition-all duration-300"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Background glowing circle */}
            <div className="absolute -right-10 -top-10 w-32 h-32 rounded-full bg-brand-purple/10 blur-2xl group-hover:scale-150 transition-transform duration-500 pointer-events-none" />

            <div>
              {/* Icon & Trophy Tag */}
              <div className="flex justify-between items-center mb-6">
                <div className="p-3.5 rounded-2xl bg-slate-900 border border-white/10 text-amber-400 shadow-md">
                  <Trophy size={24} />
                </div>
                <span className="text-[10px] font-mono font-bold text-brand-purple border border-brand-purple/20 px-3.5 py-1 rounded-full bg-brand-purple/5 uppercase tracking-widest">
                  Hackathon Winner
                </span>
              </div>

              {/* Title */}
              <h3 className="font-display font-extrabold text-lg sm:text-xl text-white tracking-wide uppercase group-hover:text-brand-purple transition-colors mb-4">
                Sclerathon Hackathon
              </h3>

              {/* Details list */}
              <ul className="space-y-3 font-sans text-xs sm:text-sm text-slate-300 leading-relaxed">
                <li className="flex gap-2.5 items-start">
                  <span className="text-brand-purple">✓</span>
                  <span>Developed an automated **AI Call Agent** with a four-member team.</span>
                </li>
                <li className="flex gap-2.5 items-start">
                  <span className="text-brand-purple">✓</span>
                  <span>Engineered intelligent customer query handling and natural language intent parsing.</span>
                </li>
                <li className="flex gap-2.5 items-start">
                  <span className="text-brand-purple">✓</span>
                  <span>Integrated dynamic redirection workflows to route calls based on ticket urgency.</span>
                </li>
              </ul>
            </div>

            {/* Achievement Footer */}
            <div className="mt-8 border-t border-white/5 pt-5 flex items-center justify-between text-xs font-mono text-brand-cyan">
              <span className="uppercase tracking-widest font-semibold">AI Call Agent System</span>
              <Award size={18} />
            </div>
          </motion.div>

          {/* Future Focus / Ambition Card */}
          <motion.div
            className="group p-8 rounded-3xl glass-panel relative flex flex-col justify-between overflow-hidden border border-white/10 hover:border-brand-cyan/20 transition-all duration-300"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Background glowing circle */}
            <div className="absolute -right-10 -top-10 w-32 h-32 rounded-full bg-brand-cyan/10 blur-2xl group-hover:scale-150 transition-transform duration-500 pointer-events-none" />

            <div>
              {/* Icon & Goal Tag */}
              <div className="flex justify-between items-center mb-6">
                <div className="p-3.5 rounded-2xl bg-slate-900 border border-white/10 text-brand-cyan shadow-md">
                  <Target size={24} />
                </div>
                <span className="text-[10px] font-mono font-bold text-brand-cyan border border-brand-cyan/20 px-3.5 py-1 rounded-full bg-brand-cyan/5 uppercase tracking-widest">
                  Core Ambition
                </span>
              </div>

              {/* Title */}
              <h3 className="font-display font-extrabold text-lg sm:text-xl text-white tracking-wide uppercase group-hover:text-brand-cyan transition-colors mb-4">
                Research & Innovation
              </h3>

              {/* Details list */}
              <ul className="space-y-3 font-sans text-xs sm:text-sm text-slate-300 leading-relaxed">
                <li className="flex gap-2.5 items-start">
                  <span className="text-brand-cyan">→</span>
                  <span>Interested in designing autonomous multi-agent networks that coordinate on workflow pipelines.</span>
                </li>
                <li className="flex gap-2.5 items-start">
                  <span className="text-brand-cyan">→</span>
                  <span>Applying predictive analytics to solve structural business issues and forecast growth trends.</span>
                </li>
                <li className="flex gap-2.5 items-start">
                  <span className="text-brand-cyan">→</span>
                  <span>Striving to bridge the gap between machine intelligence pipelines and scalable consumer-facing products.</span>
                </li>
              </ul>
            </div>

            {/* Achievement Footer */}
            <div className="mt-8 border-t border-white/5 pt-5 flex items-center justify-between text-xs font-mono text-dark-textMuted">
              <span className="uppercase tracking-widest font-semibold">Continuous Evolution</span>
              <ArrowUpRight size={18} />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
