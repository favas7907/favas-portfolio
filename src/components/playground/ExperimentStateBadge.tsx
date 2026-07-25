import { ExperimentState } from '../../data/experiments';
import { Lightbulb, Search, Code2, Beaker, CheckCircle2, XCircle, PauseCircle, Rocket, Archive } from 'lucide-react';

export default function ExperimentStateBadge({ state }: { state: ExperimentState }) {
  const config = {
    'Idea': { icon: Lightbulb, color: 'text-amber-600', bg: 'bg-amber-50', border: 'border-amber-100' },
    'Researching': { icon: Search, color: 'text-blue-600', bg: 'bg-blue-50', border: 'border-blue-100' },
    'Building': { icon: Code2, color: 'text-indigo-600', bg: 'bg-indigo-50', border: 'border-indigo-100' },
    'Testing': { icon: Beaker, color: 'text-purple-600', bg: 'bg-purple-50', border: 'border-purple-100' },
    'Validated': { icon: CheckCircle2, color: 'text-emerald-600', bg: 'bg-emerald-50', border: 'border-emerald-100' },
    'Discarded': { icon: XCircle, color: 'text-rose-600', bg: 'bg-rose-50', border: 'border-rose-100' },
    'Paused': { icon: PauseCircle, color: 'text-slate-600', bg: 'bg-slate-100', border: 'border-slate-200' },
    'Integrated into production': { icon: Rocket, color: 'text-emerald-700', bg: 'bg-emerald-100', border: 'border-emerald-200' },
    'Archived': { icon: Archive, color: 'text-slate-500', bg: 'bg-slate-50', border: 'border-slate-200' },
  }[state];

  if (!config) return null;
  const Icon = config.icon;

  return (
    <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold ${config.bg} ${config.color} border ${config.border}`}>
      <Icon className="w-3.5 h-3.5" />
      {state}
    </span>
  );
}
