import { contact } from '../data';
import { Github, Linkedin, Mail } from './Icons';

export function Contact() {
  return (
    <section className="section shell" id="contact">
      <h2 className="section-label">Contact</h2>
      <p className="contact-line">
        Open to advice, internships, or just talking with other people learning this.
      </p>
      <div className="contact-links">
        <a className="contact-link" href={`mailto:${contact.email}`}>
          <Mail />
          Email
        </a>
        <a className="contact-link" href={contact.github} target="_blank" rel="noreferrer">
          <Github />
          GitHub
        </a>
        <a className="contact-link" href={contact.linkedin} target="_blank" rel="noreferrer">
          <Linkedin />
          LinkedIn
        </a>
      </div>
    </section>
  );
}
