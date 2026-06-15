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
      // Validate form data
      if (
        !formData.name ||
        !formData.email ||
        !formData.subject ||
        !formData.message
      ) {
        throw new Error("All fields are required");
      }
      

      // Prepare form data to submit (Formspree or other endpoint)
      const formDataToSubmit = new FormData();
      formDataToSubmit.append("name", formData.name);
      formDataToSubmit.append("email", formData.email);
      formDataToSubmit.append("subject", formData.subject);
      formDataToSubmit.append("message", formData.message);


      // Use configurable endpoint via Vite env var `VITE_FORMSPREE_ENDPOINT`.
      // If not set, this falls back to the previous placeholder endpoint.
      const FORMSPREE_ENDPOINT =
        import.meta.env.VITE_FORMSPREE_ENDPOINT ||
        "https://formspree.io/f/xyzyzryb";

      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: formDataToSubmit,
        headers: {
          Accept: "application/json",
        },
      });


      // Try to read response body for better diagnostics
      let respBody = "";
      try {
        respBody = await response.text();
      } catch (err) {
        respBody = "<no response body>";
      }

      if (!response.ok) {
        throw new Error(
          `Form submission failed: ${response.status} ${response.statusText} - ${respBody}`,
        );
      }

      // Show success toast
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

      // Reset form
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      console.error("Error sending message:", error);
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

  const handleEmailClick = () => {
    // Open Gmail compose
    window.open(
      `https://mail.google.com/mail/u/0/?view=cm&fs=1&to=mdanwar40212@gmail.com`,
      "_blank",
    );
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
            
            <div className="info-card email-card" onClick={handleEmailClick}>
              <FaEnvelope className="info-icon" />
              <h3>Email</h3>
              <p style={{ cursor: "pointer", color: "#3b82f6" }}>
                mdanwar40212@gmail.com
              </p>
            </div>
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

            <button type="submit" className="submit-btn" disabled={isLoading}>
              {isLoading ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
