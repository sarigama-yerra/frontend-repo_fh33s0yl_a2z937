import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Coaches from './components/Coaches'
import Contact from './components/Contact'
import ErrorBoundary from './components/ErrorBoundary'

function App() {
  return (
    <div className="bg-white text-gray-900">
      <Navbar />
      <main>
        <ErrorBoundary fallback={<section className="pt-28 pb-10 bg-emerald-50"><div className="max-w-6xl mx-auto px-4 sm:px-6"><div className="rounded-2xl border border-black/10 bg-white p-6 text-center"><p className="font-semibold">No se pudo cargar la sección 3D por ahora.</p><p className="text-sm text-gray-600 mt-1">Seguimos mostrando el resto del sitio.</p></div></div></section>}>
          <Hero />
        </ErrorBoundary>
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
