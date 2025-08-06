import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const Signup = () => {
  const [input, setInput] = useState({
    name: "",
    email: "",
    password: "",
    branch: "",
    course: "",
    address: "",
    interest: "",
    gender: "",
  });
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:5000/api/users/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(input),
      });

      const data = await res.json();

      if (res.ok) {
        alert("Signup successful!");
        navigate("/login");
      } else {
        alert(data.message || "Signup failed");
      }
    } catch (error) {
      alert("Error: " + error.message);
    }
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6 col-sm-10">
          <div className="card shadow p-4 rounded">
            <h2 className="text-center mb-4">Signup</h2>
            <form onSubmit={handleSignup}>
              {/* Name */}
              <div className="mb-3">
                <label htmlFor="name" className="form-label">Name</label>
                <input
                  type="text"
                  id="name"
                  className="form-control"
                  placeholder="Enter name"
                  value={input.name}
                  onChange={(e) => setInput({ ...input, name: e.target.value })}
                  required
                />
              </div>

              {/* Email */}
              <div className="mb-3">
                <label htmlFor="email" className="form-label">Email address</label>
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

              {/* Password */}
              <div className="mb-3">
                <label htmlFor="password" className="form-label">Password</label>
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

              {/* Gender */}
              <div className="mb-3">
                <label className="form-label">Gender</label>
                <div>
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="gender"
                      id="male"
                      value="Male"
                      checked={input.gender === "Male"}
                      onChange={(e) => setInput({ ...input, gender: e.target.value })}
                      required
                    />
                    <label className="form-check-label" htmlFor="male">
                      Male
                    </label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="gender"
                      id="female"
                      value="Female"
                      checked={input.gender === "Female"}
                      onChange={(e) => setInput({ ...input, gender: e.target.value })}
                      required
                    />
                    <label className="form-check-label" htmlFor="female">
                      Female
                    </label>
                  </div>
                </div>
              </div>

              {/* Branch */}
              <div className="mb-3">
                <label htmlFor="branch" className="form-label">Branch</label>
                <input
                  type="text"
                  id="branch"
                  className="form-control"
                  placeholder="Enter branch"
                  value={input.branch}
                  onChange={(e) => setInput({ ...input, branch: e.target.value })}
                />
              </div>

              {/* Course */}
              <div className="mb-3">
                <label htmlFor="course" className="form-label">Course</label>
                <input
                  type="text"
                  id="course"
                  className="form-control"
                  placeholder="Enter course"
                  value={input.course}
                  onChange={(e) => setInput({ ...input, course: e.target.value })}
                />
              </div>

              {/* Address */}
              <div className="mb-3">
                <label htmlFor="address" className="form-label">Address</label>
                <input
                  type="text"
                  id="address"
                  className="form-control"
                  placeholder="Enter address"
                  value={input.address}
                  onChange={(e) => setInput({ ...input, address: e.target.value })}
                />
              </div>

              {/* Interest */}
              <div className="mb-4">
                <label htmlFor="interest" className="form-label">Interest</label>
                <input
                  type="text"
                  id="interest"
                  className="form-control"
                  placeholder="Enter your interest"
                  value={input.interest}
                  onChange={(e) => setInput({ ...input, interest: e.target.value })}
                />
              </div>

              <button type="submit" className="btn btn-primary w-100 mb-3">
                Signup
              </button>
            </form>

            <p className="text-center">
              Already registered?{" "}
              <Link to="/login" className="text-decoration-none">
                Login here
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
