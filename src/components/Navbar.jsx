import { useEffect, useState } from 'react'
import { Menu, X, MessageCircle } from 'lucide-react'
import { navLinks, WHATSAPP_PRIMARY } from '../data/site'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`nav ${scrolled ? 'is-scrolled' : ''}`}>
      <div className="nav__inner">
        <a className="logo" href="#home" onClick={() => setOpen(false)}>
          <span className="logo__mark" aria-hidden="true">H</span>
          <span className="logo__text">
            HWILLERZ <em>FX</em>
          </span>
        </a>

        <nav className="nav__links" aria-label="Primary">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>

        <div className="nav__actions">
          <a
            className="btn btn--primary btn--sm nav__cta"
            href={WHATSAPP_PRIMARY}
            target="_blank"
            rel="noreferrer"
          >
            <MessageCircle size={16} />
            Contact Agent
          </a>
          <button
            className="nav__toggle"
            type="button"
            onClick={() => setOpen((o) => !o)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      <div className={`nav__mobile ${open ? 'is-open' : ''}`}>
        {navLinks.map((link) => (
          <a key={link.href} href={link.href} onClick={() => setOpen(false)}>
            {link.label}
          </a>
        ))}
        <a
          className="btn btn--primary"
          href={WHATSAPP_PRIMARY}
          target="_blank"
          rel="noreferrer"
          onClick={() => setOpen(false)}
        >
          <MessageCircle size={16} />
          Contact Agent on WhatsApp
        </a>
      </div>
    </header>
  )
}