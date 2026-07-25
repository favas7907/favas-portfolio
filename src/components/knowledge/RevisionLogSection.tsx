import { motion } from 'motion/react';
import { REVISIONS } from '../../data/knowledgeBase';
import { GitCommit } from 'lucide-react';

export default function RevisionLogSection() {
  return (
    <section>
      <div className="flex items-center gap-4 mb-10 border-b border-slate-200 pb-6">
        <div className="w-12 h-12 bg-slate-100 rounded-xl flex items-center justify-center shrink-0">
          <GitCommit className="w-6 h-6 text-slate-600" />
        </div>
        <div>
          <h2 className="text-2xl font-medium tracking-tight text-slate-900">Revision Log</h2>
          <p className="text-slate-500 font-light mt-1">History of updates to this knowledge base</p>
        </div>
      </div>

      <div className="space-y-6 max-w-3xl">
        {REVISIONS.map((revision, idx) => (
          <motion.div
            key={revision.id}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: idx * 0.1 }}
            className="flex gap-6"
          >
            <div className="w-24 shrink-0 text-sm font-medium text-slate-400 pt-1">
              {revision.date}
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-xs font-bold text-slate-900 bg-slate-100 px-2 py-0.5 rounded">
                  v{revision.version}
                </span>
              </div>
              <ul className="space-y-1.5">
                {revision.changes.map((change, i) => (
                  <li key={i} className="text-sm text-slate-600 font-light">
                    • {change}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
