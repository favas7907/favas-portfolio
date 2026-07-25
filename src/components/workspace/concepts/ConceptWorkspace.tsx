import { Concept } from '../../../data/concepts';
import ConceptCard from './ConceptCard';
import QuestionPanel from './QuestionPanel';
import ConceptRelationship from './ConceptRelationship';
import ProjectReference from './ProjectReference';
import LearningResource from './LearningResource';

export default function ConceptWorkspace({ concept }: { concept: Concept }) {
  return (
    <div className="space-y-16 animate-in fade-in duration-500 pb-12">
      {/* Header */}
      <div className="space-y-6">
        <h2 className="text-4xl md:text-5xl font-medium text-slate-900 tracking-tight">{concept.title}</h2>
        <p className="text-xl text-slate-600 font-light leading-relaxed max-w-3xl border-l-4 border-blue-500 pl-6">
          {concept.summary}
        </p>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-12">
        {/* Main Content Column */}
        <div className="xl:col-span-2">
          <ConceptCard concept={concept} />
        </div>

        {/* Context Sidebar */}
        <div className="xl:col-span-1 space-y-12">
          <QuestionPanel questions={concept.questions} />
          <ProjectReference concept={concept} />
          <ConceptRelationship concept={concept} />
          <LearningResource concept={concept} />
        </div>
      </div>
    </div>
  );
}
