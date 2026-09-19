import React, { useState, useEffect, useRef } from 'react';
import { CAT_PAST_QUESTIONS } from '../examData';
import { MockQuestion, QuestionAttempt, SectionType } from '../types';
import { CheckCircle2, XCircle, ArrowRight, Play, RefreshCw, Bookmark, Clock, Target, AlertCircle, BookmarkPlus, Zap, BookOpen, Trash2 } from 'lucide-react';
import { localDB } from '../lib/db';
import { db, auth } from '../lib/firebase';
import { doc, deleteDoc } from 'firebase/firestore';

interface MockPracticeTabProps {
  attempts: QuestionAttempt[];
  onAddAttempt: (attempt: QuestionAttempt) => void;
  onAddToErrorNotebook: (questionId: string, section: SectionType, topic: string) => void;
}

export default function MockPracticeTab({ attempts, onAddAttempt, onAddToErrorNotebook }: MockPracticeTabProps) {
  const [activeQuestion, setActiveQuestion] = useState<MockQuestion | null>(null);
  const [selectedOption, setSelectedOption] = useState<string>('');
  const [titaAnswer, setTitaAnswer] = useState<string>('');
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  
  const [allQuestions, setAllQuestions] = useState<MockQuestion[]>(CAT_PAST_QUESTIONS);
  const [deletedIds, setDeletedIds] = useState<Set<string>>(new Set());
  const [confirmDeleteId, setConfirmDeleteId] = useState<string | null>(null);

  // Timer state
  const [timeElapsed, setTimeElapsed] = useState<number>(0);
  const [isTimerRunning, setIsTimerRunning] = useState<boolean>(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // Filters
  const [filterYear, setFilterYear] = useState<string>('All');
  const [filterSection, setFilterSection] = useState<SectionType | 'All'>('All');
  const [filterDifficulty, setFilterDifficulty] = useState<string>('All');
  const [filterTopic, setFilterTopic] = useState<string>('All');

  // Load imported questions
  useEffect(() => {
    // Load deleted ids from localStorage
    try {
      const saved = localStorage.getItem('cat_deleted_questions_ids');
      if (saved) {
        setDeletedIds(new Set(JSON.parse(saved)));
      }
    } catch (e) {
      console.error(e);
    }

    localDB.getAllQuestions().then(importedQs => {
      // Only include reviewed ones
      const approvedQs = importedQs.filter(q => q.reviewed);
      setAllQuestions([...CAT_PAST_QUESTIONS, ...approvedQs]);
    });
  }, []);

  // Stop timer on unmount
  useEffect(() => {
    return () => clearInterval(timerRef.current!);
  }, []);

  const handleStart = (q: MockQuestion) => {
    setActiveQuestion(q);
    setSelectedOption('');
    setTitaAnswer('');
    setIsSubmitted(false);
    setTimeElapsed(0);
    setIsTimerRunning(true);
    timerRef.current = setInterval(() => {
      setTimeElapsed(prev => prev + 1);
    }, 1000);
  };

  const calculateCorrect = () => {
    if (!activeQuestion) return false;
    if (activeQuestion.type === 'MCQ') {
      return selectedOption === activeQuestion.correctAnswer;
    } else {
      return titaAnswer.trim().toLowerCase() === activeQuestion.correctAnswer.toLowerCase();
    }
  };

  const handleSubmit = () => {
    if (!activeQuestion) return;
    
    // Stop timer
    setIsTimerRunning(false);
    clearInterval(timerRef.current!);

    const isCorrect = (activeQuestion.type === 'MCQ' && !selectedOption) || (activeQuestion.type === 'TITA' && !titaAnswer) 
      ? null 
      : calculateCorrect();

    setIsSubmitted(true);
    
    onAddAttempt({
      id: `att-${Date.now()}`,
      questionId: activeQuestion.id,
      date: new Date().toISOString(),
      section: activeQuestion.section,
      topic: activeQuestion.topic,
      difficulty: activeQuestion.difficulty,
      isCorrect,
      timeTaken: timeElapsed,
      isMarkedForReview: false
    });
  };

  const promptDeleteQuestion = (e: React.MouseEvent, qid: string) => {
    e.stopPropagation();
    setConfirmDeleteId(qid);
  };

  const handleExecuteDeleteQuestion = async (qid: string) => {
    try {
      // 1. Delete from IndexedDB if stored there
      await localDB.deleteQuestion(qid);

      // 2. Add to deleted ID list to filter out static ones
      const newDeleted = new Set(deletedIds);
      newDeleted.add(qid);
      setDeletedIds(newDeleted);
      localStorage.setItem('cat_deleted_questions_ids', JSON.stringify(Array.from(newDeleted)));

      // 3. Delete from Firebase if guest is logged in and it exists
      if (auth.currentUser) {
        try {
          await deleteDoc(doc(db, 'questions', qid));
        } catch (firebaseErr) {
          console.error("Failed to delete from Firestore during local deletion sync:", firebaseErr);
        }
      }
      setConfirmDeleteId(null);
    } catch (err) {
      console.error("Error deleting question:", err);
    }
  };

  // Extract unique topics based on current filtered section
  const availableTopics = Array.from(new Set(
    allQuestions
      .filter(q => !deletedIds.has(q.id))
      .filter(q => filterSection === 'All' || q.section === filterSection)
      .map(q => q.topic)
  )).sort();

  const filteredQuestions = allQuestions.filter(q => {
    if (deletedIds.has(q.id)) return false;
    if (filterYear !== 'All' && q.year !== filterYear) return false;
    if (filterSection !== 'All' && q.section !== filterSection) return false;
    if (filterDifficulty !== 'All' && q.difficulty !== filterDifficulty) return false;
    if (filterTopic !== 'All' && q.topic !== filterTopic) return false;
    return true;
  });

  const getAttemptStatus = (qid: string) => {
    const qAttempts = attempts.filter(a => a.questionId === qid);
    if (qAttempts.length === 0) return 'Unattempted';
    const lastAttempt = qAttempts[0]; // Assuming sorted descending by date
    if (lastAttempt.isCorrect === true) return 'Correct';
    if (lastAttempt.isCorrect === false) return 'Incorrect';
    return 'Skipped';
  };

  const formatTime = (secs: number) => {
    const m = Math.floor(secs / 60);
    const s = secs % 60;
    return `${m}:${s < 10 ? '0' : ''}${s}`;
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold tracking-tight text-slate-900 mb-1">Question Bank & Practice</h2>
          <p className="text-sm text-slate-500">Practice questions, track time, and save errors.</p>
        </div>
      </div>

      {activeQuestion === null ? (
        <div className="space-y-6">
          {/* Filters */}
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 p-4 bg-white border border-slate-200 rounded-lg">
            <div>
              <label className="block text-xs font-semibold text-slate-500 mb-1 uppercase tracking-wider">Year</label>
              <select className="w-full text-sm border-slate-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500" value={filterYear} onChange={(e) => setFilterYear(e.target.value)}>
                <option value="All">All Years</option>
                <option value="2025">2025</option>
                <option value="2024">2024</option>
                <option value="2023">2023</option>
                <option value="2022">2022</option>
                <option value="2021">2021</option>
                <option value="2020">2020</option>
                <option value="2002">2002</option>
                <option value="2000">2000</option>
                <option value="1995">1995</option>
                <option value="1993">1993</option>
                <option value="1991">1991</option>
                <option value="1990">1990</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-500 mb-1 uppercase tracking-wider">Section</label>
              <select className="w-full text-sm border-slate-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500" value={filterSection} onChange={(e) => { setFilterSection(e.target.value as any); setFilterTopic('All'); }}>
                <option value="All">All Sections</option>
                <option value="QA">Quantitative Aptitude</option>
                <option value="VARC">VARC</option>
                <option value="DILR">DILR</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-500 mb-1 uppercase tracking-wider">Topic</label>
              <select className="w-full text-sm border-slate-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500" value={filterTopic} onChange={(e) => setFilterTopic(e.target.value)}>
                <option value="All">All Topics</option>
                {availableTopics.map(t => <option key={t} value={t}>{t}</option>)}
              </select>
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-500 mb-1 uppercase tracking-wider">Difficulty</label>
              <select className="w-full text-sm border-slate-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500" value={filterDifficulty} onChange={(e) => setFilterDifficulty(e.target.value)}>
                <option value="All">All Difficulties</option>
                <option value="Easy">Easy</option>
                <option value="Medium">Medium</option>
                <option value="Hard">Hard</option>
              </select>
            </div>
            <div className="flex items-end">
               <div className="w-full bg-slate-50 p-2 border border-slate-100 rounded text-center text-xs font-semibold text-slate-600">
                  {filteredQuestions.length} Questions Found
               </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredQuestions.map((q) => {
              const status = getAttemptStatus(q.id);
              const isAttempted = status !== 'Unattempted';
              return (
                <div key={q.id} className={`border ${isAttempted ? 'border-indigo-200 bg-indigo-50/10' : 'border-slate-200 bg-white'} rounded-lg p-5 hover:border-indigo-300 transition-all cursor-pointer group flex flex-col justify-between`} onClick={() => handleStart(q)}>
                  <div>
                    <div className="flex justify-between items-start mb-3">
                      <div className="flex gap-2 items-center">
                        <span className={`text-[10px] font-bold tracking-wider uppercase px-2 py-1 rounded bg-slate-100 text-slate-600`}>
                          CAT {q.year || 'PAST'} • {q.section} • {q.type}
                        </span>
                        <span className={`text-[10px] font-bold tracking-wider uppercase px-2 py-1 rounded 
                          ${q.difficulty === 'Easy' ? 'bg-emerald-100 text-emerald-700' : 
                            q.difficulty === 'Medium' ? 'bg-amber-100 text-amber-700' : 'bg-rose-100 text-rose-700'}`}>
                          {q.difficulty}
                        </span>
                      </div>
                      
                      <div className="flex items-center gap-2">
                        {isAttempted && (
                          <div className="flex items-center gap-1 bg-indigo-50 border border-indigo-200/60 px-2 py-0.5 rounded-full">
                            <span className={`w-1.5 h-1.5 rounded-full ${status === 'Correct' ? 'bg-emerald-500' : status === 'Incorrect' ? 'bg-rose-500' : 'bg-slate-400'}`} />
                            <span className="text-[9px] font-bold uppercase tracking-wider text-indigo-700">{status}</span>
                          </div>
                        )}
                        <button
                          onClick={(e) => promptDeleteQuestion(e, q.id)}
                          className="p-1 text-slate-400 hover:text-rose-650 hover:bg-rose-50 rounded transition-all opacity-100 md:opacity-0 md:group-hover:opacity-100"
                          title="Delete Question"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                    <span className="text-[10px] uppercase font-bold text-indigo-500 mb-1 block">{q.topic}</span>
                    <p className="text-sm text-slate-800 line-clamp-3 leading-relaxed">
                      {q.questionText}
                    </p>
                  </div>
                  <button className="mt-4 flex items-center justify-center space-x-2 w-full py-2 bg-indigo-50 text-indigo-700 rounded text-xs font-bold group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                    {isAttempted ? <RefreshCw className="w-3 h-3" /> : <Play className="w-3 h-3 fill-current" />}
                    <span>{isAttempted ? 'Reattempt question' : 'Attempt Question'}</span>
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      ) : (
        <div className="border border-slate-200 bg-white rounded-xl overflow-hidden shadow-sm animate-in fade-in zoom-in-95 duration-200">
          {/* Header */}
          <div className="bg-slate-50 p-4 border-b border-slate-200 flex flex-wrap gap-4 justify-between items-center">
            <div className="flex items-center gap-3">
              <button 
                onClick={() => {
                  clearInterval(timerRef.current!);
                  setActiveQuestion(null);
                }}
                className="text-xs font-semibold text-slate-500 hover:text-slate-800 transition-colors"
              >
                ← Back
              </button>
              <div className="h-4 w-px bg-slate-300"></div>
              <span className="text-xs font-bold text-slate-500 uppercase tracking-widest">{activeQuestion.section} • {activeQuestion.topic}</span>
              <span className="text-xs font-bold text-slate-400">• {activeQuestion.difficulty}</span>
            </div>
            <div className={`flex items-center gap-2 font-mono font-bold ${isTimerRunning ? 'text-indigo-600' : 'text-slate-500'}`}>
              <Clock className="w-4 h-4" /> {formatTime(timeElapsed)}
              {isSubmitted && <span className="text-xs font-sans ml-2 opacity-70">(Target: {activeQuestion.timeTarget}s)</span>}
            </div>
          </div>
          
          <div className="p-6 md:p-8">
            {activeQuestion.instructions && (
              <div className="mb-6 p-5 md:p-6 bg-slate-50 rounded-xl border border-slate-200 shadow-xs">
                <span className="block text-xs font-bold text-indigo-600 uppercase tracking-wider mb-2">
                  {activeQuestion.section === 'VARC' ? 'Reading Passage' : 'Instructions / Context'}
                </span>
                <div className={`text-slate-800 leading-relaxed whitespace-pre-wrap font-sans ${activeQuestion.section === 'VARC' ? 'text-base font-normal' : 'text-sm italic'}`}>
                  {activeQuestion.instructions}
                </div>
              </div>
            )}
            <div className="text-lg text-slate-900 leading-relaxed whitespace-pre-wrap font-medium mb-8">
              {activeQuestion.questionText}
            </div>

            <div className="max-w-2xl">
              {/* Question Input */}
              {activeQuestion.type === 'MCQ' ? (
                <div className="space-y-3">
                  {activeQuestion.options?.map((opt, i) => {
                    const isSelected = selectedOption === opt;
                    const isCorrect = opt === activeQuestion.correctAnswer;
                    let btnClass = "w-full text-left p-4 rounded-lg border text-sm transition-all focus:outline-none ";
                    
                    if (!isSubmitted) {
                      btnClass += isSelected ? "border-indigo-600 bg-indigo-50 ring-2 ring-indigo-100" : "border-slate-200 hover:border-slate-300";
                    } else {
                      if (isCorrect) {
                        btnClass += "border-emerald-500 bg-emerald-50 text-emerald-900 font-medium";
                      } else if (isSelected && !isCorrect) {
                        btnClass += "border-rose-500 bg-rose-50 text-rose-900";
                      } else {
                        btnClass += "border-slate-200 opacity-50";
                      }
                    }

                    return (
                      <button
                        key={i}
                        disabled={isSubmitted}
                        onClick={() => setSelectedOption(opt)}
                        className={btnClass}
                      >
                        <div className="flex items-center justify-between">
                          <span>{opt}</span>
                          {isSubmitted && isCorrect && <CheckCircle2 className="w-5 h-5 text-emerald-500" />}
                          {isSubmitted && isSelected && !isCorrect && <XCircle className="w-5 h-5 text-rose-500" />}
                        </div>
                      </button>
                    )
                  })}
                </div>
              ) : (
                <div className="space-y-3">
                  <label className="text-sm font-semibold text-slate-700 block mb-2">Type your answer below:</label>
                  <input 
                    type="text" 
                    value={titaAnswer}
                    onChange={(e) => setTitaAnswer(e.target.value)}
                    disabled={isSubmitted}
                    placeholder="Enter answer..."
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-all disabled:bg-slate-50 disabled:text-slate-500 font-mono text-lg"
                  />
                  {isSubmitted && (
                    <div className={`mt-4 p-4 rounded-lg font-medium flex items-center justify-between ${calculateCorrect() ? 'bg-emerald-50 text-emerald-700 border border-emerald-200' : 'bg-rose-50 text-rose-700 border border-rose-200'}`}>
                      <span>Your Answer: {titaAnswer === '' ? '(Skipped)' : titaAnswer}</span>
                      {calculateCorrect() ? <CheckCircle2 className="w-5 h-5" /> : <XCircle className="w-5 h-5" />}
                    </div>
                  )}
                  {isSubmitted && !calculateCorrect() && (
                    <div className="mt-2 text-sm text-slate-600 bg-slate-50 p-3 rounded-md border border-slate-200 inline-block font-mono">
                      Correct Answer: <span className="font-bold text-slate-900">{activeQuestion.correctAnswer}</span>
                    </div>
                  )}
                </div>
              )}

              {/* Actions */}
              {!isSubmitted ? (
                <div className="mt-8 flex gap-4">
                  <button 
                    onClick={handleSubmit}
                    disabled={(activeQuestion.type === 'MCQ' && !selectedOption) || (activeQuestion.type === 'TITA' && !titaAnswer)}
                    className="flex-1 px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg font-semibold text-sm shadow-sm transition-colors flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Submit Answer <ArrowRight className="w-4 h-4 ml-2" />
                  </button>
                  <button 
                    onClick={handleSubmit} // Submit with null answer (skipped)
                    className="px-6 py-3 bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 rounded-lg font-semibold text-sm transition-colors"
                  >
                    Skip
                  </button>
                </div>
              ) : (
                <div className="mt-8 relative animate-in fade-in slide-in-from-bottom-4 duration-300">
                  <div className="bg-white border-2 border-indigo-100 rounded-xl p-6 shadow-sm">
                    <h4 className="font-bold text-indigo-900 mb-4 flex items-center">
                      <Target className="w-5 h-5 mr-2 text-indigo-500" /> How to Solve 
                    </h4>
                    
                    <div className="space-y-4">
                      <div>
                        <span className="text-xs font-bold text-slate-400 uppercase">Step-by-Step Solution</span>
                        <p className="text-sm text-slate-800 leading-relaxed whitespace-pre-wrap mt-1">
                          {activeQuestion.explanation}
                        </p>
                      </div>

                      {activeQuestion.fasterMethod && (
                        <div className="bg-amber-50 rounded-lg p-3 border border-amber-100">
                          <span className="text-xs font-bold text-amber-700 uppercase flex items-center"><Zap className="w-3 h-3 mr-1" /> Shortcut / Faster Method</span>
                          <p className="text-sm text-amber-900 mt-1">{activeQuestion.fasterMethod}</p>
                        </div>
                      )}

                      {activeQuestion.commonTrap && (
                        <div className="bg-rose-50 rounded-lg p-3 border border-rose-100">
                          <span className="text-xs font-bold text-rose-700 uppercase flex items-center"><AlertCircle className="w-3 h-3 mr-1" /> Common Trap</span>
                          <p className="text-sm text-rose-900 mt-1">{activeQuestion.commonTrap}</p>
                        </div>
                      )}
                      
                      {activeQuestion.nextRevision && (
                        <div className="bg-blue-50 rounded-lg p-3 border border-blue-100">
                          <span className="text-xs font-bold text-blue-700 uppercase flex items-center"><BookOpen className="w-3 h-3 mr-1" /> Next Revision Concept</span>
                          <p className="text-sm text-blue-900 mt-1">{activeQuestion.nextRevision}</p>
                        </div>
                      )}
                    </div>
                    
                    <div className="mt-6 pt-6 border-t border-slate-100 flex flex-wrap gap-4 items-center justify-between">
                      <button 
                         onClick={() => onAddToErrorNotebook(activeQuestion.id, activeQuestion.section, activeQuestion.topic)}
                         className="flex items-center text-sm font-semibold text-rose-600 hover:text-rose-800 transition-colors bg-rose-50 px-3 py-2 rounded-md"
                      >
                        <BookmarkPlus className="w-4 h-4 mr-2" /> Add to Error Notebook
                      </button>
                      <button 
                        onClick={() => {
                          const currentIdx = allQuestions.findIndex(q => q.id === activeQuestion.id);
                          const nextIdx = (currentIdx + 1) % allQuestions.length;
                          handleStart(allQuestions[nextIdx]);
                        }}
                        className="flex items-center px-4 py-2 bg-indigo-600 text-white rounded-md text-sm font-semibold hover:bg-indigo-700 transition-colors"
                      >
                        Next Question <ArrowRight className="w-4 h-4 ml-2" />
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
      
      {/* Inline Practice Question Deletion Modal */}
      {confirmDeleteId && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-200" id="practice-delete-modal">
          <div className="bg-white rounded-xl shadow-xl border border-slate-200 max-w-md w-full overflow-hidden animate-in zoom-in-95 duration-200">
            <div className="p-6">
              <h3 className="text-lg font-bold text-slate-900 mb-2">Delete Practice Question</h3>
              <p className="text-sm text-slate-500 leading-relaxed mb-6">Are you sure you want to delete this question from your mock practice list? This action cannot be undone.</p>
              <div className="flex justify-end gap-3">
                <button
                  onClick={() => setConfirmDeleteId(null)}
                  className="px-4 py-2 border border-slate-200 hover:bg-slate-50 text-slate-750 text-sm font-semibold rounded-lg transition-colors cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  onClick={() => handleExecuteDeleteQuestion(confirmDeleteId)}
                  className="px-4 py-2 bg-rose-600 hover:bg-rose-700 text-white text-sm font-semibold rounded-lg shadow-xs transition-colors cursor-pointer"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
