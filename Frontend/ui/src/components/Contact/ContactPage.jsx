import React from "react";
import { Mail, Phone, MapPin, Send, MessageSquare } from "lucide-react";

export default function ContactPage() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent! Our culinary team will get back to you soon.");
  };

  return (
    <div className="min-h-screen bg-slate-50 py-16 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-black text-slate-900 mb-4">
            Get in <span className="text-orange-600">Touch</span>
          </h1>
          <p className="text-slate-500 max-w-lg mx-auto">
            Have questions about our AI scanner or need help with a recipe? We're here to help you cook smarter.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
         
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100 flex items-start gap-4">
              <div className="w-12 h-12 bg-orange-100 rounded-2xl flex items-center justify-center text-orange-600 shrink-0">
                <Mail size={24} />
              </div>
              <div>
                <h3 className="font-bold text-slate-900">Email Us</h3>
                <p className="text-sm text-slate-500 mt-1">support@fridgefusion.com</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100 flex items-start gap-4">
              <div className="w-12 h-12 bg-orange-100 rounded-2xl flex items-center justify-center text-orange-600 shrink-0">
                <Phone size={24} />
              </div>
              <div>
                <h3 className="font-bold text-slate-900">Call Us</h3>
                <p className="text-sm text-slate-500 mt-1">+1 (555) 123-4567</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100 flex items-start gap-4">
              <div className="w-12 h-12 bg-orange-100 rounded-2xl flex items-center justify-center text-orange-600 shrink-0">
                <MapPin size={24} />
              </div>
              <div>
                <h3 className="font-bold text-slate-900">Location</h3>
                <p className="text-sm text-slate-500 mt-1">Kitchen Labs, Tech City</p>
              </div>
            </div>
          </div>

      
          <div className="lg:col-span-2 bg-white p-8 sm:p-10 rounded-[2.5rem] shadow-xl shadow-slate-200/60 border border-white">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 ml-1">Your Name</label>
                  <input 
                    type="text" 
                    placeholder="John Doe"
                    className="w-full p-4 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-4 focus:ring-orange-500/10 focus:border-orange-500 outline-none transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 ml-1">Email Address</label>
                  <input 
                    type="email" 
                    placeholder="john@example.com"
                    className="w-full p-4 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-4 focus:ring-orange-500/10 focus:border-orange-500 outline-none transition-all"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700 ml-1">Message</label>
                <textarea 
                  rows="5"
                  placeholder="Tell us how we can help..."
                  className="w-full p-4 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-4 focus:ring-orange-500/10 focus:border-orange-500 outline-none transition-all resize-none"
                ></textarea>
              </div>

              <button 
                type="submit"
                className="w-full bg-orange-600 hover:bg-orange-700 text-white p-4 rounded-2xl font-bold flex justify-center items-center gap-2 transition-all shadow-lg shadow-orange-200 active:scale-[0.98]"
              >
                <Send size={18} />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}