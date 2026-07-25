import { motion } from 'motion/react';
import { FUTURE_TOPICS } from '../../data/knowledgeBase';
import { Compass, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function FutureTopicsSection() {
  return (
    <section>
      <div className="flex items-center gap-4 mb-10 border-b border-slate-200 pb-6">
        <div className="w-12 h-12 bg-sky-50 rounded-xl flex items-center justify-center shrink-0">
          <Compass className="w-6 h-6 text-sky-600" />
        </div>
        <div>
          <h2 className="text-2xl font-medium tracking-tight text-slate-900">Future Topics</h2>
          <p className="text-slate-500 font-light mt-1">Areas identified for upcoming exploration</p>
        </div>
      </div>

      <div className="bg-white border border-slate-200 rounded-2xl p-2">
        {FUTURE_TOPICS.map((topic, idx) => (
          <motion.div
            key={topic.id}
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: idx * 0.1 }}
            className={`p-6 md:p-8 flex flex-col md:flex-row md:items-center justify-between gap-6 ${
              idx !== FUTURE_TOPICS.length - 1 ? 'border-b border-slate-100' : ''
            }`}
          >
            <div className="flex-1">
              <h3 className="text-lg font-medium text-slate-900 mb-2">{topic.topic}</h3>
              <p className="text-sm text-slate-500 font-light leading-relaxed">{topic.reason}</p>
            </div>
            
            <Link 
              to={`/skills/${topic.roadmapId}`}
              className="shrink-0 inline-flex items-center text-sm font-medium text-blue-600 bg-blue-50 hover:bg-blue-100 px-4 py-2 rounded-xl transition-colors group"
            >
              View Roadmap
              <ArrowRight className="w-4 h-4 ml-2 opacity-50 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
