import {
  FaJava,
  FaReact,
  FaCog,
  FaDatabase,
  FaDocker,
  FaRobot,
} from "react-icons/fa";

import { SiSpringboot } from "react-icons/si";

import "./Skills.css";

function Skills() {
  const skillCategories = [
    {
        category: "Core Java",
        icon: FaJava,
        skills: [
            "Core Java",
            "Java 8+ Features",
            "Collections Framework",
            "Multithreading",
            "Stream API",
            "Lambda Expressions",
        ],
        },
    {
      category: "Spring Ecosystem",
      icon: SiSpringboot,
      skills: [
        "Spring Boot",
        "Spring MVC",
        "Spring Security",
        "Microservices",
        "RESTful APIs",
      ],
    },
    {
      category: "Databases",
      icon: FaDatabase,
      skills: [
        "MySQL",
        "PostgreSQL",
        "MongoDB",
        "Redis",
        "JDBC",
        "JPA/Hibernate",
      ],
    },

    {
      category: "AI & Integrations",
      icon: FaRobot,
      skills: [
        "Google Gemini API",
        "REST API Integration",
        "Prompt Engineering",
        "JSON Processing",
        "Markdown Rendering",
        "AI-powered Applications",
      ],
    },

    {
      category: "Tools & DevOps",
      icon: FaDocker,
      skills: [
        "Maven",
        "Docker",
        "Git/GitHub",
        "JUnit Testing",
        "Postman",
        "Swagger/OpenAPI",
      ],
    },
    {
      category: "Advanced Java",
      icon: FaCog,
      skills: [
        "Exception Handling",
        "Servlets",
        "Design Patterns",
        "SOLID Principles",
        "Object-Oriented Design",
        "Data Structures & Algorithms",
      ],
    },
    {
      category: "Frontend & Other",
      icon: FaReact,
      skills: [
        "ReactJS",
        "JavaScript/ES6+",
        "HTML5",
        "CSS3",
        "Python",
        "Problem Solving",
      ],
    },
  ];

  return (
    <section className="skills" id="skills">
      <div className="container">
        <h2 className="section-title">Skills & Expertise</h2>

        <div className="skills-grid">
          {skillCategories.map((cat, index) => {
            const Icon = cat.icon;

            return (
              <div
                key={index}
                className="skill-card fade-in"
                style={{ animationDelay: `${index * 0.01}s` }}
              >
                <div className="skill-icon">
                  <Icon />
                </div>

                <h3 className="skill-category">{cat.category}</h3>

                <ul className="skill-list">
                  {cat.skills.map((skill, idx) => (
                    <li key={idx} className="skill-item">
                      <span className="skill-dot"></span>
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Skills;
