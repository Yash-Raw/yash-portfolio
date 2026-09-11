import { projects } from '../data';
import { ArrowUpRight } from './Icons';

export function Work() {
  return (
    <section className="section shell" id="work">
      <h2 className="section-label">Work</h2>
      <ul className="work-list">
        {projects.map((project) => (
          <li className="work-row" key={project.name}>
            <span className="work-name">{project.name}</span>
            <span className="work-blurb">{project.blurb}</span>
            {project.links.length > 0 ? (
              <span className="work-links">
                {project.links.map((link) => (
                  <a
                    className="work-link"
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {link.label}
                    <ArrowUpRight />
                  </a>
                ))}
              </span>
            ) : (
              <span className="work-status">in progress</span>
            )}
          </li>
        ))}
      </ul>
    </section>
  );
}
