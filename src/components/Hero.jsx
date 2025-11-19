export default function Hero() {
  return (
    <section className="relative pt-28 md:pt-32 pb-16 md:pb-24 overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_20%,rgba(56,189,248,0.15),transparent_35%),radial-gradient(circle_at_80%_0%,rgba(59,130,246,0.12),transparent_35%)]" />
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">
              Факультет высшей школы управления
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Финансового университета</span>
            </h1>
            <p className="mt-4 text-slate-200/80 text-lg">
              Современные образовательные программы, сильный профессорско-преподавательский состав и практико-ориентированный подход к обучению.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#programs" className="px-5 py-2.5 rounded-lg bg-blue-500 hover:bg-blue-600 text-white font-semibold transition-colors">Выбрать программу</a>
              <a href="#contact" className="px-5 py-2.5 rounded-lg bg-white/10 hover:bg-white/20 text-white font-semibold transition-colors">Задать вопрос</a>
            </div>
          </div>
          <div>
            <div className="aspect-[4/3] rounded-2xl border border-white/10 bg-gradient-to-br from-slate-800 to-slate-900 p-4">
              <div className="h-full w-full rounded-xl bg-[url('https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=1400&auto=format&fit=crop')] bg-cover bg-center" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
