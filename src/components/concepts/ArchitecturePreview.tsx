interface ArchitecturePreviewProps {
  questions: {
    whyExist: string;
    whatProblem: string;
    whenToUse: string;
    whenNotToUse: string;
    alternatives: string;
    tradeOffs: string;
    evolution: string;
  };
}

export default function ArchitecturePreview({ questions }: ArchitecturePreviewProps) {
  if (!questions) return null;

  return (
    <div className="bg-slate-900 rounded-2xl overflow-hidden mt-6 mb-8 border border-slate-800">
      <div className="px-6 py-4 border-b border-slate-800 flex items-center justify-between">
        <h4 className="text-xs font-bold uppercase tracking-widest text-slate-300">
          Architecture View
        </h4>
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-slate-700"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-slate-700"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-slate-700"></div>
        </div>
      </div>
      <div className="p-6 md:p-8 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h5 className="text-[10px] uppercase tracking-widest text-slate-500 mb-2 font-bold">When To Use</h5>
          <p className="text-sm text-slate-300 leading-relaxed font-light">{questions.whenToUse}</p>
        </div>
        <div>
          <h5 className="text-[10px] uppercase tracking-widest text-slate-500 mb-2 font-bold">When NOT To Use</h5>
          <p className="text-sm text-slate-300 leading-relaxed font-light">{questions.whenNotToUse}</p>
        </div>
        <div>
          <h5 className="text-[10px] uppercase tracking-widest text-slate-500 mb-2 font-bold">Trade-offs</h5>
          <p className="text-sm text-slate-300 leading-relaxed font-light">{questions.tradeOffs}</p>
        </div>
        <div>
          <h5 className="text-[10px] uppercase tracking-widest text-slate-500 mb-2 font-bold">Alternatives</h5>
          <p className="text-sm text-slate-300 leading-relaxed font-light">{questions.alternatives}</p>
        </div>
        <div className="md:col-span-2">
          <h5 className="text-[10px] uppercase tracking-widest text-slate-500 mb-2 font-bold">Evolution</h5>
          <p className="text-sm text-slate-300 leading-relaxed font-light">{questions.evolution}</p>
        </div>
      </div>
    </div>
  );
}
