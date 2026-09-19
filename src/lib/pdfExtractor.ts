import * as pdfjsLib from 'pdfjs-dist';
// Configure worker
// @ts-ignore
import pdfjsWorker from 'pdfjs-dist/build/pdf.worker.mjs?url';
pdfjsLib.GlobalWorkerOptions.workerSrc = pdfjsWorker;

export async function extractTextFromPDFFile(file: File): Promise<string> {
  const arrayBuffer = await file.arrayBuffer();
  return extractTextFromArrayBuffer(arrayBuffer);
}

export async function extractTextFromPDFUrl(url: string): Promise<string> {
  const response = await fetch(url);
  const arrayBuffer = await response.arrayBuffer();
  return extractTextFromArrayBuffer(arrayBuffer);
}

async function extractTextFromArrayBuffer(buffer: ArrayBuffer): Promise<string> {
  const pdf = await pdfjsLib.getDocument({ data: buffer }).promise;
  let fullText = '';
  for (let i = 1; i <= pdf.numPages; i++) {
    const page = await pdf.getPage(i);
    const content = await page.getTextContent();
    const strings = content.items.map((item: any) => item.str);
    fullText += strings.join(' ') + '\n\n---PAGE_BREAK---\n\n';
  }
  return fullText;
}

export function parseRawStructuredText(rawText: string) {
  const blocks = rawText.split('---QUESTION---').map(s => s.trim()).filter(Boolean);
  const questions: any[] = [];
  let idCounter = 1;

  for (const block of blocks) {
    try {
      const typeMatch = block.match(/Type:\s*(.*)/i);
      const type = typeMatch ? typeMatch[1].trim() : 'MCQ';

      const sectionMatch = block.match(/Section:\s*(.*)/i);
      const section = sectionMatch ? sectionMatch[1].trim() : 'VARC';

      const topicMatch = block.match(/Topic:\s*(.*)/i);
      const topic = topicMatch ? topicMatch[1].trim() : 'General';

      const difficultyMatch = block.match(/Difficulty:\s*(.*)/i);
      const difficulty = difficultyMatch ? difficultyMatch[1].trim() : 'Medium';

      const instructionsMatch = block.match(/Instructions:[\s\S]*?(?=Question:)/i);
      let instructions: string | undefined = undefined;
      if (instructionsMatch) {
        instructions = instructionsMatch[0].replace(/Instructions:\s*/i, '').trim();
      }

      const qTextRegex = type === 'MCQ' ? /Question:[\s\S]*?(?=Options:|Answer:)/i : /Question:[\s\S]*?(?=Answer:)/i;
      const questionMatch = block.match(qTextRegex);
      const questionText = questionMatch 
        ? questionMatch[0].replace(/Question:\s*/i, '').trim()
        : 'Unknown Question';

      const answerMatch = block.match(/Answer:\s*(.*)/i);
      let correctAnswer = answerMatch ? answerMatch[1].trim() : '';
      if (correctAnswer.match(/^\([a-d1-4]\)\s*/i)) {
        correctAnswer = correctAnswer.replace(/^\([a-d1-4]\)\s*/i, '').trim();
      }

      const expMatch = block.match(/Explanation:\s*([\s\S]*)/i);
      const explanation = expMatch ? expMatch[1].trim() : 'No explanation provided.';

      let options: string[] | undefined = undefined;
      if (type === 'MCQ') {
        const optionsMatch = block.match(/Options:[\s\S]*?(?=Answer:)/i);
        if (optionsMatch) {
          const rawOptions = optionsMatch[0].replace(/Options:\s*/i, '').trim();
          const optList = rawOptions.split(/\n?\([a-d1-4]\)\s*/i).map(s => s.trim()).filter(Boolean);
          options = optList;
        }
      }

      questions.push({
        id: `imported-raw-${Date.now()}-${idCounter++}`,
        type,
        section,
        topic,
        difficulty,
        instructions,
        questionText,
        options,
        correctAnswer,
        explanation,
        timeTarget: 120,
        tags: ['VARC', 'Past Papers', 'Bulk Import'],
        year: block.match(/Year:\s*(\d+)/i)?.[1] || '2020',
        reviewed: false
      });
    } catch (err) {
      console.warn('Failed to parse a block:', err);
    }
  }
  return questions;
}
export function parseQuestions(text: string, section: string, year: string) {
  // This is a naive parser. In reality, CAT PDFs vary heavily. 
  // We'll split by common question prefixes or just return blocks.
  const blocks = text.split(/(?=Q[0-9]+\.|Question [0-9]+)/i);
  
  return blocks.filter(b => b.trim().length > 20).map((block, index) => {
    // Basic heuristics to classify topic
    let topic = 'General';
    const lower = block.toLowerCase();
    
    if (section === 'QA') {
      if (lower.match(/triangle|circle|angle|radius|area/)) topic = 'Geometry';
      else if (lower.match(/ratio|profit|loss|speed|distance|work|mixture/)) topic = 'Arithmetic';
      else if (lower.match(/root|equation|log|polynomial/)) topic = 'Algebra';
      else if (lower.match(/prime|remainder|digit/)) topic = 'Number System';
      else topic = 'Modern Math';
    } else if (section === 'VARC') {
      if (lower.match(/paragraph|summary|author/)) topic = 'Para Summary';
      else if (lower.match(/jumbled|order|sequence/)) topic = 'Para Jumbles';
      else if (lower.match(/odd one out|odd sentence/)) topic = 'Odd Sentence Out';
      else topic = 'Reading Comprehension';
    } else {
      if (lower.match(/table|chart|graph/)) topic = 'Charts';
      else if (lower.match(/arrange|sit|left|right/)) topic = 'Arrangements';
      else if (lower.match(/tournament|match|team/)) topic = 'Games and Tournaments';
      else topic = 'Caselets';
    }

    return {
      id: `ext-${Date.now()}-${index}`,
      type: lower.includes('options') || lower.includes('(a)') || lower.includes('1)') ? 'MCQ' : 'TITA',
      section: section as any,
      topic,
      difficulty: 'Medium',
      questionText: block.trim().substring(0, 5000), // Trim extremely long extractions
      correctAnswer: '',
      explanation: '',
      timeTarget: 120,
      tags: ['imported'],
      year,
      reviewed: false
    };
  });
}
