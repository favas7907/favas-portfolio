import { Layers, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ConceptReference({ concepts }: { concepts: string[] }) {
  if (!concepts || concepts.length === 0) return null;
  
  return (
    <section className="py-16 md:py-24 border-b border-slate-100">
      <div className="container-custom">
        <div className="max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-8 tracking-tight">Engineering Concepts</h2>
          <p className="text-lg text-slate-600 font-light leading-relaxed mb-8">
            Working with this technology requires a solid understanding of these underlying engineering principles.
          </p>
          
          <div className="flex flex-wrap gap-3 mb-10">
            {concepts.map((concept, idx) => (
              <span 
                key={idx}
                className="inline-flex items-center gap-2 px-4 py-2 bg-slate-50 border border-slate-200 rounded-full text-sm font-medium text-slate-700"
              >
                <Layers className="w-4 h-4 text-slate-400" />
                {concept}
              </span>
            ))}
          </div>

          <Link 
            to="/concepts"
            className="group inline-flex items-center text-sm font-medium text-primary hover:text-primary-dark transition-colors"
          >
            Explore all Engineering Concepts
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}
