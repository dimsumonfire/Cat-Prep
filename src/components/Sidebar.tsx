import React, { useState } from 'react';
import { 
  LayoutDashboard, 
  BookOpen, 
  History, 
  CalendarRange, 
  BarChart3, 
  Binary, 
  BookMarked, 
  AlertTriangle, 
  CheckSquare, 
  Menu, 
  X,
  ExternalLink,
  Info,
  PenTool,
  FilePlus,
  Wand2,
  LogOut,
  LogIn,
  Cloud,
  CloudOff
} from 'lucide-react';

interface SidebarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  user?: any;
  onGoogleSignIn?: () => void;
  onSignOut?: () => void;
}

export default function Sidebar({ 
  activeTab, 
  setActiveTab,
  user,
  onGoogleSignIn,
  onSignOut
}: SidebarProps) {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { id: 'dashboard', name: 'Dashboard', icon: LayoutDashboard },
    { id: 'blueprint', name: 'Exam Blueprint', icon: Info },
    { id: 'studyGuides', name: 'Study Guides', icon: BookOpen },
    { id: 'mockPractice', name: 'Mock Practice', icon: PenTool },
    { id: 'mockGenerator', name: 'AI Test Generator', icon: Wand2 },
    { id: 'paperImporter', name: 'Paper Importer', icon: FilePlus },
    { id: 'syllabus', name: 'Syllabus Tracker', icon: BookOpen },
    { id: 'papers', name: 'CAT Past Papers', icon: History },
    { id: 'studyPlan', name: '24-Week Plan', icon: CalendarRange },
    { id: 'mockAnalyzer', name: 'Mock Analyzer', icon: BarChart3 },
    { id: 'formulaSheet', name: 'Formula Vault', icon: Binary },
    { id: 'errorNotebook', name: 'Error Notebook', icon: AlertTriangle },
  ];

  return (
    <>
      {/* Mobile Top Header */}
      <header className="lg:hidden bg-white text-slate-900 px-4 py-3.5 flex items-center justify-between border-b border-slate-200 sticky top-0 z-50">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 rounded bg-indigo-600 flex items-center justify-center font-bold text-white text-xs">
            CAT
          </div>
          <div>
            <h1 className="text-xs font-bold tracking-tight text-slate-900 m-0 leading-tight">CAT Prep Dashboard</h1>
            <p className="text-4xs text-indigo-600 font-bold m-0 leading-none uppercase tracking-wider">Aspirant Workspace</p>
          </div>
        </div>
        
        <button 
          id="mobile-menu-toggle"
          onClick={() => setIsOpen(!isOpen)} 
          className="p-1.5 text-slate-500 hover:text-slate-900 hover:bg-slate-50 rounded-lg transition-colors border border-slate-200 bg-white"
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </header>

      {/* Sidebar Backdrop for Mobile */}
      {isOpen && (
        <div 
          className="lg:hidden fixed inset-0 bg-slate-950/40 backdrop-blur-xs z-40 transition-opacity"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Navigation Drawer */}
      <aside className={`
        fixed inset-y-0 left-0 z-40 lg:z-10
        w-64 bg-white border-r border-slate-200 flex flex-col justify-between
        transform lg:transform-none lg:static transition-transform duration-300 ease-in-out
        ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
      `}>
        {/* Header Branding */}
        <div className="p-6 border-b border-slate-100">
          <div className="flex items-center space-x-3">
            <div className="w-9 h-9 rounded bg-indigo-600 flex items-center justify-center font-extrabold text-white text-sm shadow-xs">
              CAT
            </div>
            <div>
              <h2 className="text-sm font-bold tracking-tight text-slate-800 mb-0.5 leading-tight">Prep Dashboard</h2>
              <p className="text-[10px] text-indigo-600 font-semibold tracking-wider uppercase leading-none">MBA Aspirant 2026</p>
            </div>
          </div>
          <div className="mt-3 py-1.5 px-2 bg-slate-50 rounded text-3xs text-slate-500 font-mono mt-4 flex justify-between items-center decoration-0 border border-slate-100">
            <span>Official Info:</span>
            <a 
              href="https://iimcat.ac.in" 
              target="_blank" 
              rel="noreferrer"
              className="text-indigo-600 hover:underline flex items-center gap-0.5 font-bold"
            >
              iimcat.ac.in <ExternalLink className="w-2.5 h-2.5 text-indigo-500" />
            </a>
          </div>
        </div>

        {/* Scrollable Navigation Items */}
        <nav className="flex-1 overflow-y-auto px-4 py-6 space-y-1 bg-white">
          {menuItems.map((item) => {
            const IconComponent = item.icon;
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                id={`nav-${item.id}`}
                onClick={() => {
                  setActiveTab(item.id);
                  setIsOpen(false);
                }}
                className={`
                  w-full flex items-center space-x-3 px-3.5 py-2.5 rounded-lg text-xs font-semibold tracking-wide transition-all duration-150
                  ${isActive 
                    ? 'bg-indigo-50 text-indigo-700 font-bold border-l-4 border-indigo-600 pl-2 rounded-r-lg shadow-3xs' 
                    : 'text-slate-600 hover:bg-slate-50 hover:text-indigo-700'}
                `}
              >
                <IconComponent className={`w-4 h-4 shrink-0 transition-transform duration-200 ${isActive ? 'scale-110 text-indigo-700' : 'text-slate-400'}`} />
                <span>{item.name}</span>
              </button>
            );
          })}
        </nav>

        {/* Firebase Synchronization Status & Google Auth Card */}
        <div className="px-4 py-3 mx-4 mb-2 bg-slate-50 border border-slate-200 rounded-lg">
          {user ? (
            <div className="space-y-1.5">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1.5 min-w-0">
                  <Cloud className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                  <span className="text-[10px] font-bold text-slate-700 font-mono truncate">Cloud Synced</span>
                </div>
                <button
                  onClick={onSignOut}
                  className="p-1 hover:text-rose-600 hover:bg-slate-100 rounded text-slate-400 transition-colors"
                  title="Sign Out"
                >
                  <LogOut className="w-3 h-3" />
                </button>
              </div>
              <p className="text-[10px] text-slate-500 truncate leading-none" title={user.email || user.uid}>
                {user.email || 'Google User'}
              </p>
            </div>
          ) : (
            <div className="space-y-2">
              <div className="flex items-center gap-1.5">
                <CloudOff className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                <span className="text-[10px] font-bold text-slate-700 font-mono">Offline Storage</span>
              </div>
              <p className="text-[10px] text-slate-500 leading-tight">
                Connect to securely sync mock practice attempts in Firebase memory.
              </p>
              <button
                onClick={onGoogleSignIn}
                className="w-full py-1.5 px-2 flex items-center justify-center gap-1.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded text-[10px] font-bold transition-colors shadow-3xs cursor-pointer"
              >
                <LogIn className="w-3 h-3" />
                <span>Sync with Google</span>
              </button>
            </div>
          )}
        </div>

        {/* Static Aspirant Disclaimer info Footer */}
        <div className="p-4 border-t border-slate-100 bg-slate-50/50 font-mono text-[10px] text-slate-500 leading-normal">
          <p className="mb-1 text-xs font-bold text-slate-700 uppercase tracking-wider">Section Guidelines:</p>
          <div className="space-y-0.5 text-slate-500">
            <p>VARC: 40m | 24 Qs</p>
            <p>DILR: 40m | 20 Qs</p>
            <p className="mb-2">QA: 40m | 22 Qs</p>
          </div>
          <p className="leading-tight text-[9px] text-slate-400 mt-2 border-t border-slate-100 pt-2 font-sans italic">
            Disclaimer: Syllabus is estimated based on past trend outlines. Refer official source for updates.
          </p>
        </div>
      </aside>
    </>
  );
}
