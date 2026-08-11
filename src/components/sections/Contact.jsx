import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faEnvelope, faMapMarkerAlt,
} from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import SectionHeading from '../ui/SectionHeading';
import { personal } from '../../data/portfolio';

export default function Contact() {
  return (
    <section id="contact" className="section">
      <div className="container">
        <SectionHeading
          tag="Contact"
          title="Let's Build Something"
          subtitle="Feel free to reach out to me directly through any of these channels."
        />

        <div className="contact-grid">
          {[
            { icon: faEnvelope, label: 'Email', value: personal.email, href: `mailto:${personal.email}` },
            { icon: faLinkedin, label: 'LinkedIn', value: 'Connect on LinkedIn', href: personal.linkedin },
            { icon: faGithub, label: 'GitHub', value: 'View my repos', href: personal.github },
            { icon: faMapMarkerAlt, label: 'Location', value: personal.location, href: null },
          ].map(({ icon, label, value, href }, i) => {
            const inner = (
              <motion.div
                className="contact-info__card glass-card cursor-target"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                whileHover={{ y: -5, boxShadow: '0 0 30px rgba(212, 175, 55, 0.2)' }}
              >
                <div className="contact-info__icon">
                  <FontAwesomeIcon icon={icon} />
                </div>
                <div>
                  <span className="contact-info__label">{label}</span>
                  <span className="contact-info__value">{value}</span>
                </div>
              </motion.div>
            );
            return href
              ? <a key={label} href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noreferrer" className="contact-info__link">{inner}</a>
              : <div key={label}>{inner}</div>;
          })}
        </div>
      </div>
    </section>
  );
}
