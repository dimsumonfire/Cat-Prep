import React, { useState } from 'react';
import { 
  Search, 
  ChevronDown, 
  ChevronUp, 
  CheckSquare, 
  Square, 
  Calendar, 
  CheckCircle, 
  MessageSquare,
  SlidersHorizontal,
  Sparkles,
  Edit2,
  Check
} from 'lucide-react';
import { DailySyllabusItem, SectionType } from '../types';

interface SyllabusTabProps {
  syllabusItems: DailySyllabusItem[];
  onUpdateSyllabusItem: (updatedItem: DailySyllabusItem) => void;
}

export default function SyllabusTab({ syllabusItems, onUpdateSyllabusItem }: SyllabusTabProps) {
  const [activeSectionFilter, setActiveSectionFilter] = useState<'ALL' | SectionType | 'General'>('ALL');
  const [completionFilter, setCompletionFilter] = useState<'ALL' | 'COMPLETED' | 'PENDING'>('ALL');
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedDayId, setExpandedDayId] = useState<string | null>(null);

  // Task inline editing state
  const [editingItemId, setEditingItemId] = useState<string | null>(null);
  const [editTaskText, setEditTaskText] = useState('');
  const [editNotesText, setEditNotesText] = useState('');

  const handleToggleCheck = (item: DailySyllabusItem) => {
    onUpdateSyllabusItem({
      ...item,
      completed: !item.completed,
      lastRevised: !item.completed ? new Date().toISOString().split('T')[0] : item.lastRevised
    });
  };

  const handleStartEdit = (item: DailySyllabusItem) => {
    setEditingItemId(item.id);
    setEditTaskText(item.task);
    setEditNotesText(item.notes);
  };

  const handleSaveEdit = (item: DailySyllabusItem) => {
    onUpdateSyllabusItem({
      ...item,
      task: editTaskText,
      notes: editNotesText
    });
    setEditingItemId(null);
  };

  // Section Color configuration
  const getSectionColor = (section: string) => {
    switch (section) {
      case 'VARC':
        return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'DILR':
        return 'bg-indigo-100 text-indigo-800 border-indigo-200';
      case 'QA':
        return 'bg-violet-100 text-violet-800 border-violet-200';
      case 'General':
      default:
        return 'bg-slate-100 text-slate-700 border-slate-200';
    }
  };

  // Aggregated Checklist Metrics
  const totalDaysCount = syllabusItems.length;
  const completedDaysCount = syllabusItems.filter(item => item.completed).length;
  const progressRatio = totalDaysCount > 0 ? Math.round((completedDaysCount / totalDaysCount) * 100) : 0;

  const countVarcTotal = syllabusItems.filter(item => item.section === 'VARC').length;
  const countVarcDone = syllabusItems.filter(item => item.section === 'VARC' && item.completed).length;

  const countDilrTotal = syllabusItems.filter(item => item.section === 'DILR').length;
  const countDilrDone = syllabusItems.filter(item => item.section === 'DILR' && item.completed).length;

  const countQaTotal = syllabusItems.filter(item => item.section === 'QA').length;
  const countQaDone = syllabusItems.filter(item => item.section === 'QA' && item.completed).length;

  // Filter computation
  const filteredItems = syllabusItems.filter(item => {
    const matchesSection = activeSectionFilter === 'ALL' || item.section === activeSectionFilter;
    
    let matchesCompletion = true;
    if (completionFilter === 'COMPLETED') matchesCompletion = item.completed;
    if (completionFilter === 'PENDING') matchesCompletion = !item.completed;

    const matchesSearch = item.topic.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          item.task.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          item.notes.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesSection && matchesCompletion && matchesSearch;
  });

  return (
    <div className="space-y-6">
      
      {/* Syllabus Checklist Progress Header */}
      <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-2xs">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-5">
          <div>
            <div className="flex items-center space-x-2 text-indigo-600 font-mono text-3xs font-bold uppercase mb-1">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Day-By-Day Preparation checklist syllabus</span>
            </div>
            <h2 className="text-xl font-extrabold text-slate-950 tracking-tight">CAT Daily Syllabus Tracker</h2>
            <p className="text-xs text-slate-500 max-w-2xl mt-1 leading-relaxed">
              Consolidated 60-day structured syllabus path for 2026 MBA aspirants. Check off one task daily to cover critical VARC, DILR, and Quant subtopics sequentially with zero overwhelm.
            </p>
          </div>

          {/* Core Percent Circle / Panel */}
          <div className="bg-slate-50 border border-slate-100 rounded-lg p-3 px-4 flex items-center space-x-3 shrink-0">
            <div className="w-10 h-10 rounded-full bg-indigo-50 border border-indigo-100 flex items-center justify-center font-bold text-indigo-700 text-xs shadow-3xs">
              {progressRatio}%
            </div>
            <div>
              <div className="text-2xs font-bold text-slate-800">Syllabus Completion</div>
              <div className="text-3xs text-slate-400 font-mono mt-0.5">{completedDaysCount} of {totalDaysCount} Days Checked</div>
            </div>
          </div>
        </div>

        {/* Unified progress track bar */}
        <div className="w-full bg-slate-100 h-2.5 rounded-full overflow-hidden mb-5">
          <div 
            className="bg-indigo-600 h-full rounded-full transition-all duration-300 shadow-3xs"
            style={{ width: `${progressRatio}%` }}
          />
        </div>

        {/* Section Score grids */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
          <div className="p-3 bg-slate-50/70 border border-slate-100 rounded-lg">
            <div className="flex justify-between items-center mb-1">
              <span className="text-3xs font-bold text-blue-700 uppercase tracking-wider">VARC Coverage</span>
              <span className="text-3xs font-mono font-bold text-slate-500">{countVarcDone} / {countVarcTotal} Days</span>
            </div>
            <div className="w-full bg-slate-200 h-1 rounded-full"><div className="bg-blue-500 h-full rounded-full" style={{ width: `${countVarcTotal > 0 ? (countVarcDone/countVarcTotal)*100 : 0}%` }} /></div>
          </div>

          <div className="p-3 bg-slate-50/70 border border-slate-100 rounded-lg">
            <div className="flex justify-between items-center mb-1">
              <span className="text-3xs font-bold text-indigo-700 uppercase tracking-wider">DILR Coverage</span>
              <span className="text-3xs font-mono font-bold text-slate-500">{countDilrDone} / {countDilrTotal} Days</span>
            </div>
            <div className="w-full bg-slate-200 h-1 rounded-full"><div className="bg-indigo-600 h-full rounded-full" style={{ width: `${countDilrTotal > 0 ? (countDilrDone/countDilrTotal)*100 : 0}%` }} /></div>
          </div>

          <div className="p-3 bg-slate-50/70 border border-slate-100 rounded-lg">
            <div className="flex justify-between items-center mb-1">
              <span className="text-3xs font-bold text-violet-700 uppercase tracking-wider">Quant Coverage</span>
              <span className="text-3xs font-mono font-bold text-slate-500">{countQaDone} / {countQaTotal} Days</span>
            </div>
            <div className="w-full bg-slate-200 h-1 rounded-full"><div className="bg-violet-600 h-full rounded-full" style={{ width: `${countQaTotal > 0 ? (countQaDone/countQaTotal)*100 : 0}%` }} /></div>
          </div>
        </div>
      </div>

      {/* Control Actions Row: Search, Sections segment, Completion filter */}
      <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-3xs flex flex-col gap-4">
        
        {/* Core Sections segment controllers */}
        <div className="flex flex-col lg:flex-row gap-3 items-center justify-between">
          <div className="flex items-center space-x-2 self-start">
            <SlidersHorizontal className="w-3.5 h-3.5 text-slate-400" />
            <span className="text-2xs font-extrabold text-slate-400 uppercase tracking-wider">Core Filters</span>
          </div>

          <div className="flex bg-slate-100 rounded-lg p-0.5 w-full lg:w-auto overflow-x-auto gap-0.5">
            {(['ALL', 'VARC', 'DILR', 'QA', 'General'] as const).map(sec => (
              <button
                key={sec}
                onClick={() => setActiveSectionFilter(sec)}
                className={`
                  flex-1 lg:flex-none text-2xs font-bold py-1.5 px-4 rounded-md whitespace-nowrap transition-all duration-150
                  ${activeSectionFilter === sec ? 'bg-white text-slate-900 shadow-2xs font-extrabold' : 'text-slate-500 hover:text-slate-800'}
                `}
              >
                {sec} Checklist
              </button>
            ))}
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 items-center justify-between border-t border-slate-100 pt-3">
          
          {/* Status completion select segment */}
          <div className="flex bg-slate-50 border border-slate-200 rounded-lg p-0.5 w-full sm:w-auto self-start gap-0.5">
            {(['ALL', 'COMPLETED', 'PENDING'] as const).map(f => (
              <button
                key={f}
                type="button"
                onClick={() => setCompletionFilter(f)}
                className={`
                  flex-1 sm:flex-none py-1 px-3 rounded text-3xs font-bold leading-normal uppercase transition-all duration-150
                  ${completionFilter === f ? 'bg-slate-900 text-white shadow-2xs' : 'text-slate-500 hover:text-slate-800'}
                `}
              >
                {f}
              </button>
            ))}
          </div>

          {/* Search dynamic match query bar */}
          <div className="relative w-full sm:w-72 mt-1 sm:mt-0">
            <Search className="absolute left-3 top-2.5 w-3.5 h-3.5 text-slate-400" />
            <input
              type="text"
              className="w-full text-slate-800 bg-slate-50 border border-slate-200 pl-9 pr-4 py-2 text-xs rounded-lg focus:outline-hidden focus:border-slate-400 transition-all font-sans"
              placeholder="Search topic keywords or task outlines..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

        </div>
      </div>

      {/* Checklist items dynamic stack */}
      <div className="space-y-3">
        {filteredItems.length > 0 ? (
          filteredItems.map((item) => {
            const isExpanded = expandedDayId === item.id;
            const isEditing = editingItemId === item.id;

            return (
              <div
                key={item.id}
                id={`syllabus-day-${item.day}`}
                className={`
                  border rounded-xl bg-white transition-all duration-150 overflow-hidden
                  ${item.completed ? 'border-emerald-100 ring-1 ring-emerald-50 bg-emerald-50/5' : 'border-slate-200 hover:border-slate-300'}
                  ${isExpanded ? 'ring-1 ring-indigo-50 border-indigo-200 shadow-3xs' : ''}
                `}
              >
                {/* Visual grid checklist row */}
                <div 
                  className="p-4 flex items-start gap-3 cursor-pointer"
                  onClick={() => setExpandedDayId(isExpanded ? null : item.id)}
                >
                  
                  {/* Toggler Checkbox Column */}
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleToggleCheck(item);
                    }}
                    className={`p-1 rounded transition-colors text-indigo-600 focus:outline-hidden hover:bg-slate-100 ${item.completed ? 'text-emerald-600' : 'text-slate-400'}`}
                    title={item.completed ? "Mark Day Incomplete" : "Mark Day Complete"}
                  >
                    {item.completed ? (
                      <CheckSquare className="w-5.5 h-5.5 fill-emerald-50 text-emerald-600 transition-transform scale-110" />
                    ) : (
                      <Square className="w-5.5 h-5.5 text-slate-300 hover:text-slate-400" />
                    )}
                  </button>

                  {/* Day meta details and Task description */}
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-2 mb-1.5">
                      <span className="text-2xs font-extrabold text-slate-800 font-mono tracking-tight bg-slate-100 py-0.5 px-2 rounded-md">
                        DAY {item.day}
                      </span>
                      <span className={`text-[10px] font-bold py-0.5 px-2 rounded border uppercase tracking-wider shrink-0 font-sans ${getSectionColor(item.section)}`}>
                        {item.section}
                      </span>
                      <span className="text-3xs font-mono font-bold text-slate-400 truncate max-w-[150px] sm:max-w-none capitalize">
                        {item.topic}
                      </span>

                      {item.completed && (
                        <span className="text-3xs font-bold text-emerald-700 bg-emerald-100 border border-emerald-200 px-1.5 rounded-md inline-flex items-center gap-0.5 uppercase tracking-wide">
                          <CheckCircle className="w-2.5 h-2.5 font-bold" /> Completed
                        </span>
                      )}
                    </div>

                    <h4 className={`text-xs font-semibold text-slate-800 leading-relaxed ${item.completed ? 'line-through text-slate-400' : ''}`}>
                      {item.task}
                    </h4>

                    {/* Quick review notes summary marker */}
                    {!isExpanded && item.notes && (
                      <span className="text-[10px] text-slate-400 font-sans italic mt-1.5 line-clamp-1 block pl-1 flex items-center gap-1">
                        <MessageSquare className="w-3 h-3 text-slate-300" /> "{item.notes}"
                      </span>
                    )}
                  </div>

                  {/* Accordion Arrow toggle indicator */}
                  <div className="self-center p-1 text-slate-400 hover:text-slate-700">
                    {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </div>

                </div>

                {/* Expanded Notes & Task Editor Drawer */}
                {isExpanded && (
                  <div className="border-t border-slate-100 bg-slate-50/50 p-4 space-y-3.5">
                    {isEditing ? (
                      <div className="space-y-3">
                        <div>
                          <label className="text-4xs font-mono font-extrabold text-slate-400 uppercase block mb-1">Customize Tasks on Day {item.day}</label>
                          <input
                            type="text"
                            className="w-full text-xs p-2 bg-white border border-slate-200 rounded-lg text-slate-800 focus:outline-hidden"
                            value={editTaskText}
                            onChange={(e) => setEditTaskText(e.target.value)}
                            placeholder="Add your daily checklist goals..."
                          />
                        </div>

                        <div>
                          <label className="text-4xs font-mono font-extrabold text-slate-400 uppercase block mb-1">Daily Study Review & Notes</label>
                          <textarea
                            className="w-full text-xs p-2 bg-white border border-slate-200 rounded-lg text-slate-800 focus:outline-hidden"
                            rows={3}
                            value={editNotesText}
                            onChange={(e) => setEditNotesText(e.target.value)}
                            placeholder="Formulas studied, key accuracy scores, revision bookmarks..."
                          />
                        </div>

                        <div className="flex justify-end gap-2 pt-1">
                          <button
                            onClick={() => setEditingItemId(null)}
                            className="py-1 px-3 text-2xs font-bold text-slate-500 hover:text-slate-700 transition-colors"
                          >
                            Cancel
                          </button>
                          <button
                            onClick={() => handleSaveEdit(item)}
                            className="py-1 px-3 bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-2xs rounded-md transition-colors inline-flex items-center gap-1 bg-indigo-600"
                          >
                            <Check className="w-3 h-3" />
                            <span>Save Day Details</span>
                          </button>
                        </div>
                      </div>
                    ) : (
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        
                        {/* Day stats & action targets */}
                        <div className="col-span-1 p-3.5 bg-white border border-slate-100 rounded-lg flex flex-col justify-between">
                          <div>
                            <span className="text-4xs tracking-wider uppercase font-mono font-bold text-slate-400 block mb-1">Checklist Actions</span>
                            <div className="text-xs font-semibold text-slate-800 leading-tight">Day {item.day} Tracking</div>
                            <div className="text-3xs text-indigo-600 mt-2 font-mono flex items-center gap-1 leading-none">
                              <Calendar className="w-3 h-3" />
                              <span>Stamp: {item.lastRevised || 'No active timestamp'}</span>
                            </div>
                          </div>

                          <div className="flex gap-1.5 mt-4">
                            <button
                              onClick={() => handleStartEdit(item)}
                              className="py-1.5 px-3 bg-slate-100 hover:bg-slate-200 border border-slate-200 rounded text-3xs font-extrabold text-slate-700 inline-flex items-center gap-1 transition-colors w-full justify-center"
                            >
                              <Edit2 className="w-2.5 h-2.5" />
                              <span>Customize Tasks</span>
                            </button>
                          </div>
                        </div>

                        {/* Custom study comments / journal */}
                        <div className="col-span-2 p-3.5 bg-white border border-slate-100 rounded-lg flex flex-col justify-between">
                          <div>
                            <span className="text-4xs tracking-wider uppercase font-mono font-bold text-slate-400 block mb-1.5">Revision Notes & Insights</span>
                            {item.notes ? (
                              <p className="text-xs text-slate-700 leading-relaxed italic border-l-2 border-indigo-400 pl-2">
                                "{item.notes}"
                              </p>
                            ) : (
                              <p className="text-xs text-slate-300 italic">
                                No study notes entered yet. Click "Customize Tasks" to log equations, traps avoided, or worksheets completed today.
                              </p>
                            )}
                          </div>

                          <div className="text-4xs font-mono text-slate-400 mt-3 flex items-center justify-between select-none">
                            <span>Topic category: {item.topic}</span>
                            <span>Target Year: 2026 Admissions</span>
                          </div>
                        </div>

                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })
        ) : (
          <div className="p-12 text-center text-xs text-slate-400 bg-white border border-slate-200 rounded-xl font-mono leading-relaxed">
            No daily checklists matched your active query. Try selecting different section tags or type a distinct keyword.
          </div>
        )}
      </div>

    </div>
  );
}
