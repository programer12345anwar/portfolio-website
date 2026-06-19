import { FaCode, FaRocket, FaUsers, FaAward } from "react-icons/fa";
import "./About.css";

function About() {
  const stats = [
    { icon: FaCode, label: "LeetCode Problems", value: "250+" },
    { icon: FaRocket, label: "Total Practice Problems", value: "600+" },
    { icon: FaUsers, label: "GeeksforGeeks Problems", value: "250+" },
    { icon: FaAward, label: "Certifications", value: "3" },
  ];

  return (
    <section className="about" id="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>

        <div className="about-content">
          <div className="about-text fade-in">
            <p className="about-para">
              I am a Java Full-Stack Developer with strong expertise in Core
              Java, Data Structures & Algorithms (DSA), and modern backend
              technologies. I specialize in building scalable microservices
              using Spring Boot, crafting RESTful APIs, and implementing secure
              authentication with Spring Security and JWT.
            </p>
            <p className="about-para">
              Alongside my current role at Wipro Limited, I keep sharpening my
              engineering depth through production-style projects, database
              design, Docker-based workflows, and clean API development. I have
              solved 600+ practice problems across platforms like LeetCode,
              GeeksforGeeks, and AccioJob.
            </p>
            <p className="about-para">
              My passion lies in writing clean, maintainable code and designing
              systems that scale. I am certified in Java Full Stack Development
              and TCS NQT, committed to continuous learning, and always eager to
              tackle complex technical challenges.
            </p>
          </div>

          <div className="stats-grid">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div
                  key={index}
                  className="stat-card fade-in"
                  style={{ animationDelay: `${index * 0.01}s` }}
                >
                  <div className="stat-icon">
                    <Icon />
                  </div>
                  <div className="stat-value">{stat.value}</div>
                  <div className="stat-label">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
