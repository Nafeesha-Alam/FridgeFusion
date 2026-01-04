const Features = () => {
  const features = [
    {
      title: "Kill Decision Fatigue",
      desc: "No more scrolling for hours. We tell you exactly what to cook based on what you have.",
      
    },
    {
      title: "Save Your Wallet",
      desc: "The average household wastes $1,500 of food a year. We make sure every ingredient counts.",
 
    },
    {
      title: "Safety First",
      desc: "Our AI tracks expiration dates so you never have to wonder if the yogurt is still good.",
      
    }
  ];

  return (
    <section className="px-8 py-24 bg-white">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12">
        {features.map((f, i) => (
          <div key={i} className="p-8 rounded-3xl bg-slate-50 hover:shadow-xl transition group">
            <div className="text-4xl mb-4 group-hover:scale-110 transition duration-300">{f.icon}</div>
            <h3 className="text-2xl font-bold mb-3">{f.title}</h3>
            <p className="text-slate-600 leading-relaxed">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
   
  );
};

export default Features;