import React from "react";
import { Link, useNavigate } from "react-router-dom";
import icons from '../assets/icons.png';

const Navbar = ({ isLoggedIn, setIsLoggedIn }) => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false);
    navigate("/");
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
       <img src={icons} alt="icon" style={{ width: "30px", height: "30px" }} />
        <Link className="navbar-brand" to="/">Placement Site</Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto align-items-center">
            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>

            {isLoggedIn && (
              <>
                <li className="nav-item">
                  <Link className="nav-link" to="/add">Add</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/resources">Resource</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/details">Company Details</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/account">Account</Link>
                </li>
                <li className="nav-item nav-link text-white ms-3">
                  Hello, {user ? user.name : "vivek"}
                </li>
              </>
            )}

            {!isLoggedIn && (
              <li className="nav-item">
                <Link className="nav-link" to="/login"  onClick={handleLogout}>Login</Link>
              </li>
            )}

            {/* Logout tab hata diya */}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
