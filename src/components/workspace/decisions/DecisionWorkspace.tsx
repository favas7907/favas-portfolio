import { EngineeringDecision } from '../../../data/decisions';
import DecisionCard from './DecisionCard';
import TradeOffPanel from './TradeOffPanel';
import ArchitectureImpact from './ArchitectureImpact';
import DecisionRelationship from './DecisionRelationship';
import { Calendar } from 'lucide-react';

export default function DecisionWorkspace({ decision }: { decision: EngineeringDecision }) {
  const formattedDate = new Date(decision.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <div className="space-y-16 animate-in fade-in duration-500 pb-12">
      {/* Header */}
      <div className="space-y-6">
        <div className="flex items-center gap-4 text-sm font-medium text-slate-500">
          <span className="px-3 py-1 bg-slate-100 rounded-full">{decision.project}</span>
          <div className="flex items-center gap-1.5">
            <Calendar className="w-4 h-4" />
            <span>{formattedDate}</span>
          </div>
        </div>
        <h2 className="text-4xl md:text-5xl font-medium text-slate-900 tracking-tight">{decision.title}</h2>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-12">
        {/* Main Content Column */}
        <div className="xl:col-span-2">
          <DecisionCard decision={decision} />
        </div>

        {/* Context Sidebar */}
        <div className="xl:col-span-1 space-y-12">
          <TradeOffPanel tradeOffs={decision.tradeOffs} />
          <ArchitectureImpact decision={decision} />
          <DecisionRelationship decision={decision} />
        </div>
      </div>
    </div>
  );
}
