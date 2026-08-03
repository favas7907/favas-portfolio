import { motion, useInView } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { PROJECTS } from '../../constants/data';
import { useRef } from 'react';
import TechIcon from '../TechIcon';

export default function ProjectsPreview() {
  const showcaseProjects = PROJECTS.slice(0, 3);
  const gridRef = useRef(null);
  const isInView = useInView(gridRef, { once: true, margin: "-50px" });

  return (
    <section className="py-24 md:py-32 lg:py-40 bg-white relative overflow-hidden">
      {/* Subtle decorative dots pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.015]" aria-hidden="true"
        style={{ backgroundImage: 'radial-gradient(circle, #000 1px, transparent 1px)', backgroundSize: '24px 24px' }}
      />
      
      <div className="container-custom relative z-10">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 lg:mb-20"
        >
          <div>
            <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-primary mb-4">
              <motion.span 
                className="w-8 h-px bg-primary"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                style={{ transformOrigin: 'left' }}
              />
              Featured Work
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black tracking-tight leading-[1.1]">
              Projects I've Built
            </h2>
          </div>
          <Link 
            to="/projects" 
            className="group inline-flex items-center text-sm font-semibold text-slate-500 hover:text-primary transition-colors shrink-0 link-underline"
          >
            View all projects
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1.5 transition-transform duration-300" />
          </Link>
        </motion.div>

        {/* Project Grid */}
        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {showcaseProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40, scale: 0.97 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: index * 0.12, ease: [0.16, 1, 0.3, 1] }}
            >
              <Link 
                to={`/projects/${project.id}`}
                className="group block h-full"
              >
                <article className="h-full bg-white rounded-2xl border border-slate-200/80 overflow-hidden hover-lift relative">
                  {/* Gradient accent on hover */}
                  <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none z-10"
                    style={{ boxShadow: 'inset 0 0 0 1px rgba(37, 99, 235, 0.15)' }}
                  />
                  
                  {/* Project Image */}
                  <div className="aspect-[16/10] overflow-hidden bg-slate-100 relative">
                    <img 
                      src={project.image} 
                      alt={`${project.title} interface`}
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
                      loading="lazy"
                    />
                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/5 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
                    
                    {/* Title overlay on image */}
                    <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                      <span className="inline-block px-2.5 py-1 bg-white/15 backdrop-blur-md border border-white/20 text-white text-[10px] font-bold uppercase tracking-widest rounded-md mb-2">
                        {project.status}
                      </span>
                      <h3 className="text-lg font-bold text-white tracking-tight leading-snug">
                        {project.title}
                      </h3>
                      <p className="text-xs text-white/70 mt-0.5">{project.year} · {project.role}</p>
                    </div>
                    
                    {/* Floating action */}
                    <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 -translate-y-2 group-hover:translate-y-0 transition-all duration-400 shadow-sm z-20">
                      <ArrowUpRight className="w-4 h-4 text-black" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <p className="text-sm text-slate-500 leading-relaxed line-clamp-2 mb-5">
                      {project.tagline}
                    </p>

                    {/* Tech tags with hover */}
                    <div className="flex flex-wrap gap-1.5 pt-5 border-t border-slate-100">
                      {project.tech.slice(0, 4).map(t => (
                        <span key={t} className="inline-flex items-center gap-1 text-[10px] font-semibold text-slate-500 uppercase tracking-wider px-2.5 py-1 rounded-lg bg-slate-50 group-hover:bg-primary/5 group-hover:text-primary/70 transition-colors duration-500">
                          <TechIcon name={t} size={12} />
                          {t}
                        </span>
                      ))}
                      {project.tech.length > 4 && (
                        <span className="text-[10px] font-semibold text-slate-300 uppercase tracking-wider px-2 py-1">
                          +{project.tech.length - 4}
                        </span>
                      )}
                    </div>
                  </div>
                </article>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="mt-16 lg:mt-20 flex justify-center"
        >
          <Link to="/projects" className="btn-accent group">
            <span>Explore All Projects</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </motion.div>

      </div>
    </section>
  );
}
