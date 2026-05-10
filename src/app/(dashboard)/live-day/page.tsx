import { Badge, Card, PageHeader } from "@/components/ui";

const cards = [
  { title: "Risk", detail: "Max loss status, P&L, risk reminders", icon: "!", priority: "Top" },
  { title: "Active Trades", detail: "Open positions and active management notes", icon: "↗", priority: "Top" },
  { title: "Quick Add", detail: "Fast capture trade, missed opp, screenshot, or note", icon: "+", priority: "Top" },
  { title: "Secondary Cards", detail: "Planned setups, alerts, opportunities, emotions, rules, phase notes", icon: "↗", priority: "Collapsed" },
];

export default function LiveDayPage() {
  return (
    <>
      <PageHeader
        eyebrow="Live Day"
        title="Risk-first execution cockpit"
        description="The live scaffold prioritizes Risk, Active Trades, and Quick Add first, with secondary cards below or collapsed."
      />
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {cards.map((card) => (
          <Card key={card.title}>
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-cyan-300/10 text-cyan-200">{card.icon}</span>
            <h2 className="mt-4 text-lg font-semibold">{card.title}</h2>
            <p className="mt-2 text-sm text-slate-400">{card.detail}</p>
            <div className="mt-5"><Badge tone={card.priority === "Top" ? "cyan" : "slate"}>{card.priority}</Badge></div>
          </Card>
        ))}
      </div>
    </>
  );
}
