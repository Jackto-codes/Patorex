'use client'

import { FormEvent, useState } from 'react'
import styles from './Contact.module.css'

const socialLinks = [
  {
    name: 'X (Twitter)',
    handle: '@Patorexagency',
    url: 'https://x.com/Patorexagency',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.747l7.73-8.835L1.254 2.25H8.08l4.253 5.622 5.91-5.622Zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77Z" />
      </svg>
    ),
  },
  {
    name: 'Instagram',
    handle: '@Patorexagency',
    url: 'https://instagram.com/Patorexagency/',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069ZM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0Zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324ZM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8Zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881Z" />
      </svg>
    ),
  },
  {
    name: 'Facebook',
    handle: 'officialpatorex',
    url: 'https://www.facebook.com/officialpatorex',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22">
        <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.41c0-3.025 1.791-4.697 4.533-4.697 1.312 0 2.686.236 2.686.236v2.97h-1.514c-1.491 0-1.956.93-1.956 1.886v2.267h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073Z" />
      </svg>
    ),
  },
  {
    name: 'YouTube',
    handle: '@patorexassociate',
    url: 'https://www.youtube.com/@patorexassociate',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814ZM9.545 15.568V8.432L15.818 12l-6.273 3.568Z" />
      </svg>
    ),
  },
]

