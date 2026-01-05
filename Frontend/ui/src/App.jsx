import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Auth from "./components/Auth/Auth";
import ChangePassword from "./components/Auth/ChangePassword";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import ScanPage from "./components/Features/ScanPage"; 
import ContactPage from "./components/Contact/ContactPage"; // Import the new Contact Page

function App() {
  // We check the token to determine if the user is authenticated
  const token = localStorage.getItem("token");

  // ProtectedRoute component to shield sensitive pages
  const ProtectedRoute = ({ children }) => {
    return token ? children : <Navigate to="/login" />;
  };

  return (
    <BrowserRouter>
      {/* Navbar will now handle the logic to show the Name and Gender badge */}
      <Navbar />

      <div className="min-h-screen bg-slate-50">
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Auth isLogin={true} />} />
          <Route path="/signup" element={<Auth isLogin={false} />} />
          
          {/* Contact page is usually public, but can be moved into ProtectedRoute if preferred */}
          <Route path="/contact" element={<ContactPage />} />

          {/* Protected AI Scan Route */}
          <Route
            path="/scan"
            element={
              <ProtectedRoute>
                <ScanPage />
              </ProtectedRoute>
            }
          />

          {/* Protected Password Change Route */}
          <Route
            path="/changepassword"
            element={
              <ProtectedRoute>
                <ChangePassword />
              </ProtectedRoute>
            }
          />

          {/* Fallback redirect to Home */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;