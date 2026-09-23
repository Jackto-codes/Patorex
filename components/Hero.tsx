'use client'

import styles from './Hero.module.css'

export default function Hero() {
  return (
    <section id="hero" className={styles.hero}>
      <video 
        className={styles.videoBackground}
        autoPlay 
        loop 
        muted 
        playsInline
      >
        <source src="/vid.mp4" type="video/mp4" />
      </video>
      <div className={styles.overlay}></div>
      <div className={styles.container}>
        <div className={styles.content}>
          <h1 className={styles.title}>
            Revenue Infrastructure
            <span className={styles.highlight}>& Growth Partner</span>
          </h1>
          
          <p className={styles.description}>
            Business Growth, Revenue Infrastructure & Marketing Intelligence. 
          </p>
          
          <div className={styles.cta}>
            <button 
              className={styles.primaryBtn}
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              aria-label="Schedule a consultation with our team"
            >
              Book a Consultation
            </button>
          </div>

          <p className={styles.subtext}>
More leads, higher conversions, and protected cash flow—no matter the economic climate.          </p>
        </div>
      </div>
    </section>
  )
}
