import { Link } from 'react-router-dom';
import { Target, ArrowRight } from 'lucide-react';

export default function DecisionReference({ decisionId, title }: { decisionId: string, title: string }) {
  return (
    <Link 
      to={`/decisions?id=${decisionId}`}
      className="group flex items-center justify-between p-4 bg-white border border-slate-200 rounded-xl hover:border-blue-300 transition-all mt-4"
    >
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center">
          <Target className="w-4 h-4" />
        </div>
        <div>
          <h5 className="text-sm font-medium text-slate-900 group-hover:text-blue-600 transition-colors">Related Decision</h5>
          <span className="text-xs text-slate-500">{title}</span>
        </div>
      </div>
      <ArrowRight className="w-4 h-4 text-slate-300 group-hover:text-blue-500 transition-colors group-hover:translate-x-1" />
    </Link>
  );
}
