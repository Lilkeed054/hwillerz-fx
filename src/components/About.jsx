import { ArrowRight, Wallet, ArrowUpFromLine, Bitcoin, Check } from 'lucide-react'
import Reveal from './Reveal'

const highlights = [
  'Guidance on forex deposits and withdrawals',
  'Support with mobile money, cash agents and crypto',
  'Clear confirmation before any transaction',
  'Direct contact with your agent on WhatsApp',
]

export default function About() {
  return (
    <section id="about" className="section about">
      <div className="container about__inner">
        <Reveal className="about__visual">
          <div className="about-panel">
            <div className="about-tile">
              <span className="about-tile__icon">
                <Wallet size={19} />
              </span>
              <div>
                <strong>Deposits</strong>
                <p>Fund your trading account with guidance at every step.</p>
              </div>
            </div>

            <div className="about-tile">
              <span className="about-tile__icon">
                <ArrowUpFromLine size={19} />
              </span>
              <div>
                <strong>Withdrawals</strong>
                <p>Get assistance with the payout process from your broker.</p>
              </div>
            </div>

            <div className="about-tile">
              <span className="about-tile__icon">
                <Bitcoin size={19} />
              </span>
              <div>
                <strong>Cryptocurrency</strong>
                <p>Transactions across supported digital assets.</p>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={120} className="about__copy">
          <span className="eyebrow">About Hwillerz FX</span>
          <h2 className="section-title">
            A payment agent built around{' '}
            <span className="accent">trust and clarity.</span>
          </h2>
          <p className="section-sub">
            Hwillerz FX Payment Agent is a Zimbabwean payment assistance service
            for forex traders. We help clients fund and withdraw from their
            trading accounts by guiding them through the available local and
            digital payment channels — clearly, professionally and without the
            guesswork.
          </p>
          <p className="section-sub">
            We are not a broker and we do not provide investment advice. We
            simply make the payment side of trading easier to manage.
          </p>

          <ul className="checklist">
            {highlights.map((item) => (
              <li key={item}>
                <span className="checklist__tick">
                  <Check size={13} strokeWidth={3} />
                </span>
                {item}
              </li>
            ))}
          </ul>

          <a className="btn btn--ghost" href="#services">
            Explore our services
            <ArrowRight size={16} />
          </a>
        </Reveal>
      </div>
    </section>
  )
}