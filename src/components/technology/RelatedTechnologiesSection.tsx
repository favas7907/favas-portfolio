import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

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
          {relatedTechnologies.map((tech, idx) => (
            <Link 
              key={idx} 
              to={`/skills/${getSlug(tech)}`}
              className="group flex items-center justify-between bg-slate-50 border border-slate-100 rounded-2xl px-6 py-4 hover:border-blue-200 hover:shadow-sm transition-all"
            >
              <span className="text-slate-900 font-medium mr-6">{tech}</span>
              <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-blue-600 group-hover:-rotate-45 transition-all" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
