import Link from "next/link";
import { workflowRoutes } from "@/lib/mock-data";

export function Shell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <aside className="fixed inset-y-0 left-0 hidden w-72 border-r border-white/10 bg-slate-950/95 p-6 lg:block">
        <Link href="/" className="block">
          <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">Trading</p>
          <h1 className="mt-2 text-2xl font-semibold">Dashboard</h1>
        </Link>
        <nav className="mt-10 space-y-2">
          {workflowRoutes.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group flex items-start gap-3 rounded-2xl border border-transparent px-3 py-3 text-sm text-slate-300 transition hover:border-cyan-400/30 hover:bg-cyan-400/10 hover:text-white"
            >
              <span className="mt-0.5 flex h-5 w-5 items-center justify-center text-cyan-300">{item.icon}</span>
              <span>
                <span className="block font-medium">{item.title}</span>
                <span className="block text-xs text-slate-500 group-hover:text-slate-300">{item.status}</span>
              </span>
            </Link>
          ))}
        </nav>
      </aside>
      <main className="lg:pl-72">
        <div className="mx-auto max-w-7xl px-5 py-6 sm:px-8 lg:px-10">{children}</div>
      </main>
    </div>
  );
}
