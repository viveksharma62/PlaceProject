import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Loading from "./Loading.jsx";

const Account = () => {
  const backend = process.env.REACT_APP_BACKEND_URL;
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [customImg, setCustomImg] = useState("");
  const [profileURL, setProfileURL] = useState(() => {
    return (
      localStorage.getItem("profileImage") ||
      "https://cdn-icons-png.flaticon.com/256/3001/3001758.png"
    );
  });
  const [file, setFile] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      navigate("/login"); // ✅ direct login page
      return;
    }

    axios
      .get(`${backend}/api/user`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => setUser(res.data))
      .catch((err) => {
        console.error(err);
        navigate("/login"); // ✅ direct login page
      });
  }, [navigate, backend]);

  const handleLogout = () => {
    localStorage.clear();
    // ✅ App.js ka state bhi update ho isliye event fire karein
    window.dispatchEvent(new Event("storage"));
    navigate("/login"); // ✅ login page par bhej do
  };

  const handleImageChange = () => {
    if (customImg.trim() !== "") {
      setProfileURL(customImg);
      localStorage.setItem("profileImage", customImg);
      setCustomImg("");
    }
  };

  const handleFileUpload = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      const localUrl = URL.createObjectURL(selectedFile);
      setProfileURL(localUrl);
      setFile(selectedFile);
      localStorage.setItem("profileImage", localUrl);
    }
  };

  if (!user) return <p className="text-center mt-5"><Loading /></p>;

  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card shadow-sm border-0 rounded-4 text-center">
            <div className="card-body p-4">
              <img
                src={profileURL}
                alt="Profile"
                className="rounded-circle border border-2 mb-3"
                style={{ width: "120px", height: "120px", objectFit: "cover" }}
              />

              <input
                type="text"
                value={customImg}
                onChange={(e) => setCustomImg(e.target.value)}
                placeholder="Enter image URL"
                className="form-control mb-2"
              />
              <button
                className="btn btn-sm btn-secondary mb-3"
                onClick={handleImageChange}
              >
                Update from URL
              </button>

              <input
                type="file"
                accept="image/*"
                className="form-control mb-2"
                onChange={handleFileUpload}
              />
              <small className="text-muted">Or upload from your computer</small>

              <h4 className="mt-3 mb-1">{user.name}</h4>
              <small className="text-muted">{user.email}</small>

              <ul className="list-group mt-4">
                <li className="list-group-item list-group-item-action active">
                  🧾 Account Details
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
                <p><strong>Full Name:</strong> {user.name}</p>
                <p><strong>Email:</strong> {user.email}</p>
                <p><strong>Gender:</strong> {user.gender || "N/A"}</p>
                <p><strong>Branch:</strong> {user.branch || "N/A"}</p>
                <p><strong>Course:</strong> {user.course || "N/A"}</p>
                <p><strong>Address:</strong> {user.address || "N/A"}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Account;
