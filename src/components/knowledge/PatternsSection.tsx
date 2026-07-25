import { motion } from 'motion/react';
import { ENGINEERING_NOTES } from '../../data/knowledgeBase';
import EngineeringNoteCard from './EngineeringNoteCard';
import { Blocks } from 'lucide-react';

export default function PatternsSection() {
  const notes = ENGINEERING_NOTES.filter(n => n.category === 'Pattern');

  if (notes.length === 0) return null;

  return (
    <section>
      <div className="flex items-center gap-4 mb-10 border-b border-slate-200 pb-6">
        <div className="w-12 h-12 bg-emerald-50 rounded-xl flex items-center justify-center shrink-0">
          <Blocks className="w-6 h-6 text-emerald-600" />
        </div>
        <div>
          <h2 className="text-2xl font-medium tracking-tight text-slate-900">Patterns & Best Practices</h2>
          <p className="text-slate-500 font-light mt-1">Reusable solutions and coding standards</p>
        </div>
      </div>

      <div className="space-y-6">
        {notes.map((note, idx) => (
          <motion.div
            key={note.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
          >
            <EngineeringNoteCard note={note} />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
