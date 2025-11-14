import { useRef } from 'react'
import { projects } from '../data/portfolio'

const ProjectsSection = () => {
  const sliderRef = useRef<HTMLDivElement>(null)

  const scrollSlider = (direction: 'prev' | 'next') => {
    const container = sliderRef.current
    if (!container) return
    const offset = direction === 'next' ? 360 : -360
    container.scrollBy({ left: offset, behavior: 'smooth' })
  }

  return (
    <section id="projects" className="section projects">
      <div className="section-heading">
        <h2>Featured Projects</h2>
        <p>Here are some recent builds showcasing my technical range.</p>
      </div>
      <div className="slider">
        <div className="slider-track" ref={sliderRef}>
          {projects.map((project) => (
            <article key={project.title} className="project-card">
              {/* <div className="project-media">
                <img src={project.image} alt={`${project.title} mockup`} loading="lazy" />
              </div> */}
              <div className="card-top">
                <span className="project-stack">{project.role}</span>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </div>
              <div className="project-focus">{project.focus}</div>
              <a href={project.link} target="_blank" rel="noreferrer">
                View case -&gt;
              </a>
            </article>
          ))}
        </div>
        <div className="slider-controls">
          <button className="slider-btn" onClick={() => scrollSlider('prev')} aria-label="Previous project">
            {'<'}
          </button>
          <button className="slider-btn" onClick={() => scrollSlider('next')} aria-label="Next project">
            {'>'}
          </button>
        </div>
      </div>
    </section>
  )
}

export default ProjectsSection
