import React from 'react';
import { BookOpen, Target, Clock, AlertCircle, Award, Layers, ShieldCheck, Flame, PieChart, Info } from 'lucide-react';

export default function BlueprintTab() {
  return (
    <div className="space-y-8">
      {/* Header Section */}
      <div>
        <h2 className="text-2xl font-bold tracking-tight text-slate-900 mb-1">Comprehensive CAT Exam Blueprint</h2>
        <p className="text-sm text-slate-500">
          A granular breakdown of exam structure, sub-topic distributions, sectional weights, and real-world percentile scoring targets.
        </p>
      </div>

      {/* Main Structure Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-slate-50 border border-slate-200 rounded-xl p-4">
          <span className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">Total Questions</span>
          <span className="text-2xl font-black text-slate-800">66 Questions</span>
          <span className="block text-[10px] text-slate-400 mt-1">Historically stable pattern</span>
        </div>
        <div className="bg-slate-50 border border-slate-200 rounded-xl p-4">
          <span className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">Total Duration</span>
          <span className="text-2xl font-black text-slate-800">120 Minutes</span>
          <span className="block text-[10px] text-slate-400 mt-1">Exactly 40 mins per section</span>
        </div>
        <div className="bg-slate-50 border border-slate-200 rounded-xl p-4">
          <span className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">Total Marks</span>
          <span className="text-2xl font-black text-slate-800">198 Marks</span>
          <span className="block text-[10px] text-slate-400 mt-1">3 Marks per clear response</span>
        </div>
        <div className="bg-slate-50 border border-slate-200 rounded-xl p-4">
          <span className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">Question Style</span>
          <span className="text-2xl font-black text-slate-800">MCQ & TITA</span>
          <span className="block text-[10px] text-slate-400 mt-1">Type-In-The-Answer has no penalty</span>
        </div>
      </div>

      {/* Deep Dive Sections */}
      <div className="space-y-6">
        <h3 className="text-lg font-bold text-slate-800 flex items-center gap-2">
          <Layers className="w-5 h-5 text-indigo-600" />
          Section-Wise Granular Syllabus & Budgeting
        </h3>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* VARC */}
          <div className="border border-slate-200 bg-white rounded-xl shadow-xs overflow-hidden flex flex-col">
            <div className="bg-indigo-50 border-b border-indigo-100 p-4 flex items-center justify-between">
              <div className="flex items-center space-x-2 text-indigo-700">
                <BookOpen className="w-5 h-5" />
                <h4 className="font-extrabold text-sm tracking-wide uppercase">Section 1: VARC</h4>
              </div>
              <span className="bg-indigo-100 text-indigo-800 text-xs px-2.5 py-1 rounded-full font-bold">24 Qs | 40 Mins</span>
            </div>
            
            <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
              <div>
                <p className="text-xs text-slate-500 mb-4 leading-relaxed">
                  Focuses on comprehensive readability, analytical reasoning, grammatical symmetry, and editorial text sequencing.
                </p>

                <div className="space-y-3">
                  <div className="bg-slate-50 p-2.5 rounded-lg border border-slate-100">
                    <div className="flex justify-between items-center text-xs font-semibold text-slate-700 mb-1">
                      <span>Reading Passages (RC)</span>
                      <span className="text-indigo-600">16 Questions</span>
                    </div>
                    <p className="text-[11px] text-slate-500 leading-normal">
                      4 Passages × 4 Questions each. Heavy vocabulary & critical inference over philosophical, science, and historical topics.
                    </p>
                  </div>

                  <div className="bg-slate-50 p-2.5 rounded-lg border border-slate-100">
                    <div className="flex justify-between items-center text-xs font-semibold text-slate-700 mb-1">
                      <span>Verbal Ability (VA)</span>
                      <span className="text-indigo-600">8 Questions</span>
                    </div>
                    <p className="text-[11px] text-slate-500 leading-normal">
                      Para Jumbles (3 Qs, TITA), Para Summary (3 Qs, MCQ), and Paragraph Completion/Odd-One-Out (2 Qs, MCQ/TITA).
                    </p>
                  </div>
                </div>
              </div>

              <div className="border-t border-slate-100 pt-4 mt-auto">
                <span className="block text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-1.5">Attempt Budgeting Guide</span>
                <div className="grid grid-cols-2 gap-2 text-xs text-slate-600">
                  <div className="bg-slate-50 p-2 rounded">
                    <span className="block text-[10px] text-slate-400">Passages (RC)</span>
                    <strong className="text-indigo-600">6-8 mins each</strong>
                  </div>
                  <div className="bg-slate-50 p-2 rounded">
                    <span className="block text-[10px] text-slate-400">Verbal (VA)</span>
                    <strong className="text-indigo-600">1.2 mins per Q</strong>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* DILR */}
          <div className="border border-slate-200 bg-white rounded-xl shadow-xs overflow-hidden flex flex-col">
            <div className="bg-pink-50 border-b border-pink-100 p-4 flex items-center justify-between">
              <div className="flex items-center space-x-2 text-pink-700">
                <Target className="w-5 h-5" />
                <h4 className="font-extrabold text-sm tracking-wide uppercase">Section 2: DILR</h4>
              </div>
              <span className="bg-pink-100 text-pink-800 text-xs px-2.5 py-1 rounded-full font-bold">20 Qs | 40 Mins</span>
            </div>
            
            <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
              <div>
                <p className="text-xs text-slate-500 mb-4 leading-relaxed">
                  Measures your ability to decode complex structural rules, tournament algorithms, logical grids, and compound data tables.
                </p>

                <div className="space-y-3">
                  <div className="bg-slate-50 p-2.5 rounded-lg border border-slate-100">
                    <div className="flex justify-between items-center text-xs font-semibold text-slate-700 mb-1">
                      <span>Logical Arrangements</span>
                      <span className="text-pink-600">10 Questions</span>
                    </div>
                    <p className="text-[11px] text-slate-500 leading-normal">
                      Complex circular/grid seating, scheduling, network maps, tournaments, and binary logic riddles.
                    </p>
                  </div>

                  <div className="bg-slate-50 p-2.5 rounded-lg border border-slate-100">
                    <div className="flex justify-between items-center text-xs font-semibold text-slate-700 mb-1">
                      <span>Data Interpretation</span>
                      <span className="text-pink-600">10 Questions</span>
                    </div>
                    <p className="text-[11px] text-slate-500 leading-normal">
                      Radar dashboards, overlapping Venn configurations, complex line metrics, and massive tables with missing values.
                    </p>
                  </div>
                </div>
              </div>

              <div className="border-t border-slate-100 pt-4 mt-auto">
                <span className="block text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-1.5">Attempt Budgeting Guide</span>
                <div className="grid grid-cols-2 gap-2 text-xs text-slate-600">
                  <div className="bg-slate-50 p-2 rounded">
                    <span className="block text-[10px] text-slate-400">Target Sets</span>
                    <strong className="text-pink-600">2 Complete sets</strong>
                  </div>
                  <div className="bg-slate-50 p-2 rounded">
                    <span className="block text-[10px] text-slate-400">Time per Set</span>
                    <strong className="text-pink-600">8-10 mins/set</strong>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* QA */}
          <div className="border border-slate-200 bg-white rounded-xl shadow-xs overflow-hidden flex flex-col">
            <div className="bg-emerald-50 border-b border-emerald-100 p-4 flex items-center justify-between">
              <div className="flex items-center space-x-2 text-emerald-700">
                <Clock className="w-5 h-5" />
                <h4 className="font-extrabold text-sm tracking-wide uppercase">Section 3: QA</h4>
              </div>
              <span className="bg-emerald-100 text-emerald-800 text-xs px-2.5 py-1 rounded-full font-bold">22 Qs | 40 Mins</span>
            </div>
            
            <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
              <div>
                <p className="text-xs text-slate-500 mb-4 leading-relaxed">
                  Assesses mathematical reasoning speed, logical manipulation of functions, geometry proofs, and arithmetic algorithms.
                </p>

                <div className="space-y-3">
                  <div className="bg-slate-50 p-2.5 rounded-lg border border-slate-100">
                    <div className="flex justify-between items-center text-xs font-semibold text-slate-700 mb-1">
                      <span>Arithmetic & Algebra</span>
                      <span className="text-emerald-600">14-16 Questions</span>
                    </div>
                    <p className="text-[11px] text-slate-500 leading-normal">
                      The core scoring foundation. Logarithms, ratios, mixtures, work-times, quadratics, equations, and sequences.
                    </p>
                  </div>

                  <div className="bg-slate-50 p-2.5 rounded-lg border border-slate-100">
                    <div className="flex justify-between items-center text-xs font-semibold text-slate-700 mb-1">
                      <span>Geometry & Modern Math</span>
                      <span className="text-emerald-600">6-8 Questions</span>
                    </div>
                    <p className="text-[11px] text-slate-500 leading-normal">
                      Circle/Triangle chord matrices, coordinate geometry, permutations, combinations, and probability distributions.
                    </p>
                  </div>
                </div>
              </div>

              <div className="border-t border-slate-100 pt-4 mt-auto">
                <span className="block text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-1.5">Attempt Budgeting Guide</span>
                <div className="grid grid-cols-2 gap-2 text-xs text-slate-600">
                  <div className="bg-slate-50 p-2 rounded">
                    <span className="block text-[10px] text-slate-400">Target Speed</span>
                    <strong className="text-emerald-600">1.8 mins per Q</strong>
                  </div>
                  <div className="bg-slate-50 p-2 rounded">
                    <span className="block text-[10px] text-slate-400">Strategy</span>
                    <strong className="text-emerald-600">Round 1 Scanning</strong>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* MCQ vs TITA Matrix Table */}
      <div className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-xs">
        <div className="bg-slate-50 border-b border-slate-200 p-4 flex items-center justify-between">
          <h3 className="font-bold text-slate-800 text-sm flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-slate-600" />
            MCQ vs TITA Marking Comparison Matrix
          </h3>
          <span className="text-[10px] text-slate-400 font-bold tracking-wider uppercase">Official Exam Policy</span>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm border-collapse">
            <thead>
              <tr className="border-b border-slate-200 bg-slate-50 text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                <th className="p-3 pl-4">Rule Metric</th>
                <th className="p-3">Multiple Choice Questions (MCQ)</th>
                <th className="p-3">Type-In-The-Answer (TITA)</th>
                <th className="p-3">Strategic Advice</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              <tr>
                <td className="p-3 pl-4 font-semibold text-slate-700 text-xs">Options Provided</td>
                <td className="p-3 text-slate-600 text-xs">Exactly 4 distinct radio selection triggers</td>
                <td className="p-3 text-slate-600 text-xs">None. Blank numeric input field on-screen</td>
                <td className="p-3 text-slate-500 text-[11px] leading-relaxed">MCQs can be back-solved by reverse testing options.</td>
              </tr>
              <tr>
                <td className="p-3 pl-4 font-semibold text-slate-700 text-xs">Correct Response</td>
                <td className="p-3 text-emerald-600 font-bold text-xs">+3 Marks</td>
                <td className="p-3 text-emerald-600 font-bold text-xs">+3 Marks</td>
                <td className="p-3 text-slate-500 text-[11px] leading-relaxed">Values match equally. Scaling is identical.</td>
              </tr>
              <tr>
                <td className="p-3 pl-4 font-semibold text-slate-700 text-xs">Incorrect Response</td>
                <td className="p-3 text-rose-600 font-bold text-xs">-1 Penalty</td>
                <td className="p-3 text-slate-500 font-bold text-xs">0 (No Penalty)</td>
                <td className="p-3 text-slate-500 text-[11px] leading-relaxed">Never leave a TITA blank! Always enter your best guess.</td>
              </tr>
              <tr>
                <td className="p-3 pl-4 font-semibold text-slate-700 text-xs">Unattempted Qs</td>
                <td className="p-3 text-slate-500 text-xs">0 Marks</td>
                <td className="p-3 text-slate-500 text-xs">0 Marks</td>
                <td className="p-3 text-slate-500 text-[11px] leading-relaxed">No penalties for skipping difficult topics.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Strategic Scaler & Targets */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="border border-slate-200 bg-white rounded-xl p-5 shadow-xs">
          <h3 className="font-bold text-sm text-slate-800 mb-4 flex items-center gap-2">
            <Award className="w-4 h-4 text-slate-600" />
            CAT Scaled Score vs Percentile Targets
          </h3>
          
          <div className="space-y-3 font-mono">
            <div className="flex justify-between items-center text-xs border-b border-slate-100 pb-2">
              <span className="font-sans font-semibold text-slate-700">99.5+ Percentile</span>
              <div className="text-right">
                <span className="block font-bold text-slate-800">~95+ Scaled Marks</span>
                <span className="text-[10px] text-slate-400">~32 Net Correct Questions</span>
              </div>
            </div>

            <div className="flex justify-between items-center text-xs border-b border-slate-100 pb-2">
              <span className="font-sans font-semibold text-slate-700">99.0+ Percentile</span>
              <div className="text-right">
                <span className="block font-bold text-slate-800">~82+ Scaled Marks</span>
                <span className="text-[10px] text-slate-400">~28 Net Correct Questions</span>
              </div>
            </div>

            <div className="flex justify-between items-center text-xs border-b border-slate-100 pb-2">
              <span className="font-sans font-semibold text-slate-700">95.0+ Percentile</span>
              <div className="text-right">
                <span className="block font-bold text-slate-800">~60+ Scaled Marks</span>
                <span className="text-[10px] text-slate-400">~20 Net Correct Questions</span>
              </div>
            </div>

            <div className="flex justify-between items-center text-xs pb-1">
              <span className="font-sans font-semibold text-slate-700">90.0+ Percentile</span>
              <div className="text-right">
                <span className="block font-bold text-slate-800">~48+ Scaled Marks</span>
                <span className="text-[10px] text-slate-400">~16 Net Correct Questions</span>
              </div>
            </div>
          </div>
          
          <div className="mt-4 bg-slate-50 border border-slate-100 p-2.5 rounded-lg flex items-start gap-2">
            <Info className="w-3.5 h-3.5 text-slate-400 shrink-0 mt-0.5" />
            <p className="text-[10px] font-sans text-slate-500 leading-normal">
              Note: Scaling and real-world scores fluctuate directly based on the difficulty deviation of individual slots. High difficulty levels reduce the relative marks required for the same percentile.
            </p>
          </div>
        </div>

        {/* Pro-Tips Strategy Card */}
        <div className="border-amber-200 bg-amber-50/70 border rounded-xl p-5 shadow-xs flex flex-col justify-between">
          <div>
            <h3 className="font-bold text-sm text-amber-900 mb-4 flex items-center gap-2">
              <Flame className="w-4 h-4 text-amber-600" />
              Strategic Scaling Rules
            </h3>
            
            <ul className="text-xs text-amber-800 space-y-3 list-disc pl-5">
              <li>
                <strong>Section Order Restriction:</strong> Manual switching is blocked. You must answer VARC (40m), then DILR (40m), and finally QA (40m) sequentially in sequence. Unused time does not roll over.
              </li>
              <li>
                <strong>Accuracy over Attempts:</strong> Since wrong MCQs reduce your score (negative scaling), targeting 85%+ accuracy is statistically superior to blind guessing.
              </li>
              <li>
                <strong>Calculators:</strong> On-screen mouse-driven calculators are provided, but lack shortcut bindings. Try to skip using it unless solving complex decimal compoundings.
              </li>
              <li>
                <strong>DILR Set Filtering:</strong> Devote your first 2-3 minutes of DILR analyzing all 4 sets. Rank them by transparency of clues, pick the easiest set, and solve it first to secure initial confidence.
              </li>
            </ul>
          </div>

          <div className="mt-4 pt-3 border-t border-amber-200/50 flex justify-between items-center text-[10px] text-amber-700 font-semibold uppercase tracking-wider">
            <span>Exam Blueprint Version: 2025/2026 Stable</span>
            <span>Est. 198 Max Marks</span>
          </div>
        </div>
      </div>
    </div>
  );
}

