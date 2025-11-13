import { skillColumns } from '../data/portfolio'

const SkillsSection = () => (
  <section id="skills" className="section skills">
    <div className="section-heading">
      <h2>Skills &amp; Technologies</h2>
      <p>My technical skills for building modern applications.</p>
    </div>
    <div className="skill-grid">
      {skillColumns.map((column) => (
        <article key={column.title} className="skill-card">
          <h3>{column.title}</h3>
          <ul>
            {column.items.map((skill) => (
              <li key={skill}>{skill}</li>
            ))}
          </ul>
        </article>
      ))}
    </div>
  </section>
)

export default SkillsSection
