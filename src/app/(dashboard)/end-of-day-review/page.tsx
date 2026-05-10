import { Card, PageHeader, Badge } from "@/components/ui";

export default function EndOfDayReviewPage() {
  return (
    <>
      <PageHeader
        eyebrow="End-of-Day Review"
        title="Hybrid recap placeholder"
        description="Future build: short answers, scorecard ratings, narrative recap, lessons, tomorrow focus, and Playbook promotion prompts."
      />
      <Card>
        <Badge tone="slate">Later milestone</Badge>
        <h2 className="mt-4 text-2xl font-semibold">Review workflow coming next</h2>
        <p className="mt-3 max-w-2xl text-slate-400">This page is intentionally a placeholder in the workflow-complete skeleton.</p>
      </Card>
    </>
  );
}
