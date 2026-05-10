# Trading Dashboard Plan

## Planning Principles

- This dashboard is intended to become a personal, Tradervue-inspired trading dashboard that is customized around the trader's own review process, patterns, best opportunities, and daily workflow.
- Decisions should be made slowly and intentionally using batched questions.
- No major product, layout, data-model, or tab decisions are considered locked until the trader explicitly confirms them.
- After each batch of answers, this document should be updated to reflect provisional decisions, open questions, and next planning areas.

## Round 1: Foundation Inputs

### Provisional Direction

- **Dashboard format:** Build toward a web app.
- **Living plan document:** Maintain this file at `docs/dashboard-plan.md`.
- **First planning areas:** Explore both Journal + Opportunities and Performance + Patterns first.
- **Template image usage:** Use the attached trading-dashboard template images as visual inspiration, borrowing layout ideas without copying the template too literally.

### Important Notes

- These are planning inputs, not final locked requirements.
- The dashboard should eventually support daily updating with trades taken, best opportunities of the day, and trader-specific patterns.
- The visual direction can be influenced by the attached trading-dashboard template images, but the product should become more personalized and more comprehensive than the template.

## Round 2: Journal + Opportunities / Performance + Patterns Inputs

### Provisional Direction

- **Daily journal entry style:** Start with a structured form for daily updates.
- **Trades taken detail level:** Use a deep replay-style review for each trade, including detailed execution context, chart sequence, emotions before/during/after, what the trader saw, and what should have been done.
- **Best opportunities of the day:** Track both traded and missed opportunities so the dashboard can compare what was taken against what should have been taken.
- **Pattern tracking starting point:** Begin with setup names such as breakout, pullback, trend continuation, reversal, failed breakdown, and similar pattern labels.

### Implications To Explore Later

- The daily journal likely needs repeatable structured sections rather than only freeform notes.
- Trade records may need enough fields to support replay, grading, screenshots, emotional context, and lesson extraction.
- The opportunity workflow should distinguish actual trades from missed opportunities without treating missed trades as afterthoughts.
- Setup names should probably become a controlled tagging system eventually, but the exact names and hierarchy are not decided yet.


## Round 3: Structured Daily Form + Deep Replay Inputs

### Provisional Direction

- **Daily form organization:** Organize the first version of the daily journal around the market day structure: premarket plan, open, midday, power hour/close, and end-of-day recap.
- **Deep replay review flow:** Separate each trade replay into chart sequence, decision-making, and execution quality sections.
- **Missed opportunity capture:** Track why the opportunity was missed, what made it valid, and how to catch it next time.
- **First setup-name taxonomy:** Start with broad common labels such as breakout, pullback, reversal, continuation, failed breakdown, reclaim, and similar setup names.

### Implications To Explore Later

- The daily journal may need time-of-day sections that can contain trades, missed opportunities, notes, screenshots, and lessons inside each market phase.
- Trade replay reviews should avoid collapsing everything into one note field; chart review, decision review, and execution review each need dedicated structure.
- Missed-opportunity records should be treated as first-class review objects, not just comments attached to the daily recap.
- Broad setup labels can be the initial pattern vocabulary, but later rounds should decide whether those labels need subtypes, custom names, or market-context modifiers.


## Round 4: Market Phases, Premarket Fields, Replay Screenshots, and Setup Tags

### Provisional Direction

- **Market phase granularity:** Start with simple phases: premarket, open, midday, close, and end-of-day recap.
- **Premarket plan fields:** Include watchlist/key levels, execution plan, and mental preparation in the premarket section.
- **Replay screenshot organization:** Support timeline screenshots, annotated chart galleries, and before/after comparisons for deep replay reviews.
- **Setup tag structure:** Start with a single setup tag per trade or opportunity to keep early tagging simple and clean.

### Implications To Explore Later

- The first daily form can stay focused by using simple phase sections before adding custom or highly detailed intraday phases.
- Premarket planning should combine market preparation, execution boundaries, and mental readiness rather than treating them as separate unrelated workflows.
- Replay screenshots likely need a flexible media model because one trade may require sequence images, annotated images, and comparison images.
- Starting with one setup tag per item keeps the taxonomy clean, but later rounds should revisit whether secondary context tags or modifiers are needed.


## Round 5: Exact Daily Fields and First-Version Simplicity

### Provisional Direction

- **Open, midday, and close phase fields:** Start with phase notes only, focused on what happened, what the trader noticed, and what the trader did or did not do.
- **End-of-day recap fields:** Include performance, process, and learning summaries in the recap.
- **Screenshot review detail:** Support a full review board concept with reorderable images, annotations, labels, comments, and side-by-side comparisons.
- **Single setup tag list:** Start with a fixed setup list first, then add setup management/editing later after the dashboard basics work.

