const testimonials = [
  {
    text:
      "Very reliable and safe service. The lady driver made us feel completely comfortable sending our child daily.",
    name: "Parent (School Student)",
  },
  {
    text:
      "Always on time and very professional. Clean vehicle and polite driver. Highly recommended.",
    name: "Working Professional",
  },
  {
    text:
      "Best pick-up and drop service for tuition and dance classes. Flexible timings helped us a lot.",
    name: "Parent (Activity Classes)",
  },
];

export default function Testimonials() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        
        <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-800">
          What Parents & Customers Say
        </h2>
        <p className="text-center text-gray-500 mt-2">
          Real experiences from families who trust us every day
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-12">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="bg-blue-50 p-6 rounded-2xl shadow-sm hover:shadow-md transition"
            >
              <p className="text-gray-700 text-sm leading-relaxed">
                “{item.text}”
              </p>
              <h4 className="mt-4 font-semibold text-blue-600 text-sm">
                — {item.name}
              </h4>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
