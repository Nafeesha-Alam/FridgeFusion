import { useState } from "react";
import { useNavigate } from "react-router-dom";

export function useAuthLogic(isLogin) {
  const [form, setForm] = useState({
    username: "",
    password: "",
    confirmPassword: "",
    email: "",
    contact_no: "",
    qualification: "",
    profession: "Student",
    gender: "",
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
      const resp = await fetch(
        `${isLogin ? "/login" : "/signup"}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(form),
        }
      );
      const data = await resp.json();
      if (!resp.ok) throw new Error(data.detail || "Error occurred");

      if (isLogin) {
        localStorage.setItem("token", data.token);
        localStorage.setItem("username", data.username);
        localStorage.setItem("role", data.role);
        navigate("/");
        window.location.reload();
      } else {
        alert("Account Created!");
        navigate("/login");
      }
    } catch (err) {
      alert(err.message);
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
