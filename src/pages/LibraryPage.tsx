import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import CurrentlyLearningSection from '../components/knowledge/CurrentlyLearningSection';
import TimelineSection from '../components/knowledge/TimelineSection';
import EngineeringNotesSection from '../components/knowledge/EngineeringNotesSection';
import ArchitectureDiscoveriesSection from '../components/knowledge/ArchitectureDiscoveriesSection';
import PatternsSection from '../components/knowledge/PatternsSection';
import ExperimentsSection from '../components/knowledge/ExperimentsSection';
import LessonsLearnedSection from '../components/knowledge/LessonsLearnedSection';
import BookmarksSection from '../components/knowledge/BookmarksSection';
import FutureTopicsSection from '../components/knowledge/FutureTopicsSection';
import RevisionLogSection from '../components/knowledge/RevisionLogSection';

const SECTIONS = [
  { id: 'currently-learning', label: 'Currently Learning' },
  { id: 'timeline', label: 'Learning Timeline' },
  { id: 'notes', label: 'Engineering Notes' },
  { id: 'architecture', label: 'Architecture Discoveries' },
  { id: 'patterns', label: 'Patterns & Best Practices' },
  { id: 'experiments', label: 'Technical Experiments' },
  { id: 'lessons', label: 'Lessons Learned' },
  { id: 'bookmarks', label: 'Bookmarks' },
  { id: 'future', label: 'Future Topics' },
  { id: 'revisions', label: 'Revision Log' }
];

export default function LibraryPage() {
  const [activeSection, setActiveSection] = useState('currently-learning');

  useEffect(() => {
    const handleScroll = () => {
      const sectionElements = SECTIONS.map(s => document.getElementById(s.id));
      const scrollPosition = window.scrollY + 200; // offset for header

      for (let i = sectionElements.length - 1; i >= 0; i--) {
        const element = sectionElements[i];
        if (element && element.offsetTop <= scrollPosition) {
          setActiveSection(SECTIONS[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 100, // offset for fixed header
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="bg-white min-h-screen pt-32 pb-32">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mb-24 lg:w-2/3"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-slate-900 leading-[1.1] mb-8">
            Personal Knowledge Base
          </h1>
          <p className="text-xl text-slate-500 font-light leading-relaxed">
            A living engineering notebook documenting my continuous learning process, architectural discoveries, experiments, and reflections. This is not a progress tracker, but a transparent view into my engineering thinking.
          </p>
        </motion.div>
        
        <div className="flex flex-col lg:flex-row gap-16 relative items-start">
          {/* Sidebar Navigation */}
          <div className="hidden lg:block w-64 shrink-0 sticky top-32 max-h-[calc(100vh-8rem)] overflow-y-auto custom-scrollbar pr-6 border-r border-slate-100">
            <h4 className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-6 px-3">Contents</h4>
            <nav className="flex flex-col space-y-1">
              {SECTIONS.map((section) => (
                <button
                  key={section.id}
                  onClick={() => scrollToSection(section.id)}
                  className={`text-left px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                    activeSection === section.id 
                      ? 'bg-primary/5 text-primary' 
                      : 'text-slate-500 hover:text-slate-900 hover:bg-slate-50'
                  }`}
                >
                  {section.label}
                </button>
              ))}
            </nav>
          </div>

          {/* Main Content */}
          <div className="flex-1 space-y-32 lg:max-w-3xl">
            <div id="currently-learning"><CurrentlyLearningSection /></div>
            <div id="timeline"><TimelineSection /></div>
            <div id="notes"><EngineeringNotesSection /></div>
            <div id="architecture"><ArchitectureDiscoveriesSection /></div>
            <div id="patterns"><PatternsSection /></div>
            <div id="experiments"><ExperimentsSection /></div>
            <div id="lessons"><LessonsLearnedSection /></div>
            <div id="bookmarks"><BookmarksSection /></div>
            <div id="future"><FutureTopicsSection /></div>
            <div id="revisions"><RevisionLogSection /></div>
          </div>
        </div>
      </div>
    </div>
  );
}
