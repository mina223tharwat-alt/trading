import { cn } from "@/lib/utils";

export function Card({ className, children }: { className?: string; children: React.ReactNode }) {
  return <section className={cn("rounded-3xl border border-white/10 bg-white/[0.04] p-6 shadow-2xl shadow-black/20", className)}>{children}</section>;
}

export function Badge({ children, tone = "cyan" }: { children: React.ReactNode; tone?: "cyan" | "slate" | "amber" }) {
  const tones = {
    cyan: "border-cyan-300/30 bg-cyan-300/10 text-cyan-200",
    slate: "border-slate-300/20 bg-slate-300/10 text-slate-200",
    amber: "border-amber-300/30 bg-amber-300/10 text-amber-200",
  };
  return <span className={cn("inline-flex rounded-full border px-2.5 py-1 text-xs font-medium", tones[tone])}>{children}</span>;
}

export function PageHeader({ eyebrow, title, description }: { eyebrow: string; title: string; description: string }) {
  return (
    <header className="mb-8">
      <p className="text-sm font-medium uppercase tracking-[0.25em] text-cyan-300">{eyebrow}</p>
      <h1 className="mt-3 text-4xl font-semibold tracking-tight text-white sm:text-5xl">{title}</h1>
      <p className="mt-4 max-w-3xl text-base leading-7 text-slate-400">{description}</p>
    </header>
  );
}
