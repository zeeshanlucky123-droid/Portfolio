import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FaExternalLinkAlt, FaGithub, FaLaptopCode, FaMobileAlt, FaChartLine } from 'react-icons/fa';
import './Projects.css';

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const projects = [
    {
      category: 'Web Application',
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce solution with user authentication, payment integration, and admin dashboard.',
      tech: ['React', 'Node.js', 'MongoDB'],
      icon: <FaLaptopCode />
    },
    {
      category: 'Mobile App',
      title: 'Task Management App',
      description: 'A cross-platform mobile application for task management with real-time synchronization and offline support.',
      tech: ['React Native', 'Firebase', 'Redux'],
      icon: <FaMobileAlt />
    },
    {
      category: 'Dashboard',
      title: 'Analytics Dashboard',
      description: 'An interactive analytics dashboard with data visualization, real-time updates, and customizable reports.',
      tech: ['Vue.js', 'D3.js', 'Python'],
      icon: <FaChartLine />
    }
  ];

  return (
    <section id="projects" className="projects section">
      <div className="container">
        <div className="section-header">
          <div className="section-header-content">
            <span className="section-number">03</span>
            <h2 className="section-title">Featured Projects</h2>
          </div>
          <div className="title-underline"></div>
        </div>
        <div className="projects-grid" ref={ref}>
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              project={project}
              index={index}
              isInView={isInView}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const ProjectCard = ({ project, index, isInView }) => {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <motion.div
      className="project-card"
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ y: -10 }}
    >
      <div className="project-image">
        <motion.div
          className="project-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="project-links">
            <a href="#" className="project-link" onClick={(e) => e.preventDefault()}>
              <FaExternalLinkAlt />
            </a>
            <a href="#" className="project-link" onClick={(e) => e.preventDefault()}>
              <FaGithub />
            </a>
          </div>
        </motion.div>
        <div className="project-placeholder">
          {project.icon}
        </div>
      </div>
      <div className="project-content">
        <span className="project-category">{project.category}</span>
        <h3 className="project-title">{project.title}</h3>
        <p className="project-description">{project.description}</p>
        <div className="project-tech">
          {project.tech.map((tech, techIndex) => (
            <span key={techIndex} className="tech-tag">{tech}</span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Projects;

