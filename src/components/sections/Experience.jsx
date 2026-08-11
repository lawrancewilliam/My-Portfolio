import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faClock, faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import SectionHeading from '../ui/SectionHeading';
import { experience } from '../../data/portfolio';

export default function Experience() {
  return (
    <section id="experience" className="section">
      <div className="container">
        <SectionHeading
          tag="Experience"
          title="Professional Journey"
          subtitle="Hands-on experience building real-world MERN and AI-powered applications."
        />

        <div className="timeline">
          {experience.map((item, i) => (
            <motion.div
              key={`${item.period}-${item.role}`}
              className="timeline__item"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
            >
              <div className="timeline__dot" aria-hidden="true" />
              <div className="timeline__card glass-card cursor-target">
                <div className="timeline__header">
                  <div>
                    <span className="timeline__period">{item.period}</span>
                    <h3 className="timeline__role">
                      <FontAwesomeIcon icon={item.tags ? faGraduationCap : faBriefcase} />
                      {' '}{item.role}
                    </h3>
                    <p className="timeline__company">{item.company}</p>
                  </div>
                  <span className="timeline__badge">
                    <FontAwesomeIcon icon={faClock} /> {item.duration}
                  </span>
                </div>

                {item.tags ? (
                  <div className="timeline__tags">
                    {item.tags.map((tag) => (
                      <span key={tag} className="skill-tag timeline__tag">
                        ▶ {tag}
                      </span>
                    ))}
                  </div>
                ) : (
                  <ul className="timeline__highlights">
                    {item.highlights.map((h) => (
                      <li key={h}>{h}</li>
                    ))}
                  </ul>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
