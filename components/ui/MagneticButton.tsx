'use client'
import { useRef, useState, MouseEvent, ReactNode } from 'react'
import { motion } from 'framer-motion'

/**
 * A button that subtly follows the cursor when hovered — a small,
 * tactile detail that signals "this was crafted", common in
 * contemporary (2026) interface design.
 */
export default function MagneticButton({
  href,
  children,
  className,
  cursorLabel,
}: {
  href: string
  children: ReactNode
  className?: string
  cursorLabel?: string
}) {
  const ref = useRef<HTMLAnchorElement>(null)
  const [pos, setPos] = useState({ x: 0, y: 0 })

  const handleMouseMove = (e: MouseEvent<HTMLAnchorElement>) => {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const x = e.clientX - rect.left - rect.width / 2
    const y = e.clientY - rect.top - rect.height / 2
    setPos({ x: x * 0.25, y: y * 0.35 })
  }

  const reset = () => setPos({ x: 0, y: 0 })

  return (
    <motion.a
      ref={ref}
      href={href}
      className={className}
      data-cursor={cursorLabel}
      onMouseMove={handleMouseMove}
      onMouseLeave={reset}
      animate={{ x: pos.x, y: pos.y }}
      transition={{ type: 'spring', stiffness: 150, damping: 12, mass: 0.3 }}
      style={{ display: 'inline-block' }}
    >
      {children}
    </motion.a>
  )
}
