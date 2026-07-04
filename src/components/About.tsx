import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, Brain, FolderGit2, CalendarRange, Trophy, Star } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const About: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 25, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as any } },
  };

  const getMetricIcon = (label: string) => {
    switch (label.toLowerCase()) {
      case 'cgpa':
        return <Award className="text-brand-purple" size={20} />;
      case 'graduation':
        return <CalendarRange className="text-brand-cyan" size={20} />;
      case 'focus area':
        return <Brain className="text-brand-blue" size={20} />;
      case 'projects completed':
        return <FolderGit2 className="text-brand-purple" size={20} />;
      case 'certifications':
        return <GraduationCap className="text-brand-cyan" size={20} />;
      case 'hackathons':
        return <Trophy className="text-brand-blue" size={20} />;
      default:
        return <Star className="text-brand-purple" size={20} />;
    }
  };

  const getMetricColor = (label: string) => {
    switch (label.toLowerCase()) {
      case 'cgpa':
      case 'projects completed':
        return 'hover:border-brand-purple/40 dark:hover:border-brand-purple/40 hover:shadow-brand-purple/5';
      case 'graduation':
      case 'certifications':
        return 'hover:border-brand-cyan/40 dark:hover:border-brand-cyan/40 hover:shadow-brand-cyan/5';
      default:
        return 'hover:border-brand-blue/40 dark:hover:border-brand-blue/40 hover:shadow-brand-blue/5';
    }
  };

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background radial glows */}
      <div className="absolute right-0 top-1/4 w-80 h-80 rounded-full bg-brand-cyan/5 filter blur-3xl pointer-events-none" />
      <div className="absolute left-0 bottom-1/4 w-80 h-80 rounded-full bg-brand-purple/5 filter blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Title */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-slate-900 dark:text-white tracking-tight mb-2 uppercase">
            Professional Profile
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-brand-purple via-brand-blue to-brand-cyan mx-auto rounded-full mt-4" />
        </motion.div>

        {/* Two Column Grid */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-150px' }}
        >
          {/* Left Column: Introductions */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <motion.div variants={itemVariants} className="space-y-4">
              <h3 className="text-xl sm:text-2xl font-display font-extrabold text-slate-800 dark:text-white tracking-wide">
                Mahesh Gajanan Kamat
              </h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed font-sans text-sm sm:text-base">
                {portfolioData.personalInfo.summary}
              </p>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed font-sans text-sm sm:text-base">
                My passion is grounded in the convergence of Artificial Intelligence, Machine Learning, Data Analytics, and Full Stack Development. I love extracting complex patterns from datasets, generating predictive forecasts, and building highly scalable, modern architectures to display those insights interactively.
              </p>
            </motion.div>

            {/* Career Objective block */}
            <motion.div
              variants={itemVariants}
              className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-900/30 border border-slate-200 dark:border-white/5 relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 bottom-0 w-[3px] bg-gradient-to-b from-brand-purple to-brand-cyan" />
              <h4 className="text-[10px] font-mono font-bold tracking-widest text-brand-purple dark:text-brand-cyan uppercase mb-2">
                Career Objective
              </h4>
              <p className="text-slate-700 dark:text-slate-300 font-sans italic text-xs sm:text-sm leading-relaxed">
                "{portfolioData.personalInfo.objective}"
              </p>
            </motion.div>
          </div>

          {/* Right Column: Statistics grid (6 Cards) */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-4">
            {portfolioData.aboutMetrics.map((metric) => (
              <motion.div
                key={metric.label}
                variants={itemVariants}
                className={`group p-5 rounded-2xl glass-panel relative flex flex-col items-start gap-4 transition-all duration-300 hover:-translate-y-1 ${getMetricColor(
                  metric.label
                )}`}
              >
                {/* Glow Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />

                {/* Icon Circle */}
                <div className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-white/10 flex items-center justify-center">
                  {getMetricIcon(metric.label)}
                </div>

                {/* Metrics detail */}
                <div>
                  <div className="text-xl sm:text-2xl font-display font-extrabold text-slate-800 dark:text-white tracking-tight leading-none mb-1">
                    {metric.value}
                  </div>
                  <div className="text-[9px] text-slate-500 dark:text-dark-textMuted font-mono uppercase tracking-widest font-bold">
                    {metric.label}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Education Timeline Below (Animated) */}
        <motion.div
          className="border-t border-slate-200 dark:border-white/5 pt-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-100px' }}
        >
          <div className="text-left mb-10 flex items-center gap-3">
            <div className="p-2 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-white/10 text-brand-purple">
              <GraduationCap size={20} />
            </div>
            <div>
              <h3 className="text-lg font-display font-extrabold text-slate-800 dark:text-white uppercase tracking-wider">
                Education Journey
              </h3>
              <p className="text-[10px] font-mono text-slate-500 dark:text-dark-textMuted uppercase tracking-widest">
                Academic Affiliations & Qualifications
              </p>
            </div>
          </div>

          {/* Education vertical pathway */}
          <div className="relative pl-6 border-l border-slate-200 dark:border-white/10 ml-4 space-y-8 text-left">
            {portfolioData.education.map((edu, idx) => (
              <motion.div
                key={edu.institution}
                className="relative group/edu"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
              >
                {/* Bullet dot */}
                <div className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full border-2 border-brand-purple bg-white dark:bg-[#0B0F19] group-hover/edu:scale-110 transition-transform" />

                {/* Card wrapper */}
                <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-900/30 border border-slate-200 dark:border-white/5 hover:border-slate-300 dark:hover:border-white/10 transition-all duration-300">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                    <span className="text-xs font-mono font-bold text-brand-purple dark:text-brand-cyan">
                      {edu.duration}
                    </span>
                    <span className="inline-block self-start px-2.5 py-0.5 rounded bg-brand-purple/10 text-brand-purple dark:text-brand-cyan text-[10px] font-mono font-bold">
                      {edu.score}
                    </span>
                  </div>

                  <h4 className="font-display font-extrabold text-slate-800 dark:text-white text-base">
                    {edu.degree}
                  </h4>
                  <p className="text-xs font-medium text-slate-500 dark:text-dark-textMuted mt-0.5">
                    {edu.institution}
                  </p>
                  <p className="text-xs text-slate-600 dark:text-slate-400 font-sans mt-2.5 leading-relaxed">
                    {edu.details}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default About;
