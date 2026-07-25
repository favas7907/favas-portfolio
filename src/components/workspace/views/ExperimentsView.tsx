import { RoadmapDomain } from '../../../data/roadmaps';
import ResearchNotebook from '../../playground/ResearchNotebook';

export default function ExperimentsView({ domain }: { domain: RoadmapDomain }) {
  // If we want to filter by domain, we could pass it down, but the playground acts as a holistic research lab.
  // For now, let's just render the notebook.
  return (
    <div className="animate-in fade-in duration-500 w-full h-full">
      <ResearchNotebook />
    </div>
  );
}
