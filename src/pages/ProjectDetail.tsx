import { useParams, Link, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, ExternalLink, ArrowRight } from 'lucide-react';
import { PROJECTS } from '../constants/data';
import WorkflowNavigator from '../components/projects/workflow/WorkflowNavigator';
import TechIcon from '../components/TechIcon';

export default function ProjectDetail() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const project = PROJECTS.find(p => p.id === id);
  const projectIndex = PROJECTS.findIndex(p => p.id === id);
  const nextProject = PROJECTS[(projectIndex + 1) % PROJECTS.length];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!project) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center bg-white pt-32">
        <h1 className="text-3xl font-bold mb-6 text-black">Project not found</h1>
        <Link to="/projects" className="btn-outline">
          <ArrowLeft className="w-4 h-4" /> Return to Projects
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen">
      {/* Hero */}
      <section className="pt-28 pb-12 md:pt-40 md:pb-16">
        <div className="container-custom">
          
          <Link 
            to="/projects" 
            className="inline-flex items-center text-sm font-semibold text-slate-400 hover:text-primary transition-colors group mb-8 md:mb-12"
          >
            <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
            All Projects
          </Link>

          <div className="max-w-4xl">
            <div className="flex flex-wrap items-center gap-3 mb-5">
              <span className="px-3 py-1.5 bg-primary/5 text-primary text-[10px] font-bold uppercase tracking-widest rounded-md">
                {project.domain}
              </span>
              <span className="text-sm text-slate-400 font-medium">{project.year}</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-black leading-[1.1] mb-5">
              {project.title}
            </h1>
            <p className="text-lg md:text-xl text-slate-500 leading-relaxed mb-8 max-w-2xl">
              {project.tagline}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-3">
              {project.live && (
                <a 
                  href={project.live} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn-accent"
                >
                  <ExternalLink className="w-4 h-4" /> Live Demo
                </a>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Hero Image */}
      <section className="pb-12 md:pb-20">
        <div className="container-custom">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="w-full aspect-[16/9] md:aspect-[2/1] bg-slate-100 rounded-2xl overflow-hidden border border-slate-200"
          >
            <img 
              src={project.image} 
              alt={`${project.title} Interface`} 
              className="w-full h-full object-cover"
              loading="eager"
            />
          </motion.div>
        </div>
      </section>

      {/* Project Meta */}
      <section className="py-10 md:py-12 bg-slate-50 border-y border-slate-100">
        <div className="container-custom">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400 block mb-2">Role</span>
              <span className="text-black font-semibold text-sm md:text-base">{project.role}</span>
            </div>
            <div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400 block mb-2">Timeline</span>
              <span className="text-black font-semibold text-sm md:text-base">{project.timeline}</span>
            </div>
            <div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400 block mb-2">Year</span>
              <span className="text-black font-semibold text-sm md:text-base">{project.year}</span>
            </div>
            <div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400 block mb-2">Stack</span>
              <div className="flex flex-wrap gap-2">
                {project.tech.map(t => (
                  <span key={t} className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary bg-primary/5 px-3 py-1.5 rounded-lg border border-primary/10">
                    <TechIcon name={t} size={16} />
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      {project.details ? (
        <section className="bg-white">
          <div className="container-custom">
            <WorkflowNavigator project={project} />
          </div>
        </section>
      ) : (
        <section className="py-16 md:py-24 bg-white">
          <div className="container-custom max-w-3xl">
            <h2 className="text-2xl font-bold text-black mb-6">About this project</h2>
            <p className="text-lg text-slate-500 leading-relaxed mb-8">{project.description}</p>
            {project.live && (
              <a href={project.live} target="_blank" rel="noopener noreferrer" className="btn-accent">
                <ExternalLink className="w-4 h-4" /> Live Demo
              </a>
            )}
          </div>
        </section>
      )}

      {/* Next Project — clean white navigation */}
      {nextProject && (
        <section className="py-16 md:py-24 border-t border-slate-100">
          <div className="container-custom">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-2 block">Next Project</span>
                <h3 className="text-2xl md:text-3xl font-bold text-black tracking-tight">{nextProject.title}</h3>
                <p className="text-slate-500 mt-1">{nextProject.tagline}</p>
              </div>
              <Link
                to={`/projects/${nextProject.id}`}
                className="btn-outline shrink-0"
              >
                View Project <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
