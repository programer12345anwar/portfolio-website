import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { scrollToSection } from "../utils/scrollToSection";
import "./Navbar.css";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((current) => !current);
  };

  const handleSectionClick = (event, sectionId) => {
    event.preventDefault();
    setIsOpen(false);
    scrollToSection(sectionId);
    window.history.replaceState(null, "", `#${sectionId}`);
  };

  const menuItems = [
    { name: "Home", to: "home" },
    { name: "About", to: "about" },
    { name: "Skills", to: "skills" },
    { name: "Projects", to: "projects" },
    { name: "Experience", to: "experience" },
    { name: "Contact", to: "contact" },
  ];

  return (
    <nav className="navbar" aria-label="Primary navigation">
      <div className="navbar-container">
        <div className="logo">
          <a
            href="#home"
            className="logo-link"
            aria-label="Go to home section"
            onClick={(event) => handleSectionClick(event, "home")}
          >
            <h1>Md Anwar Alam</h1>
          </a>
        </div>

        <div id="primary-menu" className={`menu ${isOpen ? "active" : ""}`}>
          {menuItems.map((item) => (
            <a
              key={item.to}
              href={`#${item.to}`}
              className="menu-item"
              onClick={(event) => handleSectionClick(event, item.to)}
            >
              {item.name}
            </a>
          ))}
        </div>

        <button
          className="hamburger"
          type="button"
          onClick={toggleMenu}
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-controls="primary-menu"
          aria-expanded={isOpen}
        >
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
