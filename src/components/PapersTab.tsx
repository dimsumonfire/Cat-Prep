import React, { useState } from 'react';
import { ExternalLink, Plus, Edit2, CheckCircle2, AlertCircle, Trash2, Calendar, FileText, Download, UploadCloud } from 'lucide-react';
import { PYPAttempt, SectionType } from '../types';

interface PapersTabProps {
  attempts: PYPAttempt[];
  onAddAttempt: (attempt: PYPAttempt) => void;
  onUpdateAttempt: (attempt: PYPAttempt) => void;
  onDeleteAttempt: (id: string) => void;
  setActiveTab: (tab: string) => void;
}

export default function PapersTab({ attempts, onAddAttempt, onUpdateAttempt, onDeleteAttempt, setActiveTab }: PapersTabProps) {
  const [view, setView] = useState<'vault' | 'attempts'>('vault');
  const [selectedYearFilter, setSelectedYearFilter] = useState<number | 'ALL'>('ALL');
  const [isAdding, setIsAdding] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);

  // Form State
  const [year, setYear] = useState(2025);
  const [slot, setSlot] = useState('Slot 1');
  const [section, setSection] = useState<SectionType | 'Full Test'>('Full Test');
  const [status, setStatus] = useState<PYPAttempt['status']>('Not started');
  const [score, setScore] = useState<number | ''>('');
  const [accuracy, setAccuracy] = useState<number | ''>('');
  const [notes, setNotes] = useState('');
  const [reattemptsDate, setReattemptsDate] = useState('');

  const resetForm = () => {
    setYear(2025);
    setSlot('Slot 1');
    setSection('Full Test');
    setStatus('Not started');
    setScore('');
    setAccuracy('');
    setNotes('');
    setReattemptsDate('');
    setEditingId(null);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newAttempt: PYPAttempt = {
      id: editingId || 'pyp-' + Date.now(),
      year: Number(year),
      slot,
      section,
      status,
      score: score !== '' ? Number(score) : undefined,
      accuracy: accuracy !== '' ? Number(accuracy) : undefined,
      notes,
      reattemptDate: reattemptsDate
    };

    if (editingId) {
      onUpdateAttempt(newAttempt);
    } else {
      onAddAttempt(newAttempt);
    }
    
    setIsAdding(false);
    resetForm();
  };

  const startEdit = (attempt: PYPAttempt) => {
    setEditingId(attempt.id);
    setYear(attempt.year);
    setSlot(attempt.slot);
    setSection(attempt.section);
    setStatus(attempt.status);
    setScore(attempt.score !== undefined ? attempt.score : '');
    setAccuracy(attempt.accuracy !== undefined ? attempt.accuracy : '');
    setNotes(attempt.notes || '');
    setReattemptsDate(attempt.reattemptDate || '');
    setIsAdding(true);
  };

  const years = [2025, 2024, 2023, 2022, 2021, 2020, 2002, 2000, 1995, 1993, 1991, 1990];

  const filteredAttempts = attempts.filter(att => {
    return selectedYearFilter === 'ALL' || att.year === selectedYearFilter;
  }).sort((a, b) => b.year - a.year || b.slot.localeCompare(a.slot));

  const vaultPapers = [
    { year: 2024, slots: ['Slot 1', 'Slot 2', 'Slot 3'], url: 'https://catking.in/cat-2024-question-paper/' },
    { year: 2023, slots: ['Slot 1', 'Slot 2', 'Slot 3'], url: 'https://online.2iim.com/CAT-question-paper/cat-2023-question-paper/' },
    { year: 2022, slots: ['Slot 1', 'Slot 2', 'Slot 3'], url: 'https://online.2iim.com/CAT-question-paper/cat-2022-question-paper/' },
    { year: 2021, slots: ['Slot 1', 'Slot 2', 'Slot 3'], url: 'https://online.2iim.com/CAT-question-paper/cat-2021-question-paper/' },
    { year: 2020, slots: ['Slot 1', 'Slot 2', 'Slot 3'], url: 'https://online.2iim.com/CAT-question-paper/cat-2020-question-paper/' },
  ];

  return (
    <div className="space-y-6">
      
      {/* Top Banner with resource links */}
      <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-sm">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h2 className="text-xl font-extrabold text-slate-950 mb-1.5">Previous Year Papers</h2>
            <p className="text-sm text-slate-500 leading-relaxed max-w-2xl">
              Access the official CAT past papers vault or log your own attempts. 
              Import PDFs of actual papers to practice them directly in your Mock Practice bank.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-2.5 shrink-0 bg-slate-100 p-1.5 rounded-lg border border-slate-200">
            <button 
              onClick={() => setView('vault')}
              className={`py-2 px-4 rounded-md text-sm font-bold transition-colors ${view === 'vault' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-600 hover:text-slate-900'}`}
            >
              Paper Vault
            </button>
            <button 
              onClick={() => setView('attempts')}
              className={`py-2 px-4 rounded-md text-sm font-bold transition-colors ${view === 'attempts' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-600 hover:text-slate-900'}`}
            >
              My Attempts Log
            </button>
          </div>
        </div>
      </div>

      {view === 'vault' ? (
        <div className="space-y-6">
           <div className="bg-indigo-50 border border-indigo-100 rounded-xl p-5 mb-6">
            <div className="flex items-start gap-4">
              <div className="bg-white p-2 rounded-full shadow-sm">
                <UploadCloud className="w-6 h-6 text-indigo-600" />
              </div>
              <div>
                <h3 className="font-bold text-indigo-900">How to use the Paper Vault?</h3>
                <p className="text-sm text-indigo-800/80 mt-1">Due to copyright restrictions, the actual exam text is not pre-loaded. Instead, download the official PDFs using the links below, and then import them via the <strong>Paper Importer</strong> to automatically extract the questions into your practice bank.</p>
                <button onClick={() => setActiveTab('paperImporter')} className="mt-3 px-4 py-2 bg-indigo-600 text-white text-xs font-bold rounded shadow-sm hover:bg-indigo-700 transition">Go to Paper Importer</button>
              </div>
            </div>
           </div>

           <div className="grid grid-cols-1 gap-4">
             {vaultPapers.map((paper) => (
                <div key={paper.year} className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition">
                  <div className="flex justify-between items-center bg-slate-50 p-4 border-b border-slate-200">
                    <h3 className="font-extrabold text-slate-800 text-lg flex items-center gap-2">
                       <FileText className="w-5 h-5 text-indigo-500" />
                       CAT {paper.year}
                    </h3>
                    <a href={paper.url} target="_blank" rel="noreferrer" className="flex items-center gap-1 text-sm font-bold text-blue-600 hover:text-blue-800 bg-blue-50 px-3 py-1.5 rounded-full transition-colors">
                      <Download className="w-4 h-4" /> Download Original PDFs
                    </a>
                  </div>
                  <div className="p-4 grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {paper.slots.map(slot => (
                      <div key={slot} className="border border-slate-100 bg-white rounded-lg p-3 shadow-sm hover:border-indigo-300 transition-colors cursor-default">
                        <div className="font-bold text-slate-800 mb-1">{slot}</div>
                        <p className="text-xs text-slate-500 mb-3">66 Questions • 120 Mins</p>
                        <button 
                          onClick={() => setActiveTab('paperImporter')}
                          className="w-full py-1.5 border border-indigo-200 text-indigo-600 font-bold text-xs rounded hover:bg-indigo-50 transition"
                        >
                          Import this Slot
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
             ))}
           </div>
        </div>
      ) : (
        <>
          {/* Control filters & action button */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
            {/* Year list scroll tabs */}
            <div className="flex bg-slate-100 rounded-lg p-0.5 w-full sm:w-auto overflow-x-auto gap-0.5">
              <button
                onClick={() => setSelectedYearFilter('ALL')}
                className={`
                  text-xs font-bold py-1.5 px-3.5 rounded-md whitespace-nowrap transition-all duration-150
                  ${selectedYearFilter === 'ALL' ? 'bg-white text-slate-950 shadow-sm' : 'text-slate-500 hover:text-slate-950'}
                `}
              >
                All Years
              </button>
              {years.map(y => (
                <button
                  key={y}
                  onClick={() => setSelectedYearFilter(y)}
                  className={`
                    text-xs font-bold py-1.5 px-3 rounded-md whitespace-nowrap transition-all duration-150
                    ${selectedYearFilter === y ? 'bg-white text-slate-950 shadow-sm' : 'text-slate-500 hover:text-slate-950'}
                  `}
                >
                  {y}
                </button>
              ))}
            </div>

            <button
              onClick={() => {
                resetForm();
                setIsAdding(!isAdding);
              }}
              className="w-full sm:w-auto py-2 px-4 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-lg text-xs flex items-center justify-center gap-1.5 transition-colors shadow-sm"
              id="pyp-add-log-btn"
            >
              <Plus className="w-4 h-4" />
              <span>{isAdding ? 'Close Panel' : 'Log paper Attempt'}</span>
            </button>
          </div>

          {/* Add / Edit Form panel */}
          {isAdding && (
            <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-sm">
              <h3 className="text-sm font-bold text-slate-950 mb-4 font-sans">
                {editingId ? 'Edit Past Paper Record' : 'Log New Past Paper Attempt'}
              </h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                  
                  {/* Year */}
                  <div>
                    <label className="text-[10px] font-mono font-extrabold text-slate-400 uppercase block mb-1">CAT Year</label>
                    <select
                      className="w-full text-xs text-slate-800 bg-white border border-slate-200 rounded-lg p-2.5 focus:outline-none"
                      value={year}
                      onChange={(e) => setYear(Number(e.target.value))}
                    >
                      {years.map(y => (
                        <option key={y} value={y}>CAT {y}</option>
                      ))}
                    </select>
                  </div>

                  {/* Slot */}
                  <div>
                    <label className="text-[10px] font-mono font-extrabold text-slate-400 uppercase block mb-1">Session Slot</label>
                    <select
                      className="w-full text-xs text-slate-800 bg-white border border-slate-200 rounded-lg p-2.5 focus:outline-none"
                      value={slot}
                      onChange={(e) => setSlot(e.target.value)}
                    >
                      <option value="Slot 1">Slot 1 (Morning)</option>
                      <option value="Slot 2">Slot 2 (Afternoon)</option>
                      <option value="Slot 3">Slot 3 (Evening)</option>
                      <option value="N/A">Not Applicable</option>
                    </select>
                  </div>

                  {/* Target Section */}
                  <div>
                    <label className="text-[10px] font-mono font-extrabold text-slate-400 uppercase block mb-1">Test Format</label>
                    <select
                      className="w-full text-xs text-slate-800 bg-white border border-slate-200 rounded-lg p-2.5 focus:outline-none"
                      value={section}
                      onChange={(e) => setSection(e.target.value as any)}
                    >
                      <option value="Full Test">Full 120m Test</option>
                      <option value="VARC">VARC Sectional Mode</option>
                      <option value="DILR">DILR Sectional Mode</option>
                      <option value="QA">QA Sectional Mode</option>
                    </select>
                  </div>

                  {/* Status */}
                  <div>
                    <label className="text-[10px] font-mono font-extrabold text-slate-400 uppercase block mb-1">Attempt Status</label>
                    <select
                      className="w-full text-xs text-slate-800 bg-white border border-slate-200 rounded-lg p-2.5 focus:outline-none"
                      value={status}
                      onChange={(e) => setStatus(e.target.value as any)}
                    >
                      <option value="Not started">Not started</option>
                      <option value="Attempted">Attempted</option>
                      <option value="Re-attempt Planned">Re-attempt Planned</option>
                    </select>
                  </div>

                  {/* Score */}
                  <div>
                    <label className="text-[10px] font-mono font-extrabold text-slate-400 uppercase block mb-1">Score Obtained</label>
                    <input
                      type="number"
                      className="w-full text-xs text-slate-800 bg-white border border-slate-200 rounded-lg p-2.5 focus:outline-none"
                      placeholder="e.g. 78"
                      value={score}
                      onChange={(e) => setScore(e.target.value !== '' ? Number(e.target.value) : '')}
                      disabled={status === 'Not started'}
                    />
                  </div>

                  {/* Accuracy */}
                  <div>
                    <label className="text-[10px] font-mono font-extrabold text-slate-400 uppercase block mb-1">Accuracy %</label>
                    <input
                      type="number"
                      min="0"
                      max="100"
                      className="w-full text-xs text-slate-800 bg-white border border-slate-200 rounded-lg p-2.5 focus:outline-none"
                      placeholder="e.g. 85"
                      value={accuracy}
                      onChange={(e) => setAccuracy(e.target.value !== '' ? Number(e.target.value) : '')}
                      disabled={status === 'Not started'}
                    />
                  </div>

                  {/* Planned Date */}
                  <div className="sm:col-span-2">
                    <label className="text-[10px] font-mono font-extrabold text-slate-400 uppercase block mb-1">Reattempt Schedule</label>
                    <input
                      type="date"
                      className="w-full text-xs text-slate-800 bg-white border border-slate-200 rounded-lg p-2.5 focus:outline-none"
                      value={reattemptsDate}
                      onChange={(e) => setReattemptsDate(e.target.value)}
                    />
                  </div>
                </div>

                {/* Notes */}
                <div>
                  <label className="text-[10px] font-mono font-extrabold text-slate-400 uppercase block mb-1">Review Notes & Traps Identified</label>
                  <textarea
                    className="w-full text-xs text-slate-800 bg-white border border-slate-200 rounded-lg p-2.5 focus:outline-none focus:border-slate-300"
                    rows={2}
                    placeholder="Identify which sets were easiest, why questions were skipped, or key algebra formula failures..."
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                  />
                </div>

                <div className="flex justify-end gap-2.5 pt-1">
                  <button
                    type="button"
                    onClick={() => {
                      setIsAdding(false);
                      resetForm();
                    }}
                    className="py-2 px-4 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="py-2 px-5 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-lg text-xs transition-colors shadow-sm"
                    id="pyp-submit-form-btn"
                  >
                    {editingId ? 'Save Changes' : 'Log Record'}
                  </button>
                </div>
              </form>
            </div>
          )}

          {/* Structured paper grid list */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {filteredAttempts.map((att) => {
              const isCompleted = att.status === 'Attempted';
              const isPlanned = att.status === 'Re-attempt Planned';
              const hasScore = att.score !== undefined;

              return (
                <div 
                  key={att.id} 
                  id={`pyp-attempt-card-${att.id}`}
                  className="bg-white border border-slate-200 rounded-xl p-4 shadow-sm hover:shadow-md transition-all duration-150 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-start justify-between gap-2.5 mb-2.5">
                      <div>
                        <span className="text-md font-extrabold text-slate-900 tracking-tight">
                          CAT {att.year}
                        </span>
                        <span className="text-[10px] font-mono font-bold text-slate-400 block leading-tight mt-0.5">
                          {att.slot} • {att.section}
                        </span>
                      </div>

                      {/* Status Indicator */}
                      <div>
                        {isCompleted ? (
                          <span className="py-0.5 px-2 bg-emerald-50 text-emerald-800 border-emerald-100 border text-[10px] font-semibold rounded-full flex items-center gap-1">
                            <CheckCircle2 className="w-3 h-3 text-emerald-500" />
                            <span>Completed</span>
                          </span>
                        ) : isPlanned ? (
                          <span className="py-0.5 px-2 bg-indigo-50 text-indigo-800 border-indigo-100 border text-[10px] font-semibold rounded-full flex items-center gap-1">
                            <Calendar className="w-3 h-3 text-indigo-500" />
                            <span className="truncate">Planned Re-attempt</span>
                          </span>
                        ) : (
                          <span className="py-0.5 px-2 bg-slate-50 text-slate-400 border border-slate-200 text-[10px] font-semibold rounded-full">
                            Not Attempted
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Score panel if completed */}
                    {isCompleted && (
                      <div className="grid grid-cols-2 gap-2 p-2.5 bg-slate-50 rounded-lg mb-3 border border-slate-100">
                        <div>
                          <div className="text-[10px] font-mono text-slate-400 uppercase leading-none">Score</div>
                          <div className="text-sm font-bold text-slate-800 mt-1">{att.score ?? 'N/A'}</div>
                        </div>
                        <div>
                          <div className="text-[10px] font-mono text-slate-400 uppercase leading-none">Accuracy</div>
                          <div className="text-sm font-bold text-slate-800 mt-1">{att.accuracy ? `${att.accuracy}%` : 'N/A'}</div>
                        </div>
                      </div>
                    )}

                    {/* Reattempt scheduling text */}
                    {isPlanned && att.reattemptDate && (
                      <div className="text-[10px] font-mono font-bold py-1 px-2.5 bg-indigo-50 text-indigo-800 rounded mb-3 inline-block">
                        Target: {att.reattemptDate}
                      </div>
                    )}

                    {/* Notes */}
                    {att.notes ? (
                      <p className="text-xs text-slate-600 leading-normal mb-4 font-sans bg-slate-50/50 p-2.5 rounded-lg border border-slate-100">
                        {att.notes}
                      </p>
                    ) : (
                      <p className="text-xs text-slate-300 italic mb-4">No reviews recorded yet.</p>
                    )}
                  </div>

                  {/* Card Footer Action Toolbar */}
                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-[10px] font-mono text-slate-400 leading-none">ID: {att.id}</span>
                    <div className="flex items-center gap-1">
                      <button 
                        onClick={() => startEdit(att)}
                        className="p-1 px-2.5 bg-slate-50 hover:bg-slate-100 border border-slate-200 rounded-md text-[10px] font-bold text-slate-700 transition-colors inline-flex items-center gap-1"
                      >
                        <Edit2 className="w-2.5 h-2.5" />
                        <span>Edit</span>
                      </button>
                      <button 
                        onClick={() => onDeleteAttempt(att.id)}
                        className="p-1 text-slate-400 hover:text-rose-600 hover:bg-rose-50 rounded transition-colors"
                        title="Delete record"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </>
      )}
    </div>
  );
}

