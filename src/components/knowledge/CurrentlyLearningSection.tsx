import { motion } from 'motion/react';
import { CURRENTLY_LEARNING } from '../../data/knowledgeBase';
import { BookOpen, ExternalLink, Clock, Target } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function CurrentlyLearningSection() {
  return (
    <section>
      <div className="flex items-center gap-4 mb-10 border-b border-slate-200 pb-6">
        <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center shrink-0">
          <BookOpen className="w-6 h-6 text-blue-600" />
        </div>
        <div>
          <h2 className="text-2xl font-medium tracking-tight text-slate-900">Currently Learning</h2>
          <p className="text-slate-500 font-light mt-1">Active exploration and skill development</p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {CURRENTLY_LEARNING.map((item, idx) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="bg-white border border-slate-200 rounded-2xl p-8 hover:border-blue-200 hover:shadow-sm transition-all flex flex-col"
          >
            <div className="flex justify-between items-start mb-6">
              <h3 className="text-xl font-medium text-slate-900 leading-tight">{item.topic}</h3>
              <span className="text-[10px] font-bold uppercase tracking-widest text-blue-600 bg-blue-50 px-3 py-1.5 rounded-lg border border-blue-100 whitespace-nowrap ml-4">
                Active
              </span>
            </div>

            <div className="space-y-6 flex-1">
              <div>
                <h4 className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-2">Why this matters</h4>
                <p className="text-sm text-slate-600 font-light leading-relaxed">{item.reason}</p>
              </div>

              <div className="flex items-start gap-3 p-4 bg-slate-50 rounded-xl border border-slate-100">
                <Target className="w-5 h-5 text-slate-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-[10px] font-bold uppercase tracking-widest text-slate-500 mb-1">Current Stage</h4>
                  <p className="text-sm text-slate-700 font-medium">{item.stage}</p>
                </div>
              </div>

              <div>
                <h4 className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-3">Recent Updates</h4>
                <ul className="space-y-2">
                  {item.recentUpdates.map((update, i) => (
                    <li key={i} className="text-sm text-slate-600 font-light flex items-start">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-1.5 mr-3 shrink-0" />
                      <span className="leading-relaxed">{update}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-100 flex items-center justify-between">
              <div className="flex items-center text-sm text-slate-500 font-light">
                <Clock className="w-4 h-4 mr-2" />
                Est. {item.estimatedCompletion}
              </div>
              
              <Link 
                to={`/skills/${item.roadmapId}`}
                className="text-sm font-medium text-blue-600 hover:text-blue-700 transition-colors flex items-center"
              >
                View Roadmap
                <ExternalLink className="w-4 h-4 ml-1" />
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
