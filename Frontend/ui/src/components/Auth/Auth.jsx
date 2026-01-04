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
  GraduationCap,
  ChefHat,
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
          <User
            className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-orange-500 transition-colors"
            size={18}
          />
          <input
            className="w-full p-3.5 pl-11 border border-slate-200 rounded-2xl outline-none focus:ring-4 focus:ring-orange-500/10 focus:border-orange-500 transition-all text-sm bg-slate-50/50"
            placeholder="Username"
            value={form.username || ""}
            onChange={(e) => setForm({ ...form, username: e.target.value })}
          />
        </div>

        {!isLogin && (
          <div className="space-y-4 animate-in fade-in slide-in-from-top-2 duration-300">
            <div className="relative group">
              <Mail
                className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-orange-500"
                size={18}
              />
              <input
                className="w-full p-3.5 pl-11 border border-slate-200 rounded-2xl outline-none focus:ring-4 focus:ring-orange-500/10 focus:border-orange-500 transition-all text-sm bg-slate-50/50"
                placeholder="Email Address"
                type="email"
                onChange={(e) => setForm({ ...form, email: e.target.value })}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="relative">
                <Phone
                  className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400"
                  size={18}
                />
                <input
                  className="w-full p-3.5 pl-11 border border-slate-200 rounded-2xl outline-none focus:ring-4 focus:ring-orange-500/10 focus:border-orange-500 transition-all text-sm bg-slate-50/50"
                  placeholder="Contact No"
                  onChange={(e) =>
                    setForm({ ...form, contact_no: e.target.value })
                  }
                />
              </div>
              <div className="relative">
                <GraduationCap
                  className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400"
                  size={18}
                />
                <input
                  className="w-full p-3.5 pl-11 border border-slate-200 rounded-2xl outline-none focus:ring-4 focus:ring-orange-500/10 focus:border-orange-500 transition-all text-sm bg-slate-50/50"
                  placeholder="Qualification"
                  onChange={(e) =>
                    setForm({ ...form, qualification: e.target.value })
                  }
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <select
                className="w-full p-3.5 border border-slate-200 rounded-2xl bg-slate-50/50 text-sm outline-none focus:border-orange-500"
                onChange={(e) =>
                  setForm({ ...form, profession: e.target.value })
                }
              >
                <option value="Student">Student</option>
                <option value="Teacher">Teacher</option>
                <option value="Others">Others</option>
              </select>
              <select
                className="w-full p-3.5 border border-slate-200 rounded-2xl bg-slate-50/50 text-sm outline-none focus:border-orange-500"
                onChange={(e) => setForm({ ...form, gender: e.target.value })}
              >
                <option value="">Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
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
            className="w-full p-3.5 pl-11 pr-11 border border-slate-200 rounded-2xl outline-none focus:ring-4 focus:ring-orange-500/10 focus:border-orange-500 transition-all text-sm bg-slate-50/50"
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            onChange={(e) => setForm({ ...form, password: e.target.value })}
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
              className={`w-full p-3.5 pl-11 border rounded-2xl outline-none text-sm transition-all ${
                form.confirmPassword?.length > 0
                  ? passwordsMatch
                    ? "border-emerald-500 ring-4 ring-emerald-500/10"
                    : "border-red-400 ring-4 ring-red-400/10"
                  : "border-slate-200 bg-slate-50/50"
              }`}
              type={showPassword ? "text" : "password"}
              placeholder="Confirm Password"
              onChange={(e) =>
                setForm({ ...form, confirmPassword: e.target.value })
              }
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
            "Sign In"
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
