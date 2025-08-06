import React, { useEffect, useState } from "react";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

const CompanyTable = () => {
  const [companies, setCompanies] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("companies")) || [];
    setCompanies(stored);
  }, []);

  const handleDelete = (index) => {
    const password = prompt("Enter password to delete:");

    if (password === "vivek@1234") {
      const updated = [...companies];
      updated.splice(index, 1);
      setCompanies(updated);
      localStorage.setItem("companies", JSON.stringify(updated));
      alert("Deleted successfully ✅");
    } else {
      alert("Wrong password ❌");
    }
  };

  const handleShow = (url) => {
    if (url) {
      window.open(url, "_blank");
    } else {
      alert("No URL found ❌");
    }
  };

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

      {companies.length === 0 ? (
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
              <tr key={i}>
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
                    onClick={() => handleDelete(i)}
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
