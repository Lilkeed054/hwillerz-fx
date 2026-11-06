import { MessageCircle, Phone, Instagram } from 'lucide-react'
import { navLinks, contacts, paymentMethods, socials } from '../data/site'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__grid">
          <div className="footer__brand">
            <a className="logo" href="#home">
              <span className="logo__mark" aria-hidden="true">H</span>
              <span className="logo__text">
                HWILLERZ <em>FX</em>
              </span>
            </a>
            <p className="footer__tag">Hwillerz FX Payment Agent</p>
            <p className="footer__blurb">
              Payment assistance for forex traders — deposits, withdrawals and
              cryptocurrency transactions, handled with clarity and care.
            </p>

            <div className="footer__socials">
              {socials.map((social) => (
                <a
                  key={social.handle}
                  className="social"
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                >
                  <Instagram size={16} />
                  {social.handle}
                </a>
              ))}
            </div>
          </div>

          <div className="footer__col">
            <h4>Quick Links</h4>
            <ul>
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer__col">
            <h4>Contact</h4>
            <ul>
              {contacts.map((contact) => (
                <li key={contact.phone}>
                  <a href={`tel:${contact.tel}`}>
                    <Phone size={14} /> {contact.phone}
                  </a>
                </li>
              ))}
              {contacts.map((contact) => (
                <li key={`wa-${contact.phone}`}>
                  <a href={contact.whatsapp} target="_blank" rel="noreferrer">
                    <MessageCircle size={14} /> WhatsApp {contact.phone}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer__col">
            <h4>Payment Methods</h4>
            <ul className="footer__methods">
              {paymentMethods.slice(0, 7).map((method) => (
                <li key={method.name}>{method.name}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="footer__bottom">
          <p className="footer__copy">
            © {year} Hwillerz FX Payment Agent. All rights reserved.
          </p>
          <p className="footer__disclaimer">
            <strong>Disclaimer:</strong> Hwillerz FX Payment Agent is an
            independent payment assistance service. We are not a bank, a
            licensed deposit-taking institution or a forex broker, and we do not
            provide investment advice or trading services. We do not hold client
            funds. All transactions are subject to confirmation and the
            requirements of the relevant payment provider. Trading forex and
            cryptocurrencies carries risk; always verify details directly with us
            before sending any funds.
          </p>
        </div>
      </div>
    </footer>
  )
}