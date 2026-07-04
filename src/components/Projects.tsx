import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Cpu, LineChart, Shield, CheckCircle, AlertCircle, Sparkles, Database, Code, Activity, Brain, Server } from 'lucide-react';
import { portfolioData, type Project } from '../data/portfolioData';
import { ProjectModal } from './ProjectModal';

// Mockup dashboard for flagship AI Business Analytics Platform
const BusinessAnalyticsDashboardMockup: React.FC = () => (
  <div className="w-full h-full bg-[#070A13] flex flex-col relative overflow-hidden group">
    {/* Grid Backdrop */}
    <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:14px_24px] pointer-events-none" />

    {/* Header Tab line */}
    <div className="flex items-center justify-between px-4 py-2.5 bg-slate-950/60 border-b border-white/5 text-[9px] font-mono text-dark-textMuted">
      <div className="flex items-center gap-2">
        <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
        <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
        <span className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
        <span className="ml-2 text-slate-300 font-semibold uppercase tracking-wider">Analytics Platform v1.0</span>
      </div>
      <span className="px-2 py-0.5 rounded bg-slate-900 border border-white/5 text-emerald-400">
        ● SYSTEM STABLE
      </span>
    </div>

    {/* Dashboard columns */}
    <div className="grid grid-cols-12 flex-grow h-full min-h-[220px]">
      {/* Sidebar */}
      <div className="col-span-3 border-r border-white/5 bg-slate-950/20 p-3 hidden sm:flex flex-col gap-2">
        <div className="w-full h-4 rounded bg-slate-900/60 border border-white/5 flex items-center px-1.5 text-[8px] text-brand-purple font-mono">
          <Code size={10} className="mr-1" />
          <span>Datasets</span>
        </div>
        <div className="w-full h-4 rounded bg-slate-900/40 border border-white/5 flex items-center px-1.5 text-[8px] text-brand-cyan font-mono">
          <LineChart size={10} className="mr-1" />
          <span>Forecasting</span>
        </div>
        <div className="w-full h-4 rounded bg-slate-900/20 border border-transparent flex items-center px-1.5 text-[8px] text-slate-500 font-mono">
          <Database size={10} className="mr-1" />
          <span>SQL Query</span>
        </div>
      </div>

      {/* Main console content */}
      <div className="col-span-12 sm:col-span-9 p-4 flex flex-col justify-between gap-4 h-full">
        {/* KPI blocks */}
        <div className="grid grid-cols-3 gap-2">
          <div className="p-2 rounded bg-slate-900/40 border border-white/5 text-center">
            <span className="text-[7px] text-dark-textMuted uppercase font-mono block">Rows Analyzed</span>
            <span className="text-xs font-bold text-slate-200 dark:text-white font-mono">10,240</span>
          </div>
          <div className="p-2 rounded bg-slate-900/40 border border-white/5 text-center">
            <span className="text-[7px] text-dark-textMuted uppercase font-mono block">Forecast Acc.</span>
            <span className="text-xs font-bold text-brand-cyan font-mono">94.2%</span>
          </div>
          <div className="p-2 rounded bg-slate-900/40 border border-white/5 text-center">
            <span className="text-[7px] text-dark-textMuted uppercase font-mono block">Query Latency</span>
            <span className="text-xs font-bold text-brand-purple font-mono">1.18s</span>
          </div>
        </div>

        {/* Forecast Chart */}
        <div className="flex-grow min-h-[90px] relative bg-slate-950/40 border border-white/5 rounded p-2 flex flex-col justify-between">
          <div className="flex items-center justify-between text-[7px] font-mono text-dark-textMuted mb-2">
            <span>PROPHET PREDICTION CURVE</span>
            <span className="text-brand-cyan">Active Horizon: 90 Days</span>
          </div>
          <svg className="w-full h-full max-h-[70px] text-brand-cyan" viewBox="0 0 160 60" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M 10 50 Q 40 40 70 20 T 130 10 T 150 15" stroke="url(#cyanLineGlow)" strokeWidth="1.5" strokeLinecap="round" />
            <path d="M 10 50 Q 40 40 70 20 T 130 10 T 150 15 L 150 60 L 10 60 Z" fill="rgba(6, 182, 212, 0.04)" />
            {/* Grid markers */}
            <line x1="10" y1="50" x2="150" y2="50" stroke="rgba(255,255,255,0.03)" strokeWidth="0.5" />
            <line x1="70" y1="0" x2="70" y2="60" stroke="rgba(255,255,255,0.03)" strokeWidth="0.5" />
            <defs>
              <linearGradient id="cyanLineGlow" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#7C3AED" />
                <stop offset="50%" stopColor="#3B82F6" />
                <stop offset="100%" stopColor="#06B6D4" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/* AI response panel */}
        <div className="p-2 rounded bg-[#0b0e17]/80 border border-brand-purple/20 flex flex-col gap-1 text-[8px] font-sans">
          <div className="flex items-center justify-between border-b border-white/5 pb-1">
            <span className="text-brand-purple font-mono font-bold uppercase tracking-wider flex items-center gap-1">
              <Sparkles size={8} />
              <span>Gemini AI Engine</span>
            </span>
          </div>
          <p className="text-slate-400 italic leading-snug">
            <strong className="text-brand-purple font-bold">AI response:</strong> "Sales project to surge by 14.2% in Q3, driven by new customer cohorts. Standard seasonality checks indicate strong stability."
          </p>
        </div>
      </div>
    </div>
  </div>
);

