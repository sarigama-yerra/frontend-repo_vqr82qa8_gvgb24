import { useEffect, useState } from 'react'

export default function NewsEvents() {
  const [news, setNews] = useState([])
  const [events, setEvents] = useState([])

  useEffect(() => {
    const base = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
    const load = async () => {
      try {
        const [n, e] = await Promise.all([
          fetch(`${base}/api/news`).then(r => r.ok ? r.json() : []),
          fetch(`${base}/api/events`).then(r => r.ok ? r.json() : []),
        ])
        setNews(n || [])
        setEvents(e || [])
      } catch {}
    }
    load()
  }, [])

  const newsFallback = [
    { title: 'Открыт набор на 2025', summary: 'Прием на программы бакалавриата и магистратуры', published_on: '2025-03-01' },
    { title: 'Партнерства с бизнесом', summary: 'Новые стажировки и проекты для студентов', published_on: '2025-02-10' },
  ]
  const eventsFallback = [
    { title: 'День открытых дверей', date: '2025-11-30', location: 'Главный корпус', description: 'Встреча с деканатом и преподавателями' },
    { title: 'Кейс-чемпионат', date: '2025-12-15', location: 'Онлайн', description: 'Командное соревнование по управлению' },
  ]

  return (
    <section id="news" className="py-16 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-white mb-6">Новости и события</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-white font-semibold mb-3">Новости</h3>
            <div className="space-y-3">
              {(news.length ? news : newsFallback).map((n, i) => (
                <div key={i} className="rounded-lg border border-white/10 bg-slate-800/50 p-4">
                  <div className="text-xs text-slate-400">{n.published_on || ''}</div>
                  <div className="text-white font-medium">{n.title}</div>
                  <div className="text-slate-300 text-sm">{n.summary}</div>
                </div>
              ))}
            </div>
          </div>

          <div id="events">
            <h3 className="text-white font-semibold mb-3">События</h3>
            <div className="space-y-3">
              {(events.length ? events : eventsFallback).map((e, i) => (
                <div key={i} className="rounded-lg border border-white/10 bg-slate-800/50 p-4">
                  <div className="text-xs text-slate-400">{e.date} • {e.location}</div>
                  <div className="text-white font-medium">{e.title}</div>
                  <div className="text-slate-300 text-sm">{e.description}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
