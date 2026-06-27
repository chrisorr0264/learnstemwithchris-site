const subjects = [
  {
    title: 'Math foundations',
    description: 'Algebra, geometry, arithmetic, and test-ready problem solving tailored to grade level.',
    icon: 'math',
  },
  {
    title: 'Science confidence',
    description: 'Concept-driven lessons in biology, chemistry, physics, and scientific thinking.',
    icon: 'science',
  },
  {
    title: 'STEM enrichment',
    description: 'Engineering challenges, coding readiness, and projects that make ideas stick.',
    icon: 'lab',
  },
]

function Subjects() {
  return (
    <section id="subjects" className="section-block section-alt">
      <div className="section-intro">
        <p className="eyebrow">Subjects</p>
        <h2>Choose the support that fits your student</h2>
        <p>Lessons designed to build strong STEM habits, practical problem solving, and confident classroom participation.</p>
      </div>
      <div className="card-grid">
        {subjects.map((subject) => (
          <article key={subject.title} className="feature-card">
            <div className="feature-icon-wrapper" aria-hidden="true">
              <span className={`feature-icon feature-icon-${subject.icon}`} />
            </div>
            <h3>{subject.title}</h3>
            <p>{subject.description}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Subjects;
