import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import TechIcon from '../TechIcon';
import { getTechColor } from '../../utils/techIcons';

interface RelatedTechnologiesSectionProps {
  relatedTechnologies?: string[];
}

export default function RelatedTechnologiesSection({ relatedTechnologies }: RelatedTechnologiesSectionProps) {
  if (!relatedTechnologies || relatedTechnologies.length === 0) return null;

  const getSlug = (name: string) => name.toLowerCase().replace(/ /g, '-').replace(/\./g, '');

  return (
    <section className="py-16 md:py-24 border-b border-slate-100 bg-white">
      <div className="container-custom">
        <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-12 tracking-tight">Related Technologies</h2>
        <div className="flex flex-wrap gap-4">
          {relatedTechnologies.map((tech, idx) => {
            const brandColor = getTechColor(tech);
            return (
              <Link 
                key={idx} 
                to={`/skills/${getSlug(tech)}`}
                className="group flex items-center gap-3 bg-white border border-slate-200/80 rounded-2xl px-5 py-4 hover:border-primary/20 hover:shadow-md transition-all duration-300 gradient-border"
              >
                <div 
                  className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110"
                  style={{ backgroundColor: `${brandColor}10` }}
                >
                  <TechIcon name={tech} size={22} />
                </div>
                <span className="text-slate-900 font-medium mr-3">{tech}</span>
                <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-primary group-hover:-rotate-45 transition-all" />
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
