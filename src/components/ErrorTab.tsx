import React, { useState } from 'react';
import { Plus, Trash2, CheckSquare, Target, BookOpen, AlertTriangle, Eye, EyeOff, Edit, CheckSquare2, Square } from 'lucide-react';
import { ErrorNotebookEntry, SectionType, ErrorType } from '../types';

interface ErrorTabProps {
  errors: ErrorNotebookEntry[];
  onAddError: (entry: ErrorNotebookEntry) => void;
  onUpdateError: (entry: ErrorNotebookEntry) => void;
  onDeleteError: (id: string) => void;
}

export default function ErrorTab({ errors, onAddError, onUpdateError, onDeleteError }: ErrorTabProps) {
  const [isAdding, setIsAdding] = useState(false);
  const [activeFilterSection, setActiveFilterSection] = useState<'All' | SectionType>('All');
  const [activeFilterTrigger, setActiveFilterTrigger] = useState<'All' | ErrorType>('All');
  
  // Show/Hide answers state
  const [revealedIds, setRevealedIds] = useState<Set<string>>(new Set());

  // Form states
  const [section, setSection] = useState<SectionType>('QA');
  const [topic, setTopic] = useState('');
  const [source, setSource] = useState('');
  const [errorType, setErrorType] = useState<ErrorType>('calculation error');
  const [whatWentWrong, setWhatWentWrong] = useState('');
  const [correctApproach, setCorrectApproach] = useState('');
  const [redoDate, setRedoDate] = useState('');
  const [status, setStatus] = useState<ErrorNotebookEntry['status']>('pending');

  const [formError, setFormError] = useState<string | null>(null);

  const toggleRevealApproach = (id: string) => {
    const next = new Set(revealedIds);
    if (next.has(id)) {
      next.delete(id);
    } else {
      next.add(id);
    }
    setRevealedIds(next);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormError(null);

    if (!topic || !correctApproach) {
      setFormError('Please specify the topic and write down the correct solution approach.');
      return;
    }

    const newEntry: ErrorNotebookEntry = {
      id: 'err-' + Date.now(),
      section,
      topic,
      source: source || 'General study',
      errorType,
      whatWentWrong,
      correctApproach,
      redoDate,
      status
    };

    onAddError(newEntry);
    setIsAdding(false);

    // Reset Form
    setTopic('');
    setSource('');
    setWhatWentWrong('');
    setCorrectApproach('');
    setRedoDate('');
    setStatus('pending');
  };

  const handleUpdateStatus = (entry: ErrorNotebookEntry, nextStatus: ErrorNotebookEntry['status']) => {
    onUpdateError({
      ...entry,
      status: nextStatus
    });
  };

  const errorTriggers: ErrorType[] = [
    'concept gap', 'calculation error', 'misread', 'poor selection', 'time pressure'
  ];

  const filteredErrors = errors.filter(err => {
    const matchesSection = activeFilterSection === 'All' || err.section === activeFilterSection;
    const matchesTrigger = activeFilterTrigger === 'All' || err.errorType === activeFilterTrigger;
    return matchesSection && matchesTrigger;
  });

  const getTriggerColor = (type: ErrorType) => {
    switch (type) {
      case 'concept gap': return 'bg-cyan-50 border-cyan-200 text-cyan-800';
      case 'calculation error': return 'bg-rose-50 border-rose-200 text-rose-800';
      case 'misread': return 'bg-indigo-50 border-indigo-150 text-indigo-750';
      case 'poor selection': return 'bg-purple-50 border-purple-200 text-purple-800';
      case 'time pressure': return 'bg-slate-100 border-slate-300 text-slate-700';
    }
  };

  const getStatusStyle = (s: ErrorNotebookEntry['status']) => {
    switch (s) {
      case 'mastered': return 'bg-emerald-100 border-emerald-300 text-emerald-850 font-bold';
      case 'redone': return 'bg-indigo-50 border-indigo-150 text-indigo-800';
      case 'pending': 
      default:
        return 'bg-rose-100 border-rose-200 text-rose-800';
    }
  };

  return (
    <div className="space-y-6">
      
      {/* mistakes introduction banner */}
      <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-2xs">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h2 className="text-xl font-extrabold text-slate-950 mb-1.5">Aspirant Mistakes Log (Error Notebook)</h2>
            <p className="text-sm text-slate-500 leading-normal max-w-xl">
              Standard coaching advice for CAT indicates that analyzing mistakes is 5x more effective than solving new sets. Use this notebook to record, analyze, and systematically redo mistakes before the test day.
            </p>
          </div>
          <button
            onClick={() => setIsAdding(!isAdding)}
            className="py-2 px-4 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-lg text-xs flex items-center justify-center gap-1.5 transition-colors shrink-0 shadow-3xs"
            id="error-notebook-add-btn"
          >
            <Plus className="w-4 h-4" />
            <span>{isAdding ? 'Close Panel' : 'Save New Mistake'}</span>
          </button>
        </div>
      </div>

      {/* Add mistake panel form */}
      {isAdding && (
        <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-xs">
          <h3 className="text-xs font-bold text-slate-950 uppercase mb-4 font-sans leading-none">
            Record Incorrect Problem
          </h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            {formError && (
              <div className="p-3 bg-rose-50 border border-rose-100 text-rose-800 text-xs rounded-lg font-bold">
                {formError}
              </div>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 text-slate-700">
              
              {/* Section dropdown */}
              <div>
                <label className="text-4xs font-mono font-extrabold text-slate-400 uppercase block mb-1">Target Section</label>
                <select
                  className="w-full text-xs text-slate-800 bg-white border border-slate-200 rounded-lg p-2.5 focus:outline-hidden"
                  value={section}
                  onChange={(e) => setSection(e.target.value as any)}
                >
                  <option value="VARC">VARC (Reading Focus)</option>
                  <option value="DILR">DILR (Structured logic)</option>
                  <option value="QA">QA (Math/Aptitude)</option>
                </select>
              </div>

              {/* Topic name text */}
              <div>
                <label className="text-4xs font-mono font-extrabold text-slate-400 uppercase block mb-1">Topic Details</label>
                <input
                  type="text"
                  className="w-full text-xs text-slate-800 bg-white border border-slate-200 rounded-lg p-2.5 focus:outline-hidden"
                  placeholder="e.g. Games Knocouts or Geometrical Area"
                  value={topic}
                  onChange={(e) => setTopic(e.target.value)}
                  required
                />
              </div>

              {/* Question Source */}
              <div>
                <label className="text-4xs font-mono font-extrabold text-slate-400 uppercase block mb-1">Question Source</label>
                <input
                  type="text"
                  className="w-full text-xs text-slate-800 bg-white border border-slate-200 rounded-lg p-2.5 focus:outline-hidden"
                  placeholder="e.g. Prime Mock 3 Q14 or PYP 24 S2"
                  value={source}
                  onChange={(e) => setSource(e.target.value)}
                />
              </div>

              {/* Error triggers classifications */}
              <div>
                <label className="text-4xs font-mono font-extrabold text-slate-400 uppercase block mb-1">Error Trigger Type</label>
                <select
                  className="w-full text-xs text-slate-800 bg-white border border-slate-200 rounded-lg p-2.5 focus:outline-hidden"
                  value={errorType}
                  onChange={(e) => setErrorType(e.target.value as any)}
                >
                  {errorTriggers.map(t => (
                    <option key={t} value={t}>{t}</option>
                  ))}
                </select>
              </div>

              {/* Redo targeting date */}
              <div>
                <label className="text-4xs font-mono font-extrabold text-slate-400 uppercase block mb-1">Planned Redo Date</label>
                <input
                  type="date"
                  className="w-full text-xs text-slate-800 bg-white border border-slate-200 rounded-lg p-2.5 focus:outline-hidden"
                  value={redoDate}
                  onChange={(e) => setRedoDate(e.target.value)}
                />
              </div>

              {/* Status */}
              <div>
                <label className="text-4xs font-mono font-extrabold text-slate-400 uppercase block mb-1">Aspirant Status</label>
                <select
                  className="w-full text-xs text-slate-800 bg-white border border-slate-200 rounded-lg p-2.5 focus:outline-hidden"
                  value={status}
                  onChange={(e) => setStatus(e.target.value as any)}
                >
                  <option value="pending">Pending review</option>
                  <option value="redone">Redone but unsure</option>
                  <option value="mastered">Mastered & Conceptually sound</option>
                </select>
              </div>

            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* What went wrong */}
              <div>
                <label className="text-4xs font-mono font-extrabold text-slate-400 uppercase block mb-1">What Went Wrong?</label>
                <textarea
                  className="w-full text-xs text-slate-800 bg-white border border-slate-200 rounded-lg p-2.5 focus:outline-hidden focus:border-slate-300 font-sans"
                  rows={3}
                  placeholder="e.g. Skipped the critical condition in paragraph 2, misread the variable..."
                  value={whatWentWrong}
                  onChange={(e) => setWhatWentWrong(e.target.value)}
                />
              </div>

              {/* Correct approach */}
              <div>
                <label className="text-4xs font-mono font-extrabold text-slate-400 uppercase block mb-1">Correct Approach details & Equations</label>
                <textarea
                  className="w-full text-xs text-slate-800 bg-white border border-slate-200 rounded-lg p-2.5 focus:outline-hidden focus:border-slate-300 font-mono"
                  rows={3}
                  placeholder="List the key formula missed, equation variables, correct set arrangement table, or elimination coordinates that were overlooked..."
                  value={correctApproach}
                  onChange={(e) => setCorrectApproach(e.target.value)}
                  required
                />
              </div>
            </div>

            <div className="flex justify-end gap-2.5 pt-1">
              <button
                type="button"
                onClick={() => setIsAdding(false)}
                className="py-2 px-4 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="py-2 px-5 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-lg text-xs shadow-3xs"
                id="error-notebook-form-submit-btn"
              >
                Log Entry
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Control filters panel */}
      <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-3.5">
        <span className="text-4xs font-mono font-bold text-slate-400 uppercase tracking-widest block leading-none">Filters Toolkit</span>
        
        <div className="flex flex-col sm:flex-row gap-3 items-center justify-between">
          {/* Section filter */}
          <div className="flex bg-white rounded-lg p-0.5 border border-slate-200 w-full sm:w-auto">
            {(['All', 'VARC', 'DILR', 'QA'] as const).map(sec => (
              <button
                key={sec}
                onClick={() => setActiveFilterSection(sec)}
                className={`
                  text-2xs font-extrabold py-1.5 px-3.5 rounded-md whitespace-nowrap transition-all duration-150 flex-1 sm:flex-none text-center
                  ${activeFilterSection === sec ? 'bg-indigo-600 text-white shadow-2xs' : 'text-slate-500 hover:text-slate-950'}
                `}
              >
                {sec}
              </button>
            ))}
          </div>

          {/* Trigger filter block */}
          <div className="flex bg-white rounded-lg p-0.5 border border-slate-200 overflow-x-auto w-full sm:w-auto gap-0.5">
            <button
              onClick={() => setActiveFilterTrigger('All')}
              className={`
                text-2xs font-bold py-1.5 px-3 rounded-md whitespace-nowrap transition-all duration-150 text-center
                ${activeFilterTrigger === 'All' ? 'bg-indigo-600 text-white shadow-2xs' : 'text-slate-500 hover:text-slate-950'}
              `}
            >
              All Error Types
            </button>
            {errorTriggers.map(trig => (
              <button
                key={trig}
                onClick={() => setActiveFilterTrigger(trig)}
                className={`
                  text-2xs font-bold py-1.5 px-3 rounded-md whitespace-nowrap transition-all duration-150 text-center
                  ${activeFilterTrigger === trig ? 'bg-indigo-600 text-white shadow-2xs' : 'text-slate-500 hover:text-slate-950'}
                `}
              >
                {trig}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Error Notebook elements */}
      <div className="space-y-4">
        {filteredErrors.length > 0 ? (
          filteredErrors.map((err) => {
            const isRevealed = revealedIds.has(err.id);
            const triggerColor = getTriggerColor(err.errorType);
            const statusStyle = getStatusStyle(err.status);

            return (
              <div 
                key={err.id} 
                id={`error-card-${err.id}`}
                className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-2xs"
              >
                {/* upper panel representing context triggers and status flags */}
                <div className="p-4 bg-slate-50/70 border-b border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div className="flex items-start gap-2.5">
                    <span className="text-3xs font-mono font-bold bg-slate-200 py-1 px-1.5 rounded text-slate-700 uppercase shrink-0 mt-0.5 select-none text-center">
                      {err.section}
                    </span>
                    <div>
                      <h4 className="text-xs font-bold text-slate-900 leading-tight">
                        {err.topic}
                      </h4>
                      <span className="text-4xs font-mono font-bold text-slate-400 block mt-0.5 select-none">
                        Source Reference: {err.source}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between sm:justify-end gap-3 shrink-0">
                    {/* Error classification trigger badge */}
                    <span className={`text-4xs font-mono font-bold py-0.5 px-2 rounded-full border ${triggerColor} select-none`}>
                      {err.errorType}
                    </span>

                    {/* Status badge selectable */}
                    <select
                      className={`text-4xs font-mono px-2 py-0.5 border rounded-full focus:outline-hidden ${statusStyle}`}
                      value={err.status}
                      onChange={(e) => handleUpdateStatus(err, e.target.value as any)}
                    >
                      <option value="pending">● Pending Redo</option>
                      <option value="redone">● Redone</option>
                      <option value="mastered">✓ Mastered</option>
                    </select>

                    <button 
                      onClick={() => onDeleteError(err.id)}
                      className="p-1 hover:bg-slate-100 text-slate-400 hover:text-rose-600 rounded transition-colors"
                      title="Delete Entry"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

                {/* notes info blocks */}
                <div className="p-4 space-y-3.5 text-slate-750">
                  {err.whatWentWrong && (
                    <div className="mb-3">
                      <span className="text-3xs font-mono text-rose-500 font-bold uppercase leading-none block mb-1">What Went Wrong:</span>
                      <p className="text-xs text-slate-700 leading-relaxed font-medium bg-rose-50/50 p-2 rounded-lg border border-rose-100">{err.whatWentWrong}</p>
                    </div>
                  )}

                  <div className="flex items-center justify-between">
                    <span className="text-3xs font-mono text-emerald-600 font-bold uppercase leading-none">Correct formula or elimination rules:</span>
                    <button
                      onClick={() => toggleRevealApproach(err.id)}
                      className="text-2xs font-mono font-bold text-slate-600 hover:text-indigo-600 transition-colors inline-flex items-center gap-1"
                    >
                      {isRevealed ? (
                        <>
                          <EyeOff className="w-3.5 h-3.5" />
                          <span>Hide Formula details</span>
                        </>
                      ) : (
                        <>
                          <Eye className="w-3.5 h-3.5" />
                          <span>Reveal solution method</span>
                        </>
                      )}
                    </button>
                  </div>

                  {isRevealed ? (
                    <div className="p-3.5 bg-indigo-50/85 text-indigo-900 rounded-lg font-mono text-xs whitespace-pre-wrap leading-relaxed select-text border border-indigo-100 font-bold">
                      {err.correctApproach}
                    </div>
                  ) : (
                    <div 
                      onClick={() => toggleRevealApproach(err.id)}
                      className="p-3 bg-slate-50 hover:bg-slate-100/85 border border-slate-200 border-dashed rounded-lg text-center text-xs text-slate-400 italic cursor-pointer py-5 transition-all select-none"
                    >
                      🗒 [Solution approach is hidden for self-evaluations. Click here to reveal standard steps]
                    </div>
                  )}

                  {err.redoDate && (
                    <div className="text-3xs font-mono bg-indigo-50 border border-indigo-100 text-indigo-800 py-1 px-2.5 rounded inline-block">
                      Reattempt date plan: <span className="font-bold">{err.redoDate}</span>
                    </div>
                  )}
                </div>
              </div>
            );
          })
        ) : (
          <div className="p-12 text-center text-xs text-slate-400 bg-white border border-slate-200 rounded-xl font-mono">
            No mistakes match your filter configurations.
          </div>
        )}
      </div>

    </div>
  );
}
