import React from 'react'
import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaEnvelope, FaHeart } from 'react-icons/fa'
import './Footer.css'

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    {
      icon: <FaGithub />,
      url: 'https://github.com/Gabrielagomesf',
      label: 'GitHub'
    },
    {
      icon: <FaLinkedin />,
      url: 'https://linkedin.com/in/gabrielafg1',
      label: 'LinkedIn'
    },
    {
      icon: <FaEnvelope />,
      url: 'mailto:goomes.016@gmail.com',
      label: 'Email'
    }
  ]

  const quickLinks = [
    { name: 'Início', href: '#home' },
    { name: 'Sobre', href: '#about' },
    { name: 'Habilidades', href: '#skills' },
    { name: 'Projetos', href: '#projects' },
    { name: 'Contato', href: '#contact' }
  ]

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId.replace('#', ''))
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <motion.div 
            className="footer-section footer-about"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3>Gabriela Ferreira Gomes</h3>
            <p>
              Desenvolvedora Mobile & Web especializada em Flutter, TypeScript e Node.js. 
              Formada em Engenharia de Software pela PUCC Campinas.
            </p>
            <div className="footer-social">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                  aria-label={social.label}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.div 
            className="footer-section footer-links"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4>Links Rápidos</h4>
            <ul>
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button 
                    onClick={() => scrollToSection(link.href)}
                    className="footer-link"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div 
            className="footer-section footer-contact"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4>Contato</h4>
            <div className="contact-info">
              <p>
                <FaEnvelope className="contact-icon" />
                goomes.016@gmail.com
              </p>
              <p>
                <span className="contact-icon">📱</span>
                (19) 99555-5280
              </p>
              <p>
                <span className="contact-icon">📍</span>
                Campinas, SP - Brasil
              </p>
            </div>
          </motion.div>
        </div>

        <motion.div 
          className="footer-bottom"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="footer-bottom-content">
            <p>
              © {currentYear} Gabriela Ferreira Gomes. Feito com{' '}
              <FaHeart className="heart-icon" /> e muito código.
            </p>
            <p className="footer-tech">
              Desenvolvido com React, TypeScript e Framer Motion
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer
