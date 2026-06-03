import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaEnvelope,

} from "react-icons/fa";
import "./Footer.css";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Md Anwar Alam</h3>
            <p>
              Full-Stack Java Developer | Spring Boot | Microservices | DSA
              Expert | 600+ Coding Problems Solved
            </p>
            <div className="social-icons">
              <a
                href="https://github.com/programer12345anwar"
                className="social-icon"
                title="GitHub"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/md-anwar-alam-45b4b1240/"
                className="social-icon"
                title="LinkedIn"
              >
                <FaLinkedin />
              </a>
              <a
                href="mailto:mdanwar40212@gmail.com"
                className="social-icon"
                title="Email"
              >
                <FaEnvelope />
              </a>
            </div>
          </div>

          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#skills">Skills</a>
              </li>
              <li>
                <a href="#projects">Projects</a>
              </li>
              <li>
                <a href="#experience">Experience</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Services</h4>
            <ul>
              <li>
                <a href="#">Backend Development</a>
              </li>
              <li>
                <a href="#">Microservices Architecture</a>
              </li>
              <li>
                <a href="#">Full Stack Development</a>
              </li>
              <li>
                <a href="#">API Development</a>
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Resources</h4>
            <ul>
              <li>
                <a href="https://github.com/programer12345anwar">
                  GitHub Profile
                </a>
              </li>
              <li>
                <a href="https://leetcode.com/u/mdalam40212/">LeetCode</a>
              </li>
              <li>
                <a href="#">DSA Problems</a>
              </li>
              <li>
                <a href="#">Technical Articles</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="copyright">
            &copy; {currentYear} All rights reserved. Made 
             by Md Anwar Alam
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
