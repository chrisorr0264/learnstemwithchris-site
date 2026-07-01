import PageHero from '../components/PageHero'
import CTASection from '../components/CTASection'

function About() {
  return (
    <div className="page-layout">
      <PageHero
        title="About Chris"
        subtitle="A practical STEM mentor with academic depth, broad professional experience, and a calm teaching style."
        description="I help students make sense of difficult ideas by breaking problems into clear steps, connecting concepts to real life, and building confidence through practice."
        illustration="Photo"
      />
      <section className="content-block split-block">
        <div>
          <h2>Why I teach</h2>
          <p>
            I have always loved the moment when a difficult idea finally clicks. Good tutoring is not about doing the work for the student. It is about helping them understand what the problem is asking, what tools they already have, and how to move forward with confidence.
          </p>
          <p>
            My background spans science, business, law, healthcare, mathematics, physics, computer science, technology, and education. That breadth lets me teach STEM as a connected way of thinking rather than a pile of formulas to memorize.
          </p>
          <div className="detail-list">
            <div>
              <strong>Education and training</strong>
              <p>BSc in Life Sciences, MBA, Post-Graduate Certificate in Law, College Diploma in Paramedicine, and formal training in Mathematics and Physics.</p>
            </div>
            <div>
              <strong>Experience</strong>
              <p>Computer Science educator, technology leader, entrepreneur, analytical problem solver, and mentor for learners working through complex topics.</p>
            </div>
            <div>
              <strong>Teaching style</strong>
              <p>Patient, structured, practical, and focused on helping students become more independent problem solvers.</p>
            </div>
          </div>
        </div>
        <div className="photo-panel" aria-hidden="true">
          <span>Photo</span>
        </div>
      </section>
      <section className="content-block">
        <h2>What students can expect</h2>
        <p>
          Sessions are focused, supportive, and tailored to the student’s course material. We can work through homework, prepare for tests, rebuild missing foundations, or go deeper into STEM topics for students who want enrichment.
        </p>
      </section>
      <CTASection
        title="Looking for thoughtful STEM support?"
        description="Start with a conversation about the student’s goals, current challenges, and the best path forward."
        buttonText="Contact Chris"
        buttonLink="/contact"
      />
    </div>
  )
}

export default About;
