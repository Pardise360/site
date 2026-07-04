import { Link } from "react-router-dom";

const Logo = () => (
  <svg viewBox="0 0 256 256" className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path
      d="M 128 192 L 128 256 L 64.5 256 L 32 223 L 0 192 L 0 128 L 64 128 Z M 256 192 L 256 256 L 192.5 256 L 160 223 L 128 192 L 128 128 L 192 128 Z M 128 64 L 128 128 L 64.5 128 L 32 95 L 0 64 L 0 0 L 64 0 Z M 256 64 L 256 128 L 192.5 128 L 160 95 L 128 64 L 128 0 L 192 0 Z"
      fill="#ffffff"
    />
  </svg>
);

const NAV_LINKS = [
  { label: "platform", to: "/platform" },
  { label: "solutions", to: "/solutions" },
  { label: "company", to: "/company" },
  { label: "support", to: "/support" },
] as const;

const Navbar = () => (
  <nav className="absolute top-0 left-0 right-0 z-20 px-6 md:px-10 pt-6 flex items-center justify-between gap-4">
    {/* pilule gauche : logo + marque */}
    <Link to="/" className="flex items-center gap-2 bg-neutral-900/90 backdrop-blur rounded-full pl-4 pr-6 py-3">
      <Logo />
      <span className="text-white text-sm font-normal tracking-tight">securify</span>
    </Link>

    {/* pilule centrale : liens (cachée sur mobile) */}
    <div className="hidden md:flex items-center gap-1 bg-neutral-900/90 backdrop-blur rounded-full px-3 py-2">
      {NAV_LINKS.map(({ label, to }) => (
        <Link
          key={label}
          to={to}
          className="text-neutral-300 hover:text-white transition-colors text-sm px-5 py-2 rounded-full"
        >
          {label}
        </Link>
      ))}
    </div>

    {/* bouton droit */}
    <button className="bg-white text-black text-sm font-normal rounded-full px-6 py-3 hover:bg-neutral-200 transition-colors">
      get started
    </button>
  </nav>
);

export default Navbar;
