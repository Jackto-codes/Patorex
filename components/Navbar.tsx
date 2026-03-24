'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import styles from './Navbar.module.css'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
      setMobileMenuOpen(false)
    }
  }

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.topBar}>
        <div className={styles.topBarContent}>
          <div className={styles.socialLinks}>
            <a
              href="https://www.facebook.com/officialpatorex"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit our Facebook page"
              className={styles.socialLink}
            >
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M13.5 22v-8h2.7l.4-3h-3.1V9.1c0-.9.3-1.6 1.6-1.6H16.8V4.8c-.3 0-1.4-.1-2.7-.1-2.6 0-4.4 1.6-4.4 4.6V11H7v3h2.7v8h3.8Z" />
              </svg>
            </a>
            <a
              href="https://www.instagram.com/pato.rex997"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit our Instagram page"
              className={styles.socialLink}
            >
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4c0 3.2-2.6 5.8-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8C2 4.6 4.6 2 7.8 2Zm8.2 2H8c-2.2 0-4 1.8-4 4v8c0 2.2 1.8 4 4 4h8c2.2 0 4-1.8 4-4V8c0-2.2-1.8-4-4-4Zm-4 3.7A5.3 5.3 0 1 1 6.7 13 5.3 5.3 0 0 1 12 7.7Zm0 2A3.3 3.3 0 1 0 15.3 13 3.3 3.3 0 0 0 12 9.7Zm5.5-3.5a1.2 1.2 0 1 1-1.2 1.2 1.2 1.2 0 0 1 1.2-1.2Z" />
              </svg>
            </a>
            <a
              href="https://www.youtube.com/@patorexassociate"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit our YouTube channel"
              className={styles.socialLink}
            >
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 0 0 .5 6.2C0 8.1 0 12 0 12s0 3.9.5 5.8a3 3 0 0 0 2.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1c.5-1.9.5-5.8.5-5.8s0-3.9-.5-5.8ZM9.5 15.6V8.4L15.8 12l-6.3 3.6Z" />
              </svg>
            </a>
            <a
              href="https://www.x.com/@Patorex97"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit our X page"
              className={styles.socialLink}
            >
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M18.9 3H22l-6.8 7.8L23.2 21h-6.3l-5-6.6L6 21H2.8l7.3-8.3L1.1 3h6.5l4.5 6 6.8-6Zm-1.1 16h1.7L6.6 4.9H4.8L17.8 19Z" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      <div className={styles.container}>
        <div className={styles.logo} onClick={() => scrollToSection('hero')}>
          <div className={styles.logoIcon}>
            <span className={styles.iconP}>P</span>
          </div>
          <span className={styles.logoText}>Patorex</span>
        </div>

        <button 
          className={styles.mobileToggle}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <span className={mobileMenuOpen ? styles.open : ''}></span>
          <span className={mobileMenuOpen ? styles.open : ''}></span>
          <span className={mobileMenuOpen ? styles.open : ''}></span>
        </button>

        <ul className={`${styles.navLinks} ${mobileMenuOpen ? styles.mobileOpen : ''}`}>
          <li><button onClick={() => scrollToSection('about')}>About us</button></li>
          <li><button onClick={() => scrollToSection('contact')}>Contact us</button></li>
          <li><button onClick={() => scrollToSection('works')}>Our works</button></li>
          <li><button onClick={() => scrollToSection('services')}>What we do</button></li>
          <li className={styles.authButtons}>
            <button onClick={() => scrollToSection('contact')} className={styles.ctaButton}>
              Get Started
            </button>
          </li>
        </ul>
      </div>
    </nav>
  )
}
