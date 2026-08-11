import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faReact, faHtml5, faCss3Alt, faBootstrap, faNodeJs, faJs, faJava,
  faPython, faGitAlt, faGithub,
} from '@fortawesome/free-brands-svg-icons';
import { faDatabase, faCode, faPassport, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import SectionHeading from '../ui/SectionHeading';
import ChromaGrid from '../react-bits/ChromaGrid';
import { skillCategories } from '../../data/portfolio';

const iconMap = {
  react: faReact,
  html: faHtml5,
  css: faCss3Alt,
  bootstrap: faBootstrap,
  tailwind: faCss3Alt,
  node: faNodeJs,
  express: faCode,
  passport: faPassport,
  mongo: faDatabase,
  mysql: faDatabase,
  js: faJs,
  java: faJava,
  python: faPython,
  git: faGitAlt,
  github: faGithub,
  vscode: faCode,
  postman: faEnvelope,
};

export default function Skills() {
  return (
    <section id="skills" className="section section--alt">
      <div className="container">
        <SectionHeading
          tag="Skills"
          title="Technical Arsenal"
          subtitle="Technologies I use to build scalable, modern applications."
        />

        <div className="chroma-skills-wrapper">
          {skillCategories.map((cat) => {
            const items = cat.skills.map((skill) => ({
              title: skill.name,
              category: cat.label,
              borderColor: cat.color,
              gradient: cat.gradient,
              icon: <FontAwesomeIcon icon={iconMap[skill.icon] || faCode} />,
            }));

            return (
              <div
                key={cat.id}
                className={`chroma-category ${cat.center ? 'chroma-category--center' : ''}`}
              >
                <span className="chroma-category__label">{cat.label}</span>
                <ChromaGrid
                  items={items}
                  className={cat.center ? 'chroma-grid--center' : ''}
                  radius={280}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
