const packages = [
  {
    title: 'One-time session',
    subtitle: 'Perfect for targeted review',
    features: ['Homework support', 'Topic refresh', 'Exam prep check'],
  },
  {
    title: 'Weekly coaching',
    subtitle: 'Consistent progress and confidence',
    features: ['Focused lesson plans', 'Regular check-ins', 'Skill development'],
  },
  {
    title: 'Learning plan',
    subtitle: 'A tailored roadmap for long-term growth',
    features: ['Custom goals', 'Skill tracking', 'Study strategies'],
  },
]

function Packages() {
  return (
    <section id="packages" className="section-block">
      <div className="section-intro">
        <p className="eyebrow">Ways to work together</p>
        <h2>Flexible tutoring options for families</h2>
        <p>Choose the format that suits your schedule and learning goals.</p>
      </div>
      <div className="pack-grid">
        {packages.map((item) => (
          <article key={item.title} className="package-card">
            <h3>{item.title}</h3>
            <p className="package-subtitle">{item.subtitle}</p>
            <ul>
              {item.features.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Packages;
