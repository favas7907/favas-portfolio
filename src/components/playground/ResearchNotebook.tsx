import { useState, useMemo } from 'react';
import { motion } from 'motion/react';
import { EXPERIMENTS, ExperimentCategory, Experiment } from '../../data/experiments';
import ExperimentCard from './ExperimentCard';
import { Filter, Search } from 'lucide-react';

export default function ResearchNotebook() {
  const [activeCategory, setActiveCategory] = useState<ExperimentCategory | 'All'>('All');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = useMemo(() => {
    const cats = Array.from(new Set(EXPERIMENTS.map(e => e.category)));
    return ['All', ...cats] as (ExperimentCategory | 'All')[];
  }, []);

  const filteredExperiments = useMemo(() => {
    return EXPERIMENTS.filter(exp => {
      const matchesCategory = activeCategory === 'All' || exp.category === activeCategory;
      const matchesSearch = exp.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            exp.hypothesis.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <div className="flex flex-col lg:flex-row gap-8 h-full">
      {/* Sidebar / Filters */}
      <div className="w-full lg:w-64 shrink-0 flex flex-col gap-6">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
          <input 
            type="text" 
            placeholder="Search experiments..." 
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm font-medium text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
          />
        </div>

        <div className="hidden lg:block space-y-1">
          <h4 className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-3 px-3">
            Categories
          </h4>
          <nav className="flex flex-col gap-1">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`text-left px-3 py-2 rounded-lg text-sm transition-colors ${
                  activeCategory === category 
                    ? 'bg-blue-50 text-blue-700 font-semibold' 
                    : 'text-slate-600 hover:bg-slate-50 font-medium'
                }`}
              >
                {category}
              </button>
            ))}
          </nav>
        </div>

        {/* Mobile categories dropdown */}
        <div className="lg:hidden">
          <div className="flex items-center gap-2 mb-3">
            <Filter className="w-4 h-4 text-slate-400" />
            <span className="text-xs font-bold uppercase tracking-widest text-slate-400">Categories</span>
          </div>
          <select 
            value={activeCategory}
            onChange={(e) => setActiveCategory(e.target.value as any)}
            className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm font-medium text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"
          >
            {categories.map(category => (
              <option key={category} value={category}>{category}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 min-w-0 flex flex-col gap-6">
        <header className="mb-4">
          <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
            {activeCategory === 'All' ? 'All Experiments' : activeCategory}
          </h2>
          <p className="text-sm text-slate-500 mt-1 font-medium">
            Showing {filteredExperiments.length} {filteredExperiments.length === 1 ? 'experiment' : 'experiments'}
          </p>
        </header>

        <div className="space-y-6 pb-12">
          {filteredExperiments.length > 0 ? (
            filteredExperiments.map(experiment => (
              <ExperimentCard key={experiment.id} experiment={experiment} />
            ))
          ) : (
            <div className="text-center py-20 bg-slate-50 border border-slate-100 rounded-2xl">
              <p className="text-slate-500 font-medium">No experiments found matching your criteria.</p>
              <button 
                onClick={() => {
                  setSearchQuery('');
                  setActiveCategory('All');
                }}
                className="mt-4 text-sm font-semibold text-blue-600 hover:text-blue-700 transition-colors"
              >
                Clear filters
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
