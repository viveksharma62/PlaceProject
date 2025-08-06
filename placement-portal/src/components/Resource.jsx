import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { jobSites } from "../assets/projectData.js"; // 🟡 Path change karo agar file alag jagah ho

const Resources = () => {
  return (
    <div className="container mt-5">
      <h3 className="text-center mb-4">Top Job Search Sites</h3>
      <div className="row justify-content-center">
        {jobSites.map((site, index) => (
          <div key={index} className="col-md-4 col-sm-6 mb-4">
            <div className="card h-100 shadow text-center">
              <div className="card-body d-flex flex-column align-items-center justify-content-center">
                <img
                  src={site.icon}
                  alt={site.name}
                  className="img-fluid mb-3"
                  style={{ width: "80px", height: "80px", objectFit: "contain" }}
                />
                <h5 className="card-title">{site.name}</h5>
                <a
                  href={site.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary mt-3"
                >
                  Go to Site
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Resources;
