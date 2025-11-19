import { useState } from 'react'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', topic: '', message: '' })
  const [status, setStatus] = useState(null)

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const submit = async (e) => {
    e.preventDefault()
    setStatus('Отправляем...')
    try {
      const base = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
      const res = await fetch(`${base}/api/inquiry`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (res.ok) setStatus('✅ Заявка отправлена')
      else setStatus('❌ Ошибка отправки')
    } catch {
      setStatus('❌ Сервер недоступен')
    }
  }

  return (
    <section id="contact" className="py-16 border-t border-white/10">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-white mb-6">Связаться с нами</h2>
        <form onSubmit={submit} className="grid gap-4 bg-slate-800/50 border border-white/10 p-6 rounded-xl">
          <input name="name" value={form.name} onChange={handleChange} placeholder="Имя" className="px-4 py-2 rounded bg-slate-900/60 text-white border border-white/10" required />
          <input name="email" value={form.email} onChange={handleChange} placeholder="Email" className="px-4 py-2 rounded bg-slate-900/60 text-white border border-white/10" required />
          <input name="topic" value={form.topic} onChange={handleChange} placeholder="Тема" className="px-4 py-2 rounded bg-slate-900/60 text-white border border-white/10" required />
          <textarea name="message" value={form.message} onChange={handleChange} placeholder="Сообщение" rows="4" className="px-4 py-2 rounded bg-slate-900/60 text-white border border-white/10" required />
          <button className="px-5 py-2.5 rounded-lg bg-blue-500 hover:bg-blue-600 text-white font-semibold transition-colors">Отправить</button>
          {status && <div className="text-slate-200 text-sm">{status}</div>}
        </form>
      </div>
    </section>
  )
}
