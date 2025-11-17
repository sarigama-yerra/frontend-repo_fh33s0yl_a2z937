import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Coaches from './components/Coaches'
import Contact from './components/Contact'

function App() {
  return (
    <div className="bg-white text-gray-900">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Coaches />
        <Contact />
        <footer className="py-10 border-t border-black/10 text-center text-sm text-gray-600">
          © {new Date().getFullYear()} Padel Academy. Todos los derechos reservados.
        </footer>
      </main>
    </div>
  )
}

export default App
