import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI, Type } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json({ limit: "50mb" }));

  app.post("/api/generate-mock", async (req, res) => {
    try {
      const { count, section, difficulty, apiKey, model, excludeTopics } = req.body;
      const keyToUse = apiKey || process.env.GEMINI_API_KEY;
      const modelToUse = model || "gemini-3.5-flash";

      if (!keyToUse) {
        return res.status(500).json({ error: "Gemini API key is not configured. Please enter your API Key or set it in the environment." });
      }

      const aiClient = new GoogleGenAI({ 
        apiKey: keyToUse as string,
        httpOptions: {
          headers: { 'User-Agent': 'aistudio-build' }
        }
      });

      if (!count || !section) {
        return res.status(400).json({ error: "Missing required parameters: count, section" });
      }

      const globalInspirations = [
        "Astrophysics, cosmology theories and expansion dynamics",
        "Sub-Saharan post-colonial narrative archaeology, oral versus Western histories",
        "Behavioral game theory, combinatorics of complex auctions, and asymmetric information models",
        "Late Bronze Age collapse, Eastern Mediterranean socioeconomic trade disruption and tribal movements",
        "Mathematical and topological properties of high-dimensional non-Euclidean surfaces",
        "Socio-ecological feedback loops of high-altitude wetlands, environmental economics, and conservation",
        "12th-century maritime commerce networks, Indian Ocean spices trade routes, and naval law",
        "Early 20th-century German expressionist cinema, structuralist shadows, and Weimar psychology",
        "Quantum key distribution networks, cellular cryptography, and cybernetic entropy",
        "Deep-sea hydrothermal vents extreme biology, metabolic Pathways of anaerobic thermophiles",
        "Socio-economic impact of 19th-century land tenure reforms in the High Andes",
        "The physical mechanics of fluid turbulence, chaotic drag, and Reynolds number transitions",
        "Epigenetic methylation, neuroplasticity, and cognitive development under environmental stress",
        "Comparative linguistic evolution, Austroasiatic and Sino-Tibetan vowel shifts and registers",
        "Bilateral monopoly, Nash-bargaining equilibrium, and spatial pricing bubbles",
        "Micro-robotic swarm navigation algorithms with target state cellular diagnostics",
        "High-entropy alloys phase state thermodynamics, mechanical stress resistance limits",
        "Analytical philosophy, temporal asymmetric causality, and the thermodynamic arrow of time",
        "Neural network structural topologies, connectionist frameworks, and catastrophic forgetting",
        "Behavioral economics of spatial pricing, land-taxation theory, and urban zoning",
        "Early Islamic golden-age philosophy of science, Avicenna logic, and scientific empiricism",
        "Foucauldian analysis of panoptic state mechanisms in pre-digital era prisons",
        "Evolutionary game dynamics, mutualistic co-speciation, and floral chemistry",
        "Soothing colonial encounters: Lipton, Rappaport, and morality-marketing of Indian tea",
        "Utopian and dystopian twins: more's early modern social order, uniformity, and Campanella's Sun City",
        "Complex tournament structures: circular round-robin sports pairing, point weightages and coin-toss bounds",
        "Escalator relative speed math, rate-work intervals with non-linear speed increments",
        "High-level modulus equations and logarithmic boundaries (e.g., log_b(x^2 - px + q) > 0)",
        "Rhombus or trapezoid inscribed geometry with coordinate boundary limits"
      ];
      
      const randomTopic = globalInspirations[Math.floor(Math.random() * globalInspirations.length)];

      const dilrArchetypes = [
        {
          name: "Token Factorization & Prime Funding Allocation (inspired by CAT 2022)",
          description: "An interviewer panel awards tokens of distinct prime face values (e.g., 2, 3, 5, 7, 11, 13) to candidates. The final funding is a multiple of the product of the face values of awarded tokens (e.g., Rs. 390,000, Rs. 210,000, Rs. 165,000, Rs. 66,000). Candidates must reconstruct which interviewer awarded which prime token to whom using clue rules, prime factorization equations, and logic constraints."
        },
        {
          name: "Four-Player Multi-Round Games with Conditional Bids (inspired by CAT 2020)",
          description: "A Hi-Lo or betting game played by four players over 6 rounds. Rules allocate positive or negative points depending on the combination of simultaneous binary bids (e.g., all Hi, two Hi and two Lo, etc.). Score snapshots at Round 3 and Round 6 are given along with conditional orderings or individual player strategies. Reconstruct the round-by-round bid sheet for all players."
        },
        {
          name: "4-Set Venn Diagrams & Sub-Region Optimization (inspired by CAT 2020 / CAT 2018)",
          description: "A survey of schools, businesses, or students across four overlapping facilities/traits (F1, F2, F3, F4). Highly complex equations are provided alongside single-set, all-four, and specific double-intersections. The solver must map this into a 4-Set Venn or grid diagram, setting up linear variables ('x', 'a', 'b', etc.) to deduce unknown regions, maximize/minimize sub-cohorts, or find overlapping counts."
        },
        {
          name: "Binary Matrix Mapping & Pool Diagnostics (inspired by CAT 2020)",
          description: "A systematic pool-testing problem (such as 16 clinical patients mapped to 8 vials A-H based on a predefined binary relationship table). One or more patients have a condition, resulting in specific vials testing positive or negative. The solver must use logical exclusion and overlapping combinations to narrow down infected individuals, predict test outcome sets, or determine valid diagnostic steps."
        },
        {
          name: "Double-Constraint Cumulative Operations & Transition Ledgers (inspired by CAT 2020)",
          description: "An operations log of a logistics or delivery agency over a week tracking Cumulative Bookings, Daily Deliveries, and Cumulative Cancelled/Lost orders. The delay between booking and delivery can be exactly 1 or 2 days, with penalties for non-delivery. Using strict daily state transition equations, the solver must reconstruct day-by-day bookings, daily lag ratios, and determine daily performance metrics."
        },
        {
          name: "Horizontal/Vertical Matrix Grids with multiples/modulo rules (inspired by CAT 2020)",
          description: "A 12-plot agricultural grid (3 rows x 4 columns) where rows correspond to unique tree/fruit types and columns correspond to distinct soil conditions. Each cell contains non-zero trees that are multiples of 3 or 4, with no two plots containing the same number. Multiple logical distribution rules (plots per person, corner conditions, adjacency exclusions, row/col sum ratios) must be resolved to fill the grid."
        },
        {
          name: "Binary Grid Scheduling & Consecutive Goal Tracks (inspired by CAT 2022)",
          description: "A 4x8 tournament matrix of sports goals across 8 consecutive matches. Total goals are constrained. At least one goal is scored in every match, with even matches restricted to exactly 1. Rules about consecutive match scores, player-specific consecutive goals, and comparative rankings require the solver to reconstruct the entire 4x8 integer grid sheet."
        },
        {
          name: "Metro Operations, Travel Routings & Service Capacities (inspired by CAT 2022)",
          description: "A schematized transit network of metro or railway lines containing terminal and junction stations. Travel times, station stop durations, service frequencies, and turnaround limits at terminals are detailed. Solver must calculate arrival times at multiple transit paths, determine optimal travel routing, or evaluate the minimum fleet required to sustain operations under interval constraints."
        },
        {
          name: "Erased Popularity/Potential Bivariate Matrix Revenue (inspired by CAT 2018)",
          description: "A 2D scatter plot where 23 products are plotted on Product Popularity (X-axis) and Market Potential (Y-axis) from 0 to 20. The grid separates products into 4 quadrants: Promising, Blockbuster, Doubtful, No-hope. The area of each product's box is proportional to its revenue. Reconstruction of erased company ownership is required using overall revenue sums, product category bounds, and subset rules."
        },
        {
          name: "Rifle Shooting Slide-Participation Scorecard (inspired by CAT 2019)",
          description: "A 10-round rifle shooting competition involving 10 players where a sliding window determines round participation (e.g., players 1-6 in Round 1, players 2-7 in Round 2). Top performances earn fixed points (7, 3, 1). Using final scoreboards after Round 6 and Round 10, the solver must trace points consecutively and determine individual round-by-round ranking sheets."
        },
        {
          name: "3x3 Coin Pouch Grid with Modular Average Constraints (inspired by CAT 2019)",
          description: "A 3x3 grid containing coin pouches in each slot. Each slot has local min/max constraints. Row-wise and column-wise averages of coin counts must be strict integers. Given absolute parameters on selected slots, the solver must deduce the exact distribution of coins in all 9 slots through modular arithmetic and horizontal/vertical logic constraints."
        },
        {
          name: "Queueing Schedules & Consultation Multi-Doctor Timings (inspired by CAT 2019)",
          description: "An outpatient scheduling system where three doctors with different processing rates (e.g., 10 min, 15 min, 25 min) and different fees operate in three rooms. On-the-minute token assignments, queue behaviors, and idle room allocations over standard durations are evaluated. Solver must calculate doctor earnings, total patients served, or wait time durations."
        }
      ];

      const archetypesStr = dilrArchetypes.map((a, idx) => `${idx + 1}. [${a.name}]: ${a.description}`).join("\n");

      let exclusionsAndDiversification = "";
      if (Array.isArray(excludeTopics) && excludeTopics.length > 0) {
        exclusionsAndDiversification += `\n- CRITICAL FOR REPETITION PREVENTION: You are STRICTLY FORBIDDEN from using any of the following topics or settings that have already been practiced: ${JSON.stringify(excludeTopics)}. Explore completely separate, fresh contexts.`;
      }
      exclusionsAndDiversification += `\n- CRITICAL FOR GLOBAL DIVERSITY: Draw primary setting/domain inspiration from these academic foci: "${randomTopic}". Ensure that even on standard or flash models, this generation is highly randomized, novel, and avoids repetitive themes.`;

      const systemInstruction = `You are a state-of-the-art CAT (Common Admission Test) paper generation model containing thousands of parameters for precision. Your goal is to synthesize highly authentic, challenging, and intellectually dense exam items for Indian Institute of Management (IIM) admissions. You must maintain the exact stylistic and rigor standard of actual papers from CAT 2018 to CAT 2025.

Below is the core conceptual knowledge of the existing question bank that you must match in semantic register, math rigor, and logical depth:

I. VARC (Verbal Ability & Reading Comprehension)
You must match the level of premium CAT reading comprehensions. Reference passages have dry, scholastic vocabularies (~300-450 words) from high-register disciplines:
1. Thermodynamic Clocks & Entropy: Explores physical non-equilibrium systems, timekeeping accuracy bought with entropy production, and the irreversible arrow of time.
2. Brains vs. Computers: Explores relational systems, brain mechanism analogies, and computers generating poetry by accident without subjective intent or consciousness.
3. Work & Occupation: Investigates the cognitive boundary between mechanical automation, income security, and the human request for meaningful labor.
4. Democracy & Minorities: Explores majority voting boundaries, representative protection for articulate minority blocks, and the analysis of democratic theory.
5. Loyalty & Scientific Duty: Evaluates scientific responsibilities, intellectual readjustments in education, and societal ethics.
6. Family & Kinship: Examines long-term intimate bonding, modern nuclear restructuring, and evolutionary sociology.
7. Colonization of Australia (1787): Historic narrative of the First Fleet, maritime law, and Sydney Harbor (Port Jackson) geography.
8. Emotions & Value: Phenomenological theories of valuation, emotional projection, and helplessness as the base of human value systems.
9. Culture & Adaptation: Stages of culture shock, adaptation novelty wear-off, "small victories" boosting confidence, rollercoaster effects, affirmation, and appreciative inquiry.
10. Bentham on Usury (1787): Explores Jeremy Bentham's "Defense of Usury" pamphlet, free-market interest rates, state-imposed caps on consumer loans, and evasion by small savers.
11. The Eclipse Group: Narrative of Mr. West's high-pressure "Eagle" compute project, fatigue/afterbirth, PR executives vs. core engineers, and the corporatized attitude towards team recognition.

- Sentence Insertion & Para Jumbles: Must require complex theme flow tracking (e.g. Gale Owen-Crocker's analysis of the Bayeux tapestry, Linda Neagley's kinaesthetic medieval art theory, or Weimar cinema).
- Para Summary: Distractors must look highly plausible, forcing precise parsing of complete conceptual capture versus biased or partial details.

II. DILR (Data Interpretation & Logical Reasoning)
Each item must implement a complete, airtight deductive grid or spreadsheet constraint. Reference structures:
- Cumulative Logistics Transition Ledgers: Bookings, deliveries, with 1-2 days delay, and cancellation penalties over a week.
- Train Seating Occupancy Grids: 4-segment occupancy percentage ratios with multiple of 10 constraints (e.g. 84% segments).
- Coin Pouch Modular Grids: 3x3 grids with row-wise and column-wise integer average constraints solved through modulo arithmetic.
- Shooting Slide scoring and tournament scheduling.

III. QA (Quantitative Ability)
Must contain precise, exact equations and standard algebraic notations. No trivial arithmetic:
- Ratios & Movements: E.g., student morning/afternoon shifts relocations (such as 13:9 and 19:14 Shifts with new 3:8 joins to 5:4).
- Solutions & Replacements: Successive replacements of acid/water (e.g. 200L initial 30% replaced by 20% water, then 10% acid, then 15% water).
- Logarithmic Inequalities: log_n(n^2 - 5n + 11) > 0 for distinct integers under defined domain conditions (n > 0, n != 1).

STRICT GENERATION DIRECTIVES:
1. Every item must be completely self-contained, unique, and independent.
2. In VARC, if count > 1, do NOT duplicate reading passages or instructions. Each question is independent.
3. Logical validity is paramount. Every math equation or logic constraint must be mathematically solvable with a unique, valid correct answer. No hand-waving or contradictory clues.
4. Distractors must be highly subtle, avoiding easily eliminable choices.
5. Provide a step-by-step, fully worked-out algebraic or logical proof in the 'explanation' field.`;

      const prompt = `Generate exactly ${count} highly authentic and challenging CAT-level exam questions of '${difficulty || 'Medium'}' difficulty for the '${section}' section.
Incorporate these exclusions and diversity constraints if present: ${exclusionsAndDiversification}`;

      const generateWithRetries = async (retries = 4, delay = 4000): Promise<any> => {
        try {
          return await aiClient.models.generateContent({
            model: modelToUse,
            contents: prompt,
            config: {
              systemInstruction: systemInstruction,
              temperature: 0.7,
              topK: 64,
              topP: 0.95,
              seed: 42,
              responseMimeType: "application/json",
              responseSchema: {
                type: Type.ARRAY,
                items: {
                  type: Type.OBJECT,
                  properties: {
                    type: { type: Type.STRING, description: "Must be 'MCQ' or 'TITA'" },
                    section: { type: Type.STRING, description: "Must be 'VARC', 'DILR' or 'QA'" },
                    topic: { type: Type.STRING, description: "The broad topic category" },
                    difficulty: { type: Type.STRING, description: "Must be 'Easy', 'Medium' or 'Hard'" },
                    instructions: { type: Type.STRING, description: "Passage, Caselet data, or general direction." },
                    questionText: { type: Type.STRING, description: "The actual question" },
                    options: {
                      type: Type.ARRAY,
                      items: { type: Type.STRING },
                      description: "Array of exactly 4 strings for MCQ, or empty array for TITA"
                    },
                    correctAnswer: { type: Type.STRING, description: "The correct option text or TITA answer" },
                    explanation: { type: Type.STRING, description: "Step-by-step reasoning" },
                    timeTarget: { type: Type.NUMBER, description: "Suggested time in seconds, usually 120" },
                    tags: {
                      type: Type.ARRAY,
                      items: { type: Type.STRING },
                      description: "A few short descriptive tags"
                    }
                  },
                  required: ["type", "section", "topic", "difficulty", "questionText", "correctAnswer", "explanation", "timeTarget", "tags"]
                }
              }
            }
          });
        } catch (error: any) {
          if ((error.status === 429 || (error.message && error.message.includes("429"))) && retries > 0) {
            console.log(`Hit 429 Rate Limit. Retrying in ${delay}ms...`);
            await new Promise(r => setTimeout(r, delay));
            return generateWithRetries(retries - 1, delay * 1.5);
          }
          throw error;
        }
      };

      const response = await generateWithRetries();

      const textOutput = response.text;
      if (!textOutput) {
        throw new Error("No response string from Gemini.");
      }

      const jsonQuestions = JSON.parse(textOutput);
      return res.json(jsonQuestions);
      
    } catch (error: any) {
      console.error("Error generating mock:", error);
      res.status(500).json({ error: error.message || "Failed to generate mock test." });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
