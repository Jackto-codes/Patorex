'use client'

import styles from './Pricing.module.css'

type PackageTier = {
  id: string
  name: string
  subtitle: string
  tag: string
  isFeatured?: boolean
  features: string[]
  ctaText: string
}

export default function Pricing() {
  const tiers: PackageTier[] = [
    {
      id: 'starter',
      name: 'Starter Tier',
      subtitle: 'For small businesses & startups building a solid digital foundation and local demand.',
      tag: 'SMALL BUSINESSES',
      features: [
        'Google Business Profile & Local Maps Optimization',
        'Search Engine Optimization (SEO) Foundation',
        'Social Media Profile Setup & Brand Assets',
        'Local Lead Generation & Inquiry Funnel',
        'Basic Monthly Performance Reporting',
      ],
      ctaText: 'Select Starter Tier',
    },
    {
      id: 'growth',
      name: 'Growth Tier',
      subtitle: 'For established SMEs ready to scale demand, automate leads, and drive consistent ROI.',
      tag: '⭐ MOST POPULAR • ESTABLISHED SMEs',
      isFeatured: true,
      features: [
        'Full-Funnel Acquisition (Google & Meta Ads + SEO)',
        'High-Converting Landing Page Optimization',
        'CRM Setup & WhatsApp Sales Automation',
        'Customer Nurture & Retargeting Loops',
        'Marketing Analytics & Attribution Dashboard',
        'Dedicated Campaign & Project Management',
      ],
      ctaText: 'Select Growth Tier',
    },
    {
      id: 'scale',
      name: 'Scale Tier',
      subtitle: 'For larger organizations needing complete revenue infrastructure & financial intelligence.',
      tag: 'ENTERPRISE & LARGE ORGS',
      features: [
        'Comprehensive Revenue Infrastructure Architecture',
        'Omnichannel Performance Ads & Out-of-Home Media',
        'Financial & Revenue Intelligence KPI Dashboards',
        'CAC, LTV & Unit Economics Tracking',
        'Revenue Leakage & Margin Audit Oversight',
        'Custom Executive Consulting & PMO Lead',
      ],
      ctaText: 'Select Scale Tier',
    },
  ]

  return (
    <section id="pricing" className={styles.pricingSection}>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.sectionTag}>Engagement Packages</div>
          <h2 className={styles.mainTitle}>
            Transparent <span className={styles.highlightText}>Growth Structures</span>
          </h2>
          <p className={styles.subtitle}>
            Choose the engagement tier aligned with your business scale and revenue objectives.
          </p>
        </div>

        <div className={styles.tierGrid}>
          {tiers.map((tier) => (
            <article
              key={tier.id}
              className={`${styles.tierCard} ${tier.isFeatured ? styles.featuredCard : ''}`}
            >
              {tier.isFeatured && (
                <div className={styles.featuredBadge}>MOST POPULAR</div>
              )}
              <span className={`${styles.tierTag} ${tier.isFeatured ? styles.featuredTag : ''}`}>
                {tier.tag}
              </span>

              <h3 className={styles.tierName}>{tier.name}</h3>
              <p className={styles.tierSubtitle}>{tier.subtitle}</p>

              <div className={styles.featureBox}>
                <h4 className={styles.featureHeading}>Included Capabilities:</h4>
                <ul className={styles.featureList}>
                  {tier.features.map((feature, idx) => (
                    <li key={idx}>
                      <svg className={styles.checkIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <a
                href="#contact"
                className={`${styles.tierCta} ${tier.isFeatured ? styles.featuredCta : ''}`}
              >
                {tier.ctaText}
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

