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
        <h2 className="text-3xl sm:text-4xl font-black tracking-tight">Programas y servicios</h2>
        <p className="mt-3 text-gray-600 max-w-prose">Entrenamientos diseñados para sacar tu mejor versión en pista.</p>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((it) => (
            <div key={it.title} className="group rounded-2xl border border-black/10 p-6 bg-gradient-to-br from-white to-emerald-50/30 hover:from-emerald-50/60 hover:to-white transition-all shadow-sm hover:shadow">
              <div className="text-3xl">{it.icon}</div>
              <h3 className="mt-3 font-bold text-lg">{it.title}</h3>
              <p className="mt-2 text-gray-600 text-sm">{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
