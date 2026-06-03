import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import "./Projects.css";

function Projects() {
  const projects = [
    {
      id: 1,
      title: "StreamSphere - Video Streaming Platform",
      description:
        "Microservices-based video streaming platform using Java, Spring Boot, and RabbitMQ. Features modular architecture, asynchronous inter-service communication, PostgreSQL and MongoDB for data management, Docker containerization, and Spring Security for endpoint protection.",
      tags: ["Java", "Spring Boot", "Microservices", "RabbitMQ", "Docker"],
      image: "🎬",
      github: "https://github.com/programer12345anwar/YouTube-Clone",
      live: "",
    },
    {
      id: 2,
      title: "Cloud Share - Secure File Storage",
      description:
        "Full-stack cloud storage application with file upload, preview, download, and sharing features. Built with Java, Spring Boot, React. Implemented Spring Security with JWT authentication, MongoDB for metadata, Hibernate/JPA for data operations. Deployed on Vercel.",
      tags: ["Java", "Spring Boot", "React", "JWT", "MongoDB"],
      image: "☁️",
      github: "https://github.com/programer12345anwar/cloud-share-backend",
      live: "https://cloud-share-web-app.vercel.app/",
    },
    {
      id: 3,
      title: "Portfolio Website",
      description:
        "Modern, responsive portfolio website built with React and Vite. Features smooth animations, professional design, interactive sections for projects, skills, and experience. Optimized for performance and designed for easy deployment.",
      tags: ["React", "Vite", "CSS3", "Responsive Design"],
      image: "💼",
      github: "https://github.com/programer12345anwar/portfolio-using-react",
      live: "https://vercel.com/md-anwar-alams-projects/portfolio-using-react",
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
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="project-image">
                <div className="image-emoji">{project.image}</div>
              </div>

              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>

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
                    title="View Code"
                  >
                    <FaGithub /> Code
                  </a>
                  <a
                    href={project.live}
                    className="project-link"
                    title="View Live"
                  >
                    <FaExternalLinkAlt /> Live
                  </a>
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
