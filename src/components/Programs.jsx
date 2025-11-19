import { useEffect, useState } from 'react'

export default function Programs() {
  const [programs, setPrograms] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const load = async () => {
      try {
        const base = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
        const res = await fetch(`${base}/api/programs`)
        if (res.ok) {
          const data = await res.json()
          setPrograms(data)
        }
      } catch (e) {
        // ignore for static preview
      } finally {
        setLoading(false)
      }
    }
    load()
  }, [])

  const fallback = [
    { title: 'Менеджмент', degree: 'Бакалавриат', format: 'очная', duration_years: 4, description: 'Фокус на управлении проектами, аналитике и лидерстве', highlights: ['Практика с компаниями', 'Проектное обучение'] },
    { title: 'Государственное и муниципальное управление', degree: 'Магистратура', format: 'очная', duration_years: 2, description: 'Подготовка управленцев для госслужбы', highlights: ['Кейсы', 'Стажировки'] },
  ]

  const list = programs.length ? programs : fallback

  return (
    <section id="programs" className="py-16 md:py-20 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">Образовательные программы</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {loading && (
            <div className="col-span-full text-slate-300">Загружаем программы...</div>
          )}
          {list.map((p, idx) => (
            <div key={idx} className="rounded-xl border border-white/10 bg-slate-800/50 p-5 hover:bg-slate-800/80 transition-colors">
              <div className="text-sm text-cyan-300 font-medium">{p.degree} • {p.format}</div>
              <h3 className="mt-1 text-xl font-semibold text-white">{p.title}</h3>
              <p className="mt-2 text-slate-300 text-sm">{p.description}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                <span className="text-xs text-white/70 bg-white/10 rounded px-2 py-1">{p.duration_years} года</span>
                {p.highlights?.slice(0,3).map((h, i) => (
                  <span key={i} className="text-xs text-cyan-200/90 bg-cyan-500/10 rounded px-2 py-1">{h}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
