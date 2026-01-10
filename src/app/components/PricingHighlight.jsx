export default function PricingHighlight() {
  return (
    <section className="py-14 bg-white">
      <div className="max-w-5xl mx-auto px-4 text-center">

        <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
          Affordable & Flexible Packages
        </h2>

        <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
          We offer budget-friendly pricing with flexible monthly and customized
          packages based on your route, timing, and service requirements.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row justify-center gap-6">
          <div className="bg-blue-50 px-6 py-4 rounded-xl text-sm text-gray-700">
            💰 Affordable monthly pricing
          </div>
          <div className="bg-blue-50 px-6 py-4 rounded-xl text-sm text-gray-700">
            ⏰ Flexible timings & routes
          </div>
          <div className="bg-blue-50 px-6 py-4 rounded-xl text-sm text-gray-700">
            🧩 Customized packages available
          </div>
        </div>

      </div>
    </section>
  );
}
