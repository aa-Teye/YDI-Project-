import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const navClass = ({ isActive }) =>
    `font-headline font-bold tracking-tight transition-colors ${
      isActive
        ? "text-ydi-gold border-b-2 border-ydi-gold pb-1"
        : "text-white/70 hover:text-white"
    }`;

  const mobileNavClass = ({ isActive }) =>
    `block w-full text-center text-2xl py-5 font-headline font-bold tracking-tight transition-colors ${
      isActive
        ? "text-ydi-gold bg-white/5"
        : "text-white/70 hover:text-white hover:bg-white/5"
    }`;

  return (
    <header className="fixed top-0 w-full z-50 bg-ydi-royal-green/80 backdrop-blur-xl border-b border-ydi-gold/20">
      <nav className="relative z-50 flex justify-between items-center w-full px-6 py-4 max-w-screen-2xl mx-auto">
        <div className="text-2xl font-black tracking-tighter text-ydi-gold font-headline z-50">
          <Link to="/" onClick={closeMenu}>
            YDI
          </Link>
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

        <div className="flex items-center gap-4 z-50">
          <Link
            to="/register"
            className="hidden md:block px-6 py-2 border border-ydi-gold/40 rounded-full font-headline font-bold text-sm tracking-tight text-white bg-ydi-gold hover:bg-ydi-gold/50 transition-all active:scale-95 text-center"
          >
            Register
          </Link>

          <button
            className="md:hidden text-ydi-gold p-2 focus:outline-none flex items-center justify-center"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <span className="material-symbols-outlined text-[32px] transition-transform duration-300 transform rotate-90">
                close
              </span>
            ) : (
              <span className="material-symbols-outlined text-[32px] transition-transform duration-300">
                menu
              </span>
            )}
          </button>
        </div>
      </nav>

      <div
        className={`md:hidden fixed inset-0 w-full h-screen bg-ydi-royal-green/95 backdrop-blur-2xl transition-all duration-300 ease-in-out z-40 flex flex-col justify-center ${
          isOpen
            ? "opacity-100 visible"
            : "opacity-0 invisible pointer-events-none"
        }`}
      >
        <div className="flex flex-col items-center justify-center gap-4 px-6 w-full h-full pb-20 pt-24 overflow-y-auto">
          <NavLink to="/" end onClick={closeMenu} className={mobileNavClass}>
            Home
          </NavLink>
          <NavLink to="/about" onClick={closeMenu} className={mobileNavClass}>
            About
          </NavLink>
          <NavLink
            to="/programs"
            onClick={closeMenu}
            className={mobileNavClass}
          >
            Programs
          </NavLink>
          <NavLink
            to="/scholarships"
            onClick={closeMenu}
            className={mobileNavClass}
          >
            Scholarships
          </NavLink>
          <NavLink
            to="/contacts"
            onClick={closeMenu}
            className={mobileNavClass}
          >
            Contact Us
          </NavLink>

          <Link
            to="/register"
            onClick={closeMenu}
            className="w-[80%] mt-8 px-6 py-4 border border-ydi-gold/40 rounded-full font-headline font-bold text-xl tracking-tight text-white bg-ydi-gold hover:bg-ydi-gold/50 transition-all active:scale-95 text-center"
          >
            Register
          </Link>
        </div>
      </div>
    </header>
  );
}
