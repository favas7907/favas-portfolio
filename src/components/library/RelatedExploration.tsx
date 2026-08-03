import { Link } from 'react-router-dom';
import { ArrowRight, Code, Terminal, Send, Network } from 'lucide-react';

export default function RelatedExploration() {
  return (
    <section className="mt-24 pt-12 border-t border-slate-100">
      <h2 className="text-sm font-bold uppercase tracking-widest text-slate-900 mb-8 flex items-center gap-3">
        <span className="w-2 h-2 rounded-full bg-slate-300"></span>
        Continue Exploring
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Link 
          to="/projects" 
          className="group p-6 bg-slate-50 border border-slate-100 rounded-xl hover:border-slate-200 hover:bg-slate-100 transition-all duration-300"
        >
          <div className="flex items-center justify-between mb-4">
            <Code className="w-5 h-5 text-slate-400 group-hover:text-primary transition-colors" />
            <ArrowRight className="w-4 h-4 text-slate-300 group-hover:text-primary group-hover:translate-x-1 transition-all" />
          </div>
          <h3 className="text-base font-medium text-slate-900 mb-2">Engineering Projects</h3>
          <p className="text-sm text-slate-500 font-light leading-relaxed">View the practical applications of these concepts in production.</p>
        </Link>
        
        <Link 
          to="/skills" 
          className="group p-6 bg-slate-50 border border-slate-100 rounded-xl hover:border-slate-200 hover:bg-slate-100 transition-all duration-300"
        >
          <div className="flex items-center justify-between mb-4">
            <Terminal className="w-5 h-5 text-slate-400 group-hover:text-primary transition-colors" />
            <ArrowRight className="w-4 h-4 text-slate-300 group-hover:text-primary group-hover:translate-x-1 transition-all" />
          </div>
          <h3 className="text-base font-medium text-slate-900 mb-2">Technical Skills</h3>
          <p className="text-sm text-slate-500 font-light leading-relaxed">Explore the core technologies that power my development stack.</p>
        </Link>

        <Link 
          to="/about" 
          className="group p-6 bg-slate-50 border border-slate-100 rounded-xl hover:border-slate-200 hover:bg-slate-100 transition-all duration-300"
        >
          <div className="flex items-center justify-between mb-4">
            <Network className="w-5 h-5 text-slate-400 group-hover:text-primary transition-colors" />
            <ArrowRight className="w-4 h-4 text-slate-300 group-hover:text-primary group-hover:translate-x-1 transition-all" />
          </div>
          <h3 className="text-base font-medium text-slate-900 mb-2">Experience & Timeline</h3>
          <p className="text-sm text-slate-500 font-light leading-relaxed">See how this entry fits into my broader professional journey.</p>
        </Link>

        <Link 
          to="/contact" 
          className="group p-6 bg-slate-50 border border-slate-100 rounded-xl hover:border-slate-200 hover:bg-slate-100 transition-all duration-300"
        >
          <div className="flex items-center justify-between mb-4">
            <Send className="w-5 h-5 text-slate-400 group-hover:text-primary transition-colors" />
            <ArrowRight className="w-4 h-4 text-slate-300 group-hover:text-primary group-hover:translate-x-1 transition-all" />
          </div>
          <h3 className="text-base font-medium text-slate-900 mb-2">Get in Touch</h3>
          <p className="text-sm text-slate-500 font-light leading-relaxed">Start a conversation about a potential collaboration or role.</p>
        </Link>
      </div>
    </section>
  );
}
