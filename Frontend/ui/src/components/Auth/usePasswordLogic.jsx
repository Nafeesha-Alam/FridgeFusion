import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export function usePasswordLogic() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [form, setForm] = useState({
    username: "",
    email: "",
    old_password: "",
    new_password: "",
    confirm_password: "",
  });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) setIsLoggedIn(true);
  }, []);

  const handleUpdate = async (e) => {
    e.preventDefault();

    if (form.new_password !== form.confirm_password) {
      alert("New passwords do not match!");
      return;
    }

    setLoading(true);
    try {
      const token = localStorage.getItem("token");
      const endpoint = isLoggedIn
        ? "/user/changepassword"
        : "/user/forgotpassword";
      const headers = { "Content-Type": "application/json" };
      if (isLoggedIn) headers["Authorization"] = `Bearer ${token}`;

      const body = isLoggedIn
        ? { old_password: form.old_password, new_password: form.new_password }
        : {
            username: form.username,
            email: form.email,
            new_password: form.new_password,
          };

      const resp = await fetch(``, {
        method: "PUT",
        headers: headers,
        body: JSON.stringify(body),
      });

      const data = await resp.json();
      if (!resp.ok) throw new Error(data.detail || "Action failed");

      alert(
        isLoggedIn
          ? "Password updated! Please login again."
          : "Password reset successful!"
      );

      localStorage.clear();
      navigate("/login");
      window.location.reload();
    } catch (err) {
      alert(err.message);
    } finally {
      setLoading(false);
    }
  };

  return { isLoggedIn, form, setForm, loading, handleUpdate };
}
