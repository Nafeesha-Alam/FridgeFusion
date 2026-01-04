import React from "react";

const ContactPage = () => (
  <div className="bg-slate-50/30 min-h-screen">
    <div className="max-w-xl mx-auto py-12 md:py-20 px-4 md:px-6">
      <h2 className="text-3xl font-bold mb-4 text-indigo-950 text-center md:text-left">
        Contact Support
      </h2>
      <p className="text-slate-500 mb-8 text-center md:text-left text-sm md:text-base px-2">
        Report an issue or ask a question about FridgeFusion.
      </p>

      <form className="space-y-4 bg-white p-6 md:p-8 rounded-[1.5rem] md:rounded-2xl shadow-sm border border-slate-200">
        <div className="space-y-1">
          <label className="text-xs font-bold text-slate-400 ml-1 uppercase tracking-wider">
            Name
          </label>
          <input
            className="w-full p-3 md:p-4 border border-slate-100 bg-slate-50/50 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:bg-white outline-none transition-all text-sm"
            placeholder="Full Name"
          />
        </div>

        <div className="space-y-1">
          <label className="text-xs font-bold text-slate-400 ml-1 uppercase tracking-wider">
            Email
          </label>
          <input
            className="w-full p-3 md:p-4 border border-slate-100 bg-slate-50/50 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:bg-white outline-none transition-all text-sm"
            placeholder="Email"
            type="email"
          />
        </div>

        <div className="space-y-1">
          <label className="text-xs font-bold text-slate-400 ml-1 uppercase tracking-wider">
            Message
          </label>
          <textarea
            className="w-full p-3 md:p-4 border border-slate-100 bg-slate-50/50 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:bg-white outline-none transition-all text-sm"
            placeholder="How can we help?"
            rows="5"
          ></textarea>
        </div>

        <button
          type="button"
          onClick={() => alert("Message Sent!")}
          className="w-full bg-indigo-600 text-white p-4 rounded-xl font-bold hover:bg-indigo-700 transition-all shadow-lg active:scale-[0.96] mt-4"
        >
          Submit Message
        </button>
      </form>
    </div>
  </div>
);

export default ContactPage;
