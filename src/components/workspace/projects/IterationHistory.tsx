import { Repeat } from 'lucide-react';

export default function IterationHistory({ content }: { content: string }) {
  return (
    <div className="p-6 bg-amber-50 border border-amber-100 rounded-xl mt-4">
      <div className="flex items-center gap-2 mb-4">
        <Repeat className="w-4 h-4 text-amber-600" />
        <h5 className="text-sm font-bold uppercase tracking-widest text-amber-800">Iteration Cycle</h5>
      </div>
      <p className="text-sm text-amber-900/80 font-light leading-relaxed mb-4">{content}</p>
      
      <div className="flex flex-col gap-2 relative pl-4 border-l-2 border-amber-200">
        <div className="text-xs text-amber-700">
          <span className="font-semibold">v1.0</span> - Initial deployment
        </div>
        <div className="text-xs text-amber-700">
          <span className="font-semibold">v1.1</span> - Performance optimizations
        </div>
        <div className="text-xs text-amber-700">
          <span className="font-semibold">v1.2</span> - Cache invalidation fixes
        </div>
      </div>
    </div>
  );
}
