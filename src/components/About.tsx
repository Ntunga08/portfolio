import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaServer, FaDatabase, FaCogs, FaUser, FaUpload, FaCamera } from 'react-icons/fa';
import './About.css';

const About: React.FC = () => {
  const [profileImage, setProfileImage] = useState<string | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const skills = [
    { icon: <FaCode />, title: 'Backend Development', description: 'Building robust APIs and server-side logic' },
    { icon: <FaServer />, title: 'Server Management', description: 'Deploying and maintaining production servers' },
    { icon: <FaDatabase />, title: 'Database Design', description: 'Designing efficient database schemas and queries' },
    { icon: <FaCogs />, title: 'System Architecture', description: 'Creating scalable system architectures' },
  ];

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setIsUploading(true);
      
      // Simulate upload delay
      setTimeout(() => {
        const reader = new FileReader();
        reader.onload = (e) => {
          setProfileImage(e.target?.result as string);
          setIsUploading(false);
        };
        reader.readAsDataURL(file);
      }, 1000);
    }
  };

  const handleUploadClick = () => {
    fileInputRef.current?.click();
  };

  const removeImage = () => {
    setProfileImage(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  return (
    <section id="about" className="about">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2>About Me</h2>
          <p>Get to know me better</p>
        </motion.div>

        <div className="about-content">
          <motion.div
            className="about-image-section"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="profile-image-container">
              {profileImage ? (
                <motion.div
                  className="profile-image"
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <img src={profileImage} alt="Profile" />
                  <div className="image-overlay">
                    <motion.button
                      className="change-photo-btn"
                      onClick={handleUploadClick}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <FaCamera />
                    </motion.button>
                    <motion.button
                      className="remove-photo-btn"
                      onClick={removeImage}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      ×
                    </motion.button>
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  className="upload-placeholder"
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="upload-content">
                    <FaUser className="upload-icon" />
                    <p>Upload Profile Picture</p>
                    <motion.button
                      className="upload-btn"
                      onClick={handleUploadClick}
                      disabled={isUploading}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {isUploading ? (
                        <div className="uploading-spinner">
                          <div className="spinner"></div>
                          <span>Uploading...</span>
                        </div>
                      ) : (
                        <>
                          <FaUpload />
                          <span>Choose Photo</span>
                        </>
                      )}
                    </motion.button>
                  </div>
                </motion.div>
              )}
              
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                style={{ display: 'none' }}
              />
            </div>
          </motion.div>

          <motion.div
            className="about-text"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3>Backend Developer & Problem Solver</h3>
            
            <p>
              I'm a passionate backend developer with over 5 years of experience in building 
              robust, scalable web applications. My journey in software development started 
              with a curiosity about how things work behind the scenes, which led me to 
              specialize in backend technologies.
            </p>

            <p>
              I excel at designing and implementing RESTful APIs, database architectures, 
              and server-side logic that powers modern web applications. My expertise spans 
              across Python (Django), JavaScript (Node.js), and PHP, allowing me to choose 
              the right technology for each project's unique requirements.
            </p>

            <div className="about-highlights">
              <div className="highlight-item">
                <h4>2+ Years</h4>
                <p>Professional Experience</p>
              </div>
              <div className="highlight-item">
                <h4>10+</h4>
                <p>Projects Completed</p>
              </div>
              <div className="highlight-item">
                <h4>100%</h4>
                <p>Client Satisfaction</p>
              </div>
            </div>

            <div className="about-values">
              <h4>What I Value:</h4>
              <ul>
                <li><strong>Clean Code:</strong> Writing maintainable, well-documented code that others can easily understand and build upon.</li>
                <li><strong>Performance:</strong> Optimizing applications for speed, scalability, and efficiency.</li>
                <li><strong>Security:</strong> Implementing robust security measures to protect user data and system integrity.</li>
                <li><strong>Collaboration:</strong> Working effectively with teams to deliver exceptional results.</li>
              </ul>
            </div>

            <motion.button
              className="btn btn-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                const element = document.querySelector('#projects');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              View My Work
            </motion.button>
          </motion.div>

          <motion.div
            className="about-skills"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <h3>What I Do</h3>
            <div className="skills-grid">
              {skills.map((skill, index) => (
                <motion.div
                  key={index}
                  className="skill-card"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05, y: -5 }}
                >
                  <div className="skill-icon">{skill.icon}</div>
                  <h4>{skill.title}</h4>
                  <p>{skill.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          className="about-stats"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="stats-grid">
            <motion.div
              className="stat-item"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 1.0 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.1 }}
            >
              <h3>3+</h3>
              <p>Years Experience</p>
            </motion.div>
            <motion.div
              className="stat-item"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 1.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.1 }}
            >
              <h3>20+</h3>
              <p>Projects Completed</p>
            </motion.div>
            <motion.div
              className="stat-item"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 1.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.1 }}
            >
              <h3>15+</h3>
              <p>Happy Clients</p>
            </motion.div>
            <motion.div
              className="stat-item"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 1.3 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.1 }}
            >
              <h3>5+</h3>
              <p>Technologies</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About; 