### Implications To Explore Later

- The simple intraday phase sections should avoid becoming overly heavy forms in the first version; notes can carry the open, midday, and close review until more structure is proven necessary.
- The end-of-day recap is likely the main daily synthesis area because it combines outcome, process quality, and lessons for improvement.
- Screenshot review is important enough to eventually become a rich review board, even if implementation may need to be phased.
- A fixed initial setup list can protect data quality while the dashboard is young, but the plan should preserve a path to editable setup management later.


## Round 6: Recap Details, Setup List, Screenshot MVP, and Phase Connections

### Provisional Direction

- **End-of-day recap detail:** Use a hybrid recap with short answers, scorecard ratings, and a narrative section.
- **Fixed starter setup list:** Start with a small clean list: breakout, pullback, reversal, continuation, failed breakdown, and reclaim.
- **Screenshot review MVP:** Support uploads with a category and caption in the first build.
- **Phase notes connections:** Design phase notes so they can eventually connect to trades, missed opportunities, and screenshots.

### Implications To Explore Later

- The end-of-day recap should likely combine quick structured review with enough writing space to capture nuance and lessons.
- The first fixed setup list should stay intentionally small so setup analytics do not become noisy too early.
- Screenshot review can begin with practical upload metadata while preserving a future path toward ordering, annotations, comments, and side-by-side review.
- Even if phase notes start lightweight, the underlying model should avoid blocking future links between phases and the main review objects.


## Round 7: Recap Prompts, Scorecard, Screenshot Categories, and Navigation

### Provisional Direction

- **Hybrid end-of-day recap contents:** Use comprehensive starter prompts that combine performance, process, opportunity, lesson, and tomorrow-focus prompts.
- **Scorecard ratings:** Start with an execution scorecard covering entry quality, exit quality, sizing, stop discipline, and trade management.
- **Screenshot categories:** Include all screenshot categories grouped by timeline, review, and market context.
- **First navigation model to explore:** Explore workflow tabs: Prep, Live Day, End-of-Day Review, Trade Replay, Patterns, and Analytics.

### Implications To Explore Later

- The recap should be broad enough to connect daily results, decision quality, opportunity capture, and next-day improvement without becoming a second full journal.
- Execution quality is the first scorecard lens, but later rounds may need to decide whether process and opportunity ratings should be added after the execution scorecard works.
- Screenshot categories should be grouped to prevent the category list from feeling messy as trade, review, and market-context images accumulate.
- Workflow navigation should be explored because the trader's routine moves from preparation to live notes to end-of-day review, replay, patterns, and analytics.


## Round 8: Workflow Tabs, Execution Scorecard Scale, and Screenshot Category Groups

### Provisional Direction

- **Prep tab responsibility:** Start with the premarket plan only: watchlist, levels, catalysts, bias, execution plan, and mental preparation.
- **Live Day tab responsibility:** Explore an execution cockpit with planned setups, alerts, trades, missed opportunities, screenshots, P&L, rule reminders, and emotional check-ins.
- **Execution scorecard scale:** Use pass/fail plus notes to capture whether the trader followed the plan and why.
- **Screenshot category structure:** Use timeline, review, and market-context groups: timeline/review plus premarket plan, key levels, sector/theme, overall market, and watchlist.

### Implications To Explore Later

- Prep should stay focused on what needs to be known before the session starts rather than becoming a broad research or analytics hub too early.
- Live Day may become the most action-oriented tab, so later rounds should decide how much can be captured quickly without distracting from trading.
- Pass/fail execution ratings emphasize rule adherence and plan-following over subjective scoring, but notes are needed to preserve context.
- Screenshot categories should support trade replay, missed/best opportunity review, and market context from day one, while still being grouped clearly.


## Round 9: Prep Fields, Live Day Distraction Control, Execution Rules, and Trade/Opp Records

### Provisional Direction

- **Exact Prep fields:** Use grouped sections for market/watchlist, trading plan, and mental prep fields.
- **Live Day cockpit distraction control:** Use collapsed sections so only essential information is shown by default, with details expanded after the trading day.
- **First pass/fail execution rules:** Start with risk rules: respected stop, sized correctly, followed max loss, did not average down, and avoided revenge trades.
- **Trade and missed-opportunity fields:** Use separate forms entirely so trades and missed opportunities can each be optimized from the start.

### Implications To Explore Later

- Prep can stay focused while still being complete by grouping market context, actionable trade plan, and mental readiness separately.
- The Live Day cockpit should prioritize low-distraction scanning during the session, then allow deeper completion during review.
- The first execution scorecard should emphasize risk control before expanding into entry, exit, and broader discipline checks.
- Separate trade and missed-opportunity forms may create more upfront design work, but they can better match the different review questions for taken versus missed opportunities.


