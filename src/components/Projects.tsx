import { motion } from 'motion/react';
import { Github, ExternalLink, ArrowUpRight } from 'lucide-react';
import { PROJECTS } from '../constants/data';
import SectionHeading from './SectionHeading';

export default function Projects() {
  return (
    <section id="projects" className="section-padding bg-bg-main relative overflow-hidden">
      {/* Background Decorative Element */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(139,92,246,0.02),transparent)] pointer-events-none" />
      
      <div className="container-custom relative z-10">
        <SectionHeading 
          title="Featured Projects" 
          badge="Portfolio"
          subtitle="A selection of my recent work, ranging from web applications to security tools."
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group card-style flex flex-col h-full overflow-hidden"
            >
              {/* Project Image */}
              <div className="relative h-56 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {project.featured && (
                  <div className="absolute top-4 left-4 px-4 py-1.5 bg-primary text-white text-[9px] font-bold rounded-full uppercase tracking-widest shadow-xl z-10">
                    Featured
                  </div>
                )}
              </div>
              
              {/* Project Content */}
              <div className="p-8 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-6">
                  <h3 className="text-xl font-extrabold text-text-primary group-hover:text-primary transition-colors tracking-tight leading-tight">
                    {project.title}
                  </h3>
                  <div className="w-10 h-10 bg-purple-50 rounded-xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500 shadow-sm shrink-0">
                    <ArrowUpRight className="w-5 h-5" />
                  </div>
                </div>

                <p className="text-text-secondary text-sm leading-relaxed font-medium mb-8 line-clamp-3">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-10">
                  {project.tech.map((t) => (
                    <span 
                      key={t} 
                      className="text-[9px] font-bold uppercase tracking-widest text-text-secondary bg-purple-50/50 px-3 py-1.5 rounded-lg border border-purple-100/30"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                
                {/* Links - Pushed to bottom */}
                <div className="mt-auto pt-6 border-t border-purple-50 flex items-center gap-8">
                  <a 
                    href={project.github} 
                    className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-text-secondary hover:text-primary transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    <span>Code</span>
                  </a>
                  <a 
                    href={project.live} 
                    className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-text-secondary hover:text-primary transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>Live</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <a 
            href="https://github.com" 
            className="inline-flex items-center gap-3 px-8 py-3 bg-white border border-purple-100 rounded-xl text-text-secondary font-bold uppercase tracking-[0.2em] text-[10px] hover:bg-purple-50 hover:text-primary transition-all shadow-sm"
          >
            Explore more on GitHub
            <Github className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
