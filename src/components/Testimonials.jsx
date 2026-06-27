const testimonials = [
  {
    quote: 'Chris took the time to understand my daughter’s strengths and worries. Now she enters math class feeling prepared and supported.',
    name: 'Megan, parent',
  },
  {
    quote: 'The lessons are practical and easy to follow. I feel more confident in science and I know how to study better.',
    name: 'Jordan, student',
  },
]

function Testimonials() {
  return (
    <section id="testimonials" className="section-block testimonials-section">
      <div className="section-intro">
        <p className="eyebrow">Testimonials</p>
        <h2>What families say</h2>
        <p>Placeholder feedback from students and parents who appreciate a thoughtful tutoring experience.</p>
      </div>
      <div className="testimonial-grid">
        {testimonials.map((item) => (
          <blockquote key={item.name} className="testimonial-card">
            <p>“{item.quote}”</p>
            <footer>{item.name}</footer>
          </blockquote>
        ))}
      </div>
    </section>
  )
}

export default Testimonials;
