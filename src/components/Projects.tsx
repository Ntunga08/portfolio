import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaServer, FaDatabase, FaCode } from 'react-icons/fa';
import './Projects.css';

const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'E-Commerce API Platform',
      description: 'A comprehensive RESTful API for an e-commerce platform built with Django REST Framework. Features include user authentication, product management, order processing, and payment integration.',
      image: 'https://via.placeholder.com/400x250/2a2a2a/ffffff?text=E-Commerce+API',
      technologies: ['Python', 'Django', 'Django REST Framework', 'PostgreSQL', 'Redis'],
      category: 'backend',
      github: 'https://github.com',
      live: 'https://example.com',
      features: ['User Authentication & Authorization', 'Product Management System', 'Order Processing', 'Payment Integration', 'Real-time Notifications']
    },
    {
      id: 2,
      title: 'Task Management System',
      description: 'A full-stack task management application with real-time updates, team collaboration features, and advanced project tracking capabilities.',
      image: 'https://via.placeholder.com/400x250/2a2a2a/ffffff?text=Task+Management',
      technologies: ['JavaScript', 'Node.js', 'Express.js', 'MongoDB', 'Socket.io'],
      category: 'fullstack',
      github: 'https://github.com',
      live: 'https://example.com',
      features: ['Real-time Updates', 'Team Collaboration', 'Project Tracking', 'File Sharing', 'Progress Analytics']
    },
    {
      id: 3,
      title: 'Content Management System',
      description: 'A robust CMS built with PHP and MySQL, featuring a user-friendly admin panel, content versioning, and SEO optimization tools.',
      image: 'https://via.placeholder.com/400x250/2a2a2a/ffffff?text=CMS+System',
      technologies: ['PHP', 'MySQL', 'JavaScript', 'Bootstrap', 'jQuery'],
      category: 'backend',
      github: 'https://github.com',
      live: 'https://example.com',
      features: ['Admin Dashboard', 'Content Versioning', 'SEO Tools', 'Media Management', 'User Roles']
    },
    {
      id: 4,
      title: 'Weather API Service',
      description: 'A microservice architecture for weather data processing and delivery, built with Python and integrated with multiple weather APIs.',
      image: 'https://via.placeholder.com/400x250/2a2a2a/ffffff?text=Weather+API',
      technologies: ['Python', 'FastAPI', 'PostgreSQL', 'Redis', 'Docker'],
      category: 'backend',
      github: 'https://github.com',
      live: 'https://example.com',
      features: ['Microservice Architecture', 'API Integration', 'Caching System', 'Data Processing', 'Scalable Design']
    },
    {
      id: 5,
      title: 'Social Media Dashboard',
      description: 'A comprehensive dashboard for managing multiple social media accounts, with analytics, scheduling, and engagement tracking.',
      image: 'https://via.placeholder.com/400x250/2a2a2a/ffffff?text=Social+Dashboard',
      technologies: ['React', 'Node.js', 'Express.js', 'MongoDB', 'Chart.js'],
      category: 'fullstack',
      github: 'https://github.com',
      live: 'https://example.com',
      features: ['Multi-platform Integration', 'Analytics Dashboard', 'Content Scheduling', 'Engagement Tracking', 'Performance Reports']
    },
    {
      id: 6,
      title: 'Inventory Management System',
      description: 'A complete inventory management solution with barcode scanning, stock tracking, and automated reorder notifications.',
      image: 'https://via.placeholder.com/400x250/2a2a2a/ffffff?text=Inventory+System',
      technologies: ['Python', 'Django', 'MySQL', 'Celery', 'Redis'],
      category: 'backend',
      github: 'https://github.com',
      live: 'https://example.com',
      features: ['Barcode Scanning', 'Stock Tracking', 'Automated Alerts', 'Reporting System', 'Multi-location Support']
    }
  ];

  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'backend', label: 'Backend' },
    { id: 'fullstack', label: 'Full Stack' }
  ];

  const filteredProjects = projects.filter(project => 
    activeFilter === 'all' || project.category === activeFilter
  );

  return (
    <section id="projects" className="projects">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2>My Projects</h2>
          <p>Showcasing my best work and technical expertise</p>
        </motion.div>

        <motion.div
          className="project-filters"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {filters.map((filter) => (
            <motion.button
              key={filter.id}
              className={`filter-btn ${activeFilter === filter.id ? 'active' : ''}`}
              onClick={() => setActiveFilter(filter.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {filter.label}
            </motion.button>
          ))}
        </motion.div>

        <motion.div
          className="projects-grid"
          layout
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              className="project-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              layout
            >
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className="project-overlay">
                  <div className="project-links">
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <FaGithub />
                    </motion.a>
                    <motion.a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <FaExternalLinkAlt />
                    </motion.a>
                  </div>
                </div>
              </div>

              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                
                <div className="project-features">
                  <h4>Key Features:</h4>
                  <ul>
                    {project.features.slice(0, 3).map((feature, idx) => (
                      <li key={idx}>{feature}</li>
                    ))}
                  </ul>
                </div>

                <div className="project-technologies">
                  {project.technologies.map((tech, idx) => (
                    <span key={idx} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="projects-cta"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <p>Interested in working together? Let's discuss your project!</p>
          <motion.button
            className="btn btn-primary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              const element = document.querySelector('#contact');
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
              }
            }}
          >
            Get In Touch
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects; 