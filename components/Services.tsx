'use client'

import { useState } from 'react'
import styles from './Services.module.css'

type ServiceItem = {
  icon: string
  title: string
  subtitle: string
  details: string[]
  bullets?: string[]
  featured?: boolean
  featuredLabel?: string
}

function ServiceIcon({ icon }: { icon: string }) {
  const commonProps = {
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: '2.2',
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
    'aria-hidden': true,
  }

  switch (icon) {
    case 'growth':
      return (
        <svg {...commonProps}>
          <path d="M4 19h16" />
          <path d="M6 15l4-4 3 3 5-6" />
          <path d="M15 8h3v3" />
        </svg>
      )
    case 'leads':
      return (
        <svg {...commonProps}>
          <circle cx="8" cy="8" r="3" />
          <circle cx="16" cy="7" r="2.5" />
          <path d="M3.5 19a4.5 4.5 0 0 1 9 0" />
          <path d="M13 18a3.5 3.5 0 0 1 7 0" />
          <path d="M12 12l2.5 2.5" />
        </svg>
      )
    case 'seo':
      return (
        <svg {...commonProps}>
          <circle cx="10.5" cy="10.5" r="5.5" />
          <path d="M15 15l4 4" />
          <path d="M8.5 10.5h4" />
          <path d="M10.5 8.5v4" />
        </svg>
      )
    case 'content':
      return (
        <svg {...commonProps}>
          <rect x="5" y="4" width="14" height="16" rx="2" />
          <path d="M8 8h8" />
          <path d="M8 12h8" />
          <path d="M8 16h5" />
        </svg>
      )
    case 'email':
      return (
        <svg {...commonProps}>
          <rect x="3" y="6" width="18" height="12" rx="2" />
          <path d="M4 8l8 6 8-6" />
        </svg>
      )
    case 'mobile':
      return (
        <svg {...commonProps}>
          <rect x="8" y="3" width="8" height="18" rx="2" />
          <path d="M10 6h4" />
          <circle cx="12" cy="17" r="1" />
        </svg>
      )
    case 'brand':
      return (
        <svg {...commonProps}>
          <path d="M12 3l7 4v5c0 4.2-2.8 7.6-7 9-4.2-1.4-7-4.8-7-9V7l7-4Z" />
          <path d="m9.5 12 1.7 1.7 3.3-3.4" />
        </svg>
      )
    case 'professional':
      return (
        <svg {...commonProps}>
          <path d="M4 20h16" />
          <path d="M6 20V8l6-4 6 4v12" />
          <path d="M9 12h.01" />
          <path d="M12 12h.01" />
          <path d="M15 12h.01" />
        </svg>
      )
    default:
      return null
  }
}

