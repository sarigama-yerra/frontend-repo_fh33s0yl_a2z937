import { useRef } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

export default function Tilt({ children, maxTilt = 12, scale = 1.02, className = '' }) {
  const ref = useRef(null)
  const rotateX = useMotionValue(0)
  const rotateY = useMotionValue(0)
  const sRotateX = useSpring(rotateX, { stiffness: 200, damping: 20 })
  const sRotateY = useSpring(rotateY, { stiffness: 200, damping: 20 })

  const handleMouseMove = (e) => {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const px = (e.clientX - rect.left) / rect.width
    const py = (e.clientY - rect.top) / rect.height
    const rX = (py - 0.5) * -2 * maxTilt
    const rY = (px - 0.5) * 2 * maxTilt
    rotateX.set(rX)
    rotateY.set(rY)
  }

  const handleLeave = () => {
    rotateX.set(0)
    rotateY.set(0)
  }

  return (
    <motion.div
      ref={ref}
      className={className}
      style={{ perspective: 1000 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleLeave}
    >
      <motion.div
        style={{ rotateX: sRotateX, rotateY: sRotateY }}
        whileHover={{ scale }}
        transition={{ type: 'spring', stiffness: 200, damping: 20 }}
      >
        {children}
      </motion.div>
    </motion.div>
  )
}
