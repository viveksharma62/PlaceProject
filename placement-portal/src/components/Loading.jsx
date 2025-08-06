// src/components/Loading.js
import React from "react";
import { FaSpinner } from "react-icons/fa";

const Loading = () => {
  return (
    <div className="d-flex justify-content-center align-items-center" style={{ height: "50vh" }}>
      <FaSpinner className="spinner" size={40} color="#007bff" />
    </div>
  );
};

export default Loading;
