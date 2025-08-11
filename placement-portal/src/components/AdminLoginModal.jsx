import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AdminLoginModal = () => {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (email === "vivekkumar.117942" && password === "vivek@1234") {
      setShow(false);
      navigate("/admin");
    } else {
      alert("Invalid email or password!");
    }
  };

  return (
    <>
      <div className="d-flex justify-content-center mt-5">
        <button className="btn btn-primary btn-sm" onClick={() => setShow(true)}>
          Go to Admin Page
        </button>
      </div>

      {show && (
        <div
          className="modal show d-flex align-items-center justify-content-center"
          style={{ display: "block", backgroundColor: "rgba(0,0,0,0.5)" }}
          tabIndex="-1"
        >
          <div className="modal-dialog">
            <div className="modal-content p-4 rounded">
              <h5 className="modal-title text-center mb-3">Admin Login</h5>

              <input
                type="text"
                className="form-control mb-3"
                placeholder="Username"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                autoFocus
              />

              <input
                type="password"
                className="form-control mb-4"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />

              <div className="d-flex justify-content-between">
                <button className="btn btn-success btn-sm" onClick={handleLogin}>
                  Login
                </button>
                <button className="btn btn-secondary btn-sm" onClick={() => setShow(false)}>
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AdminLoginModal;
