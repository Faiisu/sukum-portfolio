import { education, languages, profileParagraphs, traits } from '../data/portfolio'

const AboutSection = () => (
  <section id="about" className="section about">
    <h2>About Me</h2>
    <div className="about-content">
      {profileParagraphs.map((text) => (
        <p key={text}>{text}</p>
      ))}
      <div className="trait-pills">
        {traits.map((trait) => (
          <span key={trait}>{trait}</span>
        ))}
      </div>
    </div>
    <div className="about-cards">
      <article className="info-card">
        <h3>Education</h3>
        <p className="info-title">{education.school}</p>
        <p>{education.degree}</p>
        <p>{education.timeline}</p>
        <p>{education.note}</p>
      </article>
      <article className="info-card">
        <h3>Languages</h3>
        <ul>
          {languages.map((lang) => (
            <li key={lang.name}>
              <strong>{lang.name}:</strong> {lang.level}
            </li>
          ))}
        </ul>
      </article>
    </div>
    <div className="owl-mark" aria-hidden="true" />
  </section>
)

export default AboutSection
