import Link from "next/link";
import { Card, PageHeader, Badge } from "@/components/ui";
import { workflowRoutes, starterSetups } from "@/lib/mock-data";

export default function HomePage() {
  return (
    <>
      <PageHeader
        eyebrow="Milestone 1 scaffold"
        title="Workflow-complete trading dashboard shell"
        description="The first scaffold creates the dashboard home for Prep, Live Day, End-of-Day Review, Trade Replay, Playbook, and Analytics while keeping data static until Supabase integration."
      />
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {workflowRoutes.map((route) => (
          <Link key={route.href} href={route.href}>
            <Card className="h-full transition hover:-translate-y-1 hover:border-cyan-300/40 hover:bg-cyan-300/10">
              <div className="flex items-center justify-between gap-4">
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-cyan-300/10 text-cyan-200">{route.icon}</span>
                <Badge tone={route.status === "Milestone 1" ? "amber" : route.status === "Scaffold" ? "cyan" : "slate"}>{route.status}</Badge>
              </div>
              <h2 className="mt-5 text-xl font-semibold text-white">{route.title}</h2>
              <p className="mt-2 text-sm leading-6 text-slate-400">{route.description}</p>
            </Card>
          </Link>
        ))}
      </div>
      <Card className="mt-6">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <h2 className="text-xl font-semibold">Playbook starter setups</h2>
            <p className="mt-2 text-sm text-slate-400">Light mock data is centralized in <code>src/lib/mock-data.ts</code>.</p>
          </div>
          <Badge>{starterSetups.length} seeded setup profiles</Badge>
        </div>
      </Card>
    </>
  );
}
