import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className=" relative w-full">
      <div className="bg-ydi-royal-green py-24 border-b border-ydi-gold/20">
        <div className="max-w-4xl mx-auto px-8 text-center relative z-10">
          <span className="font-label technical-label uppercase text-ydi-gold mb-4 block">
            International Relations 2.0
          </span>
          <h1 className="font-headline text-6xl md:text-8xl font-bold tracking-tighter leading-none mb-6 text-white">
            THE SUMMIT <br /> OF{" "}
            <span className="text-[#ff7cf5] italic">FUTURE</span> VOICES
          </h1>
          <p className="text-gray-200 text-lg md:text-xl max-w-xl mx-auto font-light leading-relaxed">
            YDI bridges the gap between high-stakes international diplomacy and
            the raw energy of the next generation.
          </p>
        </div>
      </div>

      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="space-y-6">
            <div className="text-2xl font-black tracking-tighter font-headline uppercase text-gray-900">
              YDI<span className="text-ydi-gold">.</span>
            </div>
            <p className="font-body text-sm leading-relaxed max-w-xs text-gray-600">
              Empowering Africa's next generation of diplomatic leaders.
              Inspiring change through education, policy, and action.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full border flex items-center justify-center hover:border-white hover:bg-black/10 transition-all duration-300 group border-gray-200"
              >
                <span className="material-symbols-outlined text-ydi-gold group-hover:text-black transition-colors text-[20px]">
                  public
                </span>
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full border flex items-center justify-center hover:border-white hover:bg-black/10 transition-all duration-300 group border-gray-200"
              >
                <span className="material-symbols-outlined text-ydi-gold group-hover:text-black transition-colors text-[20px]">
                  share
                </span>
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full border flex items-center justify-center hover:border-white hover:bg-black/10 transition-all duration-300 group border-gray-200"
              >
                <span className="material-symbols-outlined text-ydi-gold group-hover:text-black transition-colors text-[20px]">
                  groups
                </span>
              </a>
            </div>
          </div>
          <div className="space-y-6">
            <h4 className="font-headline font-bold uppercase tracking-tight text-ydi-royal-green">
              Explore
            </h4>
            <nav className="flex flex-col gap-3">
              <Link
                to="/"
                className="font-medium hover:text-ydi-gold transition-colors duration-300 font-body text-sm text-gray-700"
              >
                Home
              </Link>
              <Link
                to="/about"
                className="font-medium hover:text-ydi-gold transition-colors duration-300 font-body text-sm text-gray-700"
              >
                About Us
              </Link>
              <Link
                to="/programs"
                className="font-medium hover:text-ydi-gold transition-colors duration-300 font-body text-sm text-gray-700"
              >
                Our Programs
              </Link>
              <Link
                to="/scholarships"
                className="font-medium hover:text-ydi-gold transition-colors duration-300 font-body text-sm text-gray-700"
              >
                MAU 2026 Conference
              </Link>
              <Link
                to="/contacts"
                className="font-medium hover:text-ydi-gold transition-colors duration-300 font-body text-sm text-gray-700"
              >
                Contact
              </Link>
            </nav>
          </div>

          <div className="space-y-6">
            <h4 className="font-headline font-bold uppercase tracking-tight text-ydi-royal-green">
              Resources
            </h4>
            <nav className="flex flex-col gap-3">
              <Link
                to="/scholarships"
                className="font-medium hover:text-ydi-gold transition-colors duration-300 font-body text-sm text-gray-700"
              >
                Apply for Scholarship
              </Link>
              <Link
                to="#"
                className="font-medium hover:text-ydi-gold transition-colors duration-300 font-body text-sm text-gray-700"
              >
                Delegate Portal
              </Link>
              <Link
                to="#"
                className="font-medium hover:text-ydi-gold transition-colors duration-300 font-body text-sm text-gray-700"
              >
                Privacy Policy
              </Link>
              <Link
                to="#"
                className="font-medium hover:text-ydi-gold transition-colors duration-300 font-body text-sm text-gray-700"
              >
                Terms & Conditions
              </Link>
            </nav>
          </div>

          <div className="space-y-6">
            <h4 className="font-headline font-bold uppercase tracking-tight text-ydi-royal-green">
              Stay Updated
            </h4>
            <p className="font-body text-sm leading-relaxed text-gray-600">
              Subscribe for diplomatic insights and summit notifications.
            </p>
            <div className="space-y-3">
              <div className="relative group">
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full border-none rounded-xl py-3 px-4 text-gray-900 placeholder:text-gray-400 text-sm focus:ring-2 transition-all border-gray-200 border bg-gray-50 focus:ring-ydi-royal-green"
                />
              </div>
              <button className="w-full font-headline font-bold py-3 rounded-xl hover:bg-[#c4a235] hover:shadow-[0_0_20px_rgba(220,182,64,0.3)] active:scale-[0.98] transition-all duration-300 uppercase tracking-wide text-sm bg-ydi-gold text-black">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-ydi-royal-green border-t border-black/10">
        <div className="max-w-7xl mx-auto px-8 py-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-label technical-label uppercase text-white/80">
            &copy; 2026 Youth Diplomacy Institute (YDI). All Rights Reserved.
          </p>
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-[14px] text-ydi-gold">
              location_on
            </span>
            <span className="font-label technical-label uppercase text-white/80">
              Hosted in Accra, Ghana
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
