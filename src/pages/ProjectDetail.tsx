import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowLeft, ExternalLink, Github, CheckCircle2, Database, Server, Layout, ShieldCheck, Activity, Globe, Zap, ArrowUpRight, Lock, Repeat, Network, Blocks, Terminal } from 'lucide-react';
import { PROJECTS } from '../constants/data';
import CallToExplore from '../components/CallToExplore';
import WorkflowNavigator from '../components/projects/workflow/WorkflowNavigator';

const SectionHeader = ({ title }: { title: string }) => (
  <h2 className="text-2xl md:text-3xl font-medium tracking-tight text-slate-900 mb-6">
    {title}
  </h2>
);

const TextContent = ({ children }: { children: React.ReactNode }) => (
  <div className="prose prose-slate prose-lg max-w-none">
    <p className="text-slate-600 leading-relaxed">
      {children}
    </p>
  </div>
);

export default function ProjectDetail() {
  const { id } = useParams<{ id: string }>();
  const project = PROJECTS.find(p => p.id === id);

  if (!project) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center bg-white pt-32">
        <h1 className="text-3xl font-medium mb-6">Project not found</h1>
        <Link 
          to="/projects" 
          className="inline-flex items-center text-sm font-bold uppercase tracking-widest text-black hover:text-primary transition-colors group"
        >
          <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-2 transition-transform" />
          Return to Projects
        </Link>
      </div>
    );
  }

  return (
    <>
      {/* Detail Hero */}
      <section className="pt-32 pb-16 md:pt-48 md:pb-24 bg-white">
        <div className="container-custom">
          
          <Link 
            to="/projects" 
            className="inline-flex items-center text-[10px] font-bold uppercase tracking-widest text-slate-400 hover:text-black transition-colors group mb-12"
          >
            <ArrowLeft className="w-3 h-3 mr-2 group-hover:-translate-x-1 transition-transform" />
            All Projects
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="lg:col-span-8"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-slate-900 leading-[1.1] mb-6">
                {project.title}
              </h1>
              <p className="text-xl md:text-2xl text-slate-500 font-medium leading-relaxed max-w-3xl">
                {project.tagline}
              </p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="lg:col-span-4 flex lg:justify-end"
            >
              <div className="flex items-center gap-4">
                <a 
                  href={project.github} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-600 hover:text-white hover:bg-slate-900 hover:border-slate-900 transition-all duration-300"
                  aria-label="Source Code"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a 
                  href={project.live} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-600 hover:text-white hover:bg-primary hover:border-primary transition-all duration-300"
                  aria-label="Live Project"
                >
                  <ExternalLink className="w-5 h-5" />
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Hero Image */}
      <section className="bg-white pb-24 md:pb-32">
        <div className="container-custom">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="w-full aspect-[16/9] md:aspect-[21/9] bg-slate-100 rounded-2xl overflow-hidden relative border border-slate-100 shadow-sm"
          >
            <img 
              src={project.image} 
              alt={`${project.title} Interface Preview`} 
              className="w-full h-full object-cover"
              loading="eager"
            />
          </motion.div>
        </div>
      </section>

      {/* Project Meta */}
      <section className="py-16 bg-slate-50 border-y border-slate-100">
        <div className="container-custom">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
            <div className="flex flex-col">
              <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-3">Role</span>
              <span className="text-slate-900 font-medium text-lg">{project.role}</span>
            </div>
            <div className="flex flex-col">
              <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-3">Timeline</span>
              <span className="text-slate-900 font-medium text-lg">{project.timeline}</span>
            </div>
            <div className="flex flex-col">
              <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-3">Year</span>
              <span className="text-slate-900 font-medium text-lg">{project.year}</span>
            </div>
            <div className="flex flex-col">
              <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-3">Tech Stack</span>
              <div className="flex flex-wrap gap-x-4 gap-y-2">
                {project.tech.map(t => (
                  <span key={t} className="text-slate-900 font-medium text-lg">{t}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Details Content / Engineering Methodology */}
      <section className="bg-white">
        <div className="container-custom">
          <WorkflowNavigator project={project} />
        </div>
      </section>

      <CallToExplore />
    </>
  );
}
