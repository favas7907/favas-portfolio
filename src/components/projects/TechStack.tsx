import React from 'react';
import { Link } from 'react-router-dom';

interface TechStackProps {
  tech: string[];
  limit?: number;
}

export default function TechStack({ tech, limit }: TechStackProps) {
  const displayTech = limit ? tech.slice(0, limit) : tech;
  const remaining = limit && tech.length > limit ? tech.length - limit : 0;

  return (
    <div className="flex flex-wrap gap-2" aria-label="Technologies used">
      {displayTech.map((t, idx) => (
        <Link 
          key={idx}
          to="/skills"
          className="px-3 py-1.5 bg-slate-50 border border-slate-100 text-slate-600 hover:text-blue-600 hover:border-blue-200 hover:bg-blue-50 text-xs font-medium rounded-lg whitespace-nowrap transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
          title={`View ${t} in Skills`}
        >
          {t}
        </Link>
      ))}
      {remaining > 0 && (
        <Link 
          to="/skills"
          className="px-3 py-1.5 bg-slate-50 border border-slate-100 text-slate-500 hover:text-blue-600 hover:border-blue-200 hover:bg-blue-50 text-xs font-medium rounded-lg whitespace-nowrap transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
          title={`View remaining ${remaining} technologies in Skills`}
        >
          +{remaining}
        </Link>
      )}
    </div>
  );
}