// Mockup dashboard for Fingerprint Blood Group Detector
const BloodDetectorDashboardMockup: React.FC = () => (
  <div className="w-full h-full bg-[#070A13] flex flex-col relative overflow-hidden group">
    {/* Grid Backdrop */}
    <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:14px_24px] pointer-events-none" />

    {/* Header bar */}
    <div className="flex items-center justify-between px-4 py-2.5 bg-slate-950/60 border-b border-white/5 text-[9px] font-mono text-dark-textMuted">
      <div className="flex items-center gap-2">
        <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
        <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
        <span className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
        <span className="ml-2 text-slate-300 font-semibold uppercase tracking-wider">Biometric Terminal v2.1</span>
      </div>
      <span className="px-2 py-0.5 rounded bg-slate-900 border border-white/5 text-brand-purple">
        ● SCAN COMPLETE
      </span>
    </div>

    {/* Main layout */}
    <div className="grid grid-cols-12 flex-grow p-4 gap-4 h-full min-h-[220px]">
      {/* Scanner Visual (Left side) */}
      <div className="col-span-5 flex flex-col items-center justify-center bg-slate-950/60 border border-white/5 rounded-xl p-3 relative overflow-hidden">
        {/* Pulsing Scan Laser line */}
        <div className="absolute left-0 right-0 h-[1.5px] bg-brand-cyan/80 top-1/2 shadow-[0_0_10px_#06B6D4] animate-pulse" />
        
        {/* Fingerprint Vector */}
        <svg className="w-full h-16 text-brand-purple/70 z-10" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M50 25 C62 25 72 35 72 47" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
          <path d="M43 28 C56 26 66 36 66 47 M38 34 C50 30 60 38 60 47" stroke="#3B82F6" strokeWidth="1.2" strokeLinecap="round" />
          <path d="M34 42 C45 35 54 41 54 47 C54 53 48 57 48 62" stroke="#06B6D4" strokeWidth="1.2" strokeLinecap="round" />
          <path d="M32 50 C32 45 42 45 42 50" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
        </svg>
      </div>

      {/* Analytics outputs (Right side) */}
      <div className="col-span-7 flex flex-col justify-between gap-3 h-full">
        {/* Feature mapping coordinates */}
        <div className="p-2 rounded bg-slate-900/40 border border-white/5 flex flex-col gap-1">
          <span className="text-[7px] font-mono text-slate-500 block">CV FEATURE EXTRACTION</span>
          <div className="flex justify-between items-center text-[8px] font-mono text-slate-300">
            <span>Ridge density:</span>
            <span className="text-brand-cyan">18.4 ridges/cm</span>
          </div>
          <div className="flex justify-between items-center text-[8px] font-mono text-slate-300">
            <span>Minutiae count:</span>
            <span className="text-brand-purple">64 nodes mapped</span>
          </div>
        </div>

        {/* Prediction Results Gauge */}
        <div className="p-2.5 rounded bg-slate-950 border border-brand-purple/20 flex items-center justify-between gap-2">
          <div>
            <span className="text-[7px] font-mono text-slate-500 block">PREDICTED BLOOD GROUP</span>
            <span className="text-sm font-display font-extrabold text-white leading-none block mt-1 tracking-wide">
              A Positive (A+)
            </span>
          </div>
          <div className="w-8 h-8 rounded-full border-2 border-brand-cyan/20 border-t-brand-cyan flex items-center justify-center text-[8px] font-mono font-bold text-brand-cyan shrink-0">
            89.4%
          </div>
        </div>
      </div>
    </div>
  </div>
);

