import React from 'react';
import { Project } from '../../../types';
import WorkflowStage from './WorkflowStage';
import ArtifactPanel from './ArtifactPanel';
import ArchitecturePreview from './ArchitecturePreview';
import DecisionReference from './DecisionReference';
import IterationHistory from './IterationHistory';
import RetrospectiveCard from './RetrospectiveCard';
import ProjectRelationshipPanel from '../evidence/ProjectRelationshipPanel';

interface WorkflowNavigatorProps {
  project: Project;
}

export default function WorkflowNavigator({ project }: WorkflowNavigatorProps) {
  const { details } = project;

  // Helper to categorize milestones by phase loosely
  const getMilestonesByPhases = (phases: string[]) => {
    return details.development.filter(m => 
      phases.some(p => m.phase.toLowerCase().includes(p.toLowerCase()))
    );
  };

  const researchMilestones = getMilestonesByPhases(['research', 'discovery']);
  const prototypeMilestones = getMilestonesByPhases(['prototype', 'design']);
  const implementationMilestones = getMilestonesByPhases(['sprint', 'core', 'implementation', 'development']);
  const testingMilestones = getMilestonesByPhases(['test', 'qa']);
  const deploymentMilestones = getMilestonesByPhases(['deploy', 'infrastructure', 'release']);
  
  return (
    <div className="w-full max-w-4xl mx-auto py-16 md:py-24">
      <div className="mb-16">
        <h2 className="text-3xl md:text-4xl font-medium tracking-tight text-slate-900 mb-6">Engineering Methodology</h2>
        <p className="text-lg text-slate-600 leading-relaxed max-w-2xl">
          A transparent look into the engineering lifecycle. From initial problem discovery through architecture, implementation, and continuous iteration in production.
        </p>
      </div>

      <div className="space-y-4">
        {/* 1. Problem Discovery */}
        <WorkflowStage phase="01. Problem Discovery" title="Defining the Challenge" defaultExpanded={true}>
          <div className="prose prose-slate prose-lg max-w-none">
            <p className="text-slate-600 leading-relaxed">{details.problem}</p>
          </div>
          {details.overview && (
            <div className="mt-8 pt-8 border-t border-slate-100">
              <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400 block mb-3">Project Context</span>
              <p className="text-slate-600 leading-relaxed text-sm">{details.overview}</p>
            </div>
          )}
        </WorkflowStage>

        {/* 2. Research & Requirements */}
        <WorkflowStage phase="02. Research" title="Technical Feasibility & Requirements">
          {details.research && (
            <div className="prose prose-slate prose-lg max-w-none mb-8">
              <p className="text-slate-600 leading-relaxed">{details.research}</p>
            </div>
          )}
          
          <div className="bg-slate-50 border border-slate-100 rounded-xl p-8">
            <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400 block mb-4">Core Engineering Requirements</span>
            <ul className="space-y-4">
              {details.goals.map((goal, i) => (
                <li key={i} className="flex items-start gap-4">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 shrink-0" />
                  <p className="text-slate-700 leading-relaxed text-sm md:text-base">{goal}</p>
                </li>
              ))}
            </ul>
          </div>
          
          {researchMilestones.map((m, i) => (
            <ArtifactPanel key={i} type="impact" content={`${m.title}: ${m.description}`} />
          ))}
        </WorkflowStage>

        {/* 3. Architecture */}
        <WorkflowStage phase="03. Architecture" title="System Design & Data Flow">
          <div className="prose prose-slate prose-lg max-w-none mb-10">
            <p className="text-slate-600 leading-relaxed">{details.architecture.overview}</p>
          </div>
          
          <ArchitecturePreview />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
            <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
              <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400 block mb-2">Presentation Layer</span>
              <p className="text-slate-600 leading-relaxed text-sm">{details.architecture.client}</p>
            </div>
            <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
              <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400 block mb-2">API & Business Logic</span>
              <p className="text-slate-600 leading-relaxed text-sm">{details.architecture.server}</p>
            </div>
            <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
              <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400 block mb-2">Data Persistence</span>
              <p className="text-slate-600 leading-relaxed text-sm">{details.architecture.database}</p>
            </div>
            <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
              <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400 block mb-2">State & Sync</span>
              <p className="text-slate-600 leading-relaxed text-sm">{details.architecture.state}</p>
            </div>
          </div>
        </WorkflowStage>

        {/* 4. Prototype & Design */}
        {(prototypeMilestones.length > 0 || details.architecture.apiDesign) && (
          <WorkflowStage phase="04. Prototype" title="Validation & API Design">
            <div className="prose prose-slate prose-lg max-w-none mb-8">
              <p className="text-slate-600 leading-relaxed">{details.architecture.apiDesign}</p>
            </div>
            {prototypeMilestones.map((m, i) => (
              <div key={i} className="mb-6 last:mb-0">
                <ArtifactPanel 
                  type={m.imageUrl ? 'image' : m.techNotes ? 'code' : 'impact'} 
                  content={m.techNotes || m.description} 
                  imageUrl={m.imageUrl}
                  imageAlt={m.imageAlt}
                />
              </div>
            ))}
          </WorkflowStage>
        )}

        {/* 5. Implementation */}
        <WorkflowStage phase="05. Implementation" title="Building the Core System">
          <div className="prose prose-slate prose-lg max-w-none mb-8">
            <p className="text-slate-600 leading-relaxed">{details.architecture.engineeringSummary}</p>
          </div>

          {implementationMilestones.length > 0 && (
            <div className="mb-10 space-y-6">
              <h4 className="text-[10px] font-bold uppercase tracking-widest text-slate-400 border-b border-slate-100 pb-2">Implementation Milestones</h4>
              {implementationMilestones.map((m, i) => (
                <div key={i} className="bg-slate-50 border border-slate-100 rounded-xl p-6">
                  <h5 className="text-slate-900 font-medium tracking-tight mb-2">{m.title}</h5>
                  <p className="text-slate-600 text-sm leading-relaxed mb-4">{m.description}</p>
                  {m.techNotes && <ArtifactPanel type="code" content={m.techNotes} />}
                  {m.commitCount && <ArtifactPanel type="commit" content={m.commitCount} />}
                </div>
              ))}
            </div>
          )}

          {details.engineeringDecisions.length > 0 && (
            <div className="space-y-4">
              <h4 className="text-[10px] font-bold uppercase tracking-widest text-slate-400 border-b border-slate-100 pb-2 mb-6">Key Technical Decisions</h4>
              {details.engineeringDecisions.map((decision, i) => (
                <DecisionReference key={i} decision={decision} />
              ))}
            </div>
          )}
        </WorkflowStage>

        {/* 6. Testing & Quality */}
        <WorkflowStage phase="06. Testing" title="Validation & Edge Cases">
          <div className="prose prose-slate prose-lg max-w-none mb-8">
            <p className="text-slate-600 leading-relaxed">{details.results.testingAndQuality}</p>
          </div>
          {testingMilestones.map((m, i) => (
            <div key={i} className="mb-6 last:mb-0">
              <h5 className="text-slate-900 font-medium tracking-tight mb-2">{m.title}</h5>
              <p className="text-slate-600 text-sm leading-relaxed">{m.description}</p>
              {m.techNotes && <ArtifactPanel type="code" content={m.techNotes} />}
            </div>
          ))}
        </WorkflowStage>

        {/* 7. Deployment */}
        <WorkflowStage phase="07. Deployment" title="Infrastructure & Release">
          <div className="prose prose-slate prose-lg max-w-none mb-8">
            <p className="text-slate-600 leading-relaxed">{details.architecture.deployment}</p>
          </div>
          {deploymentMilestones.map((m, i) => (
            <div key={i} className="mb-6 last:mb-0 bg-slate-50 p-6 rounded-xl border border-slate-100">
              <h5 className="text-slate-900 font-medium tracking-tight mb-2">{m.title}</h5>
              <p className="text-slate-600 text-sm leading-relaxed">{m.description}</p>
              {m.techNotes && <ArtifactPanel type="code" content={m.techNotes} />}
            </div>
          ))}
          <div className="mt-8 p-6 bg-white border border-slate-200 rounded-xl shadow-sm">
            <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400 block mb-2">Scalability & Reliability</span>
            <p className="text-slate-600 leading-relaxed text-sm">{details.results.scalabilityValidation}</p>
          </div>
        </WorkflowStage>

        {/* 8. Monitoring & Iteration */}
        <WorkflowStage phase="08. Iteration" title="Monitoring & Production Metrics">
          <IterationHistory results={details.results} />
          {/* Include any 'Iteration' or 'Performance' milestones here */}
          {details.development.filter(m => m.phase.toLowerCase().includes('iteration') || m.phase.toLowerCase().includes('performance')).map((m, i) => (
            <div key={i} className="mt-6">
              <ArtifactPanel type="impact" content={`${m.title}: ${m.description}`} />
            </div>
          ))}
        </WorkflowStage>

        {/* 9. Retrospective */}
        <WorkflowStage phase="09. Retrospective" title="Reflection & Future Engineering">
          <div className="prose prose-slate prose-lg max-w-none mb-8">
            <p className="text-slate-600 leading-relaxed">{details.results.conclusion}</p>
          </div>
          <RetrospectiveCard lessons={details.lessons} future={details.future} />
        </WorkflowStage>

      </div>

      <div className="mt-24 pt-16 border-t border-slate-100">
        <ProjectRelationshipPanel project={project} />
      </div>
    </div>
  );
}
