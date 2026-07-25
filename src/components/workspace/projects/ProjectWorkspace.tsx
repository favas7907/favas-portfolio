import { EngineeringProject } from '../../../data/projects';
import WorkflowStageCard from './WorkflowStageCard';
import BuildLogCard from './BuildLogCard';

export default function ProjectWorkspace({ project }: { project: EngineeringProject }) {
  return (
    <div className="space-y-16 mt-8">
      <div className="space-y-4 max-w-3xl">
        <h3 className="text-2xl font-medium text-slate-900">{project.title}</h3>
        <p className="text-lg text-slate-600 font-light leading-relaxed">{project.summary}</p>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-16">
        
        {/* Left Column: Engineering Workflow */}
        <div className="xl:col-span-2 space-y-8">
          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest text-slate-400 mb-8">Engineering Workflow</h4>
            <div className="space-y-2 relative">
              {project.workflow.map((stage, index) => (
                <WorkflowStageCard 
                  key={stage.id} 
                  stage={stage} 
                  isLast={index === project.workflow.length - 1}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Build Log */}
        <div className="xl:col-span-1 space-y-8">
          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest text-slate-400 mb-8">Build Log</h4>
            <div className="space-y-4">
              {project.buildLog.map(log => (
                <BuildLogCard key={log.id} log={log} />
              ))}
              {project.buildLog.length === 0 && (
                <div className="p-6 bg-slate-50 border border-slate-100 rounded-xl text-center">
                  <p className="text-sm text-slate-500 italic">No significant build log entries recorded.</p>
                </div>
              )}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
