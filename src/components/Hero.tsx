import React from 'react'
import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaWhatsapp, FaEnvelope } from 'react-icons/fa'
import './Hero.css'

const Hero: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero-content">
          <motion.div 
            className="hero-text"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1 
              className="hero-title"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Olá, eu sou <span className="highlight">Gabriela Ferreira Gomes</span>
            </motion.h1>
            
              <motion.p
                className="hero-subtitle"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Desenvolvedora Junior Full Stack com foco em soluções mobile e web inovadoras.
                Transformando ideias em aplicações funcionais e experiências digitais excepcionais.
              </motion.p>

            <motion.div 
              className="hero-buttons"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <button 
                className="btn btn-primary"
                onClick={() => scrollToSection('projects')}
              >
                Ver Projetos
              </button>
              <button 
                className="btn btn-secondary"
                onClick={() => scrollToSection('contact')}
              >
                Entre em Contato
              </button>
              <a 
                href="/Curriculo%20Gabriela.pdf" 
                download 
                className="btn btn-cv"
              >
                Baixar CV
              </a>
            </motion.div>

            <motion.div 
              className="hero-social"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <a href="https://github.com/Gabrielagomesf" target="_blank" rel="noopener noreferrer">
                <FaGithub />
              </a>
              <a href="https://linkedin.com/in/gabrielafg1" target="_blank" rel="noopener noreferrer">
                <FaLinkedin />
              </a>
              <a href="https://wa.me/5519995555280?text=Olá! Vi seu portfólio e gostaria de conversar sobre oportunidades." target="_blank" rel="noopener noreferrer">
                <FaWhatsapp />
              </a>
              <a href="mailto:goomes.016@gmail.com">
                <FaEnvelope />
              </a>
            </motion.div>
          </motion.div>

          <motion.div 
            className="hero-image"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="code-block">
              <div className="code-header">
                <div className="code-dots">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
                <span className="code-title">gabriela_dev.dart</span>
              </div>
              <div className="code-content">
                <div className="code-line">
                  <span className="code-keyword">class</span> <span className="code-class">GabrielaDev</span> <span className="code-bracket">{'{'}</span>
                </div>
                <div className="code-line">
                  <span className="code-space"></span><span className="code-keyword">final</span> <span className="code-type">List</span><span className="code-bracket">&lt;</span><span className="code-type">String</span><span className="code-bracket">&gt;</span> <span className="code-property">especialidades</span><span className="code-comma">;</span>
                </div>
                <div className="code-line">
                  <span className="code-space"></span><span className="code-keyword">const</span> <span className="code-class">GabrielaDev</span><span className="code-bracket">()</span>
                </div>
                <div className="code-line">
                  <span className="code-space"></span><span className="code-space"></span><span className="code-bracket">{':'}</span> <span className="code-property">especialidades</span> <span className="code-operator">=</span> <span className="code-keyword">const</span> <span className="code-bracket">[</span>
                </div>
                <div className="code-line">
                  <span className="code-space"></span><span className="code-space"></span><span className="code-space"></span><span className="code-string">'Mobile First'</span><span className="code-comma">,</span>
                </div>
                <div className="code-line">
                  <span className="code-space"></span><span className="code-space"></span><span className="code-space"></span><span className="code-string">'Web Moderna'</span><span className="code-comma">,</span>
                </div>
                <div className="code-line">
                  <span className="code-space"></span><span className="code-space"></span><span className="code-space"></span><span className="code-string">'Performance'</span><span className="code-comma">,</span>
                </div>
                <div className="code-line">
                  <span className="code-space"></span><span className="code-space"></span><span className="code-space"></span><span className="code-string">'UX/UI'</span><span className="code-comma">,</span>
                </div>
                <div className="code-line">
                  <span className="code-space"></span><span className="code-space"></span><span className="code-bracket">]</span><span className="code-comma">;</span>
                </div>
                <div className="code-line"></div>
                <div className="code-line">
                  <span className="code-space"></span><span className="code-keyword">void</span> <span className="code-function">desenvolver</span><span className="code-bracket">()</span> <span className="code-bracket">{'{'}</span>
                </div>
                <div className="code-line">
                  <span className="code-space"></span><span className="code-space"></span><span className="code-function">print</span><span className="code-bracket">(</span><span className="code-string">'Desenvolvendo soluções inovadoras!'</span><span className="code-bracket">)</span><span className="code-comma">;</span>
                </div>
                <div className="code-line">
                  <span className="code-space"></span><span className="code-bracket">{'}'}</span>
                </div>
                <div className="code-line">
                  <span className="code-bracket">{'}'}</span>
                </div>
                <div className="code-line"></div>
                <div className="code-line">
                  <span className="code-keyword">void</span> <span className="code-function">main</span><span className="code-bracket">()</span> <span className="code-bracket">{'{'}</span>
                </div>
                <div className="code-line">
                  <span className="code-space"></span><span className="code-keyword">const</span> <span className="code-property">dev</span> <span className="code-operator">=</span> <span className="code-class">GabrielaDev</span><span className="code-bracket">()</span><span className="code-comma">;</span>
                </div>
                <div className="code-line">
                  <span className="code-space"></span><span className="code-property">dev</span><span className="code-bracket">.</span><span className="code-function">desenvolver</span><span className="code-bracket">()</span><span className="code-comma">;</span>
                </div>
                <div className="code-line">
                  <span className="code-space"></span><span className="code-function">print</span><span className="code-bracket">(</span><span className="code-property">dev</span><span className="code-bracket">.</span><span className="code-property">especialidades</span><span className="code-bracket">)</span><span className="code-comma">;</span>
                </div>
                <div className="code-line">
                  <span className="code-bracket">{'}'}</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero