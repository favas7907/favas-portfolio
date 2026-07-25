import { EngineeringDecision } from '../../../data/decisions';
import { Code2 } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function DecisionRelationship({ decision }: { decision: EngineeringDecision }) {
  if (decision.relatedProjectUrls.length === 0) return null;

  return (
    <div className="space-y-4">
      <h3 className="text-sm font-bold uppercase tracking-widest text-slate-400 flex items-center gap-2">
        <Code2 className="w-4 h-4" /> Related Projects
      </h3>
      {decision.relatedProjectUrls.map((url, idx) => (
        <Link key={idx} to={url} className="group block p-4 bg-white border border-slate-200 rounded-xl hover:border-blue-300 transition-colors shadow-sm hover:shadow-md">
          <h4 className="text-sm font-medium text-slate-900 group-hover:text-blue-600 transition-colors mb-1">{decision.project}</h4>
          <p className="text-xs text-slate-500 font-light">View project implementation</p>
        </Link>
      ))}
    </div>
  );
}
