import { motion, useScroll, useSpring } from 'framer-motion'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Coaches from './components/Coaches'
import Contact from './components/Contact'
import ErrorBoundary from './components/ErrorBoundary'
import CursorGlow from './components/CursorGlow'

function App() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 20,
    mass: 0.2,
  })

  return (
    <div className="bg-white text-gray-900">
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 z-[60] origin-left bg-gradient-to-r from-emerald-500 via-lime-400 to-emerald-600"
        style={{ scaleX }}
      />
      <Navbar />
      <CursorGlow />

      <main>
        <ErrorBoundary fallback={<section className="pt-28 pb-10 bg-emerald-50"><div className="max-w-6xl mx-auto px-4 sm:px-6"><div className="rounded-2xl border border-black/10 bg-white p-6 text-center"><p className="font-semibold">No se pudo cargar la sección 3D por ahora.</p><p className="text-sm text-gray-600 mt-1">Seguimos mostrando el resto del sitio.</p></div></div></section>}>
          <Hero />
        </ErrorBoundary>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          <Services />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, ease: 'easeOut', delay: 0.05 }}
        >
          <Coaches />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, ease: 'easeOut', delay: 0.1 }}
        >
          <Contact />
        </motion.div>

        <footer className="py-10 border-t border-black/10 text-center text-sm text-gray-600">
          © {new Date().getFullYear()} Padel Academy. Todos los derechos reservados.
        </footer>
      </main>
    </div>
  )
}

export default App
