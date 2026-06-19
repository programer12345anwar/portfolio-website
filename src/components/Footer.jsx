import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { scrollToSection } from "../utils/scrollToSection";
import "./Footer.css";

function Footer() {
  const currentYear = new Date().getFullYear();

  const handleSectionClick = (event, sectionId) => {
    event.preventDefault();
    scrollToSection(sectionId);
    window.history.replaceState(null, "", `#${sectionId}`);
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Md Anwar Alam</h3>
            <p>
              Full-Stack Java Developer | Spring Boot | Microservices | DSA
              Practice | 600+ Coding Problems Solved
            </p>
            <div className="social-icons">
                <a
                  href="https://leetcode.com/u/mdalam40212/"
                  className="social-icon"
                  title="LeetCode"
                  aria-label="LeetCode profile"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <SiLeetcode />
                </a>
              <a
                href="https://github.com/programer12345anwar"
                className="social-icon"
                title="GitHub"
                aria-label="GitHub profile"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/md-anwar-alam-45b4b1240/"
                className="social-icon"
                title="LinkedIn"
                aria-label="LinkedIn profile"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin />
              </a>
              <a
                href="mailto:mdanwar40212@gmail.com"
                className="social-icon"
                title="Email"
                aria-label="Email Md Anwar Alam"
              >
                <FaEnvelope />
              </a>
            </div>
          </div>

          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li>
                <a href="#home" onClick={(event) => handleSectionClick(event, "home")}>
                  Home
                </a>
              </li>
              <li>
                <a href="#about" onClick={(event) => handleSectionClick(event, "about")}>
                  About
                </a>
              </li>
              <li>
                <a href="#skills" onClick={(event) => handleSectionClick(event, "skills")}>
                  Skills
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  onClick={(event) => handleSectionClick(event, "projects")}
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#experience"
                  onClick={(event) => handleSectionClick(event, "experience")}
                >
                  Experience
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  onClick={(event) => handleSectionClick(event, "contact")}
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Services</h4>
            <ul>
              <li>
                <a
                  href="#projects"
                  onClick={(event) => handleSectionClick(event, "projects")}
                >
                  Backend Development
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  onClick={(event) => handleSectionClick(event, "projects")}
                >
                  Microservices Architecture
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  onClick={(event) => handleSectionClick(event, "projects")}
                >
                  Full Stack Development
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  onClick={(event) => handleSectionClick(event, "contact")}
                >
                  API Development
                </a>
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Resources</h4>
            <ul>
              
              <li>
                <a
                  href="https://github.com/programer12345anwar"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub Profile
                </a>
              </li>
              <li>
                <a
                  href="https://leetcode.com/u/mdalam40212/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LeetCode
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/md-anwar-alam-45b4b1240/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="mailto:mdanwar40212@gmail.com">Contact</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="copyright">
            &copy; {currentYear} Md Anwar Alam. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
