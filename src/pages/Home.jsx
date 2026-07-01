import PageHero from '../components/PageHero'
import CTASection from '../components/CTASection'

const reasons = [
  {
    title: 'Calm, step-by-step explanations',
    text: 'Students get practical help that slows the problem down, rebuilds missing foundations, and turns confusion into a clear next step.',
  },
  {
    title: 'Strong academic and real-world background',
    text: 'Chris brings a BSc in Life Science, an MBA, and graduate work in cybersecurity and data analytics into tutoring that connects ideas to real life.',
  },
  {
    title: 'Support for students and parents',
    text: 'Families get clear communication, realistic goals, and tutoring that helps students feel more capable between sessions.',
  },
]

const credentials = ['BSc Life Science', 'MBA', 'Master’s in Cybersecurity & Data Analytics', 'Technology leadership', 'STEM mentorship']
const subjects = ['Math', 'Biology', 'Chemistry', 'Physics', 'Computer Science', 'Study Skills']

function Home() {
  return (
    <div className="page-layout">
      <PageHero
        title="STEM tutoring that turns confusion into confidence."
        subtitle="Math, science, computer science, and study skills support for high school and early university students."
        description="Learn STEM With Chris helps students understand the ideas behind the homework, prepare for tests, and build the confidence to solve problems on their own."
        illustration="Photo"
      />
      <section className="content-block split-block">
        <div>
          <h2>For students who are capable, but stuck</h2>
          <p>
            Many students do not need more pressure. They need someone who can explain the concept in a different way, find the missing step, and help them practice until the subject starts to make sense.
          </p>
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
      <section className="credentials-strip" aria-label="Chris's credentials and experience">
        {credentials.map((item) => (
          <span key={item} className="credential-pill">
            {item}
          </span>
        ))}
      </section>
      <section className="content-block">
        <h2>Core tutoring areas</h2>
        <div className="subject-grid">
          {subjects.map((subject) => (
            <article key={subject} className="subject-card">
              <h3>{subject}</h3>
              <p>Clear explanations, guided practice, and practical strategies for assignments, tests, and long-term understanding.</p>
            </article>
          ))}
        </div>
      </section>
      <CTASection
        title="Start with a free consultation"
        description="Tell me where the student is stuck, what course they are taking, and what kind of support would help most."
        buttonText="Book a consultation"
        buttonLink="/contact"
      />
    </div>
  )
}

export default Home;
