import { motion } from 'motion/react';
import { PROJECTS } from '../../constants/data';

export default function ProjectsHero() {
  const projectCount = PROJECTS.length;

  return (
    <section className="pt-32 pb-16 md:pt-44 md:pb-20 bg-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/[0.02] rounded-full blur-[120px] -translate-y-1/3 translate-x-1/4" aria-hidden="true" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-accent/[0.02] rounded-full blur-[80px] translate-y-1/2" aria-hidden="true" />
      
      <div className="container-custom relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl"
        >
          <motion.span 
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-primary mb-6"
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            <span className="w-8 h-px bg-primary" />
            Projects · {projectCount} Works
          </motion.span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-black leading-[1.1] mb-6">
            Software{' '}
            <span className="text-gradient-primary">Catalogue</span>
          </h1>
          <motion.p 
            className="text-lg md:text-xl text-slate-500 leading-relaxed mb-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            A mix of full-stack apps, experiments, and side projects — each one taught me something new about how software actually works.
          </motion.p>
          <motion.div 
            className="flex flex-wrap items-center gap-4 text-xs uppercase tracking-widest text-slate-400 font-bold"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              Production
            </span>
            <span className="text-slate-200">|</span>
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-primary" />
              Open Source
            </span>
            <span className="text-slate-200">|</span>
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-accent" />
              Research
            </span>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Animated bottom border */}
      <motion.div 
        className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
      />
    </section>
  );
}
