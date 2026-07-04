import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Code, Brain, Layers, Zap, Database, BarChart3, Settings, Cpu, Shield, BookOpen
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

// Branded SVG technology logo renderer
const BrandedTechLogo: React.FC<{ name: string; size?: number }> = ({ name, size = 20 }) => {
  const lower = name.toLowerCase();
  switch (lower) {
    case 'python':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className="text-amber-400">
          <path d="M11.93 0C5.36 0 5.63 2.85 5.63 2.85V5.7H12.05V6.6H5.63C2.5 6.6 0 9.1 0 12.23V16.81C0 19.93 5.63 19.93 5.63 19.93H6.87V17.08C6.87 13.82 10.11 13.82 10.11 13.82H15.92C19.16 13.82 19.16 10.56 19.16 10.56V6.15C19.16 2.85 11.93 0 11.93 0Z"/>
          <path d="M12.07 24C18.64 24 18.37 21.15 18.37 21.15V18.3H11.95V17.4H18.37C21.5 17.4 24 14.9 24 11.77V7.19C24 4.07 18.37 4.07 18.37 4.07H17.13V6.92C17.13 10.18 13.89 10.18 13.89 10.18H8.08C4.84 10.18 4.84 13.44 4.84 13.44V17.85C4.84 21.15 12.07 24 12.07 24Z" fill="#3B82F6"/>
        </svg>
      );
    case 'react':
      return (
        <svg width={size} height={size} viewBox="-11.5 -10.23174 23 20.46348" fill="none" className="text-cyan-400">
          <circle cx="0" cy="0" r="2.05" fill="currentColor"/>
          <g stroke="currentColor" strokeWidth="1">
            <ellipse rx="11" ry="4.2"/>
            <ellipse rx="11" ry="4.2" transform="rotate(60)"/>
            <ellipse rx="11" ry="4.2" transform="rotate(120)"/>
          </g>
        </svg>
      );
    case 'fastapi':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className="text-emerald-400">
          <path d="M12 0L2 12H11V24L21 12H12V0Z" />
        </svg>
      );
    case 'jwt':
      return <Shield size={size} className="text-orange-500" />;
    case 'mysql':
    case 'sqlite':
    case 'mongodb':
    case 'databases':
      return <Database size={size} className="text-blue-400" />;
    case 'power bi':
    case 'tableau':
      return <BarChart3 size={size} className="text-cyan-400" />;
    case 'git':
    case 'github':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className="text-slate-200 dark:text-slate-300">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
        </svg>
      );
    default:
      return <Cpu size={size} className="text-slate-400" />;
  }
};

// Skill Category Icon mapper
const getCategoryIcon = (category: string) => {
  switch (category.toLowerCase()) {
    case 'programming':
      return <Code className="text-brand-purple animate-pulse" size={20} />;
    case 'ai & machine learning':
    case 'ai & ml':
      return <Brain className="text-brand-blue" size={20} />;
    case 'frontend':
      return <Layers className="text-brand-cyan" size={20} />;
    case 'backend':
      return <Zap className="text-brand-purple" size={20} />;
    case 'databases':
    case 'database':
      return <Database className="text-brand-blue" size={20} />;
    case 'data analytics':
    case 'analytics':
      return <BarChart3 className="text-brand-cyan" size={20} />;
    case 'concepts':
      return <BookOpen className="text-brand-purple" size={20} />;
    default:
      return <Settings className="text-brand-purple" size={20} />;
  }
};