## Round 10: Prep Detail, Collapsed Live Day, Trade Form, and Missed Opportunity Form

### Provisional Direction

- **Prep field detail:** Use standard grouped fields, with market/watchlist, trading plan, and mental prep each getting 4-6 structured fields.
- **Collapsed Live Day default view:** Show an execution monitor by default with P&L, max loss status, active trades, alerts, emotions, rules, and quick-add buttons.
- **First Trade form fields:** Use a full trade review covering execution basics, replay review, risk review, screenshots, emotions, and lessons.
- **Missed Opportunity form fields:** Use a full missed-opportunity review covering basics, why missed, validity, prevention, screenshots, and lesson.

### Implications To Explore Later

- Prep should be structured enough to be useful every morning without becoming a research dump; each grouped section needs a concise field list.
- The Live Day cockpit is trending toward an active risk/execution monitor, so later planning should define what is visible without causing distraction.
- Trade review is intentionally deep from the first version, which means the form may need sections, progressive disclosure, or save-as-draft behavior.
- Missed opportunities are equally important review objects and should support complete learning loops from identification to prevention.


## Round 11: Prep Starter Fields, Live Day Widgets, and Review Form Order

### Provisional Direction

- **Exact Prep section fields:** Use a proposed starter field list for market/watchlist, trading plan, and mental prep.
- **Live Day execution monitor widgets:** Use a balanced monitor with compact cards for risk, process, opportunity, phase notes, and quick-add.
- **Full Trade review section order:** Use a risk-first order: planned risk, actual risk, stop, sizing, rule pass/fail, then execution, replay, and lesson.
- **Full Missed Opportunity review section order:** Use a learning-loop order: opportunity/context, why missed, validity, prevention, screenshots, and lesson.

### Implications To Explore Later

- A proposed starter Prep field list should be treated as a draft to react to, not a locked specification.
- The Live Day monitor should expose multiple workflow dimensions at once, but each card needs to stay compact to avoid distracting from trading.
- Risk-first trade review reinforces that survival and rule-following matter before replay details or outcome analysis.
- Missed-opportunity review should read like a learning loop, moving from what existed to why it was missed and what will change next time.


## Round 12: Prep Field List, Live Day Cards, Risk Review Fields, and Missed Opportunity Learning Loop

### Provisional Direction

- **Prep field list:** Accept the proposed starter Prep fields as the provisional field list.
  - **Market / Watchlist:** market bias, key index/ETF levels, watchlist tickers, catalysts/news, major levels, market notes.
  - **Trading Plan:** planned setups, entry triggers, invalidation levels, risk limit/max loss, max trades, avoid list.
  - **Mental Prep:** sleep/energy, confidence, emotional state, discipline goal, primary reminder, risk mindset.
- **Balanced Live Day compact cards:** Use the full balanced card set: Risk, Active Trades, Planned Setups, Alerts, Opportunities, Emotions, Rules, Quick Add, and Phase Notes.
- **Risk-first Trade review fields:** Use a complete risk review with risk numbers, risk-rule checklist, emotional risk state, and the risk lesson to carry forward.
- **Learning-loop Missed Opportunity fields:** Use a complete learning loop with context, setup validity, reason missed, emotional/decision blocker, prevention change, screenshot, and lesson.

### Implications To Explore Later

- The Prep field list is now specific enough to guide first-version form design, while still remaining provisional and editable later.
- The Live Day monitor is feature-rich, so compact card hierarchy and default collapsed/expanded states will matter heavily.
- Trade review should combine objective risk data with rule checks and emotional context, not just numbers or pass/fail items.
- Missed-opportunity review should capture both the objective opportunity and the subjective blocker so prevention changes are grounded in the actual miss.


## Round 13: Live Day Hierarchy, Risk Metrics, Risk Rules, and Next Focus

### Provisional Direction

- **Live Day card hierarchy:** Put risk on top, with Risk, Active Trades, and Quick Add first; everything else should sit below or collapsed.
- **Exact risk numbers:** Use complete risk metrics: planned/actual risk, stop, size, entry/exit, P&L, R multiple, MAE/MFE, and daily drawdown impact.
- **Risk-rule checklist:** Start with expanded risk rules: respected stop, sized correctly, followed max loss, did not average down, avoided revenge trades, respected planned risk, avoided moving stop incorrectly, stopped after daily loss, and avoided oversized adds.
- **Next planning focus:** Move next into Patterns / Playbook: setup definitions, examples, A+ criteria, pattern screenshots, and stats by setup.

### Implications To Explore Later

