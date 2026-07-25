import React from 'react';
import { FileCode2, Image as ImageIcon, GitCommit, Target } from 'lucide-react';

interface ArtifactPanelProps {
  type: 'code' | 'image' | 'commit' | 'impact';
  content: React.ReactNode;
  imageUrl?: string;
  imageAlt?: string;
}

export default function ArtifactPanel({ type, content, imageUrl, imageAlt }: ArtifactPanelProps) {
  return (
    <div className="bg-slate-50 border border-slate-100 rounded-xl overflow-hidden mt-6">
      {imageUrl && type === 'image' && (
        <img
          src={imageUrl}
          alt={imageAlt || 'Artifact'}
          loading="lazy"
          className="w-full h-auto object-cover border-b border-slate-100"
        />
      )}
      
      <div className="p-6 flex items-start gap-4">
        {type === 'code' && <FileCode2 className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />}
        {type === 'image' && <ImageIcon className="w-5 h-5 text-slate-400 shrink-0 mt-0.5" />}
        {type === 'commit' && <GitCommit className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />}
        {type === 'impact' && <Target className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />}
        
        <div className="w-full">
          {type === 'code' ? (
            <div className="font-mono text-sm text-slate-700 leading-relaxed bg-white border border-slate-200 p-4 rounded-lg">
              {content}
            </div>
          ) : type === 'commit' ? (
            <div className="text-sm font-bold uppercase tracking-widest text-slate-600">
              {content} Commits
            </div>
          ) : (
            <div className="text-slate-600 text-sm leading-relaxed">
              {content}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
