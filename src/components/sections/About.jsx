import { motion } from 'framer-motion';
import BentoGrid, { BentoCard } from '../react-bits/MagicBento';
import SectionHeading from '../ui/SectionHeading';
import { aboutCards, stats } from '../../data/portfolio';

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <SectionHeading
          tag="About"
          title="Crafting Digital Experiences"
          subtitle="A passionate MERN developer focused on building immersive, performant web applications."
        />

        <BentoGrid glowColor="212, 175, 55">
          {aboutCards.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
            >
              <BentoCard {...card} glowColor="245, 208, 96" />
            </motion.div>
          ))}
        </BentoGrid>

        <div className="stats-grid">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              className="stat-card cursor-target"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -6, boxShadow: '0 0 30px rgba(212,175,55,0.3)' }}
            >
              <span className="stat-card__value">{stat.value}</span>
              <span className="stat-card__label">{stat.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
