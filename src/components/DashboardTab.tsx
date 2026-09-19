import React, { useState, useMemo } from 'react';
import { 
  BookOpen, 
  History, 
  BarChart3, 
  Binary, 
  AlertTriangle, 
  TrendingUp, 
  Clock, 
  FileText, 
  ArrowRight,
  Download,
  Upload,
  Zap,
  Info,
  ExternalLink,
  Target
} from 'lucide-react';
import { DailySyllabusItem, MockTest, WeeklyStudyPlan, QuestionAttempt, ErrorNotebookEntry } from '../types';

interface DashboardTabProps {
  syllabusItems: DailySyllabusItem[];
  mocks: MockTest[];
  weeklyPlan: WeeklyStudyPlan[];
  attempts: QuestionAttempt[];
  errors: ErrorNotebookEntry[];
  setActiveTab: (tab: string) => void;
  onImportBackup: (jsonData: string) => boolean | Promise<boolean>;
  onExportBackup: () => void | Promise<void>;
}

export default function DashboardTab({ 
  syllabusItems, 
  mocks, 
  weeklyPlan,
  attempts,
  errors,
  setActiveTab,
  onImportBackup,
  onExportBackup
}: DashboardTabProps) {
  const [importText, setImportText] = useState('');
  const [importError, setImportError] = useState<string | null>(null);
  const [importSuccess, setImportSuccess] = useState(false);
  const [customFocus, setCustomFocus] = useState(() => {
    return localStorage.getItem('cat_custom_focus') || 'Read 2 RC passages, solve 1 Games & Tournaments set, and revise Algebra logarithmic shortcuts.';
  });
  const [isEditingFocus, setIsEditingFocus] = useState(false);

  // 1. Calculate section progress rates from syllabusItems checklist
  const calculateSectionProgress = (sectionName: 'VARC' | 'DILR' | 'QA') => {
    const sectionItems = syllabusItems.filter(item => item.section === sectionName);
    if (sectionItems.length === 0) return 0;
    const completed = sectionItems.filter(item => item.completed).length;
    return Math.round((completed / sectionItems.length) * 100);
  };

  const varcProg = calculateSectionProgress('VARC');
  const dilrProg = calculateSectionProgress('DILR');
  const qaProg = calculateSectionProgress('QA');
  const overallProg = syllabusItems.length > 0 ? Math.round((syllabusItems.filter(item => item.completed).length / syllabusItems.length) * 100) : 0;

  // 2. Identify upcoming pending preparation days (instead of topics)
  const upcomingTasks = syllabusItems
    .filter(item => !item.completed)
    .slice(0, 4);

  // 3. Find the current week phase based on week completions
  const currentWeekObj = weeklyPlan.find(w => !w.completed) || weeklyPlan[weeklyPlan.length - 1];
  
  // 4. Calculate practice stats derived from real practice attempts
  const completedDaysCount = syllabusItems.filter(item => item.completed).length;
  const totalDaysCount = syllabusItems.length;
  const totalQuestions = attempts.length;
  const totalCorrect = attempts.filter(a => a.isCorrect).length;
  const accuracyOverall = totalQuestions > 0 ? Math.round((totalCorrect / totalQuestions) * 105) : 0; // standard scaling helper
  // cap accuracyOverall at 100
  const finalAccuracy = Math.min(accuracyOverall, 100);

  const errorsCount = errors.length;

  // 5. Highlight Mock Metrics
  const lastMock = mocks.length > 0 ? mocks[mocks.length - 1] : null;

  // 6. Practice Stats
  const practiceStats = useMemo(() => {
    const validAttempts = attempts.filter(a => a.isCorrect !== null);
    const totalQA = validAttempts.filter(a => a.section === 'QA');
    const totalVARC = validAttempts.filter(a => a.section === 'VARC');
    const totalDILR = validAttempts.filter(a => a.section === 'DILR');

    const qaAcc = totalQA.length ? Math.round((totalQA.filter(a => a.isCorrect).length / totalQA.length) * 100) : 0;
    const varcAcc = totalVARC.length ? Math.round((totalVARC.filter(a => a.isCorrect).length / totalVARC.length) * 100) : 0;
    const dilrAcc = totalDILR.length ? Math.round((totalDILR.filter(a => a.isCorrect).length / totalDILR.length) * 100) : 0;

    const avgTime = validAttempts.length ? Math.round(validAttempts.reduce((acc, a) => acc + a.timeTaken, 0) / validAttempts.length) : 0;
    
    // Topic accuracy
    const topicMap: Record<string, { attempts: number, correct: number }> = {};
    validAttempts.forEach(a => {
      if (!a.topic) return;
      if (!topicMap[a.topic]) topicMap[a.topic] = { attempts: 0, correct: 0 };
      topicMap[a.topic].attempts += 1;
      if (a.isCorrect) topicMap[a.topic].correct += 1;
    });

    // Error breakdown
    const errorMap: Record<string, number> = {};
    errors.forEach(e => {
      errorMap[e.errorType] = (errorMap[e.errorType] || 0) + 1;
    });

    return { qaAcc, varcAcc, dilrAcc, avgTime, topicMap, errorMap };
  }, [attempts, errors]);

  const handleSaveFocus = () => {
    localStorage.setItem('cat_custom_focus', customFocus);
    setIsEditingFocus(false);
  };

  const handleImportSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setImportError(null);
    setImportSuccess(false);

    if (!importText.trim()) {
      setImportError('Please paste your saved JSON backup first.');
      return;
    }

    try {
      const success = await onImportBackup(importText);
      if (success) {
        setImportSuccess(true);
        setImportText('');
        // Reload after short delay
        setTimeout(() => {
          window.location.reload();
        }, 1200);
      } else {
        setImportError('Import failed: The JSON format appears invalid or has missing root keys.');
      }
    } catch (err: any) {
      setImportError(`Failed parsing JSON: ${err.message || err}`);
    }
  };

  return (
    <div className="space-y-6">
      {/* Prime Header Dashboard row */}
      <div className="bg-indigo-700 rounded-xl p-6 text-white shadow-xs relative overflow-hidden">
        <div className="absolute top-0 right-0 p-8 opacity-10">
          <TrendingUp className="w-48 h-48" />
        </div>
        <div className="relative z-10 max-w-3xl">
          <div className="flex items-center space-x-2 text-indigo-200 font-mono text-xs font-bold uppercase mb-2">
            <Zap className="w-3.5 h-3.5 animate-pulse" />
            <span>Welcome to Your Mission Control</span>
          </div>
          <h2 className="text-lg md:text-xl font-bold tracking-tight mb-2">
            Cracking CAT is an exercise in rigorous consistency.
          </h2>
          <p className="text-xs text-indigo-100 leading-relaxed max-w-2xl">
            Track daily study blocks, monitor section readiness benchmarks, and study systematically. IIMs do not publish a fixed topic-wise CAT syllabus, so topics are selected from recurring paper types. For official guidelines, eligibility, and admit card links, check the portal at{' '}
            <a 
              href="https://iimcat.ac.in" 
              target="_blank" 
              rel="noreferrer" 
              className="text-white hover:underline inline-flex items-center gap-0.5 font-bold font-sans"
            >
              iimcat.ac.in <ExternalLink className="w-3 h-3 text-indigo-200 inline" />
            </a>.
          </p>
        </div>
      </div>

      {/* Grid: Current Focus & Weak Topics */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Focus of the day */}
        <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-2xs lg:col-span-2 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-base font-bold text-slate-950 flex items-center gap-2">
                <Clock className="w-4 h-4 text-indigo-600" />
                <span>Today's Active Study Plan</span>
              </h3>
              <button 
                onClick={() => isEditingFocus ? handleSaveFocus() : setIsEditingFocus(true)}
                className="text-xs font-mono font-semibold px-2 py-1 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded transition-colors"
                id="edit-focus-btn"
              >
                {isEditingFocus ? 'Save Focus' : 'Customize Target'}
              </button>
            </div>
            
            {isEditingFocus ? (
              <div className="mb-4">
                <textarea
                  className="w-full p-3 text-sm bg-slate-50 border border-slate-200 rounded-lg focus:outline-hidden focus:border-slate-300 font-mono text-slate-800"
                  rows={4}
                  value={customFocus}
                  onChange={(e) => setCustomFocus(e.target.value)}
                  placeholder="Set your specific targets for today..."
                />
              </div>
            ) : (
              <div className="bg-indigo-50/60 border-l-4 border-indigo-600 rounded-r-lg p-4 mb-4">
                <p className="text-xs font-medium text-slate-800 leading-relaxed">"{customFocus}"</p>
              </div>
            )}
            
            <div className="text-[10px] text-slate-400 font-mono flex items-center gap-1">
              <Info className="w-3 h-3" />
              <span>Tip: Divide your daily 2-3 hour block into 40m segments to match the CAT section timers.</span>
            </div>
          </div>

          <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between">
            <span className="text-xs font-medium text-slate-500">Suggested Current Week Priority:</span>
            {currentWeekObj && (
              <button 
                onClick={() => setActiveTab('studyPlan')}
                className="text-xs font-bold text-slate-900 flex items-center hover:text-indigo-600 transition-colors"
              >
                <span>Week {currentWeekObj.week}: {currentWeekObj.theme}</span>
                <ArrowRight className="w-3.5 h-3.5 ml-1 text-indigo-500" />
              </button>
            )}
          </div>
        </div>

        {/* Quick Numbers / Streaks */}
        <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-2xs flex flex-col justify-between">
          <h3 className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-4">Aspirant Stats</h3>
          
          <div className="grid grid-cols-2 gap-4 my-2">
            <div className="bg-slate-50 p-3 rounded-lg border border-slate-100">
              <div className="text-2xs font-mono text-slate-400 uppercase leading-none">Days Checked</div>
              <div className="text-xl font-extrabold text-slate-950 mt-1 flex items-baseline gap-1">
                {completedDaysCount} <span className="text-xs font-normal text-slate-500">/ {totalDaysCount}</span>
              </div>
            </div>
            
            <div className="bg-slate-50 p-3 rounded-lg border border-slate-100">
              <div className="text-2xs font-mono text-slate-400 uppercase leading-none">Errors Logged</div>
              <div className="text-xl font-extrabold text-slate-950 mt-1 flex items-baseline gap-1">
                {errorsCount} <span className="text-xs font-normal text-slate-500">files</span>
              </div>
            </div>

            <div className="bg-slate-50 p-3 rounded-lg border border-slate-100">
              <div className="text-2xs font-mono text-slate-400 uppercase leading-none">Practice Qs</div>
              <div className="text-xl font-extrabold text-slate-950 mt-1">
                {totalQuestions}
              </div>
            </div>

            <div className="bg-slate-50 p-3 rounded-lg border border-slate-100">
              <div className="text-2xs font-mono text-slate-400 uppercase leading-none font-sans">Avg Accuracy</div>
              <div className="text-xl font-extrabold text-indigo-600 mt-1 flex items-baseline gap-0.5">
                {finalAccuracy}%
              </div>
            </div>
          </div>

          <button 
            onClick={() => setActiveTab('syllabus')}
            className="w-full mt-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg text-xs font-bold text-center transition-colors shadow-3xs"
          >
            Go To Daily Syllabus Checklist
          </button>
        </div>
      </div>

      {/* Grid: Section Progress Bars & Next Mock Target */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* Section Progress bar elements */}
        <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-2xs">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-base font-bold text-slate-950">Section Benchmarks</h3>
            <span className="text-xs font-mono font-semibold py-1 px-2.5 bg-slate-100 text-slate-700 rounded-full">
              Overall: {overallProg}% Covered
            </span>
          </div>

          <div className="space-y-4">
            {/* VARC */}
            <div>
              <div className="flex justify-between items-center text-xs font-semibold mb-1 text-slate-700">
                <span className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-blue-500" />
                  VARC (Verbal Ability & reading Comp)
                </span>
                <span>{varcProg}%</span>
              </div>
              <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                <div 
                  className="bg-blue-500 h-full rounded-full transition-all duration-500" 
                  style={{ width: `${varcProg}%` }}
                />
              </div>
            </div>

            {/* DILR */}
            <div>
              <div className="flex justify-between items-center text-xs font-semibold mb-1 text-slate-700">
                <span className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-indigo-500" />
                  DILR (Data Interpretation & Logical Reasoning)
                </span>
                <span>{dilrProg}%</span>
              </div>
              <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                <div 
                  className="bg-indigo-500 h-full rounded-full transition-all duration-500" 
                  style={{ width: `${dilrProg}%` }}
                />
              </div>
            </div>

            {/* QA */}
            <div>
              <div className="flex justify-between items-center text-xs font-semibold mb-1 text-slate-700">
                <span className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-indigo-400" />
                  QA (Quantitative Aptitude)
                </span>
                <span>{qaProg}%</span>
              </div>
              <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                <div 
                  className="bg-indigo-400 h-full rounded-full transition-all duration-500" 
                  style={{ width: `${qaProg}%` }}
                />
              </div>
            </div>
          </div>

          <div className="mt-5 pt-3 border-t border-slate-100">
            <button 
              onClick={() => setActiveTab('syllabus')}
              className="text-xs font-bold text-slate-900 inline-flex items-center gap-1 hover:text-indigo-600 transition-colors"
            >
              <span>Explore Detailed Checklist</span>
              <ArrowRight className="w-3 h-3 text-indigo-500" />
            </button>
          </div>
        </div>

        {/* Latest Mock Score card */}
        <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-2xs flex flex-col justify-between">
          <div>
            <h3 className="text-base font-bold text-slate-950 mb-3">Latest Mock Snapshot</h3>
            {lastMock ? (
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="text-sm font-semibold text-slate-800">{lastMock.name}</div>
                  <span className="text-xs font-mono py-0.5 px-2 bg-emerald-50 text-emerald-800 border border-emerald-100 rounded">
                    Est. {lastMock.percentileEstimate}%ile
                  </span>
                </div>
                
                <div className="grid grid-cols-4 gap-2 text-center py-2 bg-slate-50 rounded-lg">
                  <div>
                    <div className="text-4xs text-slate-400 font-mono uppercase">VARC</div>
                    <div className="text-xs font-bold text-slate-800">{lastMock.varcScore}</div>
                  </div>
                  <div>
                    <div className="text-4xs text-slate-400 font-mono uppercase">DILR</div>
                    <div className="text-xs font-bold text-slate-800">{lastMock.dilrScore}</div>
                  </div>
                  <div>
                    <div className="text-4xs text-slate-400 font-mono uppercase">QA</div>
                    <div className="text-xs font-bold text-slate-800">{lastMock.qaScore}</div>
                  </div>
                  <div className="border-l border-slate-200">
                    <div className="text-4xs text-slate-400 font-mono uppercase">TOTAL</div>
                    <div className="text-xs font-extrabold text-slate-950">{lastMock.totalScore}</div>
                  </div>
                </div>

                <div className="text-2xs text-slate-600 leading-normal">
                  <span className="font-semibold text-slate-700">Next Focus:</span> {lastMock.nextAction}
                </div>
              </div>
            ) : (
              <div className="py-6 text-center text-xs text-slate-400">
                No mock test data logged yet.
              </div>
            )}
          </div>

          <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between">
            <span className="text-2xs text-slate-400 font-mono">Snapshot available</span>
            <button 
              onClick={() => setActiveTab('mockAnalyzer')}
              className="text-xs font-bold text-slate-900 inline-flex items-center gap-1 hover:text-indigo-600 transition-colors"
            >
              <span>Mock Analysis Charts</span>
              <ArrowRight className="w-3 h-3 text-indigo-500" />
            </button>
          </div>
        </div>

      </div>

      {/* Grid: Practice Analytics */}
      <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-2xs">
        <h3 className="text-base font-bold text-slate-950 mb-4 flex items-center justify-between">
          <span className="flex items-center gap-2"><BarChart3 className="w-5 h-5 text-indigo-600" /> Practice Engine Analytics</span>
          <button 
             onClick={() => setActiveTab('mockPractice')}
             className="text-xs font-bold text-indigo-600 hover:text-indigo-800 transition-colors uppercase tracking-wider bg-indigo-50 px-3 py-1 rounded"
          >
            Attempt More Qs
          </button>
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="space-y-3">
             <div className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Section Accuracy</div>
             <div className="flex items-center justify-between">
               <span className="text-sm font-semibold text-slate-700">QA</span>
               <span className={`text-sm font-bold ${practiceStats.qaAcc >= 70 ? 'text-emerald-600' : 'text-amber-600'}`}>{practiceStats.qaAcc}%</span>
             </div>
             <div className="w-full bg-slate-100 h-1.5 rounded-full"><div className="bg-emerald-500 h-full rounded-full" style={{width: `${practiceStats.qaAcc}%`}} /></div>

             <div className="flex items-center justify-between mt-2">
               <span className="text-sm font-semibold text-slate-700">VARC</span>
               <span className={`text-sm font-bold ${practiceStats.varcAcc >= 70 ? 'text-emerald-600' : 'text-amber-600'}`}>{practiceStats.varcAcc}%</span>
             </div>
             <div className="w-full bg-slate-100 h-1.5 rounded-full"><div className="bg-blue-500 h-full rounded-full" style={{width: `${practiceStats.varcAcc}%`}} /></div>

             <div className="flex items-center justify-between mt-2">
               <span className="text-sm font-semibold text-slate-700">DILR</span>
               <span className={`text-sm font-bold ${practiceStats.dilrAcc >= 70 ? 'text-emerald-600' : 'text-amber-600'}`}>{practiceStats.dilrAcc}%</span>
             </div>
             <div className="w-full bg-slate-100 h-1.5 rounded-full"><div className="bg-purple-500 h-full rounded-full" style={{width: `${practiceStats.dilrAcc}%`}} /></div>
          </div>
          
          <div className="space-y-3">
            <div className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Time & Volume</div>
            <div className="bg-slate-50 p-3 rounded-lg border border-slate-100 flex items-center justify-between">
               <span className="text-xs font-semibold text-slate-600">Avg Time/Q</span>
               <span className="text-sm font-bold text-indigo-700">{practiceStats.avgTime}s</span>
            </div>
            <div className="bg-slate-50 p-3 rounded-lg border border-slate-100 flex items-center justify-between">
               <span className="text-xs font-semibold text-slate-600">Total Attempts</span>
               <span className="text-sm font-bold text-indigo-700">{attempts.length}</span>
            </div>
          </div>

          <div className="col-span-2 space-y-3">
             <div className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Error Types Breakdown</div>
             {Object.keys(practiceStats.errorMap).length > 0 ? (
               <div className="grid grid-cols-2 gap-2">
                 {Object.entries(practiceStats.errorMap).map(([type, count]) => (
                   <div key={type} className="flex items-center justify-between bg-rose-50 px-3 py-2 rounded border border-rose-100">
                     <span className="text-xs font-semibold text-rose-800 capitalize">{type}</span>
                     <span className="text-xs font-bold text-rose-900">{count}</span>
                   </div>
                 ))}
               </div>
             ) : (
                <div className="text-xs text-slate-400 italic">No errors logged yet.</div>
             )}
          </div>
        </div>
      </div>

      {/* Grid: Weak Issues and Nav Quick Link list */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

         {/* Priority Weak Areas list */}
        <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-2xs md:col-span-2">
          <h3 className="text-base font-bold text-slate-950 mb-3 flex items-center gap-1.5">
            <Target className="w-4.5 h-4.5 text-indigo-600 shrink-0" />
            <span>Next Syllabus Milestones</span>
          </h3>
          <p className="text-xs text-slate-500 mb-4">
            Below are your next upcoming daily study targets. Check these off in your <span className="font-semibold text-slate-700">Syllabus Tracker</span> as you progress.
          </p>

          {upcomingTasks.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {upcomingTasks.map(t => (
                <div 
                  key={t.id} 
                  className="p-3 bg-indigo-50/20 border border-indigo-100 rounded-lg flex flex-col justify-between"
                >
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-3xs font-extrabold px-1.5 py-0.5 bg-indigo-100/70 text-indigo-800 rounded font-mono uppercase">
                      Day {t.day}
                    </span>
                    <span className="text-3xs font-semibold px-2 py-0.5 bg-slate-100 text-slate-600 border border-slate-200 rounded font-sans uppercase">
                      {t.section}
                    </span>
                  </div>
                  <div className="text-[11px] font-semibold text-slate-800 line-clamp-2 mt-0.5" title={t.task}>
                    {t.task}
                  </div>
                  <div className="text-[10px] text-slate-400 mt-2 font-mono truncate">
                    Topic: {t.topic}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="py-4 bg-emerald-50/50 border border-emerald-100 rounded-lg text-center text-xs text-emerald-800">
              ✓ Outstanding effort! You have completed all 60 days of the preparation syllabus checklist. Time to solve PYPs and full mocks!
            </div>
          )}
        </div>

        {/* Quick Links hub */}
        <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-2xs flex flex-col justify-between">
          <div>
            <h3 className="text-base font-bold text-slate-950 mb-3">Workspace Map</h3>
            <div className="grid grid-cols-2 gap-2">
              <button 
                onClick={() => setActiveTab('syllabus')}
                className="p-2.5 rounded-lg border border-slate-100 bg-slate-50 text-left hover:bg-slate-100 transition-colors group"
              >
                <BookOpen className="w-4 h-4 text-slate-600 mb-1 group-hover:text-indigo-600" />
                <div className="text-xs font-bold text-slate-800">Syllabus</div>
                <div className="text-3xs text-slate-400">Section details</div>
              </button>
              
              <button 
                onClick={() => setActiveTab('papers')}
                className="p-2.5 rounded-lg border border-slate-100 bg-slate-50 text-left hover:bg-slate-100 transition-colors group"
              >
                <History className="w-4 h-4 text-slate-600 mb-1 group-hover:text-indigo-600" />
                <div className="text-xs font-bold text-slate-800">Past Papers</div>
                <div className="text-3xs text-slate-400">CAT 2017-2025</div>
              </button>

              <button 
                onClick={() => setActiveTab('formulaSheet')}
                className="p-2.5 rounded-lg border border-slate-100 bg-slate-50 text-left hover:bg-slate-100 transition-colors group"
              >
                <Binary className="w-4 h-4 text-slate-600 mb-1 group-hover:text-indigo-600" />
                <div className="text-xs font-bold text-slate-800">Formula Sheet</div>
                <div className="text-3xs text-slate-400">QA Equations</div>
              </button>

              <button 
                onClick={() => setActiveTab('errorNotebook')}
                className="p-2.5 rounded-lg border border-slate-100 bg-slate-50 text-left hover:bg-slate-100 transition-colors group"
              >
                <AlertTriangle className="w-4 h-4 text-slate-600 mb-1 group-hover:text-indigo-600" />
                <div className="text-xs font-bold text-slate-800">Error Book</div>
                <div className="text-3xs text-slate-400">Avoid Mistakes</div>
              </button>
            </div>
          </div>
          
          <div className="text-4xs text-slate-400 uppercase font-mono mt-4 leading-none select-none text-center">
            CAT Prep Dashboard System
          </div>
        </div>

      </div>

      {/* Backup and Data Management */}
      <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 shadow-2xs">
        <h3 className="text-sm font-bold text-slate-900 mb-2 flex items-center gap-2">
          <Download className="w-4 h-4 text-slate-600" />
          <span>Aspirant Backup Utility</span>
        </h3>
        <p className="text-xs text-slate-600 mb-4">
          All your study status logs, mock score sheets, and formulas are automatically stored locally in your current browser session. Safeguard your milestones or transfer content to another machine using the utilities below.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Export action */}
          <div className="p-4 bg-white border border-slate-200 rounded-lg flex flex-col justify-between">
            <div>
              <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wide mb-1">Export Milestones</h4>
              <p className="text-2xs text-slate-400 leading-normal mb-3">
                Produces a text file containing complete records. Save this string on your PC as a safety checkpoint.
              </p>
            </div>
            <button 
              onClick={onExportBackup}
              className="py-2 px-3.5 bg-slate-900 hover:bg-slate-800 text-white rounded-md text-xs font-bold transition-colors inline-flex items-center gap-1.5 justify-center"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Export Workspace JSON File</span>
            </button>
          </div>

          {/* Import action */}
          <div className="p-4 bg-white border border-slate-200 rounded-lg">
            <form onSubmit={handleImportSubmit} className="space-y-3">
              <div>
                <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wide mb-1">Import Checklist Snapshot</h4>
                <p className="text-2xs text-slate-400 leading-normal mb-2.5">
                  Paste a valid backup JSON string here to replace active variables.
                </p>
              </div>

              <textarea 
                className="w-full h-14 p-1.5 text-3xs font-mono border border-slate-200 bg-slate-50 rounded focus:outline-hidden"
                placeholder='Paste raw JSON text e.g {"topics": [...], "mocks": [...]} ...'
                value={importText}
                onChange={(e) => setImportText(e.target.value)}
              />

              <div className="flex items-center justify-between">
                <div>
                  {importSuccess && (
                    <span className="text-2xs text-emerald-700 font-bold animate-pulse">✓ Success! Reloading...</span>
                  )}
                  {importError && (
                    <span className="text-2xs text-rose-600 font-bold block max-w-xs">{importError}</span>
                  )}
                </div>
                <button 
                  type="submit"
                  className="py-1.5 px-3.5 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-md text-xs transition-colors inline-flex items-center gap-1.5 shadow-3xs"
                >
                  <Upload className="w-3.5 h-3.5" />
                  <span>Restore Data</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
