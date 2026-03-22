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
            In a world saturated with noise, Patorex &amp; Associates is the signal. We are a
            full-service marketing agency dedicated to amplifying the voices of bold
            businesses and visionary brands. Founded on the principle that strategy and
            creativity must coexist, we bridge the gap between data-driven insight and
            compelling storytelling.
          </p>
          <p className={styles.body}>
            We do not just create campaigns; we engineer brand experiences. Whether it is
            dominating digital landscapes, crafting unforgettable visual identities, or
            converting clicks into loyal customers, our approach is rooted in precision and
            powered by passion. At Patorex &amp; Associates, we view ourselves not just as an
            agency, but as a growth partner invested in your success and obsessed with your
            results.
          </p>
          <p className={styles.bodyClosing}>
            We are Patorex &amp; Associates.
          </p>
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
