import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  const navClass = ({ isActive }) =>
    `font-headline font-bold tracking-tight transition-colors ${
      isActive
        ? "text-ydi-gold border-b-2 border-ydi-gold pb-1"
        : "text-white/70 hover:text-white"
    }`;

  return (
    <header className="fixed top-0 w-full z-50 bg-ydi-royal-green/80 backdrop-blur-xl border-b border-ydi-gold/20">
      <nav className="flex justify-between items-center w-full px-6 py-4 max-w-screen-2xl mx-auto">
        <div className="text-2xl font-black tracking-tighter text-ydi-gold font-headline">
          <Link to="/">YDI</Link>
        </div>

        <div className="hidden md:flex items-center gap-10">
          <NavLink to="/" end className={navClass}>
            Home
          </NavLink>

          <NavLink to="/about" className={navClass}>
            About
          </NavLink>

          <NavLink to="/programs" className={navClass}>
            Programs
          </NavLink>

          <NavLink to="/scholarships" className={navClass}>
            Scholarships
          </NavLink>

          <NavLink to="/contacts" className={navClass}>
            Contact Us
          </NavLink>
        </div>

        <Link
          to="/register"
          className="px-6 py-2 border border-ydi-gold/40 rounded-full font-headline font-bold text-sm tracking-tight text-white bg-ydi-gold  hover:bg-ydi-gold/50 transition-all active:scale-95 text-center"
        >
          Register
        </Link>
      </nav>
    </header>
  );
}
