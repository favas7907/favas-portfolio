import { useParams, Navigate, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowLeft, ExternalLink, Calendar, Tag } from 'lucide-react';
import { ACHIEVEMENTS } from '../constants/data';

export default function AchievementDetail() {
  const { id } = useParams();
  const achievement = ACHIEVEMENTS.find(a => a.id === id);

  if (!achievement) {
    return <Navigate to="/achievements" replace />;
  }

  return (
    <article className="min-h-screen bg-slate-50 pb-32">
      {/* Detail Hero Section */}
      <section className="bg-white pt-32 pb-16 md:pt-48 md:pb-24 relative border-b border-slate-200">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-4xl mx-auto"
          >
            <Link 
              to="/achievements" 
              className="inline-flex items-center text-xs font-bold uppercase tracking-widest text-slate-400 hover:text-black mb-12 transition-colors group"
            >
              <ArrowLeft className="w-4 h-4 mr-3 group-hover:-translate-x-2 transition-transform duration-300" />
              Back to Achievements
            </Link>

            <div className="flex flex-wrap items-center gap-4 mb-6">
              <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-primary bg-primary/5 px-3 py-1.5 rounded-full">
                <Tag className="w-3.5 h-3.5" />
                {achievement.category}
              </span>
              <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-slate-500 bg-slate-100 px-3 py-1.5 rounded-full">
                <Calendar className="w-3.5 h-3.5" />
                {achievement.date}
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-black leading-[1.1] mb-8">
              {achievement.title}
            </h1>
            
            <p className="text-xl text-slate-600 leading-relaxed max-w-2xl">
              {achievement.shortDescription}
            </p>
            
            {achievement.link && (
              <div className="mt-10">
                <a 
                  href={achievement.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-8 py-4 bg-black text-white font-bold uppercase tracking-widest text-[11px] rounded-sm hover:bg-primary transition-colors duration-300 group"
                >
                  View Resource
                  <ExternalLink className="w-4 h-4 ml-3 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            )}
          </motion.div>
        </div>
      </section>

      {/* Hero Image */}
      <section className="relative -mt-8 md:-mt-12 z-10 container-custom">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="aspect-[21/9] w-full rounded-sm overflow-hidden bg-slate-200 shadow-xl"
        >
          <img 
            src={achievement.image} 
            alt={achievement.title} 
            className="w-full h-full object-cover"
          />
        </motion.div>
      </section>

      {/* Content Sections */}
      <section className="pt-24 md:pt-32">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            
            {/* Sidebar Meta */}
            <div className="lg:col-span-4 lg:col-start-1 order-2 lg:order-1">
              <div className="sticky top-32 space-y-12">
                <div>
                  <span className="block text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-4">My Role</span>
                  <p className="text-lg font-medium text-black">{achievement.details.role}</p>
                </div>

                <div>
                  <span className="block text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-4">Key Responsibilities</span>
                  <ul className="space-y-4">
                    {achievement.details.responsibilities.map((resp, i) => (
                      <li key={i} className="flex items-start text-slate-600">
                        <span className="text-primary mr-3 text-lg leading-none mt-1">&bull;</span>
                        <span className="leading-relaxed">{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {achievement.details.relatedTechnologies && (
                  <div>
                    <span className="block text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-4">Related Technologies</span>
                    <div className="flex flex-wrap gap-2">
                      {achievement.details.relatedTechnologies.map(tech => (
                        <span key={tech} className="px-3 py-1 bg-white border border-slate-200 text-slate-600 text-xs font-bold uppercase tracking-widest rounded-sm">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Main Narrative */}
            <div className="lg:col-span-7 lg:col-start-6 order-1 lg:order-2 space-y-20">
              
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              >
                <h2 className="text-2xl md:text-3xl font-medium tracking-tight text-black mb-6">
                  Context & Opportunity
                </h2>
                <div className="prose prose-slate prose-lg max-w-none">
                  <p className="text-slate-600 leading-relaxed mb-6">
                    {achievement.details.context}
                  </p>
                  <p className="text-slate-600 leading-relaxed">
                    {achievement.details.opportunity}
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              >
                <h2 className="text-2xl md:text-3xl font-medium tracking-tight text-black mb-6">
                  The Challenge
                </h2>
                <div className="prose prose-slate prose-lg max-w-none">
                  <p className="text-slate-600 leading-relaxed">
                    {achievement.details.challenge}
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              >
                <h2 className="text-2xl md:text-3xl font-medium tracking-tight text-black mb-6">
                  Outcome & Impact
                </h2>
                <div className="prose prose-slate prose-lg max-w-none">
                  <p className="text-slate-600 leading-relaxed mb-6 font-medium text-black">
                    {achievement.details.outcome}
                  </p>
                  <p className="text-slate-600 leading-relaxed">
                    {achievement.details.impact}
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="bg-white border border-slate-200 p-8 md:p-12 rounded-sm"
              >
                <h2 className="text-2xl font-medium tracking-tight text-black mb-6">
                  Lessons Learned
                </h2>
                <p className="text-slate-600 leading-relaxed italic">
                  "{achievement.details.lessons}"
                </p>
              </motion.div>

            </div>

          </div>
        </div>
      </section>
    </article>
  );
}
