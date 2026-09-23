"use client"

import { useEffect, useState } from 'react'
import Image from 'next/image'
import styles from './About.module.css'

const campaignImages = [
  { src: '/c1.jpg', alt: 'Patorex successful campaign example 1', label: 'Launch Campaign' },
  { src: '/c2.jpg', alt: 'Patorex successful campaign example 2', label: 'Growth Campaign' },
  { src: '/c3.jpg', alt: 'Patorex successful campaign example 3', label: 'Brand Campaign' },
]

export default function About() {
  const [activeSlide, setActiveSlide] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide(prev => (prev + 1) % campaignImages.length)
    }, 3500)

    return () => clearInterval(interval)
  }, [])

  return (
    <section id="about" className={styles.aboutSection}>
      <div className={styles.about}>
        {/* LEFT - image with decorative blobs */}
        <div className={styles.imageCol}>
          <span className={styles.blobPurple} aria-hidden="true" />
          <span className={styles.blobOrange} aria-hidden="true" />
          <Image
            src="/Pic1.jpeg"
            alt="Patorex team at work"
            fill
            className={styles.photo}
            sizes="(max-width: 900px) 100vw, 50vw"
            quality={95}
            priority
          />
        </div>

        {/* RIGHT - light panel */}
        <div className={styles.textCol}>
          <h2 className={styles.title}>
            About<br />Patorex
          </h2>
          <span className={styles.titleAccent} aria-hidden="true" />
          <p className={styles.body}>
            In a world saturated with noise and vanity metrics, Patorex &amp; Associates is the revenue signal. We are a premier revenue infrastructure and growth consultancy dedicated to amplifying the profitability of bold businesses and visionary brands. Founded on the principle that strategy, accounting discipline, and creative execution must coexist, we bridge the gap between financial intelligence and marketing performance.
          </p>
          <p className={styles.body}>
            Most agencies stop at likes, clicks, and impressions. We tie your marketing metrics directly to gross margins, Customer Acquisition Cost (CAC), Customer Lifetime Value (LTV), and bottom-line cash flow. Built on professional financial and audit expertise, we do not just run ads—we engineer predictable revenue systems that protect cash flow and scale market share.
          </p>
          <p className={styles.bodyClosing}>
            We are Patorex &amp; Associates—Engineered for Measurable ROI.
          </p>
          <div className={styles.emailContainer}>
            <span className={styles.emailLabel}>Official Contact Email:</span>
            <a href="mailto:officialpatorex@gmail.com" className={styles.emailLink}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="18" height="18">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
              officialpatorex@gmail.com
            </a>
          </div>
          <a href="#contact" className={styles.ctaBtn}>
            BOOK A CONSULTATION
          </a>
        </div>
      </div>

      <div className={styles.campaignStrip}>
        <div className={styles.campaignHead}>
          <h3 className={styles.campaignTitle}>Successful Campaigns</h3>
          <p className={styles.campaignSub}>Mini showcase of Patorex client wins</p>
        </div>

        <div className={styles.carouselCard}>
          {campaignImages.map((image, index) => (
            <article
              key={image.src}
              className={`${styles.slide} ${index === activeSlide ? styles.slideActive : ''}`}
              aria-hidden={index !== activeSlide}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className={styles.slideImage}
                sizes="(max-width: 900px) 100vw, 720px"
                quality={95}
              />
              <div className={styles.slideOverlay} />
              <div className={styles.slideLabel}>{image.label}</div>
            </article>
          ))}

          <div className={styles.slideDots}>
            {campaignImages.map((image, index) => (
              <button
                key={image.src + '-dot'}
                type="button"
                onClick={() => setActiveSlide(index)}
                className={`${styles.dot} ${index === activeSlide ? styles.dotActive : ''}`}
                aria-label={`Show campaign ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
