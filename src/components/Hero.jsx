import {
    ArrowRight,
    ArrowDownToLine,
    ArrowUpFromLine,
    Coins,
    ShieldCheck,
    Zap,
    Headset,
  } from 'lucide-react'
  import Reveal from './Reveal'
  
  export default function Hero() {
    return (
      <section id="home" className="hero">
        <div className="hero__grid-bg" aria-hidden="true" />
        <div className="hero__glow hero__glow--a" aria-hidden="true" />
        <div className="hero__glow hero__glow--b" aria-hidden="true" />
  
        <div className="container hero__inner">
          <div className="hero__copy">
            <Reveal>
              <span className="eyebrow">Forex Payment Agent · Zimbabwe</span>
            </Reveal>
  
            <Reveal delay={80}>
              <h1>
                Your Trading Payments, <span className="accent">Made Simple.</span>
              </h1>
            </Reveal>
  
            <Reveal delay={160}>
              <p className="hero__sub">
                Your trusted payment partner for convenient forex deposits and
                withdrawals. Get assistance with funding and withdrawing from
                supported trading brokers.
              </p>
            </Reveal>
  
            <Reveal delay={240}>
              <div className="hero__cta">
                <a className="btn btn--primary" href="#contact">
                  Make a Deposit
                  <ArrowRight size={17} />
                </a>
                <a className="btn btn--ghost" href="#contact">
                  Request a Withdrawal
                </a>
              </div>
            </Reveal>
  
            <Reveal delay={320}>
              <ul className="hero__trust">
                <li>
                  <ShieldCheck size={16} /> Guided, secure transactions
                </li>
                <li>
                  <Zap size={16} /> Fast, direct responses
                </li>
                <li>
                  <Headset size={16} /> Personal agent support
                </li>
              </ul>
            </Reveal>
          </div>
  
          <Reveal delay={200} className="hero__visual">
            <div className="hero-card">
              <div className="hero-card__head">
                <div>
                  <small>Payment assistance</small>
                  <strong>Deposits &amp; Withdrawals</strong>
                </div>
                <span className="pill">Preview</span>
              </div>
  
              <div className="spark" aria-hidden="true">
                <svg viewBox="0 0 320 120" preserveAspectRatio="none">
                  <defs>
                    <linearGradient id="sparkFill" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#D4AF62" stopOpacity="0.32" />
                      <stop offset="100%" stopColor="#D4AF62" stopOpacity="0" />
                    </linearGradient>
                    <linearGradient id="sparkLine" x1="0" y1="0" x2="1" y2="0">
                      <stop offset="0%" stopColor="#A9832F" />
                      <stop offset="100%" stopColor="#EBCF96" />
                    </linearGradient>
                  </defs>
                  <path
                    d="M0,96 L30,82 L60,88 L90,64 L120,72 L150,50 L180,58 L210,38 L240,46 L270,26 L300,32 L320,18 L320,120 L0,120 Z"
                    fill="url(#sparkFill)"
                  />
                  <path
                    className="spark__line"
                    d="M0,96 L30,82 L60,88 L90,64 L120,72 L150,50 L180,58 L210,38 L240,46 L270,26 L300,32 L320,18"
                    fill="none"
                    stroke="url(#sparkLine)"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
  
              <div className="hero-card__rows">
                <div className="mock-row">
                  <span className="mock-icon mock-icon--gold">
                    <ArrowDownToLine size={15} />
                  </span>
                  <div className="mock-text">
                    <strong>Deposit</strong>
                    <small>Broker account funding</small>
                  </div>
                  <span className="mock-tag">EcoCash</span>
                </div>
  
                <div className="mock-row">
                  <span className="mock-icon mock-icon--gold">
                    <ArrowUpFromLine size={15} />
                  </span>
                  <div className="mock-text">
                    <strong>Withdrawal</strong>
                    <small>Crypto payout, cash in hand</small>
                  </div>
                  <span className="mock-tag">Crypto</span>
                </div>
  
                <div className="mock-row">
                  <span className="mock-icon">
                    <Coins size={15} />
                  </span>
                  <div className="mock-text">
                    <strong>Cryptocurrency</strong>
                    <small>BTC · ETH · USDT</small>
                  </div>
                  <span className="mock-tag">Crypto</span>
                </div>
              </div>
  
              <p className="hero-card__note">
                Illustrative preview only — not a live transaction.
              </p>
            </div>
          </Reveal>
        </div>
      </section>
    )
  }