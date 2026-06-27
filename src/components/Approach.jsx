const approachItems = [
  {
    title: 'Patient explanations',
    description: 'Step-by-step support that meets each student where they are and builds steady confidence.',
  },
  {
    title: 'Real-world clarity',
    description: 'Concepts are connected to practical examples so learning feels meaningful and memorable.',
  },
  {
    title: 'Interactive growth',
    description: 'A mix of guided practice, questions, and reflection to turn confusion into clarity.',
  },
]

function Approach() {
  return (
    <section id="how-it-works" className="section-block">
      <div className="section-intro">
        <p className="eyebrow">How tutoring works</p>
        <h2>Structured sessions designed around clarity and growth</h2>
        <p>Simple, consistent lessons that build skills, strengthen confidence, and support classroom success.</p>
      </div>
      <div className="card-grid">
        {approachItems.map((item) => (
          <article key={item.title} className="feature-card">
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Approach;
