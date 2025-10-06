import React from 'react'
import { motion } from 'framer-motion'
import { FaGithub, FaExternalLinkAlt, FaCode, FaShoppingCart, FaHeartbeat } from 'react-icons/fa'
import './Projects.css'

const Projects: React.FC = () => {
  const projects = [
    {
      id: 1,
      title: 'PredCash - E-commerce Completo',
      description: 'Plataforma completa de e-commerce estilo Shopee com aplicativo de entrega e versão mobile para compras. Desenvolvido com Flutter, TypeScript, Node.js e MongoDB.',
      image: '/api/placeholder/600/400',
      technologies: ['Flutter', 'TypeScript', 'Node.js', 'MongoDB', 'React', 'Dart'],
      category: 'Cross-Platform',
      icon: <FaCode />,
      backgroundIcon: <FaShoppingCart />,
      backgroundGradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      github: 'https://github.com/Predcash',
      demo: 'https://predcash.com',
      features: [
        'Plataforma web responsiva',
        'App mobile Flutter',
        'Sistema de entrega integrado',
        'Gestão de pedidos em tempo real',
        'Interface intuitiva e moderna'
      ]
    },
        {
          id: 2,
          title: 'PulseFlow - App de Saúde',
          description: 'Aplicativo completo de monitoramento de saúde desenvolvido em Flutter com versão web. Sistema de tracking de batimentos cardíacos, dados de saúde e dashboard interativo.',
          image: '/api/placeholder/600/400',
          technologies: ['Flutter', 'Dart', 'JavaScript', 'CSS3', 'HTML5', 'HealthKit'],
          category: 'Cross-Platform',
          icon: <FaCode />,
          backgroundIcon: <FaHeartbeat />,
          backgroundGradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
          github: 'https://github.com/Gabrielagomesf/PulseFlow-APP.git',
          demo: 'https://github.com/mariaeduardacpb/PulseFlow-VII.git',
          features: [
            'App mobile Flutter (iOS/Android)',
            'Versão web responsiva',
            'Integração com HealthKit',
            'Dashboard interativo',
            'Sistema de autenticação 2FA',
            'Tracking de dados de saúde'
          ]
        },
  ]

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Mobile': return '#3b82f6'
      case 'Web': return '#10b981'
      case 'Cross-Platform': return '#f59e0b'
      case 'Backend': return '#8b5cf6'
      default: return '#6b7280'
    }
  }

  return (
    <section id="projects" className="projects section">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Projetos Destacados
        </motion.h2>

            <motion.p
              className="projects-subtitle"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Projetos que demonstram minha experiência como desenvolvedora Junior Full Stack,
              incluindo a plataforma PredCash e outros desenvolvimentos em Flutter, TypeScript e Node.js.
            </motion.p>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.div 
              key={project.id}
              className="project-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              <div 
                className="project-image" 
                style={{ background: project.backgroundGradient }}
              >
                <div className="project-background-icon">
                  {project.backgroundIcon}
                </div>
                <div className="project-category" style={{ backgroundColor: getCategoryColor(project.category) }}>
                  <span className="category-icon">{project.icon}</span>
                  <span className="category-text">{project.category}</span>
                </div>
                <div className="project-overlay">
                  <div className="project-links">
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link">
                      <FaGithub />
                    </a>
                    <a href={project.demo} target="_blank" rel="noopener noreferrer" className="project-link">
                      <FaExternalLinkAlt />
                    </a>
                  </div>
                </div>
              </div>

              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>

                <div className="project-features">
                  <h4>Principais Características:</h4>
                  <ul>
                    {project.features.map((feature, featureIndex) => (
                      <li key={featureIndex}>{feature}</li>
                    ))}
                  </ul>
                </div>

                <div className="project-technologies">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="projects-cta"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p>Interessado em ver mais projetos?</p>
          <a href="https://github.com/Gabrielagomesf" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
            Ver no GitHub
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
