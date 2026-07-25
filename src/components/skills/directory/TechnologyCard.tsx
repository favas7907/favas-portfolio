import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Skill } from '../../../data/skills';

interface TechnologyCardProps {
  skill: Skill;
  domain: string;
}

export default function TechnologyCard({ skill, domain }: TechnologyCardProps) {
  const techId = skill.name.toLowerCase().replace(/ /g, '-').replace(/\./g, '');
  
  return (
    <div className="group flex flex-col h-full bg-white rounded-3xl border border-slate-100 p-8 md:p-10 hover:border-blue-200 hover:shadow-[0_8px_30px_-12px_rgba(59,130,246,0.15)] transition-all duration-500">
      
      {/* Header */}
      <div className="mb-8">
        <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400 block mb-4">
          {domain}
        </span>
        <h3 className="text-2xl font-medium tracking-tight text-slate-900 mb-3">{skill.name}</h3>
      </div>

      <div className="space-y-8 flex-grow">
        
        {/* Best For */}
        <div>
          <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400 block mb-3 group-hover:text-blue-400 transition-colors">
            Best For
          </span>
          <p className="text-slate-600 font-light leading-relaxed text-sm">
            {skill.bestFor}
          </p>
        </div>

        {/* Real Project Usage */}
        {skill.relatedProjects && skill.relatedProjects.length > 0 && (
          <div className="pt-4 border-t border-slate-50">
            <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400 block mb-4 group-hover:text-blue-400 transition-colors">
              Real Project Usage
            </span>
            <div className="flex flex-col gap-3">
              {skill.relatedProjects.map(project => {
                const projectSlug = project.toLowerCase().replace(/ /g, '-').replace(/\./g, '');
                return (
                  <Link 
                    key={project} 
                    to={`/projects/${projectSlug}`}
                    className="inline-flex items-center text-sm font-medium text-slate-700 hover:text-blue-600 transition-colors w-fit"
                  >
                    {project}
                    <ArrowRight className="w-3 h-3 ml-2 text-slate-300 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  </Link>
                );
              })}
            </div>
          </div>
        )}
      </div>
      
      {/* Footer Explore Link */}
      <div className="mt-10 pt-6 flex items-center justify-between border-t border-slate-50">
        <Link 
          to={`/skills/${techId}`} 
          className="inline-flex items-center text-sm font-medium text-slate-500 group-hover:text-blue-600 transition-colors w-full justify-between"
        >
          Explore Technology Details
          <div className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center group-hover:bg-blue-50 transition-colors shrink-0">
            <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-blue-600 group-hover:-rotate-45 transition-all" />
          </div>
        </Link>
      </div>

    </div>
  );
}
