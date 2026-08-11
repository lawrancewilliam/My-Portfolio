import { useState, lazy, Suspense } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import TargetCursor from './components/react-bits/TargetCursor';
import DotField from './components/react-bits/DotField';
import Navbar from './components/sections/Navbar';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Skills from './components/sections/Skills';
import Experience from './components/sections/Experience';
import Certifications from './components/sections/Certifications';
import Achievements from './components/sections/Achievements';
import Education from './components/sections/Education';
import TechStack from './components/sections/TechStack';
import Contact from './components/sections/Contact';
import Footer from './components/sections/Footer';

const Projects = lazy(() => import('./components/sections/Projects'));

export default function App() {
  const [revealed, setRevealed] = useState(false);

  return (
    <>
      <AnimatePresence mode="wait">
        {!revealed && (
          <motion.div
            key="landing"
            className="landing-overlay"
            initial={{ opacity: 1 }}
            exit={{
              opacity: 0,
              scale: 1.05,
              filter: 'blur(10px)',
              transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
            }}
            onClick={() => setRevealed(true)}
          >
            <div className="landing-overlay__dotfield" aria-hidden="true">
              <DotField
                baseColor="#2a2210"
                activeColor="#d4af37"
                dotSize={4}
                gap={26}
                proximity={150}
              />
            </div>
            <div className="landing-overlay__content">
              <motion.h1
                className="landing-overlay__name"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              >
                LAWRANCE WILLIAM Y
              </motion.h1>
              <motion.p
                className="landing-overlay__prompt"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.8 }}
                transition={{ delay: 0.6, duration: 0.8 }}
              >
                Click anywhere to explore
              </motion.p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {revealed && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <div className="grid-overlay" aria-hidden="true" />
          <TargetCursor cursorColor="#d4af37" cursorColorOnTarget="#f5d060" />

          <Navbar />
          <main>
            <Hero />
            <About />
            <Skills />
            <Experience />
            <Suspense fallback={<div className="section-loading">Loading projects…</div>}>
              <Projects />
            </Suspense>
            <Certifications />
            <Achievements />
            <Education />
            <TechStack />
            <Contact />
          </main>
          <Footer />
        </motion.div>
      )}
    </>
  );
}
