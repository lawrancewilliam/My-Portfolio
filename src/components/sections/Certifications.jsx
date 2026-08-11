import { motion } from 'framer-motion';
import BentoGrid, { BentoCard } from '../react-bits/MagicBento';
import SectionHeading from '../ui/SectionHeading';
import { certifications } from '../../data/portfolio';

export default function Certifications() {
  return (
    <section id="certifications" className="section">
      <div className="container">
        <SectionHeading
          tag="Certifications"
          title="Credentials & Achievements"
          subtitle="Validated skills and professional certifications."
        />

        <BentoGrid glowColor="212, 175, 55">
          {certifications.map((cert, i) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07 }}
            >
              <BentoCard {...cert} glowColor="212, 175, 55" />
            </motion.div>
          ))}
        </BentoGrid>
      </div>
    </section>
  );
}
