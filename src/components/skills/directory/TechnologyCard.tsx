import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Skill } from '../../../data/skills';
import TechIcon from '../../TechIcon';
import { getTechColor } from '../../../utils/techIcons';

interface TechnologyCardProps {
  skill: Skill;
  domain: string;
}

export default function TechnologyCard({ skill, domain }: TechnologyCardProps) {
  const techId = skill.name.toLowerCase().replace(/ /g, '-').replace(/\./g, '');
  const brandColor = getTechColor(skill.name);
  
  return (
    <div className="group flex flex-col h-full bg-white rounded-2xl border border-slate-200/80 overflow-hidden hover:border-primary/20 transition-all duration-500 gradient-border hover-lift">
      
      {/* Colored top accent bar */}
      <div 
        className="h-1 w-full transition-all duration-500 group-hover:h-1.5"
        style={{ background: `linear-gradient(90deg, ${brandColor}, ${brandColor}88)` }}
      />

      <div className="p-6 md:p-8 flex flex-col h-full">
        {/* Header with icon */}
        <div className="flex items-start gap-4 mb-6">
          <div 
            className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 transition-transform duration-500 group-hover:scale-110"
            style={{ backgroundColor: `${brandColor}10` }}
          >
            <TechIcon name={skill.name} size={28} />
          </div>
          <div className="min-w-0">
            <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400 block mb-1">
              {domain}
            </span>
            <h3 className="text-xl font-semibold tracking-tight text-slate-900 leading-tight">{skill.name}</h3>
          </div>
        </div>

        <div className="space-y-5 flex-grow">
          {/* Best For */}
          <p className="text-slate-500 text-sm leading-relaxed">
            {skill.bestFor}
          </p>

          {/* Status badges */}
          <div className="flex flex-wrap gap-2">
            {skill.production && (
              <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-600 border border-emerald-100">
                Production
              </span>
            )}
            {skill.learningStatus && (
              <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-blue-50 text-blue-600 border border-blue-100">
                {skill.learningStatus}
              </span>
            )}
            {skill.firstUsed && (
              <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-slate-50 text-slate-500 border border-slate-100">
                Since {skill.firstUsed}
              </span>
            )}
          </div>

          {/* Real Project Usage */}
          {skill.relatedProjects && skill.relatedProjects.length > 0 && (
            <div className="pt-4 border-t border-slate-100">
              <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400 block mb-3">
                Used In
              </span>
              <div className="flex flex-wrap gap-2">
                {skill.relatedProjects.map(project => {
                  const projectSlug = project.toLowerCase().replace(/ /g, '-').replace(/\./g, '');
                  return (
                    <Link 
                      key={project} 
                      to={`/projects/${projectSlug}`}
                      className="inline-flex items-center text-xs font-medium text-slate-600 hover:text-primary px-2.5 py-1.5 rounded-lg bg-slate-50 hover:bg-primary/5 transition-all duration-300"
                    >
                      {project}
                    </Link>
                  );
                })}
              </div>
            </div>
          )}
        </div>
        
        {/* Footer Explore Link */}
        <div className="mt-8 pt-5 border-t border-slate-100">
          <Link 
            to={`/skills/${techId}`} 
            className="inline-flex items-center text-sm font-medium text-slate-500 group-hover:text-primary transition-colors w-full justify-between"
          >
            View Details
            <div 
              className="w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 group-hover:shadow-sm"
              style={{ backgroundColor: `${brandColor}08` }}
            >
              <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-primary group-hover:-rotate-45 transition-all" />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
