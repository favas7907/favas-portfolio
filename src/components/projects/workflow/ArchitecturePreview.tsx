import React from 'react';
import { Layout, Server, Database, ArrowRight, ArrowDown } from 'lucide-react';

export default function ArchitecturePreview() {
  return (
    <div className="w-full bg-slate-50 border border-slate-100 rounded-2xl p-8 md:p-12 overflow-hidden relative my-8">
      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-center gap-6 lg:gap-12">
        {/* Client */}
        <div className="flex flex-col items-center">
          <div className="w-20 h-20 bg-white border border-slate-200 rounded-2xl flex items-center justify-center shadow-sm mb-4">
            <Layout className="w-8 h-8 text-slate-600" />
          </div>
          <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500">Client</span>
        </div>

        {/* Arrow Desktop */}
        <div className="hidden lg:flex flex-col items-center justify-center">
          <ArrowRight className="w-5 h-5 text-slate-300" />
          <span className="text-[9px] uppercase tracking-widest text-slate-400 font-bold mt-2">API</span>
        </div>
        
        {/* Arrow Mobile */}
        <div className="flex lg:hidden flex-row items-center justify-center my-2">
          <ArrowDown className="w-5 h-5 text-slate-300" />
        </div>

        {/* Server */}
        <div className="flex flex-col items-center">
          <div className="w-24 h-24 bg-white border-2 border-primary/10 rounded-2xl flex items-center justify-center shadow-md shadow-blue-500/5 mb-4 relative">
            <Server className="w-10 h-10 text-primary" />
          </div>
          <span className="text-[10px] font-bold uppercase tracking-widest text-primary">Backend</span>
        </div>

        {/* Arrow Desktop */}
        <div className="hidden lg:flex flex-col items-center justify-center">
          <ArrowRight className="w-5 h-5 text-slate-300" />
          <span className="text-[9px] uppercase tracking-widest text-slate-400 font-bold mt-2">Data</span>
        </div>
        
        {/* Arrow Mobile */}
        <div className="flex lg:hidden flex-row items-center justify-center my-2">
          <ArrowDown className="w-5 h-5 text-slate-300" />
        </div>

        {/* Database */}
        <div className="flex flex-col items-center">
          <div className="w-20 h-20 bg-white border border-slate-200 rounded-2xl flex items-center justify-center shadow-sm mb-4">
            <Database className="w-8 h-8 text-slate-600" />
          </div>
          <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500">Database</span>
        </div>
      </div>
    </div>
  );
}
