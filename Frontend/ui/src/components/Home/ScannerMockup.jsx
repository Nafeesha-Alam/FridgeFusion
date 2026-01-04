const ScannerMockup = () => (
  <section className="px-8 py-12 max-w-5xl mx-auto">
    <div className="relative rounded-3xl overflow-hidden shadow-2xl border-8 border-slate-900">
  
      <img 
        src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=1200" 
        alt="Fridge Interior" 
        className="w-full h-[500px] object-cover"
      />
      
     
      <div className="absolute top-20 left-20 border-2 border-green-500 bg-green-500/20 p-2 rounded-lg backdrop-blur-sm">
        <p className="text-white text-xs font-bold uppercase">Fresh Milk (80%)</p>
      </div>
      
      <div className="absolute bottom-40 right-32 border-2 border-red-500 bg-red-500/20 p-2 rounded-lg backdrop-blur-sm">
        <p className="text-white text-xs font-bold uppercase">Missing: Chili</p>
        <p className="text-white text-[10px] italic underline">Try: Chili Powder</p>
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8">
        <div className="text-white">
          <p className="text-lg font-medium">"Digital Eyes" Scanning...</p>
          <div className="w-48 h-1 bg-orange-600 mt-2 animate-pulse"></div>
        </div>
      </div>
    </div>
  </section>
);

export default ScannerMockup;