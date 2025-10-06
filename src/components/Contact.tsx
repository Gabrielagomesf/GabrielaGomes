import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { FaEnvelope, FaWhatsapp, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa'
import emailjs from '@emailjs/browser'
import './Contact.css'

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)
  const [showError, setShowError] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name === 'from_name' ? 'name' : name === 'from_email' ? 'email' : name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      // Configurações do EmailJS
      const serviceId = 'service_ljo38ko'
      const templateId = 'template_tea7zix'
      const publicKey = 'irj0wqzSyA_in4itQ'
      
      console.log('🚀 Iniciando envio de email...')
      console.log('📧 Service ID:', serviceId)
      console.log('📝 Template ID:', templateId)
      console.log('🔑 Public Key:', publicKey)
      console.log('📋 Form Data:', formData)
      
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
        to_email: 'goomes.016@gmail.com'
      }
      
      console.log('📨 Template Params:', templateParams)
      
      // Enviar email usando EmailJS
      const result = await emailjs.send(
        serviceId,
        templateId,
        templateParams,
        publicKey
      )
      
      console.log('✅ Email enviado com sucesso!', result)
      setShowSuccess(true)
      setFormData({ name: '', email: '', subject: '', message: '' })
      
      // Esconder o toast após 4 segundos
      setTimeout(() => {
        setShowSuccess(false)
      }, 4000)
    } catch (error: any) {
      console.error('❌ Erro ao enviar email:', error)
      console.error('❌ Detalhes do erro:', {
        status: error.status,
        text: error.text,
        message: error.message
      })
      setShowError(true)
      
      // Esconder o toast após 4 segundos
      setTimeout(() => {
        setShowError(false)
      }, 4000)
    } finally {
      setIsSubmitting(false)
    }
  }

  const contactInfo = [
    {
      icon: <FaEnvelope />,
      title: 'Email',
      value: 'goomes.016@gmail.com',
      link: 'mailto:goomes.016@gmail.com'
    },
    {
      icon: <FaWhatsapp />,
      title: 'WhatsApp',
      value: '(19) 99555-5280',
      link: 'https://wa.me/5519995555280?text=Olá! Vi seu portfólio e gostaria de conversar sobre oportunidades.'
    },
    {
      icon: <FaMapMarkerAlt />,
      title: 'Localização',
      value: 'Campinas, SP - Brasil',
      link: '#'
    }
  ]


  return (
    <section id="contact" className="contact section">
      {/* Toast de Sucesso */}
      {showSuccess && (
        <motion.div
          className="toast toast-success"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
        >
          <div className="toast-content">
            <div className="toast-icon">✅</div>
            <div className="toast-message">
              <h4>Mensagem enviada com sucesso!</h4>
              <p>Entrarei em contato em breve.</p>
            </div>
          </div>
        </motion.div>
      )}

      {/* Toast de Erro */}
      {showError && (
        <motion.div
          className="toast toast-error"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
        >
          <div className="toast-content">
            <div className="toast-icon">❌</div>
            <div className="toast-message">
              <h4>Erro ao enviar mensagem</h4>
              <p>Tente novamente ou entre em contato diretamente.</p>
            </div>
          </div>
        </motion.div>
      )}

      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Entre em Contato
        </motion.h2>

        <motion.p 
          className="contact-subtitle"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Pronto para transformar suas ideias em realidade? 
          Vamos conversar sobre seu próximo projeto!
        </motion.p>

        <div className="contact-content">
          <motion.div 
            className="contact-info"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3>Vamos Conversar</h3>
              <p>
                Estou sempre interessada em novos desafios e oportunidades de colaboração.
                Como desenvolvedora Junior Full Stack, estou pronta para contribuir em projetos
                mobile, web, frontend, backend e desenvolvimento de APIs. Se você tem um projeto 
                em mente ou quer discutir sobre desenvolvimento Flutter, TypeScript, Node.js ou 
                criação de APIs REST, não hesite em entrar em contato!
              </p>

            <div className="contact-details">
              {contactInfo.map((info, index) => (
                <motion.div 
                  key={index}
                  className="contact-item"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="contact-icon">
                    {info.icon}
                  </div>
                  <div className="contact-text">
                    <h4>{info.title}</h4>
                    <a href={info.link}>{info.value}</a>
                  </div>
                </motion.div>
              ))}
            </div>

          </motion.div>

          <motion.form 
            className="contact-form"
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3>Envie uma Mensagem</h3>
            
            <div className="form-group">
              <label htmlFor="from_name">Nome</label>
              <input
                type="text"
                id="from_name"
                name="from_name"
                value={formData.name}
                onChange={handleInputChange}
                required
                placeholder="Seu nome completo"
              />
            </div>

            <div className="form-group">
              <label htmlFor="from_email">Email</label>
              <input
                type="email"
                id="from_email"
                name="from_email"
                value={formData.email}
                onChange={handleInputChange}
                required
                placeholder="seu@email.com"
              />
            </div>

            <div className="form-group">
              <label htmlFor="subject">Assunto</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleInputChange}
                required
                placeholder="Qual é o assunto?"
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Mensagem</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                required
                rows={5}
                placeholder="Conte-me sobre seu projeto..."
              />
            </div>

            <motion.button 
              type="submit"
              className="btn btn-primary submit-btn"
              disabled={isSubmitting}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <FaPaperPlane /> {isSubmitting ? 'Enviando...' : 'Enviar Mensagem'}
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  )
}

export default Contact
