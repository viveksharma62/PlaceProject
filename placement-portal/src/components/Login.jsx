import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const Login = ({ setIsLoggedIn }) => {
  const [input, setInput] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:5000/api/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: input.email,
          password: input.password,
        }),
      });

      const data = await res.json();

      if (res.ok) {
        // Save token or user info in localStorage if needed
        localStorage.setItem("token", data.token);
        localStorage.setItem("user", JSON.stringify(data.user));
        localStorage.setItem("isLoggedIn", "true");

        setIsLoggedIn(true);
        alert("Successfully logged in!");
        navigate("/"); // redirect to homepage or dashboard
      } else {
        alert(data.message || "Login failed");
      }
    } catch (error) {
      alert("Error: " + error.message);
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
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="form-control"
                  placeholder="Enter email"
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
