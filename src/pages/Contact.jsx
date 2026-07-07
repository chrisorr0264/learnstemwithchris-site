import PageHero from '../components/PageHero'
import CTASection from '../components/CTASection'

function Contact() {
  return (
    <div className="page-layout">
      <PageHero
        title="Contact Chris"
        subtitle="Start with a free consultation."
        description="Send a quick note about the student, the course, what feels hard right now, and what kind of help would make the biggest difference."
        illustration="Photo"
      />
      <section className="content-block contact-grid">
        <div className="contact-panel">
          <h2>What to include</h2>
          <p>A short message is enough. Helpful details include:</p>
          <ul>
            <li>Student grade or course level</li>
            <li>Subject and current topic</li>
            <li>Whether the goal is homework help, test prep, confidence, or enrichment</li>
            <li>Preferred tutoring format and general availability</li>
          </ul>
          <p><strong>Format:</strong> Online tutoring is available. Local in-person support may be available depending on location and schedule.</p>
        </div>
        <div className="contact-form-placeholder" aria-hidden="true">
          <span>Contact form placeholder</span>
        </div>
      </section>
      <CTASection
        title="Ready to connect?"
        description="Email Chris to start the conversation and plan the right next step."
        buttonText="Email Chris"
        buttonLink="mailto:hello@learnstemwithchris.com"
      />
    </div>
  )
}

export default Contact;
