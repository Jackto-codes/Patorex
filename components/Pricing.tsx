'use client'

import { useEffect, useRef, useState } from 'react'
import styles from './Pricing.module.css'

export default function Pricing() {
  const fullTitle = "Let's Build Something Great Together!"
  const fullSubtitle =
    "Have a project in mind or need a professional Consultaion in Nigeria? Reach out today and let's create a strategy that drives results."

  const [typedTitle, setTypedTitle] = useState('')
  const [typedSubtitle, setTypedSubtitle] = useState('')
  const [hasStarted, setHasStarted] = useState(false)
  const sectionRef = useRef<HTMLElement | null>(null)

  useEffect(() => {
    const section = sectionRef.current
    if (!section || hasStarted) {
      return
    }

    const observer = new IntersectionObserver(
      entries => {
        const entry = entries[0]
        if (entry.isIntersecting) {
          setHasStarted(true)
          observer.disconnect()
        }
      },
      {
        root: null,
        rootMargin: '180px 0px -8% 0px',
        threshold: 0.1,
      }
    )

    observer.observe(section)

    return () => {
      observer.disconnect()
    }
  }, [hasStarted])

  useEffect(() => {
    if (!hasStarted) {
      return
    }

    const timers: number[] = []
    const titleWords = fullTitle.split(' ')
    const subtitleWords = fullSubtitle.split(' ')

    setTypedTitle('')
    setTypedSubtitle('')

    titleWords.forEach((_, index) => {
      const timer = window.setTimeout(() => {
        setTypedTitle(titleWords.slice(0, index + 1).join(' '))
      }, 240 * (index + 1))
      timers.push(timer)
    })

    const subtitleStart = 240 * titleWords.length + 520

    subtitleWords.forEach((_, index) => {
      const timer = window.setTimeout(() => {
        setTypedSubtitle(subtitleWords.slice(0, index + 1).join(' '))
      }, subtitleStart + 150 * (index + 1))
      timers.push(timer)
    })

    return () => {
      timers.forEach(timer => window.clearTimeout(timer))
    }
  }, [fullSubtitle, fullTitle, hasStarted])

  const revealClass = hasStarted ? styles.fadeIn : styles.preReveal

  return (
    <section id="pricing" className={styles.pricing} ref={sectionRef}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.copyBlock}>
            <p className={`${styles.kicker} ${revealClass}`}>New Project?</p>
            <h2 className={`${styles.title} ${revealClass} ${styles.delay1}`}>
              {typedTitle}
              {hasStarted && <span className={styles.cursor} aria-hidden="true">|</span>}
            </h2>
            <p className={`${styles.subtitle} ${revealClass} ${styles.delay2}`}>
              {typedSubtitle}
            </p>
          </div>

          <div className={`${styles.actions} ${revealClass} ${styles.delay3}`}>
            <a href="#contact" className={styles.contactBtn}>Contact Us</a>
            <div className={styles.contactNumbers}>
              <a href="tel:09022093554" className={styles.contactNumber}>09022093554</a>
              <a href="tel:09061904253" className={styles.contactNumber}>09061904253</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
