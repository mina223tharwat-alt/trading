export type WorkflowRoute = {
  title: string;
  href: string;
  description: string;
  icon: string;
  status: "Scaffold" | "Milestone 1" | "Later";
};

export type StarterSetup = {
  slug: string;
  name: string;
  summary: string;
  thesis: string;
  requiredCriteria: string[];
  disqualifiers: string[];
  entryTrigger: string;
  invalidation: string;
  targetLogic: string;
  riskRules: string[];
  counts: {
    trades: number;
    missedOpportunities: number;
    bestExamples: number;
    mistakes: number;
  };
};

export type PlaybookExample = {
  id: string;
  setupSlug: string;
  category: "Best example" | "Non-example" | "Mistake" | "Variation";
  linkedItem: "Trade" | "Missed opportunity" | "Screenshot";
  ticker: string;
  date: string;
  outcome: string;
  note: string;
  lesson: string;
};

export const workflowRoutes: WorkflowRoute[] = [
  {
    title: "Prep",
    href: "/prep",
    description: "Premarket plan, watchlist, levels, risk limit, and mental prep.",
    icon: "✓",
    status: "Scaffold",
  },
  {
    title: "Live Day",
    href: "/live-day",
    description: "Risk-first cockpit with active trades, quick add, and phase notes.",
    icon: "↗",
    status: "Scaffold",
  },
  {
    title: "End-of-Day Review",
    href: "/end-of-day-review",
    description: "Hybrid recap, scorecard, lessons, tomorrow focus, and promotion prompts.",
    icon: "◌",
    status: "Later",
  },
  {
    title: "Trade Replay",
    href: "/trade-replay",
    description: "Risk-first trade review, screenshots, emotions, and lessons.",
    icon: "▥",
    status: "Later",
  },
  {
    title: "Playbook",
    href: "/playbook",
    description: "Milestone 1 setup profiles, A+ criteria, examples, and counts.",
    icon: "★",
    status: "Milestone 1",
  },
  {
    title: "Analytics",
    href: "/analytics",
    description: "Placeholder for performance dashboards, setup stats, and review loops.",
    icon: "▦",
    status: "Later",
  },
];

const defaultCriteria = [
  "Planned risk defined",
  "Correct size for the idea",
  "No chase / entry at planned area",
  "Clear exit plan",
];

const defaultDisqualifiers = [
  "Unclear stop",
  "Bad R/R",
  "Chasing or late entry",
  "No clear trigger",
  "Outside plan",
  "Emotional entry",
];

