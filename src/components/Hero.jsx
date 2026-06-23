import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { SiLeetcode as FaLeetCode } from "react-icons/si";
import { scrollToSection } from "../utils/scrollToSection";
import "./Hero.css";


function Hero() {
  const resumeUrl =
    "https://drive.google.com/uc?export=download&id=1fa_MrLw0DajKSeza0e14KF9wnS5-2ZnF";

  const socialLinks = [
    {
      href: "https://leetcode.com/u/mdalam40212/",
      label: "LeetCode profile",
      icon: FaLeetCode,
    },
    {
      href: "https://github.com/programer12345anwar",
      label: "GitHub profile",
      icon: FaGithub,
    },
    {
      href: "https://www.linkedin.com/in/md-anwar-alam-45b4b1240/",
      label: "LinkedIn profile",
      icon: FaLinkedin,
    },
    {
      href: "mailto:mdanwar40212@gmail.com",
      label: "Email Md Anwar Alam",
      icon: FaEnvelope,
      isEmail: true,
    },
  ];

  const highlights = [
    { value: "300+", label: "Coding problems solved" },
    { value: "6+", label: "Production-style projects" },
    { value: "3", label: "Certifications" },
  ];

  const handleProjectsClick = (event) => {
    event.preventDefault();
    scrollToSection("projects");
    window.history.replaceState(null, "", "#projects");
  };

  return (
    <section className="hero" id="home">
      <div className="container">
        <div className="hero-content fade-in">
          <div className="hero-text">
            <p className="hero-kicker">Full-Stack Java Developer</p>
            <h1 className="hero-title">Hi, I am Md Anwar Alam</h1>
            <p className="hero-subtitle">
              I build secure Spring Boot APIs, microservices, and responsive
              React interfaces with a focus on clean architecture,
              authentication, database design, and practical problem solving.
            </p>

            <div className="hero-highlights" aria-label="Professional highlights">
              {highlights.map((item) => (
                <div className="hero-highlight" key={item.label}>
                  <strong>{item.value}</strong>
                  <span>{item.label}</span>
                </div>
              ))}
            </div>

            <div className="hero-cta">
              <a
                href="#projects"
                className="btn btn-primary"
                style={{ cursor: "pointer" }}
                onClick={handleProjectsClick}
              >
                View My Work
              </a>
              <a
                href={resumeUrl}
                className="btn btn-secondary"
                target="_blank"
                rel="noopener noreferrer"
              >
                Download Resume
              </a>
            </div>

            <div className="social-links" aria-label="Social profiles">
              {socialLinks.map((link) => {
                const Icon = link.icon;

                return (
                  <a
                    key={link.label}
                    href={link.href}
                    className="social-link"
                    title={link.label}
                    aria-label={link.label}
                    {...(!link.isEmail && {
                      target: "_blank",
                      rel: "noopener noreferrer",
                    })}
                  >
                    <Icon />
                  </a>
                );
              })}
            </div>
          </div>
          <div className="hero-image">
            <img
              src={new URL("/profile.jpg", import.meta.url).href}
              alt="Md Anwar Alam"
              className="profile-photo"
              decoding="async"
              fetchPriority="high"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
