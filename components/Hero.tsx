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
            Results
            <span className={styles.highlight}>That resonate</span>
          </h1>
          
          <p className={styles.description}>
            The simplest way to elevate your brand, engage audiences, and grow your business. 
            No spreadsheets. No complexity. Just results.
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
            Free consultation • Expert guidance • Tailored solutions
          </p>
        </div>
      </div>
    </section>
  )
}