// Custom Hook to manage 3D Card Hover Rotations
const SkillCard: React.FC<{ skill: any; index: number }> = ({ skill, index }) => {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left - width / 2;
    const mouseY = e.clientY - rect.top - height / 2;
    // Cap tilts at max 12 degrees
    const rX = -(mouseY / (height / 2)) * 12;
    const rY = (mouseX / (width / 2)) * 12;
    setTilt({ x: rX, y: rY });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
  };

  return (
    <motion.div
      className="p-[1px] rounded-2xl bg-gradient-to-br from-slate-200/40 via-transparent to-slate-200/10 dark:from-white/10 dark:via-transparent dark:to-white/5 border border-slate-200/50 dark:border-white/5 shadow-md transition-all duration-300 hover:shadow-brand-purple/5"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        perspective: 800,
      }}
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.04 }}
    >
      <motion.div
        className="bg-white/80 dark:bg-[#0E1321]/90 p-5 rounded-[0.95rem] h-full flex flex-col items-start text-left relative overflow-hidden"
        style={{
          transformStyle: 'preserve-3d',
          rotateX: tilt.x,
          rotateY: tilt.y,
        }}
      >
        {/* Hover glow spotlight backdrop */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(124,58,237,0.03),transparent_70%)] dark:bg-[radial-gradient(circle_at_center,rgba(124,58,237,0.02),transparent_70%)] pointer-events-none" />

        {/* Skill Header */}
        <div className="flex items-center gap-3 mb-3 relative z-10">
          <div className="p-2 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-white/5 flex items-center justify-center">
            <BrandedTechLogo name={skill.name} />
          </div>
          <h4 className="font-display font-extrabold text-sm text-slate-800 dark:text-slate-200 tracking-wide">
            {skill.name}
          </h4>
        </div>

        {/* Description */}
        <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed relative z-10">
          {skill.description}
        </p>
      </motion.div>
    </motion.div>
  );
};

export default SkillCard;

export const Skills: React.FC = () => {
  // Mapping the 7 user requested groups exactly
  const customGroups = [
    { category: "Programming", icon: "programming" },
    { category: "AI & Machine Learning", icon: "ai & ml" },
    { category: "Data Analytics", icon: "analytics" },
    { category: "Frontend", icon: "frontend" },
    { category: "Backend", icon: "backend" },
    { category: "Databases", icon: "database" },
    { category: "Tools", icon: "tools" },
    { category: "Concepts", icon: "concepts" }
  ];

  const getSkillsByCategory = (category: string) => {
    // Find database values (supporting slight naming differences)
    const normalized = category.toLowerCase().replace('databases', 'database').replace('ai & machine learning', 'ai & ml');
    const matched = portfolioData.skills.find(cat => cat.category.toLowerCase() === normalized);
    return matched ? matched.skills : [];
  };

  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-slate-50/30 dark:bg-slate-950/10 transition-colors duration-300">
      <div className="absolute left-1/4 top-1/3 w-80 h-80 rounded-full bg-brand-purple/5 filter blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-slate-900 dark:text-white tracking-tight mb-2 uppercase">
            Technical Stack
          </h2>
          <p className="text-sm font-mono text-slate-500 dark:text-dark-textMuted tracking-wider mt-1 uppercase">
            Languages, Frameworks, & Specialized Tools
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-brand-purple via-brand-blue to-brand-cyan mx-auto rounded-full mt-4" />
        </motion.div>

        {/* Stack Groups List */}
        <div className="space-y-16">
          {customGroups.map((group, groupIdx) => {
            const skills = getSkillsByCategory(group.category);
            if (skills.length === 0) return null;

            return (
              <motion.div
                key={group.category}
                className="space-y-6 text-left"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-120px' }}
                transition={{ duration: 0.5, delay: groupIdx * 0.05 }}
              >
                {/* Category Header */}
                <div className="flex items-center gap-3 border-b border-slate-200 dark:border-white/5 pb-3">
                  <div className="p-2 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/10 flex items-center justify-center">
                    {getCategoryIcon(group.category)}
                  </div>
                  <div>
                    <h3 className="font-display font-extrabold text-base text-slate-800 dark:text-white tracking-wider uppercase">
                      {group.category}
                    </h3>
                  </div>
                </div>

                {/* Sub-grid of Interactive Skills Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                  {skills.map((skill, skillIdx) => (
                    <SkillCard key={skill.name} skill={skill} index={skillIdx} />
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
