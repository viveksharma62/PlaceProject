import React from "react";
import { useNavigate } from "react-router-dom";
import {profileImg} from "../assets/projectData.js";



const Account = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    navigate("/"); // logout ke baad home page
    window.location.reload(); // page reload karenge taaki nav bar update ho jaye
  };

  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card shadow-sm border-0 rounded-4 text-center">
            <div className="card-body p-4">
              <img
                src={profileImg[0].img}
                alt="Profile"
                className="rounded-circle border border-2 mb-3"
                style={{ width: "120px", height: "120px" }}
              />
              <h4 className="mb-1">Vivek Sharma</h4>
              <small className="text-muted">vivek@example.com</small>

              <ul className="list-group mt-4">
                <li className="list-group-item list-group-item-action active">
                  🧾 Account Details
                </li>
                <li className="list-group-item list-group-item-action">
                  ✏️ Edit Bio
                </li>
                <li
                  className="list-group-item list-group-item-action text-danger"
                  style={{ cursor: "pointer" }}
                  onClick={handleLogout}
                >
                  🚪 Logout
                </li>
              </ul>

              <div className="mt-4 text-start">
                <h5>Account Information</h5>
                <p><strong>Full Name:</strong> Vivek Sharma</p>
                <p><strong>Email:</strong> vivek@example.com</p>
                <p><strong>Role:</strong> Student</p>
                <p><strong>Location:</strong> India</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Account;
