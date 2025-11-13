import { contactInfo } from '../data/portfolio'

const ContactSection = () => (
  <section id="contact" className="section contact">
    <div className="section-heading">
      <h2>Let&apos;s Connect</h2>
      {/* <p>Ready to collaborate on your next project?</p> */}
    </div>
    <div className="contact-grid">
      <div>
        <h3>Get in touch</h3>
        <ul>
          <li>
            <span>Phone</span>
            <a href={`tel:${contactInfo.phone}`}>{contactInfo.phone}</a>
          </li>
          <li>
            <span>Email</span>
            <a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a>
          </li>
          <li>
            <span>Location</span>
            <p>{contactInfo.location}</p>
          </li>
        </ul>
      </div>
      <div>
        <h3>Opportunities</h3>
        <ul>
          <li>Internships &amp; contract roles</li>
          <li>AI / ML collaborations</li>
          <li>Research partnerships</li>
        </ul>
      </div>
    </div>
  </section>
)

export default ContactSection
