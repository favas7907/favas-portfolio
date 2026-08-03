import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, ArrowRight, ExternalLink } from 'lucide-react';
import { LIBRARY_DATA } from '../data/library';
import RelatedExploration from '../components/library/RelatedExploration';

export default function LibraryDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const item = LIBRARY_DATA.find(i => i.id === id);

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!item) {
    return (
      <div className="bg-white min-h-screen pt-40 pb-32 flex flex-col items-center justify-center text-center">
        <h1 className="text-3xl font-medium text-slate-900 mb-4">Entry Not Found</h1>
        <p className="text-slate-500 mb-8">The archive entry you are looking for does not exist or has been moved.</p>
        <button 
          onClick={() => navigate('/library')}
          className="text-sm font-medium text-primary hover:text-primary-dark flex items-center gap-2"
        >
          <ArrowLeft className="w-4 h-4" />
          Return to Library
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen pt-32 pb-32">
      <div className="container-custom max-w-4xl">
        
        <Link 
          to="/library"
          className="group inline-flex items-center text-xs font-bold uppercase tracking-widest text-slate-400 hover:text-slate-900 transition-colors mb-16"
        >
          <ArrowLeft className="w-4 h-4 mr-3 group-hover:-translate-x-1 transition-transform" />
          Back to Library
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="mb-6 flex flex-wrap items-center gap-3">
            <span className="text-[10px] font-bold uppercase tracking-widest text-primary bg-primary/5 px-2 py-0.5 rounded-full">
              {item.category}
            </span>
            <span className="text-[10px] font-bold uppercase tracking-widest text-slate-300">
              /
            </span>
            <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">
              {item.date}
            </span>
            <span className="text-[10px] font-bold uppercase tracking-widest text-slate-300">
              /
            </span>
            <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">
              {item.organization}
            </span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-slate-900 leading-[1.1] mb-8">
            {item.title}
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-500 font-light leading-relaxed mb-12">
            {item.summary}
          </p>

          {item.heroImage && (
            <div className="aspect-[21/9] bg-slate-50 mb-16 overflow-hidden rounded-xl border border-slate-100">
              <img 
                src={item.heroImage} 
                alt={item.title} 
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
            {/* Main Content */}
            <div className="md:col-span-8 md:col-start-3 space-y-16">
              
              <section>
                <h2 className="text-sm font-bold uppercase tracking-widest text-slate-900 mb-6 flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-primary"></span>
                  Context
                </h2>
                <div className="text-base sm:text-lg text-slate-600 font-light leading-relaxed prose prose-slate">
                  <p>{item.context}</p>
                </div>
              </section>

              {item.myContribution && (
                <section>
                  <h2 className="text-sm font-bold uppercase tracking-widest text-slate-900 mb-6 flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-primary"></span>
                    My Contribution
                  </h2>
                  <div className="text-base sm:text-lg text-slate-600 font-light leading-relaxed prose prose-slate">
                    <p>{item.myContribution}</p>
                  </div>
                </section>
              )}

              {item.whatILearned && (
                <section>
                  <h2 className="text-sm font-bold uppercase tracking-widest text-slate-900 mb-6 flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-primary"></span>
                    What I Learned
                  </h2>
                  <div className="text-base sm:text-lg text-slate-600 font-light leading-relaxed prose prose-slate">
                    <p>{item.whatILearned}</p>
                  </div>
                </section>
              )}

              {item.connection && (
                <section className="p-8 bg-slate-50 rounded-2xl border border-slate-100">
                  <h2 className="text-sm font-bold uppercase tracking-widest text-slate-900 mb-4">
                    The Connection
                  </h2>
                  <p className="text-base text-slate-700 font-medium leading-relaxed italic">
                    "{item.connection}"
                  </p>
                </section>
              )}

              {item.photos && item.photos.length > 0 && (
                <section>
                  <h2 className="text-sm font-bold uppercase tracking-widest text-slate-900 mb-6 flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-slate-300"></span>
                    Gallery
                  </h2>
                  <div className="grid grid-cols-2 gap-4">
                    {item.photos.map((photo, i) => (
                      <div key={i} className="aspect-square bg-slate-50 rounded-xl overflow-hidden border border-slate-100">
                        <img src={photo} alt={`Gallery image ${i + 1}`} className="w-full h-full object-cover" loading="lazy" />
                      </div>
                    ))}
                  </div>
                </section>
              )}

              {item.links && item.links.length > 0 && (
                <section className="border-t border-slate-100 pt-12">
                  <h2 className="text-sm font-bold uppercase tracking-widest text-slate-900 mb-6 flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-slate-300"></span>
                    Resources & Links
                  </h2>
                  <ul className="flex flex-col gap-4">
                    {item.links.map((link, i) => (
                      <li key={i}>
                        <a 
                          href={link.url} 
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group/link inline-flex items-center text-sm font-medium text-slate-600 hover:text-primary transition-colors"
                        >
                          <ExternalLink className="w-4 h-4 mr-3 text-slate-400 group-hover/link:text-primary transition-colors" />
                          {link.label}
                          <ArrowRight className="w-3 h-3 ml-2 opacity-0 -translate-x-2 group-hover/link:opacity-100 group-hover/link:translate-x-0 transition-all duration-300" />
                        </a>
                      </li>
                    ))}
                  </ul>
                </section>
              )}
              
              <RelatedExploration />
            </div>
          </div>
          
        </motion.div>
      </div>
    </div>
  );
}
