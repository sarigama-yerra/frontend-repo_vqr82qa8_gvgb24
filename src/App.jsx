import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Programs from './components/Programs'
import NewsEvents from './components/NewsEvents'
import Faculty from './components/Faculty'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-200">
      <Navbar />
      <Hero />
      <Programs />
      <NewsEvents />
      <Faculty />
      <Contact />
      <footer className="py-8 text-center text-sm text-slate-400 border-t border-white/10">
        © {new Date().getFullYear()} Факультет ВШУ Финансового университета
      </footer>
    </div>
  )
}

export default App
