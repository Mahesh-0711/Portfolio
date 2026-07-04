import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Code2, GitMerge, FileSpreadsheet, Award, FolderGit } from 'lucide-react';

interface StatCounterProps {
  value: number;
  suffix?: string;
  duration?: number;
}

const StatCounter: React.FC<StatCounterProps> = ({ value, suffix = '', duration = 1200 }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement | null>(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const end = value;
    if (start === end) return;

    const totalMiliseconds = duration;
    const incrementTime = Math.max(Math.floor(totalMiliseconds / end), 20);

    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start >= end) {
        clearInterval(timer);
        setCount(end);
      }
    }, incrementTime);

    return () => clearInterval(timer);
  }, [isInView, value, duration]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
};

export const StatsDashboard: React.FC = () => {
  const statsList = [
    { label: 'Projects Completed', val: 3, suffix: '', icon: <FolderGit size={22} className="text-brand-purple" /> },
    { label: 'Programming Languages', val: 4, suffix: '', icon: <Code2 size={22} className="text-brand-blue" /> },
    { label: 'Certifications', val: 6, suffix: '', icon: <Award size={22} className="text-brand-cyan" /> },
    { label: 'Technologies & Tools', val: 3, suffix: '', icon: <FileSpreadsheet size={22} className="text-brand-purple" /> },
    { label: 'GitHub Repositories', val: 3, suffix: '', icon: <GitMerge size={22} className="text-brand-blue" /> }
  ];

  return (
    <section className="py-16 relative overflow-hidden bg-slate-950/40 border-y border-white/5">
      {/* Background spotlight */}
      <div className="absolute inset-0 bg-radial-gradient(ellipse_at_center,rgba(124,58,237,0.03),transparent_70%) pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          {statsList.map((stat, idx) => (
            <motion.div
              key={stat.label}
              className="flex flex-col items-center text-center p-4 rounded-2xl bg-slate-900/10 border border-white/5 relative overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
            >
              {/* Stat Icon */}
              <div className="p-3 rounded-xl bg-slate-900 border border-white/10 mb-4 shadow-inner">
                {stat.icon}
              </div>

              {/* Number */}
              <div className="text-3xl sm:text-4xl font-display font-extrabold text-white tracking-tight leading-none mb-2">
                <StatCounter value={stat.val} suffix={stat.suffix} />
              </div>

              {/* Label */}
              <div className="text-[10px] text-dark-textMuted font-mono uppercase tracking-wider font-semibold max-w-[120px]">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsDashboard;
