import Reveal from './Reveal'
import { steps } from '../data/site'

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="section how">
      <div className="container">
        <Reveal className="section-head">
          <span className="eyebrow">Simple process</span>
          <h2 className="section-title">How It Works</h2>
          <p className="section-sub">
            Three straightforward steps — no complicated forms, no guesswork.
          </p>
        </Reveal>

        <div className="steps">
          {steps.map((step, index) => (
            <Reveal key={step.title} delay={index * 120} className="step">
              <span className="step__num">0{index + 1}</span>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}