import { motion } from 'framer-motion';
import SectionHeading from '../ui/SectionHeading';
import BorderGlow from '../react-bits/BorderGlow';
import { education } from '../../data/portfolio';

export default function Education() {
  return (
    <section id="education" className="section education-section">
      <div className="education-section__glow" aria-hidden="true" />
      <div className="container">
        <SectionHeading
          tag="Education"
          title="Academic Background"
          subtitle="Building a strong foundation in computer science."
        />

        <div className="edu-timeline">
          {education.map((item, i) => (
            <motion.div
              key={item.degree}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            >
              <BorderGlow
                className="edu-border-glow cursor-target"
                glowColor="45 90% 55%"
                backgroundColor="#0A0A0A"
                colors={['#d4af37', '#f5d060', '#ffd700']}
                glowIntensity={1.2}
                fillOpacity={0.45}
              >
                <span className="edu-card__qual">{item.qualification}</span>
                <span className="edu-card__years">{item.duration}</span>
                <h3 className="edu-card__degree">{item.degree}</h3>
                <p className="edu-card__college">{item.institution}</p>
                <div className="edu-card__learning">
                  <span className="edu-card__learning-label">Key Learning</span>
                  <div className="edu-card__coursework">
                    {item.keyLearning.map((c) => (
                      <span key={c} className="skill-tag">{c}</span>
                    ))}
                  </div>
                </div>
              </BorderGlow>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
