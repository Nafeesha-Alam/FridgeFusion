const Hero = () => (
  <section className="px-8 pt-16 pb-12 max-w-7xl mx-auto text-center">
    <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6">
      Your Fridge, <span className="text-orange-600">Decoded.</span>
    </h1>
    <p className="text-xl text-slate-600 max-w-2xl mx-auto mb-10">
      Stop staring at leftovers. Take a photo, find a recipe, and save money.
      It's like having a Michelin chef and a safety expert in your pocket.
    </p>
    <div className="flex gap-4 justify-center">
      <button className="bg-slate-900 text-white px-8 py-4 rounded-2xl font-semibold hover:scale-105 transition">
        Scan My Fridge
      </button>
      <button className="border-2 border-slate-200 px-8 py-4 rounded-2xl font-semibold hover:bg-white transition">
        Watch Demo
      </button>
    </div>
  </section>
);

export default Hero;
