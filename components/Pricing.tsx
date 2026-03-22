'use client'

import styles from './Pricing.module.css'

export default function Pricing() {
  const plans = [
    {
      name: 'Starter',
      description: 'Perfect for small businesses starting their marketing journey',
      price: '$999',
      period: '/month',
      features: [
        'Social Media Management',
        'Monthly Content Calendar',
        'Basic Analytics Reports',
        'Email Support',
        '2 Campaigns per month',
      ],
      popular: false,
    },
    {
      name: 'Growth',
      description: 'Ideal for growing businesses that need comprehensive marketing',
      price: '$2,499',
      period: '/month',
      features: [
        'Everything in Starter',
        'Advanced Analytics Dashboard',
        'SEO Optimization',
        'PPC Campaign Management',
        '5 Campaigns per month',
        'Priority Support',
        'Quarterly Strategy Reviews',
      ],
      popular: true,
    },
    {
      name: 'Enterprise',
      description: 'Complete marketing solutions for established businesses',
      price: 'Custom',
      period: '',
      features: [
        'Everything in Growth',
        'Dedicated Account Manager',
        'Custom Integrations',
        'Unlimited Campaigns',
        '24/7 Priority Support',
        'Monthly Strategy Sessions',
        'Advanced Reporting & Insights',
        'White-label Solutions',
      ],
      popular: false,
    },
  ]

  return (
    <section id="pricing" className={styles.pricing}>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.sectionLabel}>Pricing</div>
          <h2 className={styles.title}>Simple, Transparent Pricing</h2>
          <p className={styles.subtitle}>
            Choose the perfect plan for your business needs
          </p>
        </div>

        <div className={styles.grid}>
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`${styles.pricingCard} ${plan.popular ? styles.popular : ''}`}
            >
              {plan.popular && <div className={styles.badge}>Most Popular</div>}
              
              <div className={styles.cardHeader}>
                <h3 className={styles.planName}>{plan.name}</h3>
                <p className={styles.planDescription}>{plan.description}</p>
                <div className={styles.priceWrapper}>
                  <span className={styles.price}>{plan.price}</span>
                  <span className={styles.period}>{plan.period}</span>
                </div>
              </div>

              <ul className={styles.features}>
                {plan.features.map((feature, i) => (
                  <li key={i}>
                    <svg className={styles.checkIcon} viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>

              <button className={styles.ctaButton}>
                Get Started
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
