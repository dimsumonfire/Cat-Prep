import React, { useState } from 'react';
import { 
  BookOpen, Target, Clock, Zap, Book, Box, Layout, BarChart2, 
  HelpCircle, AlertTriangle, PlayCircle, CheckSquare, Search,
  Award, ShieldAlert, ArrowRight, Compass, Flame, Info, Check, Table
} from 'lucide-react';

// Define the comprehensive interfaces for the 29 CAT Math Topics
interface QAFormula {
  expr: string;
  variables: string;
  shortcut: string;
  useCase: string;
  mistakeToAvoid: string;
}

type CATMathTopic = {
  id: string;
  title: string;
  category: 'Arithmetic' | 'Number System' | 'Algebra' | 'Modern Math' | 'Geometry';
  testsWhat: string;
  howToIdentify: string;
  keyFormulas: QAFormula[];
  shortcutMethod: string;
  optionBasedApproach: string;
  backSolvingApproach: string;
  approximationApproach: string;
  commonTraps: string[];
  typicalPatterns: string[];
  fastestSolvingRoute: string;
  miniExamples: {
    question: string;
    explanation: string;
  }[];
  whenToSkipRule: string;
};

export default function StudyGuidesTab() {
  const [activeTab, setActiveTab] = useState<'VARC' | 'DILR' | 'QA_DEEP' | 'FORMULAS' | 'APPROACH_MATRIX'>('QA_DEEP');
  const [qaCategory, setQaCategory] = useState<'All' | 'Arithmetic' | 'Number System' | 'Algebra' | 'Modern Math' | 'Geometry'>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeQaTopicId, setActiveQaTopicId] = useState<string>('percentage');

  // The 29 detailed CAT Mathematics topics database
  const qaTopics: CATMathTopic[] = [
    {
      id: 'percentage',
      title: 'Percentages',
      category: 'Arithmetic',
      testsWhat: 'Relative values, fractional scaling, consecutive percentage shifts, and base comparisons.',
      howToIdentify: 'Keywords: "percent increase", "successive change", "A is x% more than B", "population compounding".',
      keyFormulas: [
        {
          expr: "New Value = Original * (1 ± r/100)",
          variables: "r = percentage change rate",
          shortcut: "Use fractional multipliers (e.g., +20% is x1.2 or x6/5)",
          useCase: "Calculating final price after a single percentage markup.",
          mistakeToAvoid: "Applying rate to the final value instead of the initial base value."
        },
        {
          expr: "Net Change = a + b + (ab/100)",
          variables: "a, b = successive percentage changes (use negative for decrease)",
          shortcut: "Net % = a + b + (ab/100) %",
          useCase: "Price increases by 20% then decreases by 10%. Net = 20 - 10 - 2 = +8%.",
          mistakeToAvoid: "Simply adding up rates (e.g. 20% increase followed by 20% decrease does not return to original; it is a 4% net loss)."
        }
      ],
      shortcutMethod: "Translate percentage rates to standard reciprocal fractions (1/6 = 16.67%, 1/7 = 14.28%, 1/8 = 12.5%, 1/11 = 9.09%). This transforms division to basic subtraction.",
      optionBasedApproach: "Look for multiples in the options. If the question involves population growth of 11.11% (1/9), the final population must map to a multiple of 10.",
      backSolvingApproach: "Plug in the option values. Start with Option B or C; if the resulting percentage is too high, test the smaller choices.",
      approximationApproach: "For complex decimal percentages like 40.12% of 349, approximate to 40% of 350 = 140, then subtract a tiny sliver.",
      commonTraps: [
        "Confusing percentage point change with percentage change.",
        "Incorrect base selection: Assuming A is 25% more than B means B is 25% less than A (it is actually 20% less)."
      ],
      typicalPatterns: [
        "Successive price changes on consumables.",
        "Product of two variables: Area of a rectangle where length grows by x% and width drops by y%."
      ],
      fastestSolvingRoute: "Identify the base variable -> Convert all percentage shifts to fraction multipliers -> Set up a line product equation -> Simplify and write down response.",
      miniExamples: [
        {
          question: "Price of sugar rises by 25%. By what percentage must consumption be reduced to keep expenditure unchanged?",
          explanation: "Expenditure = Price * Consumption. If Price goes from 4 to 5 (+25%), Consumption must go from 5 to 4 to balance it. Reduction is 1/5 = 20%."
        },
        {
          question: "A's salary is 50% more than B's. B's salary is what percentage less than A's?",
          explanation: "Let B = 100. A = 150. Difference = 50. Required % = (50 / 150) * 100 = 33.33%."
        }
      ],
      whenToSkipRule: "Skip if the problem links population segments with nested variable classifications and unspecified overlaps where multiple equations cannot be isolated."
    },
    {
      id: 'profit-loss',
      title: 'Profit, Loss & Discount',
      category: 'Arithmetic',
      testsWhat: 'Commercial calculations, margins, markups, discounts and deceptive weights.',
      howToIdentify: 'Keywords: "Markup", "Cost Price (CP)", "Selling Price (SP)", "Discount", "False weights/scales".',
      keyFormulas: [
        {
          expr: "SP = CP * (1 + P/100) or CP * (1 - L/100)",
          variables: "CP = Cost Price, SP = Selling Price, P = Profit %, L = Loss %",
          shortcut: "CP : SP = 100 : (100 ± Profit/Loss %)",
          useCase: "Find Cost Price when Selling Price and Profit percentage are given.",
          mistakeToAvoid: "Calculating profit percentage on SP instead of CP unless exclusively specified."
        },
        {
          expr: "Discount = MP - SP; Profit = Markup - Discount - (Markup * Discount / 100)",
          variables: "MP = Marked Price, SP = Selling Price",
          shortcut: "MP / CP = (100 + P%) / (100 - D%)",
          useCase: "A merchant desires a 20% profit after giving a 10% discount. MP/CP = 120/90 = 4/3.",
          mistakeToAvoid: "Applying discount rate directly to Cost Price; discount is strictly applied on Marked Price."
        }
      ],
      shortcutMethod: "For dishonest dealers, Profit % = [ (True Weight - False Weight) / False Weight ] * 100.",
      optionBasedApproach: "Look for patterns. Selling Price is usually a multiple of (100 + Profit%). Profit of 15% implies SP is a multiple of 23. Check options for divisibility of 23.",
      backSolvingApproach: "Assume CP is 100 (or a multiple of 100). Apply markup and discount, and scale the result to match the absolute profit value in the question.",
      approximationApproach: "If markup is 33.3% and discount is 10%, approximate net profit as slightly below 20% to eliminate outlier choices.",
      commonTraps: [
        "A seller sells two articles at the same Selling Price, one at x% profit and another at x% loss. There is always a net loss of x²/100 % (many incorrectly think 'no profit no loss').",
        "Dishonest dealer questions where the cheat occurs during both buying and selling."
      ],
      typicalPatterns: [
        "Find CP of a product sold through sequential channels each adding profit.",
        "Dishonest milkman adding water and selling at cost price."
      ],
      fastestSolvingRoute: "Establish CP:MP:SP ratios using the MP/CP = (100+P)/(100-D) shortcut. Compute required parameters instantly.",
      miniExamples: [
        {
          question: "An article is marked up by 40% and sold at a 20% discount. Find the net profit percent.",
          explanation: "Use successive formula: Markup = +40%, Discount = -20%. Net % = 40 - 20 - (40*20/100) = 20 - 8 = 12% profit."
        },
        {
          question: "A cheat dealer uses 800g instead of 1kg. Find his profit percentage.",
          explanation: "Profit % = (Error / Weight Sold) * 100 = (200 / 800) * 100 = 25%."
        }
      ],
      whenToSkipRule: "Skip if the question involves secondary sales parameters with varying partial damage rates and multiple discrete selling price levels."
    },
    {
      id: 'si-ci',
      title: 'Simple & Compound Interest',
      category: 'Arithmetic',
      testsWhat: 'Time value of money, linear interest growth, exponential compounding, and installment math.',
      howToIdentify: 'Keywords: "compounded annually/half-yearly", "simple interest", "installments", "doubles itself".',
      keyFormulas: [
        {
          expr: "SI = (P * R * T) / 100",
          variables: "P = Principal, R = Rate of Interest, T = Time inside years",
          shortcut: "Every year's SI is constant, equaling P * R/100.",
          useCase: "Calculating basic flat-rate growth of a loan.",
          mistakeToAvoid: "Adding previous interest to the principal for the next period’s calculations."
        },
        {
          expr: "Total Amount (CI) = P * (1 + R/100)^T",
          variables: "P = Principal, R = Annual Rate, T = Compounding years",
          shortcut: "CI for 2 years difference: CI - SI = P(R/100)^2",
          useCase: "Determining dynamic compounding returns over short schedules.",
          mistakeToAvoid: "Compounding annually when the rate is half-yearly (you must divide R by 2 and multiply T by 2)."
        }
      ],
      shortcutMethod: "Rule of 72: Divide 72 by the rate to find approximate doubling years under CI. Rule of 114 to triple.",
      optionBasedApproach: "Compound interest outputs contain powers of (1 + R/100). If R = 10%, the principal is multiplied by 1.1³ for 3 years. Look for options with factors of 11 or 1331.",
      backSolvingApproach: "Substitute options into the CI-SI difference formula. Calculating SI is rapid and gives a clean ceiling boundaries for CI.",
      approximationApproach: "For 3 years at 10% CI, interest is approx 33.1% of principal. Use this benchmark value for rapid elimination.",
      commonTraps: [
        "Confusing total accumulated wealth (Principal + Interest) with interest generated.",
        "Under-estimating compounding frequencies (quarterly compounding means splitting R into 4 and T into 4T)."
      ],
      typicalPatterns: [
        "Difference between CI and SI for 2 or 3 years.",
        "Equal yearly installment calculations for a borrowed sum."
      ],
      fastestSolvingRoute: "For multiple years' compound interest, use successive rate calculation: 2 years net rate = a + b + ab/100. Solve as a single percentage multiply.",
      miniExamples: [
        {
          question: "A sum doubles in 5 years SI. In how many years will it become 4 times itself?",
          explanation: "Doubling means Interest earned = Principal (P) in 5 years. To become 4 times, required interest is 3P. Since SI grows linearly, 3P will take 5 * 3 = 15 years."
        },
        {
          question: "Find difference between CI and SI on $10,000 for 2 years at 8% per annum.",
          explanation: "Difference = P(R/100)^2 = 10000 * (8/100)^2 = 10000 * (64 / 10000) = $64."
        }
      ],
      whenToSkipRule: "Skip compound interest installment questions with highly fractional interest rates where calculations cannot be converted to clean integers."
    },
    {
      id: 'ratio-proportion',
      title: 'Ratio & Proportion',
      category: 'Arithmetic',
      testsWhat: 'Proportional distributions, scaling, direct and inverse variations.',
      howToIdentify: 'Keywords: "ratio of A to B", "proportional to", "varies directly", "partnership capital shares".',
      keyFormulas: [
        {
          expr: "If A/B = C/D, then ad = bc",
          variables: "A, B, C, D = proportion terms",
          shortcut: "Componendo & Dividendo: (A+B)/(A-B) = (C+D)/(C-D)",
          useCase: "Solving fractional equations holding variables in both denominator and numerator.",
          mistakeToAvoid: "Applying only one side of the Componendo-Dividendo rule."
        }
      ],
      shortcutMethod: "If A:B = 2:3 and B:C = 4:5, write A:B:C by multiplying B's values: A:B:C = (2*4) : (3*4) : (3*5) = 8 : 12 : 15.",
      optionBasedApproach: "Look at the targeted ratio in the question line. If B's share is requested, and the ratio of B is 7 parts, search for options divisible by 7.",
      backSolvingApproach: "Add or subtract the values given in choices from both poles and check if the resulting ratio simplifies to the target.",
      approximationApproach: "If ratio is 17:19, approximate as near 1:1 with a slight bias to the second item to prune outliers.",
      commonTraps: [
        "Combining ratios without matching the common bridging variable (B in A:B and B:C).",
        "Assuming ratio multipliers are integers when they can be fractional."
      ],
      typicalPatterns: [
        "Divide profit shares in partnership based on Capital x Time investment.",
        "Add quantities of metals to form an alloy ratio."
      ],
      fastestSolvingRoute: "Identify the shared variable -> Multiply both ratios to normalize the shared term to its LCM -> Calculate scale multiplier from absolute parameters -> Solve.",
      miniExamples: [
        {
          question: "If A : B = 3 : 4 and B : C = 8 : 9, find A : C.",
          explanation: "Multiply the ratios: A/C = (A/B) * (B/C) = (3/4) * (8/9) = 24/36 = 2/3."
        },
        {
          question: "In a partnership, A invests $2000 for 6 months and B invests $3000 for 4 months. Find profit ratio.",
          explanation: "Profit Ratio = (Capital A * Time A) : (Capital B * Time B) = (2000 * 6) : (3000 * 4) = 12000 : 12000 = 1 : 1."
        }
      ],
      whenToSkipRule: "Skip if joint variation contains more than 4 variables varying under multiple degrees of powers and offsets."
    },
    {
      id: 'mixtures-alligation',
      title: 'Mixtures & Alligation',
      category: 'Arithmetic',
      testsWhat: 'Combining components of different concentrations or prices, weighted average simplification.',
      howToIdentify: 'Keywords: "mixture", "alligation", "replaced with water", "ratio of ingredients".',
      keyFormulas: [
        {
          expr: "Q1 / Q2 = (c - d) / (m - c)",
          variables: "Q1, Q2 = Quantities, d = cheaper price, m = dearer price, c = mean price",
          shortcut: "Alligation Cross layout (Cheaper on Left, Dearer on Right, Mean in Middle)",
          useCase: "Find proportion to mix $40/kg rice and $60/kg rice to yield $48/kg mixture.",
          mistakeToAvoid: "Mixing different metrics (e.g. comparing CP of cheaper with SP of dearer; all points must represent CP)."
        }
      ],
      shortcutMethod: "Replacement concentration formula: Final volume concentration = Initial * (1 - x/V)^n.",
      optionBasedApproach: "The average price must lie strictly between the cheaper and dearer limits. Prune values outside this window.",
      backSolvingApproach: "Substitute ratio options directly and compute weighted price. It is often faster than setting up variables.",
      approximationApproach: "If mixing almost equal parts of 20% and 40% solutions, result is slightly below 30% if we have slightly more of 20% component.",
      commonTraps: [
        "Using Sales Price in the alligation cross directly instead of first dividing by (1 + Profit%) to establish Cost Price.",
        "Losing track of total solution volume after successive extractions."
      ],
      typicalPatterns: [
        "Mix two milk-water solutions to get a target ratio.",
        "Replacing milk with water iteratively."
      ],
      fastestSolvingRoute: "Set up the Alligation Cross -> Take difference diagonally to obtain quantity ratio -> Scale to matches absolute value.",
      miniExamples: [
        {
          question: "In what ratio must tea at $62/kg be mixed with tea at $72/kg so that the mixture is worth $64.50/kg?",
          explanation: "Alligation cross: Cheaper = 62, Dearer = 72, Mean = 64.5. Diagonals: (72 - 64.5) = 7.5; (64.5 - 62) = 2.5. Ratio is 7.5 : 2.5 = 3 : 1."
        }
      ],
      whenToSkipRule: "Skip if replacements involve two distinct solutions being transferred back-and-forth between multiple vessels simultaneously."
    },
    {
      id: 'averages',
      title: 'Averages',
      category: 'Arithmetic',
      testsWhat: 'Weighted averages, sequential offsets, deviations and class weights.',
      howToIdentify: 'Keywords: "Average speed", "Average age increases by", "weighted average", "mean of observations".',
      keyFormulas: [
        {
          expr: "Avg = Sum of elements / Number of elements",
          variables: "Sum = total sum, Number = element count",
          shortcut: "Deviation method: Net deviation from assumed average is always 0.",
          useCase: "Find average score of 50 students without doing total multiplications.",
          mistakeToAvoid: "Taking simple average of percentages instead of applying weighted averages."
        },
        {
          expr: "Avg Speed = 2 * S1 * S2 / (S1 + S2)",
          variables: "S1, S2 = constant distance travel speeds",
          shortcut: "Harmonic mean of speeds when distances are equal.",
          useCase: "Find average speed of round trip.",
          mistakeToAvoid: "Calculating Average Speed as (S1 + S2)/2 directly (this is only true when times are equal, not distances)."
        }
      ],
      shortcutMethod: "Deviation method: If assumed average is A, and actual values are x1, x2, find deviations (xi - A). Average = A + (Sum of deviations)/N.",
      optionBasedApproach: "If the average age of a group of 10 increases by 1 when a new person joins, the new person is 10 + 1 = 11 years older than progress average. Look for values matching this offset.",
      backSolvingApproach: "Plug in options for missing elements. The correct choice will make the sum of positive deviations match negative deviations precisely.",
      approximationApproach: "For large list averages, group them visually in bins around central values to get a tight estimate of the average.",
      commonTraps: [
        "Confusing average of rates with average of absolute quantities.",
        "Applying simple arithmetic mean to speed-distance intervals."
      ],
      typicalPatterns: [
        "A group average age changes when a member is replaced.",
        "Averages of sequential AP numbers (always equals middle term or average of extremes)."
      ],
      fastestSolvingRoute: "Establish a baseline value as the assumed average -> Code individual deviations -> Average of deviations -> Add to baseline.",
      miniExamples: [
        {
          question: "The average weight of 8 men increases by 1.5 kg when a man weighting 65 kg is replaced. Find weight of new man.",
          explanation: "Total weight change = 8 * 1.5 = 12 kg. Since weight increased, new man is heavier: Weight = 65 + 12 = 77 kg."
        }
      ],
      whenToSkipRule: "Skip if average values are linked through compound probability states or undetermined set-overlaps."
    },
    {
      id: 'time-work',
      title: 'Time & Work',
      category: 'Arithmetic',
      testsWhat: 'Worker rates, efficiency multipliers, multi-man collaborations, and wages sharing.',
      howToIdentify: 'Keywords: "A does work in 10 days", "A is twice as efficient as B", "alternating days", "wages distributed".',
      keyFormulas: [
        {
          expr: "Total Work = Efficiency * Time",
          variables: "Efficiency = work done per unit time, Time = duration taken",
          shortcut: "If A in 'a' days, B in 'b' days, combined time = ab / (a+b)",
          useCase: "Determine combined days to finish a task.",
          mistakeToAvoid: "Directly adding days (e.g. A takes 10, B takes 15, combined is not 25, it is 6)."
        },
        {
          expr: "M1 * D1 * H1 / W1 = M2 * D2 * H2 / W2",
          variables: "M=Men, D=Days, H=Hours, W=Work done",
          shortcut: "MDH / W is a constant.",
          useCase: "Find days needed for 15 workers when 10 workers take 6 days.",
          mistakeToAvoid: "Placing Work parameter in the numerator (it must go in denominator)."
        }
      ],
      shortcutMethod: "Set Total Work as LCM of given individual durations. This translates daily work contributions into small positive integers.",
      optionBasedApproach: "If A takes 12 days and B takes 24 days, the combined result must be less than the fastest worker's individual time (< 12). Only values around 8 are valid.",
      backSolvingApproach: "Verify total completed efficiency sum equals LCM work target when testing option day rates.",
      approximationApproach: "A takes 10 days, B takes 50. Compound speed is marginally faster than A alone. Look for options slightly below 10 days (e.g. 8.3 days).",
      commonTraps: [
        "In alternating-day questions, overlooking that the cycle might finish midway during a day.",
        "Dividing wages based on days taken instead of total actual work units delivered."
      ],
      typicalPatterns: [
        "Alternating day work between workers of varying efficiency.",
        "Men, women, and children rate conversion problem."
      ],
      fastestSolvingRoute: "Establish LCM as Total Work -> Write individual daily efficiency units -> Set up day cycle equation -> Solve.",
      miniExamples: [
        {
          question: "A can do a work in 10 days, B in 15 days. They work together. Find total days.",
          explanation: "Assumed work = LCM(10, 15) = 30 units. Daily efficiency: A = 3 units, B = 2 units. Combined daily capacity = 5 units. Days required = 30 / 5 = 6 days."
        },
        {
          question: "3 Men or 4 Women can do a work in 43 days. How long will 7 Men and 5 Women take?",
          explanation: "Efficiency ratio: 3M = 4W => M/W = 4/3. Total work = 3 * 4 * 43 = 516 units. Combined daily rate of 7M + 5W = 7(4) + 5(3) = 28 + 15 = 43 units. Days = 516 / 43 = 12 days."
        }
      ],
      whenToSkipRule: "Skip if workers join and leave on varying overlapping hourly schedules with non-linear fatigue efficiency decay."
    },
    {
      id: 'pipes-cisterns',
      title: 'Pipes & Cisterns',
      category: 'Arithmetic',
      testsWhat: 'Inflow rates, leak drainage, negative efficiency and tank capacities.',
      howToIdentify: 'Keywords: "inlet pipe fills", "waste pipe empties", "leak at the bottom", "cistern overflows".',
      keyFormulas: [
        {
          expr: "Net rate = Inflow Rate - Outflow Rate",
          variables: "Inflow = rate of inlet pipes, Outflow = rate of drainage leaks",
          shortcut: "Combined filling time = ab / (b - a) when outlet empties tank at slower speed 'b'",
          useCase: "Find time to fill tank holding open leak.",
          mistakeToAvoid: "Adding outlet drainage speed instead of subtracting it from net efficiency."
        }
      ],
      shortcutMethod: "Use negative integer efficiency values to represent outlet pipes or holes. Solve using the standard LCM method.",
      optionBasedApproach: "If the inlet fills in 10 hours and the outlet empties in 15, the combined fill time must be strictly longer than the individual inlet (> 10).",
      backSolvingApproach: "Plug in total hours options; check which choice yields a net positive filling of 1 full tank capacity.",
      approximationApproach: "If an inlet takes 4 hours and a tiny leak takes 40, net fill time will be slightly longer than 4 (e.g. 4.4 hours).",
      commonTraps: [
        "Forgetting to calculate the negative work contribution of a leak when the tank is near-full.",
        "Pipes open sequentially where start time offsets must be processed first before calculating combined rate."
      ],
      typicalPatterns: [
        "Find time taken to fill tank when inlet and outlet are opened on alternating schedules.",
        "Leak reduces output; determine leak drainage speed from capacity values."
      ],
      fastestSolvingRoute: "Establish tank capacity as LCM of pipe times -> Deduce positive and negative efficiency levels -> Formulate net daily rate -> Solve.",
      miniExamples: [
        {
          question: "Pipe A fills a tank in 12 hours, Pipe B empties it in 20 hours. If both open, find filling time.",
          explanation: "Assumed Capacity = LCM(12, 20) = 60 units. A's draft = +5 units/hr. B's draft = -3 units/hr. Combined = +2 units/hr. Fill time = 60 / 2 = 30 hours."
        }
      ],
      whenToSkipRule: "Skip if the tank features multiple leaks placed at varying vertical heights (e.g., at 1/3 and 2/3 level) with varying pressure-dependent output rates."
    },
    {
      id: 'tsd',
      title: 'Time, Speed & Distance',
      category: 'Arithmetic',
      testsWhat: 'Linear equations of motion, speed scaling ratios, relative motion, and circular tracking.',
      howToIdentify: 'Keywords: "Constant distance", "Relative Speed", "average speed", "meets on the way", "circular track".',
      keyFormulas: [
        {
          expr: "Distance = Speed * Time",
          variables: "Distance = length covered, Speed = velocity, Time = duration",
          shortcut: "If Distance is Constant, S1 * T1 = S2 * T2 (inverse relationship)",
          useCase: "Hiker goes 10% faster, find the percentage reductions in travel time.",
          mistakeToAvoid: "Assuming linear average of speed equals average speed under constant distance."
        }
      ],
      shortcutMethod: "Inverse Ratio Tool: If speed shifts in ratio x:y, time shift is inversely y:x. Difference in ratio corresponds to absolute delay values.",
      optionBasedApproach: "Speed and Time must align to yield integer distances. If distance in the story is 120km, check speeds that are cleanly divisors of 120.",
      backSolvingApproach: "Use option speeds. Divide constant distance by speed options to check which choice produces the exact delay gap specified.",
      approximationApproach: "If a body travels at 40 km/h and another at 41 km/h, the relative displacement of 1 km/h means 1 km separation per hour.",
      commonTraps: [
        "Forgetting to convert meters/seconds to kilometers/hours or vice-versa using the 5/18 factor.",
        "Calculating relative speed without confirming both bodies started walking at the same absolute clock time."
      ],
      typicalPatterns: [
        "A student goes from home to school early/late depending on speed.",
        "Police-thief chase with separation gap."
      ],
      fastestSolvingRoute: "Check if distance is constant -> Apply Speed-Time inverse ratio scaling -> Compute normal travel time -> Deduce required metric.",
      miniExamples: [
        {
          question: "Going at 3/4 of his usual speed, a man is 20 minutes late. Find usual time.",
          explanation: "Speed ratio = 4 : 3. Time ratio is inverse = 3 : 4. Shift is 1 part. 1 part = 20 mins. Usual time = 3 parts = 60 minutes."
        }
      ],
      whenToSkipRule: "Skip circular track questions when bodies feature non-linear stopovers or reverse directions dynamically depending on meeting frequencies."
    },
    {
      id: 'trains-boats-races',
      title: 'Trains, Boats & Races',
      category: 'Arithmetic',
      testsWhat: 'Relative motion over physical targets, vector streams, headstarts and circular racing.',
      howToIdentify: 'Keywords: "upstream/downstream", "train passes platform", "race headstart of x meters", "linear race track".',
      keyFormulas: [
        {
          expr: "Time = (L1 + L2) / (S1 ± S2)",
          variables: "L1, L2 = Train lengths, S1, S2 = individual speeds (add for opposite direction, subtract for same)",
          shortcut: "A train passing a pole covers only its own length. Passing a bridge covers train + bridge length.",
          useCase: "Find time taken for two moving trains to cross each other.",
          mistakeToAvoid: "Subtracting train lengths when they travel in the same direction; lengths always add up."
        },
        {
          expr: "Downstream Speed D = u + v, Upstream Speed U = u - v",
          variables: "u = boat speed in still water, v = stream speed",
          shortcut: "Still water speed u = (D + U)/2; Stream speed v = (D - U)/2",
          useCase: "Calculate still water speed if boat crosses 20km downstream in 2 hrs and upstream in 4 hrs.",
          mistakeToAvoid: "Writing upstream speed as v - u (boat speed u must hold greater magnitude than stream speed v to move)."
        }
      ],
      shortcutMethod: "In linear races, if A beats B by x meters or t seconds, then B covers x meters in t seconds. Thus B's speed = x/t.",
      optionBasedApproach: "Boat speed u and stream speed v are typically integers. Since D = u+v and U = u-v, look for option divisors that scale cleanly with the given distance.",
      backSolvingApproach: "Plug in boat speeds. Check if the upstream and downstream durations add up to the total time mentioned.",
      approximationApproach: "If stream is tiny, boats travel upstream and downstream with almost equal durations.",
      commonTraps: [
        "Forgetting to add train length to platform length for total crossing distance.",
        "Confusing dead-heat race terms: A beats B by 20m means when A finishes, B is 20m behind. A gives B a headstart of 20m means B starts 20m ahead."
      ],
      typicalPatterns: [
        "Train passes a platform and a standing observer in different times.",
        "A boat travels to a point upstream and returns in a total of T hours."
      ],
      fastestSolvingRoute: "Identify stream or track direction -> Convert units to m/s -> Setup relative equation -> Simplify.",
      miniExamples: [
        {
          question: "A train 150m long passes a pole in 15 seconds. Find its speed in km/h.",
          explanation: "Speed = 150 / 15 = 10 m/s. Convert to km/h: 10 * 18/5 = 36 km/h."
        },
        {
          question: "A boat goes downstream at 14 km/h and upstream at 8 km/h. Find still water speed.",
          explanation: "Still water u = (D + U)/2 = (14 + 8)/2 = 11 km/h."
        }
      ],
      whenToSkipRule: "Skip if a race incorporates multiple consecutive headstarts with changing runners trading batons at randomized intervals."
    },
    {
      id: 'numbers-divisibility',
      title: 'Numbers & Divisibility',
      category: 'Number System',
      testsWhat: 'Properties of numbers, prime-composite structures, unit digits and digital roots.',
      howToIdentify: 'Keywords: "divisible by 11/72/99", "units digit of", "sum of digits", "highest power of prime in factorial".',
      keyFormulas: [
        {
          expr: "Factorial Prime Exponent E_p(N!) = [N/p] + [N/p²] + [N/p³] ...",
          variables: "N! = factorial, p = target divisor prime number",
          shortcut: "Legendre's Formula (continuous floor divisions sum)",
          useCase: "Find number of trailing zeros in 100! (exponent of prime 5).",
          mistakeToAvoid: "Applying Legendre's directly to composite divisors like 6 (you must calculate the prime 3 exponent instead)."
        }
      ],
      shortcutMethod: "Divisibility by 72: Number must be divisible by both 8 (last 3 digits) and 9 (sum of digits). This isolates variables instantly.",
      optionBasedApproach: "If checking digit values, plug options into the divisibility algorithm. Test digit sum bounds.",
      backSolvingApproach: "Divide options directly by the given modulus of composite values.",
      approximationApproach: "For trailing zeros or large base powers, approximate base primes to powers of 10 for rapid scaling checks.",
      commonTraps: [
        "Applying divisibility by 6 as just divisibility by 2 or 3 exclusively without checking both.",
        "Confusing consecutive natural numbers with consecutive odd/even configurations."
      ],
      typicalPatterns: [
        "Find digits x and y in '34x56y' such that the number is divisible by 88.",
        "Find the units digit of a huge exponential stack like 7^2026."
      ],
      fastestSolvingRoute: "Decompose composite divisors into co-prime factor pairs -> Solve for the smaller prime constraint first -> Apply secondary prime rules.",
      miniExamples: [
        {
          question: "Find trailing zeros in 120!.",
          explanation: "Trailing zeros correspond to powers of 5. Legendre formula: [120/5] + [120/25] + [120/125] = 24 + 4 + 0 = 28 zeros."
        },
        {
          question: "What is the units digit of 3^401?",
          explanation: "Cyclicity of 3 is 4 (3, 9, 7, 1). Power 401 mod 4 = 1. Hence, units digit = 3^1 = 3."
        }
      ],
      whenToSkipRule: "Skip if numbers properties require solving multi-variable non-linear Diophantine equations with undefined integer barriers."
    },
    {
      id: 'remainders',
      title: 'Remainders',
      category: 'Number System',
      testsWhat: 'Modular arithmetic, Fermat\'s theorem, Euler\'s totient theorem, and Chinese Remainder Theorem.',
      howToIdentify: 'Keywords: "remainder when divided by", "modulus", "last two digits".',
      keyFormulas: [
        {
          expr: "a^(p-1) ≡ 1 (mod p)",
          variables: "p = prime divisor, a = coprime base integer",
          shortcut: "Fermat's Little Theorem",
          useCase: "Find remainder of 2^100 divided by 101.",
          mistakeToAvoid: "Using Fermat's theorem when the divisor is composite."
        },
        {
          expr: "Last two digits of N = N (mod 100)",
          variables: "Modular divide by 100",
          shortcut: "If base ends in 1, last two digits have standard recurring binomial structures.",
          useCase: "Isolating digits of 31^40.",
          mistakeToAvoid: "Looking only at the units digit cyclic pattern."
        }
      ],
      shortcutMethod: "Euler's Totient Theorem: N^Φ(D) ≡ 1 (mod D), where Φ(D) is Euler's count. For composite D, Φ(D) = D*(1 - 1/p1)*(1 - 1/p2).",
      optionBasedApproach: "If remainder has multiple constraints, look for options that satisfy all modular systems simultaneously.",
      backSolvingApproach: "Add multiples of the divisor to remainder targets to see which maps to the base power.",
      approximationApproach: "Convert powers to values very close to the divisor (e.g., if divisor is 9, write base as 8 or 10 since 8 ≡ -1 and 10 ≡ 1 mod 9).",
      commonTraps: [
        "Simplifying fractions by dividing numerator and denominator without multiplying the final remainder back by the canceled factor.",
        "Assuming negative remainder represents the positive index (remainder -2 mod 9 is 7)."
      ],
      typicalPatterns: [
        "Find the remainder when a base power is divided by a composite number.",
        "Last two digits of an exponential value."
      ],
      fastestSolvingRoute: "Express base close to ±1 mod divisor -> Use binomial expansion to cancel terms -> If composite, split using Chinese Remainder Theorem -> Merge.",
      miniExamples: [
        {
          question: "Find the remainder when 2^100 is divided by 17.",
          explanation: "2^4 = 16 ≡ -1 (mod 17). Rewrite: 2^100 = (2^4)^25 = (-1)^25 = -1 ≡ 16 (mod 17)."
        }
      ],
      whenToSkipRule: "Skip if divisor is a large three-digit composite requiring extensive multi-stage totient reductions."
    },
    {
      id: 'hcf-lcm',
      title: 'HCF & LCM',
      category: 'Number System',
      testsWhat: 'Greatest common divisors, least common multiples, repeating cycles and fractional divisions.',
      howToIdentify: 'Keywords: "bells toll together", "leaves same remainder", "greatest possible scale", "HCF/LCM ratio".',
      keyFormulas: [
        {
          expr: "HCF * LCM = Product of Two Numbers",
          variables: "Only holds strictly valid for exactly two numbers.",
          shortcut: "HCF of fractions = HCF(Num) / LCM(Den); LCM of fractions = LCM(Num) / HCF(Den)",
          useCase: "Find step interval for three running tracks of fractional lengths.",
          mistakeToAvoid: "Applying HCF * LCM = Product to three or more numbers."
        }
      ],
      shortcutMethod: "HCF of numbers always divides the absolute difference between any two of the numbers. Use this to isolate HCF of huge numbers instantly.",
      optionBasedApproach: "Look for multiples. The LCM of a group of numbers is always divisible by all constituents. Check option compatibility.",
      backSolvingApproach: "Factorize the options to see if they yield the specified HCF or LCM with the given numbers.",
      approximationApproach: "Since LCM is at least as large as the greatest number, eliminate any small choices instantly.",
      commonTraps: [
        "Forgetting to reduce fractions to their simplest form before calculating fraction HCF/LCM.",
        "In remainder puzzles, confusing whether to add or subtract the remainder from the base LCM."
      ],
      typicalPatterns: [
        "Find greatest number dividing A, B, C leaving same remainder r.",
        "Find smallest number which when divided by a, b, c leaves remainders x, y, z."
      ],
      fastestSolvingRoute: "Identify if the question asks for divisible sets (LCM) or divisors (HCF) -> Apply prime factorization -> Compute relative target.",
      miniExamples: [
        {
          question: "Find the greatest number that divides 100, 150, 225 cleanly.",
          explanation: "Take difference: 150 - 100 = 50. 225 - 150 = 75. Difference HCF: HCF(50, 75) = 25. Thus, greatest common divisor = 25."
        }
      ],
      whenToSkipRule: "Skip when numbers are variables inside non-linear functional cycles where prime factorization bases cannot be isolated."
    },
    {
      id: 'factors-multiples',
      title: 'Factors & Multiples',
      category: 'Number System',
      testsWhat: 'Prime factorization, counting divisors, sum of divisors, even-odd factor splits and co-primes.',
      howToIdentify: 'Keywords: "number of factors", "sum of factors", "product of factors", "coprime to", "even factors".',
      keyFormulas: [
        {
          expr: "Total Factors = (a + 1)(b + 1)(c + 1)...",
          variables: "For N = p^a * q^b * r^c (where p, q, r are distinct primes)",
          shortcut: "Number of ways to write N as product of two factors = Total Factors / 2",
          useCase: "Find possible integral coordinate pairs in Hyperbolic equations.",
          mistakeToAvoid: "Applying coefficients before ensuring base components are strictly prime in factorization."
        }
      ],
      shortcutMethod: "Perfect squares always have an odd number of factors. Non-perfect squares always have an even number of factors.",
      optionBasedApproach: "If options ask for total factors of a large composite, check odd/even traits to eliminate non-perfect square candidates.",
      backSolvingApproach: "Verify total factors counts by building exponential factor trees from test divisors.",
      approximationApproach: "For ultra-large composites, limit factor counts using approximate base prime counts.",
      commonTraps: [
        "Counting factors on bases that aren't prime factors (e.g. 10^4 is 2^4 * 5^4, not 5 factors).",
        "Forgetting to exclude negative integer factors."
      ],
      typicalPatterns: [
        "Find the number of even factors of N.",
        "Find the number of ways N can be resolved as product of two co-prime integers."
      ],
      fastestSolvingRoute: "Reduce number N to standard prime form p^a * q^b -> Extract exponents -> Sum or multiply using factor formulas.",
      miniExamples: [
        {
          question: "Find total factors of 360.",
          explanation: "360 = 2^3 * 3^2 * 5^1. Prime bases are 2, 3, 5. Total factors = (3+1)*(2+1)*(1+1) = 4 * 3 * 2 = 24 factors."
        }
      ],
      whenToSkipRule: "Skip if factor definitions incorporate non-standard complex constraints over range boundaries."
    },
    {
      id: 'surds-indices',
      title: 'Surds & Indices',
      category: 'Algebra',
      testsWhat: 'Exponential laws, rationalizing denominators, irrational equations, and radical simplifications.',
      howToIdentify: 'Keywords: "cube root of", "indices comparison", "rationalize", "solve for x in base power".',
      keyFormulas: [
        {
          expr: "a^m * a^n = a^(m+n); (a^m)^n = a^(mn)",
          variables: "a = basis value, m, n = real exponents",
          shortcut: "If base is equal, equate powers.",
          useCase: "Solving linear equations in exponential blocks.",
          mistakeToAvoid: "Writing a^m + a^n as a^(m+n) (this is a critical algebra blunder)."
        }
      ],
      shortcutMethod: "Rationalizing: Multiply numerator/denominator by conjugate: 1 / (√a + √b) = (√a - √b) / (a - b).",
      optionBasedApproach: "Substitute option integers directly. Surd answers must combine to rational values; look for choices that make radicands perfect squares.",
      backSolvingApproach: "Plug in numbers from answers. If x matches a target, it should yield integer values under square roots.",
      approximationApproach: "Use standard approximate roots: √2 ≈ 1.414, √3 ≈ 1.732, √5 ≈ 2.236 to quickly estimate inequalities.",
      commonTraps: [
        "Confusing -a^n with (-a)^n.",
        "Ignoring alternate negative roots during radical simplifications."
      ],
      typicalPatterns: [
        "Determine the largest value among √2, ∛3, ∜5.",
        "Solve nested infinitely repeating radicals like √(6 + √(6 + ...))."
      ],
      fastestSolvingRoute: "Convert radical bases to lowest prime powers -> Line up variables -> Equate powers on left and right.",
      miniExamples: [
        {
          question: "Evaluate √(12 + √(12 + √(12 + ... up to infinity))).",
          explanation: "Let expression be x. x = √(12 + x) => x^2 - x - 12 = 0 => (x - 4)(x + 3) = 0. Since radicand is positive, x = 4. (Shortcut: 12 = 3 * 4; for positive series, larger term 4 is answer)."
        }
      ],
      whenToSkipRule: "Skip if surd layers have multiple variable levels under nested irrational radicands."
    },
    {
      id: 'logarithms',
      title: 'Logarithms',
      category: 'Algebra',
      testsWhat: 'Base properties, product-sum logarithmic translations, domains, and base conversions.',
      howToIdentify: 'Keywords: "log_b(a)", "domain of log", "independent of x".',
      keyFormulas: [
        {
          expr: "log_b(xy) = log_b(x) + log_b(y); log_b(x/y) = log_b(x) - log_b(y)",
          variables: "b = base > 0 and != 1, x, y > 0",
          shortcut: "log_b(x^k) = k * log_b(x)",
          useCase: "Converting complex multiplication variables to simple additions.",
          mistakeToAvoid: "Writing log(x + y) as log(x) + log(y) or log(x)/log(y) as log(x-y)."
        },
        {
          expr: "log_b(a) = log_k(a) / log_k(b)",
          variables: "b, k = base parameters",
          shortcut: "log_b(a) * log_a(b) = 1",
          useCase: "Rationalizing composite bases to solve uniform variables.",
          mistakeToAvoid: "Ignoring that base must not equal 1."
        }
      ],
      shortcutMethod: "Base-Substitution Tool: If equations contain complex algebra symbols, substitute base as 2 or 10, then convert to numerical logs.",
      optionBasedApproach: "Log answers are typically elegant integers. Check integers that map cleanly to powers of the log base.",
      backSolvingApproach: "Substitute option values into log arguments. Correct option must yield domain-valid (>0) base terms.",
      approximationApproach: "Using log_2(3) as slightly below 1.6 can quickly estimate linear limits.",
      commonTraps: [
        "Neglecting domain checks: solving log(x-2) and getting x=1, which is invalid since x-2 must be > 0.",
        "Swapping bases incorrectly during base-changing operations."
      ],
      typicalPatterns: [
        "Log series summation with sliding bases.",
        "Inequalities holding nested logarithmic terms."
      ],
      fastestSolvingRoute: "Normalize all logarithms to a common base using the base change theorem -> Compile inputs -> Equate argument blocks.",
      miniExamples: [
        {
          question: "Solve for x: log_2(x) + log_2(x - 2) = 3.",
          explanation: "log_2(x*(x - 2)) = 3 => x(x - 2) = 2^3 = 8 => x^2 - 2x - 8 = 0 => (x - 4)(x + 2) = 0. Since x > 2 for domain validity, x must be 4."
        }
      ],
      whenToSkipRule: "Skip if logs are nested inside complex trigonometric inequalities with arbitrary variable ranges."
    },
    {
      id: 'linear-equations',
      title: 'Linear Equations',
      category: 'Algebra',
      testsWhat: 'System of linear equations, integer solution bounds, coordinates, and age/coin puzzles.',
      howToIdentify: 'Keywords: "unique solution", "infinite solutions", "no solution", "integral coordinates".',
      keyFormulas: [
        {
          expr: "a1/a2 = b1/b2 ≠ c1/c2 (No solution); a1/a2 = b1/b2 = c1/c2 (Infinite)",
          variables: "a,b,c are coefficients of a*x + b*y = c",
          shortcut: "Cross-multiplication to solve standard x,y sets.",
          useCase: "Check consistency of a system of equations.",
          mistakeToAvoid: "Forgetting to write equations in the standard form (ax + by = c) before extracting coefficients."
        }
      ],
      shortcutMethod: "To find positive integer solutions for ax + by = c, find one initial solution (x0, y0). Subsequent solutions scale x by b and y by a.",
      optionBasedApproach: "In age or coins puzzles, options directly represent quantities. Plug choices and check if constraints match.",
      backSolvingApproach: "Direct substitution of options into equations takes seconds and completely bypasses algebraic manipulation.",
      approximationApproach: "Estimate intersection of lines graphically on rough paper when solving complex spatial allocations.",
      commonTraps: [
        "Failing to check if variables must have positive integer limits (coins, people cannot be fractional).",
        "Assuming infinite solutions without checking if constant terms also match the ratio."
      ],
      typicalPatterns: [
        "No solution condition checks.",
        "Find the number of positive integral solutions of 3x + 5y = 120."
      ],
      fastestSolvingRoute: "Express one variable in terms of the other -> Locate the first integer solution by testing small integers -> Apply step ratios to count factors.",
      miniExamples: [
        {
          question: "Find the number of positive integral solutions of 2x + 3y = 30.",
          explanation: "Express x: x = (30 - 3y)/2. For x to be integer, y must be even. If y=2, x=12. y=4, x=9. y=6, x=6. y=8, x=3. (If y=10, x=0, not positive). Total 4 solutions."
        }
      ],
      whenToSkipRule: "Skip if linear equations contain more than 4 variables and less than 3 constraints, requiring exhaustive manual matrix optimization."
    },
    {
      id: 'quadratic-equations',
      title: 'Quadratic Equations',
      category: 'Algebra',
      testsWhat: 'Roots of quadratics, discriminants, maximum/minimum values, and symmetric identities.',
      howToIdentify: 'Keywords: "roots are real and equal", "difference of roots", "minimum value of quadratic", "ax^2 + bx + c".',
      keyFormulas: [
        {
          expr: "Roots = (-b ± √(b² - 4ac)) / (2a)",
          variables: "a, b, c = quadratic coefficients",
          shortcut: "Sum of roots (α + β) = -b/a; Product of roots (αβ) = c/a",
          useCase: "Find roots of complex equations or derive symmetric equations.",
          mistakeToAvoid: "Failing to check if discriminant is negative before representing real roots."
        },
        {
          expr: "Min/Max Value occurs at x = -b/(2a), equaling (4ac - b²) / (4a)",
          variables: "a determines direction: a > 0 (Min value), a < 0 (Max value)",
          shortcut: "Vertex of parabola at (-b/2a, -D/4a)",
          useCase: "Find optimal profit output equation in commercial algebra.",
          mistakeToAvoid: "Confusing the x-location where min/max occurs with the actual min/max value itself."
        }
      ],
      shortcutMethod: "Symmetric root adjustments: If roots are α and β, equation with roots 1/α and 1/β is obtained by replacing x with 1/x (cx² + bx + a = 0).",
      optionBasedApproach: "Check root traits. If roots are integers, Sum and Product must be integers. Look for options with sum equal to -b/a.",
      backSolvingApproach: "Plug in root options. The correct root must satisfy ax² + bx + c = 0.",
      approximationApproach: "For root locations, approximate √D to the nearest decimal to quickly evaluate root ranges.",
      commonTraps: [
        "Confusing symmetric roots properties.",
        "Overlooking boundary constraints when x is limited to real domains."
      ],
      typicalPatterns: [
        "Find parameters for equal roots.",
        "Establish range of values for quadratic to remain strictly positive."
      ],
      fastestSolvingRoute: "Analyze standard discriminant D = b² - 4ac. Apply root product and sum properties directly without completing the square.",
      miniExamples: [
        {
          question: "Find the minimum value of f(x) = x^2 - 4x + 10.",
          explanation: "Here a = 1 > 0, so min occurs at x = -b/2a = 4/2 = 2. Min value = f(2) = 2^2 - 4(2) + 10 = 4 - 8 + 10 = 6."
        }
      ],
      whenToSkipRule: "Skip if quadratics are nested inside non-rational fractional mod components with shifting intervals."
    },
    {
      id: 'inequalities',
      title: 'Inequalities',
      category: 'Algebra',
      testsWhat: 'Interval bounding, wavy curve method, modulus inequality grids, and AM-GM inequality.',
      howToIdentify: 'Keywords: "less than", "satisfies range of", "AM-GM inequality", "max/min bounds of expressions".',
      keyFormulas: [
        {
          expr: "AM ≥ GM ≥ HM",
          variables: "Arithmetic, Geometric and Harmonic means of positive real numbers",
          shortcut: "For positive numbers, (a+b)/2 ≥ √(ab)",
          useCase: "Find minimum value of (x + 1/x) for positive x.",
          mistakeToAvoid: "Applying AM-GM on numbers that can hold negative values."
        }
      ],
      shortcutMethod: "Wavy Curve Method: Arrange factors on a number line, count powers, alternate signs starting with positive (+) from the extreme right.",
      optionBasedApproach: "Pick critical integers inside or outside boundaries. Test them to eliminate invalid options immediately.",
      backSolvingApproach: "Substitute extreme range options into the inequality. If boundary values fail, the corresponding option is invalid.",
      approximationApproach: "Plug in 0, 1, or huge numbers (like 1000) to find if the inequality is valid at extreme scales.",
      commonTraps: [
        "Squaring both sides of an inequality without ensuring both sides are strictly positive.",
        "Multiplying an inequality by a variable whose sign (positive or negative) is undetermined."
      ],
      typicalPatterns: [
        "Find range of x for which (x-1)(x-3)/(x-2) > 0.",
        "Determine minimum of sum of variables when product is constant using AM-GM."
      ],
      fastestSolvingRoute: "Factorize completely -> Draw wavy curve interval map -> Mark target signs (+ for >, - for <) -> Write range.",
      miniExamples: [
        {
          question: "Solve (x - 1)(x - 3) < 0.",
          explanation: "Critical points are 1 and 3. On number line, signs are: (+ for x > 3), (- for 1 < x < 3), (+ for x < 1). We need negative (<0). Solution is 1 < x < 3."
        }
      ],
      whenToSkipRule: "Skip if inequalities feature multiple layered fractional radical modulus terms spanning disconnected domains."
    },
    {
      id: 'modulus',
      title: 'Modulus',
      category: 'Algebra',
      testsWhat: 'Absolute values, distance coordinates, piecewise equations, and modulus graphs.',
      howToIdentify: 'Keywords: "|x - a|", "number of solutions for modulus", "minimum of sum of absolute differences".',
      keyFormulas: [
        {
          expr: "|x| = x (if x ≥ 0) or -x (if x < 0)",
          variables: "Absolute distance magnitude from origin",
          shortcut: "|x - a| represents distance between x and a on number line.",
          useCase: "Isolate intervals to solve absolute algebraic equations.",
          mistakeToAvoid: "Assuming |x| is always positive without realizing that variable x inside can be negative."
        }
      ],
      shortcutMethod: "Modulus inequality solver: |x - a| < b means a - b < x < a + b. Graphically, the distance from 'a' must be less than 'b'.",
      optionBasedApproach: "Test integer boundary values. If equation is |x-3| + |x-5| = 2, test values inside, left, and right of the bounds [3, 5].",
      backSolvingApproach: "Plug choices directly into absolute bars. Correct choice will satisfy equations in simple math.",
      approximationApproach: "Estimate ranges by graphing the mod points. Graph of |x-a| is a V with vertex at x=a.",
      commonTraps: [
        "Failing to split equations into piecewise intervals, overlooking valid negative solutions.",
        "Assuming modulus is linear under algebraic operations."
      ],
      typicalPatterns: [
        "Solve equations of style |x-1| + |x-3| = c.",
        "Determine the area bounded by modulus graphs like |x| + |y| = c."
      ],
      fastestSolvingRoute: "Draw critical points on a number line -> Partition domain into intervals -> Solve linear equations within each interval -> Remove invalid roots.",
      miniExamples: [
        {
          question: "Solve for x: |x - 3| = 5.",
          explanation: "Two cases: Case 1: x - 3 = 5 => x = 8. Case 2: x - 3 = -5 => x = -2. Both solutions are valid."
        }
      ],
      whenToSkipRule: "Skip if more than 3 nested modulus structures are present with overlapping variable constants."
    },
    {
      id: 'functions',
      title: 'Functions',
      category: 'Algebra',
      testsWhat: 'Domain, range, composite functions, functional equations, odd-even functions, and periodic bounds.',
      howToIdentify: 'Keywords: "f(g(x))", "f(x+y) = f(x)f(y)", "even function", "period of function".',
      keyFormulas: [
        {
          expr: "f(x+y) = f(x) + f(y) (Linear: f(x) = kx); f(x+y) = f(x)f(y) (Exponential: f(x) = a^x)",
          variables: "Standard functional equation paradigms",
          shortcut: "Substitute x=1 to find base constant 'k' or 'a'.",
          useCase: "Solving sum series of functions.",
          mistakeToAvoid: "Assuming standard properties without checking boundary initial values."
        }
      ],
      shortcutMethod: "To test if a function is odd or even, plug in -x. If f(-x) = f(x), even (symmetric across y-axis). If f(-x) = -f(x), odd (symmetric across origin).",
      optionBasedApproach: "Substitute small integers like 0, 1, 2 into the functional equation to check coefficient scaling in options.",
      backSolvingApproach: "Directly substitute option coordinates to check consistency with the composite rules.",
      approximationApproach: "Plot standard curves to estimate range boundaries of transcendental expressions.",
      commonTraps: [
        "Taking square roots inside functions without restricting domain values to prevent negative radicands.",
        "Confusing composition order: f(g(x)) is not equal to g(f(x))."
      ],
      typicalPatterns: [
        "Find domain of f(x) = 1/√(x² - 4).",
        "Solve composite chain equations."
      ],
      fastestSolvingRoute: "Identify domain limits (denominators ≠ 0, under root ≥ 0, log argument > 0) -> Simplify base patterns -> Trace composite steps sequentially.",
      miniExamples: [
        {
          question: "If f(x) = 2x + 3 and g(x) = x^2, find f(g(3)).",
          explanation: "First find g(3) = 3^2 = 9. Then find f(9) = 2(9) + 3 = 18 + 3 = 21."
        }
      ],
      whenToSkipRule: "Skip if functions feature nested multi-tier recursive transitions with unspecified initial limits."
    },
    {
      id: 'progressions',
      title: 'Progressions: AP, GP, HP',
      category: 'Algebra',
      testsWhat: 'Arithmetic, Geometric and Harmonic progressions, arithmetic-geometric series (AGP) and custom series.',
      howToIdentify: 'Keywords: "arithmetic progression", "common ratio", "harmonic mean", "sum to infinity".',
      keyFormulas: [
        {
          expr: "AP: T_n = a + (n-1)d; Sum = (n/2)[2a + (n-1)d]",
          variables: "a = first term, d = common difference, n = term index",
          shortcut: "Sum of AP can also be expressed as n * Middle Term (for odd n).",
          useCase: "Summing linear series of values.",
          mistakeToAvoid: "Using incorrect term count 'n' by miscalculating boundary terms."
        },
        {
          expr: "GP: T_n = a*r^(n-1); Sum to Infinity S_inf = a / (1-r)",
          variables: "a = first term, r = common ratio (|r| < 1 for infinity)",
          shortcut: "GP sum: S_n = a(r^n - 1)/(r - 1)",
          useCase: "Compounding geometric steps and decay limits.",
          mistakeToAvoid: "Applying sum to infinity when common ratio r holds magnitude greater than or equal to 1."
        }
      ],
      shortcutMethod: "Substitution of terms: Set n=1, 2, or 3 to convert progression formulas into small concrete equations.",
      optionBasedApproach: "Look at progression ratios. Sum options must match initial values. If n=1, option formula must equal the first term 'a'.",
      backSolvingApproach: "Plug in option ranges to verify if terms maintain constant common differences (AP) or ratios (GP).",
      approximationApproach: "For sum to infinity of decaying series, round small outer terms to estimate the exact boundary values.",
      commonTraps: [
        "Applying GP formulas where common ratio changes dynamically.",
        "Assuming numbers are in GP without verifying the common ratio is constant."
      ],
      typicalPatterns: [
        "Find the sum of all three-digit numbers divisible by 7.",
        "Sum of infinite AGP (Arithmetic-Geometric Progression)."
      ],
      fastestSolvingRoute: "Identify sequence type -> Write base equation using variables a and d/r -> Find constraints from terms -> Solve.",
      miniExamples: [
        {
          question: "Find the sum of infinite GP: 1, 1/2, 1/4, 1/8...",
          explanation: "Here a = 1, r = 1/2 < 1. S_inf = a / (1 - r) = 1 / (1 - 1/2) = 2."
        }
      ],
      whenToSkipRule: "Skip complex AGP questions with fractional indices where index offsets cannot be converted to common ratios easily."
    },
    {
      id: 'set-theory',
      title: 'Set Theory',
      category: 'Modern Math',
      testsWhat: 'Unions, intersections, subsets, Venn diagram regions, and bounding constraints.',
      howToIdentify: 'Keywords: "percentage of people who read", "overlap", "at least two items", "Venn diagrams".',
      keyFormulas: [
        {
          expr: "n(A∪B∪C) = n(A) + n(B) + n(C) - (sum of double intersections) + n(A∩B∩C)",
          variables: "U = Universe, elements belonging to sets A, B, C",
          shortcut: "Total = Single + Double + Triple components partitioned cleanly",
          useCase: "Finding missing category overlaps in social surveys.",
          mistakeToAvoid: "Double counting overlapping regions."
        }
      ],
      shortcutMethod: "Partitioned Variable Method: Mark each region with an independent variable (a, b, c for single; d, e, f for double; g for triple). Write equations as simple additions.",
      optionBasedApproach: "Check alignment properties. If the total is 100, the sum of subsets must be ≤ 100. Look for range limits in options.",
      backSolvingApproach: "Plug values into triple intersection 'g' and work outwards to check if all outer segments are non-negative integers.",
      approximationApproach: "Estimate minimum intersection limits by analyzing sum deficits versus total universe.",
      commonTraps: [
        "Assuming 'read only book A' is same as 'read book A'.",
        "Overlooking the complement region outside all circles in the universal set."
      ],
      typicalPatterns: [
        "Standard 3-circle Venn diagram survey problems.",
        "Maximization/minimization of players who play exactly 2 sports."
      ],
      fastestSolvingRoute: "Draw empty Venn circles -> Fill intersection layers from inside out (Triple first, then Doubles, then Single) -> Solve.",
      miniExamples: [
        {
          question: "In a group of 100 people, 70 like tea, 60 like coffee. What is the minimum number of people who like both?",
          explanation: "Using Min intersection formula: Max(0, Tea + Coffee - Total) = Max(0, 70 + 60 - 100) = Max(0, 30) = 30 people."
        }
      ],
      whenToSkipRule: "Skip 4-circle Venn diagrams or sets with multiple non-discrete floating parameters."
    },
    {
      id: 'pnc',
      title: 'Permutation & Combination',
      category: 'Modern Math',
      testsWhat: 'Counting paths, Arrangements, Selection groups, Grid routing, and Circular seating permutations.',
      howToIdentify: 'Keywords: "number of ways to arrange", "selection of balls", "no two vowels sit together", "circular arrangements".',
      keyFormulas: [
        {
          expr: "nPr = n! / (n-r)!; nCr = n! / [r! * (n-r)!]",
          variables: "n = pool size, r = chosen terms count",
          shortcut: "nCr = nC(n-r). E.g. 10C8 = 10C2 = 45.",
          useCase: "Arranging or selecting groups cleanly.",
          mistakeToAvoid: "Using Permutations (order matters) when Combinations (order doesn't matter) is required."
        }
      ],
      shortcutMethod: "Gap Method (for non-adjacent spacing constraints): Arrange the main items first, then insert restricted items in the spaces (gaps) between them.",
      optionBasedApproach: "Permutation answers are usually highly composite numbers with factors of 120 or 720. Check option divisibility by small factorials.",
      backSolvingApproach: "Uncommon; however, small number limits in options can be verified using manual tree diagrams.",
      approximationApproach: "For huge selections, identify orders of magnitude (e.g. 1000s vs 100000s) to eliminate outliers.",
      commonTraps: [
        "Treating identical objects as distinct individuals during choices.",
        "In circular arrangements, forgetting that (n-1)! is the baseline limit instead of n!."
      ],
      typicalPatterns: [
        "Arrange a word's letters such that vowels are never adjacent.",
        "Choosing cards or members forming specific constraint committees."
      ],
      fastestSolvingRoute: "Identify whether order matters -> Isolate restrictions -> Deal with restricted items first -> Fill empty slots -> Compute.",
      miniExamples: [
        {
          question: "Find number of ways to arrange letters of 'CAT'.",
          explanation: "All 3 letters distinct. Total ways = 3! = 6."
        },
        {
          question: "Find number of ways to pick 2 players from a pool of 5.",
          explanation: "Order doesn't matter. Selection = 5C2 = (5 * 4) / (2 * 1) = 10 ways."
        }
      ],
      whenToSkipRule: "Skip if arrangements incorporate multi-level conditional probability splits with unspecified cyclical directions."
    },
    {
      id: 'probability',
      title: 'Probability',
      category: 'Modern Math',
      testsWhat: 'Sample space partitioning, conditional probability, expectation and binomial distributions.',
      howToIdentify: 'Keywords: "probability of drawing", "at least one", "independent events", "expected value".',
      keyFormulas: [
        {
          expr: "P(A) = Favorable Outcomes / Total Sample Space",
          variables: "Favorable = Target count, Total = aggregate permutations",
          shortcut: "P(At least one) = 1 - P(None of the target outcomes occur)",
          useCase: "Finding probability of selecting at least 1 white coin.",
          mistakeToAvoid: "Failing to normalize sample spaces under sequential choices."
        },
        {
          expr: "P(A|B) = P(A ∩ B) / P(B)",
          variables: "Conditional probability of A given B has occurred",
          shortcut: "Restrict the sample space to B directly.",
          useCase: "Find probability that chosen card is a spade, given it is black.",
          mistakeToAvoid: "Dividing by the universal sample space instead of P(B)."
        }
      ],
      shortcutMethod: "For 'at least' questions, always work backwards: P(At least one) = 1 - P(None). This turns complex combinations into a single product.",
      optionBasedApproach: "Value must lie elegantly between 0 and 1. If options look fractional, sum of favorable and non-favorable outcomes must match denominator.",
      backSolvingApproach: "Uncommon; look at fraction ratios in choices to check compliance.",
      approximationApproach: "For coin toss patterns, use standard normal distributions or binomial trees for high-speed estimation.",
      commonTraps: [
        "Assuming outcomes are equally likely when they are biased.",
        "Incorrectly identifying independent vs dependent events."
      ],
      typicalPatterns: [
        "Roll two dice and find the sum probability.",
        "Bag holds white and red balls; consecutive picks with or without replacement."
      ],
      fastestSolvingRoute: "Establish clean denominator (Total Sample Space) -> Establish favorable counts cleanly -> Solve fraction.",
      miniExamples: [
        {
          question: "Two dice are rolled. Find probability that sum is 10.",
          explanation: "Total Sample Space = 36. Favorable outcomes: (4,6), (5,5), (6,4) = 3 cases. P = 3 / 36 = 1/12."
        }
      ],
      whenToSkipRule: "Skip if continuous probability distributions with unknown calculus calculus boundaries are requested."
    },
    {
      id: 'geometry',
      title: 'Geometry',
      category: 'Geometry',
      testsWhat: 'Polygons, Triangles, Circles, Tangents, Angles, basic proofs, and area/length vectors.',
      howToIdentify: 'Keywords: "inscribed circle", "tangent to circle", "parallel lines", "centroid/orthocenter", "triangle side lengths".',
      keyFormulas: [
        {
          expr: "Area (Triangle) = 1/2 * b * h or √[s(s-a)(s-b)(s-c)]",
          variables: "s = semi-perimeter (a+b+c)/2; a,b,c are side lengths",
          shortcut: "Heron's Formula.",
          useCase: "Find area of scalene triangle.",
          mistakeToAvoid: "Using a random side as the height."
        },
        {
          expr: "Inradius r = Area / s; Circumradius R = abc / 4Area",
          variables: "Standard metrics for any triangle side profiles",
          shortcut: "For right triangles, r = (a + b - c) / 2.",
          useCase: "Find radius of circle inscribed inside right triangle.",
          mistakeToAvoid: "Applying r = (a+b-c)/2 shortcut on scalene triangles."
        }
      ],
      shortcutMethod: "Angle chasing rules: Always drop perpendicular lines to form right-angled triangles to quickly utilize Pythagoras triplets (3-4-5, 5-12-13, 8-15-17).",
      optionBasedApproach: "Look at constants. If circle is involved, option must hold a factor of π (or multiple of 11/7). Check the numeric results.",
      backSolvingApproach: "Option values can represent length parameters; check if they meet Pythagoras bounds.",
      approximationApproach: "Sketch the geometry scale to ratio on your scratching pad. Use a physical finger or pen tip to estimate values.",
      commonTraps: [
        "Assuming a triangle is isosceles or equilateral when it is not specified.",
        "Incorrectly assuming similar triangles without matching corresponding angle profiles."
      ],
      typicalPatterns: [
        "Determine chord length when radius and distance from center are given.",
        "Find the ratio of areas of inscribed polygons."
      ],
      fastestSolvingRoute: "Identify similar triangles -> Set up linear ratio equalities -> Express unknown as variable -> Solve.",
      miniExamples: [
        {
          question: "In a right triangle with sides 6 and 8, find the inscribed circle's radius.",
          explanation: "Hypotenuse = √(6^2 + 8^2) = 10. Shortcut r = (a + b - c)/2 = (6 + 8 - 10)/2 = 4 / 2 = 2."
        }
      ],
      whenToSkipRule: "Skip complex geometry puzzles containing non-standard intertwined intersecting circle segments with multiple unknown tangents."
    },
    {
      id: 'mensuration',
      title: 'Mensuration',
      category: 'Geometry',
      testsWhat: 'Volume, surface areas, conical cuts, spheres, cylinders, and optimal packing shapes.',
      howToIdentify: 'Keywords: "cylinder melted and recast", "total surface area", "cube cut into smaller pieces", "optimal radius".',
      keyFormulas: [
        {
          expr: "Volume (Cylinder) = πr²h; Volume (Cone) = 1/3 * πr²h",
          variables: "r = radius, h = height",
          shortcut: "Conical cut: ratio of volumes of sliced cone = (r_small/r_large)^3",
          useCase: "Calculate melting and recasting parameters.",
          mistakeToAvoid: "Failing to count flat lids when calculating Total Surface Area of hemicylinders."
        }
      ],
      shortcutMethod: "If dimensions change by factor scale a, b, c, volume scales dynamically by factor a*b*c.",
      optionBasedApproach: "Since formulas use π (approx 22/7), calculations usually yield answers containing factors of 11. Check options for divisibility by 11.",
      backSolvingApproach: "Substitute option radius bounds into volume equations.",
      approximationApproach: "Use standard fraction replacements: π ≈ 3.14 or 22/7. Approximate dimensions to clean integers.",
      commonTraps: [
        "Using diameter instead of radius inside equations.",
        "Omitting base circle surface area in cone TSA formulas (TSA = πrl + πr²)."
      ],
      typicalPatterns: [
        "Spherical balls melted to form a wire of length L.",
        "Determine the maximum size of a cube carved from an inscribed sphere."
      ],
      fastestSolvingRoute: "Equate volumes before and after recasting -> Cancel common factor π on both sides -> Solve.",
      miniExamples: [
        {
          question: "A metal cylinder with r=4cm, h=9cm is melted to form spheres of r=3cm. How many spheres are obtained?",
          explanation: "Volume cylinder = π * 16 * 9 = 144π. Volume sphere = 4/3 * π * 27 = 36π. Count = 144π / 36π = 4 spheres."
        }
      ],
      whenToSkipRule: "Skip if shapes feature complex cut sections of prisms and frustums at weird oblique split planes."
    },
    {
      id: 'coordinate-geometry',
      title: 'Coordinate Geometry',
      category: 'Geometry',
      testsWhat: 'Distance formula, line equations, slopes, area of polygons on charts, and circles in coordinates.',
      howToIdentify: 'Keywords: "point (x,y)", "slope of line", "intersection of curves", "coordinates of centroid".',
      keyFormulas: [
        {
          expr: "Distance d = √[(x2 - x1)² + (y2 - y1)²]",
          variables: "(x1,y1) and (x2,y2) are point coordinates",
          shortcut: "Slope m = (y2 - y1) / (x2 - x1)",
          useCase: "Find absolute length of geometric segments.",
          mistakeToAvoid: "Mixing up coordinates order within formulas."
        },
        {
          expr: "Parallel: m1 = m2; Perpendicular: m1 * m2 = -1",
          variables: "m1, m2 are line slopes",
          shortcut: "Perpendicular to ax + by = c is bx - ay = k.",
          useCase: "Find orthogonal reflections.",
          mistakeToAvoid: "Forgetting to swap indicators and signs of coefficients."
        }
      ],
      shortcutMethod: "Area of triangle in coordinate form: Shoelace algorithm. Write coordinates in array, cross-multiply and subtract.",
      optionBasedApproach: "Substitute options into line equations; coordinates must fit standard formulas of curves.",
      backSolvingApproach: "Verify linear intersections by checking which option point satisfies both straight lines.",
      approximationApproach: "Graph points roughly on a grid system with 1-cm spacing to estimate distances and coordinates.",
      commonTraps: [
        "Forgetting to swap signs when converting slope values.",
        "Incorrectly allocating x and y values in standard coordinates formulas."
      ],
      typicalPatterns: [
        "Find the centroid of a triangle with coordinate vertex points.",
        "Find distance from coordinate point to line."
      ],
      fastestSolvingRoute: "Identify linear equations -> Deconstruct slopes -> Apply coordinate intersection or distance formulas -> Solve.",
      miniExamples: [
        {
          question: "Find equation of line passing through (1,2) perpendicular to line with slope 2.",
          explanation: "Perpendicular slope m = -1/2. Equation: y - 2 = -1/2 (x - 1) => 2y - 4 = -x + 1 => x + 2y = 5."
        }
      ],
      whenToSkipRule: "Skip if finding intersection of complex parabolas and hyperbola curves with coordinate bounds."
    },
    {
      id: 'trigonometry',
      title: 'Trigonometry',
      category: 'Geometry',
      testsWhat: 'Trig ratios, fundamental identities, heights and distances, and simple period structures.',
      howToIdentify: 'Keywords: "elevation angle of tower", "sine, cosine, tangent", "maximum of expression sin(x) + cos(x)".',
      keyFormulas: [
        {
          expr: "sin²x + cos²x = 1; 1 + tan²x = sec²x",
          variables: "x = real angle bounds",
          shortcut: "Max value of a*sin(x) + b*cos(x) is √(a² + b²); Min is -√(a² + b²)",
          useCase: "Find maximum bounds of periodic equations.",
          mistakeToAvoid: "Assuming limits exceed the actual bounding root parameters."
        }
      ],
      shortcutMethod: "Substitute standard angles (0°, 30°, 45°, 60°, 90°) to convert complex equations into simple ratios.",
      optionBasedApproach: "Plug in target values. Standard angles simplify selections fast. Search for choices with √3 or √2 factors.",
      backSolvingApproach: "Back-solve angle valuations by plugging options into the given profiles.",
      approximationApproach: "Use standard trigonometric estimates (sin 30° = 0.5, sin 45° ≈ 0.707, sin 60° ≈ 0.866) to check heights.",
      commonTraps: [
        "Confusing angle of elevation (from horizontal up) with depression (from horizontal down).",
        "Mixing secant/cosecant transformations."
      ],
      typicalPatterns: [
        "Heights and distances with moving shadows.",
        "Max/Min optimization of complex trig variables."
      ],
      fastestSolvingRoute: "Set up right triangles representing heights -> Convert word rules to tangent ratios -> Solve.",
      miniExamples: [
        {
          question: "Find max value of 3*sin(x) + 4*cos(x).",
          explanation: "Max value = √(3^2 + 4^2) = √25 = 5."
        }
      ],
      whenToSkipRule: "Skip if trigonometric identities feature multiple nested composite variables that cannot be rationalized to standard values."
    }
  ];

  // VARC Study Guide Data
  const varcGrids = [
    {
      title: "Reading Comprehension (Inference/Main Idea/Tone)",
      tests: "Tests logical agility, critical synthesis, and identification of argument layers.",
      identify: "Granular texts across philosophy, science, history, sociology.",
      method: [
        "Paragraph Map: Skim first and last lines on screen. Write down a 3-word summary for each block.",
        "Question Filter: Read question stem, target the source paragraph, isolate argument, select choice."
      ],
      traps: [
        "Extreme generalizations (Always, Never, Solely).",
        "Out of scope additions (analogies not supported inside textual blocks)."
      ],
      skip: "Skip if text syntax is extremely dense and archaic with triple negatives.",
      examples: [
        { q: "What does author agree with?", a: "Match relative expressions over definite extreme claims." }
      ]
    },
    {
      title: "Verbal Ability (Para Jumbles, Odd Sentence & Summary)",
      tests: "Paragraph cohesion, structural chronological pathways, and statement pairing.",
      identify: "Presents randomized blocks of text requiring order entry.",
      method: [
        "Noun-Pronoun: Locate the noun (e.g. 'Albert Einstein') and match subsequent starting pronouns ('He', 'This physicist').",
        "Main axis: Identify start frame (Historians say...) as opening statement."
      ],
      traps: [
        "Assuming phonetic flow (sounds neat) without tracking chronological linkages.",
        "TITA jumbles have high options permutations, solve methodically by making mandatory blocks (e.g. BD is locked)."
      ],
      skip: "Never skip TITA jumbles as they carry no negative marks. Make your best logical entry.",
      examples: [
        { q: "Identify Odd Sentence.", a: "Isolate theme. The odd sentence will share keywords but pivot the scope or logic." }
      ]
    }
  ];

  // DILR Study Guide Data
  const dilrGrids = [
    {
      title: "Logical Arrangements & Games",
      tests: "Relational grid profiling, decision constraints, and dynamic options maps.",
      identify: "Seating orders, tournament matrices, or ranking allocations.",
      method: [
        "Grid Layout: Draw columns reflecting distinct categories.",
        "Lock Certainties: Fill definite variables first.",
        "Parallel Paths: If a split happens, draw two parallel boards (Grid A & B) instead of mental processing."
      ],
      traps: [
        "Assuming adjacency from general ordering clues.",
        "Reversing left/right under circular outwards-facing seats."
      ],
      skip: "Skip if categories surpass 4 parameters with sparse negative hints.",
      examples: [
        { q: "Who sits opposite B?", a: "Draw circle mapping and apply relative arrow markers." }
      ]
    },
    {
      title: "Set Theory & Dynamic Chart Systems",
      tests: "Unions, minimum intersections, subset optimization, and missing charts data.",
      identify: "Overlapping groups, tournaments trees, or radar metric dashboards.",
      method: [
        "Venn Map: Outline intersections, labeling territories.",
        "Equations: Set individual sectors as variables and write sum totals equations."
      ],
      traps: [
        "Confusing 'Subset A only' with 'Universe of A'.",
        "Overlooking complement values strictly outside the circles."
      ],
      skip: "Skip complex 4-circle Venn optimization sets if time limit constraints are tight.",
      examples: [
        { q: "Find overlapping sports players.", a: "Solve using the minimum intersection equation limits." }
      ]
    }
  ];

  // Filter topics based on category and search query
  const filteredQaTopics = qaTopics.filter(topic => {
    const matchesCategory = qaCategory === 'All' || topic.category === qaCategory;
    const matchesSearch = topic.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          topic.testsWhat.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          topic.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const activeQaTopic = qaTopics.find(t => t.id === activeQaTopicId) || qaTopics[0];

  return (
    <div className="space-y-8">
      {/* Immersive Header Block */}
      <div className="bg-linear-to-r from-slate-900 via-indigo-950 to-slate-900 border border-slate-800 rounded-3xl p-6 lg:p-8 text-white relative overflow-hidden shadow-2xl">
        <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl -mr-20 -mt-20"></div>
        <div className="relative z-10 space-y-4">
          <div className="inline-flex items-center gap-2 bg-indigo-500/20 border border-indigo-500/30 text-indigo-300 text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-widest">
            <Award className="w-3.5 h-3.5 text-indigo-400" />
            Ultima CAT Math & Strategy Suite
          </div>
          <h2 className="text-3xl lg:text-4xl font-extrabold tracking-tight">Practical Strategy Study Guides</h2>
          <p className="text-sm lg:text-base text-slate-300 max-w-3xl leading-relaxed font-sans">
            A comprehensive, rigorous study guide spanning the 29 critical Quantitative Aptitude subtopics, complete with exact formulas, fastest solving routes, option-based strategies, and skips triggers.
          </p>

          {/* Navigation Sub-Tabs */}
          <div className="flex flex-wrap gap-2 pt-2 border-t border-white/10">
            <button 
              onClick={() => { setActiveTab('QA_DEEP'); }}
              className={`px-4 py-2 text-xs font-bold rounded-xl transition-all flex items-center gap-2 ${activeTab === 'QA_DEEP' ? 'bg-indigo-600 text-white shadow-md border border-indigo-500' : 'bg-white/10 text-slate-300 hover:bg-white/15 hover:text-white'}`}
            >
              <Target className="w-4 h-4" />
              29 Math Deep-Dives
            </button>
            <button 
              onClick={() => { setActiveTab('FORMULAS'); }}
              className={`px-4 py-2 text-xs font-bold rounded-xl transition-all flex items-center gap-2 ${activeTab === 'FORMULAS' ? 'bg-indigo-600 text-white shadow-md border border-indigo-500' : 'bg-white/10 text-slate-300 hover:bg-white/15 hover:text-white'}`}
            >
              <Book className="w-4 h-4" />
              Formula Cheat-Sheet
            </button>
            <button 
              onClick={() => { setActiveTab('APPROACH_MATRIX'); }}
              className={`px-4 py-2 text-xs font-bold rounded-xl transition-all flex items-center gap-2 ${activeTab === 'APPROACH_MATRIX' ? 'bg-indigo-600 text-white shadow-md border border-indigo-500' : 'bg-white/10 text-slate-300 hover:bg-white/15 hover:text-white'}`}
            >
              <Table className="w-4 h-4" />
              Best Approach Matrix
            </button>
            <button 
              onClick={() => { setActiveTab('VARC'); }}
              className={`px-4 py-2 text-xs font-bold rounded-xl transition-all flex items-center gap-2 ${activeTab === 'VARC' ? 'bg-indigo-600 text-white shadow-md border border-indigo-500' : 'bg-white/10 text-slate-300 hover:bg-white/15 hover:text-white'}`}
            >
              <BookOpen className="w-4 h-4" />
              VARC English Verbal
            </button>
            <button 
              onClick={() => { setActiveTab('DILR'); }}
              className={`px-4 py-2 text-xs font-bold rounded-xl transition-all flex items-center gap-2 ${activeTab === 'DILR' ? 'bg-indigo-600 text-white shadow-md border border-indigo-500' : 'bg-white/10 text-slate-300 hover:bg-white/15 hover:text-white'}`}
            >
              <BarChart2 className="w-4 h-4" />
              DILR Logic Sets
            </button>
          </div>
        </div>
      </div>

      {/* RENDER VIEW: QA DEEP DIVE */}
      {activeTab === 'QA_DEEP' && (
        <div className="space-y-6">
          {/* Filter Bar */}
          <div className="bg-white p-4 border border-slate-200 rounded-2xl shadow-xs space-y-4">
            <div className="flex flex-col md:flex-row justify-between gap-4">
              <div className="flex flex-wrap gap-1.5">
                {(['All', 'Arithmetic', 'Number System', 'Algebra', 'Modern Math', 'Geometry'] as const).map(cat => (
                  <button
                    key={cat}
                    onClick={() => { setQaCategory(cat); }}
                    className={`px-3 py-1.5 text-xs font-bold rounded-lg transition-all ${qaCategory === cat ? 'bg-slate-900 text-white' : 'bg-slate-50 text-slate-600 hover:bg-slate-100'}`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
              
              <div className="flex items-center bg-slate-50 border border-slate-200 rounded-xl p-1 max-w-sm w-full">
                <Search className="w-4 h-4 text-slate-400 mx-2" />
                <input 
                  type="text" 
                  placeholder="Search 29 math topics..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-transparent border-0 outline-hidden text-xs text-slate-800 placeholder-slate-400 font-sans"
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            {/* Sidebar with 29 topics list */}
            <div className="lg:col-span-1 space-y-2 max-h-[800px] overflow-y-auto pr-2 border-r border-slate-100">
              <span className="block text-[10px] font-extrabold text-slate-400 uppercase tracking-widest pl-2 mb-2">
                Syllabus Subtopics ({filteredQaTopics.length})
              </span>
              <div className="space-y-1">
                {filteredQaTopics.map(topic => {
                  const isActive = activeQaTopicId === topic.id;
                  return (
                    <button
                      key={topic.id}
                      onClick={() => { setActiveQaTopicId(topic.id); }}
                      className={`w-full text-left px-3 py-2.5 rounded-xl border text-xs font-bold transition-all flex items-center justify-between ${isActive ? 'bg-indigo-600 text-white border-indigo-600 shadow-sm' : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-50'}`}
                    >
                      <span className="truncate">{topic.title}</span>
                      <span className={`text-[9px] font-extrabold px-1.5 py-0.5 rounded-md ${isActive ? 'bg-indigo-500 text-white' : 'bg-slate-100 text-slate-500'}`}>
                        {topic.category[0]}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* In-depth strategy card display */}
            <div className="lg:col-span-3 space-y-6">
              <div className="bg-white border border-slate-200 rounded-3xl p-6 lg:p-8 shadow-sm space-y-6">
                {/* Header */}
                <div className="border-b border-slate-100 pb-5 flex flex-wrap justify-between items-center gap-4">
                  <div>
                    <span className="bg-indigo-50 text-indigo-700 text-[10px] font-extrabold uppercase px-2.5 py-1 rounded-full border border-indigo-100 mb-1.5 inline-block">
                      {activeQaTopic.category} Subtopic
                    </span>
                    <h3 className="text-2xl font-black text-slate-900 tracking-tight">
                      {activeQaTopic.title}
                    </h3>
                  </div>
                  
                  <div className="bg-amber-50 text-amber-800 text-[11px] font-bold border border-amber-200/60 p-3 rounded-xl max-w-sm flex items-start gap-2">
                    <ShieldAlert className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                    <div>
                      <strong className="block text-amber-950 font-black">Skip Trigger:</strong>
                      {activeQaTopic.whenToSkipRule}
                    </div>
                  </div>
                </div>

                {/* Sub-block 1: Meaning & Spotting */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                    <span className="block text-[10px] font-extrabold text-indigo-600 uppercase tracking-widest mb-1">
                      Target Area & Cognitive Test
                    </span>
                    <p className="text-xs text-slate-600 leading-relaxed font-sans">{activeQaTopic.testsWhat}</p>
                  </div>
                  <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                    <span className="block text-[10px] font-extrabold text-emerald-600 uppercase tracking-widest mb-1">
                      Fast Recognition Criteria
                    </span>
                    <p className="text-xs text-slate-600 leading-relaxed font-sans">{activeQaTopic.howToIdentify}</p>
                  </div>
                </div>

                {/* Sub-block 2: Key Formulas with structured details */}
                <div className="space-y-4">
                  <h4 className="text-xs font-black text-slate-400 uppercase tracking-widest flex items-center gap-1">
                    <Book className="w-3.5 h-3.5 text-indigo-500" /> Key Formulas
                  </h4>
                  <div className="grid grid-cols-1 gap-4">
                    {activeQaTopic.keyFormulas.map((f, idx) => (
                      <div key={idx} className="border border-slate-150 rounded-2xl p-4 bg-slate-50/20 space-y-3">
                        <div className="flex justify-between items-center border-b border-slate-100 pb-2">
                          <code className="text-sm font-extrabold text-indigo-700 bg-indigo-50 px-2 py-1 rounded-md">{f.expr}</code>
                          <span className="text-[10px] text-slate-400 font-bold">Formula {idx+1}</span>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                          <div>
                            <strong className="block text-slate-700 mb-0.5">Parameters Meaning:</strong>
                            <span className="text-slate-500 font-sans">{f.variables}</span>
                          </div>
                          <div>
                            <strong className="block text-slate-700 mb-0.5">Shortcut Modifier:</strong>
                            <span className="text-slate-500 font-mono text-[11px]">{f.shortcut}</span>
                          </div>
                          <div>
                            <strong className="block text-slate-700 mb-0.5">Best Use Case:</strong>
                            <span className="text-slate-500 font-sans">{f.useCase}</span>
                          </div>
                          <div className="bg-rose-50 p-2 rounded-lg border border-rose-100">
                            <strong className="block text-rose-800 text-[10px] uppercase font-bold flex items-center gap-1">
                              <AlertTriangle className="w-3 h-3" /> Avoid This Mistake:
                            </strong>
                            <span className="text-rose-700 font-sans text-[11px]">{f.mistakeToAvoid}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Sub-block 3: 4 Solvers approaches */}
                <div className="space-y-4">
                  <h4 className="text-xs font-black text-slate-400 uppercase tracking-widest flex items-center gap-1">
                    <Zap className="w-3.5 h-3.5 text-indigo-500" /> Alternate Solving Methodologies
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 font-sans text-xs">
                    <div className="bg-slate-50/50 p-4.5 rounded-xl border border-slate-100 space-y-1">
                      <span className="font-bold text-indigo-950 flex items-center gap-1.5"><Zap className="w-3.5 h-3.5 text-yellow-500" /> Shortcut Methods</span>
                      <p className="text-slate-600 leading-relaxed">{activeQaTopic.shortcutMethod}</p>
                    </div>
                    <div className="bg-slate-50/50 p-4.5 rounded-xl border border-slate-100 space-y-1">
                      <span className="font-bold text-indigo-950 flex items-center gap-1.5"><Table className="w-3.5 h-3.5 text-blue-500" /> Option-Based Approach</span>
                      <p className="text-slate-600 leading-relaxed">{activeQaTopic.optionBasedApproach}</p>
                    </div>
                    <div className="bg-slate-50/50 p-4.5 rounded-xl border border-slate-100 space-y-1">
                      <span className="font-bold text-indigo-950 flex items-center gap-1.5"><ArrowRight className="w-3.5 h-3.5 text-emerald-500" /> Back-Solving Approach</span>
                      <p className="text-slate-600 leading-relaxed">{activeQaTopic.backSolvingApproach}</p>
                    </div>
                    <div className="bg-slate-50/50 p-4.5 rounded-xl border border-slate-100 space-y-1">
                      <span className="font-bold text-indigo-950 flex items-center gap-1.5"><Compass className="w-3.5 h-3.5 text-purple-500" /> Approximation Approach</span>
                      <p className="text-slate-600 leading-relaxed">{activeQaTopic.approximationApproach}</p>
                    </div>
                  </div>
                </div>

                {/* Sub-block 4: Traps */}
                <div className="bg-rose-50/50 border border-rose-150 p-5 rounded-2xl">
                  <h4 className="text-xs font-black text-rose-900 uppercase tracking-widest flex items-center gap-1.5 mb-2">
                    <AlertTriangle className="w-4 h-4 text-rose-600" /> Typical CAT Traps & Distractors
                  </h4>
                  <ul className="list-disc pl-5 space-y-1.5 text-xs text-rose-800 font-sans leading-relaxed">
                    {activeQaTopic.commonTraps.map((t, idx) => (
                      <li key={idx}>{t}</li>
                    ))}
                  </ul>
                </div>

                {/* Sub-block 5: Fastest Solving Route */}
                <div className="bg-indigo-950 text-white p-5 rounded-2xl relative overflow-hidden shadow-xs">
                  <div className="absolute right-0 bottom-0 translate-y-3 translate-x-3 opacity-10">
                    <Award className="w-24 h-24" />
                  </div>
                  <h4 className="text-xs font-black text-indigo-300 uppercase tracking-widest mb-1.5">
                    🚀 Fastest General Solving Route
                  </h4>
                  <p className="text-xs text-slate-100 leading-relaxed font-sans">{activeQaTopic.fastestSolvingRoute}</p>
                </div>

                {/* Sub-block 6: 2-3 mini examples with explanations */}
                <div className="space-y-4">
                  <h4 className="text-xs font-black text-slate-400 uppercase tracking-widest flex items-center gap-1.5">
                    <PlayCircle className="w-4 h-4 text-indigo-500" /> Mini Practice Questions & Answers
                  </h4>
                  <div className="space-y-4 font-sans text-xs">
                    {activeQaTopic.miniExamples.map((ex, idx) => (
                      <div key={idx} className="bg-slate-50/40 border border-slate-200 rounded-2xl p-4.5 space-y-2.5">
                        <div className="font-bold text-slate-800 border-b border-slate-100 pb-1 flex justify-between">
                          <span>Example Pattern {idx+1}</span>
                          <span className="text-[10px] text-slate-400 font-bold uppercase">CAT-Style Standard</span>
                        </div>
                        <p className="text-slate-700 bg-white border border-slate-100 p-3 rounded-xl italic font-mono text-[11px] leading-relaxed">
                          "{ex.question}"
                        </p>
                        <p className="text-slate-600 leading-relaxed font-sans">
                          <strong>Explanatory deduction:</strong> {ex.explanation}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      )}

      {/* RENDER VIEW: COMPLETE FORMULA SHEET */}
      {activeTab === 'FORMULAS' && (
        <div className="bg-white border border-slate-200 rounded-3xl p-6 lg:p-8 shadow-sm space-y-6">
          <div className="border-b border-slate-100 pb-4">
            <h3 className="text-xl font-bold text-slate-900 tracking-tight">Active Formula Quick-Sheet</h3>
            <p className="text-xs text-slate-500">A prioritized cheatsheet of core equations for instant recall.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {qaTopics.map((topic, keyIdx) => (
              <div key={keyIdx} className="border border-slate-150 rounded-2xl p-4 bg-slate-50/30 space-y-2.5">
                <span className="text-[10px] font-extrabold uppercase bg-slate-100 border border-slate-200 px-2.5 py-0.5 rounded-full text-slate-600">
                  {topic.category}
                </span>
                <h4 className="font-bold text-xs text-slate-800 border-b border-slate-100 pb-1 mt-1">{topic.title}</h4>
                <div className="space-y-2">
                  {topic.keyFormulas.map((f, fIdx) => (
                    <div key={fIdx} className="text-[11px] space-y-1 bg-white p-2 rounded-lg border border-slate-100">
                      <code className="text-xs font-bold text-indigo-700 block">{f.expr}</code>
                      <span className="text-[10px] text-slate-500 block leading-tight"><strong>Vars: </strong>{f.variables}</span>
                      <span className="text-[10px] text-emerald-600 block leading-tight"><strong>Shortcut: </strong>{f.shortcut}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* RENDER VIEW: BEST APPROACH & DECISION MATRIX */}
      {activeTab === 'APPROACH_MATRIX' && (
        <div className="bg-white border border-slate-200 rounded-3xl overflow-hidden shadow-sm">
          <div className="p-6 bg-slate-50/50 border-b border-slate-100 text-left">
            <h3 className="text-xl font-bold text-slate-900 tracking-tight flex items-center gap-2">
              <Table className="w-5 h-5 text-indigo-600" />
              Syllabus-Wise "Best Approach" & Skip Decision Matrix
            </h3>
            <p className="text-xs text-slate-500 mt-0.5">Use this reference model to configure time limits decisions on practice sets.</p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-50 text-[10px] font-bold text-slate-500 uppercase tracking-wider">
                  <th className="p-3 pl-6">Topic Area</th>
                  <th className="p-3">Category Group</th>
                  <th className="p-3">Optimal Solving Approach</th>
                  <th className="p-3">Backup Shortcut Tool</th>
                  <th className="p-3">Skip/Abandon Condition</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-105 font-sans">
                {qaTopics.map((topic, keyIdx) => (
                  <tr key={keyIdx} className="hover:bg-slate-50/30">
                    <td className="p-3 pl-6 font-bold text-slate-700">{topic.title}</td>
                    <td className="p-3 text-slate-500 font-semibold">{topic.category}</td>
                    <td className="p-3 text-slate-600 font-medium">
                      {topic.id === 'percentage' || topic.id === 'si-ci' || topic.id === 'profit-loss' ? 'Fraction scaling multipliers' : 
                       topic.id === 'time-work' || topic.id === 'pipes-cisterns' ? 'LCM rate assumption matrix' : 
                       topic.id === 'remainders' || topic.id === 'numbers-divisibility' ? 'Euler totient or cyclic binomial mod scaling' : 
                       topic.id === 'inequalities' || topic.id === 'quadratic-equations' || topic.id === 'modulus' ? 'Interval critical points wavy-curve' : 'Symmetric substitution & formulas'}
                    </td>
                    <td className="p-3 text-emerald-700 font-semibold text-[11px]">{topic.shortcutMethod.split(':')[0]}</td>
                    <td className="p-3 text-rose-800 text-[11px] font-medium leading-tight max-w-sm">{topic.whenToSkipRule}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* RENDER VIEW: VARC ENGLISH */}
      {activeTab === 'VARC' && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {varcGrids.map((item, idx) => (
              <div key={idx} className="bg-white border border-slate-200 rounded-3xl p-6 lg:p-8 shadow-sm space-y-4">
                <div className="border-b border-slate-100 pb-3 flex items-center justify-between">
                  <h4 className="font-black text-slate-900 text-lg">{item.title}</h4>
                  <span className="bg-indigo-50 border border-indigo-150 rounded-md font-bold px-2 py-1 text-[10px] text-indigo-700">English VA</span>
                </div>
                <div className="space-y-3 font-sans text-xs">
                  <div>
                    <strong className="block text-slate-700 uppercase text-[10px] tracking-wider mb-1">Passage / Area tests:</strong>
                    <p className="text-slate-600 leading-relaxed bg-slate-50 p-2.5 rounded-lg">{item.tests}</p>
                  </div>
                  <div>
                    <strong className="block text-slate-700 uppercase text-[10px] tracking-wider mb-1">How to spot quickly:</strong>
                    <p className="text-slate-600 leading-relaxed bg-slate-50 p-2.5 rounded-lg">{item.identify}</p>
                  </div>
                  <div>
                    <strong className="block text-slate-700 uppercase text-[10px] tracking-wider mb-1">Systematic Methods:</strong>
                    <ul className="list-disc pl-5 text-slate-600 space-y-1 leading-relaxed">
                      {item.method.map((m, mIdx) => <li key={mIdx}>{m}</li>)}
                    </ul>
                  </div>
                  <div>
                    <strong className="block text-slate-700 uppercase text-[10px] tracking-wider mb-1">Traps & Skips:</strong>
                    <div className="grid grid-cols-2 gap-3 text-[11px] mt-1">
                      <div className="bg-rose-50 border border-rose-100 p-2 rounded-lg text-rose-800">
                        <span className="font-bold block text-rose-900 mb-0.5"><AlertTriangle className="w-3.5 h-3.5 inline-block" /> Common Traps</span>
                        <ul className="list-disc pl-4 space-y-0.5">
                          {item.traps.map((tr, trx) => <li key={trx}>{tr}</li>)}
                        </ul>
                      </div>
                      <div className="bg-amber-50 border border-amber-100 p-2 rounded-lg text-amber-800">
                        <span className="font-bold block text-amber-900 mb-0.5"><ShieldAlert className="w-3.5 h-3.5 inline-block" /> When to Abandon</span>
                        <span>{item.skip}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* RENDER VIEW: DILR LOGIC SETS */}
      {activeTab === 'DILR' && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {dilrGrids.map((item, idx) => (
              <div key={idx} className="bg-white border border-slate-200 rounded-3xl p-6 lg:p-8 shadow-sm space-y-4">
                <div className="border-b border-slate-100 pb-3 flex items-center justify-between">
                  <h4 className="font-black text-slate-900 text-lg">{item.title}</h4>
                  <span className="bg-pink-50 border border-pink-150 rounded-md font-bold px-2 py-1 text-[10px] text-pink-700 font-sans">DILR Set</span>
                </div>
                <div className="space-y-3 font-sans text-xs">
                  <div>
                    <strong className="block text-slate-700 uppercase text-[10px] tracking-wider mb-1">Skills tested:</strong>
                    <p className="text-slate-600 leading-relaxed bg-slate-50 p-2.5 rounded-lg">{item.tests}</p>
                  </div>
                  <div>
                    <strong className="block text-slate-700 uppercase text-[10px] tracking-wider mb-1">Recognition signals:</strong>
                    <p className="text-slate-600 leading-relaxed bg-slate-50 p-2.5 rounded-lg">{item.identify}</p>
                  </div>
                  <div>
                    <strong className="block text-slate-705 uppercase text-[10px] tracking-wider mb-1">Set Setup Methods:</strong>
                    <ul className="list-disc pl-5 text-slate-600 space-y-1 leading-relaxed">
                      {item.method.map((m, mIdx) => <li key={mIdx}>{m}</li>)}
                    </ul>
                  </div>
                  <div>
                    <strong className="block text-slate-700 uppercase text-[10px] tracking-wider mb-1">Safety Constraints:</strong>
                    <div className="grid grid-cols-2 gap-3 text-[11px] mt-1">
                      <div className="bg-rose-50 border border-rose-100 p-2 rounded-lg text-rose-800">
                        <span className="font-bold block text-rose-900 mb-0.5"><AlertTriangle className="w-3.5 h-3.5 inline-block" /> Critical Traps</span>
                        <ul className="list-disc pl-4 space-y-0.5">
                          {item.traps.map((tr, trx) => <li key={trx}>{tr}</li>)}
                        </ul>
                      </div>
                      <div className="bg-amber-50 border border-amber-100 p-2 rounded-lg text-amber-800">
                        <span className="font-bold block text-amber-900 mb-0.5"><ShieldAlert className="w-3.5 h-3.5 inline-block" /> Skip Bounds</span>
                        <span>{item.skip}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
