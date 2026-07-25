import { RoadmapDomain } from '../../../data/roadmaps';
import { FileText } from 'lucide-react';

export default function NotesView({ domain }: { domain: RoadmapDomain }) {
  return (
    <div className="flex flex-col items-center justify-center h-full text-center py-24 animate-in fade-in duration-500">
      <FileText className="w-12 h-12 text-slate-200 mb-6" />
      <h3 className="text-lg font-medium text-slate-900 mb-2">Engineering Notes</h3>
      <p className="text-sm text-slate-500 max-w-md">Internal observations, patterns, and development notes will be accessible here.</p>
    </div>
  );
}
