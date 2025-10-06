import React from 'react'
import { motion } from 'framer-motion'
import { FaCode, FaCogs, FaRocket, FaUsers } from 'react-icons/fa'
import './About.css'

const About: React.FC = () => {
  const principles = [
    {
      icon: <FaCode />,
      title: 'Mobile First',
      description: 'Desenvolvimento focado em experiência mobile, criando apps nativos e cross-platform com Flutter e Kotlin.'
    },
    {
      icon: <FaCogs />,
      title: 'Web Moderna',
      description: 'Desenvolvimento web responsivo com React, TypeScript e as mais recentes tecnologias frontend.'
    },
    {
      icon: <FaRocket />,
      title: 'Performance',
      description: 'Otimização de apps e websites para máxima velocidade e experiência do usuário em todas as plataformas.'
    },
    {
      icon: <FaUsers />,
      title: 'UX/UI',
      description: 'Criação de interfaces intuitivas e experiências de usuário excepcionais em mobile e web.'
    }
  ]

  return (
    <section id="about" className="about section">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Sobre Mim
        </motion.h2>

        <div className="about-content">
          <motion.div 
            className="about-text"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
              <h3>Gabriela Ferreira Gomes - Desenvolvedora Junior Full Stack</h3>
              <p>
                Formada em Engenharia de Software pela PUCC Campinas (2024), com experiência
                profissional em desenvolvimento de aplicações web, mobile e criação de APIs REST.
                Especializada em Flutter, TypeScript, Node.js e MongoDB.
              </p>
            <p>
              Atuei na PredCash desenvolvendo uma plataforma completa estilo Shopee com 
              aplicativo de entrega e versão mobile para compras, criando APIs REST para 
              integração entre frontend e backend, utilizando tecnologias modernas como 
              Flutter para mobile, TypeScript para frontend e Node.js para backend.
            </p>
            <p>
              Minha paixão é criar soluções digitais inovadoras que conectam pessoas e 
              facilitam o dia a dia, sempre priorizando a experiência do usuário e 
              a qualidade do código.
            </p>
          </motion.div>

          <motion.div 
            className="about-principles"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3>Meus Princípios</h3>
            <div className="principles-grid">
              {principles.map((principle, index) => (
                <motion.div 
                  key={index}
                  className="principle-card"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="principle-icon">
                    {principle.icon}
                  </div>
                  <h4>{principle.title}</h4>
                  <p>{principle.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div 
          className="about-stats"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="stats-grid">
            <div className="stat-item">
              <div className="stat-number">2024</div>
              <div className="stat-label">Formada PUCC</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">Flutter</div>
              <div className="stat-label">Especialização</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">TypeScript</div>
              <div className="stat-label">Expertise</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">Mobile</div>
              <div className="stat-label">Foco Principal</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
