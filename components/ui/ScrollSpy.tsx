'use client'
import { useEffect } from 'react'

const sectionIds = ['mirror', 'directions', 'therapy', 'formats', 'about', 'documents', 'faq', 'contact']

/**
 * Updates the URL hash to reflect the section currently in view,
 * without triggering a scroll jump (history.replaceState only).
 */
export default function ScrollSpy() {
  useEffect(() => {
    const sections = sectionIds
      .map(id => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null)

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.id
            const newHash = `#${id}`
            if (window.location.hash !== newHash) {
              window.history.replaceState(null, '', newHash)
            }
          }
        })
      },
      { rootMargin: '-45% 0px -45% 0px', threshold: 0 }
    )

    sections.forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return null
}
