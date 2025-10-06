import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { FaDownload, FaHome, FaUser, FaBriefcase, FaCode, FaProjectDiagram, FaEnvelope } from 'react-icons/fa'
import './Header.css'

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMobileMenuOpen(false)
  }

  return (
    <motion.header 
      className={`header ${isScrolled ? 'scrolled' : ''}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container">
        <div className="header-content">
          <motion.div 
            className="logo"
            whileHover={{ scale: 1.05 }}
          >
            <span className="logo-text">Portfólio</span>
          </motion.div>

          <nav className={`nav ${isMobileMenuOpen ? 'nav-open' : ''}`}>
            <ul className="nav-list">
              <li><button onClick={() => scrollToSection('home')}><FaHome /> Início</button></li>
              <li><button onClick={() => scrollToSection('about')}><FaUser /> Sobre</button></li>
              <li><button onClick={() => scrollToSection('experience')}><FaBriefcase /> Experiência</button></li>
              <li><button onClick={() => scrollToSection('skills')}><FaCode /> Habilidades</button></li>
              <li><button onClick={() => scrollToSection('projects')}><FaProjectDiagram /> Projetos</button></li>
              <li><button onClick={() => scrollToSection('contact')}><FaEnvelope /> Contato</button></li>
              <li>
                <a 
                  href="/cv-gabriela-ferreira-gomes.pdf" 
                  download 
                  className="btn-cv"
                >
                  <FaDownload /> CV
                </a>
              </li>
            </ul>
          </nav>

          <button 
            className="mobile-menu-btn"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </motion.header>
  )
}

export default Header
