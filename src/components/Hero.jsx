import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";
import { Link } from "react-scroll";
import "./Hero.css";

function Hero() {
  const handleDownloadResume = () => {
    // Create a sample resume download
    const resumeContent = `
Md Anwar Alam
+91 6200705989 | mdanwar40212@gmail.com
Hyderabad, India

PROFESSIONAL SUMMARY
Full-Stack Java Developer with expertise in Spring Boot, Microservices, and Data Structures & Algorithms.
Solved 600+ LeetCode and DSA problems. Currently working as Associate at Wipro Limited.

SKILLS
- Core Java: Collections, Multithreading, Stream API, Lambda Expressions
- Spring Boot, Spring Security, Microservices Architecture
- Databases: MySQL, PostgreSQL, MongoDB, Redis
- Tools: Maven, Docker, Git, JUnit, Postman
- Frontend: React, JavaScript, HTML5, CSS3

WORK EXPERIENCE
Associate - Content Analyst | Wipro Limited (2025 - Present)
- Analyze and optimize content strategies
- Implement backend solutions for content delivery

EDUCATION
B.Tech Computer Science
Maulana Azad National Urdu University (MANUU)
GPA: 8.28 | Year: 2025

CERTIFICATIONS
- Java Full Stack Development - AccioJob (2025)
- TCS National Qualifier Test - TCS (2025)
- HackerRank Java & Python (2024)
- Full Stack Web Development - Udemy

PROJECTS
1. StreamSphere - Java, Spring Boot, Microservices
2. Cloud Share - Java, Spring Boot, React, JWT
3. Portfolio Website - React, Vite, CSS3

ACHIEVEMENTS
- 250+ LeetCode Problems Solved
- 600+ DSA Problems Solved
- 250+ GeeksforGeeks Problems
- ONGC Merit-cum-Means Scholarship
    `;

    const element = document.createElement("a");
    const file = new Blob([resumeContent], { type: "text/plain" });
    element.href = URL.createObjectURL(file);
    element.download = "https://drive.google.com/file/d/1fa_MrLw0DajKSeza0e14KF9wnS5-2ZnF/view?usp=drivesdk";
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  return (
    <section className="hero" id="home">
      <div className="container">
        <div className="hero-content fade-in">
          <div className="hero-text">
            <h1 className="hero-title">Hi, I'm Md Anwar Alam</h1>
            <p className="hero-subtitle">
              Full-Stack Java Developer | Spring Boot | Microservices | DSA
              Expert | 600+ Coding Problems Solved Building scalable backend
              systems and responsive web applications.
            </p>
            <div className="hero-cta">
              <Link
                to="projects"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="btn btn-primary"
                style={{ cursor: "pointer" }}
              >
                View My Work
              </Link>
              <button
                className="btn btn-secondary"
                onClick={handleDownloadResume}
              >
                Download Resume
              </button>
            </div>
            <div className="social-links">
              <a
                href="https://github.com/programer12345anwar"
                className="social-link"
                title="GitHub"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/md-anwar-alam-45b4b1240/"
                className="social-link"
                title="LinkedIn"
              >
                <FaLinkedin />
              </a>
              <a
                href="mailto:mdanwar40212@gmail.com"
                className="social-link"
                title="Email"
              >
                <FaEnvelope />
              </a>
            </div>
          </div>
          <div className="hero-image">
            <img
              src={new URL("/profile.jpg", import.meta.url).href}
              alt="Md Anwar Alam"
              className="profile-photo"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
