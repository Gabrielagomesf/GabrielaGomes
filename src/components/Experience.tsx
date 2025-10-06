import React from 'react'
import { motion } from 'framer-motion'
import './Experience.css'

const Experience: React.FC = () => {
  const experiences = [
    {
      id: 1,
      company: 'PredCash',
      position: 'Desenvolvedora Full Stack',
      description: 'Desenvolvimento de plataforma completa de e-commerce com foco em soluções cross-platform, integrando aplicativo mobile, sistema web e backend robusto para gestão de vendas e entregas.',
      technologies: ['Flutter', 'TypeScript', 'Node.js', 'MongoDB', 'React', 'Dart'],
      achievements: [
        'Desenvolvimento de APIs RESTful para integração completa entre sistemas',
        'Criação de aplicativo mobile nativo para gestão de entregas',
        'Implementação de sistema de gestão em tempo real com WebSockets',
        'Desenvolvimento de interface web responsiva e intuitiva',
        'Integração de sistemas de pagamento e rastreamento de entregas',
        'Otimização de performance e escalabilidade da plataforma',
        'Arquitetura de microserviços para alta disponibilidade',
        'Implementação de testes automatizados e CI/CD'
      ],
      color: '#667eea'
    }
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
          Experiência sólida em desenvolvimento de soluções completas e escaláveis
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
                  <div className="company-details">
                    <h3 className="company-name">{exp.company}</h3>
                    <h4 className="position">{exp.position}</h4>
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

      </div>
    </section>
  )
}

export default Experience