- The Live Day monitor should prioritize risk awareness and fast capture before secondary cards, helping the trader avoid information overload while live.
- The trade review form needs enough numeric fields to support future risk analytics beyond basic P&L.
- Expanded risk rules create a stronger discipline framework, but later rounds may still need to decide whether rules become editable.
- Patterns / Playbook should be explored next because setup definitions and A+ criteria will influence tagging, opportunities, replay review, and analytics.


## Round 14: Patterns / Playbook Structure

### Provisional Direction

- **Patterns / Playbook main purpose:** Define setups first, including clear setup rules, criteria, invalidation, examples, and screenshots.
- **Setup definition model:** Use a structured setup profile with name, thesis, market context, entry trigger, invalidation, target logic, risk rules, and screenshots.
- **A+ criteria:** Include full A+ criteria that combine technical, execution, and market-context requirements.
- **Pattern screenshots / examples:** Use a full example library with best examples, non-examples, lifecycle sequences, mistakes, and variations.

### Implications To Explore Later

- The Playbook should start as a definition system before becoming a training engine or analytics dashboard.
- Structured setup profiles should make setup tagging more consistent across trades, missed opportunities, and best-opportunity reviews.
- A+ criteria need to connect chart quality, execution quality, and market context so the dashboard can distinguish good trades from merely profitable trades.
- A full example library will require screenshot categorization beyond simple trade screenshots, including non-examples and pattern variations.


## Round 15: Setup Profile Fields, A+ Criteria Format, Example Library Categories, and Setup Stats

### Provisional Direction

- **First setup profile fields:** Use core structured fields: name, description/thesis, market context, entry trigger, invalidation, target logic, risk rules, and screenshots.
- **A+ criteria format:** Use a manual checklist of required criteria and disqualifiers.
- **Example library categories:** Start with simple categories: best example, non-example, mistake, and variation.
- **Setup stats timing:** Introduce setup-level stats immediately, with every setup profile showing stats from linked trades and opportunities from the start.

### Implications To Explore Later

- The first setup profile should stay focused and usable before expanding into more detailed profile fields or fully custom templates.
- Manual A+ checklists are simple enough for the first version, but the structure should still leave room for notes or future scoring if needed.
- Simple example categories can keep the Playbook organized while still supporting the most important comparison types.
- Immediate setup stats make tagging quality more important from day one, because every linked trade and opportunity can affect setup-level feedback.


## Round 16: Setup Stats, Linked Items, A+ Checklist Structure, and Lifecycle Screenshots

### Provisional Direction

- **Immediate setup-level stats:** Start with basic counts: number of trades, number of missed opportunities, number of best examples, and number of mistakes.
- **Linking trades / opportunities to setups:** Use the manual setup tag plus A+ checklist answers, where the setup tag links the item and checklist answers drive quality/process stats.
- **A+ checklist / disqualifier structure:** Use required criteria plus disqualifiers as a simple checklist for what must be present and what invalidates the setup.
- **Lifecycle screenshots timing:** Do not include lifecycle screenshots yet; start with simple example categories only.

### Implications To Explore Later

- Basic setup stats should reduce the risk of over-interpreting performance data before enough tagged trades and opportunities exist.
- A+ checklist answers can make setup stats more meaningful than raw counts, but the first version should avoid overcomplicating scoring.
- Required criteria and disqualifiers give each setup a practical decision filter that can be used in Prep, Live Day, trade review, and missed-opportunity review.
- Lifecycle screenshots remain a future Playbook enhancement after simple example categories prove useful.


## Round 17: A+ Checklist Defaults and Playbook Promotion Flow

### Provisional Direction

- **Default A+ required criteria:** Start with execution defaults: planned risk, correct size, no chase, entry at planned area, and clear exit plan.
- **Default disqualifiers:** Use balanced disqualifiers across risk, setup quality, and process.
- **A+ checklist in trade / missed-opportunity review:** Keep A+ checklist answers only in the Playbook; setup pages define criteria, but trades and opportunities only link to the setup tag in the first version.
- **Promoting daily examples to Playbook:** Use manual promotion first, with possible automatic suggestions later.

### Implications To Explore Later

- Starting A+ criteria with execution defaults keeps the Playbook connected to controllable behavior instead of only chart appearance.
- Balanced disqualifiers should help identify whether a setup failed because of risk, setup quality, or trader process.
- Keeping checklist answers only in the Playbook reduces trade and missed-opportunity form complexity, but it may limit setup-quality stats until review forms evolve.
- Manual promotion gives the trader control over which trades, missed opportunities, and screenshots become Playbook examples before any suggestion logic exists.


## Round 18: Disqualifiers, Manual Playbook Promotion, A+ Stats Limitations, and Next Focus

### Provisional Direction

