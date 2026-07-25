import { Concept } from '../../data/concepts';
import { ConceptDomain } from '../../data/conceptDomains';
import ConceptCard from './ConceptCard';
import { motion } from 'motion/react';

interface ConceptCategoryProps {
  domain: ConceptDomain;
  concepts: Concept[];
}

export default function ConceptCategory({ domain, concepts }: ConceptCategoryProps) {
  if (!concepts || concepts.length === 0) return null;

  return (
    <motion.section 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="mb-24"
      id={`domain-${domain.id}`}
    >
      <div className="mb-12">
        <h2 className="text-3xl font-medium tracking-tight text-slate-900 mb-4">
          {domain.title}
        </h2>
        <p className="text-lg text-slate-500 font-light max-w-2xl leading-relaxed">
          {domain.description}
        </p>
      </div>

      <div className="flex flex-col gap-6">
        {concepts.map(concept => (
          <ConceptCard key={concept.id} concept={concept} />
        ))}
      </div>
    </motion.section>
  );
}
