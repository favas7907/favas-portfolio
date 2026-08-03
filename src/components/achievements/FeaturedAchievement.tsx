import { motion } from 'motion/react';
import { ArrowRight, Trophy } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Achievement } from '../../types';

interface FeaturedAchievementProps {
  achievement: Achievement;
}

export default function FeaturedAchievement({ achievement }: FeaturedAchievementProps) {
  if (!achievement) return null;
  
  return (
    <section className="py-24 bg-slate-50 border-t border-slate-100">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="bg-white rounded-[2rem] border border-slate-200/60 p-8 md:p-12 lg:p-16 flex flex-col xl:flex-row gap-12 xl:gap-16 items-center shadow-sm"
        >
           <div className="w-full xl:w-1/2 flex flex-col justify-center">
             <div className="flex items-center gap-3 mb-8">
               <span className="flex items-center gap-2 px-3 py-1 bg-primary/5 text-primary text-[10px] font-bold uppercase tracking-widest rounded-full">
                 <Trophy className="w-3.5 h-3.5" /> Featured Achievement
               </span>
               <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">
                 {achievement.date}
               </span>
             </div>
             
             <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight text-slate-900 mb-6 leading-[1.1]">
               {achievement.title}
             </h2>
             
             <p className="text-lg md:text-xl text-slate-600 font-light leading-relaxed mb-10 max-w-2xl">
               {achievement.details.context}
             </p>
             
             <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
               <div>
                  <h4 className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-2">Role</h4>
                  <p className="text-sm font-medium text-slate-900">{achievement.details.role}</p>
               </div>
               <div>
                  <h4 className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-2">Outcome</h4>
                  <p className="text-sm font-medium text-slate-900">{achievement.details.outcome}</p>
               </div>
             </div>

             <div className="flex">
               <Link 
                 to={`/achievements/${achievement.id}`}
                 className="inline-flex items-center justify-center px-8 py-4 bg-slate-900 text-white text-sm font-medium rounded-xl hover:bg-slate-800 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-900 focus:ring-offset-2"
               >
                 Read Full Context
                 <ArrowRight className="w-4 h-4 ml-2" />
               </Link>
             </div>
           </div>
           
           <div className="w-full xl:w-1/2 rounded-2xl overflow-hidden bg-slate-100 aspect-[4/3] relative border border-slate-200/50">
             <img 
               src={achievement.image} 
               alt={achievement.title}
               className="w-full h-full object-cover"
               loading="lazy"
             />
           </div>
        </motion.div>
      </div>
    </section>
  );
}
