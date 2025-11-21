import { useState } from "react";
import axios from "axios";
import "../styles/contact.css";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  function handleChange(e) {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function validateEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (!form.name.trim()) return setError("Please enter your name.");
    if (!validateEmail(form.email)) return setError("Please enter a valid email.");
    if (!form.message.trim()) return setError("Please write a message.");

    try {
      const res = await axios.post(
        "http://localhost:5000/api/contact",
        form
      );

      setSuccess("Thanks — your message has been received!");
      setForm({ name: "", email: "", phone: "", message: "" });

    } catch (err) {
      console.log(err);
      setError("Something went wrong. Try again.");
    }
  }

  return (
    <div className="contact-wrapper">
      <div className="contact-card">
        <h2>Contact Us</h2>
        <p className="muted">Have a question or an order request? Drop us a message.</p>

        {error && <div className="form-error">{error}</div>}
        {success && <div className="form-success">{success}</div>}

        <form onSubmit={handleSubmit} className="contact-form" noValidate>
          <label>
            Name
            <input
              name="name"
              type="text"
              value={form.name}
              onChange={handleChange}
              placeholder="Your name"
              required
            />
          </label>

          <label>
            Email
            <input
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              placeholder="you@example.com"
              required
            />
          </label>

          <label>
            Phone (optional)
            <input
              name="phone"
              type="tel"
              value={form.phone}
              onChange={handleChange}
              placeholder="+91 98765 43210"
            />
          </label>

          <label>
            Message
            <textarea
              name="message"
              rows="5"
              value={form.message}
              onChange={handleChange}
              placeholder="Write your message here..."
              required
            />
          </label>

          <div className="form-actions">
            <button type="submit" className="btn-submit">Send Message</button>
            <button
              type="button"
              className="btn-clear"
              onClick={() => { 
                setForm({ name: "", email: "", phone: "", message: "" }); 
                setError(""); 
                setSuccess(""); 
              }}
            >
              Clear
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
