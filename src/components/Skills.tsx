import React from 'react'
import { motion } from 'framer-motion'
import { 
  FaReact, 
  FaNodeJs, 
  FaDatabase,
  FaCode,
  FaServer,
  FaCloud,
  FaMobile
} from 'react-icons/fa'
import { SiTypescript, SiJavascript, SiPostgresql, SiMongodb, SiFlutter, SiKotlin, SiAndroid, SiIos } from 'react-icons/si'
import './Skills.css'

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: 'Mobile',
      icon: <FaMobile />,
      skills: [
        { name: 'Flutter', icon: <SiFlutter />, level: 90 },
        { name: 'Dart', icon: <SiFlutter />, level: 90 },
        { name: 'Kotlin', icon: <SiKotlin />, level: 85 },
        { name: 'Android', icon: <SiAndroid />, level: 80 },
        { name: 'iOS', icon: <SiIos />, level: 75 }
      ]
    },
    {
      title: 'Frontend Web',
      icon: <FaCode />,
      skills: [
        { name: 'TypeScript', icon: <SiTypescript />, level: 85 },
        { name: 'JavaScript', icon: <SiJavascript />, level: 90 },
        { name: 'HTML/CSS', icon: <FaCode />, level: 85 },
        { name: 'React', icon: <FaReact />, level: 80 }
      ]
    },
    {
      title: 'Backend & APIs',
      icon: <FaServer />,
      skills: [
        { name: 'Node.js', icon: <FaNodeJs />, level: 85 },
        { name: 'REST APIs', icon: <FaServer />, level: 90 },
        { name: 'Express.js', icon: <FaServer />, level: 80 },
        { name: 'Firebase', icon: <FaCloud />, level: 75 }
      ]
    },
    {
      title: 'Banco de Dados',
      icon: <FaDatabase />,
      skills: [
        { name: 'MongoDB', icon: <SiMongodb />, level: 85 },
        { name: 'SQLite', icon: <FaDatabase />, level: 80 },
        { name: 'Firestore', icon: <FaDatabase />, level: 75 },
        { name: 'PostgreSQL', icon: <SiPostgresql />, level: 70 }
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
