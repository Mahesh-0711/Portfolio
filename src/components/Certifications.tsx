import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, X } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import type { CertificationItem } from '../data/portfolioData';

// Stylized Org Logo helper to replace empty icons with premium vector badges
const OrgLogoBadge: React.FC<{ provider: string }> = ({ provider }) => {
  const p = provider.toLowerCase();
  
  if (p.includes('nptel')) {
    return (
      <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-brand-purple/20 to-brand-purple/10 border border-brand-purple/30 flex items-center justify-center font-display font-extrabold text-sm text-brand-purple shrink-0">
        NP
      </div>
    );
  }
  if (p.includes('mongodb')) {
    return (
      <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-emerald-500/20 to-emerald-500/10 border border-emerald-500/30 flex items-center justify-center font-display font-extrabold text-sm text-emerald-400 shrink-0">
        MD
      </div>
    );
  }
  if (p.includes('infosys')) {
    return (
      <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-brand-blue/20 to-brand-blue/10 border border-brand-blue/30 flex items-center justify-center font-display font-extrabold text-sm text-brand-blue shrink-0">
        INF
      </div>
    );
  }
  return (
    <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-brand-cyan/20 to-brand-cyan/10 border border-brand-cyan/30 flex items-center justify-center font-display font-extrabold text-sm text-brand-cyan shrink-0">
      DM
    </div>
  );
};

export const Certifications: React.FC = () => {
  const [selectedCertificate, setSelectedCertificate] = useState<CertificationItem | null>(null);

  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setSelectedCertificate(null);
    };

    window.addEventListener('keydown', closeOnEscape);
    return () => window.removeEventListener('keydown', closeOnEscape);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' as any } },
  };

  return (
    <section id="certifications" className="py-24 relative overflow-hidden bg-slate-50/10 dark:bg-slate-950/10 transition-colors duration-300">
      <div className="absolute right-0 bottom-1/4 w-80 h-80 rounded-full bg-brand-purple/5 filter blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-slate-900 dark:text-white tracking-tight mb-2 uppercase">
            Professional Credentials
          </h2>
          <p className="text-sm font-mono text-slate-500 dark:text-dark-textMuted tracking-wider uppercase mt-1">
            Verified Certifications & Technical Badges
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-brand-purple via-brand-blue to-brand-cyan mx-auto rounded-full mt-4" />
        </motion.div>

        {/* Responsive Grid with Staggered Animations */}
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-120px' }}
        >
          {portfolioData.certifications.map((cert) => (
            <motion.div
              key={cert.title}
              variants={cardVariants}
              className="p-[1px] rounded-2xl bg-gradient-to-br from-slate-200 dark:from-white/10 to-transparent dark:to-transparent border border-slate-200 dark:border-white/5 hover:border-brand-purple/20 dark:hover:border-brand-purple/25 transition-all duration-300 group hover:-translate-y-1 shadow-lg"
            >
              <button
                type="button"
                onClick={() => cert.imageUrl && setSelectedCertificate(cert)}
                className="bg-white/80 dark:bg-[#0E1321]/95 rounded-[0.95rem] p-6 h-52 w-full flex flex-col justify-between items-start relative overflow-hidden text-left cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-cyan"
                aria-label={`View ${cert.title} certificate`}
              >
                {/* Spotlight background */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(124,58,237,0.02),transparent_70%)] dark:bg-[radial-gradient(circle_at_center,rgba(124,58,237,0.01),transparent_70%)] pointer-events-none" />

                <div className="w-full">
                  {/* Top Header info (Icon & Date) */}
                  <div className="flex justify-between items-start w-full mb-4">
                    <OrgLogoBadge provider={cert.provider} />
                    <span className="text-[10px] font-mono font-bold text-slate-400 dark:text-dark-textMuted bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-white/5 px-2.5 py-1 rounded-lg">
                      {cert.date}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="font-display font-extrabold text-sm sm:text-base text-slate-800 dark:text-white tracking-wide uppercase line-clamp-2 leading-snug text-left group-hover:text-brand-purple dark:group-hover:text-brand-cyan transition-colors">
                    {cert.title}
                  </h3>
                </div>

                {/* Footer details */}
                <div className="w-full flex items-center justify-between border-t border-slate-200 dark:border-white/5 pt-4 shrink-0">
                  <div className="flex flex-col items-start">
                    <span className="text-[10px] text-slate-400 dark:text-dark-textMuted font-mono uppercase tracking-widest font-bold">
                      {cert.provider}
                    </span>
                    <span className="text-[9px] text-slate-500 dark:text-slate-400 font-sans mt-0.5">
                      {cert.badgeType}
                    </span>
                  </div>
                  
                  <span className="p-2 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-white/5 text-slate-600 dark:text-dark-textMuted group-hover:text-brand-purple dark:group-hover:text-white group-hover:border-brand-purple/20 dark:group-hover:border-brand-cyan/20 transition-all flex items-center justify-center shrink-0 shadow-sm" title="View Certificate">
                    <ExternalLink size={14} />
                  </span>
                </div>
              </button>
            </motion.div>
          ))}
        </motion.div>

      </div>

      {selectedCertificate?.imageUrl && (
        <motion.div
          className="fixed inset-0 z-[100] bg-slate-950/85 backdrop-blur-sm p-4 sm:p-8 flex items-center justify-center"
          role="dialog"
          aria-modal="true"
          aria-label={`${selectedCertificate.title} certificate`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setSelectedCertificate(null)}
        >
          <motion.div
            className="relative max-w-6xl w-full max-h-full"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setSelectedCertificate(null)}
              className="absolute -top-3 -right-2 sm:-right-3 z-10 p-2 rounded-full bg-white text-slate-900 shadow-lg hover:bg-slate-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-cyan"
              aria-label="Close certificate"
            >
              <X size={20} />
            </button>
            <img
              src={selectedCertificate.imageUrl}
              alt={`${selectedCertificate.title} certificate`}
              className="w-full max-h-[85vh] object-contain rounded-xl bg-white shadow-2xl"
            />
          </motion.div>
        </motion.div>
      )}
    </section>
  );
};

export default Certifications;
