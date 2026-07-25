import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { PROJECTS } from '../../constants/data';
import ProjectEvidenceCard from '../projects/evidence/ProjectEvidenceCard';

export default function ProjectsPreview() {
  // Curate top 3 projects for the showcase
  const showcaseProjects = PROJECTS.slice(0, 3);

  return (
    <section className="py-24 md:py-32 lg:py-40 bg-slate-50 relative overflow-hidden">
      <div className="container-custom relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 mb-16 lg:mb-24">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-3 lg:col-start-2"
          >
            <h2 className="text-xs sm:text-sm font-bold uppercase tracking-[0.2em] text-slate-400">
              Engineering Evidence
            </h2>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col items-start"
          >
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-medium text-slate-900 tracking-tight leading-[1.3] mb-6 max-w-3xl">
              Engineering solutions to complex technical challenges.
            </h3>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl">
              A curated selection of products demonstrating architecture, security, and performance. Each case study details the problem, the technical trade-offs, and the final implementation.
            </p>
          </motion.div>
        </div>

        <div className="max-w-4xl mx-auto flex flex-col">
          {showcaseProjects.map((project, index) => (
            <ProjectEvidenceCard key={project.id} project={project} index={index} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="mt-20 lg:mt-32 pt-12 border-t border-slate-200 flex justify-center"
        >
          <Link 
            to="/projects" 
            className="group inline-flex items-center text-sm font-bold text-slate-900 uppercase tracking-[0.15em] pb-2 border-b border-slate-300 hover:text-blue-600 hover:border-blue-600 transition-colors duration-300"
          >
            View complete project archive <ArrowRight className="w-4 h-4 ml-3 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </motion.div>

      </div>
    </section>
  );
}
