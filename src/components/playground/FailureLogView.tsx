import { FailureLog } from '../../data/experiments';
import { AlertTriangle, Search, Lightbulb, PenTool } from 'lucide-react';

export default function FailureLogView({ log }: { log: FailureLog }) {
  if (!log) return null;

  return (
    <div className="bg-rose-50/50 border border-rose-100 rounded-2xl overflow-hidden mt-8">
      <div className="px-6 py-4 bg-rose-50/80 border-b border-rose-100 flex items-center gap-2">
        <AlertTriangle className="w-4 h-4 text-rose-500" />
        <h4 className="text-sm font-bold uppercase tracking-widest text-rose-800">Failure Analysis</h4>
      </div>
      
      <div className="p-6 md:p-8 space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-3">
            <h5 className="text-xs font-bold uppercase tracking-widest text-rose-400">What Failed</h5>
            <p className="text-sm text-slate-700 leading-relaxed font-light">{log.whatFailed}</p>
          </div>
          <div className="space-y-3">
            <h5 className="text-xs font-bold uppercase tracking-widest text-rose-400">Why It Failed</h5>
            <p className="text-sm text-slate-700 leading-relaxed font-light">{log.whyFailed}</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8 border-t border-rose-100">
          <div className="space-y-3">
            <h5 className="text-xs font-bold uppercase tracking-widest text-slate-400 flex items-center gap-2">
              <Search className="w-3 h-3 text-slate-400" /> How it was discovered
            </h5>
            <p className="text-sm text-slate-700 leading-relaxed font-light">{log.howDiscovered}</p>
          </div>
          <div className="space-y-3">
            <h5 className="text-xs font-bold uppercase tracking-widest text-slate-400 flex items-center gap-2">
              <PenTool className="w-3 h-3 text-slate-400" /> What changed
            </h5>
            <p className="text-sm text-slate-700 leading-relaxed font-light">{log.whatChanged}</p>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl border border-rose-100">
          <h5 className="text-xs font-bold uppercase tracking-widest text-blue-500 flex items-center gap-2 mb-3">
            <Lightbulb className="w-4 h-4 text-blue-500" /> Engineering Insight Gained
          </h5>
          <p className="text-base text-slate-800 leading-relaxed font-medium">{log.insightGained}</p>
        </div>
      </div>
    </div>
  );
}
