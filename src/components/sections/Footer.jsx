import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { personal } from '../../data/portfolio';

export default function Footer() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <span className="footer__logo">{personal.brand}<span className="text-gradient">.dev</span></span>
          <p className="footer__copy">
            &copy; {new Date().getFullYear()} {personal.fullName}. All rights reserved.
          </p>
          <p className="footer__built">Built with React + Vite</p>
        </div>

        <div className="footer__socials">
          <a href={personal.linkedin} target="_blank" rel="noreferrer" className="cursor-target" aria-label="LinkedIn">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a href={personal.github} target="_blank" rel="noreferrer" className="cursor-target" aria-label="GitHub">
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a href={`mailto:${personal.email}`} className="cursor-target" aria-label="Email">
            <FontAwesomeIcon icon={faEnvelope} />
          </a>
        </div>

        <button
          type="button"
          className="footer__top cursor-target"
          onClick={scrollTop}
          aria-label="Back to top"
        >
          <FontAwesomeIcon icon={faArrowUp} />
        </button>
      </div>
    </footer>
  );
}
