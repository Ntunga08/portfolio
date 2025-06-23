import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaPython, 
  FaJs, 
  FaPhp, 
  FaReact, 
  FaDatabase, 
  FaGitAlt,
  FaDocker,
  FaAws,
  FaLinux,
  FaHtml5,
  FaCss3Alt,
  FaNodeJs
} from 'react-icons/fa';
import { SiDjango, SiMysql, SiPostgresql, SiMongodb } from 'react-icons/si';
import './Skills.css';

const Skills: React.FC = () => {
  const backendSkills = [
    { name: 'Python (Django)', icon: FaPython, level: 90, color: '#3776AB' },
    { name: 'JavaScript', icon: FaJs, level: 85, color: '#F7DF1E' },
    { name: 'PHP', icon: FaPhp, level: 80, color: '#777BB4' },
    { name: 'Node.js', icon: FaNodeJs, level: 75, color: '#339933' },
  ];

  const frontendSkills = [
    { name: 'React', icon: FaReact, level: 70, color: '#61DAFB' },
    { name: 'HTML5', icon: FaHtml5, level: 85, color: '#E34F26' },
    { name: 'CSS3', icon: FaCss3Alt, level: 80, color: '#1572B6' },
  ];

  const databaseSkills = [
    { name: 'MySQL', icon: SiMysql, level: 85, color: '#4479A1' },
    { name: 'PostgreSQL', icon: SiPostgresql, level: 80, color: '#336791' },
    { name: 'MongoDB', icon: SiMongodb, level: 70, color: '#47A248' },
  ];

  const toolsSkills = [
    { name: 'Git', icon: FaGitAlt, level: 90, color: '#F05032' },
    { name: 'Docker', icon: FaDocker, level: 75, color: '#2496ED' },
    { name: 'AWS', icon: FaAws, level: 70, color: '#FF9900' },
    { name: 'Linux', icon: FaLinux, level: 80, color: '#FCC624' },
  ];

  const SkillBar: React.FC<{ skill: any }> = ({ skill }) => {
    const IconComponent = skill.icon;
    return (
      <motion.div
        className="skill-item"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="skill-header">
          <div className="skill-icon" style={{ color: skill.color }}>
            <IconComponent />
          </div>
          <span className="skill-name">{skill.name}</span>
          <span className="skill-level">{skill.level}%</span>
        </div>
        <div className="skill-bar">
          <motion.div
            className="skill-progress"
            initial={{ width: 0 }}
            whileInView={{ width: `${skill.level}%` }}
            transition={{ duration: 1, delay: 0.2 }}
            viewport={{ once: true }}
            style={{ backgroundColor: skill.color }}
          />
        </div>
      </motion.div>
    );
  };

  return (
    <section id="skills" className="skills">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2>Skills & Technologies</h2>
          <p>My technical expertise and proficiency levels</p>
        </motion.div>

        <div className="skills-content">
          <motion.div
            className="skills-category"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3>Backend Development</h3>
            <div className="skills-grid">
              {backendSkills.map((skill, index) => (
                <SkillBar key={index} skill={skill} />
              ))}
            </div>
          </motion.div>

          <motion.div
            className="skills-category"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3>Frontend Development</h3>
            <div className="skills-grid">
              {frontendSkills.map((skill, index) => (
                <SkillBar key={index} skill={skill} />
              ))}
            </div>
          </motion.div>

          <motion.div
            className="skills-category"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <h3>Databases</h3>
            <div className="skills-grid">
              {databaseSkills.map((skill, index) => (
                <SkillBar key={index} skill={skill} />
              ))}
            </div>
          </motion.div>

          <motion.div
            className="skills-category"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            viewport={{ once: true }}
          >
            <h3>Tools & Platforms</h3>
            <div className="skills-grid">
              {toolsSkills.map((skill, index) => (
                <SkillBar key={index} skill={skill} />
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          className="skills-note"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          viewport={{ once: true }}
        >
          <p>
            <strong>Note:</strong> While I specialize in backend development, I also have solid 
            knowledge of frontend technologies. This allows me to create comprehensive full-stack 
            solutions and collaborate effectively with frontend teams.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills; 