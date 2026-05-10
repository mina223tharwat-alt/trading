import { Card, PageHeader, Badge } from "@/components/ui";

export default function AnalyticsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Analytics"
        title="Reports and setup feedback placeholder"
        description="Future build: setup counts, P&L, risk adherence, mistake patterns, filters, charts, and review loops."
      />
      <Card>
        <Badge tone="slate">Placeholder</Badge>
        <h2 className="mt-4 text-2xl font-semibold">Analytics will connect after data is real</h2>
        <p className="mt-3 max-w-2xl text-slate-400">The first scaffold keeps this route visible so the workflow skeleton is complete.</p>
      </Card>
    </>
  );
}
