import { openDB, DBSchema } from 'idb';
import { MockQuestion } from '../types';

export interface ImportedPaper {
  id: string;
  year: string;
  slot: string;
  section: string;
  source: string;
  notes: string;
  dateImported: number;
}

interface AppDB extends DBSchema {
  papers: {
    key: string;
    value: ImportedPaper;
  };
  extractedQuestions: {
    key: string;
    value: MockQuestion & { paperId: string, reviewed: boolean };
    indexes: { 'by-paper': string; 'by-reviewed': string };
  };
}

const dbPromise = openDB<AppDB>('cat-prep-db', 1, {
  upgrade(db) {
    db.createObjectStore('papers', { keyPath: 'id' });
    const eqStore = db.createObjectStore('extractedQuestions', { keyPath: 'id' });
    eqStore.createIndex('by-paper', 'paperId');
    eqStore.createIndex('by-reviewed', 'reviewed'); // Actually a string 'true' or 'false' or index boolean natively
  },
});

export const localDB = {
  async savePaper(paper: ImportedPaper) {
    const db = await dbPromise;
    await db.put('papers', paper);
  },
  async getPapers() {
    const db = await dbPromise;
    return await db.getAll('papers');
  },
  async saveQuestion(q: MockQuestion & { paperId: string, reviewed: boolean }) {
    const db = await dbPromise;
    await db.put('extractedQuestions', q);
  },
  async saveQuestions(qs: (MockQuestion & { paperId: string, reviewed: boolean })[]) {
    const db = await dbPromise;
    const tx = db.transaction('extractedQuestions', 'readwrite');
    for (const q of qs) {
      void tx.store.put(q);
    }
    await tx.done;
  },
  async getQuestionsByPaper(paperId: string) {
    const db = await dbPromise;
    return await db.getAllFromIndex('extractedQuestions', 'by-paper', paperId);
  },
  async getAllQuestions() {
    const db = await dbPromise;
    return await db.getAll('extractedQuestions');
  },
  async deleteQuestion(id: string) {
    const db = await dbPromise;
    await db.delete('extractedQuestions', id);
  }
};
