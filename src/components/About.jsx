function About() {
  return (
    <section id="about" className="section-block section-alt about-section">
      <div className="about-copy">
        <div className="about-text">
          <p className="eyebrow">About Chris</p>
          <h2>Trusted STEM mentorship from a technology executive and educator</h2>
          <p>
            Chris earned a BSc in Life Science, an MBA, and a Master’s in Cybersecurity & Data Analytics.
            With experience as a technology executive, entrepreneur, and STEM mentor, he makes complex ideas feel clear and manageable.
          </p>
          <div className="about-details">
            <div>
              <strong>Professional credibility</strong>
              <p>Multiple advanced degrees and real-world technology leadership experience.</p>
            </div>
            <div>
              <strong>Student-first teaching</strong>
              <p>Calm, encouraging lessons built around each learner’s pace and confidence.</p>
            </div>
          </div>
        </div>
        <div className="about-photo" aria-hidden="true">
          <div className="photo-placeholder">
            <span>Photo</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About;