const helpPoints = [
  'Grow awareness for your business',
  'Generate leads and guide them to become clients',
  'Increase the return on your marketing investment',
  'Utilise your website as a Sales tool',
  'Build a strategic marketing framework that will set your organisation up for long-term success',
  'Tailor your marketing efforts to resonate with your ideal audience',
  'Attract more organic web traffic and drive conversions at every stage of Client acquisition program',
  'Nurture and engage prospects to move from visitors to clients',
  'Arm your team with the resources they need to win more deals and increase customer satisfaction',
]

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    if (isSubmitting) {
      return
    }

    setIsSubmitting(true)

    const form = event.currentTarget
    const formData = new FormData(form)
    const whatsappMessage = encodeURIComponent('Hello Patorex, I just submitted the consultation form and i would like to make more enquires')
    const whatsappUrl = `https://wa.me/15813364553?text=${whatsappMessage}`

    try {
      await fetch(form.action, {
        method: form.method,
        body: formData,
        headers: {
          Accept: 'application/json',
        },
      })
    } catch {
      // Ignore network errors so the redirect still happens
    } finally {
      form.reset()
      setIsSubmitting(false)
      window.location.href = whatsappUrl
    }
  }

  return (
    <section id="contact" className={styles.contact}>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.sectionLabel}>Get in Touch</div>
          <h2 className={styles.title}>Ready to Transform Your Marketing?</h2>
          <p className={styles.subtitle}>
            Join hundreds of businesses that trust Patorex. Start your free consultation today.
          </p>
        </div>

        <div className={styles.content}>
          {/* LEFT SIDE */}
          <div className={styles.leftCol}>
            <h3 className={styles.helpTitle}>We can help you:</h3>
            <ul className={styles.helpList}>
              {helpPoints.map((point, i) => (
                <li key={i} className={styles.helpItem}>
                  <span className={styles.helpBullet}>▶</span>
                  {point}
                </li>
              ))}
            </ul>
            <p className={styles.helpCta}>
              If you are looking to achieve any of the objectives listed above, then book a free consultation and let&apos;s x-ray your business together.
            </p>

            <a
              href="https://wa.me/15813364553"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.whatsappBtn}
            >
              <svg className={styles.whatsappIcon} viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.457L0 24zm6.59-4.846c1.6.95 3.588 1.455 5.416 1.456 5.4 0 9.794-4.394 9.797-9.794.002-2.617-1.015-5.078-2.867-6.93C17.06 2.031 14.603 1.014 12.003 1.014c-5.402 0-9.797 4.394-9.8 9.796-.001 1.942.508 3.841 1.472 5.51l-.965 3.525 3.616-.95c1.62.88 3.428 1.34 5.32 1.34zm10.963-7.447c-.3-.15-1.77-.874-2.046-.975-.276-.101-.476-.15-.676.15-.2.3-.775.975-.95 1.175-.175.2-.35.225-.65.075-.3-.15-1.265-.467-2.41-1.485-.89-.795-1.49-1.77-1.665-2.07-.175-.3-.018-.462.13-.61.135-.133.3-.35.45-.525.15-.175.2-.3.3-.5.1-.2.05-.375-.025-.525-.075-.15-.676-1.63-1.012-2.18-.328-.79-.66-.68-.905-.69-.23-.01-.495-.012-.76-.012-.267 0-.7.1-1.067.497-.367.397-1.4 1.368-1.4 3.336 0 1.968 1.433 3.868 1.633 4.135.2.266 2.82 4.307 6.83 6.04 2.124.917 3.01 1.066 3.992.92.57-.085 1.77-.724 2.02-1.425.25-.7.25-1.3.175-1.425-.075-.125-.275-.2-.575-.35z" />
              </svg>
              Contact us on WhatsApp
            </a>

            <div className={styles.socialSection}>
              <h4 className={styles.socialTitle}>Follow Us</h4>
              <div className={styles.socialLinks}>
                {socialLinks.map((s) => (
                  <a
                    key={s.name}
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.socialCard}
                    aria-label={s.name}
                  >
                    <span className={styles.socialIcon}>{s.icon}</span>
                    <span className={styles.socialInfo}>
                      <span className={styles.socialName}>{s.name}</span>
                      <span className={styles.socialHandle}>{s.handle}</span>
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT SIDE — Consultation Form */}
          <div className={styles.formWrapper}>
            <div className={styles.formHeader}>
              <h3 className={styles.formTitle}>Book a Free Consultation</h3>
              <p className={styles.formSubtitle}>Tell us about your business and we&apos;ll prepare a tailored strategy session.</p>
            </div>

            <form
              className={styles.form}
              action="https://formspree.io/f/xgonbpgp"
              method="POST"
              onSubmit={handleSubmit}
            >
              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label htmlFor="firstName">First Name</label>
                  <input type="text" id="firstName" name="firstName" required placeholder="John" />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="lastName">Last Name</label>
                  <input type="text" id="lastName" name="lastName" required placeholder="Doe" />
                </div>
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" required placeholder="john@example.com" />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="phone">
                  Phone Number<span className={styles.required}>*</span>
                </label>
                <input type="tel" id="phone" name="phone" required placeholder="+1 (555) 000-0000" />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="jobTitle">Job Title</label>
                <input type="text" id="jobTitle" name="jobTitle" placeholder="Marketing Manager" />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="company">Company Name</label>
                <input type="text" id="company" name="company" placeholder="Your Company Inc." />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="website">Website URL</label>
                <input type="url" id="website" name="website" placeholder="https://yourwebsite.com" />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="helpWith">What do you need help with?</label>
                <p className={styles.fieldHint}>Share your marketing expectations with us so we can better prepare for the meeting.</p>
                <textarea id="helpWith" name="helpWith" rows={4} placeholder="Describe your goals..." />
              </div>

              <button type="submit" className={styles.submitBtn} disabled={isSubmitting}>
                {isSubmitting ? 'Submitting...' : 'Submit'}
              </button>
            </form>
          </div>
        </div>
      </div>

      <footer className={styles.footer}>
        <div className={styles.footerContainer}>
          <div className={styles.footerBrand}>
            <div className={styles.footerLogo}>PATOREX</div>
            <p className={styles.footerTagline}>
              Smart marketing solutions designed to help businesses grow and thrive.
              Built with ❤️ for ambitious brands.
            </p>
          </div>

          <div className={styles.footerLinks}>
            <div className={styles.footerColumn}>
              <h4>Product</h4>
              <a href="#services">Features</a>
              <a href="#works">How it Works</a>
            </div>

            <div className={styles.footerColumn}>
              <h4>Company</h4>
              <a href="#about">About</a>
              <a href="#testimonials">Testimonials</a>
              <a href="#contact">Contact</a>
            </div>

            <div className={styles.footerColumn}>
              <h4>Resources</h4>
              <a href="#faq">FAQ</a>
              <a href="#works">Successful Campaigns</a>
              <a href="#contact">Support</a>
            </div>
          </div>
        </div>

        <div className={styles.footerBottom}>
          <p>© 2026 Patorex & Associates. All rights reserved.</p>
        </div>
      </footer>
    </section>
  )
}
