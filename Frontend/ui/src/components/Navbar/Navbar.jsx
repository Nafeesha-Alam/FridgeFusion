import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    navigate("/login");
  };

  return (
    <nav className="bg-white/80 backdrop-blur-md sticky top-0 z-50 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        
        <Link to="/" className="flex items-center gap-2">
          <div className="w-10 h-10 bg-orange-600 rounded-xl flex items-center justify-center text-white font-bold text-xl">
            F
          </div>
          <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-600 to-orange-400">
            FridgeFusion
          </span>
        </Link>

        
        <div className="hidden md:flex items-center gap-8">
          <Link
            to="/"
            className="text-slate-600 hover:text-orange-600 font-medium transition"
          >
            Home
          </Link>
          <Link
            to="/scan"
            className="text-slate-600 hover:text-orange-600 font-medium transition"
          >
            AI Scan
          </Link>
          <button className="text-slate-600 hover:text-orange-600 font-medium transition">
            Recipes
          </button>
        </div>

       
        <div className="flex items-center gap-4">
          {token ? (
            <button
              onClick={handleLogout}
              className="px-5 py-2.5 rounded-full bg-slate-900 text-white text-sm font-semibold hover:bg-slate-800 transition"
            >
              Logout
            </button>
          ) : (
            <>
              <Link
                to="/login"
                className="text-slate-600 font-semibold text-sm"
              >
                Sign In
              </Link>
              <Link
                to="/signup"
                className="px-5 py-2.5 rounded-full bg-orange-600 text-white text-sm font-semibold hover:bg-orange-700 shadow-lg shadow-orange-200 transition"
              >
               Sign Up
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
