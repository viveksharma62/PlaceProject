import React, { useEffect, useState } from "react";
import axios from "axios";

// Chart imports
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend
} from "chart.js";

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const Admin = () => {
  const backend = process.env.REACT_APP_BACKEND_URL;

  const [userCount, setUserCount] = useState(null);
  const [companyCount, setCompanyCount] = useState(null);
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchCountsAndUsers = async () => {
    try {
      setLoading(true);
      setError(null);

      const [userRes, companyRes, usersRes] = await Promise.all([
        axios.get(`${backend}/api/admin/users/count`),
        axios.get(`${backend}/api/admin/companies/count`),
        axios.get(`${backend}/api/admin/users`)
      ]);

      setUserCount(userRes.data.count);
      setCompanyCount(companyRes.data.count);
      setUsers(usersRes.data);
    } catch (err) {
      setError("Error fetching data: " + (err.response?.data?.message || err.message));
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (backend) {
      fetchCountsAndUsers();
    } else {
      setError("Backend URL is not set!");
      setLoading(false);
    }
  }, [backend]);

  const handleDelete = async (userId) => {
    if (!window.confirm("Are you sure you want to delete this user?")) return;

    try {
      await axios.delete(`${backend}/api/admin/users/${userId}`);
      setUsers(users.filter(user => user._id !== userId));
      setUserCount(prev => prev - 1);
    } catch (err) {
      alert("Error deleting user.");
      console.error(err);
    }
  };

  if (loading) return <div className="container py-5"><h3>Loading Admin Dashboard...</h3></div>;
  if (error) return <div className="container py-5 text-danger"><h3>{error}</h3></div>;

  // Chart data
  const data = {
    labels: ["Users", "Companies"],
    datasets: [
      {
        label: "Count",
        data: [userCount, companyCount],
        backgroundColor: ["#1f77b4", "#28a745"], // blue and green shades
        borderRadius: 5,
        maxBarThickness: 50,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { display: false },
      tooltip: { enabled: true },
    },
    scales: {
      y: { beginAtZero: true, stepSize: 1 },
    },
  };

  return (
    <div className="container py-5" style={{ fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif" }}>
      <h2 className="mb-4" style={{ color: "#343a40", fontWeight: "700", textAlign: "center" }}>Admin Dashboard</h2>

      {/* Chart */}
      <div className="my-4 p-3 bg-light rounded shadow-sm" style={{ maxWidth: 600, margin: "auto" }}>
        <Bar data={data} options={options} />
      </div>

      <div className="row mt-5 g-4">
        <div className="col-md-6">
          <div className="card shadow-sm p-4 text-center bg-primary text-white rounded">
            <h5>Total Users</h5>
            <h3 style={{ fontWeight: "700" }}>{userCount}</h3>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card shadow-sm p-4 text-center bg-success text-white rounded">
            <h5>Total Companies</h5>
            <h3 style={{ fontWeight: "700" }}>{companyCount}</h3>
          </div>
        </div>
      </div>

      <h4 className="mt-5 mb-3 text-secondary" style={{ fontWeight: "600" }}>Users List</h4>
      <div className="table-responsive shadow-sm rounded" style={{ overflowX: "auto" }}>
        <table className="table table-bordered table-hover mb-5" style={{ backgroundColor: "#f8f9fa" }}>
          <thead className="table-dark">
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th style={{ width: "100px" }}>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.length === 0 && (
              <tr><td colSpan="3" className="text-center py-3">No users found</td></tr>
            )}
            {users.map(user => (
              <tr key={user._id}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                  <button 
                    className="btn btn-danger btn-sm"
                    style={{ fontWeight: "600" }}
                    onClick={() => handleDelete(user._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Admin;
