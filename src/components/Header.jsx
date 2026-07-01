import { NavLink } from 'react-router-dom'

const links = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About Chris' },
  { to: '/subjects', label: 'Subjects' },
  { to: '/services', label: 'Tutoring' },
  { to: '/contact', label: 'Contact' },
]

function Header() {
  return (
    <header className="site-header">
      <div className="brand-block">
        <span className="eyebrow">Learn STEM With Chris</span>
        <strong className="brand-title">Clear STEM tutoring for confidence, grades, and real understanding</strong>
      </div>
      <nav aria-label="Primary navigation">
        <ul className="nav-list">
          {links.map((link) => (
            <li key={link.to}>
              <NavLink
                to={link.to}
                className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}

export default Header;
