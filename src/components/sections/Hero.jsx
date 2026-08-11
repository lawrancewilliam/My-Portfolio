import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faReact, faNodeJs, faJs, faGithub, faLinkedin,
} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faDownload, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import DotField from '../react-bits/DotField';
import { personal, heroRoles } from '../../data/portfolio';

const floatingIcons = [
  { icon: faReact, x: '12%', y: '20%', delay: 0 },
  { icon: faNodeJs, x: '85%', y: '25%', delay: 0.5 },
  { icon: faJs, x: '78%', y: '70%', delay: 1 },
  { icon: faReact, x: '8%', y: '65%', delay: 1.5 },
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [display, setDisplay] = useState('');
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = heroRoles[roleIndex];
    let timeout;

    if (!deleting && display.length < current.length) {
      timeout = setTimeout(() => setDisplay(current.slice(0, display.length + 1)), 60);
    } else if (!deleting && display.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), 2000);
    } else if (deleting && display.length > 0) {
      timeout = setTimeout(() => setDisplay(display.slice(0, -1)), 35);
    } else if (deleting && display.length === 0) {
      setDeleting(false);
      setRoleIndex((i) => (i + 1) % heroRoles.length);
    }

    return () => clearTimeout(timeout);
  }, [display, deleting, roleIndex]);

  return (
    <section id="hero" className="hero" aria-label="Introduction">
      <div className="hero__dotfield" aria-hidden="true">
        <DotField
          baseColor="#2a2210"
          activeColor="#d4af37"
          dotSize={4}
          gap={26}
          proximity={150}
        />
      </div>

      <div className="hero__orbs" aria-hidden="true">
        <div className="hero__orb hero__orb--accent" />
        <div className="hero__orb hero__orb--gold" />
      </div>

      {floatingIcons.map(({ icon, x, y, delay }, i) => (
        <motion.div
          key={i}
          className="hero__float-icon"
          style={{ left: x, top: y }}
          animate={{ y: [0, -15, 0], opacity: [0.3, 0.7, 0.3] }}
          transition={{ duration: 4, repeat: Infinity, delay, ease: 'easeInOut' }}
          aria-hidden="true"
        >
          <FontAwesomeIcon icon={icon} />
        </motion.div>
      ))}

      <div className="hero__content">
        <motion.p
          className="hero__greeting"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Hi, I&apos;m
        </motion.p>

        <motion.h1
          className="hero__name"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          {personal.name}
        </motion.h1>

        <motion.p
          className="hero__subtitle"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {personal.title}
        </motion.p>

        <motion.div
          className="hero__typing"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          aria-live="polite"
        >
          <span className="hero__typing-text">{display}</span>
          <span className="hero__cursor" aria-hidden="true" />
        </motion.div>

        <motion.div
          className="hero__actions"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <a href="#projects" className="btn btn--primary cursor-target">
            View Projects <FontAwesomeIcon icon={faArrowRight} />
          </a>
          <a href={personal.resumeUrl} className="btn btn--ghost cursor-target" download>
            <FontAwesomeIcon icon={faDownload} /> Download Resume
          </a>
          <a href="#contact" className="btn btn--outline cursor-target">
            Contact Me
          </a>
        </motion.div>

        <motion.div
          className="hero__socials"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
        >
          <a href={personal.linkedin} target="_blank" rel="noreferrer" className="cursor-target" aria-label="LinkedIn">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a href={personal.github} target="_blank" rel="noreferrer" className="cursor-target" aria-label="GitHub">
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a href={`mailto:${personal.email}`} className="cursor-target" aria-label="Email">
            <FontAwesomeIcon icon={faEnvelope} />
          </a>
        </motion.div>
      </div>

      <motion.div
        className="hero__scroll"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        aria-hidden="true"
      >
        <span>Scroll</span>
        <div className="hero__scroll-line" />
      </motion.div>
    </section>
  );
}
