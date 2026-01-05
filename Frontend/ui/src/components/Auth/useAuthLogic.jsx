import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export function useAuthLogic(isLogin) {
  const [form, setForm] = useState({
    name: "", 
    email: "",
    password: "",
    confirmPassword: "",
    age: "", 
    gender: "male", 
    dietaryPreference: "non-veg", 
    allergies: "", 
  });
  
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const calculateStrength = (pass) => {
    let score = 0;
    if (!pass) return score;
    if (pass.length > 6) score++;
    if (pass.length > 10) score++;
    if (/[A-Z]/.test(pass)) score++;
    if (/[0-9]/.test(pass)) score++;
    if (/[^A-Za-z0-9]/.test(pass)) score++;
    return score;
  };

  const handleAction = async () => {
    if (!isLogin && form.password !== form.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    setLoading(true);

    try {
      const baseURL = "http://localhost:5000/api/users";
      const url = isLogin ? `${baseURL}/login` : `${baseURL}/signup`;

      const response = await axios.post(url, form, {
        withCredentials: true, 
      });

      const data = response.data;

      if (isLogin) {
        // --- UPDATED LOGIC FOR NAVBAR & AI INTEGRATION ---
        // 1. Store the token for Navbar conditional rendering
        localStorage.setItem("token", data.token); 
        
        // 2. Store the full user object (contains age, gender, diet)
        // This is used by Navbar for the gender badge and by FastAPI for AI prompts
        localStorage.setItem("userData", JSON.stringify(data.user));
        
        navigate("/");
        window.location.reload(); 
      } else {
        alert("Account Created! Please login.");
        navigate("/login");
      }
    } catch (err) {
      alert(err.response?.data?.message || "An error occurred");
    } finally {
      setLoading(false);
    }
  };

  return {
    form,
    setForm,
    loading,
    showPassword,
    setShowPassword,
    handleAction,
    strength: calculateStrength(form.password),
  };
}