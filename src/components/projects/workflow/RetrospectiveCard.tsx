import React from 'react';
import { Lightbulb, RotateCcw } from 'lucide-react';

interface RetrospectiveCardProps {
  lessons: string;
  future: string;
}

export default function RetrospectiveCard({ lessons, future }: RetrospectiveCardProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
      <div className="bg-slate-50 border border-slate-100 rounded-2xl p-8">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
            <Lightbulb className="w-5 h-5 text-blue-600" />
          </div>
          <h4 className="text-lg font-medium tracking-tight text-slate-900">Engineering Lessons</h4>
        </div>
        <p className="text-slate-600 leading-relaxed italic text-sm md:text-base">
          "{lessons}"
        </p>
      </div>

      <div className="bg-slate-50 border border-slate-100 rounded-2xl p-8">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center">
            <RotateCcw className="w-5 h-5 text-slate-700" />
          </div>
          <h4 className="text-lg font-medium tracking-tight text-slate-900">Future Iterations</h4>
        </div>
        <p className="text-slate-600 leading-relaxed text-sm md:text-base">
          {future}
        </p>
      </div>
    </div>
  );
}
