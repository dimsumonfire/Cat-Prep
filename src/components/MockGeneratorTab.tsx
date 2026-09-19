import React, { useState, useEffect } from 'react';
import { Play, Settings2, Sparkles, RefreshCw, AlertCircle, Key } from 'lucide-react';
import { SectionType, MockQuestion } from '../types';
import { localDB } from '../lib/db';
import { db, auth } from '../lib/firebase';
import { setDoc, doc } from 'firebase/firestore';

interface MockGeneratorTabProps {
  onStartMock: (questions: MockQuestion[]) => void;
}

export const MockGeneratorTab = ({ onStartMock }: MockGeneratorTabProps) => {
  const [source, setSource] = useState<'bank' | 'ai'>('bank');
  const [mode, setMode] = useState<'full' | 'sectional'>('sectional');
  const [targetSection, setTargetSection] = useState<SectionType>('QA');
  const [selectedModel, setSelectedModel] = useState<'gemini-3.5-flash' | 'gemini-3.1-pro-preview'>('gemini-3.5-flash');
  
  const [configs, setConfigs] = useState({
    VARC: 24,
    DILR: 20,
    QA: 22
  });

  const [apiKey, setApiKey] = useState('');

  useEffect(() => {
    const saved = localStorage.getItem('cat_gemini_api_key');
    if (saved) setApiKey(saved);
  }, []);

  const handleApiKeyChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setApiKey(val);
    localStorage.setItem('cat_gemini_api_key', val);
  };

  const [isGenerating, setIsGenerating] = useState(false);
  const [statusText, setStatusText] = useState('');
  const [error, setError] = useState<string | null>(null);

  const generateAIBatch = async (section: SectionType, count: number): Promise<MockQuestion[]> => {
    // Gather existing topics to make sure AI doesn't duplicate them
    let excludeTopics: string[] = [];
    try {
      const allDB = await localDB.getAllQuestions();
      const examData = await import('../examData').then(m => m.CAT_PAST_QUESTIONS);
      const uniqueTopics = new Set<string>();
      allDB.forEach(q => { if (q.topic) uniqueTopics.add(q.topic); });
      examData.forEach(q => { if (q.topic) uniqueTopics.add(q.topic); });
      excludeTopics = Array.from(uniqueTopics);
    } catch (e) {
      console.warn("Failed to gather topics for exclusion", e);
    }

    // Generate in batches of Max 5 to avoid token timeouts + too huge JSON schemas
    const batches = Math.ceil(count / 5);
    const results: MockQuestion[] = [];
    
    for (let i = 0; i < batches; i++) {
        const batchSize = Math.min(5, count - i * 5);
        setStatusText(`Generating ${batchSize} questions for ${section} (Batch ${i+1}/${batches})...`);
        const res = await fetch("/api/generate-mock", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ 
                count: batchSize, 
                section, 
                difficulty: 'Medium', 
                apiKey, 
                model: selectedModel,
                excludeTopics: [...excludeTopics, ...results.map(r => r.topic).filter(Boolean)]
            })
        });
        
        if (!res.ok) {
            const err = await res.json();
            throw new Error(err.error || `HTTP Error ${res.status}`);
        }
        
        const data = await res.json();
        const formatted = data.map((q: any, idx: number) => ({
            ...q,
            id: `ai-gen-${Date.now()}-${i}-${idx}`,
            year: 'AI Generated',
            reviewed: true
        }));
        results.push(...formatted);
    }
    return results;
  };

  const getRandomQuestions = async (section: SectionType, count: number): Promise<MockQuestion[]> => {
      // Get all local DB qs + examData qs
      const allDB = await localDB.getAllQuestions();
      const approved = allDB.filter(q => q.reviewed);
      const examData = await import('../examData').then(m => m.CAT_PAST_QUESTIONS);
      
      const combined = [...examData, ...approved].filter(q => q.section === section);
      
      // Shuffle combined
      for (let i = combined.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [combined[i], combined[j]] = [combined[j], combined[i]];
      }
      return combined.slice(0, count);
  };

  const handleGenerate = async () => {
    setIsGenerating(true);
    setError(null);
    setStatusText('Preparing generator...');
    
    try {
        let finalQuestions: MockQuestion[] = [];
        
        if (source === 'ai') {
             if (mode === 'sectional') {
                const qs = await generateAIBatch(targetSection, configs[targetSection]);
                finalQuestions.push(...qs);
             } else {
                // Generate all 3 sections
                const varc = await generateAIBatch('VARC', configs.VARC);
                finalQuestions.push(...varc);
                const dilr = await generateAIBatch('DILR', configs.DILR);
                finalQuestions.push(...dilr);
                const qa = await generateAIBatch('QA', configs.QA);
                finalQuestions.push(...qa);
             }
             
             // Save to DB so they available in Practice Bank too
             setStatusText('Saving generated questions to practice bank...');
             const toSave = finalQuestions.map(q => ({ ...q, paperId: 'ai-generated-mock', reviewed: true }));
             await localDB.saveQuestions(toSave);

             // Save to Firebase
             if (auth.currentUser) {
               const uid = auth.currentUser.uid;
               try {
                 setStatusText('Syncing generated questions to Firebase...');
                 for (const q of toSave) {
                   await setDoc(doc(db, 'questions', q.id), {
                     uid,
                     paperId: q.paperId,
                     type: q.type,
                     section: q.section,
                     topic: q.topic,
                     difficulty: q.difficulty,
                     questionText: q.questionText,
                     options: q.options || [],
                     correctAnswer: q.correctAnswer || '',
                     explanation: q.explanation || '',
                     instructions: q.instructions || '',
                     createdAt: Date.now(),
                     updatedAt: Date.now()
                   });
                 }
               } catch (e) {
                 console.error("Firebase sync error for AI questions:", e);
               }
             }
        } else {
             if (mode === 'sectional') {
                setStatusText(`Fetching ${configs[targetSection]} questions from bank...`);
                const qs = await getRandomQuestions(targetSection, configs[targetSection]);
                if (qs.length < configs[targetSection]) {
                    setError(`Warning: Only found ${qs.length} questions for ${targetSection} in practice bank.`);
                }
                finalQuestions.push(...qs);
             } else {
                setStatusText('Compiling Full Mock from bank...');
                const varc = await getRandomQuestions('VARC', configs.VARC);
                const dilr = await getRandomQuestions('DILR', configs.DILR);
                const qa = await getRandomQuestions('QA', configs.QA);
                
                finalQuestions.push(...varc, ...dilr, ...qa);
             }
        }
        
        if (finalQuestions.length > 0) {
           onStartMock(finalQuestions);
        } else if (!error) {
           setError("Generated mock is empty. Please try expanding your bank or use AI Generation.");
        }
    } catch (e: any) {
        setError(e.message || "An error occurred during generation");
    } finally {
        setIsGenerating(false);
        setStatusText('');
    }
  };

  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      <div className="bg-white p-6 rounded-xl border border-slate-200">
        <h2 className="text-xl font-bold text-slate-800 flex items-center gap-2 mb-2">
           <Settings2 className="w-5 h-5 text-indigo-600" />
           Custom Mock Test Generator
        </h2>
        <p className="text-sm text-slate-600 mb-6">
           Configure and compile a custom mock test dynamically. You can draw from your existing practice bank (including imported papers), or use Gemini AI to generate completely new questions on the fly.
        </p>

        <div className="space-y-6">
           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
               <div className="p-4 border border-slate-200 rounded-lg bg-slate-50">
                  <h3 className="font-semibold text-sm text-slate-800 mb-3">1. Select Source</h3>
                  <div className="flex flex-col gap-2">
                     <label className="flex items-center gap-2 cursor-pointer">
                        <input type="radio" checked={source === 'bank'} onChange={() => setSource('bank')} className="text-indigo-600" />
                        <span className="text-sm text-slate-700">From Local Practice Bank</span>
                     </label>
                     <label className="flex items-center gap-2 cursor-pointer">
                        <input type="radio" checked={source === 'ai'} onChange={() => setSource('ai')} className="text-indigo-600" />
                        <div className="flex flex-col">
                            <span className="text-sm text-slate-700 flex items-center gap-1">Generate via AI <Sparkles className="w-3 h-3 text-amber-500" /></span>
                            <span className="text-xs text-slate-500">Takes longer, but creates new unique ones.</span>
                        </div>
                     </label>
                  </div>
               </div>

               <div className="p-4 border border-slate-200 rounded-lg bg-slate-50">
                  <h3 className="font-semibold text-sm text-slate-800 mb-3">2. Test Format</h3>
                  <div className="flex flex-col gap-2">
                     <label className="flex items-center gap-2 cursor-pointer">
                        <input type="radio" checked={mode === 'full'} onChange={() => setMode('full')} className="text-indigo-600" />
                        <span className="text-sm text-slate-700">Full Mock Test (All 3 Sections)</span>
                     </label>
                     <label className="flex items-center gap-2 cursor-pointer">
                        <input type="radio" checked={mode === 'sectional'} onChange={() => setMode('sectional')} className="text-indigo-600" />
                        <div className="flex flex-col">
                            <span className="text-sm text-slate-700">Sectional Mock</span>
                        </div>
                     </label>
                  </div>
               </div>
           </div>

           {mode === 'sectional' && (
              <div className="p-4 border border-slate-200 rounded-lg bg-white">
                 <h3 className="font-semibold text-sm text-slate-800 mb-3">Select Section</h3>
                 <select value={targetSection} onChange={e => setTargetSection(e.target.value as SectionType)} className="w-full text-sm border-slate-300 rounded-md p-2">
                    <option value="VARC">VARC (Verbal Ability & Reading Comp.)</option>
                    <option value="DILR">DILR (Data Interpretation & Logical Reas.)</option>
                    <option value="QA">QA (Quantitative Aptitude)</option>
                 </select>
              </div>
           )}

           <div className="p-4 border border-slate-200 rounded-lg bg-white">
              <h3 className="font-semibold text-sm text-slate-800 mb-3">Question Distribution</h3>
              <div className="grid grid-cols-3 gap-4">
                 <div className={`p-3 border rounded-md ${(mode === 'full' || targetSection === 'VARC') ? 'border-indigo-200 bg-indigo-50' : 'border-slate-100 bg-slate-50 opacity-50' }`}>
                    <label className="block text-xs font-semibold text-slate-600 mb-1">VARC Qs</label>
                    <input type="number" min="1" max="66" value={configs.VARC} onChange={e => setConfigs({...configs, VARC: Number(e.target.value)})} disabled={!(mode === 'full' || targetSection === 'VARC')} className="w-full bg-white border-slate-300 text-sm rounded p-1" />
                 </div>
                 <div className={`p-3 border rounded-md ${(mode === 'full' || targetSection === 'DILR') ? 'border-rose-200 bg-rose-50' : 'border-slate-100 bg-slate-50 opacity-50' }`}>
                    <label className="block text-xs font-semibold text-slate-600 mb-1">DILR Qs</label>
                    <input type="number" min="1" max="66" value={configs.DILR} onChange={e => setConfigs({...configs, DILR: Number(e.target.value)})} disabled={!(mode === 'full' || targetSection === 'DILR')} className="w-full bg-white border-slate-300 text-sm rounded p-1" />
                 </div>
                 <div className={`p-3 border rounded-md ${(mode === 'full' || targetSection === 'QA') ? 'border-emerald-200 bg-emerald-50' : 'border-slate-100 bg-slate-50 opacity-50' }`}>
                    <label className="block text-xs font-semibold text-slate-600 mb-1">QA Qs</label>
                    <input type="number" min="1" max="66" value={configs.QA} onChange={e => setConfigs({...configs, QA: Number(e.target.value)})} disabled={!(mode === 'full' || targetSection === 'QA')} className="w-full bg-white border-slate-300 text-sm rounded p-1" />
                 </div>
              </div>
              {source === 'ai' && (
                  <p className="text-xs text-amber-600 mt-2 flex items-center gap-1"><AlertCircle className="w-3 h-3"/> AI generates 5 items at a time due to model token limits.</p>
              )}
           </div>

           {error && (
               <div className="p-3 bg-red-50 text-red-700 text-sm border border-red-200 rounded text-center">
                   {error}
               </div>
           )}

           {source === 'ai' && (
              <div className="space-y-4">
                 {/* Model Selection */}
                 <div className="p-4 border border-slate-200 rounded-lg bg-white">
                    <h3 className="font-semibold text-sm text-slate-800 mb-2 flex items-center gap-2">
                      <Sparkles className="w-4 h-4 text-indigo-500" />
                      Select AI Model / Brain Optimization
                    </h3>
                    <p className="text-xs text-slate-500 mb-3">Choose the Gemini brain for generation. Both models are optimized to provide exceptional deep reasoning to replicate CAT 2018–2025 actual paper logic and math structures.</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <button
                        type="button"
                        onClick={() => setSelectedModel('gemini-3.5-flash')}
                        className={`p-3 border rounded-lg text-left transition-all ${
                          selectedModel === 'gemini-3.5-flash'
                            ? 'border-indigo-600 bg-indigo-50/50 text-indigo-700 font-semibold'
                            : 'border-slate-200 text-slate-600 hover:bg-slate-50'
                        }`}
                      >
                        <div className="text-sm font-semibold">gemini-3.5-flash</div>
                        <div className="text-[10px] text-slate-500 font-normal mt-1">Deep reasoning. Replicates CAT 2018-2025 multi-round logic puzzles, complex Venn set optimizations, and tricky inequalities perfectly.</div>
                      </button>
                      <button
                        type="button"
                        onClick={() => setSelectedModel('gemini-3.1-pro-preview')}
                        className={`p-3 border rounded-lg text-left transition-all ${
                          selectedModel === 'gemini-3.1-pro-preview'
                            ? 'border-indigo-600 bg-indigo-50/50 text-indigo-700 font-semibold'
                            : 'border-slate-200 text-slate-600 hover:bg-slate-50'
                        }`}
                      >
                        <div className="text-sm font-semibold">gemini-3.1-pro-preview (Account Tokens)</div>
                        <div className="text-[10px] text-slate-500 font-normal mt-1">Deep reasoning (Uses Account Tokens). Replicates CAT 2018-2025 multi-round logic puzzles, complex Venn set optimizations, and tricky modulus inequalities perfectly.</div>
                      </button>
                    </div>
                 </div>

                 {/* API Key */}
                 <div className="p-4 border border-slate-200 rounded-lg bg-white">
                    <h3 className="font-semibold text-sm text-slate-800 mb-2 flex items-center gap-2">
                      <Key className="w-4 h-4 text-slate-500" />
                      Gemini API Key
                    </h3>
                 <p className="text-xs text-slate-500 mb-3">Provide your own Google Gemini API key to avoid server rate limits. The key is stored locally in your browser.</p>
                 <input 
                    type="password" 
                    placeholder="AIzaSy..." 
                    value={apiKey} 
                    onChange={handleApiKeyChange}
                    className="w-full text-sm border-slate-300 rounded-md p-2 focus:ring-indigo-500 focus:border-indigo-500"
                 />
                 </div>
              </div>
           )}

           <div className="flex flex-col items-center border-t border-slate-100 pt-6">
              <button 
                 onClick={handleGenerate}
                 disabled={isGenerating}
                 className="flex items-center gap-2 px-8 py-3 bg-slate-900 hover:bg-slate-800 text-white font-bold rounded-lg shadow-sm transition disabled:opacity-50"
              >
                  {isGenerating ? <RefreshCw className="w-5 h-5 animate-spin" /> : <Play className="w-5 h-5 text-indigo-400" />}
                  {isGenerating ? 'Compiling Mock...' : 'Build & Start Mock Test'}
              </button>
              {isGenerating && statusText && <span className="text-xs text-slate-500 mt-2 font-medium">{statusText}</span>}
           </div>

        </div>
      </div>
    </div>
  );
};
