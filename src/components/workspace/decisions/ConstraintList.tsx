export default function ConstraintList({ constraints, title }: { constraints: string[], title: string }) {
  if (constraints.length === 0) return null;

  return (
    <div>
      <h3 className="text-sm font-bold uppercase tracking-widest text-slate-400 mb-4">{title}</h3>
      <ul className="space-y-3">
        {constraints.map((item, idx) => (
          <li key={idx} className="flex items-start gap-4">
            <span className="text-slate-300 font-bold text-sm mt-0.5">{(idx + 1).toString().padStart(2, '0')}</span>
            <p className="text-sm text-slate-700 font-light leading-relaxed">{item}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
