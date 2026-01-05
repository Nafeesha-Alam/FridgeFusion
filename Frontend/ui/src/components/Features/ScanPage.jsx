import React, { useState } from "react";
import axios from "axios";
import { Camera, Loader2, Utensils, AlertCircle, CheckCircle2 } from "lucide-react";

export default function ScanPage() {
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);


  const userData = JSON.parse(localStorage.getItem("userData") || "{}");

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
    setPreview(URL.createObjectURL(selectedFile));
  };

  const handleScan = async () => {
    if (!file) return alert("Please upload an image first!");

    setLoading(true);
    setResult(null);

    try {
      
      const formData = new FormData();
      formData.append("file", file);

      const detectResponse = await axios.post("http://127.0.0.1:8000/detect-ingredients", formData);
      const ingredients = detectResponse.data.ingredients;

      const recipeResponse = await axios.post("http://127.0.0.1:8000/generate-recipe", {
        ingredients: ingredients,
        diet_preference: userData.dietaryPreference || "non-veg",
        age: userData.age || 25,
        mode: "quick", 
      });

      setResult(recipeResponse.data.recipe);
    } catch (err) {
      console.error(err);
      alert("AI Processing failed. Make sure FastAPI is running on port 8000.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold text-slate-900 flex items-center justify-center gap-3">
            <Camera className="text-orange-600" /> AI Fridge Scanner
          </h1>
          <p className="text-slate-500 mt-2">
            Taking a photo of your fridge to get a personalized {userData.dietaryPreference} recipe!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-200">
            <div className="aspect-square bg-slate-50 rounded-2xl border-2 border-dashed border-slate-200 flex flex-col items-center justify-center overflow-hidden relative">
              {preview ? (
                <img src={preview} alt="Preview" className="w-full h-full object-cover" />
              ) : (
                <div className="text-center p-6">
                  <Camera size={48} className="mx-auto text-slate-300 mb-4" />
                  <p className="text-sm text-slate-500">Upload your fridge photo</p>
                </div>
              )}
              <input 
                type="file" 
                onChange={handleFileChange} 
                className="absolute inset-0 opacity-0 cursor-pointer" 
                accept="image/*"
              />
            </div>
            <button
              onClick={handleScan}
              disabled={loading || !file}
              className="w-full mt-6 bg-orange-600 hover:bg-orange-700 text-white py-4 rounded-2xl font-bold flex items-center justify-center gap-2 transition-all disabled:opacity-50"
            >
              {loading ? <Loader2 className="animate-spin" /> : <Utensils size={18} />}
              {loading ? "AI is Analyzing..." : "Generate Recipe"}
            </button>
          </div>

          
          <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-200 min-h-[400px]">
            <h3 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
              <CheckCircle2 size={18} className="text-emerald-500" /> AI Suggestions
            </h3>
            {result ? (
              <div className="prose prose-slate max-w-none">
                <div className="whitespace-pre-wrap text-slate-600 text-sm leading-relaxed">
                  {result}
                </div>
              </div>
            ) : (
              <div className="h-full flex flex-col items-center justify-center text-slate-400">
                <AlertCircle size={32} className="mb-2 opacity-20" />
                <p className="text-sm">Upload a photo to see the recipe</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}