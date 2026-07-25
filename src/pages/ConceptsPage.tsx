import { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { ENGINEERING_CONCEPTS } from '../data/concepts';
import { CONCEPT_DOMAINS } from '../data/conceptDomains';
import ConceptCategory from '../components/concepts/ConceptCategory';

export default function ConceptsPage() {
  const [activeDomain, setActiveDomain] = useState<string>(CONCEPT_DOMAINS[0].id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sectionElements = CONCEPT_DOMAINS.map(d => document.getElementById(`domain-${d.id}`));
      const scrollPosition = window.scrollY + 300; // offset for header + padding

      for (let i = sectionElements.length - 1; i >= 0; i--) {
        const element = sectionElements[i];
        if (element && element.offsetTop <= scrollPosition) {
          setActiveDomain(CONCEPT_DOMAINS[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToDomain = (id: string) => {
    const element = document.getElementById(`domain-${id}`);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 120, // offset for fixed header
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="bg-white min-h-screen pt-32 pb-32">
      <div className="container-custom">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-4xl mb-16 md:mb-24"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-slate-900 mb-8 leading-[1.1]">
            Engineering Concepts
          </h1>
          <p className="text-lg md:text-xl font-light text-slate-500 leading-relaxed max-w-2xl">
            A curated collection of foundational software engineering principles. This knowledge system explains how I think about software beyond specific frameworks, languages, or tools.
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 relative items-start">
          {/* Sidebar Navigation */}
          <div className="hidden lg:block w-64 shrink-0 sticky top-32 max-h-[calc(100vh-8rem)] overflow-y-auto custom-scrollbar pr-6">
            <h4 className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-6">Domains</h4>
            <nav className="flex flex-col space-y-1 border-l-2 border-slate-100">
              {CONCEPT_DOMAINS.map((domain) => {
                const isActive = activeDomain === domain.id;
                // Only show domain if it has concepts
                const hasConcepts = ENGINEERING_CONCEPTS.some(c => c.domainId === domain.id);
                if (!hasConcepts) return null;

                return (
                  <button
                    key={domain.id}
                    onClick={() => scrollToDomain(domain.id)}
                    className={`text-left pl-5 py-2.5 text-sm font-medium transition-all relative ${
                      isActive 
                        ? 'text-blue-600' 
                        : 'text-slate-500 hover:text-slate-900'
                    }`}
                  >
                    {isActive && (
                      <motion.div 
                        layoutId="activeDomainIndicator"
                        className="absolute left-[-2px] top-0 bottom-0 w-0.5 bg-blue-600"
                        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                      />
                    )}
                    {domain.title}
                  </button>
                );
              })}
            </nav>
          </div>

          {/* Main Content */}
          <div className="flex-1 w-full max-w-4xl">
            {CONCEPT_DOMAINS.map(domain => {
              const domainConcepts = ENGINEERING_CONCEPTS.filter(c => c.domainId === domain.id);
              if (domainConcepts.length === 0) return null;
              
              return (
                <ConceptCategory 
                  key={domain.id} 
                  domain={domain} 
                  concepts={domainConcepts} 
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
