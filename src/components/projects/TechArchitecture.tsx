import React from 'react';

const CATEGORIES = [
  { name: 'Frontend', keywords: ['React', 'Next.js', 'Vite', 'TypeScript', 'Tailwind', 'WebGL'] },
  { name: 'Backend', keywords: ['Node.js', 'Express', 'Go', 'GraphQL', 'Socket', 'Java', 'Spring'] },
  { name: 'Database', keywords: ['PostgreSQL', 'MongoDB', 'InfluxDB', 'Redis', 'Firebase', 'SQLite'] },
  { name: 'Infrastructure', keywords: ['AWS', 'Docker', 'Kubernetes', 'Vercel', 'Fargate'] },
  { name: 'Blockchain', keywords: ['Solidity', 'Ethers', 'Hardhat', 'Zero-Knowledge'] }
];

export default function TechArchitecture({ tech, compact = false }: { tech: string[], compact?: boolean }) {
  const grouped: Record<string, string[]> = {};
  
  tech.forEach(t => {
     let placed = false;
     for (const cat of CATEGORIES) {
        if (cat.keywords.some(k => t.toLowerCase().includes(k.toLowerCase()))) {
           if (!grouped[cat.name]) grouped[cat.name] = [];
           grouped[cat.name].push(t);
           placed = true;
           break;
        }
     }
     if (!placed) {
        if (!grouped['Core']) grouped['Core'] = [];
        grouped['Core'].push(t);
     }
  });

  return (
    <div className={`mt-8 pt-8 border-t border-slate-100/60 ${compact ? 'hidden md:block' : ''}`}>
      <h3 className="text-[10px] font-bold uppercase tracking-widest text-slate-500 mb-6">Architecture Stack</h3>
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-y-8 gap-x-6" aria-label="Technology Stack Grouped">
         {Object.entries(grouped).map(([category, items]) => (
            <div key={category}>
               <span className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-3">{category}</span>
               <ul className="flex flex-col gap-2" aria-label={`${category} Technologies`}>
                  {items.map(item => (
                     <li key={item} className="text-sm font-medium text-slate-700">{item}</li>
                  ))}
               </ul>
            </div>
         ))}
      </div>
    </div>
  );
}
