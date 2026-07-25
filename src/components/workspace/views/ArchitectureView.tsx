import { RoadmapDomain } from '../../../data/roadmaps';
import { Layers } from 'lucide-react';

export default function ArchitectureView({ domain }: { domain: RoadmapDomain }) {
  return (
    <div className="flex flex-col items-center justify-center h-full text-center py-24 animate-in fade-in duration-500">
      <Layers className="w-12 h-12 text-slate-200 mb-6" />
      <h3 className="text-lg font-medium text-slate-900 mb-2">Architectural Patterns</h3>
      <p className="text-sm text-slate-500 max-w-md">System diagrams and architectural trade-offs are currently being documented for this domain.</p>
    </div>
  );
}
