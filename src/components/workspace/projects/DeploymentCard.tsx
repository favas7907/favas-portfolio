import { Rocket, Server, Activity } from 'lucide-react';

export default function DeploymentCard({ content }: { content: string }) {
  return (
    <div className="p-6 bg-blue-50 border border-blue-100 rounded-xl mt-4">
      <div className="flex items-center gap-2 mb-4">
        <Rocket className="w-4 h-4 text-blue-600" />
        <h5 className="text-sm font-bold uppercase tracking-widest text-blue-800">Deployment Strategy</h5>
      </div>
      <p className="text-sm text-blue-900/80 font-light leading-relaxed mb-6">{content}</p>
      
      <div className="flex gap-4">
        <div className="px-3 py-1.5 bg-white rounded-md text-xs font-medium text-blue-700 border border-blue-100 flex items-center gap-2">
          <Server className="w-3 h-3" /> Multi-region
        </div>
        <div className="px-3 py-1.5 bg-white rounded-md text-xs font-medium text-blue-700 border border-blue-100 flex items-center gap-2">
          <Activity className="w-3 h-3" /> Zero-downtime
        </div>
      </div>
    </div>
  );
}
