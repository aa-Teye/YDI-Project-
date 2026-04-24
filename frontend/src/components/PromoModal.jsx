import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import PromoImage from "../assets/home.jpg";

export default function PromoModal() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, [location.pathname]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-100 flex items-center justify-center p-4 bg-ydi-royal-green/40 backdrop-blur-sm animate-smooth-enter">
      <div className="relative w-full max-w-5xl max-h-[95vh] bg-white rounded-2xl shadow-2xl overflow-y-auto md:overflow-hidden flex flex-col md:flex-row border border-gray-100">
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-4 md:top-6 md:right-6 z-20 p-1.5 md:p-2 rounded-full text-gray-500 hover:text-gray-900 transition-all active:scale-95"
        >
          <span className="material-symbols-outlined text-2xl md:text-3xl">
            close
          </span>
        </button>
        <div className="relative w-full md:w-5/12 h-56 sm:h-64 md:h-auto shrink-0 overflow-hidden">
          <img
            alt="Promotion"
            className="absolute inset-0 w-full h-full object-cover"
            src={PromoImage}
          />
          <div className="absolute top-4 left-4 md:top-6 md:left-6 z-10 flex items-center gap-2 px-3 py-1.5 bg-ydi-royal-green/90 backdrop-blur-md border border-ydi-royal-green/20 rounded-full shadow-lg">
            <span className="w-2 h-2 rounded-full bg-ydi-gold animate-pulse"></span>
            <span className="font-label text-[9px] md:text-[10px] font-extrabold uppercase tracking-widest text-white">
              Limited Spots
            </span>
          </div>
          <div className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent"></div>
        </div>

        <div className="w-full md:w-7/12 p-6 sm:p-8 md:p-14 flex flex-col justify-center">
          <header className="space-y-2 md:space-y-3 mb-6 md:mb-8 mt-2 md:mt-0">
            <p className="font-label text-[10px] md:text-[11px] font-bold uppercase tracking-[0.2em] text-ydi-royal-green">
              Global Summit 2.0
            </p>
            <h1 className="font-headline text-3xl sm:text-4xl md:text-5xl font-black text-ydi-royal-green tracking-tighter leading-none">
              Fully Funded <br />
              <span className="text-gray-900">MAU 2026 Scholarship</span>
            </h1>
            <p className="font-body text-gray-600 md:text-gray-800 text-sm md:text-lg leading-relaxed max-w-md pt-1">
              Don't let finances hold back your diplomatic potential. Join the
              next generation of global delegates in Accra, Ghana.
            </p>
          </header>

          <div className="space-y-3 md:space-y-4 mb-8 md:mb-10">
            <div className="flex items-center gap-3">
              <div className="shrink-0 w-5 h-5 md:w-6 md:h-6 rounded-full bg-ydi-gold/10 flex items-center justify-center">
                <span
                  className="material-symbols-outlined text-ydi-gold text-base md:text-lg"
                  style={{ fontVariationSettings: "'wght' 600" }}
                >
                  check
                </span>
              </div>
              <span className="font-body text-sm md:text-base font-medium text-gray-800">
                Round-trip flight included
              </span>
            </div>
            <div className="flex items-center gap-3">
              <div className="shrink-0 w-5 h-5 md:w-6 md:h-6 rounded-full bg-ydi-gold/10 flex items-center justify-center">
                <span
                  className="material-symbols-outlined text-ydi-gold text-base md:text-lg"
                  style={{ fontVariationSettings: "'wght' 600" }}
                >
                  check
                </span>
              </div>
              <span className="font-body text-sm md:text-base font-medium text-gray-800">
                Premium Accommodation
              </span>
            </div>
            <div className="flex items-center gap-3">
              <div className="shrink-0 w-5 h-5 md:w-6 md:h-6 rounded-full bg-ydi-gold/10 flex items-center justify-center">
                <span
                  className="material-symbols-outlined text-ydi-gold text-base md:text-lg"
                  style={{ fontVariationSettings: "'wght' 600" }}
                >
                  check
                </span>
              </div>
              <span className="font-body text-sm md:text-base font-medium text-gray-800">
                Full Board Feeding
              </span>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <Link
              to="/scholarships"
              onClick={() => setIsOpen(false)}
              className="group relative overflow-hidden bg-ydi-gold hover:bg-[#c9a435] text-gray-900 font-headline text-sm sm:text-base md:text-xl font-bold py-4 md:py-5 px-4 md:px-8 rounded-xl flex items-center justify-center gap-2 md:gap-3 transition-all duration-300 active:scale-[0.98] shadow-lg text-center"
            >
              <span className="relative z-10 flex flex-col sm:flex-row items-center gap-0.5 sm:gap-2">
                <span>Claim Your Spot</span>
                <span className="hidden sm:inline">-</span>
                <span>Apply Now ($10.99 Fee)</span>
              </span>
              <span className="material-symbols-outlined relative z-10 group-hover:translate-x-1 transition-transform text-lg md:text-xl">
                arrow_forward
              </span>
            </Link>
          </div>

          <div className="mt-8 md:mt-12 pt-5 md:pt-6 border-t border-gray-100 flex justify-between items-center opacity-60">
            <div className="flex gap-2 md:gap-4">
              <div className="h-1 w-8 md:w-12 bg-ydi-gold rounded-full"></div>
              <div className="h-1 w-3 md:w-4 bg-gray-200 rounded-full"></div>
            </div>
            <p className="font-label text-[9px] md:text-[10px] text-gray-500 uppercase tracking-tighter">
              Accra // March 2026
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
