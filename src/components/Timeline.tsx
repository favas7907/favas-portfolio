import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export interface TimelineItemData {
  id: string;
  date: string;
  title: string;
  summary: React.ReactNode;
  content: React.ReactNode;
  reflection?: React.ReactNode;
}

export default function Timeline({ items }: { items: TimelineItemData[] }) {
  return (
    <div className="relative border-l border-slate-200 ml-3 md:ml-6 space-y-16 pb-16">
      {items.map((item, index) => (
        <motion.div 
          key={item.id}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
          className="relative pl-8 md:pl-12"
        >
          {/* Node */}
          <div className="absolute w-3 h-3 bg-white border-2 border-slate-900 rounded-full -left-[6.5px] top-2" />
          
          <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400 block mb-2">{item.date}</span>
          <h3 className="text-xl md:text-2xl font-medium tracking-tight text-slate-900 mb-4">{item.title}</h3>
          
          <div className="text-slate-600 leading-relaxed mb-6">
            {item.summary}
          </div>
          
          <div className="prose prose-slate prose-sm md:prose-base text-slate-600 leading-relaxed mb-8">
            {item.content}
          </div>

          {item.reflection && (
            <div className="bg-slate-50 border border-slate-100 p-6 rounded-xl relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1 h-full bg-slate-900" />
              <span className="text-[10px] font-bold uppercase tracking-widest text-slate-900 mb-2 block">Reflection</span>
              <div className="text-sm text-slate-700 italic">
                {item.reflection}
              </div>
            </div>
          )}
        </motion.div>
      ))}
    </div>
  );
}
