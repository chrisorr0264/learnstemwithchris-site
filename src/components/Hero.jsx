const chips = ['Algebra', 'Biology', 'Chemistry', 'Physics', 'Study Skills']
const progressItems = [
  { label: 'Math Confidence', value: 88 },
  { label: 'Science Reasoning', value: 75 },
  { label: 'Exam Readiness', value: 82 },
]

function Hero() {
  return (
    <section id="home" className="hero-section">
      <div className="hero-copy">
        <p className="eyebrow">Math · Science · Engineering · Confidence</p>
        <h1>STEM tutoring that turns confusion into confidence.</h1>
        <p className="hero-text">
          Patient, practical support in math, science, and study skills — built around how each student actually learns.
        </p>
        <div className="hero-actions">
          <a className="button button-primary" href="#consultation">
            Book a free consultation
          </a>
          <a className="button button-secondary" href="#subjects">
            See subjects
          </a>
        </div>
        <div className="chip-row" aria-label="Focused subject areas">
          {chips.map((label) => (
            <span key={label} className="subject-chip">
              {label}
            </span>
          ))}
        </div>
      </div>

      <div className="hero-panel" aria-hidden="true">
        <div className="hero-panel-decor hero-orbit"></div>
        <div className="hero-panel-decor hero-grid"></div>
        <div className="hero-panel-badge">STEM learning lab</div>
        <div className="hero-panel-grid">
          <div className="hero-photo-placeholder" aria-hidden="true">
            <span>Photo</span>
          </div>
          <div className="hero-visual">
            <div className="dashboard-card">
              <div className="dashboard-title">
                <span>Learning dashboard</span>
                <strong>Sample progress snapshot</strong>
              </div>
              <div className="progress-list">
                {progressItems.map((item) => (
                  <div key={item.label} className="progress-item">
                    <div className="progress-item-header">
                      <span>{item.label}</span>
                      <strong>{item.value}%</strong>
                    </div>
                    <div className="progress-bar">
                      <div className="progress-fill" style={{ width: `${item.value}%` }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="formula-clouds" aria-hidden="true">
              <span className="formula">E=mc²</span>
              <span className="formula">y=mx+b</span>
              <span className="formula">∑a<sub>n</sub></span>
            </div>
            <div className="hero-atom" aria-hidden="true">
              <span className="atom-ring atom-ring-1" />
              <span className="atom-ring atom-ring-2" />
              <span className="atom-core" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero;
