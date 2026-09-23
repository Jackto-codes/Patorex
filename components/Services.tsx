'use client'

import { useState } from 'react'
import styles from './Services.module.css'

type EngineItem = {
  id: string
  number: string
  title: string
  tagline: string
  coreDescription: string
  capabilities: string[]
  targetMetric: string
  icon: string
  isSpecialEdition?: boolean
  promoBadge?: string
}

function EngineIcon({ icon }: { icon: string }) {
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
    case 'acquisition':
      return (
        <svg {...commonProps}>
          <circle cx="12" cy="12" r="9" />
          <circle cx="12" cy="12" r="5" />
          <circle cx="12" cy="12" r="1.5" fill="currentColor" />
        </svg>
      )
    case 'conversion':
      return (
        <svg {...commonProps}>
          <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
        </svg>
      )
    case 'retention':
      return (
        <svg {...commonProps}>
          <path d="M21.5 2v6h-6" />
          <path d="M21.34 15.57a10 10 0 1 1-.57-8.38l5.67-5.67" />
        </svg>
      )
    case 'intelligence':
      return (
        <svg {...commonProps}>
          <line x1="18" y1="20" x2="18" y2="10" />
          <line x1="12" y1="20" x2="12" y2="4" />
          <line x1="6" y1="20" x2="6" y2="14" />
          <path d="M3 20h18" />
        </svg>
      )
    case 'web3':
      return (
        <svg {...commonProps}>
          <path d="M12 2L2 7l10 5 10-5-10-5z" />
          <path d="M2 17l10 5 10-5" />
          <path d="M2 12l10 5 10-5" />
        </svg>
      )
    default:
      return null
  }
}

