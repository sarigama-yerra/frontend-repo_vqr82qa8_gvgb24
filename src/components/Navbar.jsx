import { Menu } from 'lucide-react'

export default function Navbar() {
  const items = [
    { href: '#programs', label: 'Программы' },
    { href: '#news', label: 'Новости' },
    { href: '#events', label: 'События' },
    { href: '#faculty', label: 'Преподаватели' },
    { href: '#contact', label: 'Контакты' },
  ]

  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur bg-slate-900/60 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <a href="#" className="text-white font-bold text-lg tracking-tight">
          Факультет ВШУ
        </a>
        <nav className="hidden md:flex items-center gap-6">
          {items.map((i) => (
            <a key={i.href} href={i.href} className="text-slate-200 hover:text-white text-sm">
              {i.label}
            </a>
          ))}
        </nav>
        <button className="md:hidden text-white/80 p-2 hover:text-white" aria-label="menu">
          <Menu size={22} />
        </button>
      </div>
    </header>
  )
}
