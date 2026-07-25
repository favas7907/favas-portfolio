import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { EngineeringChallenge } from '../../../data/challenges';

interface EngineeringChallengeCardProps {
  challenge: EngineeringChallenge;
}

export default function EngineeringChallengeCard({ challenge }: EngineeringChallengeCardProps) {
  const getSlug = (name: string) => name.toLowerCase().replace(/ /g, '-').replace(/\./g, '');

  return (
    <div className="bg-white rounded-3xl border border-slate-100 p-8 md:p-10 flex flex-col h-full hover:border-blue-200 hover:shadow-[0_8px_30px_-12px_rgba(59,130,246,0.15)] transition-all duration-500 group">
      <div className="mb-10">
        <h3 className="text-2xl font-medium tracking-tight text-slate-900 mb-3">{challenge.title}</h3>
        <p className="text-slate-500 font-light leading-relaxed">{challenge.description}</p>
      </div>

      <div className="space-y-10 flex-grow">
        <div>
          <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400 block mb-5 group-hover:text-blue-400 transition-colors">
            Technologies Used
          </span>
          <div className="flex flex-wrap gap-2">
            {challenge.technologies.map((tech) => (
              <Link 
                key={tech}
                to={`/skills/${getSlug(tech)}`} 
                className="inline-flex items-center px-3 py-1.5 rounded-full bg-slate-50 text-sm text-slate-600 group-hover:bg-blue-50/50 group-hover:text-slate-700 hover:!bg-blue-50 hover:!text-blue-600 font-medium transition-colors border border-slate-100 group-hover:border-blue-100/50 hover:!border-blue-100"
              >
                {tech}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400 block mb-5 group-hover:text-blue-400 transition-colors">
            Projects
          </span>
          <div className="flex flex-col gap-3">
            {challenge.projects.map((project) => (
              <Link 
                key={project} 
                to={`/projects/${getSlug(project)}`}
                className="text-base text-slate-700 font-medium group-hover:text-slate-900 hover:!text-blue-600 transition-colors inline-flex items-center w-fit"
              >
                {project}
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-12 pt-8 border-t border-slate-50">
        <Link 
          to="#technologies" 
          onClick={(e) => {
            e.preventDefault();
            document.getElementById('technologies')?.scrollIntoView({ behavior: 'smooth' });
          }}
          className="inline-flex items-center text-sm font-medium text-slate-500 group-hover:text-blue-600 transition-colors"
        >
          Explore Technologies
          <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </div>
  );
}
