function CTASection({ title, description, buttonText, buttonLink }) {
  return (
    <section className="cta-section">
      <div className="cta-copy">
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
      <a className="button button-primary" href={buttonLink}>
        {buttonText}
      </a>
    </section>
  )
}

export default CTASection;
