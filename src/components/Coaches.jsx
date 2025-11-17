import { motion } from 'framer-motion'

export default function Coaches(){
  const coaches = [
    { name: 'Ana Sánchez', role: 'Head Coach', img: 'https://images.unsplash.com/photo-1544006659-f0b21884ce1d?q=80&w=800&auto=format&fit=crop' },
    { name: 'Carlos Pérez', role: 'Técnico Avanzado', img: 'https://images.unsplash.com/photo-1554151228-14d9def656e4?q=80&w=800&auto=format&fit=crop' },
    { name: 'Lucía Romero', role: 'Preparadora Física', img: 'https://images.unsplash.com/photo-1547425260-76bcadfb4f2a?q=80&w=800&auto=format&fit=crop' },
  ]

  return (
    <section id="entrenadores" className="py-20 bg-emerald-50/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.h2
          className="text-3xl sm:text-4xl font-black tracking-tight"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.5 }}
        >
          Nuestro equipo
        </motion.h2>
        <motion.p
          className="mt-3 text-gray-600 max-w-prose"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Profesionales con experiencia en competición y formación.
        </motion.p>

        <div className="mt-10 grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {coaches.map((c, i) => (
            <motion.div
              key={c.name}
              className="rounded-2xl overflow-hidden bg-white border border-black/10 shadow-sm hover:shadow-md transition-all group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: 0.05 * i }}
            >
              <div className="overflow-hidden">
                <img src={c.img} alt={c.name} className="h-56 w-full object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
              <div className="p-4">
                <h3 className="font-bold">{c.name}</h3>
                <p className="text-gray-600 text-sm">{c.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
