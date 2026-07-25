import React from 'react';
import { motion } from 'motion/react';

export default function ProjectsHero() {
  return (
    <section className="pt-32 pb-16 md:pt-48 md:pb-24 bg-slate-50 relative overflow-hidden border-b border-slate-200/50">
      <div className="container-custom">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-4xl"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-slate-900 leading-[1.1] mb-8">
            Software Catalogue
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl text-slate-500 font-light leading-relaxed max-w-3xl mb-12">
            A technical showcase of production systems, decentralized protocols, and low-level rendering experiments. Engineered with an emphasis on scalability, resilience, and strict architectural boundaries.
          </p>
          <div className="flex flex-wrap items-center gap-4 text-[11px] uppercase tracking-widest text-slate-500 font-bold" aria-label="Project Categories">
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" aria-hidden="true"></span>
              Production
            </span>
            <span className="w-1 h-1 rounded-full bg-slate-300" aria-hidden="true"></span>
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-purple-500" aria-hidden="true"></span>
              Open Source
            </span>
            <span className="w-1 h-1 rounded-full bg-slate-300" aria-hidden="true"></span>
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-slate-400" aria-hidden="true"></span>
              Research
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