export const starterSetups: StarterSetup[] = [
  {
    slug: "breakout",
    name: "Breakout",
    summary: "Clean move through a well-defined level with room to target.",
    thesis: "Price compresses under resistance and expands through the level when demand confirms.",
    requiredCriteria: [...defaultCriteria, "Clear resistance level", "Confirmation through level"],
    disqualifiers: defaultDisqualifiers,
    entryTrigger: "Break and hold above level, ideally with volume or tape confirmation.",
    invalidation: "Failure back below breakout level or loss of planned risk area.",
    targetLogic: "Prior range projection, nearby liquidity, or measured move into next level.",
    riskRules: ["Respect planned stop", "Avoid oversized add", "Do not chase extended move"],
    counts: { trades: 0, missedOpportunities: 0, bestExamples: 0, mistakes: 0 },
  },
  {
    slug: "pullback",
    name: "Pullback",
    summary: "Trend continuation entry after controlled retracement into support.",
    thesis: "A strong trend pauses and offers a lower-risk continuation entry near a logical support area.",
    requiredCriteria: [...defaultCriteria, "Established trend", "Pullback into planned area"],
    disqualifiers: defaultDisqualifiers,
    entryTrigger: "Reclaim, higher low, or momentum shift out of the pullback area.",
    invalidation: "Loss of pullback support or broken trend structure.",
    targetLogic: "Retest high, trend extension, or next liquidity pocket.",
    riskRules: ["Define support-based stop", "Avoid averaging down", "Size for pullback volatility"],
    counts: { trades: 0, missedOpportunities: 0, bestExamples: 0, mistakes: 0 },
  },
  {
    slug: "reversal",
    name: "Reversal",
    summary: "Failed continuation that shifts direction from an extreme or major level.",
    thesis: "Momentum exhausts at a meaningful area and confirms a change in control.",
    requiredCriteria: [...defaultCriteria, "Exhaustion or failed move", "Clear reversal trigger"],
    disqualifiers: defaultDisqualifiers,
    entryTrigger: "Failed breakdown/breakout, reclaim, lower high, or higher low confirmation.",
    invalidation: "Continuation through the failed reversal area.",
    targetLogic: "Return to VWAP, prior pivot, range midpoint, or opposite side of range.",
    riskRules: ["Keep risk tight", "Do not fight strong trend without trigger", "Avoid revenge context"],
    counts: { trades: 0, missedOpportunities: 0, bestExamples: 0, mistakes: 0 },
  },
  {
    slug: "continuation",
    name: "Continuation",
    summary: "Secondary entry that joins a confirmed directional move.",
    thesis: "The initial move proves direction, then pauses and offers a structured continuation trigger.",
    requiredCriteria: [...defaultCriteria, "Confirmed directional move", "Continuation trigger"],
    disqualifiers: defaultDisqualifiers,
    entryTrigger: "Flag break, VWAP hold, higher low, or reclaim aligned with trend.",
    invalidation: "Loss of continuation structure or failure through trigger level.",
    targetLogic: "Trend extension into next level, high/low of day, or measured move.",
    riskRules: ["Avoid late entry", "Respect continuation stop", "Do not add after extension"],
    counts: { trades: 0, missedOpportunities: 0, bestExamples: 0, mistakes: 0 },
  },
  {
    slug: "failed-breakdown",
    name: "Failed Breakdown",
    summary: "Breakdown trap that reclaims a key level and squeezes back higher.",
    thesis: "Sellers fail below support, creating a reclaim setup with trapped downside positioning.",
    requiredCriteria: [...defaultCriteria, "Clear breakdown level", "Reclaim confirmation"],
    disqualifiers: defaultDisqualifiers,
    entryTrigger: "Reclaim of breakdown level with follow-through or failed lower low.",
    invalidation: "Loss of reclaimed level or continuation lower.",
    targetLogic: "Return to range, VWAP, prior breakdown origin, or trapped liquidity unwind.",
    riskRules: ["Stop below reclaim", "Avoid catching without trigger", "Size for volatility"],
    counts: { trades: 0, missedOpportunities: 0, bestExamples: 0, mistakes: 0 },
  },
  {
    slug: "reclaim",
    name: "Reclaim",
    summary: "Price regains a key level and confirms control above it.",
    thesis: "A key level flips from failed resistance/support into a tradable reclaim area.",
    requiredCriteria: [...defaultCriteria, "Meaningful reclaim level", "Hold after reclaim"],
    disqualifiers: defaultDisqualifiers,
    entryTrigger: "Reclaim and hold, retest hold, or strong close back through key level.",
    invalidation: "Loss of reclaimed level or failure to hold retest.",
    targetLogic: "Next level, liquidity above/below, or continuation into prior structure.",
    riskRules: ["Risk against reclaim", "Avoid chasing far from level", "Do not move stop incorrectly"],
    counts: { trades: 0, missedOpportunities: 0, bestExamples: 0, mistakes: 0 },
  },
];

export const playbookExamples: PlaybookExample[] = [
  {
    id: "example-breakout-1",
    setupSlug: "breakout",
    category: "Best example",
    linkedItem: "Screenshot",
    ticker: "TBD",
    date: "Placeholder",
    outcome: "Example pending",
    note: "Use this card to promote a clean A+ breakout screenshot later.",
    lesson: "Best examples should make the trigger and invalidation obvious.",
  },
  {
    id: "example-pullback-1",
    setupSlug: "pullback",
    category: "Variation",
    linkedItem: "Missed opportunity",
    ticker: "TBD",
    date: "Placeholder",
    outcome: "Review pending",
    note: "Placeholder for a pullback that was valid but not taken.",
    lesson: "Missed examples should explain how to catch the setup next time.",
  },
];
