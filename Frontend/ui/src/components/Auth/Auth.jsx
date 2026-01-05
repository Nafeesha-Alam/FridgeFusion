import React from "react";
import { Link } from "react-router-dom";
import {
  Mail,
  Eye,
  EyeOff,
  User,
  Lock,
  Loader2,
  Phone,
  ChefHat,
  Calendar,
  Utensils,
} from "lucide-react";
import PasswordStrength from "./PasswordStrength";
import AuthLayout from "./AuthLayout";
import { useAuthLogic } from "./useAuthLogic";

export default function Auth({ isLogin }) {
  const {
    form,
    setForm,
    loading,
    showPassword,
    setShowPassword,
    handleAction,
    strength,
  } = useAuthLogic(isLogin);

  const passwordsMatch =
    form.password === form.confirmPassword && form.confirmPassword !== "";

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <AuthLayout>
      <div className="space-y-5">
        <div className="text-center mb-6">
          <div className="inline-flex items-center justify-center w-12 h-12 bg-orange-100 text-orange-600 rounded-2xl mb-4">
            <ChefHat size={28} />
          </div>
          <h2 className="text-2xl font-bold text-slate-900">
            {isLogin ? "Welcome Back!" : "Join FridgeFusion"}
          </h2>
          <p className="text-slate-500 text-sm mt-1">
            {isLogin
              ? "Your fridge is waiting for you."
              : "Start cooking smarter today."}
          </p>
        </div>

        
        <div className="relative group">
          <Mail
            className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-orange-500 transition-colors"
            size={18}
          />
          <input
            name="email"
            type="email"
            className="w-full p-3.5 pl-11 border border-slate-200 rounded-2xl outline-none focus:ring-4 focus:ring-orange-500/10 focus:border-orange-500 transition-all text-sm bg-slate-50/50"
            placeholder="Email Address"
            value={form.email || ""}
            onChange={handleChange}
            required
          />
        </div>

        {!isLogin && (
          <div className="space-y-4 animate-in fade-in slide-in-from-top-2 duration-300">
         
            <div className="relative group">
              <User
                className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-orange-500"
                size={18}
              />
              <input
                name="name"
                className="w-full p-3.5 pl-11 border border-slate-200 rounded-2xl outline-none focus:ring-4 focus:ring-orange-500/10 focus:border-orange-500 transition-all text-sm bg-slate-50/50"
                placeholder="Full Name"
                type="text"
                value={form.name || ""}
                onChange={handleChange}
                required
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Age Field - Matches 'age' in Model */}
              <div className="relative">
                <Calendar
                  className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400"
                  size={18}
                />
                <input
                  name="age"
                  type="number"
                  className="w-full p-3.5 pl-11 border border-slate-200 rounded-2xl outline-none focus:ring-4 focus:ring-orange-500/10 focus:border-orange-500 transition-all text-sm bg-slate-50/50"
                  placeholder="Age"
                  value={form.age || ""}
                  onChange={handleChange}
                  required
                />
              </div>

            
              <div className="relative">
                <select
                  name="gender"
                  className="w-full p-3.5 border border-slate-200 rounded-2xl bg-slate-50/50 text-sm outline-none focus:border-orange-500 appearance-none"
                  value={form.gender || ""}
                  onChange={handleChange}
                  required
                >
                  <option value="">Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>

           
            <div className="relative">
              <Utensils
                className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400"
                size={18}
              />
              <select
                name="dietaryPreference"
                className="w-full p-3.5 pl-11 border border-slate-200 rounded-2xl bg-slate-50/50 text-sm outline-none focus:border-orange-500 appearance-none"
                value={form.dietaryPreference || "non-veg"}
                onChange={handleChange}
              >
                <option value="veg">Vegetarian</option>
                <option value="non-veg">Non-Vegetarian</option>
                <option value="vegan">Vegan</option>
                <option value="paleo">Paleo</option>
                <option value="keto">Keto</option>
              </select>
            </div>
          </div>
        )}

        
        <div className="relative group">
          <Lock
            className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-orange-500"
            size={18}
          />
          <input
            name="password"
            className="w-full p-3.5 pl-11 pr-11 border border-slate-200 rounded-2xl outline-none focus:ring-4 focus:ring-orange-500/10 focus:border-orange-500 transition-all text-sm bg-slate-50/50"
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            value={form.password || ""}
            onChange={handleChange}
            required
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-orange-500"
          >
            {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
          </button>
        </div>

        {!isLogin && form.password?.length > 0 && (
          <PasswordStrength password={form.password} strength={strength} />
        )}

        {!isLogin && (
          <div className="relative">
            <Lock
              className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400"
              size={18}
            />
            <input
              name="confirmPassword"
              className={`w-full p-3.5 pl-11 border rounded-2xl outline-none text-sm transition-all ${
                form.confirmPassword?.length > 0
                  ? passwordsMatch
                    ? "border-emerald-500 ring-4 ring-emerald-500/10"
                    : "border-red-400 ring-4 ring-red-400/10"
                  : "border-slate-200 bg-slate-50/50"
              }`}
              type={showPassword ? "text" : "password"}
              placeholder="Confirm Password"
              value={form.confirmPassword || ""}
              onChange={handleChange}
              required
            />
          </div>
        )}

        {isLogin && (
          <div className="flex justify-end">
            <Link
              to="/change-password"
              className="text-xs text-orange-600 font-bold hover:text-orange-700 transition"
            >
              Forgot password?
            </Link>
          </div>
        )}

        <button
          onClick={handleAction}
          disabled={loading}
          className="w-full bg-orange-600 hover:bg-orange-700 text-white p-4 rounded-2xl font-bold text-sm uppercase tracking-widest flex justify-center items-center gap-2 mt-4 shadow-lg shadow-orange-200 transition-all active:scale-[0.98] disabled:opacity-70"
        >
          {loading ? (
            <>
              <Loader2 className="animate-spin" size={18} />
              <span>Processing...</span>
            </>
          ) : isLogin ? (
            "Login"
          ) : (
            "Create Account"
          )}
        </button>

        <p className="text-center text-sm text-slate-500 mt-6">
          {isLogin ? "New to FridgeFusion?" : "Already have an account?"}{" "}
          <Link
            to={isLogin ? "/signup" : "/login"}
            className="text-orange-600 font-bold hover:underline"
          >
            {isLogin ? "Sign Up" : "Login"}
          </Link>
        </p>
      </div>
    </AuthLayout>
  );
}
