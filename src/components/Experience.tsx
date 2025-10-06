import React from 'react'
import { motion } from 'framer-motion'
import { FaCode, FaMobile, FaServer, FaDatabase, FaShoppingCart } from 'react-icons/fa'
import './Experience.css'

const Experience: React.FC = () => {
  const experiences = [
    {
      id: 1,
      company: 'PredCash',
      position: 'Desenvolvedora Junior Full Stack',
      period: '2023 - 2024',
      location: 'Remoto',
      description: 'Desenvolvimento de plataforma completa de e-commerce estilo Shopee com aplicativo de entrega e versão mobile para compras.',
      technologies: ['Flutter', 'TypeScript', 'Node.js', 'MongoDB', 'React', 'Dart'],
      achievements: [
        'Desenvolvimento de APIs REST para integração frontend/backend',
        'Criação de aplicativo mobile Flutter para entregadores',
        'Implementação de sistema de gestão de pedidos em tempo real',
        'Desenvolvimento de interface web responsiva para compras',
        'Integração com sistemas de pagamento e entrega',
        'Otimização de performance e experiência do usuário'
      ],
      icon: <FaShoppingCart />,
      color: '#667eea'
    }
  ]

  const skills = [
    { name: 'Flutter & Dart', level: 90, icon: <FaMobile /> },
    { name: 'TypeScript', level: 85, icon: <FaCode /> },
    { name: 'Node.js', level: 85, icon: <FaServer /> },
    { name: 'MongoDB', level: 80, icon: <FaDatabase /> },
    { name: 'React', level: 80, icon: <FaCode /> },
    { name: 'APIs REST', level: 90, icon: <FaServer /> }
  ]

  return (
    <section id="experience" className="experience section">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Experiência Profissional
        </motion.h2>

        <motion.p
          className="experience-subtitle"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Experiência prática em desenvolvimento full stack com foco em soluções inovadoras
        </motion.p>

        <div className="experience-content">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              className="experience-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="experience-header">
                <div className="company-info">
                  <div className="company-icon" style={{ backgroundColor: exp.color }}>
                    {exp.icon}
                  </div>
                  <div className="company-details">
                    <h3 className="company-name">{exp.company}</h3>
                    <h4 className="position">{exp.position}</h4>
                    <div className="experience-meta">
                      <span className="period">{exp.period}</span>
                      <span className="location">{exp.location}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="experience-body">
                <p className="experience-description">{exp.description}</p>
                
                <div className="achievements">
                  <h5>Principais Conquistas:</h5>
                  <ul>
                    {exp.achievements.map((achievement, achievementIndex) => (
                      <li key={achievementIndex}>{achievement}</li>
                    ))}
                  </ul>
                </div>

                <div className="technologies-used">
                  <h5>Tecnologias Utilizadas:</h5>
                  <div className="tech-tags">
                    {exp.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="tech-tag">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="skills-summary"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3>Competências Desenvolvidas</h3>
          <div className="skills-grid">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                className="skill-item"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="skill-icon">{skill.icon}</div>
                <div className="skill-info">
                  <span className="skill-name">{skill.name}</span>
                  <div className="skill-bar">
                    <motion.div
                      className="skill-progress"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    />
                  </div>
                  <span className="skill-level">{skill.level}%</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Experience
