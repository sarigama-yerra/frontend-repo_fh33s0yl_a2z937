import { useEffect } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

export default function CursorGlow(){
  const x = useMotionValue(-200)
  const y = useMotionValue(-200)
  const sx = useSpring(x, { stiffness: 200, damping: 30 })
  const sy = useSpring(y, { stiffness: 200, damping: 30 })

  useEffect(() => {
    const handle = (e) => {
      x.set(e.clientX)
      y.set(e.clientY)
    }
    window.addEventListener('mousemove', handle)
    return () => window.removeEventListener('mousemove', handle)
  }, [x, y])

  return (
    <motion.div
      className="pointer-events-none fixed inset-0 z-10"
      aria-hidden
    >
      <motion.div
        className="h-64 w-64 rounded-full"
        style={{
          x: sx,
          y: sy,
          translateX: '-50%',
          translateY: '-50%',
          background: 'radial-gradient(150px 150px at center, rgba(163, 230, 53, 0.18), rgba(16, 185, 129, 0.10) 40%, rgba(16,185,129,0) 70%)',
          filter: 'blur(12px)'
        }}
      />
    </motion.div>
  )
}
