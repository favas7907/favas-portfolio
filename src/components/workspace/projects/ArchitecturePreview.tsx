import { Server, Zap, Database } from 'lucide-react';

export default function ArchitecturePreview({ description }: { description: string }) {
  return (
    <div className="p-6 bg-slate-900 rounded-xl mt-4">
      <div className="flex items-center gap-2 mb-4">
        <Server className="w-4 h-4 text-blue-400" />
        <h5 className="text-sm font-bold uppercase tracking-widest text-slate-300">System Architecture</h5>
      </div>
      <p className="text-sm text-slate-300 font-mono font-light leading-relaxed">{description}</p>
      
      <div className="grid grid-cols-2 gap-4 mt-6 pt-6 border-t border-slate-800">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center">
            <Database className="w-4 h-4 text-emerald-400" />
          </div>
          <span className="text-xs text-slate-400">Data Layer</span>
        </div>
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center">
            <Zap className="w-4 h-4 text-amber-400" />
          </div>
          <span className="text-xs text-slate-400">Caching</span>
        </div>
      </div>
    </div>
  );
}
