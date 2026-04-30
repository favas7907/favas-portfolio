import { motion } from 'motion/react';
import { Github, ExternalLink, Sparkles } from 'lucide-react';
import { PROJECTS } from '../constants/data';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.95 },
  visible: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } 
  }
};

export default function Projects() {
  return (
    <section id="projects" className="section-padding bg-slate-50 relative overflow-hidden">
      {/* Dynamic Background Effects */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[150px] -mr-96 -mt-96 opacity-60 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] -ml-64 -mb-64 opacity-40 pointer-events-none" />

      <div className="container-custom relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mb-20 flex flex-col items-center text-center max-w-3xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white border border-slate-200 shadow-sm text-text-secondary text-[10px] font-bold rounded-full mb-6 uppercase tracking-widest relative overflow-hidden group">
            <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-primary/10 to-transparent -translate-x-full group-hover:animate-[shimmer_2s_infinite]" />
            <Sparkles className="w-3.5 h-3.5 text-primary" />
            Selected Works
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-black tracking-tight leading-[1.1] mb-6">
            Featured <span className="text-primary italic font-serif font-normal relative inline-block">Projects<div className="absolute -bottom-2 left-0 w-full h-1 bg-primary/20 rounded-full" /></span>
          </h2>
          <p className="text-text-secondary text-lg font-medium leading-relaxed">
            Showcasing architecture, design, and code in scalable solutions. Every project here is a milestone in pushing the boundaries of digital experiences.
          </p>
        </motion.div>
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-10%" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-stretch"
        >
          {PROJECTS.map((project, index) => (
            <motion.div
              key={project.title}
              variants={cardVariants}
              whileHover={{ y: -10 }}
              className={`group flex flex-col h-full bg-white border border-slate-200 rounded-[2.5rem] overflow-hidden transition-all duration-700 hover:border-primary/50 hover:shadow-[0_20px_80px_-15px_rgba(225,29,72,0.3)] relative isolation-auto ${
                project.featured ? 'md:col-span-2 md:flex-row' : ''
              }`}
              style={{ perspective: 1000 }}
            >
              {/* Animated Glow Grid Background on Hover */}
              <div className="absolute inset-x-0 -top-40 h-full bg-gradient-to-br from-primary/10 via-transparent to-primary/5 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000 -z-10" />

              {/* Project Image Container */}
              <div className={`relative overflow-hidden bg-slate-50 flex-shrink-0 ${project.featured ? 'md:w-1/2 border-b md:border-b-0 md:border-r border-slate-200 min-h-[300px] lg:min-h-[400px]' : 'border-b border-slate-200 h-64 sm:h-72 w-full'}`}>
                <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-20 transition-opacity duration-700 z-10 pointer-events-none" />
                <motion.img 
                  whileHover={{ scale: 1.08, rotate: 1 }}
                  transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover origin-center absolute inset-0"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
                
                {project.featured && (
                  <motion.div 
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5, duration: 0.6 }}
                    className="absolute top-6 left-6 px-4 py-1.5 bg-white/90 backdrop-blur-xl border border-slate-200/50 text-black text-[10px] font-bold uppercase tracking-widest shadow-2xl rounded-xl z-20 flex items-center gap-2 group-hover:-translate-y-1 transition-transform duration-500"
                  >
                    <span className="w-2 h-2 rounded-full bg-primary animate-[ping_2s_infinite]" />
                    <span className="w-2 h-2 rounded-full bg-primary absolute" />
                    Spotlight
                  </motion.div>
                )}
              </div>
              
              {/* Project Content */}
              <div className={`flex flex-col bg-white relative z-10 flex-grow ${project.featured ? 'md:w-1/2 p-8 lg:p-12 justify-center' : 'p-8'}`}>
                {/* Decorative element */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

                <div className="flex justify-between items-start mb-6">
                  <motion.h3 
                    className={`font-bold text-black tracking-tight group-hover:text-primary transition-colors duration-500 ${project.featured ? 'text-3xl lg:text-4xl' : 'text-2xl'}`}
                  >
                    {project.title}
                  </motion.h3>
                  <div className="flex gap-2 shrink-0 ml-4 relative z-20">
                     <motion.a whileHover={{ scale: 1.1, rotate: 5 }} whileTap={{ scale: 0.9 }} href={project.github} className="w-10 h-10 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-500 hover:text-white hover:bg-black hover:border-black transition-all duration-300 shadow-sm" aria-label="GitHub Repository">
                        <Github className="w-4 h-4" />
                     </motion.a>
                     <motion.a whileHover={{ scale: 1.1, rotate: -5 }} whileTap={{ scale: 0.9 }} href={project.live} className="w-10 h-10 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-500 hover:text-white hover:bg-primary hover:border-primary transition-all duration-300 shadow-sm" aria-label="Live Demo">
                        <ExternalLink className="w-4 h-4" />
                     </motion.a>
                  </div>
                </div>

                <p className={`text-text-secondary font-medium leading-relaxed mb-8 flex-grow ${project.featured ? 'text-lg max-w-lg' : 'text-base line-clamp-4'}`}>
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="mt-auto pt-6 border-t border-slate-100 flex flex-wrap gap-2 relative z-20">
                  {project.tech.map((t, i) => (
                    <motion.span 
                      key={t} 
                      whileHover={{ scale: 1.05, y: -2 }}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 * i, duration: 0.4 }}
                      className="px-3.5 py-1.5 bg-slate-50 text-slate-600 text-[10px] font-bold uppercase tracking-widest border border-slate-200 rounded-lg group-hover:border-primary/30 group-hover:bg-primary/5 transition-all duration-300 shadow-sm hover:shadow-md cursor-default"
                    >
                      {t}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.4 }}
          className="mt-20 text-center"
        >
          <a 
            href="https://github.com" 
            className="inline-flex items-center justify-center px-8 py-4 bg-white border-2 border-slate-200 text-black font-bold uppercase tracking-widest text-[11px] rounded-xl hover:bg-black hover:text-white hover:border-black transition-all duration-300 shadow-sm hover:shadow-[0_10px_30px_rgba(0,0,0,0.15)] hover:-translate-y-1 group"
          >
            Explore more on GitHub
            <Github className="w-4 h-4 ml-3 group-hover:rotate-12 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
