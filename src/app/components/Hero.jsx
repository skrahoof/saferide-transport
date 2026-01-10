import { CONTACT } from "../config/contact";

export default function Hero() {
  return (
    <section
      className="relative min-h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('/hero1.jpg')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 flex items-center justify-center text-center px-4">
        <div className="max-w-3xl text-white">

          {/* Heading */}
          <h1 className="text-3xl md:text-5xl font-bold leading-tight">
            Safe, Comfortable and Reliable Pick-Up and Drop Services
          </h1>

          {/* Subheading */}
          <p className="mt-4 text-white/90 max-w-2xl mx-auto text-base md:text-lg">
            Reliable transportation for schools, tuition centers, extra-curricular activities,
            and daily commutes — with trusted lady drivers for complete peace of mind.
          </p>

          {/* CTA Buttons */}
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">

            {/* Call Now */}
            <a
              href={`tel:${CONTACT.phone}`}
              className="bg-blue-600 hover:bg-blue-700 transition text-white px-8 py-3 rounded-full font-medium shadow-md text-center"
            >
              Call Now
            </a>

            {/* WhatsApp */}
            <a
              href={`https://wa.me/${CONTACT.phone}`}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-white/80 hover:bg-white hover:text-black transition text-white px-8 py-3 rounded-full font-medium text-center"
            >
              WhatsApp Us
            </a>

          </div>

        </div>
      </div>
    </section>
  );
}
