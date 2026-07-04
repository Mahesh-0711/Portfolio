import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Mail, Phone, Send, CheckCircle, AlertTriangle } from 'lucide-react';
import { toast } from 'react-hot-toast';
import { portfolioData } from '../data/portfolioData';

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export const Contact: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<ContactFormData>();

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    try {
      const response = await fetch("https://formspree.io/f/xaqgagab", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(data)
      });
      
      if (response.ok) {
        setSubmitSuccess(true);
        toast.success('Message Dispatched Successfully!', {
          style: {
            background: 'var(--glass-bg)',
            color: 'var(--text-color)',
            border: '1px solid rgba(124, 58, 237, 0.2)'
          }
        });
        reset();
        // Clear success feedback panel after delay
        setTimeout(() => setSubmitSuccess(false), 5000);
      } else {
        toast.error('Failed to dispatch message. Please try again later.', {
          style: {
            background: 'var(--glass-bg)',
            color: 'var(--text-color)',
            border: '1px solid rgba(239, 68, 68, 0.2)'
          }
        });
      }
    } catch (err) {
      toast.error('Network error. Please check your connection.', {
        style: {
          background: 'var(--glass-bg)',
          color: 'var(--text-color)',
          border: '1px solid rgba(239, 68, 68, 0.2)'
        }
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const availabilityItems = [
    "Internships",
    "Full-Time Roles",
    "Freelance Projects",
    "Collaborations"
  ];

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-slate-50/20 dark:bg-slate-950/20 transition-colors duration-300">
      <div className="absolute left-0 bottom-0 w-96 h-96 rounded-full bg-brand-purple/5 filter blur-3xl pointer-events-none" />

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
            Get In Touch
          </h2>
          <p className="text-sm font-sans text-slate-500 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed mt-4">
            Have a project, internship opportunity, or collaboration in mind? Feel free to reach out. I'm always open to discussing AI, Data Analytics, Machine Learning, and Software Development opportunities.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-brand-purple via-brand-blue to-brand-cyan mx-auto rounded-full mt-6" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Glass contact detail cards */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-6">
            
            {/* List Details Card */}
            <div className="p-8 rounded-3xl glass-panel relative space-y-6 flex-grow text-left">
              <h3 className="font-display font-extrabold text-base text-slate-800 dark:text-white uppercase tracking-wider mb-6">
                Contact Information
              </h3>

              {/* Email */}
              <div className="flex items-center gap-4 group">
                <div className="p-3 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-white/10 text-brand-purple shrink-0 shadow-md transition-colors group-hover:border-brand-purple/40">
                  <Mail size={18} />
                </div>
                <div>
                  <span className="text-[9px] font-mono text-slate-400 dark:text-dark-textMuted uppercase tracking-widest font-bold block mb-0.5">
                    Email Address
                  </span>
                  <a href={`mailto:${portfolioData.personalInfo.email}`} className="text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-200 hover:text-brand-purple dark:hover:text-brand-cyan transition-colors">
                    {portfolioData.personalInfo.email}
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-4 group">
                <div className="p-3 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-white/10 text-brand-blue shrink-0 shadow-md transition-colors group-hover:border-brand-blue/40">
                  <Phone size={18} />
                </div>
                <div>
                  <span className="text-[9px] font-mono text-slate-400 dark:text-dark-textMuted uppercase tracking-widest font-bold block mb-0.5">
                    Phone Number
                  </span>
                  <a href={`tel:${portfolioData.personalInfo.phone}`} className="text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-200 hover:text-brand-blue dark:hover:text-brand-cyan transition-colors">
                    {portfolioData.personalInfo.phone}
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-center gap-4 group">
                <div className="p-3 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-white/10 text-brand-cyan shrink-0 shadow-md transition-colors group-hover:border-brand-cyan/40">
                  <MapPin size={18} />
                </div>
                <div>
                  <span className="text-[9px] font-mono text-slate-400 dark:text-dark-textMuted uppercase tracking-widest font-bold block mb-0.5">
                    Location
                  </span>
                  <span className="text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-200 leading-tight block">
                    {portfolioData.personalInfo.location}
                  </span>
                </div>
              </div>

              {/* LinkedIn */}
              <div className="flex items-center gap-4 group">
                <div className="p-3 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-white/10 text-brand-blue shrink-0 shadow-md transition-colors group-hover:border-brand-blue/40">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                </div>
                <div>
                  <span className="text-[9px] font-mono text-slate-400 dark:text-dark-textMuted uppercase tracking-widest font-bold block mb-0.5">
                    LinkedIn
                  </span>
                  <a href={`https://linkedin.com/in/${portfolioData.personalInfo.linkedin}`} target="_blank" rel="noopener noreferrer" className="text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-200 hover:text-brand-blue dark:hover:text-brand-cyan transition-colors">
                    linkedin.com/in/{portfolioData.personalInfo.linkedin}
                  </a>
                </div>
              </div>

              {/* GitHub */}
              <div className="flex items-center gap-4 group">
                <div className="p-3 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-300 shrink-0 shadow-md transition-colors group-hover:border-slate-400">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                </div>
                <div>
                  <span className="text-[9px] font-mono text-slate-400 dark:text-dark-textMuted uppercase tracking-widest font-bold block mb-0.5">
                    GitHub
                  </span>
                  <a href={`https://github.com/${portfolioData.personalInfo.github}`} target="_blank" rel="noopener noreferrer" className="text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-200 hover:text-brand-purple dark:hover:text-brand-cyan transition-colors">
                    github.com/{portfolioData.personalInfo.github}
                  </a>
                </div>
              </div>
            </div>

            {/* Availability details card */}
            <div className="p-8 rounded-3xl glass-panel relative text-left shrink-0">
              <span className="text-[9px] font-mono font-bold text-brand-purple dark:text-brand-cyan tracking-widest uppercase block mb-3">
                Available For
              </span>
              <div className="flex flex-wrap gap-2">
                {availabilityItems.map((item) => (
                  <span
                    key={item}
                    className="px-3 py-1 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-white/5 text-xs font-mono font-semibold text-slate-700 dark:text-slate-300"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-8 md:p-10 rounded-3xl glass-panel relative h-full flex flex-col justify-between overflow-hidden">
              
              {/* Submission Feedback Overlay */}
              <AnimatePresence>
                {submitSuccess && (
                  <motion.div
                    className="absolute inset-0 bg-white dark:bg-[#0E1321] z-20 flex flex-col items-center justify-center text-center p-8"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <motion.div
                      initial={{ scale: 0.5, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ type: 'spring', damping: 15 }}
                      className="w-16 h-16 rounded-full bg-emerald-50 dark:bg-emerald-950 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shadow-lg shadow-emerald-500/10 mb-4"
                    >
                      <CheckCircle size={32} />
                    </motion.div>
                    <h3 className="text-xl font-display font-extrabold text-slate-800 dark:text-white uppercase tracking-wide">
                      Message Dispatched
                    </h3>
                    <p className="text-xs text-slate-500 dark:text-dark-textMuted max-w-xs mt-2 leading-relaxed">
                      Thank you for contacting, Mahesh. Your inquiry has been registered in the system queue.
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>

              <div className="text-left">
                <h3 className="font-display font-extrabold text-lg sm:text-xl text-slate-800 dark:text-white tracking-wide uppercase mb-8">
                  Send A Message
                </h3>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  {/* Name field */}
                  <div className="relative">
                    <label className="text-[9px] font-mono text-slate-400 dark:text-dark-textMuted uppercase tracking-widest font-bold block mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      {...register('name', { required: 'Name is required' })}
                      className="w-full px-5 py-3.5 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-white/10 text-slate-800 dark:text-white text-sm font-sans focus:outline-none focus:border-brand-purple/50 transition-colors"
                      placeholder="e.g. John Doe"
                    />
                    {errors.name && (
                      <span className="text-[10px] font-mono text-red-500 mt-1 flex items-center gap-1">
                        <AlertTriangle size={10} />
                        <span>{errors.name.message}</span>
                      </span>
                    )}
                  </div>

                  {/* Email field */}
                  <div className="relative">
                    <label className="text-[9px] font-mono text-slate-400 dark:text-dark-textMuted uppercase tracking-widest font-bold block mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      {...register('email', {
                        required: 'Email is required',
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: 'Invalid email address'
                        }
                      })}
                      className="w-full px-5 py-3.5 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-white/10 text-slate-800 dark:text-white text-sm font-sans focus:outline-none focus:border-brand-blue/50 transition-colors"
                      placeholder="e.g. john@example.com"
                    />
                    {errors.email && (
                      <span className="text-[10px] font-mono text-red-500 mt-1 flex items-center gap-1">
                        <AlertTriangle size={10} />
                        <span>{errors.email.message}</span>
                      </span>
                    )}
                  </div>

                  {/* Subject field */}
                  <div className="relative">
                    <label className="text-[9px] font-mono text-slate-400 dark:text-dark-textMuted uppercase tracking-widest font-bold block mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      {...register('subject', { required: 'Subject is required' })}
                      className="w-full px-5 py-3.5 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-white/10 text-slate-800 dark:text-white text-sm font-sans focus:outline-none focus:border-brand-cyan/50 transition-colors"
                      placeholder="e.g. Project Collaboration Opportunity"
                    />
                    {errors.subject && (
                      <span className="text-[10px] font-mono text-red-500 mt-1 flex items-center gap-1">
                        <AlertTriangle size={10} />
                        <span>{errors.subject.message}</span>
                      </span>
                    )}
                  </div>

                  {/* Message field */}
                  <div className="relative">
                    <label className="text-[9px] font-mono text-slate-400 dark:text-dark-textMuted uppercase tracking-widest font-bold block mb-2">
                      Message Content
                    </label>
                    <textarea
                      rows={4}
                      {...register('message', { required: 'Message content is required' })}
                      className="w-full px-5 py-3.5 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-white/10 text-slate-800 dark:text-white text-sm font-sans focus:outline-none focus:border-brand-purple/50 transition-colors resize-none"
                      placeholder="Describe details here..."
                    />
                    {errors.message && (
                      <span className="text-[10px] font-mono text-red-500 mt-1 flex items-center gap-1">
                        <AlertTriangle size={10} />
                        <span>{errors.message.message}</span>
                      </span>
                    )}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center gap-2 py-4 px-6 rounded-xl bg-gradient-to-r from-brand-purple via-brand-blue to-brand-cyan hover:brightness-110 text-white font-semibold text-sm transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-md shadow-brand-purple/10"
                  >
                    {isSubmitting ? (
                      <span className="w-5 h-5 rounded-full border-2 border-t-transparent border-white animate-spin" />
                    ) : (
                      <>
                        <Send size={16} />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
