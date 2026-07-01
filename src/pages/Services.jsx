import PageHero from '../components/PageHero'
import CTASection from '../components/CTASection'

const services = [
  {
    title: 'Homework and assignment support',
    details: 'Work through current course material while learning the reasoning behind each step, not just getting to the answer.',
  },
  {
    title: 'Ongoing weekly tutoring',
    details: 'Build steady progress with regular sessions, targeted practice, and a plan that adapts as the student improves.',
  },
  {
    title: 'Test and exam preparation',
    details: 'Review key concepts, identify weak spots, practice representative questions, and develop calmer test-taking routines.',
  },
  {
    title: 'Foundation rebuilding',
    details: 'Go back to the missing building blocks in math or science so new material stops feeling impossible.',
  },
  {
    title: 'STEM enrichment',
    details: 'Explore advanced questions, projects, coding, data, and real-world applications for curious students who want more.',
  },
  {
    title: 'Study skills and learning strategy',
    details: 'Improve note-taking, problem setup, review habits, time management, and confidence between tutoring sessions.',
  },
]

function Services() {
  return (
    <div className="page-layout">
      <PageHero
        title="Tutoring services"
        subtitle="Flexible support for homework, tests, confidence, and deeper understanding."
        description="Whether the student needs urgent help before a test or steady support through a course, tutoring is built around their current material and learning style."
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
      <section className="content-block">
        <h2>How sessions work</h2>
        <p>
          We start by identifying the student’s immediate challenge, then build a simple plan: what to understand first, what to practice next, and how to know when the concept is becoming reliable.
        </p>
        <p>
          Sessions can focus on a current assignment, a test coming up soon, or a longer-term goal such as rebuilding confidence in math or preparing for university-level STEM courses.
        </p>
      </section>
      <CTASection
        title="Need a tutoring plan that fits your student?"
        description="Send a quick note about the course, the current challenge, and what you hope tutoring will change."
        buttonText="Book a consultation"
        buttonLink="/contact"
      />
    </div>
  )
}

export default Services;
