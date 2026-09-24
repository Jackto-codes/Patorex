'use client'

import { useEffect, useState } from 'react'
import styles from './Preloader.module.css'

export default function Preloader() {
  const [stage, setStage] = useState<'results' | 'resonate' | 'exiting' | 'done'>('results')

  useEffect(() => {
    // Lock body scroll during splash animation
    document.body.style.overflow = 'hidden'

    const timer1 = setTimeout(() => {
      setStage('resonate')
    }, 1800)

    const timer2 = setTimeout(() => {
      setStage('exiting')
    }, 5400)

    const timer3 = setTimeout(() => {
      setStage('done')
      document.body.style.overflow = ''
    }, 6000)

    return () => {
      clearTimeout(timer1)
      clearTimeout(timer2)
      clearTimeout(timer3)
      document.body.style.overflow = ''
    }
  }, [])

  if (stage === 'done') return null

  return (
    <div
      className={`${styles.preloaderOverlay} ${stage === 'exiting' ? styles.fadeOut : ''}`}
      aria-label="Loading Patorex"
      role="dialog"
      aria-hidden={stage === 'exiting'}
    >
      {/* Background Animated Particles & Soundwave Rings */}
      <div className={styles.ambientGlow} aria-hidden="true" />
      <div className={styles.resonanceRings} aria-hidden="true">
        <div className={styles.ring1} />
        <div className={styles.ring2} />
        <div className={styles.ring3} />
      </div>

      <div className={styles.contentBox}>
        {/* Logo / Brand Symbol Top */}
        <div className={styles.brandBadge}>
          <span className={styles.brandDot} />
          <span className={styles.brandName}>PATOREX</span>
        </div>

        {/* Dynamic Title Reveal */}
        <h1 className={styles.animatedTitle}>
          <span className={`${styles.word} ${styles.wordResults}`}>
            Results
          </span>
          <span
            className={`${styles.word} ${styles.wordResonate} ${
              stage === 'resonate' || stage === 'exiting' ? styles.visibleResonate : ''
            }`}
          >
            That resonate
          </span>
        </h1>

        {/* Progress Bar at Bottom */}
        <div className={styles.progressBarTrack}>
          <div className={`${styles.progressBarFill} ${stage === 'exiting' ? styles.fillComplete : ''}`} />
        </div>
      </div>
    </div>
  )
}
