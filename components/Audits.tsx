'use client'

import styles from './Audits.module.css'

export default function Audits() {
  return (
    <section id="audits" className={styles.auditsSection}>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.sectionTag}>Flagship Business Diagnostics</div>
          <h2 className={styles.mainTitle}>
            Stop Money Leaks &amp; <span className={styles.highlightText}>Scale Revenue</span>
          </h2>
          <p className={styles.subtitle}>
            Choose the diagnostic system engineered for your current business stage—whether you need to plug financial leaks or aggressively expand market share.
          </p>
        </div>

        <div className={styles.auditGrid}>
          {/* Card 1: Business Survival / Revenue Leakage Audit */}
          <article className={`${styles.auditCard} ${styles.survivalCard}`}>
            <div className={styles.cardHeaderTop}>
              <span className={styles.auditTag}>SURVIVAL &amp; RECOVERY</span>
              <div className={styles.iconCircle}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  <path d="M12 8v4" />
                  <path d="M12 16h.01" />
                </svg>
              </div>
            </div>

            <h3 className={styles.cardTitle}>Business Survival &amp; Revenue Leakage Audit</h3>
            <p className={styles.cardTarget}>
              For cautious or struggling businesses needing to eliminate wasted spend, protect cash flow, and plug profit leaks.
            </p>

            <div className={styles.highlightsBox}>
              <h4 className={styles.highlightsTitle}>Audit Core Deliverables:</h4>
              <ul className={styles.featureList}>
                <li>
                  <svg className={styles.checkIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span><strong>Financial Leakage Analysis:</strong> Pinpoint exact points where capital and margins are draining.</span>
                </li>
                <li>
                  <svg className={styles.checkIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span><strong>Wasted Ad Spend Identification:</strong> Audit Meta/Google ad accounts to cut non-converting keywords &amp; audiences.</span>
                </li>
                <li>
                  <svg className={styles.checkIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span><strong>Customer Reactivation Sprint:</strong> Unlock rapid cash flow from existing inactive customer databases.</span>
                </li>
                <li>
                  <svg className={styles.checkIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span><strong>90-Day Recovery Roadmap:</strong> Clear step-by-step blueprint to restore profit margins.</span>
                </li>
              </ul>
            </div>

            <a href="#contact" className={styles.survivalCta}>
              Diagnose Your Business Leaking Points
            </a>
          </article>

          {/* Card 2: Business Scale System */}
          <article className={`${styles.auditCard} ${styles.scaleCard}`}>
            <div className={styles.cardHeaderTop}>
              <span className={styles.auditTagScale}>GROWTH &amp; DOMINANCE</span>
              <div className={styles.iconCircleScale}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                  <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
                </svg>
              </div>
            </div>

            <h3 className={styles.cardTitle}>Business Scale System</h3>
            <p className={styles.cardTarget}>
              For established businesses ready to aggressively capture market share, build high-converting funnels, and scale pipeline volume.
            </p>

            <div className={styles.highlightsBoxScale}>
              <h4 className={styles.highlightsTitle}>System Core Deliverables:</h4>
              <ul className={styles.featureList}>
                <li>
                  <svg className={styles.checkIconScale} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span><strong>Full-Funnel Demand Generation:</strong> Scale high-intent Meta, Google &amp; Out-of-Home performance campaigns.</span>
                </li>
                <li>
                  <svg className={styles.checkIconScale} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span><strong>Conversion Pathway Architecture:</strong> High-converting landing pages &amp; CRM sales automation.</span>
                </li>
                <li>
                  <svg className={styles.checkIconScale} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span><strong>Unit Economics &amp; CAC/LTV Scaling:</strong> Optimize marketing spend for maximum lifetime customer value.</span>
                </li>
                <li>
                  <svg className={styles.checkIconScale} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span><strong>Custom Executive KPI Dashboard:</strong> Complete transparency into cash flow, attribution, and ROI.</span>
                </li>
              </ul>
            </div>

            <a href="#contact" className={styles.scaleCta}>
              Request a Revenue &amp; Growth Audit
            </a>
          </article>
        </div>
      </div>
    </section>
  )
}
