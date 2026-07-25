import { motion, AnimatePresence } from 'motion/react';
import { RoadmapDomain } from '../../data/roadmaps';
import { PerspectiveId } from './types';

// Import views
import OverviewView from './views/OverviewView';
import ConceptsView from './views/ConceptsView';
import DecisionsView from './views/DecisionsView';
import ArchitectureView from './views/ArchitectureView';
import TechnologiesView from './views/TechnologiesView';
import ProjectsView from './views/ProjectsView';
import EvolutionView from './views/EvolutionView';
import ResourcesView from './views/ResourcesView';
import FutureView from './views/FutureView';
import ExperimentsView from './views/ExperimentsView';
import ResearchView from './views/ResearchView';
import NotesView from './views/NotesView';

interface WorkspaceCanvasProps {
  domain: RoadmapDomain;
  activePerspective: PerspectiveId;
}

export default function WorkspaceCanvas({ domain, activePerspective }: WorkspaceCanvasProps) {
  
  const renderView = () => {
    switch (activePerspective) {
      case 'overview': return <OverviewView domain={domain} />;
      case 'concepts': return <ConceptsView domain={domain} />;
      case 'decisions': return <DecisionsView domain={domain} />;
      case 'architecture': return <ArchitectureView domain={domain} />;
      case 'technologies': return <TechnologiesView domain={domain} />;
      case 'projects': return <ProjectsView domain={domain} />;
      case 'evolution': return <EvolutionView domain={domain} />;
      case 'resources': return <ResourcesView domain={domain} />;
      case 'future': return <FutureView domain={domain} />;
      case 'experiments': return <ExperimentsView domain={domain} />;
      case 'research': return <ResearchView domain={domain} />;
      case 'notes': return <NotesView domain={domain} />;
      default: return null;
    }
  };

  return (
    <div className="relative w-full h-full min-h-[600px] bg-white rounded-3xl border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={`${domain.id}-${activePerspective}`}
          initial={{ opacity: 0, y: 10, filter: 'blur(4px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          exit={{ opacity: 0, y: -10, filter: 'blur(4px)' }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="absolute inset-0 overflow-y-auto hide-scrollbar p-8 md:p-12"
        >
          {renderView()}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
