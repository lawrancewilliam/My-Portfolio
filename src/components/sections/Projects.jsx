import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import SectionHeading from '../ui/SectionHeading';
import ScrollStack, { ScrollStackItem } from '../react-bits/ScrollStack';
import { projects } from '../../data/portfolio';

export default function Projects() {
  return (
    <section id="projects" className="section section--alt projects-section">
      <div className="container">
        <SectionHeading
          tag="Projects"
          title="Featured Work"
          subtitle="Scroll to explore stacked project cards."
        />
      </div>

      <ScrollStack itemDistance={50} smoothness={0.12}>
        {projects.map((project) => (
          <ScrollStackItem
            key={project.title}
            itemClassName={project.compact ? 'scroll-stack-card--compact' : ''}
          >
            <div className={`project-card ${project.compact ? 'project-card--compact' : ''}`}>
              <div className="project-card__body">
                <h3 className="project-card__title">{project.title}</h3>
                <p className="project-card__desc">{project.description}</p>
                <div className="project-card__tech">
                  {project.tech.map((t) => (
                    <span key={t} className="skill-tag">{t}</span>
                  ))}
                </div>
                {!project.compact && (
                  <ul className="project-card__features">
                    {project.features.map((f) => (
                      <li key={f}>{f}</li>
                    ))}
                  </ul>
                )}
                {project.compact && (
                  <div className="project-card__features-compact">
                    {project.features.map((f) => (
                      <span key={f} className="skill-tag">{f}</span>
                    ))}
                  </div>
                )}
                {project.highlights && !project.compact && (
                  <ul className="project-card__highlights">
                    <li className="project-card__highlights-title">Key Highlights</li>
                    {project.highlights.map((h) => (
                      <li key={h}>{h}</li>
                    ))}
                  </ul>
                )}
                <div className="project-card__actions">
                  <a href={project.github} className="btn btn--ghost btn--sm cursor-target" target="_blank" rel="noreferrer">
                    <FontAwesomeIcon icon={faGithub} /> GitHub
                  </a>
                  <a href={project.demo} className="btn btn--primary btn--sm cursor-target" target="_blank" rel="noreferrer">
                    <FontAwesomeIcon icon={faExternalLinkAlt} /> Live Demo
                  </a>
                </div>
              </div>
            </div>
          </ScrollStackItem>
        ))}
      </ScrollStack>
    </section>
  );
}
