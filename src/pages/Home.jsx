import PageHero from '../components/PageHero'
import CTASection from '../components/CTASection'

const reasons = [
  {
    title: 'Trusted expertise',
    text: 'Advanced study in life science, business, and data analytics combined with real-world technology leadership.',
  },
  {
    title: 'Personal mentorship',
    text: 'One-on-one guidance that supports confidence, curiosity, and steady progress.',
  },
  {
    title: 'Family-friendly support',
    text: 'Clear communication and practical tutoring that makes schoolwork feel manageable.',
  },
]

const credentials = ['BSc Life Science', 'MBA', 'Master’s in Cybersecurity & Data Analytics', 'Tech executive', 'STEM mentor']
const subjects = ['Mathematics', 'Biology', 'Chemistry', 'Physics', 'Study Skills']

function Home() {
  return (
    <div className="page-layout">
      <PageHero
        title="Home"
        subtitle="Premium STEM tutoring with trust, experience, and personal connection"
        description="Supporting students in Grades 8-12 and early university with focused math, science, and study skills tutoring."
        illustration="Photo"
      />
      <section className="content-block split-block">
        <div>
          <h2>Why families choose Chris</h2>
          <div className="feature-grid">
            {reasons.map((item) => (
              <article key={item.title} className="feature-card">
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="credentials-strip">
        {credentials.map((item) => (
          <span key={item} className="credential-pill">
            {item}
          </span>
        ))}
      </section>
      <section className="content-block">
        <h2>Featured subjects</h2>
        <div className="subject-grid">
          {subjects.map((subject) => (
            <article key={subject} className="subject-card">
              <h3>{subject}</h3>
              <p>Support for common struggles, clear explanations, and practical practice to build confidence.</p>
            </article>
          ))}
        </div>
      </section>
      <CTASection
        title="Ready to start with a free consultation?"
        description="Reach out today to discuss your student’s goals and find the right tutoring path."
        buttonText="Book a consultation"
        buttonLink="/contact"
      />
    </div>
  )
}

export default Home;
