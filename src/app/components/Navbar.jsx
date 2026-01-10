export default function Navbar() {
  return (

  <header className="w-full absolute top-0 left-0 z-50 bg-transparent">


      <div className="max-w-7xl mx-auto px-4 h-16 md:h-20 flex items-center justify-between">

        {/* Brand */}
        <div className="flex items-center gap-3">
  {/* Logo badge */}
  <div className="bg-transparent p-1.5 rounded-full flex items-center justify-center">
    <img
      src="/logo.png"
      alt="SafeRide Transport Logo"
      className="h-8 md:h-23 w-auto"
    />
  </div>

  {/* Brand text */}
  <span className="text-lg md:text-xl font-bold text-white tracking-wide">
    SafeRide Transport
  </span>
</div>


        {/* Tagline */}
        <p className="hidden md:block text-sm text-white/90">
          Safe Pick-Up & Drop Services
        </p>

      </div>
    </header>
  );
}
