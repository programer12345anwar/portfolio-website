import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { SiLeetcode as FaLeetCode } from "react-icons/si";
import { Link } from "react-scroll";
import "./Hero.css";

function Hero() {
  const handleDownloadResume = () => {
    // Download resume from Google Drive using the file ID
    // File ID extracted from: https://drive.google.com/file/d/1fa_MrLw0DajKSeza0e14KF9wnS5-2ZnF/view
    const driveFileId = "1fa_MrLw0DajKSeza0e14KF9wnS5-2ZnF";
    const driveDownloadUrl = `https://drive.google.com/uc?export=download&id=${driveFileId}`;

    // Open the download link in a new tab/window to trigger the download
    const element = document.createElement("a");
    element.href = driveDownloadUrl;
    element.target = "_blank";
    element.rel = "noopener noreferrer";
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  const handleEmailClick = (e) => {
    e.preventDefault();
    const email = "mdanwar40212@gmail.com";
    const mailtoLink = `mailto:${email}`;

    // Track whether the window lost focus after trying to open the mail client.
    // If it doesn't lose focus, assume the mail client didn't open and fallback to Gmail.
    let blurred = false;
    const onBlur = () => {
      blurred = true;
    };
    window.addEventListener("blur", onBlur);

    // Open a blank window synchronously so we can reuse it for the Gmail fallback
    // (this avoids popup blockers when opening from the timeout)
    let fallbackWin = null;
    try {
      fallbackWin = window.open("", "_blank", "noopener,noreferrer");
    } catch (err) {
      fallbackWin = null;
    }

    // Try opening the user's default mail client
    window.location.href = mailtoLink;

    // Fallback to Gmail compose if default client didn't open (no blur)
    setTimeout(() => {
      window.removeEventListener("blur", onBlur);
      if (!blurred) {
        const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(email)}`;
        try {
          if (fallbackWin && !fallbackWin.closed) {
            fallbackWin.location.href = gmailUrl;
          } else {
            window.open(gmailUrl, "_blank", "noopener,noreferrer");
          }
        } catch (err) {
          window.open(gmailUrl, "_blank", "noopener,noreferrer");
        }
      } else {
        // Close the placeholder tab if the mail client opened
        if (fallbackWin && !fallbackWin.closed) {
          try { fallbackWin.close(); } catch (err) { /* ignore */ }
        }
      }
    }, 1000);
  };

  return (
    <section className="hero" id="home">
      <div className="container">
        <div className="hero-content fade-in">
          <div className="hero-text">
            <h1 className="hero-title">Hi, I'm Md Anwar Alam</h1>
            <p className="hero-subtitle">
              Full-Stack Java Developer | Spring Boot | Microservices | Data Structure and Algorithm | 300+ Coding Problems Solved Building scalable backend
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
                href="https://leetcode.com/u/mdalam40212/"
                className="social-link"
                title="LeetCode"
              >
                <FaLeetCode />
              </a>

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
                onClick={handleEmailClick}
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
