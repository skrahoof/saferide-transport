import { CONTACT } from "../config/contact";

export default function DriverCTA() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 text-center">

        <h2 className="text-2xl md:text-3xl font-semibold text-gray-800">
          Interested in Joining as a Driver?
        </h2>

        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          We are looking for responsible and reliable drivers.
          Lady drivers are preferred to ensure safety and comfort for our passengers.
        </p>

        <div className="mt-8">
          <a
            href={`https://wa.me/${CONTACT.phone}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-green-600 hover:bg-green-700 transition text-white px-8 py-3 rounded-full font-medium shadow-md"
          >
            WhatsApp Driver Enquiry
          </a>
        </div>

      </div>
    </section>
  );
}
