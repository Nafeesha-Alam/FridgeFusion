import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { User, Camera, ChefHat, LogOut, MessageSquare } from "lucide-react";

const Navbar = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  
 
  const userData = JSON.parse(localStorage.getItem("userData") || "{}");

  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
    window.location.reload();
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
          <Link to="/" className="text-slate-600 hover:text-orange-600 font-medium transition">
            Home
          </Link>
          
          {token && (
            <Link to="/scan" className="text-slate-600 hover:text-orange-600 font-medium transition flex items-center gap-1">
              <Camera size={18} /> AI Scan
            </Link>
          )}
          
     
          <Link to="/contact" className="text-slate-600 hover:text-orange-600 font-medium transition flex items-center gap-1">
            <MessageSquare size={18} /> Contact
          </Link>
        </div>

      
        <div className="flex items-center gap-4">
          {token ? (
            <div className="flex items-center gap-4">
             
              <div className="hidden sm:flex items-center gap-3 px-4 py-2 bg-orange-50 rounded-full border border-orange-100">
                <div className="w-6 h-6 bg-orange-200 rounded-full flex items-center justify-center">
                   <User size={14} className="text-orange-700" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs font-bold text-slate-800 leading-none">
                     {userData.name || "User"}
                  </span>
                  <span className="text-[10px] text-orange-600 font-medium uppercase">
                     {userData.gender}
                  </span>
                </div>
              </div>

              <button
                onClick={handleLogout}
                className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-slate-900 text-white text-sm font-semibold hover:bg-slate-800 transition shadow-md"
              >
                <LogOut size={16} /> Logout
              </button>
            </div>
          ) : (
            <div className="flex items-center gap-4">
              <Link to="/login" className="text-slate-600 font-semibold text-sm hover:text-orange-600 transition">
                Login
              </Link>
              <Link
                to="/signup"
                className="px-6 py-2.5 rounded-full bg-orange-600 text-white text-sm font-semibold hover:bg-orange-700 shadow-lg shadow-orange-200 transition"
              >
                Sign Up
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;