- **Exact balanced disqualifier list:** Start with a small balanced list: unclear stop, bad R/R, chasing/late entry, no clear trigger, outside plan, and emotional entry.
- **Manual Playbook promotion flow:** Promote from a Playbook setup profile by opening the setup and attaching or linking an existing trade, opportunity, or screenshot as an example.
- **Playbook-only A+ checklist stats limitation:** Counts are enough first; keep the A+ checklist out of trade and opportunity forms for simplicity.
- **Next planning focus:** Continue Playbook planning by defining first setup templates and the exact example card layout.

### Implications To Explore Later

- A small disqualifier list keeps the first version usable while still covering risk, setup quality, and process failure modes.
- Promoting from the Playbook makes setup profiles the source of truth for examples, but later planning may still revisit promotion from daily review.
- Keeping A+ checklist answers Playbook-only means early setup stats will be count-based rather than checklist pass-rate based.
- Continuing Playbook planning should help define how setup pages and example cards will actually look before moving into End-of-Day Review.


## Round 19: Setup Template and Example Card Layout

### Provisional Direction

- **First setup template layout:** Use a definition-first layout with setup name, thesis, required criteria, disqualifiers, entry trigger, invalidation, target logic, and risk rules.
- **Playbook example card fields:** Use a full card with screenshot, category, linked item, ticker/date, outcome, note, mistake/variation tag, and lesson.
- **Attached item display:** Show linked trades, linked missed opportunities, and linked screenshots in separate sections.
- **Example notes / tags:** Support notes only, using a simple written explanation for why the example matters.

### Implications To Explore Later

- A definition-first setup template keeps the Playbook focused on rules and criteria before visuals or stats.
- Full example cards can carry enough context for later review even while lifecycle screenshots are deferred.
- Separate attached-item sections make it clear whether an example came from a trade, missed opportunity, or standalone screenshot.
- Notes-only examples keep the first version simple, but the design should not block fixed categories or richer tags later.


## Round 20: Final Playbook Layout Details and Next Focus

### Provisional Direction

- **Definition-first setup template order:** Use a summary-first setup page order: name, quick summary, stats/counts, thesis, criteria/disqualifiers, rules, and examples.
- **Note versus lesson on example cards:** Include both note and lesson fields; the note explains context, while the lesson captures what to remember.
- **Separate attached-item sections:** Use mixed density, with compact lists for trades and opportunities and full cards for screenshots/examples.
- **Next planning focus:** Move into an MVP implementation spec by pausing deeper questions and converting the current plan into a build roadmap.

### Implications To Explore Later

- The setup page should still be definition-oriented, but a summary-first order makes the page easier to scan before reading deeper rules.
- Separating note and lesson fields gives examples both context and a reusable takeaway.
- Mixed-density attached sections keep linked trades and missed opportunities lightweight while letting screenshots and examples carry richer review context.
- The next planning phase should translate the accumulated decisions into an implementation roadmap without treating every provisional choice as permanently locked.


## Round 21: MVP Implementation Spec and Build Roadmap

### Provisional Direction

- **MVP implementation strategy:** Use a workflow-complete MVP that builds the full workflow skeleton: Prep, Live Day, End-of-Day Review, Trade Replay, Playbook, and Analytics placeholders.
- **First build milestone:** Deliver a Playbook MVP with setup profiles, A+ checklist, examples, basic counts, and manual linking.
- **Technical stack preference:** Use Next.js / React for a modern web app with strong UI flexibility.
- **Build roadmap depth:** Create enough roadmap for Milestone 1, then begin implementation.

### Implications To Explore Later

- A workflow-complete skeleton should make the product feel coherent early, even if some areas begin as placeholders.
- Starting implementation with the Playbook MVP means setup taxonomy, profile layout, examples, and manual linking become the first concrete build target.
- Next.js / React should support the custom dashboard UX, tabbed workflow, rich forms, cards, and future screenshot review board.
- The roadmap should be practical and milestone-focused rather than trying to fully specify the entire future product before coding starts.


## Round 22: Milestone 1 Scope, App Skeleton, Persistence, and Roadmap Location

### Provisional Direction

- **Milestone 1 Playbook MVP scope:** Build the full Playbook MVP: setup CRUD, starter setups, example cards, screenshot upload, manual linking, basic counts, and placeholder stats.
- **Workflow-complete app skeleton:** Build the full skeleton: navigation, placeholder pages, shared shell, theme, reusable components, and seeded mock data.
- **Initial persistence / storage:** Use a database from day one so setups, examples, and trades are persistent.
- **Separate MVP roadmap document:** Do not create a separate roadmap document; keep implementation tasks inside `docs/dashboard-plan.md`.

### Implications To Explore Later

