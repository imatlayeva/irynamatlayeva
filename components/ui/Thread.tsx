'use client'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import styles from './Thread.module.css'

/**
 * The signature element: an organic vertical "thread of contact"
 * that draws itself in as the reader scrolls past it — appearing,
 * sometimes breaking, sometimes reappearing. A quiet metaphor for
 * staying in contact with yourself.
 */
export default function Thread() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 90%', 'end 60%'],
  })
  const height = useTransform(scrollYProgress, [0, 1], ['0%', '100%'])
  const opacity = useTransform(scrollYProgress, [0, 0.15, 0.85, 1], [0, 0.5, 0.5, 0])

  return (
    <div ref={ref} className={styles.wrap} aria-hidden="true">
      <motion.div className={styles.line} style={{ height, opacity }} />
    </div>
  )
}
