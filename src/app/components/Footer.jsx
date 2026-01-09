export default function Footer() {
  return (
    <footer className="bg-blue-600 text-white mt-16">
      <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        
        {/* Brand */}
        <div>
          <h3 className="text-xl font-bold">SafeRide Transport</h3>
          <p className="mt-3 text-sm text-blue-100">
            Safe, comfortable and reliable pick-up & drop services with a
            special focus on lady-driven vehicles.
          </p>
        </div>

        {/* Services */}
        <div>
          <h4 className="text-lg font-semibold mb-3">Services</h4>
          <ul className="space-y-2 text-sm text-blue-100">
            <li>School Pick-Up & Drop</li>
            <li>Tuition & Activity Travel</li>
            <li>Office Daily Commute</li>
            <li>Customized Routes</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-lg font-semibold mb-3">Contact</h4>
          <ul className="space-y-2 text-sm text-blue-100">
            <li>📞 +91 98765 43210</li>
            <li>💬 WhatsApp Available</li>
            <li>📍 City-wide Service</li>
          </ul>
        </div>

      </div>

      <div className="text-center text-xs bg-blue-700 py-4">
        © {new Date().getFullYear()} SafeRide Transport. All rights reserved.
      </div>
    </footer>
  );
}
