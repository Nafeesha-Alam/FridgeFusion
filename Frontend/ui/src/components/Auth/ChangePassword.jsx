import React from "react";
import { Link } from "react-router-dom";
import { ShieldCheck, ArrowLeft, User, Mail, Lock } from "lucide-react";
import { usePasswordLogic } from "./usePasswordLogic";

export default function ChangePassword() {
  const { isLoggedIn, form, setForm, loading, handleUpdate } =
    usePasswordLogic();

  return (
    <div className="flex flex-col items-center justify-center min-h-[100dvh] bg-slate-50 p-4 sm:p-6">
      <div className="p-6 sm:p-10 bg-white rounded-3xl shadow-xl w-full max-w-[440px] border border-slate-100">
        <Link
          to={isLoggedIn ? "/" : "/login"}
          className="flex items-center gap-2 text-slate-400 hover:text-indigo-600 mb-6 text-sm transition-colors font-medium"
        >
          <ArrowLeft size={16} /> Back to {isLoggedIn ? "Dashboard" : "Login"}
        </Link>

        <div className="flex flex-col items-center mb-6">
          <div className="bg-indigo-50 p-3 rounded-full mb-3">
            <ShieldCheck className="text-indigo-600" size={32} />
          </div>
          <h1 className="text-xl sm:text-2xl font-black text-slate-800 text-center">
            {isLoggedIn ? "Update Password" : "Reset Password"}
          </h1>
          <p className="text-slate-400 text-xs sm:text-sm text-center mt-1">
            {isLoggedIn
              ? "Change your current password"
              : "Prove your identity to reset"}
          </p>
        </div>

        <form onSubmit={handleUpdate} className="space-y-4">
          {!isLoggedIn ? (
            <>
              <div className="relative">
                <User
                  className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400"
                  size={18}
                />
                <input
                  required
                  className="w-full pl-11 p-3.5 border border-slate-200 rounded-xl focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 outline-none transition-all text-sm"
                  placeholder="Username"
                  value={form.username}
                  onChange={(e) =>
                    setForm({ ...form, username: e.target.value })
                  }
                />
              </div>
              <div className="relative">
                <Mail
                  className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400"
                  size={18}
                />
                <input
                  required
                  type="email"
                  className="w-full pl-11 p-3.5 border border-slate-200 rounded-xl focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 outline-none transition-all text-sm"
                  placeholder="Email Address"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                />
              </div>
            </>
          ) : (
            <div className="relative">
              <Lock
                className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400"
                size={18}
              />
              <input
                required
                type="password"
                className="w-full pl-11 p-3.5 border border-slate-200 rounded-xl focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 outline-none transition-all text-sm"
                placeholder="Current Password"
                value={form.old_password}
                onChange={(e) =>
                  setForm({ ...form, old_password: e.target.value })
                }
              />
            </div>
          )}

          <div className="relative">
            <Lock
              className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400"
              size={18}
            />
            <input
              required
              type="password"
              className="w-full pl-11 p-3.5 border border-slate-200 rounded-xl focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 outline-none transition-all text-sm"
              placeholder="New Password"
              value={form.new_password}
              onChange={(e) =>
                setForm({ ...form, new_password: e.target.value })
              }
            />
          </div>

          <div className="relative">
            <Lock
              className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400"
              size={18}
            />
            <input
              required
              type="password"
              className="w-full pl-11 p-3.5 border border-slate-200 rounded-xl focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 outline-none transition-all text-sm"
              placeholder="Confirm New Password"
              value={form.confirm_password}
              onChange={(e) =>
                setForm({ ...form, confirm_password: e.target.value })
              }
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-indigo-600 text-white p-4 rounded-xl font-bold shadow-lg shadow-indigo-100 hover:bg-indigo-700 active:scale-[0.98] transition-all disabled:bg-slate-300 text-sm uppercase tracking-wider mt-2"
          >
            {loading
              ? "Processing..."
              : isLoggedIn
              ? "Update Password"
              : "Reset Password"}
          </button>
        </form>
      </div>
    </div>
  );
}
