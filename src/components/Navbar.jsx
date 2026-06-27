function Navbar() {
  const links = [
    { href: '#home', label: 'Home' },
    { href: '#why-families', label: 'Why Families' },
    { href: '#subjects', label: 'Subjects' },
    { href: '#how-it-works', label: 'How It Works' },
    { href: '#about', label: 'About' },
    { href: '#testimonials', label: 'Testimonials' },
    { href: '#consultation', label: 'Consultation' },
  ]

  return (
    <header className="site-nav">
      <div className="nav-brand">
        <span className="eyebrow">Learn STEM With Chris</span>
        <strong className="brand-title">Warm, encouraging support for every learner</strong>
      </div>
      <nav aria-label="Primary navigation">
        <ul className="nav-list">
          {links.map((link) => (
            <li key={link.href}>
              <a href={link.href}>{link.label}</a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}

export default Navbar;
