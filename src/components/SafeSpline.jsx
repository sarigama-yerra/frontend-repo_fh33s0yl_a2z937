import Spline from '@splinetool/react-spline'

export default function SafeSpline({ scene, className }) {
  if (!scene) return null

  const isProdHost = scene.includes('prod.spline.design')
  const blocked = isProdHost

  if (blocked) {
    return (
      <div className={`flex h-full w-full items-center justify-center bg-emerald-50 ${className || ''}`}>
        <div className="text-center px-6">
          <div className="text-3xl">🎾</div>
          <p className="mt-3 font-semibold">No se pudo cargar la escena 3D</p>
          <p className="text-sm text-gray-600">El host bloquea el acceso (403). Te muestro un fallback. Pásame otra URL pública de Spline y la actualizo.</p>
        </div>
      </div>
    )
  }

  return <Spline scene={scene} className={className} />
}
