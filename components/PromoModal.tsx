'use client'

import { useEffect, useState } from 'react'
import styles from './PromoModal.module.css'

export default function PromoModal() {
  const [isOpen, setIsOpen] = useState(false)
  const [timeLeft, setTimeLeft] = useState(8)

  useEffect(() => {
    // Show promo modal shortly after opening preloader finishes (6.6 seconds)
    const showTimer = setTimeout(() => {
      setIsOpen(true)
    }, 6600)

    return () => clearTimeout(showTimer)
  }, [])

  useEffect(() => {
    if (!isOpen) return

    // 8-second countdown timer
    const countdown = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(countdown)
          setIsOpen(false)
          return 0
        }
        return prev - 1
      })
    }, 1000)

    return () => clearInterval(countdown)
  }, [isOpen])

  if (!isOpen) return null

  const handleClaimPromo = () => {
    const message = encodeURIComponent(
      'Hello Patorex, I want to claim the 25% Discount Promo on Web3 Services and Project Management.'
    )
    window.open(`https://wa.me/15813364553?text=${message}`, '_blank')
    setIsOpen(false)
  }

  return (
    <div className={styles.backdrop} onClick={() => setIsOpen(false)}>
      <div className={styles.modalCard} onClick={(e) => e.stopPropagation()}>
        {/* Countdown Badge */}
        <div className={styles.timerBadge}>
          <span className={styles.timerDot} />
          Auto-closing in <strong>{timeLeft}s</strong>
        </div>

        {/* Close Button */}
        <button
          type="button"
          className={styles.closeBtn}
          onClick={() => setIsOpen(false)}
          aria-label="Close promo offer"
        >
          ✕
        </button>

        <div className={styles.content}>
          <div className={styles.promoTag}>⚡ LIMITED TIME PROMO OFFER</div>
          
          <h2 className={styles.title}>
            Get <span className={styles.discountText}>25% OFF</span> Web3 &amp; Project Management Gigs!
          </h2>

          <p className={styles.subtitle}>
            Accelerate your blockchain protocol, dApp launch, or technical project delivery with Patorex&apos;s specialized PMO &amp; Web3 growth engine.
          </p>

          <div className={styles.benefitsBox}>
            <ul className={styles.benefitList}>
              <li>
                <span className={styles.check}>✓</span> Tokenomics &amp; Go-To-Market Execution
              </li>
              <li>
                <span className={styles.check}>✓</span> Dedicated Blockchain PMO &amp; Milestone Oversight
              </li>
              <li>
                <span className={styles.check}>✓</span> Discord, Telegram &amp; Community Growth Systems
              </li>
            </ul>
          </div>

          <div className={styles.ctaRow}>
            <button
              type="button"
              onClick={handleClaimPromo}
              className={styles.claimBtn}
            >
              Claim 25% Promo Discount
            </button>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className={styles.dismissBtn}
            >
              Dismiss
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
