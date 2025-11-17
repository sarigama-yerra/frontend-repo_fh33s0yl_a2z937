import { motion } from 'framer-motion'

export default function Services(){
  const items = [
    {
      title: 'Clases Individuales',
      desc: 'Sesiones 1 a 1 enfocadas en técnica, táctica y análisis de vídeo.',
      icon: '🏆'
    },
    {
      title: 'Clases Grupales',
      desc: 'Grupos reducidos por niveles: iniciación, intermedio y avanzado.',
      icon: '👥'
    },
    {
      title: 'Preparación Física',
      desc: 'Mejora tu velocidad, reacción y prevención de lesiones.',
      icon: '💪'
    },
    {
      title: 'Escuela Infantil',
      desc: 'Programas divertidos y formativos para niñ@s desde 6 años.',
      icon: '🎾'
    },
  ]

  return (
    <section id="servicios" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.h2
          className="text-3xl sm:text-4xl font-black tracking-tight"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.5 }}
        >
          Programas y servicios
        </motion.h2>
        <motion.p
          className="mt-3 text-gray-600 max-w-prose"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Entrenamientos diseñados para sacar tu mejor versión en pista.
        </motion.p>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((it, i) => (
            <motion.div
              key={it.title}
              className="group rounded-2xl border border-black/10 p-6 bg-gradient-to-br from-white to-emerald-50/30 hover:from-emerald-50/60 hover:to-white transition-all shadow-sm hover:shadow hover:-translate-y-1"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: 0.05 * i, ease: 'easeOut' }}
            >
              <div className="text-3xl">{it.icon}</div>
              <h3 className="mt-3 font-bold text-lg">{it.title}</h3>
              <p className="mt-2 text-gray-600 text-sm">{it.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
