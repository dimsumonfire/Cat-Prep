import React, { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import { db, auth } from './lib/firebase';
import { signInAnonymously, onAuthStateChanged, GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth';
import { doc, setDoc, getDocs, collection, query, where } from 'firebase/firestore';
import DashboardTab from './components/DashboardTab';
import SyllabusTab from './components/SyllabusTab';
import PapersTab from './components/PapersTab';
import StudyPlanTab from './components/StudyPlanTab';
import MockAnalyzerTab from './components/MockAnalyzerTab';
import FormulaTab from './components/FormulaTab';
import ErrorTab from './components/ErrorTab';
import BlueprintTab from './components/BlueprintTab';
import MockPracticeTab from './components/MockPracticeTab';
import StudyGuidesTab from './components/StudyGuidesTab';
import { PaperImporterTab } from './components/PaperImporterTab';
import { MockGeneratorTab } from './components/MockGeneratorTab';

import { 
  DailySyllabusItem, 
  PYPAttempt, 
  WeeklyStudyPlan, 
  MockTest, 
  Formula, 
  ErrorNotebookEntry, 
  QuestionAttempt
} from './types';

import { 
  STARTER_DAILY_SYLLABUS, 
  STARTER_PYP_ATTEMPTS, 
  STARTER_MOCKS, 
  STARTER_FORMULAS, 
  STARTER_ERRORS, 
  STARTER_WEEKLY_PLAN 
} from './starterData';

export default function App() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [user, setUser] = useState<any>(null);

  // Core States
  const [syllabusItems, setSyllabusItems] = useState<DailySyllabusItem[]>([]);
  const [pypAttempts, setPypAttempts] = useState<PYPAttempt[]>([]);
  const [questionAttempts, setQuestionAttempts] = useState<QuestionAttempt[]>([]);
  const [mocks, setMocks] = useState<MockTest[]>([]);
  const [formulas, setFormulas] = useState<Formula[]>([]);
  const [errors, setErrors] = useState<ErrorNotebookEntry[]>([]);
  const [weeklyPlan, setWeeklyPlan] = useState<WeeklyStudyPlan[]>([]);

  // Confirmation Modal State
  const [confirmModal, setConfirmModal] = useState<{
    isOpen: boolean;
    title: string;
    message: string;
    onConfirm: () => void;
  } | null>(null);

  const triggerConfirm = (title: string, message: string, onConfirm: () => void) => {
    setConfirmModal({
      isOpen: true,
      title,
      message,
      onConfirm: () => {
        onConfirm();
        setConfirmModal(null);
      }
    });
  };

  // 1. Initial State Loading on Mount
  useEffect(() => {
    // Daily Syllabus Items
    const localSyllabus = localStorage.getItem('cat_daily_syllabus');
    if (localSyllabus) {
      try { setSyllabusItems(JSON.parse(localSyllabus)); } catch (e) { setSyllabusItems(STARTER_DAILY_SYLLABUS); }
    } else {
      setSyllabusItems(STARTER_DAILY_SYLLABUS);
      localStorage.setItem('cat_daily_syllabus', JSON.stringify(STARTER_DAILY_SYLLABUS));
    }

    // Past Paper Attempts
    const localAttempts = localStorage.getItem('cat_pyp_attempts');
    if (localAttempts) {
      try { setPypAttempts(JSON.parse(localAttempts)); } catch (e) { setPypAttempts(STARTER_PYP_ATTEMPTS); }
    } else {
      setPypAttempts(STARTER_PYP_ATTEMPTS);
      localStorage.setItem('cat_pyp_attempts', JSON.stringify(STARTER_PYP_ATTEMPTS));
    }

    // Question Attempts
    const localQuestionAttempts = localStorage.getItem('cat_question_attempts');
    if (localQuestionAttempts) {
       try { setQuestionAttempts(JSON.parse(localQuestionAttempts)); } catch (e) { setQuestionAttempts([]); }
    } else {
       setQuestionAttempts([]);
    }

    // Mock Tests
    const localMocks = localStorage.getItem('cat_mocks');
    if (localMocks) {
      try { setMocks(JSON.parse(localMocks)); } catch (e) { setMocks(STARTER_MOCKS); }
    } else {
      setMocks(STARTER_MOCKS);
      localStorage.setItem('cat_mocks', JSON.stringify(STARTER_MOCKS));
    }

    // Formulas
    const localFormulas = localStorage.getItem('cat_formulas');
    if (localFormulas) {
      try { setFormulas(JSON.parse(localFormulas)); } catch (e) { setFormulas(STARTER_FORMULAS); }
    } else {
      setFormulas(STARTER_FORMULAS);
      localStorage.setItem('cat_formulas', JSON.stringify(STARTER_FORMULAS));
    }

    // Errors Notebook
    const localErrors = localStorage.getItem('cat_errors');
    if (localErrors) {
      try { setErrors(JSON.parse(localErrors)); } catch (e) { setErrors(STARTER_ERRORS); }
    } else {
      setErrors(STARTER_ERRORS);
      localStorage.setItem('cat_errors', JSON.stringify(STARTER_ERRORS));
    }

    // Weekly study plan calendar
    const localWeeklyPlan = localStorage.getItem('cat_weekly_plan');
    if (localWeeklyPlan) {
      try { setWeeklyPlan(JSON.parse(localWeeklyPlan)); } catch (e) { setWeeklyPlan(STARTER_WEEKLY_PLAN); }
    } else {
      setWeeklyPlan(STARTER_WEEKLY_PLAN);
      localStorage.setItem('cat_weekly_plan', JSON.stringify(STARTER_WEEKLY_PLAN));
    }
  }, []);

  // 2. Synchronization Updates Handlers
  const handleUpdateSyllabusItem = (updatedItem: DailySyllabusItem) => {
    const next = syllabusItems.map(item => item.id === updatedItem.id ? updatedItem : item);
    setSyllabusItems(next);
    localStorage.setItem('cat_daily_syllabus', JSON.stringify(next));
  };

  const handleAddAttempt = (newAttempt: PYPAttempt) => {
    const next = [newAttempt, ...pypAttempts];
    setPypAttempts(next);
    localStorage.setItem('cat_pyp_attempts', JSON.stringify(next));
  };

  const handleUpdateAttempt = (updatedAttempt: PYPAttempt) => {
    const next = pypAttempts.map(a => a.id === updatedAttempt.id ? updatedAttempt : a);
    setPypAttempts(next);
    localStorage.setItem('cat_pyp_attempts', JSON.stringify(next));
  };

  const handleDeleteAttempt = (id: string) => {
    triggerConfirm(
      'Remove Attempt Record',
      'Are you sure you want to remove this historical exam attempt record?',
      () => {
        const next = pypAttempts.filter(a => a.id !== id);
        setPypAttempts(next);
        localStorage.setItem('cat_pyp_attempts', JSON.stringify(next));
      }
    );
  };

  // Firebase Auth & Cloud Firestore Attempts Sync Hook
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      setUser(currentUser);
      if (currentUser) {
        try {
          const q = query(collection(db, 'attempts'), where('uid', '==', currentUser.uid));
          const snapshot = await getDocs(q);
          const fbAttempts: QuestionAttempt[] = [];
          snapshot.forEach((docSnap) => {
            const data = docSnap.data();
            fbAttempts.push({
              id: docSnap.id,
              questionId: data.questionId,
              date: new Date(data.createdAt || Date.now()).toISOString(),
              section: data.section || 'QA',
              topic: data.topic || '',
              difficulty: data.difficulty || 'Medium',
              isCorrect: data.status === 'Correct' ? true : data.status === 'Wrong' ? false : null,
              timeTaken: data.timeTaken || 0,
              isMarkedForReview: data.markForReview ?? false,
              notes: data.notes || '',
            });
          });

          const localQuestionAttempts = localStorage.getItem('cat_question_attempts');
          let merged: QuestionAttempt[] = [];
          if (localQuestionAttempts) {
            try {
              const localParsed: QuestionAttempt[] = JSON.parse(localQuestionAttempts);
              const existingIds = new Set(fbAttempts.map(a => a.id));
              merged = [...fbAttempts, ...localParsed.filter(a => !existingIds.has(a.id))];
            } catch (e) {
              merged = fbAttempts;
            }
          } else {
            merged = fbAttempts;
          }
          
          setQuestionAttempts(merged);
          localStorage.setItem('cat_question_attempts', JSON.stringify(merged));
        } catch (err) {
          console.error("Error loading attempts from Firebase:", err);
        }
      } else {
        signInAnonymously(auth).catch((error) => {
          // If anonymous sign-in is restricted by admin rules, log it constructively or silently fall back to localStorage
          console.warn("Anonymous registration restricted in Firebase. Application will use fully featured local offline memory.", error.message);
        });
      }
    });
    return () => unsubscribe();
  }, []);

  const handleGoogleSignIn = async () => {
    try {
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider);
    } catch (error: any) {
      console.warn("Google sign in restricted or interrupted:", error.message);
      alert("Sign-in with Google was interrupted: " + error.message);
    }
  };

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      setUser(null);
    } catch (error: any) {
      console.warn("Sign out failed:", error.message);
    }
  };

  const handleAddQuestionAttempt = async (newAttempt: QuestionAttempt) => {
    const next = [newAttempt, ...questionAttempts];
    setQuestionAttempts(next);
    localStorage.setItem('cat_question_attempts', JSON.stringify(next));

    if (auth.currentUser) {
      try {
        const uid = auth.currentUser.uid;
        const createdAt = new Date(newAttempt.date).getTime() || Date.now();
        const status = newAttempt.isCorrect === true ? 'Correct' : newAttempt.isCorrect === false ? 'Wrong' : 'Skipped';

        await setDoc(doc(db, 'attempts', newAttempt.id), {
          uid,
          questionId: newAttempt.questionId,
          status,
          createdAt,
          updatedAt: Date.now(),
          section: newAttempt.section,
          topic: newAttempt.topic || '',
          difficulty: newAttempt.difficulty || 'Medium',
          timeTaken: newAttempt.timeTaken,
          markForReview: newAttempt.isMarkedForReview,
          notes: newAttempt.notes || ''
        });
      } catch (err) {
        console.error("Error saving attempt to Firebase Firestore:", err);
      }
    }
  };

  const handleUpdateWeek = (updatedWeek: WeeklyStudyPlan) => {
    const next = weeklyPlan.map(w => w.week === updatedWeek.week ? updatedWeek : w);
    setWeeklyPlan(next);
    localStorage.setItem('cat_weekly_plan', JSON.stringify(next));
  };

  const handleAddMock = (newMock: MockTest) => {
    const next = [...mocks, newMock];
    setMocks(next);
    localStorage.setItem('cat_mocks', JSON.stringify(next));
  };

  const handleDeleteMock = (id: string) => {
    triggerConfirm(
      'Delete Mock Score Entry',
      'Are you sure you want to delete this mock log entry and its score records?',
      () => {
        const next = mocks.filter(m => m.id !== id);
        setMocks(next);
        localStorage.setItem('cat_mocks', JSON.stringify(next));
      }
    );
  };

  const handleToggleFormulaRevised = (id: string) => {
    const next = formulas.map(f => {
      if (f.id === id) {
        const nextRevised = !f.revised;
        return {
          ...f,
          revised: nextRevised,
          lastRevisedDate: nextRevised ? new Date().toISOString().split('T')[0] : undefined
        };
      }
      return f;
    });
    setFormulas(next);
    localStorage.setItem('cat_formulas', JSON.stringify(next));
  };

  const handleAddError = (newEntry: ErrorNotebookEntry) => {
    const next = [newEntry, ...errors];
    setErrors(next);
    localStorage.setItem('cat_errors', JSON.stringify(next));
  };

  const handleUpdateError = (updatedEntry: ErrorNotebookEntry) => {
    const next = errors.map(e => e.id === updatedEntry.id ? updatedEntry : e);
    setErrors(next);
    localStorage.setItem('cat_errors', JSON.stringify(next));
  };

  const handleDeleteError = (id: string) => {
    triggerConfirm(
      'Delete Error Entry',
      'Are you sure you want to delete this error notebook entry?',
      () => {
        const next = errors.filter(e => e.id !== id);
        setErrors(next);
        localStorage.setItem('cat_errors', JSON.stringify(next));
      }
    );
  };

  // 3. Backup Management Functions
  const handleExportBackup = async () => {
    const importedPapers = await import('./lib/db').then(m => m.localDB.getPapers());
    const extractedQuestions = await import('./lib/db').then(m => m.localDB.getAllQuestions());

    const stateObj = {
      syllabusItems,
      pypAttempts,
      questionAttempts,
      mocks,
      formulas,
      errors,
      weeklyPlan,
      importedPapers,
      extractedQuestions
    };

    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(stateObj, null, 2));
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute("href", dataStr);
    downloadAnchor.setAttribute("download", "cat_prep_dashboard_backup.json");
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
  };

  const handleImportBackup = async (jsonDataText: string): Promise<boolean> => {
    try {
      const parsedData = JSON.parse(jsonDataText);
      
      // Perform structural validation checks
      const requiredKeys = ['syllabusItems', 'pypAttempts', 'mocks', 'formulas', 'errors', 'weeklyPlan'];
      const hasAllKeys = requiredKeys.every(k => Object.prototype.hasOwnProperty.call(parsedData, k));

      if (!hasAllKeys) return false;

      // Update states
      setSyllabusItems(parsedData.syllabusItems);
      setPypAttempts(parsedData.pypAttempts);
      if (parsedData.questionAttempts) {
        setQuestionAttempts(parsedData.questionAttempts);
      }
      setMocks(parsedData.mocks);
      setFormulas(parsedData.formulas);
      setErrors(parsedData.errors);
      setWeeklyPlan(parsedData.weeklyPlan);

      // Save to localStorage
      localStorage.setItem('cat_daily_syllabus', JSON.stringify(parsedData.syllabusItems));
      localStorage.setItem('cat_pyp_attempts', JSON.stringify(parsedData.pypAttempts));
      if (parsedData.questionAttempts) {
        localStorage.setItem('cat_question_attempts', JSON.stringify(parsedData.questionAttempts));
      }
      localStorage.setItem('cat_mocks', JSON.stringify(parsedData.mocks));
      localStorage.setItem('cat_formulas', JSON.stringify(parsedData.formulas));
      localStorage.setItem('cat_errors', JSON.stringify(parsedData.errors));
      localStorage.setItem('cat_weekly_plan', JSON.stringify(parsedData.weeklyPlan));

      return true;
    } catch (e) {
      return false;
    }
  };

  // 4. Tab Routing Renderer
  const renderActiveTab = () => {
    switch (activeTab) {
      case 'dashboard':
        return (
          <DashboardTab
            syllabusItems={syllabusItems}
            mocks={mocks}
            weeklyPlan={weeklyPlan}
            attempts={questionAttempts}
            errors={errors}
            setActiveTab={setActiveTab}
            onImportBackup={handleImportBackup}
            onExportBackup={handleExportBackup}
          />
        );
      case 'blueprint':
        return <BlueprintTab />;
      case 'studyGuides':
        return <StudyGuidesTab />;
      case 'mockPractice':
        return (
          <MockPracticeTab 
             attempts={questionAttempts} 
             onAddAttempt={handleAddQuestionAttempt} 
             onAddToErrorNotebook={(questionId, section, topic) => {
               setActiveTab('errorNotebook');
             }} 
          />
        );
      case 'paperImporter':
        return <PaperImporterTab />;
      case 'mockGenerator':
        return (
          <MockGeneratorTab 
            onStartMock={(questions) => {
               // We would ideally store these questions and pass to mockPractice or change their mode
               // For now, jump to practice tab, the generated questions will be in localDB.
               setActiveTab('mockPractice');
            }} 
          />
        );
      case 'syllabus':
        return <SyllabusTab syllabusItems={syllabusItems} onUpdateSyllabusItem={handleUpdateSyllabusItem} />;
      case 'papers':
        return (
          <PapersTab
            attempts={pypAttempts}
            onAddAttempt={handleAddAttempt}
            onUpdateAttempt={handleUpdateAttempt}
            onDeleteAttempt={handleDeleteAttempt}
            setActiveTab={setActiveTab}
          />
        );
      case 'studyPlan':
        return <StudyPlanTab weeklyPlan={weeklyPlan} onUpdateWeek={handleUpdateWeek} />;
      case 'mockAnalyzer':
        return <MockAnalyzerTab mocks={mocks} onAddMock={handleAddMock} onDeleteMock={handleDeleteMock} />;
      case 'formulaSheet':
        return <FormulaTab formulas={formulas} onToggleFormulaRevised={handleToggleFormulaRevised} />;
      case 'errorNotebook':
        return (
          <ErrorTab
            errors={errors}
            onAddError={handleAddError}
            onUpdateError={handleUpdateError}
            onDeleteError={handleDeleteError}
          />
        );
      default:
        return <div className="text-sm font-mono text-slate-400">Section not found.</div>;
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col lg:flex-row antialiased font-sans text-slate-900 transition-colors">
      
      {/* Dynamic responsive Navigation sidebar drawer */}
      <Sidebar 
        activeTab={activeTab} 
        setActiveTab={setActiveTab} 
        user={user}
        onGoogleSignIn={handleGoogleSignIn}
        onSignOut={handleSignOut}
      />

      {/* Primary Workspace Scroll wrapper channel */}
      <main className="flex-1 overflow-y-auto px-4 py-6 md:p-8 max-w-7xl mx-auto w-full">
        {renderActiveTab()}
      </main>

      {/* Premium Custom Confirmation Modal */}
      {confirmModal && confirmModal.isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-200" id="global-confirm-modal">
          <div className="bg-white rounded-xl shadow-xl border border-slate-200 max-w-md w-full overflow-hidden animate-in zoom-in-95 duration-200">
            <div className="p-6">
              <h3 className="text-lg font-bold text-slate-900 mb-2">{confirmModal.title}</h3>
              <p className="text-sm text-slate-500 leading-relaxed mb-6">{confirmModal.message}</p>
              <div className="flex justify-end gap-3">
                <button
                  onClick={() => setConfirmModal(null)}
                  className="px-4 py-2 border border-slate-200 hover:bg-slate-50 text-slate-750 text-sm font-semibold rounded-lg transition-colors cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  onClick={() => confirmModal.onConfirm()}
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
