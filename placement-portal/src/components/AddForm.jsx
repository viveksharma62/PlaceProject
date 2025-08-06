import React, { useState } from "react";

const AddForm = () => {
  const [formData, setFormData] = useState({
    company: "",
    role: "",
    package: "",
    location: "",
    companyUrl: "", // ✅ New field
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const existingData = JSON.parse(localStorage.getItem("companies")) || [];

    const newEntry = {
      sno: existingData.length + 1,
      ...formData,
    };

    existingData.push(newEntry);
    localStorage.setItem("companies", JSON.stringify(existingData));
    alert("Company Added ✅");

    setFormData({
      company: "",
      role: "",
      package: "",
      location: "",
      companyUrl: "", // ✅ Clear after submit
    });
  };

  return (
    <section id="add" className="container my-5">
      <h2 className="text-center mb-4">Add Placement Details</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="company" className="form-label">Company Name</label>
          <input type="text" className="form-control" id="company" name="company" placeholder="Enter Company Name" value={formData.company} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label htmlFor="role" className="form-label">Role</label>
          <input type="text" className="form-control" id="role" name="role" placeholder="Enter Role" value={formData.role} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label htmlFor="package" className="form-label">Package</label>
          <input type="text" className="form-control" id="package" name="package" placeholder="Enter Package" value={formData.package} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label htmlFor="location" className="form-label">Location</label>
          <input type="text" className="form-control" id="location" name="location" placeholder="Enter Location" value={formData.location} onChange={handleChange} required />
        </div>

        {/* ✅ New Company URL Field */}
        <div className="mb-3">
          <label htmlFor="companyUrl" className="form-label">Company URL</label>
          <input type="url" className="form-control" id="companyUrl" name="companyUrl" placeholder="https://example.com" value={formData.companyUrl} onChange={handleChange} required />
        </div>

        <button type="submit" className="btn btn-success w-100">Submit</button>
      </form>
    </section>
  );
};

export default AddForm;
