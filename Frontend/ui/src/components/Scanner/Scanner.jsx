import React, { useState } from "react";
import { Camera, RefreshCw, CheckCircle2, AlertTriangle, Search } from "lucide-react";

export default function SmartScanner() {
  const [isScanning, setIsScanning] = useState(false);
  const [results, setResults] = useState(null);

  const simulateScan = () => {
    setIsScanning(true);
    setTimeout(() => {
      setResults({
        items: [
          { name: "Organic Milk", status: "Fresh", color: "green", safety: "80%" },
          { name: "Greek Yogurt", status: "Expiring Soon", color: "red", safety: "15%" },
          { name: "Spinach", status: "Good", color: "green", safety: "60%" },
        ],
        missing: "Chili Peppers",
        substitute: "Chili Powder"
      });
      setIsScanning(false);
    }, 2500);
  };

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-8">
    
      <div className="text-center space-y-2">
        <h2 className="text-3xl font-black text-slate-900">AI Fridge Scanner</h2>
        <p className="text-slate-500">Point your camera at your shelves to decode your dinner.</p>
      </div>


      <div className="relative rounded-[3rem] overflow-hidden bg-slate-900 aspect-square md:aspect-video shadow-2xl border-8 border-white">
        {!results ? (
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white space-y-4">
            <div className={`p-6 rounded-full bg-orange-600/20 border-2 border-orange-500 ${isScanning ? 'animate-ping' : ''}`}>
              <Camera size={48} className="text-orange-500" />
            </div>
            <button 
              onClick={simulateScan}
              disabled={isScanning}
              className="px-8 py-3 bg-orange-600 rounded-full font-bold hover:bg-orange-700 transition-all"
            >
              {isScanning ? "AI is Analyzing..." : "Start Digital Scan"}
            </button>
          </div>
        ) : (
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
             <button onClick={() => setResults(null)} className="absolute top-6 right-6 p-3 bg-white/10 hover:bg-white/20 rounded-full text-white backdrop-blur-md transition">
                <RefreshCw size={20} />
             </button>
             <div className="text-white text-center animate-in zoom-in-95">
                <CheckCircle2 size={64} className="text-green-400 mx-auto mb-4" />
                <h3 className="text-2xl font-bold">Analysis Complete</h3>
             </div>
          </div>
        )}
        
       
        {isScanning && (
          <div className="absolute inset-0 w-full h-1 bg-orange-500 shadow-[0_0_20px_rgba(249,115,22,0.8)] animate-scan" />
        )}
      </div>

      
      {results && (
        <div className="grid md:grid-cols-2 gap-6 animate-in slide-in-from-bottom-4 duration-500">
          <div className="bg-white p-6 rounded-[2rem] shadow-xl border border-slate-100">
            <h4 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
              <Search size={18} className="text-orange-600" /> Detected Ingredients
            </h4>
            <div className="space-y-3">
              {results.items.map((item, i) => (
                <div key={i} className="flex items-center justify-between p-3 rounded-xl bg-slate-50 border border-slate-100">
                  <span className="font-medium text-slate-700">{item.name}</span>
                  <span className={`text-[10px] font-bold px-2 py-1 rounded-md uppercase ${
                    item.color === 'green' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
                  }`}>
                    {item.status} ({item.safety})
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-orange-600 p-6 rounded-[2rem] shadow-xl text-white">
            <h4 className="font-bold mb-4 flex items-center gap-2">
              <AlertTriangle size={18} /> Smart Backup
            </h4>
            <p className="text-orange-100 text-sm mb-4">
              You're missing <strong>{results.missing}</strong> for a Spicy Pasta dish.
            </p>
            <div className="bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/20">
              <p className="text-xs uppercase font-black tracking-widest opacity-80 mb-1">AI Suggestion</p>
              <p className="text-lg font-bold">Use {results.substitute} instead</p>
            </div>
            <button className="w-full mt-6 py-3 bg-white text-orange-600 rounded-xl font-bold hover:bg-orange-50 transition-colors">
              Find Recipes with these items
            </button>
          </div>
        </div>
      )}
    </div>
  );
}