'use client'

import { useState } from 'react'
import styles from './FAQ.module.css'

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqs = [
    {
      question: 'How long does it take to see results?',
      answer: 'Most clients start seeing measurable results within 2-3 months. However, this can vary depending on your industry, competition, and the services you choose. We provide monthly reports to track progress and adjust strategies accordingly.',
    },
    {
      question: 'What makes Patorex different from other agencies?',
      answer: 'We combine data-driven strategies with creative excellence. Our team doesn\'t just execute campaigns – we become your strategic partner, deeply understanding your business goals and delivering customized solutions that drive real results.',
    },
    {
      question: 'Do you work with businesses in my industry?',
      answer: 'We have experience across multiple industries including technology, e-commerce, healthcare, finance, and more. Our versatile approach allows us to quickly understand industry-specific challenges and opportunities.',
    },
    {
      question: 'Can I upgrade or downgrade my plan?',
      answer: 'Absolutely! You can adjust your plan at any time. We understand that business needs change, and we\'re flexible to accommodate your growth or shifting priorities.',
    },
    {
      question: 'What kind of reporting do you provide?',
      answer: 'We provide comprehensive monthly reports that include key metrics, campaign performance, ROI analysis, and actionable insights. You\'ll have access to a real-time dashboard and scheduled review meetings with your account manager.',
    },
    {
      question: 'Do you require long-term contracts?',
      answer: 'We offer both month-to-month and annual contracts. While we recommend at least 6 months to see optimal results, we don\'t lock you into long-term commitments unless it makes sense for your goals.',
    },
  ]

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className={styles.faq}>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.sectionLabel}>FAQ</div>
          <h2 className={styles.title}>Got Questions?</h2>
          <p className={styles.subtitle}>
            Here are some answers to common questions
          </p>
        </div>

        <div className={styles.faqList}>
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`${styles.faqItem} ${openIndex === index ? styles.open : ''}`}
            >
              <button 
                className={styles.faqQuestion}
                onClick={() => toggleFAQ(index)}
              >
                <span>{faq.question}</span>
                <svg 
                  className={styles.icon}
                  viewBox="0 0 20 20" 
                  fill="currentColor"
                >
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
              <div className={styles.faqAnswer}>
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
