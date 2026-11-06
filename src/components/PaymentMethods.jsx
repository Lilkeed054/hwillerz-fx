import Reveal from './Reveal'
import { paymentMethods } from '../data/site'

export default function PaymentMethods() {
  return (
    <section id="payments" className="section payments">
      <div className="container">
        <Reveal className="section-head">
          <span className="eyebrow">Accepted channels</span>
          <h2 className="section-title">Payment Methods</h2>
          <p className="section-sub">
            Local mobile money, cash agents and major cryptocurrencies — with
            your agent confirming the right option for each transaction.
          </p>
        </Reveal>

        <div className="pay-grid">
          {paymentMethods.map((method, index) => (
            <Reveal key={method.name} delay={index * 60}>
              <div className="pay" style={{ '--brand': method.color }}>
                <span className="pay__badge" aria-hidden="true">
                  {method.mark}
                </span>
                <div className="pay__text">
                  <strong>{method.name}</strong>
                  <small>{method.note}</small>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={120}>
          <p className="payments__note">
            Availability of each method can change. Always confirm the current
            channel and instructions with your agent before sending funds.
          </p>
        </Reveal>
      </div>
    </section>
  )
}