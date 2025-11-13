import './App.css'
import AboutSection from './sections/AboutSection'
import ContactSection from './sections/ContactSection'
import HeroSection from './sections/HeroSection'
import ProjectsSection from './sections/ProjectsSection'
import SkillsSection from './sections/SkillsSection'

function App() {
  return (
    <div className="app galaxy">
      <nav className="site-nav">
        <a className="logo" href="#home">
          AI & Software
        </a>
        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        </div>
        <div className="nav-actions">
          <a className="resume-pill" href="/sukum_resume.pdf" download aria-label="Download resume">
            Resume
          </a>
          <a className="nav-icon" href="https://github.com/Faiisu" target="_blank" rel="noreferrer" aria-label="GitHub profile">
            GitHub
          </a>
        </div>
      </nav>

      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <SkillsSection />
      <ContactSection />

      <footer className="site-footer">
        <p>&lt;Dev/&gt;</p>
        <p>&copy; {new Date().getFullYear()} Sukum Decah. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default App
