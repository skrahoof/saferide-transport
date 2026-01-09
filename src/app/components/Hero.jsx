export default function Hero() {
  return (
    <section
      className="relative h-[90vh] bg-cover bg-center"
      style={{ backgroundImage: "url('/hero.jpg')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60 flex items-center justify-center text-center px-4">
        <div className="max-w-3xl text-white">
          
          <h1 className="text-3xl md:text-5xl font-bold leading-tight">
            Safe. Comfortable. Reliable Pick-Up & Drop Services
          </h1>

          <p className="mt-4 text-sm md:text-lg text-gray-200">
            Trusted transportation for schools, tuition centers, activities,
            and daily commutes — with lady drivers for peace of mind.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:9876543210"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full text-sm md:text-base"
            >
              Call Now
            </a>

            <a
              href="https://wa.me/919876543210"
              className="border border-white hover:bg-white hover:text-black px-8 py-3 rounded-full text-sm md:text-base"
            >
              WhatsApp Us
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
