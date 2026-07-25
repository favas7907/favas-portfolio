import React from 'react';

interface StatusBadgeProps {
  status: string;
}

export default function StatusBadge({ status }: StatusBadgeProps) {
  const getStatusColor = () => {
    switch (status.toLowerCase()) {
      case 'production':
      case 'maintained':
        return 'bg-emerald-500';
      case 'active':
      case 'in development':
        return 'bg-blue-500';
      case 'archived':
      case 'experimental':
      case 'research':
        return 'bg-slate-400';
      case 'open source':
        return 'bg-purple-500';
      case 'hackathon':
        return 'bg-amber-500';
      default:
        return 'bg-slate-900';
    }
  };

  return (
    <span className="inline-flex items-center px-2.5 py-1 rounded-md bg-slate-50 border border-slate-100 text-[10px] font-bold uppercase tracking-widest text-slate-500 whitespace-nowrap">
      <span className={`w-1.5 h-1.5 rounded-full ${getStatusColor()} mr-2`} aria-hidden="true"></span>
      {status}
    </span>
  );
}
