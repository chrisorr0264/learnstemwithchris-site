const trustPoints = [
  {
    title: 'One-on-one confidence building',
    description: 'Consistent support that helps students feel ready for homework, class tests, and bigger exams.',
  },
  {
    title: 'Practical STEM guidance',
    description: 'Lessons connect science and math to real-world problems so learning feels relevant and memorable.',
  },
  {
    title: 'Transparent communication',
    description: 'Clear updates for parents and personalized next steps for students after each session.',
  },
]

function WhyFamilies() {
  return (
    <section id="why-families" className="section-block section-alt">
      <div className="section-intro">
        <p className="eyebrow">Why families choose Chris</p>
        <h2>Trusted tutoring with a personal, professional touch</h2>
        <p>Experienced mentoring that focuses on understanding, progress, and a strong student-teacher connection.</p>
      </div>
      <div className="trust-grid">
        {trustPoints.map((point) => (
          <article key={point.title} className="trust-card">
            <h3>{point.title}</h3>
            <p>{point.description}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

export default WhyFamilies;
