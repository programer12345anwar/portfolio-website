import {
  FaBriefcase,
  FaGraduationCap,
  FaCertificate,
  FaTrophy,
} from "react-icons/fa";
import "./Experience.css";

function Experience() {
  const experiences = [
    {
      type: "work",
      icon: FaBriefcase,
      title: "Associate - Fraud Analyst",
      organization: "Wipro Limited",
      period: "2025 - Present",
      description: [
        "Reviewed and analyzed web content against Google quality guidelines with data-driven decision making",
        "Maintained high accuracy and SLA compliance while processing high-volume cases",
        "Used internal tools and rule-based workflows for brand manipulation detection",
      ],
    },
  ];

  const education = [
    {
      type: "education",
      icon: FaGraduationCap,
      title: "B.Tech in Computer Science",
      organization: "Maulana Azad National Urdu University (MANUU), Hyderabad",
      period: "2025",
      description: [
        "CGPA: 8.28",
        "Strong foundation in Data Structures, Algorithms, and Computer Science fundamentals",
      ],
    },
  ];

  const certifications = [
    {
      type: "certification",
      icon: FaCertificate,
      title: "Java Full Stack Development Certification",
      organization: "AccioJob",
      period: "2025",
      link: "https://drive.google.com/file/d/1gleWoEWQkrvmOAV9RBz8rLbnO7Spmx6y/view",
    },
    {
      type: "certification",
      icon: FaCertificate,
      title: "TCS National Qualifier Test (TCS NQT)",
      organization: "Tata Consultancy Services",
      period: "2025",
      link: "https://drive.google.com/file/d/1Cc0wlfORCBUAoBEc2E8PrufWwQKTi0sM/view",
    },
    {
      type: "certification",
      icon: FaCertificate,
      title: "HackerRank Certified - Java Problem Solving & Python Programming",
      organization: "HackerRank",
      period: "2024",
      link: "https://drive.google.com/file/d/14WIJVMLba19hR058T8Q5XT2BBTug903T/view",
    },
  ];

  const achievements = [
    {
      icon: FaTrophy,
      title: "LeetCode",
      description: "Solved 250+ problems on LeetCode",
      link: "https://leetcode.com/u/mdalam40212/",
    },
    {
      icon: FaTrophy,
      title: "GeeksforGeeks",
      description: "Solved 250+ problems on GeeksforGeeks",
    },
    {
      icon: FaTrophy,
      title: "AccioJob",
      description: "Solved 500+ problems on AccioJob",
    },
    {
      icon: FaTrophy,
      title: "ONGC Scholarship",
      description: "Merit-cum-Means Scholarship for Academic Excellence",
    },
  ];

  return (
    <section className="experience" id="experience">
      <div className="container">
        <h2 className="section-title">Experience & Education</h2>

        <div className="experience-container">
          <div className="timeline-section fade-in">
            <h3 className="subsection-title">Work Experience</h3>
            {experiences.map((exp, index) => {
              const Icon = exp.icon;
              return (
                <div key={index} className="timeline-item">
                  <div className="timeline-marker">
                    <Icon />
                  </div>
                  <div className="timeline-content">
                    <h4 className="timeline-title">{exp.title}</h4>
                    <p className="timeline-organization">{exp.organization}</p>
                    <p className="timeline-period">{exp.period}</p>
                    <ul className="timeline-description">
                      {exp.description.map((desc, idx) => (
                        <li key={idx}>{desc}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}

            <h3 className="subsection-title">Education</h3>
            {education.map((edu, index) => {
              const Icon = edu.icon;
              return (
                <div key={index} className="timeline-item">
                  <div className="timeline-marker">
                    <Icon />
                  </div>
                  <div className="timeline-content">
                    <h4 className="timeline-title">{edu.title}</h4>
                    <p className="timeline-organization">{edu.organization}</p>
                    <p className="timeline-period">{edu.period}</p>
                    <ul className="timeline-description">
                      {edu.description.map((desc, idx) => (
                        <li key={idx}>{desc}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="certifications-section fade-in">
            <h3 className="subsection-title">Certifications</h3>
            <div className="certifications-grid">
              {certifications.map((cert, index) => {
                const Icon = cert.icon;
                return (
                  <a
                    key={index}
                    href={cert.link || "#"}
                    className="cert-card"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="cert-icon">
                      <Icon />
                    </div>
                    <h4 className="cert-title">{cert.title}</h4>
                    <p className="cert-org">{cert.organization}</p>
                    <p className="cert-year">{cert.period}</p>
                  </a>
                );
              })}
            </div>

            <h3 className="subsection-title">Achievements & Accomplishments</h3>
            <div className="achievements-grid">
              {achievements.map((ach, index) => {
                const Icon = ach.icon;
                const CardTag = ach.link ? "a" : "article";

                return (
                  <CardTag
                    key={index}
                    {...(ach.link && { href: ach.link })}
                    className="achievement-card"
                    {...(ach.link && {
                      target: "_blank",
                      rel: "noopener noreferrer",
                      "aria-label": `Open ${ach.title} achievement`,
                    })}
                  >
                    <div className="achievement-icon">
                      <Icon />
                    </div>
                    <h4>{ach.title}</h4>
                    <p>{ach.description}</p>
                  </CardTag>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
