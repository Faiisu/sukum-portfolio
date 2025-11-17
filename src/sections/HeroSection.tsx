import { contactInfo } from '../data/portfolio'

const HeroSection = () => (
  <header className="hero" id="home">
    <p className="hero-kicker">Computer Engineering Student</p>
    <h1>Hello, I&apos;m Sukum.</h1>
    {/* <p className="hero-subtitle">
      I build AI and software solutions that connect deep learning fundamentals with practical systems that improve how
      people work and learn.
    </p> */}
    <div className="hero-cta">
      <a className="primary" href={`mailto:${contactInfo.email}`}>
        Get in touch
      </a>
      <a className="outline" href="#projects">
        View work
      </a>
    </div>
    <div className="hero-contact">
      <span>{contactInfo.email}</span>
    </div>
  </header>
)

export default HeroSection
