import { useRef } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

export default function Magnetic({ children, strength = 30, className = '' }) {
  const ref = useRef(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const sx = useSpring(x, { stiffness: 300, damping: 20 })
  const sy = useSpring(y, { stiffness: 300, damping: 20 })

  const handleMove = (e) => {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const relX = e.clientX - (rect.left + rect.width / 2)
    const relY = e.clientY - (rect.top + rect.height / 2)
    const dist = Math.hypot(relX, relY)
    const maxDist = Math.max(rect.width, rect.height)
    const pull = Math.max(0, 1 - dist / maxDist)
    x.set((relX / maxDist) * strength * pull)
    y.set((relY / maxDist) * strength * pull)
  }

  const handleLeave = () => {
    x.set(0); y.set(0)
  }

  return (
    <motion.div
      ref={ref}
      className={className}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={{ perspective: 1000 }}
    >
      <motion.div style={{ x: sx, y: sy }}>
        {children}
      </motion.div>
    </motion.div>
  )
}
