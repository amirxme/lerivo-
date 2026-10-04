export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-6 text-center">
      <h1 className="text-6xl font-bold tracking-tight">LERIVO</h1>
      <p className="mt-5 text-lg text-muted max-w-xl">
        Платформа, где мемкоины платят креаторам за мемы, видео, треды и дизайн.
      </p>
      <div className="mt-10 flex gap-3 flex-wrap justify-center">
        <a
          href="/campaigns"
          className="px-6 py-3 rounded-xl bg-accent text-white font-medium hover:opacity-90 transition"
        >
          Смотреть кампании
        </a>
        <a
          href="/create"
          className="px-6 py-3 rounded-xl border border-border font-medium hover:bg-surface transition"
        >
          Создать кампанию
        </a>
      </div>
      <p className="mt-20 text-xs text-muted">MVP v0.1</p>
    </main>
  );
}