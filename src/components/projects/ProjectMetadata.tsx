import React from 'react';
import { Briefcase, Calendar, Clock } from 'lucide-react';

interface ProjectMetadataProps {
  role?: string;
  year?: string;
  timeline?: string;
}

export default function ProjectMetadata({ role, year, timeline }: ProjectMetadataProps) {
  if (!role && !year && !timeline) return null;

  return (
    <div className="flex flex-wrap items-center gap-4 text-xs font-medium text-slate-500 mb-6" aria-label="Project details">
      {role && (
        <span className="flex items-center gap-1.5">
          <Briefcase className="w-3.5 h-3.5" aria-hidden="true" />
          {role}
        </span>
      )}
      {year && (
        <span className="flex items-center gap-1.5">
          <Calendar className="w-3.5 h-3.5" aria-hidden="true" />
          {year}
        </span>
      )}
      {timeline && (
        <span className="flex items-center gap-1.5">
          <Clock className="w-3.5 h-3.5" aria-hidden="true" />
          {timeline}
        </span>
      )}
    </div>
  );
}
