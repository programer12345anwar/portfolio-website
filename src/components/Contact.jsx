import { useState } from "react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import toast, { Toaster } from "react-hot-toast";
import "./Contact.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    website: "",
  });

  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      if (
        !formData.name.trim() ||
        !formData.email.trim() ||
        !formData.subject.trim() ||
        !formData.message.trim()
      ) {
        throw new Error("All fields are required");
      }

      if (formData.website) {
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
          website: "",
        });
        return;
      }

      const FORMSPREE_ENDPOINT = import.meta.env.VITE_FORMSPREE_ENDPOINT;

      if (!FORMSPREE_ENDPOINT) {
        throw new Error("Contact form endpoint is not configured");
      }

      const formDataToSubmit = new FormData();
      formDataToSubmit.append("name", formData.name.trim());
      formDataToSubmit.append("email", formData.email.trim());
      formDataToSubmit.append("subject", formData.subject.trim());
      formDataToSubmit.append("message", formData.message.trim());

      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: formDataToSubmit,
        headers: {
          Accept: "application/json",
        },
      });

      if (!response.ok) {
        throw new Error(`Form submission failed: ${response.status}`);
      }

      toast.success("Message sent to Md Anwar Alam! He will reply soon.", {
        duration: 4000,
        position: "bottom-right",
        style: {
          background: "#10b981",
          color: "#fff",
          fontSize: "1rem",
          borderRadius: "8px",
        },
      });

      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
        website: "",
      });
    } catch (error) {
      if (import.meta.env.DEV) {
        console.error("Error sending message:", error);
      }

      toast.error(
        "Failed to send message. Please try again or contact directly at mdanwar40212@gmail.com",
        {
          duration: 4000,
          position: "bottom-right",
          style: {
            background: "#ef4444",
            color: "#fff",
            fontSize: "1rem",
            borderRadius: "8px",
          },
        },
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="contact" id="contact">
      <Toaster />
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>

        <div className="contact-content">
          <div className="contact-info fade-in">
            <div className="info-card">
              <FaPhone className="info-icon" />
              <h3>Phone</h3>
              <p>
                <a href="tel:+916200705989">+91 6200705989</a>
              </p>
            </div>
            
            <a
              className="info-card email-card"
              href="mailto:mdanwar40212@gmail.com"
              aria-label="Email Md Anwar Alam"
            >
              <FaEnvelope className="info-icon" />
              <h3>Email</h3>
              <p>mdanwar40212@gmail.com</p>
            </a>
            <div className="info-card">
              <FaMapMarkerAlt className="info-icon" />
              <h3>Location</h3>
              <p>Hyderabad, India</p>
            </div>
          </div>

          <form className="contact-form fade-in" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Your name"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="your.email@example.com"
              />
            </div>

            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                placeholder="Project inquiry"
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
                placeholder="Tell me about your project..."
              ></textarea>
            </div>

            <div className="form-group honeypot" aria-hidden="true">
              <label htmlFor="website">Website</label>
              <input
                type="text"
                id="website"
                name="website"
                value={formData.website}
                onChange={handleChange}
                tabIndex="-1"
                autoComplete="off"
              />
            </div>

            <button
              type="submit"
              className="submit-btn"
              disabled={isLoading}
              aria-busy={isLoading}
            >
              {isLoading ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