// Mockup dashboard for Sclerathon AI Call Agent
const AICallAgentDashboardMockup: React.FC = () => (
  <div className="w-full h-full bg-[#070A13] flex flex-col relative overflow-hidden group">
    <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:14px_24px] pointer-events-none" />
    <div className="flex items-center justify-between px-4 py-2.5 bg-slate-950/60 border-b border-white/5 text-[9px] font-mono text-dark-textMuted">
      <div className="flex items-center gap-2">
        <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
        <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
        <span className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
        <span className="ml-2 text-slate-300 font-semibold uppercase tracking-wider">Telephony Router v1.0</span>
      </div>
      <span className="px-2 py-0.5 rounded bg-slate-900 border border-white/5 text-brand-purple">
        ● SESSION ACTIVE
      </span>
    </div>
    <div className="grid grid-cols-12 flex-grow p-4 gap-4 h-full min-h-[220px]">
      <div className="col-span-5 flex flex-col items-center justify-center bg-slate-950/60 border border-white/5 rounded-xl p-3 relative overflow-hidden">
        <div className="flex items-center gap-1 h-12 w-full justify-center">
          <span className="w-1.5 h-6 bg-brand-purple rounded-full animate-pulse" />
          <span className="w-1.5 h-10 bg-brand-blue rounded-full animate-bounce" />
          <span className="w-1.5 h-4 bg-brand-cyan rounded-full animate-pulse" />
          <span className="w-1.5 h-8 bg-brand-blue rounded-full animate-bounce" />
          <span className="w-1.5 h-5 bg-brand-purple rounded-full animate-pulse" />
        </div>
        <span className="text-[7px] font-mono text-slate-500 mt-2 uppercase">AUDIO RX INCOMING</span>
      </div>
      <div className="col-span-7 flex flex-col justify-between gap-3 h-full">
        <div className="p-2 rounded bg-slate-900/40 border border-white/5 text-left flex flex-col gap-1">
          <span className="text-[7px] font-mono text-slate-500 block">REAL-TIME TRANSCRIPT</span>
          <p className="text-[9px] text-slate-300 leading-relaxed font-sans italic">
            "Hello, I need help resetting my password and unlocking my profile credentials."
          </p>
        </div>
        <div className="p-2.5 rounded bg-slate-950 border border-brand-purple/20 flex flex-col gap-1.5 text-left">
          <div>
            <span className="text-[7px] font-mono text-slate-500 block">CLASSIFIED INTENT</span>
            <span className="text-xs font-display font-extrabold text-white uppercase tracking-wider block mt-0.5">
              Account Security Support
            </span>
          </div>
          <div className="flex justify-between items-center text-[8px] font-mono text-brand-cyan">
            <span>Action: Call Redirect</span>
            <span className="px-1.5 py-0.5 rounded bg-brand-cyan/10 border border-brand-cyan/25 text-[7px]">
              Dept: IT Service Desk
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
);

// Router helper to select the correct mockup component based on project ID
const ProjectMockup: React.FC<{ projectId: string }> = ({ projectId }) => {
  if (projectId === 'business-analytics') {
    return <BusinessAnalyticsDashboardMockup />;
  }
  if (projectId === 'blood-group-detection') {
    return <BloodDetectorDashboardMockup />;
  }
  if (projectId === 'ai-call-agent') {
    return <AICallAgentDashboardMockup />;
  }
  return <BloodDetectorDashboardMockup />;
};

