import fs from 'fs';

const filepath = 'src/examData.ts';
let content = fs.readFileSync(filepath, 'utf8');

// Bulletproof regex that supports escaped single quotes \'
const inlineInstructionsRegex = /instructions:\s*'((?:[^'\\]|\\.)*)'/g;
const passagesMap = new Map();
let match;

while ((match = inlineInstructionsRegex.exec(content)) !== null) {
  const text = match[1];
  if (text.includes('Read the passage and answer') && text.includes('Passage - ') && !text.includes('Refer to')) {
    const passageNumMatch = text.match(/Passage - (\d+)/);
    if (passageNumMatch) {
      const num = passageNumMatch[1];
      passagesMap.set(num, text);
      console.log(`Mapped Passage [${num}] (Length: ${text.length})`);
    }
  }
}

console.log(`Total mapped passages: ${passagesMap.size}`);
for (const [num, text] of passagesMap.entries()) {
  console.log(`Passage [${num}] ends with: "...${text.substring(text.length - 80)}"`);
}

// Re-read file to verify we can do safe line replacements
const lines = content.split('\n');
let replacedCount = 0;

for (let i = 0; i < lines.length; i++) {
  const line = lines[i];
  if (line.includes('instructions:') && (line.includes('Refer to Passage -') || line.includes('Passage - 10'))) {
    // If it's a reference question or the malformed/truncated Passage 10 reference questions (which we can identify because they may have the truncated text)
    // Wait, let's identify the line by checking if it contains "instructions:" and "Passage -" and is NOT the original first question.
    // Actually, any line with instructions that is NOT the first question of the passage should be updated!
    // Wait, how do we know if it's NOT the first question?
    // We can identify by checking if the line contains a reference or is one of the lines we messed up (lines 2039, 2059, 2079, 2099, 2119, 2139, 2159, 2179).
    // Better yet, let's just check if the line contains `instructions:` and either `Refer to Passage -` or `Passage - <num>` but has `questionText:` or other fields indicating it is NOT the first question? No, each question is independent and starts with `instructions:`.
    // Wait! Let's check if the question's id can tell us if it's the first question. No, we are parsing line-by-line.
    // Line-by-line: the first question for passage 10 has id `q-91-varc-rc-70`. Its instructions line is line 2019.
    // The reference ones are lines 2039, 2059 etc.
    // Wait, can we detect if the line has `Refer to Passage -` OR is a truncated line?
    // A truncated instructions line ends with `Bentham\',` or doesn't have a correct closing single quote and comma `',`.
    // Wait! A line that has a truncated instructions ends with `\\',` or `\',`.
    // Let's check if we can match any line containing `instructions:` that contains either `Refer to` or is one of the target lines, or contains `Bentham\\'` or `Bentham'`.
    
    // To be absolutely clean and correct, let's use the ID/structure of the questions to perform the replacement.
    // Let's write a JS script that parses the entire TS/JS array structure of questions, updates the items in the loaded array, and serialized it or writes it back.
    // Wait, is it simple to write back? Let's check if we can do line replacement safely.
    // What if we just target lines that match:
    // 1. `line.includes('instructions:')`
    // 2. `line.includes('Refer to Passage -')` OR `line.includes('In 1787, Jeremy Bentham published')` AND has a truncated length (e.g. length < 1000)?
    // Yes! The original line 2019 is very long (around 1400 characters). The truncated lines are around 1000 characters.
    // So if a line has `instructions:` and `Passage - 10` but its length is less than 1300, it's definitely a truncated one!
    // Let's double check this! Extremely elegant and works perfectly.
  }
}

// Let's implement the matching logic
for (let i = 0; i < lines.length; i++) {
  const line = lines[i];
  if (line.includes('instructions:')) {
    let num = null;
    let shouldReplace = false;

    if (line.includes('Refer to Passage -')) {
      const passageNumMatch = line.match(/Refer to Passage - (\d+)/);
      if (passageNumMatch) {
        num = passageNumMatch[1];
        shouldReplace = true;
      }
    } else {
      // Check if it's a truncated Passage 10 instructions (or any other truncated one)
      // Original first passage 10 question is very long. If length is < 1000, it's truncated.
      for (const pNum of passagesMap.keys()) {
        if (line.includes(`Passage - ${pNum}`) && line.length < 1000) {
          num = pNum;
          shouldReplace = true;
          break;
        }
      }
    }

    if (shouldReplace && num) {
      const fullPassageText = passagesMap.get(num);
      if (fullPassageText) {
        const indentMatch = line.match(/^(\s*)/);
        const indent = indentMatch ? indentMatch[1] : '    ';
        lines[i] = `${indent}instructions: '${fullPassageText}',`;
        replacedCount++;
      }
    }
  }
}

fs.writeFileSync(filepath, lines.join('\n'), 'utf8');
console.log(`Successfully replaced ${replacedCount} references with full passages.`);
