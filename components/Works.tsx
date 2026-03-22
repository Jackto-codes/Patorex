'use client'

import styles from './Works.module.css'

function UseCaseIcon({ icon }: { icon: string }) {
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
    case 'sme':
      return (
        <svg {...commonProps}>
          <path d="M3 20h18" />
          <path d="M5 20V9h5v11" />
          <path d="M10 20V5h9v15" />
          <path d="M7 12h1" />
          <path d="M7 15h1" />
          <path d="M13 9h1" />
          <path d="M16 9h1" />
        </svg>
      )
    case 'estate':
      return (
        <svg {...commonProps}>
          <path d="M3 11.5 12 4l9 7.5" />
          <path d="M6 10.5V20h12v-9.5" />
          <path d="M10 20v-5h4v5" />
        </svg>
      )
    case 'retail':
      return (
        <svg {...commonProps}>
          <path d="M6 8h12l-1 10H7L6 8Z" />
          <path d="M9 8V6a3 3 0 0 1 6 0v2" />
          <path d="M10 12h4" />
        </svg>
      )
    case 'startup':
      return (
        <svg {...commonProps}>
          <path d="M12 3c2.8 2.2 4.5 5 4.5 8.2A4.5 4.5 0 1 1 7.5 11C7.5 7.9 9.3 5.2 12 3Z" />
          <path d="M12 13l2 2" />
          <path d="M10.5 14.5 9 16" />
        </svg>
      )
    default:
      return null
  }
}

export default function Works() {
  const useCases = [
    {
      icon: 'sme',
      title: "SME's",
      description: 'Smart marketing support for small and medium-sized businesses ready to grow visibility, leads and customer trust.',
    },
    {
      icon: 'estate',
      title: 'Real Estate',
      description: 'Built for property brands and agencies that need stronger digital presence, quality inquiries and better market positioning.',
    },
    {
      icon: 'retail',
      title: 'Retail & E-commerce',
      description: 'For stores and online brands looking to drive demand, increase conversions and keep customers engaged across channels.',
    },
    {
      icon: 'startup',
      title: 'Startups and Scale-ups',
      description: 'Flexible, growth-focused marketing for ambitious teams moving fast and building traction in competitive markets.',
    },
  ]

  return (
    <section id="works" className={styles.works}>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.sectionLabel}>Use Cases</div>
          <h2 className={styles.title}>Built for Your Business</h2>
          <p className={styles.subtitle}>
            Tailored for businesses that need strategy, creative execution and practical growth support
          </p>
        </div>

        <div className={styles.grid}>
          {useCases.map((useCase, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.iconWrap}>
                <div className={styles.icon}>
                  <UseCaseIcon icon={useCase.icon} />
                </div>
              </div>
              <h3>{useCase.title}</h3>
              <p>{useCase.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
