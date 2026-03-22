'use client'

import styles from './Testimonials.module.css'

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Wumi Olatunde',
      role: 'CEO',
      company: 'Organic Foods Inc.',
      location: 'Lagos, NG',
      quote: 'Patorex rebuilt our digital presence and launched high-converting campaigns that lifted online sales by 64% in one quarter. They execute with clear strategy and measurable results.',
    },
    {
      name: 'Chioma Nwosune',
      role: 'Owner',
      company: 'Cakes N Glamour',
      location: 'Abuja, NG',
      quote: 'From branding to paid ads, Patorex helped us stand out in a crowded market. Our monthly orders doubled and customer acquisition became far more efficient.',
    },
    {
      name: 'Adebayo Oluseyi',
      role: 'Real Estate Agent',
      company: 'Kora Properties',
      location: 'Ibadan, NG',
      quote: 'Patorex positioned our listings with sharper messaging and better funnel design. We now generate more qualified leads and close deals faster.',
    },
    {
      name: 'Samuel Olawumi',
      role: 'CTO',
      company: 'Readra Publishing House',
      location: 'Port Harcourt, NG',
      quote: 'Their campaign strategy tied product, content, and analytics together. Engagement rose by 41% and subscription revenue is now growing consistently month over month.',
    },
    {
      name: 'Aisha Bello',
      role: 'Marketing Lead',
      company: 'Verta Health',
      location: 'Kano, NG',
      quote: 'Patorex transformed our ad and landing-page performance. Cost per lead dropped significantly while lead quality improved across every campaign channel.',
    },
    {
      name: 'David Eze',
      role: 'Founder',
      company: 'RouteLink Logistics',
      location: 'Enugu, NG',
      quote: 'They clarified our brand story and built a full-funnel growth engine. We now convert more inbound traffic and have a stronger market position.',
    },
    {
      name: 'Mariam Yusuf',
      role: 'COO',
      company: 'PrimeStay Apartments',
      location: 'Lekki, NG',
      quote: 'Patorex improved our search visibility and conversion journey. Direct bookings are up, and our paid media now delivers a healthier return on ad spend.',
    },
    {
      name: 'Tunde Akinola',
      role: 'Product Manager',
      company: 'NovaLearn',
      location: 'Abeokuta, NG',
      quote: 'Their growth marketing approach helped us communicate value faster. Trial-to-paid conversion improved by 29% after the new messaging and funnel rollout.',
    },
    {
      name: 'Ifeoma Umeh',
      role: 'Brand Director',
      company: 'Glowora Beauty',
      location: 'Owerri, NG',
      quote: 'Patorex gave us a premium brand direction backed by performance marketing. We gained stronger recall, better engagement, and a clear sales uplift.',
    },
  ]

  const columns = [0, 1, 2].map((columnIndex) =>
    testimonials.filter((_, index) => index % 3 === columnIndex)
  )

  const mobileRows = [0, 1].map((rowIndex) =>
    testimonials.filter((_, index) => index % 2 === rowIndex)
  )

  const getInitials = (name: string) =>
    name
      .split(' ')
      .map((word) => word[0])
      .join('')
      .slice(0, 2)
      .toUpperCase()

  const renderCard = (testimonial: (typeof testimonials)[number], key: string) => (
    <article key={key} className={styles.testimonialCard}>
      <p className={styles.testimonialText}>{testimonial.quote}</p>

      <div className={styles.author}>
        <div className={styles.avatar}>{getInitials(testimonial.name)}</div>
        <div className={styles.authorInfo}>
          <div className={styles.authorName}>{testimonial.name}</div>
          <div className={styles.authorRole}>
            {testimonial.role} at <span className={styles.company}>{testimonial.company}</span>
          </div>
          <div className={styles.location}>{testimonial.location}</div>
        </div>
      </div>
    </article>
  )

  return (
    <section id="testimonials" className={styles.testimonials}>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.sectionLabel}>Testimonials</div>
          <h2 className={styles.title}>
            Trusted by Businesses,
            <br />
            Proven to Perform!
          </h2>
          <p className={styles.subtitle}>
            Real stories from brands we have helped grow.
          </p>
        </div>

        <div className={styles.desktopMarquee}>
          {columns.map((column, columnIndex) => (
            <div key={columnIndex} className={styles.column}>
              <div className={`${styles.columnTrack} ${styles[`speed${columnIndex + 1}` as keyof typeof styles]}`}>
                {[...column, ...column].map((testimonial, index) => (
                  renderCard(testimonial, `${testimonial.name}-${index}`)
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className={styles.mobileStack}>
          {mobileRows.map((row, rowIndex) => (
            <div key={rowIndex} className={styles.mobileRow}>
              <div className={`${styles.mobileTrack} ${rowIndex === 0 ? styles.mobileTrackLeft : styles.mobileTrackRight}`}>
                {[...row, ...row].map((testimonial, index) =>
                  renderCard(testimonial, `${testimonial.name}-mobile-${rowIndex}-${index}`)
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
