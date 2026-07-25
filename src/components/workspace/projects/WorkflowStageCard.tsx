import { useState } from 'react';
import { WorkflowStage } from '../../../data/projects';
import ArtifactCard from './ArtifactCard';
import ArchitecturePreview from './ArchitecturePreview';
import DeploymentCard from './DeploymentCard';
import IterationHistory from './IterationHistory';
import DecisionReference from './DecisionReference';
import { ChevronDown, Beaker, CheckCircle2, Search, Target, PenTool, Layout, FileCode2, TestTube2, Rocket, Activity, Repeat, History } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const ICONS = {
  'Problem Discovery': Search,
  'Research': Beaker,
  'Requirements': Target,
  'Architecture': Layout,
  'Design': PenTool,
  'Prototype': FileCode2,
  'Implementation': FileCode2,
  'Testing': TestTube2,
  'Deployment': Rocket,
  'Monitoring': Activity,
  'Iteration': Repeat,
  'Lessons Learned': History,
};

export default function WorkflowStageCard({ stage, isLast }: { stage: WorkflowStage, isLast: boolean }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const Icon = ICONS[stage.type] || CheckCircle2;

  return (
    <div className="relative group">
      {!isLast && (
        <div className="absolute left-6 top-12 bottom-0 w-px bg-slate-200 group-hover:bg-blue-200 transition-colors -ml-px" />
      )}
      
      <div className="relative flex items-start gap-6">
        <button 
          onClick={() => setIsExpanded(!isExpanded)}
          className={`w-12 h-12 rounded-full flex items-center justify-center shrink-0 border-2 transition-all duration-300 z-10 ${
            isExpanded 
              ? 'bg-blue-600 border-blue-600 text-white shadow-md' 
              : 'bg-white border-slate-200 text-slate-400 hover:border-blue-300 hover:text-blue-600'
          }`}
        >
          <Icon className="w-5 h-5" />
        </button>

        <div className="flex-1 pb-12">
          <button 
            onClick={() => setIsExpanded(!isExpanded)}
            className="w-full text-left group/btn"
          >
            <div className="flex items-center gap-3 mb-1">
              <span className="text-xs font-bold uppercase tracking-widest text-blue-500">{stage.type}</span>
            </div>
            <div className="flex items-center justify-between">
              <h4 className="text-xl font-medium text-slate-900 group-hover/btn:text-blue-600 transition-colors">{stage.title}</h4>
              <ChevronDown className={`w-5 h-5 text-slate-400 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`} />
            </div>
          </button>

          <AnimatePresence>
            {isExpanded && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
                className="overflow-hidden"
              >
                <div className="pt-6 space-y-6">
                  <div className="p-4 bg-slate-50 border-l-2 border-slate-300 rounded-r-xl">
                    <p className="text-sm font-medium text-slate-700 italic">"{stage.questionAnswered}"</p>
                  </div>
                  
                  <p className="text-base text-slate-600 font-light leading-relaxed">
                    {stage.content}
                  </p>
                  
                  {stage.type === 'Architecture' && <ArchitecturePreview description={stage.content} />}
                  {stage.type === 'Deployment' && <DeploymentCard content={stage.content} />}
                  {stage.type === 'Iteration' && <IterationHistory content={stage.content} />}
                  
                  {stage.type === 'Research' && <DecisionReference decisionId="dec-1" title="Initial Technical Research" />}

                  {stage.artifacts && stage.artifacts.length > 0 && (
                    <div className="pt-4 border-t border-slate-100">
                      <h5 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-4">Supporting Artifacts</h5>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {stage.artifacts.map((artifact, idx) => (
                          <ArtifactCard key={idx} artifact={artifact} />
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
