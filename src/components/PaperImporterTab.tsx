import React, { useState, useEffect } from 'react';
import { extractTextFromPDFFile, extractTextFromPDFUrl, parseQuestions, parseRawStructuredText } from '../lib/pdfExtractor';
import { localDB } from '../lib/db';
import { SectionType, MockQuestion } from '../types';
import { db, auth, handleFirestoreError, OperationType } from '../lib/firebase';
import { setDoc, doc } from 'firebase/firestore';

export const PaperImporterTab = () => {
  const [method, setMethod] = useState<'upload' | 'url' | 'text'>('upload');
  const [file, setFile] = useState<File | null>(null);
  const [url, setUrl] = useState('');
  const [rawText, setRawText] = useState('');
  const [year, setYear] = useState('2024');
  const [slot, setSlot] = useState('Slot 1');
  const [section, setSection] = useState<SectionType>('QA');
  
  const [isProcessing, setIsProcessing] = useState(false);
  const [step, setStep] = useState<'input' | 'review'>('input');
  const [extracted, setExtracted] = useState<any[]>([]);
  
  const [editingIndex, setEditingIndex] = useState<number | null>(null);
  const [editForm, setEditForm] = useState<any>(null);

  const handleProcess = async () => {
    setIsProcessing(true);
    let text = '';
    try {
      if (method === 'upload' && file) {
        text = await extractTextFromPDFFile(file);
      } else if (method === 'url' && url) {
        text = await extractTextFromPDFUrl(url);
      } else if (method === 'text') {
        text = rawText;
      }
      
      const parsed = method === 'text' 
        ? parseRawStructuredText(text)
        : parseQuestions(text, section, year);
        
      setExtracted(parsed);
      setStep('review');
    } catch (err: any) {
      alert("Extraction failed: " + err.message);
    }
    setIsProcessing(false);
  };

  const handleSaveToDB = async () => {
    // Generate paper ID
    const paperId = `paper-${year}-${slot}-${section}-${Date.now()}`;
    const paperMeta = { id: paperId, year, slot, section, source: file?.name || url, notes: '', dateImported: Date.now() };
    
    setIsProcessing(true);
    
    // Save to locally IndexedDB
    const qs = extracted.map(q => ({ ...q, paperId, reviewed: true }));
    await localDB.savePaper(paperMeta);
    await localDB.saveQuestions(qs);

    // Save to Firebase
    if (auth.currentUser) {
      const uid = auth.currentUser.uid;
      try {
        await setDoc(doc(db, 'papers', paperId), {
          uid,
          year,
          slot,
          source: paperMeta.source,
          notes: '',
          createdAt: Date.now(),
          updatedAt: Date.now()
        });

        for (const q of qs) {
          await setDoc(doc(db, 'questions', q.id), {
            uid,
            paperId,
            type: q.type,
            section: q.section,
            topic: q.topic,
            difficulty: q.difficulty,
            questionText: q.questionText,
            options: q.options || [],
            correctAnswer: q.correctAnswer || '',
            explanation: q.explanation || '',
            createdAt: Date.now(),
            updatedAt: Date.now()
          });
        }
      } catch(e) {
        // Fallback gracefully if permissions have issues
        console.error("Firebase sync error", e);
      }
    }
    
    setIsProcessing(false);
    alert('Import successful! Questions are now in practice bank.');
    setStep('input');
    setExtracted([]);
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-slate-800 tracking-tight">Paper Importer</h2>
      </div>

      <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-4">
        <p className="text-sm text-yellow-700">
          <strong>Notice:</strong> PDF extraction may not be perfect. Please review extracted questions before adding them to your practice bank. Support non-copyrighted or personal study material.
        </p>
      </div>

      {step === 'input' && (
        <div className="bg-white p-6 rounded-xl border border-slate-200">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-1">Source Method</label>
                <div className="flex gap-4">
                  <label className="flex items-center gap-2 text-sm">
                    <input type="radio" checked={method === 'upload'} onChange={() => setMethod('upload')} className="text-indigo-600 focus:ring-indigo-500" />
                    Local File
                  </label>
                  <label className="flex items-center gap-2 text-sm">
                    <input type="radio" checked={method === 'url'} onChange={() => setMethod('url')} className="text-indigo-600 focus:ring-indigo-500" />
                    Public URL
                  </label>
                  <label className="flex items-center gap-2 text-sm">
                    <input type="radio" checked={method === 'text'} onChange={() => setMethod('text')} className="text-indigo-600 focus:ring-indigo-500" />
                    Raw Text
                  </label>
                </div>
              </div>

              {method === 'upload' ? (
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-1">Upload PDF</label>
                  <input type="file" accept="application/pdf" onChange={e => setFile(e.target.files?.[0] || null)} className="w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-indigo-50 file:text-indigo-700 hover:file:bg-indigo-100" />
                </div>
              ) : method === 'url' ? (
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-1">Enter Public PDF URL</label>
                  <input type="url" value={url} onChange={e => setUrl(e.target.value)} placeholder="https://..." className="w-full text-sm border-slate-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500" />
                  <p className="text-xs text-slate-500 mt-1">Make sure the URL directly serves a PDF file without strict CORS restrictions.</p>
                </div>
              ) : (
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-1">Paste Raw Structured Text</label>
                  <textarea value={rawText} onChange={e => setRawText(e.target.value)} placeholder="---QUESTION---\n..." className="w-full text-sm border-slate-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500" rows={6}></textarea>
                </div>
              )}
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-1">Year</label>
                <select value={year} onChange={e => setYear(e.target.value)} className="w-full text-sm border-slate-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500">
                  <option value="2025">2025 (Forecast)</option>
                  <option value="2024">2024</option>
                  <option value="2023">2023</option>
                  <option value="2022">2022</option>
                  <option value="2021">2021</option>
                </select>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-1">Slot</label>
                  <select value={slot} onChange={e => setSlot(e.target.value)} className="w-full text-sm border-slate-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500">
                    <option value="Slot 1">Slot 1</option>
                    <option value="Slot 2">Slot 2</option>
                    <option value="Slot 3">Slot 3</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-1">Section</label>
                  <select value={section} onChange={e => setSection(e.target.value as SectionType)} className="w-full text-sm border-slate-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500">
                    <option value="VARC">VARC</option>
                    <option value="DILR">DILR</option>
                    <option value="QA">QA</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-6 flex justify-end">
            <button 
              onClick={handleProcess} 
              disabled={isProcessing || (method === 'upload' ? !file : method === 'url' ? !url : !rawText.trim())}
              className="px-4 py-2 bg-indigo-600 text-white text-sm font-semibold rounded-md shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:opacity-50"
            >
              {isProcessing ? 'Processing PDF...' : 'Extract text & Process Questions'}
            </button>
          </div>
        </div>
      )}

      {step === 'review' && (
        <div className="bg-white p-6 rounded-xl border border-slate-200">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-bold text-slate-800">Manual Review Queue ({extracted.length} blocks found)</h3>
            <div className="flex gap-2">
               <button onClick={() => setStep('input')} className="px-3 py-1.5 text-sm font-medium text-slate-700 bg-white border border-slate-300 rounded-md hover:bg-slate-50">Cancel</button>
               <button onClick={handleSaveToDB} disabled={isProcessing || extracted.length === 0} className="px-3 py-1.5 text-sm font-medium text-white bg-indigo-600 rounded-md hover:bg-indigo-500 disabled:opacity-50">
                {isProcessing ? 'Saving...' : 'Approve & Save to Practice Bank'}
               </button>
            </div>
          </div>
          
          <div className="space-y-4 max-h-[600px] overflow-y-auto pr-2">
            {extracted.map((q, idx) => (
               <div key={q.id} className="border border-slate-200 rounded-lg p-4 bg-slate-50 relative group">
                  {editingIndex === idx ? (
                    <div className="space-y-3">
                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1">Question Text</label>
                        <textarea value={editForm?.questionText || ''} onChange={e => setEditForm({...editForm, questionText: e.target.value})} className="w-full text-sm border-slate-300 rounded-md" rows={4} />
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                         <div>
                          <label className="block text-xs font-semibold text-slate-700 mb-1">Topic</label>
                          <input type="text" value={editForm?.topic || ''} onChange={e => setEditForm({...editForm, topic: e.target.value})} className="w-full text-sm border-slate-300 rounded-md" />
                         </div>
                         <div>
                          <label className="block text-xs font-semibold text-slate-700 mb-1">Correct Answer</label>
                          <input type="text" value={editForm?.correctAnswer || ''} onChange={e => setEditForm({...editForm, correctAnswer: e.target.value})} className="w-full text-sm border-slate-300 rounded-md" />
                         </div>
                      </div>
                      <div className="flex justify-end gap-2 pt-2">
                        <button onClick={() => setEditingIndex(null)} className="px-2 py-1 text-xs bg-slate-200 rounded text-slate-800 font-medium">Cancel</button>
                        <button onClick={() => {
                          const newEx = [...extracted];
                          newEx[idx] = editForm;
                          setExtracted(newEx);
                          setEditingIndex(null);
                        }} className="px-2 py-1 text-xs bg-emerald-600 text-white rounded font-medium">Save Block</button>
                      </div>
                    </div>
                  ) : (
                    <>
                      <div className="flex justify-between items-start mb-2">
                        <span className="text-xs font-bold uppercase tracking-wide text-indigo-600">{q.topic} • {q.type}</span>
                        <div className="opacity-0 group-hover:opacity-100 transition-opacity flex gap-2">
                          <button onClick={() => { setEditForm(q); setEditingIndex(idx); }} className="text-xs text-blue-600 hover:underline font-medium">Edit</button>
                          <button onClick={() => setExtracted(extracted.filter((_, i) => i !== idx))} className="text-xs text-red-600 hover:underline font-medium">Delete</button>
                        </div>
                      </div>
                      <div className="text-sm text-slate-800 whitespace-pre-wrap">{q.questionText}</div>
                    </>
                  )}
               </div>
            ))}
            {extracted.length === 0 && (
              <div className="p-8 text-center text-slate-500">No content extracted or all blocks deleted.</div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
