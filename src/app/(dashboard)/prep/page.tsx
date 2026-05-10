import { Card, PageHeader, Badge } from "@/components/ui";

const sections = [
  {
    title: "Market / Watchlist",
    items: ["Market bias", "Key index/ETF levels", "Watchlist tickers", "Catalysts/news", "Major levels", "Market notes"],
  },
  {
    title: "Trading Plan",
    items: ["Planned setups", "Entry triggers", "Invalidation levels", "Risk limit/max loss", "Max trades", "Avoid list"],
  },
  {
    title: "Mental Prep",
    items: ["Sleep/energy", "Confidence", "Emotional state", "Discipline goal", "Primary reminder", "Risk mindset"],
  },
];

export default function PrepPage() {
  return (
    <>
      <PageHeader
        eyebrow="Prep"
        title="Premarket plan workspace"
        description="Placeholder sections mirror the accepted starter Prep fields while the scaffold remains static and Supabase-independent."
      />
      <div className="grid gap-4 lg:grid-cols-3">
        {sections.map((section) => (
          <Card key={section.title}>
            <div className="flex items-center justify-between gap-3">
              <h2 className="text-lg font-semibold">{section.title}</h2>
              <Badge tone="slate">Planned</Badge>
            </div>
            <ul className="mt-5 space-y-3 text-sm text-slate-300">
              {section.items.map((item) => (
                <li key={item} className="rounded-2xl bg-white/[0.04] px-3 py-2">{item}</li>
              ))}
            </ul>
          </Card>
        ))}
      </div>
    </>
  );
}
