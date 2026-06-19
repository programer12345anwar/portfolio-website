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
      id: 3,
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
      id: 4,
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
      id: 5,
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
      id: 6,
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
