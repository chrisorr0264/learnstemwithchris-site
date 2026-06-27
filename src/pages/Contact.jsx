import PageHero from '../components/PageHero'
import CTASection from '../components/CTASection'

function Contact() {
  return (
    <div className="page-layout">
      <PageHero
        title="Contact"
        subtitle="Start with a free consultation and thoughtful support"
        description="Reach out to discuss your student’s goals, tutoring format, and how I can help with STEM learning challenges."
        illustration="Photo"
      />
      <section className="content-block contact-grid">
        <div className="contact-panel">
          <h2>Consultation</h2>
          <p>Book a free consultation to talk through goals, learning style, and a plan tailored to your student.</p>
          <p><strong>Online and in-person support:</strong> Flexible tutoring available to fit your schedule.</p>
        </div>
        <div className="contact-form-placeholder" aria-hidden="true">
          <span>Contact form placeholder</span>
        </div>
      </section>
      <CTASection
        title="Ready to connect?"
        description="Email to begin your student’s tutoring journey and receive supportive guidance from the first session."
        buttonText="Email Chris"
        buttonLink="mailto:hello@learnstemwithchris.com"
      />
    </div>
  )
}

export default Contact;
