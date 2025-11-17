import { motion, useScroll, useTransform } from 'framer-motion'

export default function Parallax({ children, speed = 0.2, className = '' }){
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 1000], [0, -1000 * speed])

  return (
    <motion.div style={{ y }} className={className}>
      {children}
    </motion.div>
  )
}
