import React from "react";
import Hero from "./Hero";
import Features from "./Features";
import ScannerMockup from "./ScannerMockup";

const Home = () => {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      <nav className="flex items-center justify-between px-8 py-6 max-w-7xl mx-auto"></nav>

      <main>
        <Hero />
        <ScannerMockup />
        <div className="text-2xl font-bold text-orange-600"></div>
        <div className="flex justify-center items-center w-full py-4">
          <button className="bg-orange-600 text-white px-6 py-2 rounded-full font-medium hover:bg-orange-700 transition">
            Get Started
          </button>
        </div>
        <Features />
      </main>

      <footer className="bg-slate-900 text-white py-12 text-center">
        <p>© 2026 Hackafeist. Stop wasting, start tasting.</p>
      </footer>
    </div>
  );
};

export default Home;
