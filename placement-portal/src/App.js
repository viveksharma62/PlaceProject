import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import Navbar from "./components/Navbar";
import Carousel from "./components/Carousel";
import About from "./components/About";
import AddForm from "./components/AddForm";
import CompanyTable from "./components/CompanyTable";
import Footer from "./components/Footer";
import Account from "./components/Account";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Resources from "./components/Resource"; // 

const Home = () => (
  <>
    <Carousel />
    <About />
    <Footer />
  </>
);

// PrivateRoute component to protect pages
const PrivateRoute = ({ isLoggedIn, children }) => {
  return isLoggedIn ? children : <Navigate to="/login" />;
};

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem("isLoggedIn") === "true"
  );

  return (
    <Router>
      <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/signup" element={<Signup />} />
        
        <Route
          path="/add"
          element={
            <PrivateRoute isLoggedIn={isLoggedIn}>
              <AddForm />
            </PrivateRoute>
          }
        />
        <Route
          path="/details"
          element={
            <PrivateRoute isLoggedIn={isLoggedIn}>
              <CompanyTable />
            </PrivateRoute>
          }
        />
        <Route
          path="/account"
          element={
            <PrivateRoute isLoggedIn={isLoggedIn}>
              <Account />
            </PrivateRoute>
          }
        />

        {/* ✅ New route for Resources page */}
        <Route path="/resources" element={<Resources />} />
      </Routes>
    </Router>
  );
}

export default App;