- Milestone 1 is now large enough to require clear sequencing inside the existing plan, even if a separate roadmap file is not created.
- The app scaffold should establish the product shell and workflow routes before deeper feature work, so future tabs have a consistent home.
- Database-backed persistence from day one will make early setup profiles and Playbook examples feel real rather than throwaway prototype data.
- Keeping roadmap tasks in this living plan means the document should gain a focused implementation section rather than only round-by-round discovery notes.


## Round 23: Final Pre-Implementation Choices

### Provisional Direction

- **Database choice:** Use Supabase for hosted Postgres plus auth/storage options, accepting the external service dependency.
- **UI / component approach:** Use Tailwind CSS plus shadcn/ui for fast, modern, flexible dashboard components.
- **Seeded starter setup content:** Seed full placeholder profiles with names, thesis, criteria, disqualifiers, triggers, invalidation, target logic, and risk rules.
- **Exact first implementation slice:** Start with the app scaffold first: Next.js app, routes/tabs, shared shell, theme, and placeholder pages.

### Implications To Explore Later

- Supabase may support the future need for auth, database persistence, and screenshot/storage workflows, but local environment setup and credentials will need planning.
- Tailwind plus shadcn/ui should speed up polished dashboard cards, forms, tables, tabs, and layout work without locking the app into a heavy component framework.
- Full placeholder setup profiles will make the Playbook MVP feel realistic earlier and help validate page layouts before real trading examples exist.
- Starting with the app scaffold first separates the foundation from database/schema work and gives every workflow area a visible home before feature depth is added.


## Round 24: Scaffold Start, Package Manager, Supabase Setup, and Mock Data

### Provisional Direction

- **Begin coding app scaffold:** Do not scaffold yet; decide credential, environment, and database setup before starting the scaffold.
- **Package manager:** Use whatever package manager the generated Next.js scaffold picks.
- **Supabase credentials during local development:** When the scaffold begins, keep the UI independent of Supabase and add Supabase local/remote setup in a later milestone.
- **Placeholder visual mock data:** Include light mock data, enough sample text to show layout without full fake content.

### Implications To Explore Later

- Supabase setup should be planned before the scaffold depends on real credentials or database calls.
- Letting the generated scaffold choose the package manager reduces up-front tooling decisions, but the chosen tool should be documented once generated.
- Supabase can remain a planned backend while the initial UI scaffold uses placeholder data and static structures.
- Light mock data should help validate the layout without making the scaffold feel like a finished product.


## Round 25: Supabase / Environment Plan Before Scaffold

### Provisional Direction

- **Supabase setup plan:** Keep Supabase document-only for now by writing down required environment variables and expected Supabase tables later, while deferring actual client setup.
- **Environment file strategy:** Use `.env.example` plus ignored `.env.local` as the standard Next.js local workflow.
- **Data-access abstraction:** Start with a simple mock data module such as `lib/mock-data`, then replace or wrap it with Supabase later.
- **Documentation before coding:** Document the scaffold decisions and Milestone 1 checklist, including app shell tasks, Playbook MVP tasks, and environment/Supabase notes.

### Implications To Explore Later

- Supabase can remain an architectural choice without blocking the first UI scaffold on credentials or network access.
- The committed environment template should make required variables visible while keeping real local secrets out of version control.
- A central mock-data module should reduce future migration friction compared with scattering placeholder data across UI components.
- The existing planning document should gain a focused implementation checklist before the scaffold starts, but it does not need to become a full product spec first.


## Round 26: Final Scaffold Readiness

### Provisional Direction

- **Implementation checklist timing:** Skip a separate implementation checklist because the existing plan is enough for the first scaffold decision.
- **`.env.example` timing:** Create `.env.example` before the scaffold with planned Supabase placeholders, even before app files exist.
- **Mock data module shape:** Use simple exported arrays for starter setups, placeholder examples, and navigation/dashboard copy.
- **Coding start condition:** Coding can begin after this Round 26 decision is documented; because the checklist is being skipped, the next step can move directly into scaffold implementation if confirmed.

### Implications To Explore Later

- Skipping a separate checklist keeps momentum high, but implementation should still cite this living plan as the source of truth.
- Creating `.env.example` before scaffold makes the planned Supabase contract visible without requiring real credentials.
- Simple mock arrays are the lowest-friction starting point and can later be refactored into typed modules, repository functions, or Supabase-backed data access.
- The next major choice is no longer another planning detail; it is whether to start coding the scaffold now.

## Major Areas To Explore

### Journal + Opportunities

Potential topics to clarify:

