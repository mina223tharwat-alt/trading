import { Card, PageHeader, Badge } from "@/components/ui";

const fields = ["Planned/actual risk", "Stop and size", "Entry/exit", "P&L and R multiple", "MAE/MFE", "Risk-rule checklist", "Emotional risk state", "Risk lesson"];

export default function TradeReplayPage() {
  return (
    <>
      <PageHeader
        eyebrow="Trade Replay"
        title="Risk-first replay placeholder"
        description="Future build: full trade and missed-opportunity review forms with screenshots, risk metrics, emotions, and lessons."
      />
      <Card>
        <Badge tone="slate">Planned fields</Badge>
        <div className="mt-5 grid gap-3 md:grid-cols-2 lg:grid-cols-4">
          {fields.map((field) => <div key={field} className="rounded-2xl bg-white/[0.04] p-3 text-sm text-slate-300">{field}</div>)}
        </div>
      </Card>
    </>
  );
}