// Branded SVG technology logo renderer
const BrandedTechIcon: React.FC<{ name: string; size?: number }> = ({ name, size = 14 }) => {
  const lower = name.toLowerCase();
  switch (lower) {
    case 'python':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0 text-amber-500">
          <path d="M11.93 0C5.36 0 5.63 2.85 5.63 2.85V5.7H12.05V6.6H5.63C2.5 6.6 0 9.1 0 12.23V16.81C0 19.93 5.63 19.93 5.63 19.93H6.87V17.08C6.87 13.82 10.11 13.82 10.11 13.82H15.92C19.16 13.82 19.16 10.56 19.16 10.56V6.15C19.16 2.85 11.93 0 11.93 0Z" fill="currentColor"/>
          <path d="M12.07 24C18.64 24 18.37 21.15 18.37 21.15V18.3H11.95V17.4H18.37C21.5 17.4 24 14.9 24 11.77V7.19C24 4.07 18.37 4.07 18.37 4.07H17.13V6.92C17.13 10.18 13.89 10.18 13.89 10.18H8.08C4.84 10.18 4.84 13.44 4.84 13.44V17.85C4.84 21.15 12.07 24 12.07 24Z" fill="#3B82F6"/>
        </svg>
      );
    case 'react':
      return (
        <svg width={size} height={size} viewBox="-11.5 -10.23174 23 20.46348" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0 text-cyan-400">
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
        <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className="shrink-0 text-emerald-400">
          <path d="M12 0L2 12H11V24L21 12H12V0Z" />
        </svg>
      );
    case 'gemini api':
      return <Sparkles size={size} className="text-brand-purple shrink-0" />;
    case 'plotly':
      return <LineChart size={size} className="text-rose-500 shrink-0" />;
    case 'sqlite':
      return <Database size={size} className="text-blue-400 shrink-0" />;
    case 'sqlalchemy':
      return <Server size={size} className="text-amber-500 shrink-0" />;
    case 'jwt':
      return <Shield size={size} className="text-orange-500 shrink-0" />;
    case 'machine learning':
      return <Brain size={size} className="text-cyan-400 shrink-0" />;
    case 'computer vision':
      return <Activity size={size} className="text-brand-purple shrink-0" />;
    default:
      return <Cpu size={size} className="text-slate-400 shrink-0" />;
  }
};

