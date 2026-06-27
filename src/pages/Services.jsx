import PageHero from '../components/PageHero'
import CTASection from '../components/CTASection'

const services = [
  {
    title: 'Homework Help',
    details: 'Guidance for assignments, review of concepts, and help with challenging problems.',
  },
  {
    title: 'Ongoing Tutoring',
    details: 'Regular sessions that build consistent STEM skills, confidence, and academic momentum.',
  },
  {
    title: 'Exam Preparation',
    details: 'Focused review, test strategies, and practice tailored to school and standardized exams.',
  },
  {
    title: 'STEM Enrichment',
    details: 'Deeper exploration of projects, real-world applications, and advanced problem solving.',
  },
]

function Services() {
  return (
    <div className="page-layout">
      <PageHero
        title="Services"
        subtitle="Tutoring options designed for support, progress, and confidence"
        description="Choose the service that best matches your student’s current goals and learning needs."
        illustration="Photo"
      />
      <section className="content-block">
        <div className="service-grid">
          {services.map((service) => (
            <article key={service.title} className="feature-card">
              <h3>{service.title}</h3>
              <p>{service.details}</p>
            </article>
          ))}
        </div>
      </section>
      <CTASection
        title="Need a tutoring plan that fits your family?"
        description="Get in touch for a consultation and a tutoring approach built around your student’s needs."
        buttonText="Book a consultation"
        buttonLink="/contact"
      />
    </div>
  )
}

export default Services;
