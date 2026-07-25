import React from 'react';

interface EditorialDividerProps {
  title: string;
  description: string;
}

export default function EditorialDivider({ title, description }: EditorialDividerProps) {
  return (
    <div className="py-24 md:py-32 flex flex-col items-center justify-center text-center max-w-3xl mx-auto px-6 relative">
       {/* Minimalist visual anchor */}
       <div className="w-px h-16 bg-slate-200 absolute top-0" aria-hidden="true"></div>
       
       <h2 className="text-[11px] font-bold uppercase tracking-[0.2em] text-slate-500 mb-6 mt-8">
          {title}
       </h2>
       
       <p className="text-2xl md:text-3xl lg:text-4xl text-slate-800 font-light leading-relaxed tracking-tight">
          {description}
       </p>
       
       <div className="w-px h-16 bg-slate-200 absolute bottom-0" aria-hidden="true"></div>
    </div>
  );
}