export const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const handleCaseStudyClick = (project: Project) => {
    setSelectedProject(project);
  };

  const getMetricIcon = (label: string) => {
    if (label.toLowerCase().includes('accuracy')) {
      return <CheckCircle size={14} className="text-emerald-400" />;
    }
    if (label.toLowerCase().includes('latency') || label.toLowerCase().includes('speed')) {
      return <Activity size={14} className="text-brand-cyan" />;
    }
    return <Sparkles size={14} className="text-brand-purple" />;
  };

  // Determine standard projects count
  const standardProjects = portfolioData.projects.filter(p => !p.isFlagship);
  const isSingleStandard = standardProjects.length === 1;

  return (
    <section id="projects" className="py-24 relative overflow-hidden bg-slate-50/20 dark:bg-slate-950/20 transition-colors duration-300">
      
      {/* Background grids and floating particles to eliminate empty black space */}
      <div className="absolute inset-0 grid-bg opacity-15 pointer-events-none z-0" />
      <motion.div
        className="absolute w-[400px] h-[400px] rounded-full bg-brand-purple/5 filter blur-3xl pointer-events-none top-20 left-10"
        animate={{ x: [0, 30, 0], y: [0, -30, 0] }}
        transition={{ repeat: Infinity, duration: 12, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute w-[400px] h-[400px] rounded-full bg-brand-cyan/5 filter blur-3xl pointer-events-none bottom-20 right-10"
        animate={{ x: [0, -40, 0], y: [0, 40, 0] }}
        transition={{ repeat: Infinity, duration: 15, ease: "easeInOut" }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-slate-900 dark:text-white tracking-tight mb-2 uppercase">
            Product Showcases
          </h2>
          <p className="text-sm font-mono text-slate-500 dark:text-dark-textMuted tracking-wider mt-1 uppercase">
            Deep dive into technical architectures & realized case-studies
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-brand-purple via-brand-blue to-brand-cyan mx-auto rounded-full mt-4" />
        </motion.div>

        {/* Case Study Container */}
        <div className="space-y-16">
          
          {/* Flagship Project: Spans full width (100%) on desktop */}
          {portfolioData.projects.filter(p => p.isFlagship).map((project) => (
            <motion.div
              key={project.id}
              className="p-[1px] rounded-3xl bg-gradient-to-br from-brand-purple/20 via-brand-blue/20 to-brand-cyan/20 dark:from-brand-purple/10 dark:via-brand-blue/10 dark:to-brand-cyan/10 hover:from-brand-purple/40 hover:via-brand-blue/40 hover:to-brand-cyan/40 transition-all duration-500 shadow-2xl relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6 }}
            >
              {/* Flagship border glow accent line */}
              <div className="absolute top-0 left-0 right-0 h-1 rounded-t-3xl bg-gradient-to-r from-brand-purple via-brand-blue to-brand-cyan" />
              
              <div className="bg-white/90 dark:bg-[#0B0F19]/95 rounded-[1.4rem] overflow-hidden grid grid-cols-1 lg:grid-cols-12 items-stretch h-full">
                
                {/* Left side details (50% Width on desktop) */}
                <div className="lg:col-span-6 p-8 sm:p-10 flex flex-col justify-between space-y-8">
                  <div>
                    {/* Tagline */}
                    <div className="flex items-center gap-2 mb-4">
                      <span className="text-[10px] font-mono font-bold tracking-widest text-brand-purple dark:text-brand-cyan uppercase bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-white/10 px-3 py-1 rounded-full">
                        {project.tagline}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl sm:text-3xl font-display font-extrabold text-slate-800 dark:text-white tracking-wide uppercase leading-tight mb-4 text-left">
                      {project.title}
                    </h3>

                    {/* Detailed Summary */}
                    <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed font-sans mb-8 text-left">
                      {project.longDescription}
                    </p>

                    {/* Three-Column glassmorphism grid: Problem, Solution, Key Features Summary */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8 text-left">
                      {/* Problem card */}
                      <div className="p-4 rounded-2xl glass-panel relative flex flex-col gap-2.5">
                        <div className="text-red-400 shrink-0 flex items-center gap-1.5 border-b border-slate-200/50 dark:border-white/5 pb-2 w-full">
                          <AlertCircle size={14} />
                          <span className="text-[9px] font-mono font-bold uppercase tracking-wider text-slate-500 dark:text-slate-300 block">
                            The Challenge
                          </span>
                        </div>
                        <p className="text-xs text-slate-600 dark:text-slate-400 leading-normal">
                          {project.problemStatement}
                        </p>
                      </div>

                      {/* Solution card */}
                      <div className="p-4 rounded-2xl glass-panel relative flex flex-col gap-2.5">
                        <div className="text-emerald-400 shrink-0 flex items-center gap-1.5 border-b border-slate-200/50 dark:border-white/5 pb-2 w-full">
                          <CheckCircle size={14} />
                          <span className="text-[9px] font-mono font-bold uppercase tracking-wider text-slate-500 dark:text-slate-300 block">
                            The Innovation
                          </span>
                        </div>
                        <p className="text-xs text-slate-600 dark:text-slate-400 leading-normal">
                          {project.solution}
                        </p>
                      </div>

                      {/* Key Features Quick Card */}
                      <div className="p-4 rounded-2xl glass-panel relative flex flex-col gap-2.5">
                        <div className="text-brand-cyan shrink-0 flex items-center gap-1.5 border-b border-slate-200/50 dark:border-white/5 pb-2 w-full">
                          <Sparkles size={14} />
                          <span className="text-[9px] font-mono font-bold uppercase tracking-wider text-slate-500 dark:text-slate-300 block">
                            Scope Highlights
                          </span>
                        </div>
                        <p className="text-xs text-slate-600 dark:text-slate-400 leading-normal">
                          Full stack architecture, Gemini insights integration, and real-time local Prophet forecast models.
                        </p>
                      </div>
                    </div>

                    {/* Statistics Highlights */}
                    <div className="mb-6 text-left">
                      <span className="text-[10px] text-slate-500 dark:text-dark-textMuted font-mono uppercase tracking-widest block mb-3 font-bold">
                        System Statistics & Performance
                      </span>
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                        <div className="p-3 bg-slate-100 dark:bg-slate-900/60 border border-slate-200 dark:border-white/5 rounded-xl flex items-center gap-2">
                          {getMetricIcon('Latency')}
                          <div>
                            <span className="text-[7px] font-mono text-slate-500 dark:text-dark-textMuted uppercase block">Insight latency</span>
                            <span className="text-xs font-bold text-slate-800 dark:text-white font-mono">&lt;1.18s</span>
                          </div>
                        </div>
                        <div className="p-3 bg-slate-100 dark:bg-slate-900/60 border border-slate-200 dark:border-white/5 rounded-xl flex items-center gap-2">
                          {getMetricIcon('Accuracy')}
                          <div>
                            <span className="text-[7px] font-mono text-slate-500 dark:text-dark-textMuted uppercase block">Forecasting</span>
                            <span className="text-xs font-bold text-brand-purple dark:text-brand-cyan font-mono">94.2%</span>
                          </div>
                        </div>
                        <div className="p-3 bg-slate-100 dark:bg-slate-900/60 border border-slate-200 dark:border-white/5 rounded-xl flex items-center gap-2">
                          {getMetricIcon('KPI')}
                          <div>
                            <span className="text-[7px] font-mono text-slate-500 dark:text-dark-textMuted uppercase block">Dashboards</span>
                            <span className="text-xs font-bold text-brand-purple font-mono">5 Active</span>
                          </div>
                        </div>
                        <div className="p-3 bg-slate-100 dark:bg-slate-900/60 border border-slate-200 dark:border-white/5 rounded-xl flex items-center gap-2">
                          {getMetricIcon('API')}
                          <div>
                            <span className="text-[7px] font-mono text-slate-500 dark:text-dark-textMuted uppercase block">Rows Parsed</span>
                            <span className="text-xs font-bold text-slate-800 dark:text-white font-mono">10K+</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Key Features badge list (6-8 features) */}
                    <div className="mb-6 text-left">
                      <span className="text-[10px] text-slate-500 dark:text-dark-textMuted font-mono uppercase tracking-widest block mb-3 font-bold">
                        Key Features
                      </span>
                      <div className="flex flex-wrap gap-2">
                        {project.keyFeatures.map((feature, idx) => (
                          <span
                            key={idx}
                            className="px-2.5 py-1 rounded-lg bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-white/5 text-[10px] font-mono font-medium text-slate-600 dark:text-slate-300"
                          >
                            ✓ {feature}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Branded Technology Tags */}
                    <div className="text-left">
                      <span className="text-[10px] text-slate-500 dark:text-dark-textMuted font-mono uppercase tracking-widest block mb-3 font-bold">
                        Technologies Stack
                      </span>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, idx) => (
                          <motion.div
                            key={tech}
                            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-950 border border-slate-200 dark:border-white/5 text-[10px] font-mono font-medium text-slate-700 dark:text-slate-300"
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.05 }}
                          >
                            <BrandedTechIcon name={tech} />
                            <span>{tech}</span>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Consistent Triple Action Buttons */}
                  <div className="flex flex-wrap gap-3 border-t border-slate-200 dark:border-white/5 pt-6 justify-start">
                    <button
                      onClick={() => handleCaseStudyClick(project)}
                      className="px-5 py-2.5 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-white/10 hover:border-slate-300 dark:hover:border-white/20 text-xs font-mono font-bold uppercase tracking-wider text-slate-700 dark:text-slate-200 hover:text-slate-950 dark:hover:text-white transition-all shadow-sm"
                    >
                      View Case Study
                    </button>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-5 py-2.5 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-white/10 hover:border-slate-300 dark:hover:border-white/20 text-xs font-mono font-bold uppercase tracking-wider text-slate-700 dark:text-slate-200 hover:text-slate-950 dark:hover:text-white transition-all shadow-sm"
                    >
                      GitHub Repository
                    </a>
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-brand-purple to-brand-blue text-xs font-mono font-bold uppercase tracking-wider text-white hover:brightness-110 transition-all shadow-md shadow-brand-purple/10"
                      >
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>

                {/* Right side preview (50% Width on desktop, Zoom Hover Effect) */}
                <div className="lg:col-span-6 relative overflow-hidden group/image min-h-[300px] border-t lg:border-t-0 border-slate-200 dark:border-white/5">
                  <div className="absolute inset-0 transition-transform duration-700 ease-out group-hover/image:scale-[1.03] h-full">
                    <BusinessAnalyticsDashboardMockup />
                  </div>
                </div>

              </div>
            </motion.div>
          ))}

          {/* Remaining Projects: Spans responsive equal-height columns grid. If single item, scales full width horizontally */}
          <div className={isSingleStandard ? "space-y-16" : "grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch"}>
            {standardProjects.map((project) => (
              <motion.div
                key={project.id}
                className={`p-[1px] rounded-3xl bg-gradient-to-br from-slate-200/50 via-transparent to-slate-200/10 dark:from-white/10 dark:via-transparent dark:to-white/5 hover:from-brand-purple/20 hover:to-brand-cyan/20 transition-all duration-500 shadow-xl relative flex flex-col`}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.6 }}
              >
                <div className={`bg-white/90 dark:bg-[#0B0F19]/95 rounded-[1.4rem] overflow-hidden ${isSingleStandard ? 'grid grid-cols-1 lg:grid-cols-12 items-stretch h-full' : 'flex flex-col justify-between h-full flex-grow'}`}>
                  
                  {/* Left Details (Horizontal split if single, vertical if grid) */}
                  <div className={`${isSingleStandard ? 'lg:col-span-6 p-8 sm:p-10 flex flex-col justify-between space-y-8' : 'p-8 flex flex-col justify-between flex-grow space-y-6'}`}>
                    <div>
                      {/* Tagline */}
                      <div className="flex items-center gap-2 mb-3">
                        <span className="text-[10px] font-mono font-bold tracking-widest text-brand-purple uppercase bg-brand-purple/5 border border-brand-purple/15 px-2.5 py-0.5 rounded-full">
                          {project.tagline}
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="text-xl sm:text-2xl font-display font-extrabold text-slate-800 dark:text-white tracking-wide uppercase leading-tight mb-3 text-left">
                        {project.title}
                      </h3>

                      {/* Detailed Summary */}
                      <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm leading-relaxed font-sans mb-6 text-left">
                        {project.longDescription}
                      </p>

                      {/* Problem vs Solution Split columns */}
                      <div className={`grid grid-cols-1 ${isSingleStandard ? 'md:grid-cols-3' : 'sm:grid-cols-2'} gap-3 mb-6 text-left`}>
                        {/* Problem */}
                        <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900/30 border border-slate-200 dark:border-white/5 flex flex-col gap-2">
                          <div className="text-red-400 shrink-0 flex items-center gap-1 border-b border-slate-200/50 dark:border-white/5 pb-1">
                            <AlertCircle size={12} />
                            <span className="text-[8px] font-mono font-bold uppercase tracking-wider text-slate-500 dark:text-slate-300">
                              The Challenge
                            </span>
                          </div>
                          <p className="text-[11px] text-slate-600 dark:text-slate-400 leading-snug">
                            {project.problemStatement}
                          </p>
                        </div>

                        {/* Solution */}
                        <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900/30 border border-slate-200 dark:border-white/5 flex flex-col gap-2">
                          <div className="text-emerald-400 shrink-0 flex items-center gap-1 border-b border-slate-200/50 dark:border-white/5 pb-1">
                            <CheckCircle size={12} />
                            <span className="text-[8px] font-mono font-bold uppercase tracking-wider text-slate-500 dark:text-slate-300">
                              The Innovation
                            </span>
                          </div>
                          <p className="text-[11px] text-slate-600 dark:text-slate-400 leading-snug">
                            {project.solution}
                          </p>
                        </div>

                        {/* Key Features Quick Card (Only if spans full width) */}
                        {isSingleStandard && (
                          <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900/30 border border-slate-200 dark:border-white/5 flex flex-col gap-2">
                            <div className="text-brand-purple shrink-0 flex items-center gap-1 border-b border-slate-200/50 dark:border-white/5 pb-1">
                              <Sparkles size={12} />
                              <span className="text-[8px] font-mono font-bold uppercase tracking-wider text-slate-500 dark:text-slate-300">
                                Scope Details
                              </span>
                            </div>
                            <p className="text-[11px] text-slate-600 dark:text-slate-400 leading-snug">
                              Denoising and contrast stretching (CLAHE), minutiae parsing, orientation mappings, and Scikit classification testing.
                            </p>
                          </div>
                        )}
                      </div>

                      {/* Project Metrics dashboard highlights */}
                      <div className="mb-5 text-left">
                        <span className="text-[10px] text-slate-500 dark:text-dark-textMuted font-mono uppercase tracking-widest block mb-3 font-bold">
                          System Statistics & Performance
                        </span>
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                          <div className="p-2.5 bg-slate-100 dark:bg-slate-900/60 border border-slate-200 dark:border-white/5 rounded-xl flex items-center gap-2">
                            {getMetricIcon('Speed')}
                            <div>
                              <span className="text-[7px] font-mono text-slate-500 dark:text-dark-textMuted uppercase block">Match speed</span>
                              <span className="text-xs font-bold text-slate-800 dark:text-white font-mono">&lt;1.2s</span>
                            </div>
                          </div>
                          <div className="p-2.5 bg-slate-100 dark:bg-slate-900/60 border border-slate-200 dark:border-white/5 rounded-xl flex items-center gap-2">
                            {getMetricIcon('Accuracy')}
                            <div>
                              <span className="text-[7px] font-mono text-slate-500 dark:text-dark-textMuted uppercase block">Accuracy Rate</span>
                              <span className="text-xs font-bold text-brand-purple dark:text-brand-cyan font-mono">89.4%</span>
                            </div>
                          </div>
                          <div className="p-2.5 bg-slate-100 dark:bg-slate-900/60 border border-slate-200 dark:border-white/5 rounded-xl flex items-center gap-2">
                            {getMetricIcon('Minutiae')}
                            <div>
                              <span className="text-[7px] font-mono text-slate-500 dark:text-dark-textMuted uppercase block">Minutiae Nodes</span>
                              <span className="text-xs font-bold text-slate-800 dark:text-white font-mono">60+ Mapped</span>
                            </div>
                          </div>
                          <div className="p-2.5 bg-slate-100 dark:bg-slate-900/60 border border-slate-200 dark:border-white/5 rounded-xl flex items-center gap-2">
                            {getMetricIcon('Resolution')}
                            <div>
                              <span className="text-[7px] font-mono text-slate-500 dark:text-dark-textMuted uppercase block">Resolution</span>
                              <span className="text-xs font-bold text-slate-800 dark:text-white font-mono">500 DPI</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Key Features badge list (6-8 features) */}
                      <div className="mb-5 text-left">
                        <span className="text-[10px] text-slate-500 dark:text-dark-textMuted font-mono uppercase tracking-widest block mb-3 font-bold">
                          Key Features
                        </span>
                        <div className="flex flex-wrap gap-1.5">
                          {project.keyFeatures.map((feature, idx) => (
                            <span
                              key={idx}
                              className="px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-950 border border-slate-200 dark:border-white/5 text-[9px] font-mono font-medium text-slate-600 dark:text-slate-300"
                            >
                              ✓ {feature}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Branded Technology Tags */}
                      <div className="text-left">
                        <span className="text-[10px] text-slate-500 dark:text-dark-textMuted font-mono uppercase tracking-widest block mb-3 font-bold">
                          Technologies Stack
                        </span>
                        <div className="flex flex-wrap gap-1.5">
                          {project.technologies.map((tech) => (
                            <div
                              key={tech}
                              className="flex items-center gap-1 px-2.5 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-950 border border-slate-200 dark:border-white/5 text-[9px] font-mono font-medium text-slate-700 dark:text-slate-300"
                            >
                              <BrandedTechIcon name={tech} size={11} />
                              <span>{tech}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Actions (Consistent Triple Layout) */}
                    <div className="flex flex-wrap gap-2 border-t border-slate-200 dark:border-white/5 pt-5 justify-start shrink-0">
                      <button
                        onClick={() => handleCaseStudyClick(project)}
                        className="px-4 py-2.5 rounded-lg bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-white/10 hover:border-slate-300 dark:hover:border-white/20 text-[10px] font-mono font-bold uppercase tracking-wider text-slate-700 dark:text-slate-200 hover:text-slate-950 dark:hover:text-white transition-all shadow-sm"
                      >
                        View Case Study
                      </button>
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2.5 rounded-lg bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-white/10 hover:border-slate-300 dark:hover:border-white/20 text-[10px] font-mono font-bold uppercase tracking-wider text-slate-700 dark:text-slate-200 hover:text-slate-950 dark:hover:text-white transition-all shadow-sm"
                      >
                        GitHub Repository
                      </a>
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-4 py-2.5 rounded-lg bg-gradient-to-r from-brand-purple to-brand-blue text-[10px] font-mono font-bold uppercase tracking-wider text-white hover:brightness-110 transition-all shadow-sm"
                        >
                          Live Demo
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Right Column visual preview (Only if single spans full, or top block if grid) */}
                  <div className={`${isSingleStandard ? 'lg:col-span-6 relative overflow-hidden group/image min-h-[300px] border-t lg:border-t-0 border-slate-200 dark:border-white/5' : 'w-full h-64 relative overflow-hidden group/image border-b border-slate-200 dark:border-white/5 order-first'}`}>
                    <div className="absolute inset-0 transition-transform duration-700 ease-out group-hover/image:scale-[1.03] h-full">
                      <ProjectMockup projectId={project.id} />
                    </div>
                  </div>

                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>

      {/* Details Modal overlay */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
