import { motion } from 'motion/react';
import { ENGINEERING_NOTES } from '../../data/knowledgeBase';
import EngineeringNoteCard from './EngineeringNoteCard';
import { Network } from 'lucide-react';

export default function ArchitectureDiscoveriesSection() {
  const notes = ENGINEERING_NOTES.filter(n => n.category === 'Architecture');

  if (notes.length === 0) return null;

  return (
    <section>
      <div className="flex items-center gap-4 mb-10 border-b border-slate-200 pb-6">
        <div className="w-12 h-12 bg-purple-50 rounded-xl flex items-center justify-center shrink-0">
          <Network className="w-6 h-6 text-purple-600" />
        </div>
        <div>
          <h2 className="text-2xl font-medium tracking-tight text-slate-900">Architecture Discoveries</h2>
          <p className="text-slate-500 font-light mt-1">System design explorations and structural decisions</p>
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
