import { CONTACT } from "../config/contact";

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 py-10">

        {/* Top Row */}
        <div className="flex flex-col md:flex-row justify-between gap-8">

          {/* Brand */}
          <div>
            <h3 className="text-xl font-semibold tracking-wide">
              SafeRide Transport
            </h3>
            <p className="mt-2 text-sm text-white/80 max-w-sm">
              Safe, comfortable and reliable pick-up and drop services with
              trusted lady drivers for complete peace of mind.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider">
              Contact
            </h4>
            <ul className="mt-3 space-y-2 text-sm text-white/80">
              <li>
                📞 <a href={`tel:${CONTACT.phone}`} className="hover:text-white">
                  {CONTACT.displayPhone}
                </a>
              </li>
              <li>
                💬 <a
                  href={`https://wa.me/${CONTACT.phone}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white"
                >
                  WhatsApp Us
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Divider */}
        <div className="border-t border-white/10 mt-8 pt-6 text-center text-sm text-white/60">
          © {new Date().getFullYear()} SafeRide Transport. All rights reserved.
        </div>

      </div>
    </footer>
  );
}
