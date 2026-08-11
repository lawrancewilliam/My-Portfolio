import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { navLinks, personal } from '../../data/portfolio';
import { useScrollDirection, useActiveSection } from '../../hooks/useScroll';

export default function Navbar() {
  const visible = useScrollDirection();
  const active = useActiveSection(navLinks.map((l) => l.id));
  const [open, setOpen] = useState(false);

  const close = () => setOpen(false);

  return (
    <motion.nav
      className="navbar"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: visible ? 0 : -120, opacity: visible ? 1 : 0 }}
      transition={{ duration: 0.4, ease: 'easeInOut' }}
      aria-label="Main navigation"
    >
      <div className="navbar__inner">
        <a href="#hero" className="navbar__logo cursor-target" aria-label="Home">
          {personal.brand}<span className="text-gradient">.dev</span>
        </a>

        <button
          type="button"
          className="navbar__toggle cursor-target"
          onClick={() => setOpen((o) => !o)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          <FontAwesomeIcon icon={open ? faTimes : faBars} />
        </button>

        <ul className="navbar__links" role="list">
          {navLinks.map(({ id, label }) => (
            <li key={id}>
              <a
                href={`#${id}`}
                className={`navbar__link cursor-target ${active === id ? 'active' : ''}`}
                onClick={close}
              >
                {label}
                {active === id && <span className="navbar__indicator" />}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <AnimatePresence>
        {open && (
          <motion.ul
            className="navbar__mobile"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            role="list"
          >
            {navLinks.map(({ id, label }) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  className={`cursor-target ${active === id ? 'active' : ''}`}
                  style={active === id ? { color: 'var(--accent)' } : {}}
                  onClick={close}
                >
                  {label}
                </a>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
