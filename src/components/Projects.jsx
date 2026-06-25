import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import "./Projects.css";

function Projects() {
  const projects = [
    {
      id: 1,
      title: "StreamSphere - Video Streaming Platform",
      category: "Microservices Backend",
      description:
        "Microservices-based video streaming platform with asynchronous communication, separate persistence layers, Docker support, and secured service endpoints.",
      highlights: [
        "RabbitMQ-based inter-service events",
        "PostgreSQL and MongoDB persistence",
        "Spring Security protected APIs",
      ],
      tags: ["Java", "Spring Boot", "Microservices", "RabbitMQ", "Docker"],
      accent: "blue",
      github: "https://github.com/programer12345anwar/YouTube-Clone",
      live: "",
    },

    {
      id: 2,
      title: "AI Code Reviewer - Monolithic Application",
      category: "AI-Powered Developer Tool",
      description:
        "AI-powered code review application that analyzes source code, returns clean-code suggestions, and stores review history through a Spring Boot backend.",
      highlights: [
        "Gemini API based code analysis",
        "Drag-and-drop file upload and paste support",
        "Persistent review history with MySQL",
      ],
      tags: ["Java", "Spring Boot", "Gemini API", "MySQL", "JavaScript"],
      accent: "violet",
      github:
        "https://github.com/programer12345anwar/AI-Code-Reviewer-Monolithic-Application",
      live: "https://ai-code-reviewer-monolithic-applica-gray.vercel.app/",
    },
    {
      id: 3,
      title: "BondKeeper - Relationship Management Platform",
      category: "Full-Stack SaaS Platform",
      description:
        "Personal relationship management platform for reminders, contact organization, relationship health tracking, and secure user workflows.",
      highlights: [
        "JWT-secured authentication",
        "Relationship reminders and contact APIs",
        "PostgreSQL persistence with Flyway migrations",
      ],
      tags: ["Java", "Spring Boot", "PostgreSQL", "JWT", "React"],
      accent: "amber",
      github: "https://github.com/programer12345anwar/bondkeeper-platform",
      live: "https://bondkeeper-platform.vercel.app/login",
    },

    {
      id: 4,
      title: "Cloud Share - Secure File Storage",
      category: "Full-Stack Product",
      description:
        "Full-stack cloud storage application for uploading, previewing, downloading, and sharing files with JWT authentication and a React frontend.",
      highlights: [
        "JWT authentication flow",
        "File upload, preview, and sharing",
        "MongoDB metadata and JPA data operations",
      ],
      tags: ["Java", "Spring Boot", "React", "JWT", "MongoDB"],
      accent: "green",
      github: "https://github.com/programer12345anwar/cloud-share-backend",
      live: "https://cloud-share-web-app.vercel.app/",
    },
    {
      id: 5,
      title: "Portfolio Website",
      category: "Frontend Experience",
      description:
        "Responsive React and Vite portfolio focused on clear technical storytelling, accessible navigation, clean sections, and a lightweight production build.",
      highlights: [
        "Vite production build",
        "Responsive component layout",
        "Accessible navigation and contact paths",
      ],
      tags: ["React", "Vite", "CSS3", "Responsive Design"],
      accent: "slate",
      github: "https://github.com/programer12345anwar/portfolio-using-react",
      live: "",
    },
    
    {
      id: 6,
      title: "Weather Application - Real-Time Weather API",
      category: "API Integration",
      description:
        "Weather application backed by Spring Boot that fetches real-time weather details by city using the Weatherstack API and a lightweight frontend.",
      highlights: [
        "Live city-based weather search",
        "Weatherstack external API integration",
        "RESTful Spring Boot API design",
      ],
      tags: ["Java", "Spring Boot", "REST API", "Weatherstack", "JavaScript"],
      accent: "cyan",
      github: "https://github.com/programer12345anwar/Weather_Application",
      live: "https://weather-api-nine-topaz.vercel.app/",
    },
  ];

  return (
    <section className="projects" id="projects">
      <div className="container">
        <h2 className="section-title">Featured Projects</h2>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="project-card fade-in"
              style={{ animationDelay: `${index * 0.01}s` }}
            >
              <div className="project-image">
                <div className={`project-visual ${project.accent}`}>
                  <div className="visual-toolbar" aria-hidden="true">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                  <div className="visual-body">
                    <span className="visual-category">{project.category}</span>
                    <h4>{project.title.split(" - ")[0]}</h4>
                    <p>{project.tags.slice(0, 3).join(" / ")}</p>
                  </div>
                </div>
              </div>

              <div className="project-content">
                <p className="project-eyebrow">{project.category}</p>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>

                <ul className="project-highlights">
                  {project.highlights.map((highlight) => (
                    <li key={highlight}>{highlight}</li>
                  ))}
                </ul>

                <div className="project-tags">
                  {project.tags.map((tag, idx) => (
                    <span key={idx} className="tag">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="project-links">
                  <a
                    href={project.github}
                    className="project-link"
                    title={`View ${project.title} code`}
                    aria-label={`View ${project.title} source code`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaGithub /> Code
                  </a>
                  {project.live ? (
                    <a
                      href={project.live}
                      className="project-link"
                      title={`View ${project.title} live demo`}
                      aria-label={`View ${project.title} live demo`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaExternalLinkAlt /> Live
                    </a>
                  ) : (
                    <span className="project-link project-link-disabled">
                      Demo Pending
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