- Daily trade entry workflow.
- Best opportunities of the day.
- Missed opportunities.
- Trade screenshots and chart review.
- Intraday notes and emotional state.
- End-of-day review process.
- Structured daily forms.
- Replay-style trade reviews.
- Comparison between traded setups and missed opportunities.
- Market-phase based daily review sections.
- First-class missed-opportunity review objects.
- Simple phase-based daily journal: premarket, open, midday, close, and recap.
- Premarket watchlist, levels, execution plan, and mental preparation fields.
- Screenshot timelines, annotated chart galleries, and before/after comparisons.
- Lightweight phase notes for open, midday, and close.
- End-of-day recap that combines performance, process, and learning.
- Future full screenshot review board with reorderable images, annotations, labels, comments, and side-by-side comparisons.
- Hybrid end-of-day recap with short answers, scorecard ratings, and narrative notes.
- First screenshot MVP with upload, category, and caption.
- Future connections from phase notes to trades, missed opportunities, and screenshots.
- Comprehensive end-of-day prompts covering performance, process, opportunity, lessons, and tomorrow focus.
- Grouped screenshot categories for timeline, review, and market-context images.
- Workflow navigation exploration: Prep, Live Day, End-of-Day Review, Trade Replay, Patterns, and Analytics.
- Prep tab focused on the premarket plan: watchlist, levels, catalysts, bias, execution plan, and mental preparation.
- Live Day execution cockpit concept with planned setups, alerts, trades, missed opportunities, screenshots, P&L, rule reminders, and emotional check-ins.
- Screenshot category groups spanning timeline, review, and market context.
- Grouped Prep fields for market/watchlist, trading plan, and mental preparation.
- Low-distraction Live Day cockpit with collapsed sections by default.
- Separate trade and missed-opportunity forms optimized for each workflow.
- Standard Prep sections with 4-6 structured fields each for market/watchlist, trading plan, and mental prep.
- Live Day execution monitor default view with P&L, max loss status, active trades, alerts, emotions, rules, and quick-add buttons.
- Full trade review form covering execution basics, replay review, risk review, screenshots, emotions, and lessons.
- Full missed-opportunity form covering basics, why missed, validity, prevention, screenshots, and lesson.
- Proposed starter Prep field list for market/watchlist, trading plan, and mental prep.
- Balanced Live Day monitor with compact cards for risk, process, opportunity, phase notes, and quick-add.
- Risk-first full trade review order: planned risk, actual risk, stop, sizing, rule pass/fail, then execution, replay, and lesson.
- Learning-loop missed-opportunity review order: opportunity/context, why missed, validity, prevention, screenshots, and lesson.
- Accepted starter Prep fields for market/watchlist, trading plan, and mental prep sections.
- Full balanced Live Day card set: Risk, Active Trades, Planned Setups, Alerts, Opportunities, Emotions, Rules, Quick Add, and Phase Notes.
- Complete missed-opportunity learning-loop fields: context, setup validity, reason missed, emotional/decision blocker, prevention change, screenshot, and lesson.
- Live Day hierarchy with Risk, Active Trades, and Quick Add first; secondary cards below or collapsed.

### Performance + Patterns

Potential topics to clarify:

