import React, { useEffect, useState } from "react";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import axios from "axios";
import Loading from './Loading'

const CompanyTable = () => {
  const [companies, setCompanies] = useState([]);
  const [loading, setLoading] = useState(true); // 🔁 loading state

  const backend = process.env.REACT_APP_BACKEND_URL;

  // ✅ Fetch data from backend
  const fetchCompanies = async () => {
    try {
      setLoading(true); // Start loading
      const res = await axios.get(`${backend}/api/companies`);
      setCompanies(res.data);
    } catch (error) {
      console.error("Error fetching companies:", error);
    } finally {
      setLoading(false); // Stop loading
    }
  };

  useEffect(() => {
    fetchCompanies();
  }, []);

  // ✅ Delete company by ID
  const handleDelete = async (id) => {
    const password = prompt("Enter password to delete:");

    if (password === "vivek@1234") {
      try {
        await axios.delete(`${backend}/api/companies/${id}`);
        alert("Deleted successfully ✅");
        fetchCompanies(); // Refresh list
      } catch (error) {
        alert("Error deleting ❌");
        console.error(error);
      }
    } else {
      alert("Wrong password ❌");
    }
  };

  // ✅ Open company link
  const handleShow = (url) => {
    if (url) {
      window.open(url, "_blank");
    } else {
      alert("No URL found ❌");
    }
  };

  // ✅ PDF Download
  const downloadPDF = () => {
    const doc = new jsPDF();
    doc.setFontSize(18);
    doc.text("Company Details", 14, 15);

    const headers = [["S.No", "Company", "Role", "Package", "Location"]];
    const rows = companies.map((c, i) => [
      i + 1,
      c.company,
      c.role,
      c.package,
      c.location,
    ]);

    autoTable(doc, {
      head: headers,
      body: rows,
      startY: 25,
      styles: { halign: "center" },
      headStyles: { fillColor: [0, 0, 0] },
    });

    const pageHeight = doc.internal.pageSize.height;
    doc.setFontSize(10);
    doc.text("Made by Vivek Sharma", 14, pageHeight - 10);

    doc.save("company-details.pdf");
  };

  return (
    <div className="container mt-4">
      <h2>Company List</h2>

      <button className="btn btn-success mb-3" onClick={downloadPDF}>
        Download PDF
      </button>

      {/* ✅ Show loading text or spinner */}
      {loading ? (
        <p>
          <i className="fa fa-spinner fa-spin me-2" /> <Loading/>
        </p>
      ) : companies.length === 0 ? (
        <p>No companies added yet.</p>
      ) : (
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>SrNo.</th>
              <th>Company Name</th>
              <th>Job Role</th>
              <th>Package</th>
              <th>Location</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {companies.map((c, i) => (
              <tr key={c._id}>
                <td>{i + 1}</td>
                <td>{c.company}</td>
                <td>{c.role}</td>
                <td>{c.package}</td>
                <td>{c.location}</td>
                <td>
                  <button
                    className="btn btn-primary btn-sm me-2"
                    onClick={() => handleShow(c.companyUrl)}
                  >
                    Show
                  </button>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => handleDelete(c._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default CompanyTable;
