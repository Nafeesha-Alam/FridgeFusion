import React from "react";
import { AlertCircle, ShieldCheck } from "lucide-react";

export default function PasswordStrength({ password, strength }) {
  if (!password || password.length === 0) return null;

  const strengthLabels = ["Weak", "Fair", "Good", "Strong", "Very Strong"];
  
 
  const strengthColors = [
    "bg-rose-400",    
    "bg-orange-400", 
    "bg-amber-400",   
    "bg-lime-500",    
    "bg-emerald-500", 
  ];

  return (
    <div className="mt-3 px-1 animate-in fade-in slide-in-from-top-1 duration-300">
    
      <div className="flex gap-1.5 h-1.5">
        {[1, 2, 3, 4, 5].map((level) => (
          <div
            key={level}
            className={`h-full flex-1 rounded-full transition-all duration-500 ${
              level <= strength
                ? strengthColors[strength - 1]
                : "bg-slate-100"
            }`}
          />
        ))}
      </div>

     
      <div className="flex justify-between items-center mt-2">
        <div className="flex items-center gap-1.5">
          {strength >= 4 && <ShieldCheck size={12} className="text-emerald-500" />}
          <p
            className={`text-[10px] font-bold uppercase tracking-wider transition-colors duration-300 ${
              strength >= 3 ? "text-emerald-600" : "text-rose-500"
            }`}
          >
            {strength < 3
              ? "Kitchen Security: Low"
              : `Security: ${strengthLabels[strength - 1]}`}
          </p>
        </div>

        <div className="group relative">
          <AlertCircle
            size={14}
            className={
              strength >= 3 ? "text-emerald-400" : "text-rose-400 cursor-help"
            }
          />
     
          <div className="absolute bottom-full right-0 mb-2 w-56 p-3 bg-slate-900 text-white text-[11px] rounded-xl opacity-0 group-hover:opacity-100 transition-all transform translate-y-2 group-hover:translate-y-0 pointer-events-none z-20 shadow-2xl leading-relaxed border border-slate-700">
            <p className="font-bold mb-1 text-orange-400">Pro Tip:</p>
            Use 8+ characters with a mix of Uppercase, Numbers, and Symbols.
          </div>
        </div>
      </div>
    </div>
  );
}