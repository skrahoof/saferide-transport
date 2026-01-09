const services = [
  {
    title: "School Pick-Up & Drop",
    desc: "Safe and punctual transportation for students with trusted lady drivers.",
    icon: "🎒",
  },
  {
    title: "Tuition & Coaching",
    desc: "Reliable daily travel to tuition and coaching centers.",
    icon: "📚",
  },
  {
    title: "Extra-Curricular Activities",
    desc: "Music, dance, yoga, sports and other activity travel support.",
    icon: "🎵",
  },
  {
    title: "Office Commute",
    desc: "Comfortable and timely pick-up & drop for professionals.",
    icon: "🏢",
  },
  {
    title: "Customized Routes",
    desc: "Flexible routes and timings based on customer needs.",
    icon: "🔁",
  },
];

export default function Services() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        
        <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-800">
          Our Services
        </h2>
        <p className="text-center text-gray-500 mt-2">
          Reliable transportation solutions for every daily need
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-12">
          {services.map((service, index) => (
            <div
              key={index}
              className="p-6 border rounded-2xl shadow-sm hover:shadow-lg transition"
            >
              <div className="text-4xl">{service.icon}</div>
              <h3 className="mt-4 text-lg font-semibold text-gray-800">
                {service.title}
              </h3>
              <p className="mt-2 text-gray-600 text-sm">
                {service.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
