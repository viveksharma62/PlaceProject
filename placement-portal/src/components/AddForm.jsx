import React, { useState } from "react";
import axios from "axios";  // axios import karna hoga

const AddForm = () => {

  const backend = process.env.REACT_APP_BACKEND_URL;

  const [formData, setFormData] = useState({
    company: "",
    role: "",
    package: "",
    location: "",
    companyUrl: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Backend API call - POST request
      const res = await axios.post(`${backend}/api/companies/add`, formData);

      if (res.status === 201 || res.status === 200) {
        alert("Company Added ✅");
        setFormData({
          company: "",
          role: "",
          package: "",
          location: "",
          companyUrl: "",
        });
      } else {
        alert("Failed to add company!");
      }
    } catch (error) {
      console.error(error);
      alert("Error: " + (error.response?.data?.message || error.message));
    }
  };

  return (
    <section id="add" className="container my-5">
      <h2 className="text-center mb-4">Add Placement Details</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="company" className="form-label">Company Name</label>
          <input
            type="text"
            className="form-control"
            id="company"
            name="company"
            placeholder="Enter Company Name"
            value={formData.company}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="role" className="form-label">Role</label>
          <input
            type="text"
            className="form-control"
            id="role"
            name="role"
            placeholder="Enter Role"
            value={formData.role}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="package" className="form-label">Package</label>
          <input
            type="text"
            className="form-control"
            id="package"
            name="package"
            placeholder="Enter Package"
            value={formData.package}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="location" className="form-label">Location</label>
          <input
            type="text"
            className="form-control"
            id="location"
            name="location"
            placeholder="Enter Location"
            value={formData.location}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="companyUrl" className="form-label">Company URL</label>
          <input
            type="url"
            className="form-control"
            id="companyUrl"
            name="companyUrl"
            placeholder="https://example.com"
            value={formData.companyUrl}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit" className="btn btn-success w-100">
          Submit
        </button>
      </form>
    </section>
  );
};

export default AddForm;
