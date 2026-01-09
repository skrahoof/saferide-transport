export default function Navbar() {
  return (
    <header className="w-full bg-blue-600 text-white">
      <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col md:flex-row md:items-center md:justify-between">
        
        {/* Brand */}
        <h1 className="text-xl md:text-2xl font-bold text-center md:text-left">
          SafeRide Transport
        </h1>

        {/* Tagline / Menu */}
        <p className="mt-2 md:mt-0 text-sm md:text-base text-center md:text-right">
          Safe Pick-Up & Drop Services
        </p>

      </div>
    </header>
  );
}
