import { motion } from 'framer-motion'
import SafeSpline from './SafeSpline'

export default function Hero() {
  const sceneUrl = "https://prod.spline.design/2wfa1yqzZVw3C0kb/scene.splinecode"

  return (
    <section className="relative overflow-hidden pt-28 pb-16 sm:pt-32 sm:pb-24 bg-gradient-to-b from-white to-emerald-50">
      <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-emerald-200/40 blur-3xl" />
      <div className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-lime-200/40 blur-3xl" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 grid md:grid-cols-2 gap-10 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight">
            Eleva tu juego de pádel
            <span className="block bg-gradient-to-r from-emerald-600 to-lime-500 bg-clip-text text-transparent">con entrenamientos pro</span>
          </h1>
          <p className="mt-6 text-lg text-gray-600 max-w-prose">
            Academia especializada en todos los niveles. Clases individuales y grupales, preparación física y táctica, y programas para niños y adultos.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#contacto" className="inline-flex items-center rounded-full bg-emerald-600 text-white px-6 py-3 font-semibold shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all">
              Reserva una clase
            </a>
            <a href="#servicios" className="inline-flex items-center rounded-full bg-white text-gray-900 px-6 py-3 font-semibold shadow-sm ring-1 ring-black/10 hover:bg-gray-50 hover:shadow-md hover:-translate-y-0.5 transition-all">
              Ver programas
            </a>
          </div>
          <div className="mt-10 flex items-center gap-6 text-sm text-gray-600">
            <div className="flex -space-x-2">
              <img src="https://i.pravatar.cc/40?img=1" className="w-8 h-8 rounded-full ring-2 ring-white" />
              <img src="https://i.pravatar.cc/40?img=2" className="w-8 h-8 rounded-full ring-2 ring-white" />
              <img src="https://i.pravatar.cc/40?img=3" className="w-8 h-8 rounded-full ring-2 ring-white" />
            </div>
            <p>
              +200 alumnos activos y 4.9/5 en reseñas
            </p>
          </div>
        </motion.div>

        <motion.div
          className="relative h-[380px] sm:h-[480px] md:h-[560px] rounded-2xl overflow-hidden shadow-xl ring-1 ring-black/10 bg-white"
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
          whileHover={{ scale: 1.01 }}
        >
          <SafeSpline scene={sceneUrl} />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-emerald-600/0 to-emerald-600/0" />
        </motion.div>
      </div>
    </section>
  )
}
