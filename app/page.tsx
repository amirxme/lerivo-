export default function Home() {
  return (
    <div className="min-h-screen bg-bg text-white">
      {/* Nav */}
      <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-xl bg-bg/70 border-b border-border">
        <div className="max-w-6xl mx-auto flex items-center justify-between px-5 h-16">
          <span className="font-semibold tracking-tight text-lg">LERIVO</span>
          <nav className="hidden md:flex items-center gap-8 text-sm text-muted">
            <a href="/campaigns" className="hover:text-white transition">Campaigns</a>
            <a href="/creators" className="hover:text-white transition">Creators</a>
            <a href="/docs" className="hover:text-white transition">Docs</a>
          </nav>
          <a
            href="/create"
            className="text-sm font-medium px-4 py-2 rounded-lg bg-white text-black hover:bg-neutral-200 transition"
          >
            Launch app
          </a>
        </div>
      </header>

      {/* Hero */}
      <main className="relative pt-40 pb-24 px-5">
        {/* glow */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute left-1/2 top-0 -translate-x-1/2 w-[800px] h-[500px] bg-accent/20 blur-[140px] rounded-full" />
        </div>

        <div className="relative max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border bg-surface text-xs text-muted mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
            Live on Base
          </div>

          <h1 className="text-5xl md:text-7xl font-semibold tracking-tight leading-[1.05]">
            Where memecoins
            <br />
            <span className="bg-gradient-to-r from-white via-neutral-400 to-neutral-600 bg-clip-text text-transparent">
              meet creators.
            </span>
          </h1>

          <p className="mt-6 text-lg text-muted max-w-xl mx-auto">
            Launch a campaign, get memes, videos and threads from real creators.
            Pay only for the winners.
          </p>

          <div className="mt-10 flex flex-wrap gap-3 justify-center">
            <a
              href="/create"
              className="px-6 py-3 rounded-xl bg-white text-black font-medium hover:bg-neutral-200 transition"
            >
              Launch a campaign
            </a>
            <a
              href="/campaigns"
              className="px-6 py-3 rounded-xl border border-border text-white font-medium hover:bg-surface transition"
            >
              Browse campaigns
            </a>
          </div>
        </div>

        {/* Feature cards */}
        <div className="relative max-w-5xl mx-auto mt-28 grid md:grid-cols-3 gap-4">
          {[
            {
              title: "For memecoins",
              text: "Turn attention into content. Launch a campaign in 2 minutes, fund it in USDC.",
            },
            {
              title: "For creators",
              text: "Get paid for memes, videos, threads and art. No clients, no gatekeepers.",
            },
            {
              title: "On-chain rewards",
              text: "Winners are paid directly to their wallet. Transparent and instant.",
            },
          ].map((f) => (
            <div
              key={f.title}
              className="p-6 rounded-2xl border border-border bg-surface/60 hover:bg-surface transition"
            >
              <h3 className="font-medium text-white">{f.title}</h3>
              <p className="mt-2 text-sm text-muted leading-relaxed">{f.text}</p>
            </div>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-border py-8 px-5">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-muted">
          <span>© {new Date().getFullYear()} LERIVO</span>
          <div className="flex gap-6">
            <a href="/terms" className="hover:text-white transition">Terms</a>
            <a href="/privacy" className="hover:text-white transition">Privacy</a>
            <a href="https://x.com" className="hover:text-white transition">X</a>
          </div>
        </div>
      </footer>
    </div>
  );
}