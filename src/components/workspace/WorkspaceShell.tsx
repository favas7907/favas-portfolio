import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { RoadmapDomain } from '../../data/roadmaps';
import ExplorerPanel from './ExplorerPanel';
import WorkspaceCanvas from './WorkspaceCanvas';
import ContextPanel from './ContextPanel';
import KnowledgeTrail from './KnowledgeTrail';
import { PerspectiveId } from './types';
import { PERSPECTIVES } from './constants';

interface WorkspaceShellProps {
  domain: RoadmapDomain;
}

export default function WorkspaceShell({ domain }: WorkspaceShellProps) {
  const [searchParams, setSearchParams] = useSearchParams();
  
  const rawPerspective = searchParams.get('v') as PerspectiveId;
  const isValid = PERSPECTIVES.some(p => p.id === rawPerspective);
  const activePerspective = isValid ? rawPerspective : 'overview';

  const handlePerspectiveChange = (id: PerspectiveId) => {
    setSearchParams({ v: id }, { replace: true });
  };

  useEffect(() => {
    if (!searchParams.has('v') || !isValid) {
      setSearchParams({ v: 'overview' }, { replace: true });
    }
  }, [isValid, searchParams, setSearchParams]);

  return (
    <div className="bg-white min-h-screen pt-24 md:pt-32 pb-0 flex flex-col">
      <div className="border-b border-slate-100 bg-white/80 backdrop-blur-md sticky top-16 z-20 transition-all">
        <div className="container-custom py-4">
          <KnowledgeTrail domain={domain} activePerspective={activePerspective} />
        </div>
      </div>

      <div className="flex-1 container-custom flex flex-col lg:flex-row gap-8 lg:gap-12 py-8 relative">
        <aside className="w-full lg:w-56 shrink-0 order-2 lg:order-1">
           <div className="lg:sticky lg:top-40">
             <ExplorerPanel 
               activePerspective={activePerspective} 
               onChange={handlePerspectiveChange} 
             />
           </div>
        </aside>

        <main className="flex-1 min-w-0 order-1 lg:order-2">
          <WorkspaceCanvas 
            domain={domain} 
            activePerspective={activePerspective} 
          />
        </main>

        <aside className="w-full lg:w-72 xl:w-80 shrink-0 order-3 lg:order-3">
          <div className="lg:sticky lg:top-40">
            <ContextPanel domain={domain} />
          </div>
        </aside>
      </div>
    </div>
  );
}
