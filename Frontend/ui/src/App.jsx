import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Auth from "./components/Auth/Auth";
import ChangePassword from "./components/Auth/ChangePassword";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";

function App() {
  const token = localStorage.getItem("token");

  const ProtectedRoute = ({ children }) => {
    return token ? children : <Navigate to="/login" />;
  };

  return (
    <BrowserRouter>
      <Navbar />

      <div className="min-h-screen bg-slate-50">
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/login" element={<Auth isLogin={true} />} />
          <Route path="/signup" element={<Auth isLogin={false} />} />

          <Route
            path="/changepassword"
            element={
              <ProtectedRoute>
                <ChangePassword />
              </ProtectedRoute>
            }
          />

          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
