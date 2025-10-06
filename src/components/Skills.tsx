import React from 'react'
import { motion } from 'framer-motion'
import { 
  FaDatabase,
  FaCode,
  FaServer,
  FaMobile,
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaJs,
  FaAndroid,
  FaApple
} from 'react-icons/fa'
import { 
  SiFlutter, 
  SiDart, 
  SiKotlin, 
  SiTypescript, 
  SiExpress, 
  SiFirebase, 
  SiMongodb, 
  SiSqlite, 
  SiPostgresql 
} from 'react-icons/si'
import './Skills.css'

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: 'Mobile',
      icon: <FaMobile />,
      skills: [
        { name: 'Flutter', level: 90, icon: <SiFlutter /> },
        { name: 'Dart', level: 90, icon: <SiDart /> },
        { name: 'Kotlin', level: 85, icon: <SiKotlin /> },
        { name: 'Android', level: 80, icon: <FaAndroid /> },
        { name: 'iOS', level: 75, icon: <FaApple /> }
      ]
    },
    {
      title: 'Frontend Web',
      icon: <FaCode />,
      skills: [
        { name: 'TypeScript', level: 85, icon: <SiTypescript /> },
        { name: 'JavaScript', level: 90, icon: <FaJs /> },
        { name: 'HTML/CSS', level: 85, icon: <FaHtml5 /> },
        { name: 'React', level: 80, icon: <FaReact /> }
      ]
    },
    {
      title: 'Backend & APIs',
      icon: <FaServer />,
      skills: [
        { name: 'Node.js', level: 85, icon: <FaNodeJs /> },
        { name: 'REST APIs', level: 90, icon: <FaServer /> },
        { name: 'Express.js', level: 80, icon: <SiExpress /> },
        { name: 'Firebase', level: 75, icon: <SiFirebase /> }
      ]
    },
    {
      title: 'Banco de Dados',
      icon: <FaDatabase />,
      skills: [
        { name: 'MongoDB', level: 85, icon: <SiMongodb /> },
        { name: 'SQLite', level: 80, icon: <SiSqlite /> },
        { name: 'Firestore', level: 75, icon: <SiFirebase /> },
        { name: 'PostgreSQL', level: 70, icon: <SiPostgresql /> }
      ]
    }
  ]

  const engineeringSkills = [
    'Cross-Platform Development',
    'API Development & Integration',
    'Responsive Web Design',
    'State Management',
    'Database Design',
    'Authentication Systems',
    'Real-time Data Sync',
    'Mobile App Architecture',
    'Performance Optimization',
    'Version Control (Git)',
    'Agile Development',
    'Code Review & Testing'
  ]

  return (
    <section id="skills" className="skills section">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Habilidades Técnicas
        </motion.h2>

        <div className="skills-content">
          <motion.div 
            className="technical-skills"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3>Tecnologias</h3>
            <div className="skills-grid">
              {skillCategories.map((category, categoryIndex) => (
                <motion.div 
                  key={categoryIndex}
                  className="skill-category"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="category-header">
                    <div className="category-icon">
                      {category.icon}
                    </div>
                    <h4>{category.title}</h4>
                  </div>
                  <div className="skills-list">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div 
                        key={skillIndex}
                        className="skill-item"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: (categoryIndex * 0.1) + (skillIndex * 0.05) }}
                        viewport={{ once: true }}
                      >
                        <div className="skill-info">
                          <div className="skill-icon">
                            {skill.icon}
                          </div>
                          <span className="skill-name">{skill.name}</span>
                        </div>
                        <div className="skill-bar">
                          <motion.div 
                            className="skill-progress"
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            transition={{ duration: 1, delay: (categoryIndex * 0.1) + (skillIndex * 0.05) + 0.3 }}
                            viewport={{ once: true }}
                          />
                        </div>
                        <span className="skill-percentage">{skill.level}%</span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            className="engineering-skills"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3>Engenharia de Software</h3>
            <div className="engineering-grid">
              {engineeringSkills.map((skill, index) => (
                <motion.div 
                  key={index}
                  className="engineering-skill"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                >
                  {skill}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Skills
