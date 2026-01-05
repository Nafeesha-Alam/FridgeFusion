import React from "react";
import { Link } from "react-router-dom";
import { Mail, UtensilsCrossed, Instagram, Twitter } from "lucide-react";

export default function AuthLayout({ children }) {
  return (
    <div className="bg-slate-50 selection:bg-orange-100">
      <div className="flex flex-col items-center justify-center min-h-[100dvh] px-4 py-12">
        <div className="p-8 sm:p-10 bg-white rounded-[2.5rem] shadow-2xl shadow-slate-200/60 w-full max-w-[460px] border border-white relative overflow-hidden">
          <div className="absolute top-0 right-0 -mr-4 -mt-4 w-24 h-24 bg-orange-50 rounded-full blur-3xl opacity-50" />

          <h1 className="text-3xl font-black text-orange-600 mb-8 text-center tracking-tight flex items-center justify-center gap-2">
            <UtensilsCrossed size={28} className="text-orange-500" />
            FridgeFusion
          </h1>

          {children}
        </div>
      </div>

      <footer className="pt-20 pb-10 bg-white border-t border-slate-100">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="sm:col-span-2 space-y-4">
            <h3 className="text-2xl font-black text-slate-900 flex items-center gap-2">
              <span className="text-orange-600">Fridge</span>Fusion
            </h3>
            <p className="text-slate-500 text-sm max-w-sm leading-relaxed">
              Reducing food waste through the power of Vision AI. Scan your
              fridge, save money, and cook delicious meals instantly.
            </p>
            <div className="flex gap-4 pt-2">
              <Instagram
                size={18}
                className="text-slate-400 hover:text-orange-600 cursor-pointer transition-colors"
              />
              <Twitter
                size={18}
                className="text-slate-400 hover:text-orange-600 cursor-pointer transition-colors"
              />
            </div>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 mb-5 uppercase text-xs tracking-widest">
              Capabilities
            </h4>
            <ul className="space-y-3 text-sm text-slate-500">
              <li>
                <Link
                  to="/"
                  className="hover:text-orange-600 transition-colors"
                >
                  AI Fridge Scanner
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="hover:text-orange-600 transition-colors"
                >
                  Smart Substitutions
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="hover:text-orange-600 transition-colors"
                >
                  Expiry Alerts
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 mb-5 uppercase text-xs tracking-widest">
              Community
            </h4>
            <ul className="space-y-3 text-sm text-slate-500">
              <li>
                <Link
                  to="/"
                  className="hover:text-orange-600 transition-colors"
                >
                  Cooking Guides
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-orange-600 font-bold hover:underline flex items-center gap-2"
                >
                  <Mail size={14} /> Get Support
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-20 pt-8 border-t border-slate-50 px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 max-w-6xl mx-auto">
            <p className="text-slate-400 text-[11px] font-bold tracking-[0.2em] uppercase">
              © 2026
            </p>
            <div className="flex gap-6 text-[11px] font-bold text-slate-400 uppercase tracking-widest">
              <Link to="/" className="hover:text-slate-900">
                Privacy
              </Link>
              <Link to="/" className="hover:text-slate-900">
                Terms
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
