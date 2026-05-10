import { Badge, Card, PageHeader } from "@/components/ui";
import { playbookExamples, starterSetups } from "@/lib/mock-data";

export default function PlaybookPage() {
  const selected = starterSetups[0];
  const examples = playbookExamples.filter((example) => example.setupSlug === selected.slug);

  return (
    <>
      <PageHeader
        eyebrow="Playbook MVP"
        title="Setup profiles and examples"
        description="Milestone 1 starts with setup profiles, A+ criteria/disqualifiers, examples, basic counts, and manual linking using light mock data."
      />
      <div className="grid gap-5 xl:grid-cols-[0.9fr_1.4fr]">
        <Card>
          <div className="flex items-center justify-between gap-4">
            <h2 className="text-xl font-semibold">Starter setups</h2>
            <Badge>{starterSetups.length} profiles</Badge>
          </div>
          <div className="mt-5 space-y-3">
            {starterSetups.map((setup) => (
              <div key={setup.slug} className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                <div className="flex items-center justify-between gap-3">
                  <h3 className="font-semibold text-white">{setup.name}</h3>
                  <span className="text-xs text-slate-500">{setup.counts.trades} trades</span>
                </div>
                <p className="mt-2 text-sm leading-6 text-slate-400">{setup.summary}</p>
              </div>
            ))}
          </div>
        </Card>

        <div className="space-y-5">
          <Card>
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div>
                <p className="text-sm uppercase tracking-[0.25em] text-cyan-300">Selected setup</p>
                <h2 className="mt-2 text-3xl font-semibold">{selected.name}</h2>
              </div>
              <div className="grid grid-cols-4 gap-2 text-center text-xs text-slate-400">
                <Metric label="Trades" value={selected.counts.trades} />
                <Metric label="Missed" value={selected.counts.missedOpportunities} />
                <Metric label="Best" value={selected.counts.bestExamples} />
                <Metric label="Mistakes" value={selected.counts.mistakes} />
              </div>
            </div>
            <p className="mt-5 text-slate-300">{selected.thesis}</p>
            <div className="mt-6 grid gap-4 lg:grid-cols-2">
              <Checklist title="Required criteria" items={selected.requiredCriteria} />
              <Checklist title="Disqualifiers" items={selected.disqualifiers} />
            </div>
          </Card>

          <Card>
            <h3 className="text-xl font-semibold">Rules and execution model</h3>
            <div className="mt-5 grid gap-4 md:grid-cols-3">
              <InfoBlock title="Entry trigger" value={selected.entryTrigger} />
              <InfoBlock title="Invalidation" value={selected.invalidation} />
              <InfoBlock title="Target logic" value={selected.targetLogic} />
            </div>
          </Card>

          <Card>
            <div className="flex items-center justify-between gap-4">
              <h3 className="text-xl font-semibold">Example cards</h3>
              <Badge tone="amber">Light mock data</Badge>
            </div>
            <div className="mt-5 grid gap-4 md:grid-cols-2">
              {examples.map((example) => (
                <div key={example.id} className="rounded-2xl border border-white/10 bg-slate-900/70 p-4">
                  <div className="aspect-video rounded-xl border border-dashed border-cyan-300/30 bg-cyan-300/10" />
                  <div className="mt-4 flex items-center justify-between gap-3">
                    <Badge>{example.category}</Badge>
                    <span className="text-xs text-slate-500">{example.ticker} · {example.date}</span>
                  </div>
                  <p className="mt-3 text-sm text-slate-300">{example.note}</p>
                  <p className="mt-2 text-sm text-cyan-200">Lesson: {example.lesson}</p>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </>
  );
}

function Metric({ label, value }: { label: string; value: number }) {
  return (
    <div className="rounded-2xl bg-white/[0.04] px-3 py-2">
      <div className="text-lg font-semibold text-white">{value}</div>
      <div>{label}</div>
    </div>
  );
}

function Checklist({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <h3 className="font-semibold text-white">{title}</h3>
      <ul className="mt-3 space-y-2 text-sm text-slate-300">
        {items.map((item) => <li key={item} className="rounded-xl bg-white/[0.04] px-3 py-2">{item}</li>)}
      </ul>
    </div>
  );
}

function InfoBlock({ title, value }: { title: string; value: string }) {
  return (
    <div className="rounded-2xl bg-white/[0.04] p-4">
      <h4 className="font-semibold text-cyan-200">{title}</h4>
      <p className="mt-2 text-sm leading-6 text-slate-300">{value}</p>
    </div>
  );
}
