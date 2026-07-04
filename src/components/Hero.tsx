import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { FileDown, Mail, ArrowUpRight, Sparkles } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const Hero: React.FC = () => {
  const roles = [
    "AI Engineer",
    "Data Analytics Enthusiast",
    "Machine Learning Developer",
    "Full Stack Developer"
  ];

  const [currentRoleIdx, setCurrentRoleIdx] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  // Typewriter Loop
  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;
    const fullText = roles[currentRoleIdx];
    
    const handleType = () => {
      if (!isDeleting) {
        setCurrentText(fullText.substring(0, currentText.length + 1));
        if (currentText === fullText) {
          timer = setTimeout(() => setIsDeleting(true), 1500);
          return;
        }
      } else {
        setCurrentText(fullText.substring(0, currentText.length - 1));
        if (currentText === '') {
          setIsDeleting(false);
          setCurrentRoleIdx((prev) => (prev + 1) % roles.length);
          return;
        }
      }
      
      const speed = isDeleting ? 30 : 80;
      timer = setTimeout(handleType, speed);
    };
    
    timer = setTimeout(handleType, 100);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentRoleIdx]);

  // Particle constellation background
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Array<{ x: number; y: number; vx: number; vy: number; radius: number; color: string }> = [];

    const resizeCanvas = () => {
      canvas.width = canvas.parentElement?.clientWidth || window.innerWidth;
      canvas.height = canvas.parentElement?.clientHeight || window.innerHeight;
      initParticles();
    };

    const initParticles = () => {
      particles = [];
      const particleCount = Math.min(40, Math.floor((canvas.width * canvas.height) / 25000));
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.3,
          vy: (Math.random() - 0.5) * 0.3,
          radius: Math.random() * 2 + 1,
          color: i % 3 === 0 
            ? 'rgba(124, 58, 237, 0.2)' 
            : i % 3 === 1 
            ? 'rgba(59, 130, 246, 0.2)' 
            : 'rgba(6, 182, 212, 0.2)',
        });
      }
    };

    const drawParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.fill();
      });

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(124, 58, 237, ${0.08 * (1 - dist / 120)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(drawParticles);
    };

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();
    drawParticles();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  // Section scroll handler
  const scrollToSection = (id: string) => {
    const target = document.querySelector(id);
    if (target) {
      const offsetTop = (target as HTMLElement).offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth',
      });
    }
  };

  const handleResumeDownload = () => {
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = 'Mahesh_Gajanan_Kamat_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Card Interactive 3D Tilt
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const handleCardMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left - width / 2;
    const mouseY = e.clientY - rect.top - height / 2;
    const rX = -(mouseY / (height / 2)) * 10;
    const rY = (mouseX / (width / 2)) * 10;
    setRotateX(rX);
    setRotateY(rY);
  };

  const handleCardMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  // Mouse spotlight tracks
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <section
      id="home"
      onMouseMove={handleMouseMove}
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24"
    >
      {/* Dynamic Background constellation Canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none z-0" />
      
      {/* Background grid overlay */}
      <div className="absolute inset-0 grid-bg opacity-15 dark:opacity-25 z-0 pointer-events-none" />

      {/* Mouse follow radial spotlight */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-40 dark:opacity-50 transition-opacity z-0"
        style={{
          background: `radial-gradient(600px circle at ${mousePos.x}px ${mousePos.y}px, rgba(124, 58, 237, 0.08), transparent 85%)`
        }}
      />

      <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10 py-12">
        
        {/* Left Column: Copywriting Summary */}
        <div className="lg:col-span-7 flex flex-col items-start text-left">
          {/* Subtle Tag badge */}
          <motion.div
            className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-white/5 text-[10px] font-mono font-bold tracking-widest text-brand-purple dark:text-brand-cyan mb-6"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Sparkles size={11} className="text-brand-purple animate-pulse" />
            <span>PORTFOLIO SHOWCASE</span>
          </motion.div>

          {/* Name Header */}
          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl font-display font-extrabold tracking-tight text-slate-900 dark:text-white mb-4"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Hi, I'm{' '}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-brand-purple via-brand-blue to-brand-cyan">
              Mahesh G. Kamat
            </span>
          </motion.h1>

          {/* Role Typewriter text */}
          <motion.div
            className="h-10 text-lg sm:text-xl font-mono text-brand-purple dark:text-brand-cyan font-bold tracking-wide mb-6 flex items-center"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <span>{currentText}</span>
            <span className="w-1.5 h-5 bg-brand-purple dark:bg-brand-cyan ml-1 animate-pulse" />
          </motion.div>

          {/* Paragraph copy summary */}
          <motion.p
            className="text-slate-600 dark:text-slate-400 text-sm sm:text-base max-w-xl mb-10 leading-relaxed font-sans"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            {portfolioData.personalInfo.summary}
          </motion.p>

          {/* Action CTAs */}
          <motion.div
            className="flex flex-wrap gap-4 items-center"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            {/* Download Resume */}
            <button
              onClick={handleResumeDownload}
              className="flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-gradient-to-r from-brand-purple to-brand-blue border border-white/10 hover:brightness-110 shadow-lg shadow-brand-purple/10 hover:shadow-brand-purple/20 transition-all font-semibold text-sm text-white"
            >
              <FileDown size={16} />
              <span>Download Resume</span>
            </button>

            {/* View Projects */}
            <button
              onClick={() => scrollToSection('#projects')}
              className="flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-white/5 hover:border-slate-300 dark:hover:border-white/15 transition-all font-semibold text-sm text-slate-700 dark:text-slate-200 hover:text-slate-950 dark:hover:text-white"
            >
              <span>View Projects</span>
              <ArrowUpRight size={16} className="text-slate-400 dark:text-dark-textMuted" />
            </button>

            {/* Contact */}
            <button
              onClick={() => scrollToSection('#contact')}
              className="flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-transparent border border-brand-cyan/20 hover:border-brand-cyan/40 transition-all font-semibold text-sm text-brand-purple dark:text-brand-cyan animate-pulse"
            >
              <Mail size={16} />
              <span>Contact Details</span>
            </button>
          </motion.div>
        </div>

        {/* Right Column: 3D Tilt Badge profile image */}
        <div className="lg:col-span-5 flex justify-center items-center">
          <motion.div
            className="relative w-full max-w-[360px] cursor-pointer"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            onMouseMove={handleCardMouseMove}
            onMouseLeave={handleCardMouseLeave}
            style={{
              perspective: 1000,
            }}
          >
            {/* Outer border wrap */}
            <motion.div
              className="p-[1px] rounded-3xl bg-gradient-to-br from-brand-purple/20 via-brand-blue/20 to-brand-cyan/20 shadow-2xl transition-all duration-300 hover:shadow-brand-purple/10"
              style={{
                transformStyle: 'preserve-3d',
                rotateX: rotateX,
                rotateY: rotateY,
              }}
            >
              <div className="bg-white dark:bg-[#0E1321] rounded-[1.4rem] p-8 flex flex-col justify-between relative overflow-hidden">
                {/* Node mesh grid backdrop */}
                <div className="absolute inset-0 opacity-5 bg-[radial-gradient(rgba(255,255,255,0.15)_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />

                {/* Profile card headers info */}
                <div className="flex items-center gap-4 mb-6 relative z-10 border-b border-slate-100 dark:border-white/5 pb-6">
                  <div className="w-16 h-16 rounded-2xl bg-slate-100 dark:bg-slate-900 border border-brand-purple/20 overflow-hidden shrink-0 shadow-lg relative">
                    <img src="/profile.png" alt="Mahesh Gajanan Kamat" className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <h3 className="font-display font-extrabold text-base text-slate-800 dark:text-white uppercase tracking-wide">
                      Mahesh G. Kamat
                    </h3>
                    <p className="text-[10px] text-slate-500 dark:text-dark-textMuted font-mono uppercase tracking-widest mt-0.5">
                      B.E. Information Science
                    </p>
                  </div>
                </div>

                {/* Info specifications list */}
                <div className="space-y-4 mb-6 relative z-10 text-left">
                  <div>
                    <span className="text-[10px] text-slate-400 dark:text-dark-textMuted font-mono uppercase tracking-widest block mb-1">Affiliation</span>
                    <span className="text-xs text-slate-800 dark:text-slate-200 font-semibold leading-tight block">
                      Canara Engineering College, Mangalore
                    </span>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <span className="text-[10px] text-slate-400 dark:text-dark-textMuted font-mono uppercase tracking-widest block mb-1">Academic Score</span>
                      <span className="text-xs text-brand-purple dark:text-brand-cyan font-mono font-bold">
                        CGPA 7.91 / 10
                      </span>
                    </div>
                    <div>
                      <span className="text-[10px] text-slate-400 dark:text-dark-textMuted font-mono uppercase tracking-widest block mb-1">Graduation Year</span>
                      <span className="text-xs text-slate-700 dark:text-slate-200 font-mono font-semibold">
                        Expected 2027
                      </span>
                    </div>
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-400 dark:text-dark-textMuted font-mono uppercase tracking-widest block mb-1">Specializations</span>
                    <span className="text-xs text-slate-600 dark:text-slate-300 font-sans leading-relaxed block">
                      AI Engineer • Full-Stack • Data Analyst
                    </span>
                  </div>
                </div>

                {/* Verification card indicators */}
                <div className="flex gap-2 items-center bg-slate-50 dark:bg-slate-950/40 border border-slate-100 dark:border-white/5 px-4 py-2.5 rounded-xl relative z-10">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-[9px] font-mono font-semibold text-slate-600 dark:text-slate-300 uppercase tracking-widest">
                    Verified placement profile
                  </span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Down Scroll Indicator mouse */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1 cursor-pointer" onClick={() => scrollToSection('#about')}>
        <span className="text-[9px] font-mono tracking-widest text-slate-400 dark:text-dark-textMuted uppercase animate-pulse">
          Scroll Down
        </span>
        <motion.div
          className="w-5 h-8 rounded-full border-2 border-slate-400 dark:border-dark-textMuted p-1 flex justify-center"
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
        >
          <div className="w-1.5 h-1.5 rounded-full bg-brand-purple dark:bg-brand-cyan" />
        </motion.div>
      </div>

    </section>
  );
};

export default Hero;
