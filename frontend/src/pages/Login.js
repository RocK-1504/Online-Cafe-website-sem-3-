import { useState } from "react";
import axios from "axios";
import "../styles/login.css";

export default function Login() {
  const [form, setForm] = useState({ name: "", mobile: "" });
  const [error, setError] = useState("");

  function handleChange(e) {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");

    if (!form.name.trim()) return setError("Enter your name.");
    if (!/^[6-9]\d{9}$/.test(form.mobile))
      return setError("Enter a valid 10-digit mobile number.");

    try {
      const res = await axios.post(
        "http://localhost:5000/api/users/login",
        form
      );

      localStorage.setItem("user", JSON.stringify(res.data));
      window.location.href = "/";
    } catch (err) {
      console.log(err);
      setError("Login failed.");
    }
  }

  return (
    <div className="login-wrapper">
      <div className="login-card">
        <h2>Login</h2>

        {error && <div className="login-error">{error}</div>}

        <form className="login-form" onSubmit={handleSubmit}>
          <label>
            Name
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Your name"
            />
          </label>

          <label>
            Mobile Number
            <input
              type="text"
              name="mobile"
              value={form.mobile}
              onChange={handleChange}
              placeholder="9876543210"
            />
          </label>

          <button className="btn-login" type="submit">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
