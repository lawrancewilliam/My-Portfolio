import { motion } from 'framer-motion';
import SectionHeading from '../ui/SectionHeading';
import { techStack } from '../../data/portfolio';

export default function TechStack() {
  return (
    <section id="techstack" className="section section--alt">
      <div className="container">
        <SectionHeading
          tag="Tech Stack"
          title="Tools & Technologies"
          subtitle="The stack I work with daily."
        />

        <div className="tech-float-grid">
          {techStack.map((tech, i) => (
            <motion.div
              key={tech}
              className="tech-float-card cursor-target"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              whileHover={{
                scale: 1.08,
                boxShadow: '0 0 30px rgba(212, 175, 55, 0.35)',
              }}
              style={{ animationDelay: `${i * 0.3}s` }}
            >
              {tech}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
