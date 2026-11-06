import { Landmark, MessageCircle, Check } from 'lucide-react'
import Reveal from './Reveal'
import { brokers, WHATSAPP_PRIMARY } from '../data/site'

export default function BrokerSupport() {
  return (
    <section id="brokers" className="section brokers">
      <div className="container">
        <Reveal className="section-head">
          <span className="eyebrow">Broker support</span>
          <h2 className="section-title">Transactions across all brokers</h2>
          <p className="section-sub">
            We assist with deposits and withdrawals for <strong>any</strong> forex
            broker. Below are the brokers clients most often ask for — if yours
            isn&apos;t listed, it makes no difference, just send us the name and
            we&apos;ll take it from there.
          </p>
        </Reveal>

        <div className="broker-grid">
          {brokers.map((broker, index) => (
            <Reveal key={broker.id} delay={index * 80}>
              <article className="broker">
                <span className="broker__mark">
                  <Landmark size={19} />
                </span>
                <h3>{broker.name}</h3>
                <p>Deposits and withdrawals assisted.</p>
                <span className="broker__status broker__status--ok">
                  <Check size={11} strokeWidth={3} /> {broker.status}
                </span>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={140} className="brokers__cta">
          <p>
            <strong>…and every other broker.</strong> Derivi, XM, FBS, Octa,
            HotForex, PU Prime — just ask.
          </p>
          <a
            className="btn btn--primary"
            href={WHATSAPP_PRIMARY}
            target="_blank"
            rel="noreferrer"
          >
            <MessageCircle size={17} />
            Confirm your broker
          </a>
        </Reveal>
      </div>
    </section>
  )
}