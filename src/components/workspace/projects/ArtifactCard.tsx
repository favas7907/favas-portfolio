import { Artifact } from '../../../data/projects';
import { FileCode, Image, Database, Webhook, Github, Activity, Server, ActivitySquare, FileText } from 'lucide-react';

export default function ArtifactCard({ artifact }: { artifact: Artifact }) {
  const getIcon = () => {
    switch (artifact.type) {
      case 'Wireframe': return <Image className="w-4 h-4" />;
      case 'Architecture Diagram': return <Server className="w-4 h-4" />;
      case 'Database Schema': return <Database className="w-4 h-4" />;
      case 'API Contract': return <Webhook className="w-4 h-4" />;
      case 'GitHub Milestone': return <Github className="w-4 h-4" />;
      case 'Performance Benchmark': return <Activity className="w-4 h-4" />;
      case 'Deployment Diagram': return <ActivitySquare className="w-4 h-4" />;
      case 'Monitoring Dashboard': return <Activity className="w-4 h-4" />;
      case 'Documentation': return <FileText className="w-4 h-4" />;
      default: return <FileCode className="w-4 h-4" />;
    }
  };

  return (
    <div className="group p-4 bg-slate-50 border border-slate-100 rounded-xl hover:border-slate-300 transition-all duration-300">
      <div className="flex items-center gap-3 mb-3">
        <div className="w-8 h-8 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-slate-500 group-hover:text-blue-600 transition-colors">
          {getIcon()}
        </div>
        <div>
          <h5 className="text-sm font-medium text-slate-900">{artifact.title}</h5>
          <span className="text-xs text-slate-500">{artifact.type}</span>
        </div>
      </div>
      <p className="text-xs text-slate-600 font-light leading-relaxed">{artifact.description}</p>
    </div>
  );
}
