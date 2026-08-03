import { Project } from '../../../types';
import { motion } from 'motion/react';
import { Target, Layers, Zap, TrendingUp } from 'lucide-react';
import DecisionReference from './DecisionReference';

interface WorkflowNavigatorProps {
  project: Project;
}

export default function WorkflowNavigator({ project }: WorkflowNavigatorProps) {
  const { details } = project;

  return (
    <div className="w-full max-w-4xl mx-auto py-16 md:py-24">

      {/* Section 1: Problem & Goals */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="mb-20"
      >
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
            <Target className="w-5 h-5 text-primary" />
          </div>
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-black">The Problem</h2>
        </div>
        <p className="text-lg text-slate-600 leading-relaxed mb-8">{details.problem}</p>
        
        {details.overview && (
          <p className="text-base text-slate-500 leading-relaxed mb-8">{details.overview}</p>
        )}

        <div className="bg-slate-50 border border-slate-100 rounded-xl p-6">
          <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-4">Goals</h3>
          <ul className="space-y-3">
            {details.goals.map((goal, i) => (
              <li key={i} className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 shrink-0" />
                <p className="text-slate-700 text-sm leading-relaxed">{goal}</p>
              </li>
            ))}
          </ul>
        </div>
      </motion.section>

      {/* Section 2: Architecture */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="mb-20"
      >
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
            <Layers className="w-5 h-5 text-primary" />
          </div>
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-black">Architecture</h2>
        </div>
        <p className="text-lg text-slate-600 leading-relaxed mb-8">{details.architecture.overview}</p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[
            { label: 'Frontend', value: details.architecture.client },
            { label: 'Backend', value: details.architecture.server },
            { label: 'Database', value: details.architecture.database },
            { label: 'State', value: details.architecture.state },
          ].map((item, i) => (
            <div key={i} className="bg-white border border-slate-200 rounded-xl p-5">
              <h3 className="text-[10px] font-bold uppercase tracking-widest text-primary mb-2">{item.label}</h3>
              <p className="text-sm text-slate-600 leading-relaxed">{item.value}</p>
            </div>
          ))}
        </div>
      </motion.section>

      {/* Section 3: Key Decisions */}
      {details.engineeringDecisions.length > 0 && (
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mb-20"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
              <Zap className="w-5 h-5 text-primary" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-black">Key Decisions</h2>
          </div>
          <p className="text-base text-slate-500 leading-relaxed mb-8">
            {details.architecture.engineeringSummary}
          </p>
          <div className="space-y-4">
            {details.engineeringDecisions.slice(0, 3).map((decision, i) => (
              <DecisionReference key={i} decision={decision} />
            ))}
          </div>
        </motion.section>
      )}

      {/* Section 4: Results */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="mb-16"
      >
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
            <TrendingUp className="w-5 h-5 text-primary" />
          </div>
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-black">Results</h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {[...details.results.performanceMetrics.slice(0, 2), ...details.results.reliabilityMetrics.slice(0, 2)].map((metric, idx) => (
            <div key={idx} className="bg-slate-50 border border-slate-100 p-5 rounded-xl text-center">
              <div className="text-2xl font-bold text-primary mb-1">{metric.value}</div>
              <div className="text-[10px] font-bold uppercase tracking-widest text-slate-400">{metric.label}</div>
            </div>
          ))}
        </div>

        <p className="text-base text-slate-600 leading-relaxed mb-6">{details.results.conclusion}</p>
        
        {/* Lessons & Future */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-slate-50 border border-slate-100 rounded-xl p-6">
            <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-3">Lessons Learned</h3>
            <p className="text-sm text-slate-600 leading-relaxed">{details.lessons}</p>
          </div>
          <div className="bg-slate-50 border border-slate-100 rounded-xl p-6">
            <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-3">Future Plans</h3>
            <p className="text-sm text-slate-600 leading-relaxed">{details.future}</p>
          </div>
        </div>
      </motion.section>

    </div>
  );
}