export default function Services() {
  const [openCard, setOpenCard] = useState<number | null>(0)

  const engines: EngineItem[] = [
    {
      id: 'acquisition',
      number: '01',
      title: 'Customer Acquisition Engine',
      tagline: 'Drive high-intent demand and pipeline volume.',
      coreDescription:
        'We build systematic acquisition funnels that put your business in front of ready-to-buy prospects.',
      capabilities: [
        'Search Engine Optimization (SEO)',
        'Google & Meta Performance Ads',
        'High-Converting Landing Pages',
        'Strategic Billboard & Out-of-Home Media',
        'Content Marketing & Video Assets',
      ],
      targetMetric: 'Lower Customer Acquisition Cost (CAC) & Qualified Pipeline Volume.',
      icon: 'acquisition',
    },
    {
      id: 'conversion',
      number: '02',
      title: 'Conversion Engine',
      tagline: 'Turn clicks and inquiries into paying clients.',
      coreDescription:
        'Traffic without conversion is wasted spend. We engineer high-converting sales pathways and lead nurturing systems that turn interest into signed deals.',
      capabilities: [
        'Offer Design & Positioning',
        'WhatsApp Business & Live Chat Sales Systems',
        'CRM Setup & Lead Pipeline Automation',
        'Multi-Step Sales Funnel Architecture',
        'Retargeting & Remarketing Campaigns',
      ],
      targetMetric: 'Higher Lead-to-Customer Conversion Rate.',
      icon: 'conversion',
    },
    {
      id: 'retention',
      number: '03',
      title: 'Retention Engine',
      tagline: 'Maximize customer lifetime value and repeat sales.',
      coreDescription:
        'The most profitable revenue comes from existing customers. We implement retention mechanics that keep your clients engaged and buying again.',
      capabilities: [
        'Automated Email Lifecycle Campaigns',
        'WhatsApp VIP & Broadcast Nurture Loops',
        'Customer Database Segmentation',
        'Loyalty, Referral & Upsell Campaigns',
        'Client Reactivation Sprints',
      ],
      targetMetric: 'Increased Customer Lifetime Value (LTV) & Repeat Purchases.',
      icon: 'retention',
    },
    {
      id: 'intelligence',
      number: '04',
      title: 'Business & Revenue Intelligence',
      tagline: 'Connect digital marketing directly to business economics.',
      coreDescription:
        'Built on professional accounting and audit expertise. We provide clear visibility into where your capital is going, which channels produce profit, and what drives cash flow.',
      capabilities: [
        'Marketing Analytics & Attribution',
        'CAC, LTV & Unit Economics Tracking',
        'Custom Executive KPI Dashboards',
        'Revenue & Expense Leakage Analysis',
        'Project & Campaign Management Oversight',
      ],
      targetMetric: 'Clear Financial Visibility & Maximized Marketing ROI.',
      icon: 'intelligence',
    },
    {
      id: 'web3',
      number: '05',
      title: 'Web3 Services & Project Management',
      tagline: 'Accelerate Web3 growth, tokenomics marketing, and decentralized project delivery.',
      coreDescription:
        'Specialized Web3 & Blockchain project management and growth strategies designed for Web3 protocols, NFT ecosystems, dApps, and decentralized communities. We are currently running a special promo for clients requiring Web3 services and Project Management.',
      capabilities: [
        'Web3 & Protocol Marketing Strategy',
        'Blockchain Project & PMO Management',
        'Discord & Telegram Community Growth',
        'Tokenomics & Go-To-Market Execution',
        'Web3 Partnership & Advisory Services',
      ],
      targetMetric: 'Rapid Token & Ecosystem Growth, Seamless Blockchain Execution.',
      icon: 'web3',
      isSpecialEdition: true,
      promoBadge: '🔥 SPECIAL PROMO EDITION • WEB3 & PM',
    },
  ]

  const toggleCard = (index: number) => {
    setOpenCard(prev => (prev === index ? null : index))
  }

  return (
    <section id="services" className={styles.services}>
      <div className={styles.container}>
        {/* Section Header */}
        <div className={styles.header}>
          <div className={styles.sectionTag}>The Patorex Growth Framework</div>
          <h2 className={styles.mainTitle}>
            End-to-End Revenue Systems Built for <span className={styles.gradientText}>Measurable ROI</span>
          </h2>
          <p className={styles.subtitle}>
            Marketing is not just about likes or visibility; it is the engine that drives acquisition, conversion, retention, and bottom-line profit.
          </p>
        </div>

        {/* 5 Core Growth Engines Grid */}
        <div className={styles.engineGrid}>
          {engines.map((engine, index) => {
            const isOpen = openCard === index
            return (
              <article
                key={engine.id}
                className={`${styles.engineCard} ${
                  engine.isSpecialEdition ? styles.specialEditionCard : ''
                }`}
              >
                {/* Special Edition Glitch/Glowing Elements */}
                {engine.isSpecialEdition && (
                  <>
                    <div className={styles.twitchGlowOverlay} aria-hidden="true" />
                    <span className={`${styles.specialBadge} ${styles.glitchText}`} data-text={engine.promoBadge}>
                      {engine.promoBadge}
                    </span>
                  </>
                )}

                <div className={styles.cardHeaderTop}>
                  <div className={styles.iconContainer}>
                    <EngineIcon icon={engine.icon} />
                  </div>
                  <span className={styles.numberBadge}>{engine.number}</span>
                </div>

                <h3 className={styles.engineTitle}>
                  {engine.title}
                  {engine.isSpecialEdition && <span className={styles.liveIndicator}>PROMO</span>}
                </h3>
                <p className={styles.tagline}>{engine.tagline}</p>
                <p className={styles.coreDescription}>{engine.coreDescription}</p>

                {/* Dropdown / Accordion Link */}
                <button
                  type="button"
                  onClick={() => toggleCard(index)}
                  className={`${styles.accordionToggleBtn} ${
                    engine.isSpecialEdition ? styles.specialToggleBtn : ''
                  }`}
                  aria-expanded={isOpen}
                  aria-controls={`engine-delivery-${index}`}
                >
                  <span>{isOpen ? 'Hide Delivery Mechanisms' : 'View Delivery Mechanisms'}</span>
                  <svg
                    className={`${styles.chevronIcon} ${isOpen ? styles.chevronRotated : ''}`}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                  >
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                </button>

                {/* Dropdown Content */}
                <div
                  id={`engine-delivery-${index}`}
                  className={`${styles.accordionContent} ${isOpen ? styles.accordionOpen : ''}`}
                >
                  <div className={styles.accordionInner}>
                    <h4 className={styles.deliveryHeading}>Delivery Capabilities:</h4>
                    <div className={styles.capabilitiesList}>
                      {engine.capabilities.map((cap, cIdx) => (
                        <div key={cIdx} className={styles.capabilityPill}>
                          <svg
                            className={styles.checkIcon}
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="3"
                          >
                            <polyline points="20 6 9 17 4 12" />
                          </svg>
                          <span>{cap}</span>
                        </div>
                      ))}
                    </div>

                    {/* Outcome Metric Box */}
                    <div className={styles.metricBox}>
                      <div className={styles.metricHeader}>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <circle cx="12" cy="12" r="10" />
                          <path d="M12 6v6l4 2" />
                        </svg>
                        <span>Outcome Metric Highlight</span>
                      </div>
                      <p className={styles.metricText}>{engine.targetMetric}</p>
                    </div>

                    <a
                      href="https://wa.me/15813364553"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${styles.engineCtaBtn} ${
                        engine.isSpecialEdition ? styles.specialCtaBtn : ''
                      }`}
                    >
                      Deploy This Engine
                    </a>
                  </div>
                </div>
              </article>
            )
          })}
        </div>

        {/* Prominent Banner Below Engines */}
        <div className={styles.auditBanner}>
          <div className={styles.auditBannerContent}>
            <div className={styles.auditIconBadge}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M9 11l3 3L22 4" />
                <path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11" />
              </svg>
            </div>
            <p className={styles.auditText}>
              Not sure which engine your business needs right now?
            </p>
            <a href="#contact" className={styles.auditBtn}>
              Book a Growth Audit
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

