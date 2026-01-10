export default function Navbar() {
  return (
    <header className="w-full bg-blue-600 text-white">
<div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        
        {/* Brand */}
  <div className="flex items-center gap-3">
  <img
    src="/logo.png"
    alt="SafeRide Transport Logo"
    className="h-12 md:h-14 w-auto"
  />
  <span className="text-lg md:text-xl font-bold text-white">
    SafeRide Transport
  </span>
</div>



        {/* Tagline / Menu */}
       <p className="text-sm md:text-base text-white/90">
  Safe Pick-Up & Drop Services
</p>


      </div>
    </header>
  );
}
