import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const Login = ({ setIsLoggedIn }) => {
  // Default values for email and password
  const [input, setInput] = useState({ email: "admin", password: "admin" });
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    const storedUser = JSON.parse(localStorage.getItem("user"));

    // Check for admin login
    const isAdmin = input.email === "admin" && input.password === "admin";

    if (
      (storedUser &&
        input.email === storedUser.email &&
        input.password === storedUser.password) ||
      isAdmin
    ) {
      localStorage.setItem("isLoggedIn", "true");
      setIsLoggedIn(true); // Update login state immediately
      navigate("/"); // Redirect to home or dashboard
    } else {
      alert("Invalid email or password!");
    }
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-5 col-sm-8">
          <div className="card shadow p-4 rounded">
            <h2 className="text-center mb-4">Login</h2>
            <form onSubmit={handleLogin}>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Username or Email
                </label>
                <input
                  type="text"
                  id="email"
                  className="form-control"
                  placeholder="Enter username or email"
                  value={input.email}
                  onChange={(e) => setInput({ ...input, email: e.target.value })}
                  required
                />
              </div>

              <div className="mb-4">
                <label htmlFor="password" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  className="form-control"
                  placeholder="Enter password"
                  value={input.password}
                  onChange={(e) => setInput({ ...input, password: e.target.value })}
                  required
                />
              </div>

              <button type="submit" className="btn btn-primary w-100 mb-3">
                Login
              </button>
            </form>

            <p className="text-center">
              Not registered?{" "}
              <Link to="/signup" className="text-decoration-none">
                Signup here
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