export default function Services() {
  const [openCard, setOpenCard] = useState<number | null>(0)

  const services: ServiceItem[] = [
    {
      icon: 'growth',
      title: 'Billboard Advertising',
      subtitle:
        'Put your brand in front of thousands daily with strategic billboard placements that build visibility, trust and top-of-mind awareness in high-traffic locations.',
      details: [
        'We plan billboard campaigns around your audience movement patterns, selecting premium routes and hotspots where your message gets maximum exposure.',
        'From concept and copy to design adaptation, print specifications and placement coordination, we handle end-to-end execution for a bold outdoor presence.',
        'You get clear campaign timelines, placement proof, and performance-focused recommendations so every board supports your brand and sales goals.',
      ],
    },
    {
      icon: 'leads',
      title: 'Web3 Solutions',
      featured: true,
      featuredLabel: 'New Service',
      subtitle:
        'Launch future-ready digital products with Web3 strategy, blockchain integration and user experiences designed for trust, transparency and scalable growth.',
      details: [
        'We help brands and startups translate Web3 ideas into practical products, from token utility planning and wallet-enabled experiences to community-led growth models.',
        'Our team supports your roadmap across architecture guidance, smart contract collaboration, user journey design and go-to-market communication for technical and non-technical audiences.',
        'Whether you are building an NFT platform, DAO ecosystem or blockchain-powered service, we shape clear positioning and adoption strategies that reduce friction and increase confidence.',
      ],
    },
    {
      icon: 'seo',
      title: 'Search Engine Optimisation',
      subtitle:
        'There are 3.5 billion searches on Google daily. Clearly, consumers are turning more to search engines to help them take buying decisions.',
      details: [
        'Let’s help you manage your search engine optimisation projects so that your brand can feature in your prospect’s search.',
        'We use relevant keyword research tools, optimized content and analytics to make your brand visible on the web.',
        'Let’s help you get found online.',
      ],
    },
    {
      icon: 'content',
      title: 'Content Marketing',
      subtitle:
        'Content drives all digital marketing elements. And great content added to good design can drive significant sales and engagement.',
      details: [
        'Our Content Marketing effort starts with a Content Marketing Strategy, followed by well-researched keywords, content development and breath-taking designs to deliver a finished product that drives conversion.',
        'Looking to develop content to fuel your digital marketing projects?',
      ],
      bullets: [
        'E-books',
        'Whitepapers',
        'Videos',
        'Social Media Content',
        'Infographics',
        'Wikipedia Articles',
        'Case Studies',
        'Templates',
        'Research Reports',
        'Slideshare Decks',
        'Articles',
        'Checklists',
      ],
    },
    {
      icon: 'email',
      title: 'Email Marketing',
      subtitle:
        'Several research has proven that email marketing still delivers a higher return on investment than any other digital marketing medium.',
      details: [
        'We develop, design and implement different email marketing campaigns for clients in line with their marketing strategy.',
      ],
      bullets: [
        'E-letter',
        'E-zine',
        'Gauntlet email series',
        'Refresher campaigns',
        'Stand-alone email campaigns',
        'E-newsletters',
      ],
    },
    {
      icon: 'mobile',
      title: 'Mobile Marketing',
      subtitle:
        'Today’s consumers are mobile. They connect, engage and entertain themselves through their mobile devices.',
      details: [
        'Let’s help you reach your consumers through mobile marketing and develop a campaign tailored for your brand.',
      ],
      bullets: [
        'WhatsApp',
        'Targeted SMS',
        'Live Chat',
        'Mobile Apps',
        'Mobile Only Websites',
        'In-App Display Adverts',
        'Google Mobile Platform',
        'Location Geo targeting',
        'After call Summary Adverts',
      ],
    },
    {
      icon: 'brand',
      title: 'Brand Development',
      subtitle:
        'All products need to be developed into brands that give them a distinct identity in the minds of customers.',
      details: [
        'At Patorex & Associates, we help turn products, companies and people into distinguishable brands with focused strategy and execution.',
      ],
      bullets: [
        'Brand Strategy Development',
        'Brand Positioning and Key Messaging',
        'Brand Identity Guidelines and Visuals (Logo etc.)',
        'Employer Branding',
        'Marketing Plan Development',
        'Re-branding',
        'Marketing Strategy',
      ],
    },
    {
      icon: 'content',
      title: 'Content Marketing',
      subtitle:
        'Content drives all digital marketing elements, and great content paired with great design drives engagement and conversion.',
      details: [
        'We build content plans from strategy and keywords to copy, creative and design for complete marketing assets.',
      ],
      bullets: [
        'E-books',
        'Whitepapers',
        'Videos',
        'Social Media Content',
        'Infographics',
        'Wikipedia Articles',
        'Case Studies',
        'Templates',
        'Research Reports',
        'Slideshare Decks',
        'Articles',
        'Checklists',
      ],
    },
    {
      icon: 'professional',
      title: 'Professional Services Marketing',
      subtitle:
        'Firms that offer professional services cannot be promoted the same way product brands are promoted.',
      details: [
        'We have a dedicated Professional Services Marketing Team that employs an inbound marketing approach to drive growth for service firms.',
        'If you are a law firm, medical institution, consulting firm, accounting firm, engineering firm or architectural firm, let’s discuss how we can help you attract and convert prospects into clients.',
      ],
    },
  ]

  const toggleCard = (index: number) => {
    setOpenCard(prev => (prev === index ? null : index))
  }

  return (
    <section id="services" className={styles.services}>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.sectionLabel}>Features</div>
          <h2 className={styles.title}>Our Services</h2>
          <p className={styles.subtitle}>
            Built to grow your brand with strategy, creativity and measurable results
          </p>
        </div>

        <div className={styles.grid}>
          {services.map((service, index) => (
            <article
              key={service.title + index}
              className={`${styles.serviceCard} ${service.featured ? styles.featuredCard : ''}`}
            >
              {service.featured && <span className={styles.featuredTag}>{service.featuredLabel || 'New'}</span>}
              <div className={`${styles.cardGlow} ${service.featured ? styles.featuredGlow : ''}`} aria-hidden="true" />
              <div className={styles.cardHeader}>
                <div className={styles.cardTopRow}>
                  <span className={styles.serviceIcon}>
                    <ServiceIcon icon={service.icon} />
                  </span>
                  <span className={styles.indexBadge}>{String(index + 1).padStart(2, '0')}</span>
                </div>
                <h3>{service.title}</h3>
              </div>
              <p className={styles.cardDescription}>{service.subtitle}</p>

              <button
                type="button"
                onClick={() => toggleCard(index)}
                className={`${styles.readMoreBtn} ${service.featured ? styles.readMoreBtnFeatured : ''}`}
                aria-expanded={openCard === index}
                aria-controls={`service-content-${index}`}
              >
                {openCard === index ? 'Show Less' : 'Read More'}
              </button>

              <div
                id={`service-content-${index}`}
                className={`${styles.cardDropdown} ${openCard === index ? styles.cardDropdownOpen : ''}`}
              >
                <div className={styles.dropdownInner}>
                  {service.details.map(detail => (
                    <p key={detail} className={styles.dropdownText}>
                      {detail}
                    </p>
                  ))}

                  {service.bullets && (
                    <ul className={styles.bulletList}>
                      {service.bullets.map(item => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  )}

                  <a href="#contact" className={styles.consultBtn}>
                    Book a Consultation
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
