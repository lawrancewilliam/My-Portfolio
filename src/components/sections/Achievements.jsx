import { motion } from 'framer-motion';
import SectionHeading from '../ui/SectionHeading';
import { achievements } from '../../data/portfolio';

export default function Achievements() {
  return (
    <section id="achievements" className="section section--alt">
      <div className="container">
        <SectionHeading
          tag="Achievements"
          title="Milestones"
          subtitle="Key accomplishments along my development journey."
        />

        <div className="achievements-grid">
          {achievements.map((item, i) => (
            <motion.div
              key={item.title}
              className={`achievement-card glass-card cursor-target achievement-card--${i + 1}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{
                y: -8,
                boxShadow: '0 0 40px rgba(212, 175, 55, 0.25)',
              }}
            >
              <div className="achievement-card__glow" aria-hidden="true" />
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
