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
