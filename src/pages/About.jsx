import PageHero from '../components/PageHero'
import CTASection from '../components/CTASection'

function About() {
  return (
    <div className="page-layout">
      <PageHero
        title="About Chris"
        subtitle="Experienced STEM mentoring grounded in professional leadership and advanced degrees"
        description="Chris combines a strong academic background with executive and entrepreneurial experience to support students in math, science, and analytical thinking."
        illustration="Photo"
      />
      <section className="content-block split-block">
        <div>
          <h2>About Chris</h2>
          <p>
            Chris holds a BSc in Life Science, an MBA, and a Master’s in Cybersecurity & Data Analytics. He has worked as a technology executive and entrepreneur, mentoring students in STEM fields with a calm, practical approach.
          </p>
          <div className="detail-list">
            <div>
              <strong>Education</strong>
              <p>BSc Life Science, MBA, Master’s in Cybersecurity & Data Analytics</p>
            </div>
            <div>
              <strong>Experience</strong>
              <p>Technology executive, entrepreneur, and STEM mentor for learners preparing for school and university.</p>
            </div>
          </div>
        </div>
        <div className="photo-panel" aria-hidden="true">
          <span>Photo</span>
        </div>
      </section>
      <section className="content-block">
        <h2>Why I tutor</h2>
        <p>
          Tutoring is about more than homework. It is about helping students feel confident in their thinking, connecting ideas clearly, and preparing them to succeed in school and beyond.
        </p>
      </section>
      <CTASection
        title="Looking for thoughtful STEM mentorship?"
        description="Chris provides professional tutoring that values long-term understanding and student confidence."
        buttonText="Contact Chris"
        buttonLink="/contact"
      />
    </div>
  )
}

export default About;
