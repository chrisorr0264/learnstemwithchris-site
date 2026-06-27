function PageHero({ title, subtitle, description, illustration }) {
  return (
    <section className="page-hero">
      <div>
        <p className="eyebrow">{title}</p>
        <h1>{subtitle}</h1>
        <p className="hero-copy">{description}</p>
      </div>
      <div className="hero-illustration" aria-hidden="true">
        <span>{illustration}</span>
      </div>
    </section>
  )
}

export default PageHero;
