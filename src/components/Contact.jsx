import { useState } from 'react'
import { motion } from 'framer-motion'

export default function Contact(){
  const [status, setStatus] = useState(null)

  const onSubmit = async (e) => {
    e.preventDefault()
    setStatus('enviando')

    try {
      await new Promise(r => setTimeout(r, 600))
      setStatus('enviado')
      e.target.reset()
    } catch (e) {
      setStatus('error')
    }
  }

  return (
    <section id="contacto" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <motion.h2
            className="text-3xl sm:text-4xl font-black tracking-tight"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.5 }}
          >
            Reserva tu clase de prueba
          </motion.h2>
          <motion.p
            className="mt-3 text-gray-600"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Déjanos tus datos y te contactamos para coordinar horario y nivel.
          </motion.p>

          <motion.form
            onSubmit={onSubmit}
            className="mt-8 space-y-4"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
          >
            <div>
              <label className="block text-sm font-medium text-gray-700">Nombre</label>
              <input required name="name" className="mt-1 w-full rounded-xl border border-black/10 px-4 py-2 focus:ring-2 focus:ring-emerald-500 outline-none" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input required type="email" name="email" className="mt-1 w-full rounded-xl border border-black/10 px-4 py-2 focus:ring-2 focus:ring-emerald-500 outline-none" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Nivel</label>
              <select name="level" className="mt-1 w-full rounded-xl border border-black/10 px-4 py-2 bg-white">
                <option>Iniciación</option>
                <option>Intermedio</option>
                <option>Avanzado</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Mensaje</label>
              <textarea name="message" rows="4" className="mt-1 w-full rounded-xl border border-black/10 px-4 py-2"></textarea>
            </div>
            <button className="inline-flex items-center rounded-full bg-emerald-600 text-white px-6 py-3 font-semibold shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all">
              {status === 'enviando' ? 'Enviando...' : 'Enviar'}
            </button>
            {status === 'enviado' && <p className="text-emerald-700">¡Gracias! Te contactaremos muy pronto.</p>}
            {status === 'error' && <p className="text-red-600">Hubo un error. Intenta otra vez.</p>}
          </motion.form>
        </div>

        <motion.div
          className="relative rounded-2xl overflow-hidden border border-black/10 shadow-sm p-6 bg-gradient-to-br from-emerald-50 to-white"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          <h3 className="font-bold">Instalaciones</h3>
          <p className="mt-2 text-gray-600 text-sm">Pistas cubiertas y al aire libre, tienda y zona de descanso.</p>
          <img src="https://images.unsplash.com/photo-1547327178-1d9499b9c1b9?q=80&w=1600&auto=format&fit=crop" className="mt-4 rounded-xl object-cover h-64 w-full" alt="pistas" />
        </motion.div>
      </div>
    </section>
  )
}
