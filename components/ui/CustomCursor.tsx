'use client'
import { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'
import styles from './CustomCursor.module.css'

/**
 * A small cursor companion that expands into a contextual word
 * ("дивитись", "записатись") when hovering interactive elements —
 * a quiet, tactile signature instead of a generic pointer.
 */
export default function CustomCursor() {
  const [label, setLabel] = useState<string | null>(null)
  const [visible, setVisible] = useState(false)
  const x = useMotionValue(-100)
  const y = useMotionValue(-100)
  const springX = useSpring(x, { stiffness: 500, damping: 40, mass: 0.4 })
  const springY = useSpring(y, { stiffness: 500, damping: 40, mass: 0.4 })

  useEffect(() => {
    const isTouch = window.matchMedia('(pointer: coarse)').matches
    if (isTouch) return

    const move = (e: MouseEvent) => {
      x.set(e.clientX)
      y.set(e.clientY)
      const el = (e.target as HTMLElement)?.closest('[data-cursor]')
      if (el) {
        setLabel(el.getAttribute('data-cursor'))
        setVisible(true)
      } else {
        setVisible(false)
      }
    }
    window.addEventListener('mousemove', move)
    return () => window.removeEventListener('mousemove', move)
  }, [x, y])

  return (
    <motion.div
      className={styles.cursor}
      style={{ x: springX, y: springY, opacity: visible ? 1 : 0, scale: visible ? 1 : 0.5 }}
    >
      {label}
    </motion.div>
  )
}
