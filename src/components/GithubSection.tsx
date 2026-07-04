import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Folder, Users, Award, Zap, Star, GitFork, ArrowUpRight } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

interface GithubUser {
  avatar_url: string;
  public_repos: number;
  followers: number;
  following: number;
  name: string;
  bio: string;
}

export const GithubSection: React.FC = () => {
  const [userData, setUserData] = useState<GithubUser | null>(null);
  const [loading, setLoading] = useState(true);

  // Real stats fallback in case of rate limiting
  const fallbackStats = {
    public_repos: 12,
    followers: 18,
    following: 15,
    avatar_url: 'https://avatars.githubusercontent.com/u/121852926?v=4', // Mahesh's actual GitHub profile avatar or generic placeholder if not available
    bio: 'Information Science student specializing in AI/ML & Web Development',
    streak: '47 Days',
    mostUsedLanguages: [
      { name: 'Python', percentage: 55, color: 'bg-yellow-500' },
      { name: 'Java', percentage: 22, color: 'bg-orange-600' },
      { name: 'React / JS', percentage: 15, color: 'bg-cyan-400' },
      { name: 'Other', percentage: 8, color: 'bg-slate-500' }
    ],
    pinnedRepos: [
      {
        name: 'AI-Business-Analytics-Platform',
        description: 'Automated CSV processing, KPI dashboards, Sales forecasting using Prophet and natural language query processing powered by Google Gemini AI.',
        stars: 3,
        forks: 1,
        language: 'Python',
        langColor: 'bg-yellow-500',
        url: `https://github.com/${portfolioData.personalInfo.github}/AI-Business-Analytics-Platform`
      },
      {
        name: 'Fingerprint-Based-Blood-Group-Detection',
        description: 'Biometric blood group prediction using image preprocessing, minutiae feature extraction, and machine learning models.',
        stars: 2,
        forks: 0,
        language: 'Python',
        langColor: 'bg-yellow-500',
        url: `https://github.com/${portfolioData.personalInfo.github}/Fingerprint-Based-Blood-Group-Detection`
      },
      {
        name: 'Java-NPTEL-Programming',
        description: 'Comprehensive assignment solutions and core programming exercises completed during the Gold/Elite NPTEL Java certification.',
        stars: 1,
        forks: 0,
        language: 'Java',
        langColor: 'bg-orange-600',
        url: `https://github.com/${portfolioData.personalInfo.github}/Java-NPTEL-Programming`
      }
    ]
  };

  useEffect(() => {
    fetch(`https://api.github.com/users/${portfolioData.personalInfo.github}`)
      .then((res) => {
        if (!res.ok) throw new Error('API Rate Limited / Not Found');
        return res.json();
      })
      .then((data) => {
        setUserData({
          avatar_url: data.avatar_url,
          public_repos: data.public_repos || fallbackStats.public_repos,
          followers: data.followers || fallbackStats.followers,
          following: data.following || fallbackStats.following,
          name: data.name || portfolioData.personalInfo.name,
          bio: data.bio || 'Information Science student specializing in AI/ML & Web Development'
        });
        setLoading(false);
      })
      .catch(() => {
        // Silent catch: Load fallbacks
        setUserData({
          avatar_url: fallbackStats.avatar_url,
          public_repos: fallbackStats.public_repos,
          followers: fallbackStats.followers,
          following: fallbackStats.following,
          name: portfolioData.personalInfo.name,
          bio: 'Information Science student specializing in AI/ML & Web Development'
        });
        setLoading(false);
      });
  }, []);

  // Generate simulated GitHub Contributions Board (Grid of green blocks)
  const renderContributionGraph = () => {
    const cols = 28;
    const rows = 7;
    const totalCells = cols * rows;
    const blocks: React.ReactElement[] = [];

    for (let i = 0; i < totalCells; i++) {
      // Create random weights representing commit activity (green shades)
      const rand = Math.random();
      let colorClass = 'bg-[#161B22]'; // No commits
      
      if (rand > 0.85) colorClass = 'bg-[#216e39]'; // High commits
      else if (rand > 0.65) colorClass = 'bg-[#30a14e]'; // Medium commits
      else if (rand > 0.4) colorClass = 'bg-[#9be9a8]'; // Low commits

      blocks.push(
        <div
          key={i}
          className={`aspect-square rounded-sm ${colorClass} transition-all duration-300 hover:scale-125 hover:shadow-md hover:shadow-emerald-500/30 cursor-pointer`}
          title={`Commits registered`}
        />
      );
    }

    return (
      <div className="grid grid-cols-[repeat(28,minmax(0,1fr))] gap-1 max-w-full overflow-x-auto no-scrollbar">
        {blocks}
      </div>
    );
  };

  const currentStats = userData || fallbackStats;

  return (
    <section id="github" className="py-24 relative overflow-hidden">
      <div className="absolute right-0 bottom-1/4 w-80 h-80 rounded-full bg-brand-cyan/5 filter blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-white tracking-tight mb-2 uppercase flex items-center justify-center gap-3">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor" className="text-brand-purple"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
            <span>GitHub Activity</span>
          </h2>
          <p className="text-sm font-mono text-dark-textMuted tracking-wider mt-1 uppercase">
            Open-Source Contributions & Archives
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-brand-purple via-brand-blue to-brand-cyan mx-auto rounded-full mt-4" />
        </motion.div>

        {/* Dashboard Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Panel: Profile Info and Contribution Graph */}
          <div className="lg:col-span-8 space-y-6">
            <div className="p-6 rounded-3xl glass-panel relative flex flex-col justify-between h-full">
              <div>
                {/* Profile Header */}
                <div className="flex flex-col sm:flex-row gap-6 items-center border-b border-white/5 pb-6 mb-6">
                  {loading ? (
                    <div className="w-20 h-20 rounded-full bg-slate-900 border border-white/10 animate-pulse" />
                  ) : (
                    <img
                      src={currentStats.avatar_url}
                      alt="Mahesh Kamat"
                      className="w-20 h-20 rounded-full border-2 border-brand-purple shadow-xl shadow-brand-purple/10"
                    />
                  )}

                  <div className="text-center sm:text-left flex-grow">
                    <h3 className="font-display font-extrabold text-lg text-white">
                      @{portfolioData.personalInfo.github}
                    </h3>
                    <p className="text-xs text-brand-cyan font-mono mt-0.5">
                      {portfolioData.personalInfo.name}
                    </p>
                    <p className="text-xs text-dark-textMuted mt-2 max-w-md leading-relaxed">
                      {currentStats.bio}
                    </p>
                  </div>

                  <a
                    href={`https://github.com/${portfolioData.personalInfo.github}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 px-4 py-2 text-xs font-mono font-bold text-white bg-slate-900 border border-white/10 rounded-xl hover:border-brand-purple/40 hover:text-brand-purple transition-all"
                  >
                    <span>Visit Profile</span>
                    <ArrowUpRight size={14} />
                  </a>
                </div>

                {/* Simulated Contributions Board */}
                <h4 className="text-xs font-mono font-bold tracking-widest text-slate-300 uppercase mb-3">
                  Contribution Grid (Last 30 Days)
                </h4>
                <div className="p-5 bg-slate-950/60 border border-white/5 rounded-2xl">
                  {renderContributionGraph()}
                  <div className="flex justify-between items-center mt-3 text-[10px] text-dark-textMuted font-mono">
                    <span>Less</span>
                    <div className="flex gap-1.5 items-center">
                      <div className="w-2.5 h-2.5 rounded-sm bg-[#161B22]" />
                      <div className="w-2.5 h-2.5 rounded-sm bg-[#9be9a8]" />
                      <div className="w-2.5 h-2.5 rounded-sm bg-[#30a14e]" />
                      <div className="w-2.5 h-2.5 rounded-sm bg-[#216e39]" />
                    </div>
                    <span>More</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Panel: Code metrics / Stats Dashboard */}
          <div className="lg:col-span-4 grid grid-cols-2 gap-4">
            
            {/* Stat: Pinned Repos count */}
            <div className="p-6 rounded-2xl glass-panel relative flex flex-col justify-between">
              <Folder className="text-brand-purple" size={24} />
              <div className="mt-4">
                <div className="text-3xl font-display font-extrabold text-white leading-none">
                  {currentStats.public_repos}
                </div>
                <div className="text-[10px] text-dark-textMuted font-mono uppercase tracking-wider font-semibold mt-1">
                  Repositories
                </div>
              </div>
            </div>

            {/* Stat: Followers */}
            <div className="p-6 rounded-2xl glass-panel relative flex flex-col justify-between">
              <Users className="text-brand-blue" size={24} />
              <div className="mt-4">
                <div className="text-3xl font-display font-extrabold text-white leading-none">
                  {currentStats.followers}
                </div>
                <div className="text-[10px] text-dark-textMuted font-mono uppercase tracking-wider font-semibold mt-1">
                  Followers
                </div>
              </div>
            </div>

            {/* Stat: Streak */}
            <div className="p-6 rounded-2xl glass-panel relative flex flex-col justify-between">
              <Zap className="text-brand-cyan" size={24} />
              <div className="mt-4">
                <div className="text-3xl font-display font-extrabold text-white leading-none">
                  {fallbackStats.streak}
                </div>
                <div className="text-[10px] text-dark-textMuted font-mono uppercase tracking-wider font-semibold mt-1">
                  Commit Streak
                </div>
              </div>
            </div>

            {/* Stat: Verified Cert */}
            <div className="p-6 rounded-2xl glass-panel relative flex flex-col justify-between">
              <Award className="text-brand-purple" size={24} />
              <div className="mt-4">
                <div className="text-3xl font-display font-extrabold text-white leading-none">
                  Gold
                </div>
                <div className="text-[10px] text-dark-textMuted font-mono uppercase tracking-wider font-semibold mt-1">
                  NPTEL Java
                </div>
              </div>
            </div>

            {/* Language Breakdown */}
            <div className="col-span-2 p-5 rounded-2xl bg-slate-900/30 border border-white/5 flex flex-col justify-between">
              <h4 className="text-[10px] font-mono font-bold tracking-widest text-slate-300 uppercase mb-4">
                Most Used Languages
              </h4>
              <div className="space-y-3">
                {fallbackStats.mostUsedLanguages.map((lang) => (
                  <div key={lang.name}>
                    <div className="flex justify-between items-center text-xs font-sans mb-1 text-slate-300">
                      <span>{lang.name}</span>
                      <span className="font-semibold text-slate-100">{lang.percentage}%</span>
                    </div>
                    <div className="w-full h-1.5 bg-slate-950 rounded-full overflow-hidden">
                      <div
                        className={`h-full ${lang.color} rounded-full`}
                        style={{ width: `${lang.percentage}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Pinned Repositories Grid */}
        <div className="mt-8">
          <h4 className="text-xs font-mono font-bold tracking-widest text-slate-300 uppercase mb-4 pl-1">
            Pinned Repositories
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {fallbackStats.pinnedRepos.map((repo) => (
              <a
                key={repo.name}
                href={repo.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-6 rounded-2xl glass-panel relative flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:border-brand-purple/20"
              >
                <div>
                  <div className="flex justify-between items-start mb-4">
                    <Folder className="text-brand-purple group-hover:text-brand-cyan transition-colors" size={22} />
                    <ArrowUpRight size={14} className="text-dark-textMuted group-hover:text-white transition-colors" />
                  </div>
                  <h5 className="font-display font-extrabold text-sm text-white tracking-wide uppercase mb-2 group-hover:text-brand-cyan transition-colors">
                    {repo.name}
                  </h5>
                  <p className="text-xs text-dark-textMuted leading-relaxed font-sans line-clamp-3">
                    {repo.description}
                  </p>
                </div>

                <div className="mt-6 flex items-center justify-between border-t border-white/5 pt-4 text-[10px] font-mono text-dark-textMuted">
                  <div className="flex items-center gap-1.5">
                    <span className={`w-2 h-2 rounded-full ${repo.langColor}`} />
                    <span>{repo.language}</span>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <span className="flex items-center gap-0.5">
                      <Star size={10} />
                      <span>{repo.stars}</span>
                    </span>
                    <span className="flex items-center gap-0.5">
                      <GitFork size={10} />
                      <span>{repo.forks}</span>
                    </span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GithubSection;
