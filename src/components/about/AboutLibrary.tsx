import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ENGINEERING_NOTES } from '../../data/knowledgeBase';
import { ArrowRight, FileText } from 'lucide-react';

export default function AboutLibrary() {
  const latestNotes = ENGINEERING_NOTES.slice(0, 3);

  return (
    <section className="py-24 md:py-32 lg:py-40 bg-white border-t border-slate-100">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
          
          <div className="md:col-span-10 md:col-start-2 lg:col-span-8 lg:col-start-3">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="mb-16"
            >
              <h2 className="text-xs font-bold uppercase tracking-widest text-primary mb-6">
                Personal Knowledge Base
              </h2>
              <p className="text-2xl md:text-3xl lg:text-4xl font-medium text-slate-900 tracking-tight mb-6">
                A living engineering notebook documenting my continuous learning process, architectural discoveries, and experiments.
              </p>
              <p className="text-lg text-slate-600 font-light leading-relaxed max-w-2xl">
                I document my reflections, challenges, and insights here to track my growth and serve as a permanent technical reference.
              </p>
            </motion.div>

            <div className="border-t border-slate-100">
              {latestNotes.map((note, index) => (
                <motion.div
                  key={note.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-5%" }}
                  transition={{ duration: 0.6, delay: index * 0.05, ease: [0.16, 1, 0.3, 1] }}
                >
                  <div className="group block py-8 border-b border-slate-100 transition-colors">
                    <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                      <div className="flex-1 pr-8">
                        <div className="flex items-center gap-3 mb-3">
                          <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400 bg-slate-50 px-2 py-1 rounded">
                            {note.category}
                          </span>
                          <span className="text-sm font-medium text-slate-400">
                            {note.lastUpdated}
                          </span>
                        </div>
                        <h3 className="text-xl font-medium text-slate-900 mb-2 group-hover:text-primary transition-colors">
                          {note.title}
                        </h3>
                        <p className="text-sm text-slate-500 font-light leading-relaxed">
                          {note.summary}
                        </p>
                      </div>
                      
                      <div className="shrink-0 flex sm:flex-col justify-between items-end gap-4 mt-4 sm:mt-0">
                        <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors">
                          <FileText className="w-4 h-4 text-slate-400 group-hover:text-white transition-colors" />
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="mt-12"
            >
              <Link 
                to="/library" 
                className="inline-flex items-center text-sm font-medium text-slate-900 group"
              >
                Open Personal Knowledge Base
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
