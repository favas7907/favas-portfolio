import { ExperimentState } from '../../data/experiments';
import { CheckCircle2, Circle, ArrowRight } from 'lucide-react';

const STATES: ExperimentState[] = [
  'Idea',
  'Researching',
  'Building',
  'Testing',
  'Validated',
];

export default function ExperimentTimeline({ currentState }: { currentState: ExperimentState }) {
  // simplified timeline
  return (
    <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-hide">
      <div className="flex items-center text-xs font-medium">
        <span className="px-2.5 py-1 bg-slate-100 text-slate-700 rounded-full border border-slate-200">
          State: {currentState}
        </span>
      </div>
    </div>
  );
}
