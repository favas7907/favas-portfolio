import { Scale } from 'lucide-react';

export default function TradeOffPanel({ tradeOffs }: { tradeOffs: string[] }) {
  if (tradeOffs.length === 0) return null;

  return (
    <div className="bg-slate-50/80 rounded-2xl p-6 border border-slate-200">
      <h3 className="text-sm font-bold uppercase tracking-widest text-slate-400 mb-6 flex items-center gap-2">
        <Scale className="w-4 h-4" /> Acknowledged Trade-Offs
      </h3>
      <ul className="space-y-4">
        {tradeOffs.map((tradeOff, idx) => (
          <li key={idx} className="flex items-start gap-4 pb-4 border-b border-slate-100 last:border-0 last:pb-0">
            <div className="w-1.5 h-1.5 rounded-full bg-slate-300 mt-2 shrink-0" />
            <p className="text-sm text-slate-700 font-light leading-relaxed">{tradeOff}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
