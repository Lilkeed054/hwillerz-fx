import { useState } from 'react'
import {
  Phone,
  MessageCircle,
  Send,
  Info,
  Instagram,
  CheckCircle2,
  AlertTriangle,
} from 'lucide-react'
import Reveal from './Reveal'
import {
  contacts,
  socials,
  transactionTypes,
  formPaymentMethods,
  WHATSAPP_PRIMARY,
} from '../data/site'

const emptyForm = {
  fullName: '',
  broker: '',
  type: 'Deposit',
  method: '',
  amount: '',
  message: '',
}

/* Build a nicely formatted WhatsApp message from the form. */
function buildWhatsAppMessage(form) {
  const lines = [
    '*New Transaction Enquiry — Hwillerz FX*',
    '',
    `*Full Name:* ${form.fullName || '—'}`,
    `*Broker:* ${form.broker || '—'}`,
    `*Transaction Type:* ${form.type}`,
    `*Payment Method:* ${form.method || '—'}`,
    `*Amount:* ${form.amount || '—'}`,
  ]
  if (form.message.trim()) {
    lines.push('', `*Message:* ${form.message.trim()}`)
  }
  return lines.join('\n')
}

export default function Contact() {
  const [form, setForm] = useState(emptyForm)
  const [status, setStatus] = useState('idle') // idle | invalid | opened
  const [waUrl, setWaUrl] = useState('')

  const handleChange = (event) => {
    const { name, value } = event.target
    setForm((prev) => ({ ...prev, [name]: value }))
    if (status !== 'idle') setStatus('idle')
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    const required = ['fullName', 'broker', 'method', 'amount']
    const missing = required.some((key) => !form[key].trim())
    if (missing) {
      setStatus('invalid')
      return
    }

    const text = buildWhatsAppMessage(form)
    const url = `${WHATSAPP_PRIMARY}?text=${encodeURIComponent(text)}`
    setWaUrl(url)

    /* Opens the WhatsApp app on mobile, WhatsApp Web on desktop. */
    window.open(url, '_blank', 'noopener,noreferrer')
    setStatus('opened')
  }

  return (
    <section id="contact" className="section contact">
      <div className="container">
        <Reveal className="section-head">
          <span className="eyebrow">Get in touch</span>
          <h2 className="section-title">Contact Hwillerz FX</h2>
          <p className="section-sub">
            Message us on WhatsApp or give us a call — we&apos;ll guide you through
            your deposit or withdrawal.
          </p>
        </Reveal>

        <div className="contact__grid">
          <Reveal className="contact__info">
            <div className="contact-cards">
              {contacts.map((contact) => (
                <div className="contact-card" key={contact.phone}>
                  <div className="contact-card__top">
                    <Phone size={17} />
                    <span>{contact.label}</span>
                  </div>
                  <a className="contact-card__num" href={`tel:${contact.tel}`}>
                    {contact.phone}
                  </a>
                  <div className="contact-card__actions">
                    <a
                      className="btn btn--primary btn--sm"
                      href={contact.whatsapp}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <MessageCircle size={15} />
                      WhatsApp
                    </a>
                    <a className="btn btn--ghost btn--sm" href={`tel:${contact.tel}`}>
                      Call
                    </a>
                  </div>
                </div>
              ))}
            </div>

            <div className="contact__social">
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

            <div className="contact__note">
              <Info size={17} />
              <p>
                We never ask for your broker login password. Only share the
                details needed to guide your transaction.
              </p>
            </div>
          </Reveal>

          <Reveal delay={120} className="contact__form-wrap">
            <form className="form" onSubmit={handleSubmit} noValidate>
              <h3 className="form__title">Transaction enquiry</h3>
              <p className="form__sub">
                Fill in your details and we&apos;ll open WhatsApp with your
                enquiry ready to send — just tap Send in the chat.
              </p>

              <div className="form-grid">
                <div className="field">
                  <label htmlFor="fullName">Full Name</label>
                  <input
                    id="fullName"
                    name="fullName"
                    type="text"
                    value={form.fullName}
                    onChange={handleChange}
                    placeholder="Your full name"
                    autoComplete="name"
                    required
                  />
                </div>

                <div className="field">
                  <label htmlFor="broker">Broker Name</label>
                  <input
                    id="broker"
                    name="broker"
                    type="text"
                    value={form.broker}
                    onChange={handleChange}
                    placeholder="e.g. Exness, Deriv, Weltrade…"
                    required
                  />
                </div>

                <div className="field">
                  <label htmlFor="type">Transaction Type</label>
                  <select
                    id="type"
                    name="type"
                    value={form.type}
                    onChange={handleChange}
                  >
                    {transactionTypes.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="field">
                  <label htmlFor="method">Payment Method</label>
                  <select
                    id="method"
                    name="method"
                    value={form.method}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select a method</option>
                    {formPaymentMethods.map((method) => (
                      <option key={method} value={method}>
                        {method}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="field field--full">
                  <label htmlFor="amount">Amount</label>
                  <input
                    id="amount"
                    name="amount"
                    type="text"
                    value={form.amount}
                    onChange={handleChange}
                    placeholder="Amount and currency (e.g. 100 USD)"
                    inputMode="decimal"
                    required
                  />
                </div>

                <div className="field field--full">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Anything else your agent should know?"
                    rows={4}
                  />
                </div>
              </div>

              <button className="btn btn--primary btn--full" type="submit">
                <Send size={16} />
                Send via WhatsApp
              </button>

              {status === 'invalid' && (
                <p className="form__notice form__notice--error" role="alert">
                  <AlertTriangle size={15} />
                  Please fill in your name, broker, payment method and amount so
                  we can send the enquiry.
                </p>
              )}

              {status === 'opened' && (
                <p className="form__notice form__notice--success" role="status">
                  <CheckCircle2 size={15} />
                  <span>
                    WhatsApp is opening with your enquiry — press <strong>Send</strong>{' '}
                    in the chat to deliver it. If nothing opened,{' '}
                    <a
                      className="inline-link"
                      href={waUrl}
                      target="_blank"
                      rel="noreferrer"
                    >
                      tap here
                    </a>
                    .
                  </span>
                </p>
              )}

              <p className="form__disclaimer">
                This form does not process or confirm any payment. It simply
                prepares your message so your agent can reply directly on
                WhatsApp.
              </p>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  )
}