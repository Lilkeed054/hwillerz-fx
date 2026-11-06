import { Wallet, ArrowUpFromLine, Bitcoin, LifeBuoy } from 'lucide-react'
import Reveal from './Reveal'
import { services } from '../data/site'

const icons = { Wallet, ArrowUpFromLine, Bitcoin, LifeBuoy }

export default function Services() {
  return (
    <section id="services" className="section services">
      <div className="container">
        <Reveal className="section-head">
          <span className="eyebrow">What we do</span>
          <h2 className="section-title">Services</h2>
          <p className="section-sub">
            Practical payment support for traders — handled personally, from
            first message to final confirmation.
          </p>
        </Reveal>

        <div className="cards">
          {services.map((service, index) => {
            const Icon = icons[service.icon] || Wallet
            return (
              <Reveal key={service.title} delay={index * 90}>
                <article className="card">
                  <span className="card__icon">
                    <Icon size={22} />
                  </span>
                  <h3>{service.title}</h3>
                  <p>{service.text}</p>
                </article>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}