- Setup and pattern tracking.
- Performance metrics.
- Mistake categories.
- Rule-following and discipline tracking.
- Market-context tagging.
- Repeatable edge discovery.
- Setup-name taxonomy.
- Pattern hierarchy and grouping.
- Broad common setup labels and future subtypes.
- Single primary setup tag per trade or opportunity for the first version.
- Fixed starter setup list first, with editable setup management later.
- Initial small clean setup list: breakout, pullback, reversal, continuation, failed breakdown, and reclaim.
- Execution scorecard ratings for entry quality, exit quality, sizing, stop discipline, and trade management.
- Pass/fail plus notes scorecard format for plan-following and rule adherence.
- First risk-rule scorecard items: respected stop, sized correctly, followed max loss, did not average down, and avoided revenge trades.
- Future need to align full trade review fields with risk-rule scorecard outcomes.
- Risk-first trade review ordering to emphasize planned risk, actual risk, stop, sizing, and rule pass/fail before other review details.
- Complete risk-review fields combining risk numbers, risk-rule checklist, emotional risk state, and a risk lesson to carry forward.
- Complete risk metrics: planned/actual risk, stop, size, entry/exit, P&L, R multiple, MAE/MFE, and daily drawdown impact.
- Expanded risk-rule checklist: respected stop, sized correctly, followed max loss, did not average down, avoided revenge trades, respected planned risk, avoided moving stop incorrectly, stopped after daily loss, and avoided oversized adds.
- Next planning focus on Patterns / Playbook: setup definitions, examples, A+ criteria, pattern screenshots, and stats by setup.
- Playbook should define setups first before expanding into recognition training or performance analysis.
- Structured setup profiles: name, thesis, market context, entry trigger, invalidation, target logic, risk rules, and screenshots.
- Full A+ criteria combining technical, execution, and market-context requirements.
- Full pattern example library with best examples, non-examples, lifecycle sequences, mistakes, and variations.
- Core structured setup fields: name, description/thesis, market context, entry trigger, invalidation, target logic, risk rules, and screenshots.
- Manual A+ checklist with required criteria and disqualifiers.
- Simple example library categories: best example, non-example, mistake, and variation.
- Immediate setup-level stats from linked trades and opportunities.
- Basic immediate setup stats: trade count, missed-opportunity count, best-example count, and mistake count.
- Manual setup tag plus A+ checklist answers should feed setup quality and process stats.
- A+ checklist structure should use required criteria and disqualifiers.
- Lifecycle screenshots should be deferred while simple example categories are validated.
- Default A+ required criteria should begin with execution defaults: planned risk, correct size, no chase, entry at planned area, and clear exit plan.
- Default disqualifiers should cover a balanced mix of risk, setup quality, and process failures.
- A+ checklist answers should remain Playbook-only in the first version while trades and opportunities link by setup tag.
- Manual Playbook promotion should come first, with possible automatic suggestions later.
- Small balanced disqualifier list: unclear stop, bad R/R, chasing/late entry, no clear trigger, outside plan, and emotional entry.
- First manual promotion flow should happen from the Playbook setup profile by attaching or linking an existing trade, opportunity, or screenshot.
- Counts are enough first for setup stats while A+ checklists remain out of trade and opportunity forms.
- Continue Playbook planning next with first setup templates and exact example card layout.
- Definition-first setup template layout: setup name, thesis, required criteria, disqualifiers, entry trigger, invalidation, target logic, and risk rules.
- Full Playbook example card fields: screenshot, category, linked item, ticker/date, outcome, note, mistake/variation tag, and lesson.
- Separate attached-item sections for linked trades, linked missed opportunities, and linked screenshots.
- Notes-only examples with a simple written explanation for why each example matters.
- Summary-first setup page order: name, quick summary, stats/counts, thesis, criteria/disqualifiers, rules, and examples.
- Example cards should include both note and lesson fields.
- Attached-item sections should use compact lists for trades/opportunities and full cards for screenshots/examples.
- Next planning focus should convert the current plan into an MVP implementation spec and build roadmap.
- Workflow-complete MVP strategy with Prep, Live Day, End-of-Day Review, Trade Replay, Playbook, and Analytics placeholders.
- First build milestone should deliver Playbook MVP: setup profiles, A+ checklist, examples, basic counts, and manual linking.
- Preferred stack is Next.js / React for custom dashboard UX and future-rich interactions.
- Build roadmap should be deep enough for Milestone 1, then implementation can begin.
- Full Playbook MVP scope: setup CRUD, starter setups, example cards, screenshot upload, manual linking, basic counts, and placeholder stats.
- Full workflow-complete skeleton: navigation, placeholder pages, shared shell, theme, reusable components, and seeded mock data.
- Database-backed persistence should be used from day one for setups, examples, and trades.
- Implementation roadmap tasks should stay inside `docs/dashboard-plan.md` rather than a separate roadmap document.
- Supabase should be the first database/backend choice for hosted Postgres plus auth/storage options.
- Tailwind CSS plus shadcn/ui should be the first UI/component approach.
- Starter setups should be seeded as full placeholder profiles with names, thesis, criteria, disqualifiers, triggers, invalidation, target logic, and risk rules.
- First implementation slice should be the app scaffold: Next.js app, routes/tabs, shared shell, theme, and placeholder pages.
- Scaffold should wait until credential, environment, and database setup decisions are clarified.
- Use the package manager selected by the generated Next.js scaffold.
- Supabase setup should remain planned for a later milestone while the initial UI scaffold can use static placeholder data.
- Initial scaffold should include light mock data, enough to show layout without full fake content.
- Supabase setup should be document-only for now: required env vars and expected future tables, with actual client setup deferred.
- Environment strategy should use a committed `.env.example` plus ignored `.env.local`.
- Initial scaffold should use a central mock data module such as `lib/mock-data` before Supabase integration.
- Before coding, document scaffold decisions and a Milestone 1 checklist inside `docs/dashboard-plan.md`.
- Round 26 supersedes the separate-checklist requirement: the existing plan is enough for the first scaffold decision.
- Create `.env.example` before scaffold with planned Supabase placeholders.
- Initial mock data should use simple exported arrays for starter setups, placeholder examples, and navigation/dashboard copy.
- Coding can begin after Round 26 is documented if scaffold implementation is confirmed.

## Open Questions

The next question batch should confirm whether to start scaffold implementation now, whether `.env.example` should be the first code artifact, whether the scaffold should use the latest generated Next.js defaults, and whether the first scaffold should stop after routes/placeholders or include the first Playbook mock-data screen.
