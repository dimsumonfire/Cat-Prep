import React, { useState } from 'react';
import { Plus, Trash2, TrendingUp, AlertCircle, Percent, Target, Zap, Clock, ThumbsDown, HelpCircle } from 'lucide-react';
import { MockTest } from '../types';

interface MockAnalyzerTabProps {
  mocks: MockTest[];
  onAddMock: (mock: MockTest) => void;
  onDeleteMock: (id: string) => void;
}

export default function MockAnalyzerTab({ mocks, onAddMock, onDeleteMock }: MockAnalyzerTabProps) {
  const [isAdding, setIsAdding] = useState(false);

  // Form State
  const [name, setName] = useState('');
  const [date, setDate] = useState(() => new Date().toISOString().split('T')[0]);
  const [varcScore, setVarcScore] = useState<number | ''>('');
  const [dilrScore, setDilrScore] = useState<number | ''>('');
  const [qaScore, setQaScore] = useState<number | ''>('');
  const [percentileEstimate, setPercentileEstimate] = useState<number | ''>('');
  const [attempts, setAttempts] = useState<number | ''>('');
  const [corrects, setCorrects] = useState<number | ''>('');
  const [wrongs, setWrongs] = useState<number | ''>('');
  const [timeWasted, setTimeWasted] = useState<number | ''>('');
  const [keyMistakes, setKeyMistakes] = useState('');
  const [nextAction, setNextAction] = useState('');

  const [formError, setFormError] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormError(null);

    if (!name || varcScore === '' || dilrScore === '' || qaScore === '') {
      setFormError('Please complete name, date, and all section scores.');
      return;
    }

    const calculatedTotalScore = Number(varcScore) + Number(dilrScore) + Number(qaScore);
    
    const newMock: MockTest = {
      id: 'mock-' + Date.now(),
      name,
      date,
      varcScore: Number(varcScore),
      dilrScore: Number(dilrScore),
      qaScore: Number(qaScore),
      totalScore: calculatedTotalScore,
      percentileEstimate: percentileEstimate !== '' ? Number(percentileEstimate) : 0,
      attempts: attempts !== '' ? Number(attempts) : 0,
      corrects: corrects !== '' ? Number(corrects) : 0,
      wrongs: wrongs !== '' ? Number(wrongs) : 0,
      timeWasted: timeWasted !== '' ? Number(timeWasted) : 0,
      keyMistakes: keyMistakes || 'None logged.',
      nextAction: nextAction || 'Continue practicing syllabus checklists.'
    };

    onAddMock(newMock);
    setIsAdding(false);
    
    // Reset Form
    setName('');
    setVarcScore('');
    setDilrScore('');
    setQaScore('');
    setPercentileEstimate('');
    setAttempts('');
    setCorrects('');
    setWrongs('');
    setTimeWasted('');
    setKeyMistakes('');
    setNextAction('');
  };

  // Math Analytics computations
  const averageVarc = mocks.length > 0 ? Number((mocks.reduce((acc, m) => acc + m.varcScore, 0) / mocks.length).toFixed(1)) : 0;
  const averageDilr = mocks.length > 0 ? Number((mocks.reduce((acc, m) => acc + m.dilrScore, 0) / mocks.length).toFixed(1)) : 0;
  const averageQa = mocks.length > 0 ? Number((mocks.reduce((acc, m) => acc + m.qaScore, 0) / mocks.length).toFixed(1)) : 0;
  const averageTotal = mocks.length > 0 ? Number((mocks.reduce((acc, m) => acc + m.totalScore, 0) / mocks.length).toFixed(1)) : 0;

  // Weakest section diagnosis (lowest average score)
  const getWeakestSection = () => {
    if (mocks.length === 0) return { name: 'None', value: 0, details: '' };
    const sections = [
      { name: 'VARC', value: averageVarc, details: 'Focus on timed reading RC drills and tone analyses.' },
      { name: 'DILR', value: averageDilr, details: 'Devote time to advanced matrix setups and multi-parameter circular tables.' },
      { name: 'QA', value: averageQa, details: 'Consolidate formula Sheets, practice arithmetic fractions and quadratic margins.' }
    ];
    sections.sort((a, b) => a.value - b.value);
    return sections[0];
  };
  const weakestSection = getWeakestSection();

  // Custom Plotting helper: Total Score line SVG path
  const generateTrendPath = () => {
    if (mocks.length < 2) return '';
    const sorted = [...mocks].sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
    const maxVal = Math.max(...sorted.map(m => m.totalScore), 120);
    const minVal = Math.min(...sorted.map(m => m.totalScore), 0);
    
    const height = 140;
    const width = 450;
    const padding = 25;
    
    const points = sorted.map((m, index) => {
      const x = padding + (index * (width - 2 * padding)) / (sorted.length - 1);
      const denominator = (maxVal - minVal) || 1;
      const y = height - padding - ((m.totalScore - minVal) * (height - 2 * padding)) / denominator;
      return `${x},${y}`;
    });
    
    return `M ${points.join(' L ')}`;
  };

  const getAccuracyRate = (mock: MockTest) => {
    if (mock.attempts === 0) return 0;
    return Math.round((mock.corrects / mock.attempts) * 100);
  };

  const averageAccuracy = mocks.length > 0 
    ? Math.round(mocks.reduce((acc, m) => acc + getAccuracyRate(m), 0) / mocks.length) 
    : 0;

  const generateInsights = (mock: MockTest) => {
    const accuracy = getAccuracyRate(mock);
    let speedVsAccuracy = "";
    if (accuracy < 70 && mock.attempts > 45) {
      speedVsAccuracy = "You are attempting too many questions at the cost of accuracy. Slow down and focus on picking the right questions.";
    } else if (accuracy >= 85 && mock.attempts < 30) {
      speedVsAccuracy = "Your accuracy is excellent, but attempts are very low. You need to increase your speed and take calculated risks.";
    } else {
      speedVsAccuracy = "Your balance of speed and accuracy is steady, but look for marginal improvements in your weakest section.";
    }

    const sections = [
      { name: 'VARC', score: mock.varcScore },
      { name: 'DILR', score: mock.dilrScore },
      { name: 'QA', score: mock.qaScore }
    ].sort((a, b) => a.score - b.score);

    const weakest = sections[0].name;

    return {
      weakestSection: weakest,
      speedVsAccuracy,
      topicsReview: weakest === 'QA' ? 'Arithmetic formulas, Number Systems' : weakest === 'DILR' ? 'Circular Arrangements, Venn Diagrams' : 'RC Main Idea, Para Jumbles'
    };
  };

  return (
    <div className="space-y-6">
      
      {/* Top explanatory board */}
      <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-2xs">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h2 className="text-xl font-extrabold text-slate-950 mb-1">Mock Exam Analyzer Dashboard</h2>
            <p className="text-xs text-slate-500 leading-normal max-w-xl">
              Log score card entries, trace performance shifts, detect speed parameters, and understand silly mistake types. Target CAT threshold is around 99% percentile (historically 90-100 total marks depending on paper scale).
            </p>
          </div>
          <button
            onClick={() => setIsAdding(!isAdding)}
            className="py-2 px-4 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-lg text-xs flex items-center justify-center gap-1.5 transition-colors shrink-0 shadow-3xs"
            id="mock-analyzer-add-btn"
          >
            <Plus className="w-4 h-4" />
            <span>{isAdding ? 'Close Panel' : 'Log Mock score'}</span>
          </button>
        </div>
      </div>

      {/* Form and Quick Stats row */}
      {isAdding && (
        <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-xs">
          <h3 className="text-xs font-bold text-slate-950 uppercase tracking-wider mb-4 font-sans">
            Input Mock Test Results
          </h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            {formError && (
              <div className="p-3 bg-rose-50 border border-rose-100 text-rose-800 text-xs rounded-lg font-bold">
                {formError}
              </div>
            )}
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 text-slate-700">
              {/* Name */}
              <div className="sm:col-span-2">
                <label className="text-4xs font-mono font-extrabold text-slate-400 uppercase block mb-1">Mock test Title</label>
                <input
                  id="mock-form-name"
                  type="text"
                  className="w-full text-xs text-slate-800 bg-white border border-slate-200 rounded-lg p-2.5 focus:outline-hidden"
                  placeholder="e.g. AIMS National Mock #5"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>

              {/* Date */}
              <div>
                <label className="text-4xs font-mono font-extrabold text-slate-400 uppercase block mb-1">Attempted Date</label>
                <input
                  id="mock-form-date"
                  type="date"
                  className="w-full text-xs text-slate-800 bg-white border border-slate-200 rounded-lg p-2.5 focus:outline-hidden"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                />
              </div>

              {/* Est Percentile */}
              <div>
                <label className="text-4xs font-mono font-extrabold text-slate-400 uppercase block mb-1">Est. Percentile (%ile)</label>
                <input
                  id="mock-form-percentle"
                  type="number"
                  step="0.01"
                  min="0"
                  max="100"
                  className="w-full text-xs text-slate-800 bg-white border border-slate-200 rounded-lg p-2.5 focus:outline-hidden"
                  placeholder="e.g. 98.45"
                  value={percentileEstimate}
                  onChange={(e) => setPercentileEstimate(e.target.value !== '' ? Number(e.target.value) : '')}
                />
              </div>

              {/* VARC Score */}
              <div>
                <label className="text-4xs font-mono font-extrabold text-slate-400 uppercase block mb-1">VARC Score</label>
                <input
                  id="mock-form-varc"
                  type="number"
                  className="w-full text-xs text-slate-800 bg-white border border-slate-200 rounded-lg p-2.5 focus:outline-hidden"
                  placeholder="e.g. 32"
                  value={varcScore}
                  onChange={(e) => setVarcScore(e.target.value !== '' ? Number(e.target.value) : '')}
                  required
                />
              </div>

              {/* DILR Score */}
              <div>
                <label className="text-4xs font-mono font-extrabold text-slate-400 uppercase block mb-1">DILR Score</label>
                <input
                  id="mock-form-dilr"
                  type="number"
                  className="w-full text-xs text-slate-800 bg-white border border-slate-200 rounded-lg p-2.5 focus:outline-hidden"
                  placeholder="e.g. 24"
                  value={dilrScore}
                  onChange={(e) => setDilrScore(e.target.value !== '' ? Number(e.target.value) : '')}
                  required
                />
              </div>

              {/* QA Score */}
              <div>
                <label className="text-4xs font-mono font-extrabold text-slate-400 uppercase block mb-1">QA Score</label>
                <input
                  id="mock-form-qa"
                  type="number"
                  className="w-full text-xs text-slate-800 bg-white border border-slate-200 rounded-lg p-2.5 focus:outline-hidden"
                  placeholder="e.g. 30"
                  value={qaScore}
                  onChange={(e) => setQaScore(e.target.value !== '' ? Number(e.target.value) : '')}
                  required
                />
              </div>

              {/* Time wasted */}
              <div>
                <label className="text-4xs font-mono font-extrabold text-slate-400 uppercase block mb-1">Time Wasted (mins)</label>
                <input
                  type="number"
                  className="w-full text-xs text-slate-800 bg-white border border-slate-200 rounded-lg p-2.5 focus:outline-hidden"
                  placeholder="Time spent on dead ends"
                  value={timeWasted}
                  onChange={(e) => setTimeWasted(e.target.value !== '' ? Number(e.target.value) : '')}
                />
              </div>

              {/* Attempts */}
              <div>
                <label className="text-4xs font-mono font-extrabold text-slate-400 uppercase block mb-1">Total Questions Attempted</label>
                <input
                  type="number"
                  className="w-full text-xs text-slate-800 bg-white border border-slate-200 rounded-lg p-2.5 focus:outline-hidden"
                  value={attempts}
                  placeholder="e.g. 40"
                  onChange={(e) => setAttempts(e.target.value !== '' ? Number(e.target.value) : '')}
                />
              </div>

              {/* Corrects */}
              <div>
                <label className="text-4xs font-mono font-extrabold text-slate-400 uppercase block mb-1">Correct Answers (Net)</label>
                <input
                  type="number"
                  className="w-full text-xs text-slate-800 bg-white border border-slate-200 rounded-lg p-2.5 focus:outline-hidden"
                  value={corrects}
                  placeholder="e.g. 30"
                  onChange={(e) => setCorrects(e.target.value !== '' ? Number(e.target.value) : '')}
                />
              </div>

              {/* Wrongs */}
              <div>
                <label className="text-4xs font-mono font-extrabold text-slate-400 uppercase block mb-1">Wrong Answers (Negative count)</label>
                <input
                  type="number"
                  className="w-full text-xs text-slate-800 bg-white border border-slate-200 rounded-lg p-2.5 focus:outline-hidden"
                  value={wrongs}
                  placeholder="e.g. 10"
                  onChange={(e) => setWrongs(e.target.value !== '' ? Number(e.target.value) : '')}
                />
              </div>
            </div>

            {/* Key Mistakes textarea */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-4xs font-mono font-extrabold text-slate-400 uppercase block mb-1">Core Assessment & Mistakes</label>
                <textarea
                  className="w-full text-xs text-slate-800 bg-white border border-slate-200 rounded-lg p-2.5 focus:outline-hidden focus:border-slate-300"
                  rows={2}
                  placeholder="e.g. Stuck on 1 single arrangement set for 20 minutes, missed checking Arithmetic simples..."
                  value={keyMistakes}
                  onChange={(e) => setKeyMistakes(e.target.value)}
                />
              </div>
              
              <div>
                <label className="text-4xs font-mono font-extrabold text-slate-400 uppercase block mb-1">Next improvement Actions</label>
                <textarea
                  className="w-full text-xs text-slate-800 bg-white border border-slate-200 rounded-lg p-2.5 focus:outline-hidden focus:border-slate-300"
                  rows={2}
                  placeholder="e.g. Strictly apply the 5-minute selector rule, practice 20 percentages questions..."
                  value={nextAction}
                  onChange={(e) => setNextAction(e.target.value)}
                />
              </div>
            </div>

            <div className="flex justify-end gap-2.5">
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
                id="mock-form-submit-btn"
              >
                Save Performance
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Analytics Visualization cards row */}
      {mocks.length > 0 ? (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

          {/* SVG Score trend line */}
          <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-2xs lg:col-span-2">
            <h3 className="text-xs font-mono font-bold text-slate-400 uppercase tracking-widest mb-3 flex items-center justify-between">
              <span>Total Score Trend</span>
              <span className="text-slate-800 font-sans text-xs">Averages: {averageTotal} pts</span>
            </h3>

            {mocks.length >= 2 ? (
              <div className="relative pt-2">
                <svg viewBox="0 0 450 140" className="w-full overflow-visible">
                  {/* Grid Lines */}
                  <line x1="25" y1="20" x2="425" y2="20" stroke="#f1f5f9" strokeWidth="1" />
                  <line x1="25" y1="60" x2="425" y2="60" stroke="#f1f5f9" strokeWidth="1" />
                  <line x1="25" y1="100" x2="425" y2="100" stroke="#f1f5f9" strokeWidth="1" />
                  <line x1="25" y1="120" x2="425" y2="120" stroke="#e2e8f0" strokeWidth="1" />

                  {/* Trend Path Line */}
                  <path
                    d={generateTrendPath()}
                    fill="none"
                    stroke="#4f46e5"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  
                  {/* Nodes & Hovers */}
                  {[...mocks].sort((a,b) => new Date(a.date).getTime() - new Date(b.date).getTime()).map((m, index, arr) => {
                    const maxVal = Math.max(...arr.map(mock => mock.totalScore), 120);
                    const minVal = Math.min(...arr.map(mock => mock.totalScore), 0);
                    const denominator = (maxVal - minVal) || 1;
                    const x = 25 + (index * (450 - 50)) / (arr.length - 1);
                    const y = 140 - 25 - ((m.totalScore - minVal) * (140 - 50)) / denominator;

                    return (
                      <g key={m.id} className="group cursor-help">
                        <circle
                          cx={x}
                          cy={y}
                          r="5.5"
                          fill="#ffffff"
                          stroke="#1e293b"
                          strokeWidth="2.5"
                          className="hover:stroke-indigo-600 hover:scale-130 transition-all duration-150"
                        />
                        {/* Interactive text tooltips on hover */}
                        <text
                          x={x}
                          y={y - 12}
                          textAnchor="middle"
                          className="text-4xs font-mono font-bold fill-slate-900 bg-white"
                        >
                          {m.totalScore}
                        </text>
                        {/* Under labels */}
                        <text
                          x={x}
                          y="135"
                          textAnchor="middle"
                          className="text-5xs font-mono fill-slate-400"
                        >
                          {m.date.slice(5)}
                        </text>
                      </g>
                    );
                  })}
                </svg>
              </div>
            ) : (
              <div className="py-12 text-center text-xs text-slate-400 font-mono">
                Log at least 2 mock tests to trigger trend lines.
              </div>
            )}
          </div>

          {/* Section Diagnostics & Weakest Finder */}
          <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-2xs flex flex-col justify-between">
            <div>
              <h3 className="text-xs font-mono font-bold text-slate-400 uppercase tracking-widest mb-4">Sectional Averages Balance</h3>
              
              <div className="space-y-3">
                {/* VARC */}
                <div>
                  <div className="flex justify-between items-center text-xs text-slate-700 font-medium mb-1">
                    <span>VARC Average</span>
                    <span className="font-bold">{averageVarc} pts</span>
                  </div>
                  <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden">
                    <div className="bg-blue-500 h-full" style={{ width: `${Math.min((averageVarc / 72) * 100, 100)}%` }} />
                  </div>
                </div>

                {/* DILR */}
                <div>
                  <div className="flex justify-between items-center text-xs text-slate-700 font-medium mb-1">
                    <span>DILR Average</span>
                    <span className="font-bold">{averageDilr} pts</span>
                  </div>
                  <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden">
                    <div className="bg-indigo-500 h-full" style={{ width: `${Math.min((averageDilr / 60) * 100, 100)}%` }} />
                  </div>
                </div>

                {/* QA */}
                <div>
                  <div className="flex justify-between items-center text-xs text-slate-700 font-medium mb-1">
                    <span>QA Average</span>
                    <span className="font-bold">{averageQa} pts</span>
                  </div>
                  <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden">
                    <div className="bg-indigo-400 h-full" style={{ width: `${Math.min((averageQa / 66) * 100, 100)}%` }} />
                  </div>
                </div>
              </div>
            </div>

            {/* weakest section readout */}
            {weakestSection.name !== 'None' && (
              <div className="mt-5 pt-3.5 border-t border-slate-100 bg-rose-50/55 p-3 rounded-lg border border-rose-100">
                <div className="flex items-center gap-1.5 text-xs font-bold text-rose-800 mb-1 leading-none">
                  <ThumbsDown className="w-3.5 h-3.5 text-rose-500 shrink-0" />
                  <span>Weakest Priority: {weakestSection.name}</span>
                </div>
                <p className="text-3xs text-slate-600 leading-normal font-sans">
                  {weakestSection.details}
                </p>
              </div>
            )}
          </div>

        </div>
      ) : null}

      {/* General Stats summary strip */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-2xs">
          <div className="text-4xs font-mono font-bold text-slate-400 uppercase">Aspirant Average Accuracy</div>
          <div className="text-xl font-extrabold text-slate-900 mt-1">{averageAccuracy}%</div>
          <span className="text-5xs text-slate-400 font-mono">From correct answers matrix</span>
        </div>
        <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-2xs">
          <div className="text-4xs font-mono font-bold text-slate-400 uppercase font-sans">Total Mocks Logged</div>
          <div className="text-xl font-extrabold text-slate-900 mt-1">{mocks.length}</div>
          <span className="text-5xs text-slate-400 font-mono">Evaluations complete</span>
        </div>
        <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-2xs">
          <div className="text-4xs font-mono font-bold text-slate-400 uppercase">Top Score recorded</div>
          <div className="text-xl font-extrabold text-emerald-600 mt-1">
            {mocks.length > 0 ? Math.max(...mocks.map(m => m.totalScore)) : 0} <span className="text-xs font-normal text-slate-500">pts</span>
          </div>
          <span className="text-5xs text-slate-400 font-mono">Maximum target standard</span>
        </div>
        <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-2xs">
          <div className="text-4xs font-mono font-bold text-slate-400 uppercase font-sans">Top Percentile Est</div>
          <div className="text-xl font-extrabold text-indigo-600 mt-1 mt-1">
            {mocks.length > 0 ? Math.max(...mocks.map(m => m.percentileEstimate)) : 0}%ile
          </div>
          <span className="text-5xs text-slate-400 font-mono">Simulated scale estimate</span>
        </div>
      </div>

      {/* Mocks listing and table logs */}
      <div className="space-y-3">
        <h3 className="text-xs font-mono font-bold text-slate-400 uppercase tracking-widest">Mock scoring evaluations logs</h3>
        {mocks.length > 0 ? (
          mocks.map((mock) => {
            const accRate = getAccuracyRate(mock);
            return (
              <div 
                key={mock.id} 
                id={`mock-element-card-${mock.id}`}
                className="bg-white border-slate-200 border rounded-xl overflow-hidden shadow-2xs"
              >
                {/* Header row */}
                <div className="p-4 bg-slate-50/60 border-b border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div>
                    <h4 className="text-xs font-extrabold text-slate-900 leading-tight">{mock.name}</h4>
                    <span className="text-3xs font-mono font-bold text-slate-400 block mt-0.5">Attempted on {mock.date}</span>
                  </div>

                  <div className="flex items-center gap-3">
                    <span className="py-1 px-2.5 bg-emerald-50 text-emerald-800 border-emerald-200 border text-3xs font-semibold rounded font-mono">
                      {mock.totalScore} Total Pts • Est {mock.percentileEstimate}%ile
                    </span>
                    <button
                      onClick={() => onDeleteMock(mock.id)}
                      className="p-1 text-slate-400 hover:text-rose-600 rounded transition-colors"
                      title="Remove mock score entry"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

                {/* Score numbers and sections breakdown grids */}
                <div className="p-4 divide-y divide-slate-100 space-y-4">
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
                    <div>
                      <span className="text-5xs font-mono font-bold text-slate-400 uppercase leading-none block">VARC</span>
                      <span className="text-xs font-bold text-slate-800 block mt-1">{mock.varcScore} pts</span>
                    </div>
                    <div>
                      <span className="text-5xs font-mono font-bold text-slate-400 uppercase leading-none block">DILR</span>
                      <span className="text-xs font-bold text-slate-800 block mt-1">{mock.dilrScore} pts</span>
                    </div>
                    <div>
                      <span className="text-5xs font-mono font-bold text-slate-400 uppercase leading-none block">QA</span>
                      <span className="text-xs font-bold text-slate-800 block mt-1">{mock.qaScore} pts</span>
                    </div>
                    <div className="border-t sm:border-t-0 pt-2 sm:pt-0 border-slate-100">
                      <span className="text-5xs font-mono font-bold text-slate-400 uppercase leading-none block">Attempts & Accuracy</span>
                      <span className="text-xs font-extrabold text-slate-950 block mt-1">
                        {mock.corrects}/{mock.attempts} ({accRate}%)
                      </span>
                    </div>
                  </div>

                  {/* Mistakes summary */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-3.5">
                    <div className="bg-slate-50/55 p-3 rounded-lg border border-slate-100">
                      <span className="text-5xs font-mono font-bold text-rose-800 uppercase tracking-wider block mb-1">Bottlenecks & Mistakes</span>
                      <p className="text-xs text-slate-600 leading-normal">{mock.keyMistakes}</p>
                    </div>

                    <div className="bg-emerald-50/30 p-3 rounded-lg border border-emerald-100/50">
                      <span className="text-5xs font-mono font-bold text-emerald-800 uppercase tracking-wide block mb-1">Remedial Action plan</span>
                      <p className="text-xs text-slate-600 leading-normal">{mock.nextAction}</p>
                    </div>
                  </div>

                  {/* Generated Insights */}
                  {mock.attempts > 0 && (
                    <div className="mt-4 bg-indigo-50/50 rounded-lg p-4 border border-indigo-100">
                      <h5 className="text-xs font-bold text-indigo-900 mb-2 flex items-center"><Zap className="w-4 h-4 mr-1 text-indigo-500" /> Automated Assessment Insights</h5>
                      <ul className="space-y-2 text-xs text-slate-700">
                        <li className="flex items-start">
                           <span className="font-semibold text-slate-900 w-1/4">Priority Section:</span>
                           <span className="w-3/4">{generateInsights(mock).weakestSection}</span>
                        </li>
                        <li className="flex items-start">
                           <span className="font-semibold text-slate-900 w-1/4">Topics to Revise:</span>
                           <span className="w-3/4 text-indigo-700 font-medium">{generateInsights(mock).topicsReview}</span>
                        </li>
                        <li className="flex items-start">
                           <span className="font-semibold text-slate-900 w-1/4">Attempt Strategy:</span>
                           <span className="w-3/4">{generateInsights(mock).speedVsAccuracy}</span>
                        </li>
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            );
          })
        ) : (
          <div className="p-12 text-center text-xs text-slate-400 bg-white border border-slate-200 rounded-xl font-mono">
            No mock exam logs compiled yet. Add mock score sets above.
          </div>
        )}
      </div>

    </div>
  );
}
