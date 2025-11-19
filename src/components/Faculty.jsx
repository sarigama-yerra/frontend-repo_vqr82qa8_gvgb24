import { useEffect, useState } from 'react'

export default function Faculty() {
  const [people, setPeople] = useState([])

  useEffect(() => {
    const base = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
    fetch(`${base}/api/faculty`).then(r => r.ok ? r.json() : []).then(setPeople).catch(() => {})
  }, [])

  const fallback = [
    { full_name: 'Иванов Иван Иванович', position: 'Декан', department: 'Деканат' },
    { full_name: 'Петрова Анна Сергеевна', position: 'Профессор', department: 'Кафедра менеджмента' },
    { full_name: 'Сидоров Алексей Павлович', position: 'Доцент', department: 'Кафедра госуправления' },
  ]

  const list = people.length ? people : fallback

  return (
    <section id="faculty" className="py-16 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-white mb-8">Преподаватели</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {list.map((p, i) => (
            <div key={i} className="rounded-xl border border-white/10 bg-slate-800/50 p-5">
              <div className="h-36 rounded-lg bg-gradient-to-br from-slate-700 to-slate-800 mb-4" />
              <div className="text-white font-semibold">{p.full_name}</div>
              <div className="text-slate-300 text-sm">{p.position}</div>
              {p.department && (
                <div className="text-slate-400 text-xs mt-1">{p.department}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
