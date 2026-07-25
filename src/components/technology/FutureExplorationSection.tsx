import { Compass } from 'lucide-react';

export default function FutureExplorationSection({ areas }: { areas: string[] }) {
  if (!areas || areas.length === 0) return null;

  return (
    <section className="py-16 md:py-24">
      <div className="container-custom">
        <div className="max-w-4xl bg-slate-900 rounded-3xl p-8 md:p-12 text-white">
          <div className="flex items-center gap-4 mb-8">
            <div className="p-3 bg-slate-800 rounded-xl">
              <Compass className="w-6 h-6 text-blue-400" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Future Exploration</h2>
          </div>
          
          <ul className="space-y-4">
            {areas.map((area, idx) => (
              <li key={idx} className="flex items-start gap-4">
                <span className="text-blue-400 font-bold mt-0.5">0{idx + 1}</span>
                <span className="text-lg text-slate-300 font-light leading-relaxed">{area}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
