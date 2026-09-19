import React, { useState } from 'react';
import { CheckSquare, Square, Target, BookOpen, AlertCircle, Edit2, Check, ArrowRight } from 'lucide-react';
import { WeeklyStudyPlan } from '../types';

interface StudyPlanTabProps {
  weeklyPlan: WeeklyStudyPlan[];
  onUpdateWeek: (updatedWeek: WeeklyStudyPlan) => void;
}

export default function StudyPlanTab({ weeklyPlan, onUpdateWeek }: StudyPlanTabProps) {
  const [activePhaseFilter, setActivePhaseFilter] = useState<'All' | WeeklyStudyPlan['phase']>('All');
  const [editingWeekNum, setEditingWeekNum] = useState<number | null>(null);
  
  // Edit variables
  const [editVarc, setEditVarc] = useState('');
  const [editDilr, setEditDilr] = useState('');
  const [editQa, setEditQa] = useState('');
  const [editMock, setEditMock] = useState('');
  const [editNotes, setEditNotes] = useState('');

  const phases: { id: WeeklyStudyPlan['phase'] | 'All'; label: string; range: string }[] = [
    { id: 'All', label: 'All Phase Grid', range: 'Weeks 1-24' },
    { id: 'Base building', label: 'Base Building', range: 'Weeks 1-4' },
    { id: 'Topic coverage', label: 'Topic Coverage', range: 'Weeks 5-8' },
    { id: 'Accuracy improvement', label: 'Accuracy Gain', range: 'Weeks 9-14' },
    { id: 'Mock test phase', label: 'Mock Aggression', range: 'Weeks 15-20' },
    { id: 'Final revision', label: 'Final Revision', range: 'Weeks 21-24' }
  ];

  const filteredWeeks = weeklyPlan.filter(w => {
    return activePhaseFilter === 'All' || w.phase === activePhaseFilter;
  });

  const getPhaseColor = (phase: WeeklyStudyPlan['phase']) => {
    switch (phase) {
      case 'Base building': return 'bg-cyan-50 border-cyan-200 text-cyan-800';
      case 'Topic coverage': return 'bg-blue-50 border-blue-200 text-blue-800';
      case 'Accuracy improvement': return 'bg-violet-50 border-violet-200 text-violet-800';
      case 'Mock test phase': return 'bg-amber-50 border-amber-200 text-amber-800';
      case 'Final revision': return 'bg-emerald-50 border-emerald-200 text-emerald-800';
    }
  };

  const handleStartEdit = (w: WeeklyStudyPlan) => {
    setEditingWeekNum(w.week);
    setEditVarc(w.varcTarget);
    setEditDilr(w.dilrTarget);
    setEditQa(w.qaTarget);
    setEditMock(w.mockTarget);
    setEditNotes(w.notes);
  };

  const handleSaveEdit = (w: WeeklyStudyPlan) => {
    onUpdateWeek({
      ...w,
      varcTarget: editVarc,
      dilrTarget: editDilr,
      qaTarget: editQa,
      mockTarget: editMock,
      notes: editNotes
    });
    setEditingWeekNum(null);
  };

  // Totals info computation
  const totalWeeks = weeklyPlan.length;
  const completedWeeksCount = weeklyPlan.filter(w => w.completed).length;
  const completionPercentage = Math.round((completedWeeksCount / totalWeeks) * 100);

  return (
    <div className="space-y-6">
      
      {/* Tracker progress bar header */}
      <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-2xs ">
        <h2 className="text-xl font-extrabold text-slate-950 mb-1">24-Week Preparation Timeline</h2>
        <p className="text-xs text-slate-500 mb-4 leading-normal">
          A systematic, phased syllabus coverage calendar carefully designed for Indian MBA admissions. Complete weekly assignments to maintain optimal speed and accuracy momentum.
        </p>

        {/* Progress bar inside card */}
        <div className="bg-slate-50 p-4 border border-slate-200 rounded-lg">
          <div className="flex justify-between items-center text-xs font-semibold text-slate-700 mb-1.5">
            <span className="flex items-center gap-1.5">
              <CheckSquare className="w-4.5 h-4.5 text-indigo-600" />
              <span>Full Schedule Completion</span>
            </span>
            <span className="font-mono text-xs">{completedWeeksCount} / {totalWeeks} Weeks Done ({completionPercentage}%)</span>
          </div>
          <div className="w-full bg-slate-200 h-2.5 rounded-full overflow-hidden">
            <div 
              className="bg-indigo-600 h-full rounded-full transition-all duration-300 shadow-3xs" 
              style={{ width: `${completionPercentage}%` }}
            />
          </div>
        </div>
      </div>

      {/* Selector Phase Segment */}
      <div className="flex bg-slate-100 rounded-lg p-0.5 overflow-x-auto gap-0.5">
        {phases.map(ph => (
          <button
            key={ph.id}
            onClick={() => setActivePhaseFilter(ph.id)}
            className={`
              flex-1 text-2xs font-bold py-2 px-3 rounded-md transition-all duration-150 whitespace-nowrap text-center
              ${activePhaseFilter === ph.id ? 'bg-white text-slate-950 shadow-2xs' : 'text-slate-500 hover:text-slate-950'}
            `}
          >
            <div className="leading-tight">{ph.label}</div>
            <div className={`text-5xs uppercase tracking-wide font-mono mt-0.5 ${activePhaseFilter === ph.id ? 'text-indigo-600' : 'text-slate-400'}`}>
              {ph.range}
            </div>
          </button>
        ))}
      </div>

      {/* Week logs listing */}
      <div className="space-y-4">
        {filteredWeeks.map((w) => {
          const isEditing = editingWeekNum === w.week;
          const phaseBadge = getPhaseColor(w.phase);

          return (
            <div 
              key={w.week} 
              id={`weekly-prep-card-w${w.week}`}
              className={`
                bg-white border rounded-xl overflow-hidden transition-all duration-150
                ${w.completed ? 'border-indigo-100 shadow-3xs' : 'border-slate-200 hover:border-slate-300'}
              `}
            >
              {/* Header block with week indicator and completion checkbox */}
              <div className="p-4 bg-slate-50/70 border-b border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="flex items-center space-x-3">
                  <button
                    onClick={() => onUpdateWeek({ ...w, completed: !w.completed })}
                    className="p-1 hover:bg-slate-200 rounded transition-colors text-indigo-600"
                    title={w.completed ? "Mark incomplete" : "Mark complete"}
                  >
                    {w.completed ? (
                      <CheckSquare className="w-5.5 h-5.5 text-indigo-600 fill-indigo-50" />
                    ) : (
                      <Square className="w-5.5 h-5.5 text-slate-400" />
                    )}
                  </button>
                  <div>
                    <h3 className="text-sm font-extrabold text-slate-900 leading-tight">
                      Week {w.week}: {w.theme}
                    </h3>
                    <span className={`text-4xs uppercase tracking-wider font-mono font-bold px-1.5 py-0.5 rounded border inline-block mt-1 ${phaseBadge}`}>
                      Phase: {w.phase}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  {!isEditing && (
                    <button
                      onClick={() => handleStartEdit(w)}
                      className="p-1 px-2.5 bg-white border border-slate-200 text-3xs font-bold text-slate-700 hover:text-slate-900 shadow-2xs rounded-md transition-colors inline-flex items-center gap-1"
                    >
                      <Edit2 className="w-2.5 h-2.5" />
                      <span>Customize Target</span>
                    </button>
                  )}
                </div>
              </div>

              {/* Targets and notes description details */}
              <div className="p-4 space-y-3.5">
                {isEditing ? (
                  <div className="space-y-3 bg-slate-50/50 p-3 rounded-lg border border-slate-100">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="text-4xs font-mono font-extrabold text-slate-400 uppercase block mb-1">VARC Target</label>
                        <input 
                          className="w-full p-2 text-xs bg-white border border-slate-200 rounded-md focus:outline-hidden text-slate-800"
                          value={editVarc}
                          onChange={(e) => setEditVarc(e.target.value)}
                        />
                      </div>
                      <div>
                        <label className="text-4xs font-mono font-extrabold text-slate-400 uppercase block mb-1">DILR Target</label>
                        <input 
                          className="w-full p-2 text-xs bg-white border border-slate-200 rounded-md focus:outline-hidden text-slate-800"
                          value={editDilr}
                          onChange={(e) => setEditDilr(e.target.value)}
                        />
                      </div>
                      <div>
                        <label className="text-4xs font-mono font-extrabold text-slate-400 uppercase block mb-1">QA Target</label>
                        <input 
                          className="w-full p-2 text-xs bg-white border border-slate-200 rounded-md focus:outline-hidden text-slate-800"
                          value={editQa}
                          onChange={(e) => setEditQa(e.target.value)}
                        />
                      </div>
                      <div>
                        <label className="text-4xs font-mono font-extrabold text-slate-400 uppercase block mb-1">Mock test / Sectional Target</label>
                        <input 
                          className="w-full p-2 text-xs bg-white border border-slate-200 rounded-md focus:outline-hidden text-slate-800"
                          value={editMock}
                          onChange={(e) => setEditMock(e.target.value)}
                        />
                      </div>
                    </div>
                    <div>
                      <label className="text-4xs font-mono font-extrabold text-slate-400 uppercase block mb-1">Weekly Review Notes</label>
                      <textarea
                        className="w-full p-2 text-xs bg-white border border-slate-200 rounded-md focus:outline-hidden text-slate-800"
                        rows={2}
                        value={editNotes}
                        onChange={(e) => setEditNotes(e.target.value)}
                        placeholder="Add review notes here..."
                      />
                    </div>
                    <div className="flex justify-end gap-1.5 pt-1">
                      <button
                        onClick={() => setEditingWeekNum(null)}
                        className="py-1 px-3 text-2xs font-semibold text-slate-500 hover:text-slate-800"
                      >
                        Cancel
                      </button>
                      <button
                        onClick={() => handleSaveEdit(w)}
                        className="py-1 px-3 bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-2xs rounded-md transition-all inline-flex items-center gap-1.5 shadow-3xs"
                      >
                        <Check className="w-3 h-3" />
                        <span>Update Week</span>
                      </button>
                    </div>
                  </div>
                ) : (
                  <>
                    {/* Visual target vectors bullet-points */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 bg-slate-50/30">
                      
                      {/* VARC */}
                      <div className="p-3 border border-slate-100 rounded-lg bg-white/70">
                        <span className="text-4xs uppercase tracking-wider font-mono font-bold text-blue-500 block mb-1.5">
                          VARC TARGET
                        </span>
                        <p className="text-xs text-slate-700 leading-normal">{w.varcTarget}</p>
                      </div>

                      {/* DILR */}
                      <div className="p-3 border border-slate-100 rounded-lg bg-white/70">
                        <span className="text-4xs uppercase tracking-wider font-mono font-bold text-indigo-500 block mb-1.5">
                          DILR TARGET
                        </span>
                        <p className="text-xs text-slate-700 leading-normal">{w.dilrTarget}</p>
                      </div>

                      {/* QA */}
                      <div className="p-3 border border-slate-100 rounded-lg bg-white/70">
                        <span className="text-4xs uppercase tracking-wider font-mono font-bold text-indigo-500 block mb-1.5">
                          QA TARGET
                        </span>
                        <p className="text-xs text-slate-700 leading-normal">{w.qaTarget}</p>
                      </div>

                      {/* Mock / Sectionals */}
                      <div className="p-3 border border-slate-100 rounded-lg bg-white/70">
                        <span className="text-4xs uppercase tracking-wider font-mono font-bold text-slate-500 block mb-1.5">
                          MOCK & TIMED DRILL
                        </span>
                        <p className="text-xs text-slate-700 leading-normal">{w.mockTarget}</p>
                      </div>

                    </div>

                    {/* Review comments */}
                    {w.notes && (
                      <div className="p-3 bg-indigo-50/30 border border-indigo-100/40 rounded-lg">
                        <span className="text-5xs font-mono font-bold text-indigo-700 uppercase block mb-1">
                          Aspirant Weekly Journal
                        </span>
                        <p className="text-xs text-slate-600 leading-relaxed italic">
                          "{w.notes}"
                        </p>
                      </div>
                    )}
                  </>
                )}
              </div>
            </div>
          );
        })}
      </div>

    </div>
  );
}
