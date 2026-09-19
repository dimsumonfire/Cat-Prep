import React, { useState } from 'react';
import { Search, CheckCircle2, Circle, AlertCircle, Bookmark, BookmarkCheck, Star, HelpCircle, ExternalLink } from 'lucide-react';
import { Formula } from '../types';

interface FormulaTabProps {
  formulas: Formula[];
  onToggleFormulaRevised: (id: string) => void;
}

export default function FormulaTab({ formulas, onToggleFormulaRevised }: FormulaTabProps) {
  const [selectedCategory, setSelectedCategory] = useState<'All' | Formula['category']>('All');
  const [searchQuery, setSearchQuery] = useState('');

  const categories: ('All' | Formula['category'])[] = [
    'All', 'Arithmetic', 'Algebra', 'Geometry', 'Number system', 'Modern math'
  ];

  const filteredFormulas = formulas.filter(f => {
    const matchesCategory = selectedCategory === 'All' || f.category === selectedCategory;
    const matchesSearch = f.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          f.formulaText.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          f.explanation.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const countRevised = formulas.filter(f => f.revised).length;
  const countRemaining = formulas.length - countRevised;

  return (
    <div className="space-y-6">
      
      {/* vault explanation header */}
      <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-2xs">
        <h2 className="text-xl font-extrabold text-slate-950 mb-1.5">QA Formula Vault</h2>
        <p className="text-sm text-slate-500 leading-normal">
          Quantitative Aptitude represents 22 questions on the CAT exam. This searchable formula vault aggregates critical mathematical theorems. Tick formulas to mark them as revised during your practice rounds.
        </p>

        {/* Mini stats counters */}
        <div className="flex bg-slate-50 p-3 rounded-lg border border-slate-200 mt-4 max-w-sm justify-between text-center divide-x divide-slate-200">
          <div className="flex-1">
            <span className="text-5xs font-mono font-bold text-emerald-800 uppercase block">Revised theorems</span>
            <span className="text-md font-extrabold text-slate-950 mt-1 block">{countRevised}</span>
          </div>
          <div className="flex-1">
            <span className="text-5xs font-mono font-bold text-slate-400 uppercase block">Yet to Revise</span>
            <span className="text-md font-extrabold text-slate-950 mt-1 block">{countRemaining}</span>
          </div>
          <div className="flex-1">
            <span className="text-5xs font-mono font-bold text-slate-400 uppercase block">Conversion Rate</span>
            <span className="text-md font-extrabold text-indigo-600 mt-1 block">
              {formulas.length > 0 ? Math.round((countRevised / formulas.length) * 100) : 0}%
            </span>
          </div>
        </div>
      </div>

      {/* category selectors & search */}
      <div className="flex flex-col sm:flex-row gap-3 items-center justify-between">
        
        {/* scroll selectors list */}
        <div className="flex bg-slate-100 rounded-lg p-0.5 overflow-x-auto gap-0.5 w-full sm:w-auto">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`
                text-2xs font-bold py-1.5 px-3 rounded-md whitespace-nowrap transition-all duration-150
                ${selectedCategory === cat ? 'bg-white text-slate-950 shadow-2xs' : 'text-slate-500 hover:text-slate-950'}
              `}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Search tool */}
        <div className="relative w-full sm:w-64 shrink-0">
          <Search className="absolute left-3 top-2.5 w-4 h-4 text-slate-400" />
          <input
            type="text"
            className="w-full text-slate-800 bg-white border border-slate-200 pl-9 pr-4 py-2 text-xs rounded-lg focus:outline-hidden"
            placeholder="Search theorem or rule..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      {/* formulas lists */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredFormulas.length > 0 ? (
          filteredFormulas.map((f) => {
            return (
              <div 
                key={f.id} 
                id={`formula-card-${f.id}`}
                className={`
                  bg-white rounded-xl border p-4 shadow-3xs flex flex-col justify-between transition-all duration-150
                  ${f.revised ? 'border-indigo-200 bg-indigo-50/10' : 'border-slate-200 hover:border-slate-300'}
                `}
              >
                <div>
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <div>
                      {/* Section label */}
                      <span className="text-5xs font-mono font-bold text-slate-400 bg-slate-100 py-0.5 px-1.5 rounded uppercase block w-max mb-1.5">
                        {f.category}
                      </span>
                      <h4 className="text-xs font-bold text-slate-950 leading-tight">
                        {f.title}
                      </h4>
                    </div>

                    {/* Bookmark revised button toggle */}
                    <button
                      onClick={() => onToggleFormulaRevised(f.id)}
                      className="p-1 hover:bg-slate-50 text-slate-400 hover:text-indigo-600 transition-colors"
                      title={f.revised ? "Mark as unrevised" : "Mark as revised"}
                    >
                      {f.revised ? (
                        <BookmarkCheck className="w-5 h-5 text-indigo-650 fill-indigo-100" />
                      ) : (
                        <Bookmark className="w-5 h-5 text-slate-300 hover:text-indigo-600" />
                      )}
                    </button>
                  </div>

                  {/* Math text inside code-like block */}
                  <div className="my-3 p-3 bg-indigo-50/80 text-indigo-900 rounded-lg font-mono text-xs whitespace-pre-wrap leading-relaxed select-text border border-indigo-100/50 selection:bg-indigo-600 selection:text-white font-bold">
                    {f.formulaText}
                  </div>

                  <p className="text-2xs text-slate-500 leading-normal mb-4 font-sans italic">
                    {f.explanation}
                  </p>
                </div>

                {/* mini revised marker label signature */}
                <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-4xs font-mono text-slate-400 leading-none">
                  <span>ID: {f.id}</span>
                  {f.revised && f.lastRevisedDate && (
                    <span className="text-indigo-650 font-bold block">Revised {f.lastRevisedDate}</span>
                  )}
                </div>
              </div>
            );
          })
        ) : (
          <div className="p-12 text-center text-xs text-slate-400 bg-white border border-slate-200 rounded-xl font-mono col-span-2">
            No mathematical theorems matched your active parameters.
          </div>
        )}
      </div>

    </div>
  );
}
