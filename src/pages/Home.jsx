import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import homeImage from "../assets/home.jpg";
import homeImage1 from "../assets/home1.jpg";
import homeImage2 from "../assets/home2.jpg";

import avatar3 from "../assets/avatar3.jfif";
import avatar2 from "../assets/avatar2.jfif";
import avatar1 from "../assets/avatar1.jfif";
import dialogImage from "../assets/dialogImage.jpg";
import PlenaryImage from "../assets/Plenary.jpg";
import conference from "../assets/conference.jpg";

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [homeImage, homeImage1, homeImage2];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <div className="bg-ydi-royal-green text-on-surface font-body overflow-x-hidden selection:bg-ydi-gold/30">
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-ydi-royal-green">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-ydi-gold/10 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-1/4 -right-20 w-125 h-125 bg-ydi-gold/5 blur-[150px] rounded-full"></div>

        <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
          <div className="space-y-8">
            <div className="inline-block px-4 py-1.5 bg-ydi-gold/10 border border-ydi-gold/30 rounded-full">
              <span className="text-ydi-gold font-label text-xs font-black tracking-widest uppercase">
                2026 EDITION
              </span>
            </div>

            <h1 className="text-5xl md:text-8xl font-headline font-bold leading-[0.9] tracking-tighter text-white">
              YDI MODEL <br />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-ydi-gold via-yellow-400 to-ydi-gold">
                AFRICAN UNION
              </span>
              <br />
              2026
            </h1>

            <p className="text-lg text-white/80 font-body max-w-lg">
              Step into the corridors of power. Shape the future of the
              continent through high-level diplomatic simulation and visionary
              leadership.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                to="/register"
                className="px-12 py-5 bg-ydi-gold text-black font-headline font-bold rounded-xl neon-glow-primary transition-all hover:scale-105 active:scale-95 text-center"
              >
                Register for MAU
              </Link>
              <Link
                to="/scholarships"
                className="px-12 py-5 bg-ydi-gold text-black font-headline font-bold rounded-xl neon-glow-primary transition-all hover:scale-105 active:scale-95 text-center"
              >
                Apply for Scholarship
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="relative z-20">
              <div className="rounded-3xl overflow-hidden aspect-4/5 shadow-2xl bg-ydi-royal-green/50 relative">
                {slides.map((slide, index) => (
                  <img
                    key={index}
                    src={slide}
                    alt={`Diplomatic scene ${index + 1}`}
                    className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
                      index === currentSlide ? "opacity-100" : "opacity-0"
                    }`}
                  />
                ))}
                <div className="absolute inset-0 bg-linear-to-t from-ydi-royal-green via-transparent to-transparent z-10"></div>
              </div>

              <div className="absolute -bottom-1 right-2 sm:-right-4 lg:-bottom-2 lg:-right-8 z-30  p-5 sm:p-6 rounded-2xl w-[90%] sm:w-72">
                <div className="flex -space-x-3 mb-2">
                  <img
                    className="w-10 h-10 rounded-full border-2 border-ydi-royal-green shadow-md object-cover relative z-10"
                    alt="Delegate 1"
                    src={avatar1}
                  />
                  <img
                    className="w-10 h-10 rounded-full border-2 border-ydi-royal-green shadow-md object-cover relative z-20"
                    alt="Delegate 2"
                    src={avatar2}
                  />
                  <img
                    className="w-10 h-10 rounded-full border-2 border-ydi-royal-green shadow-md object-cover relative z-30"
                    alt="Delegate 3"
                    src={avatar3}
                  />
                  <div className="w-10 h-10 rounded-full border-2 border-ydi-royal-green bg-ydi-gold flex items-center justify-center text-[10px] font-bold text-slate-900 relative z-40">
                    54+
                  </div>
                </div>
                <p className="text-sm font-label font-bold text-white leading-tight">
                  Join delegates from 54 African nations.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-[90%] max-w-5xl z-40 hidden lg:block">
          <div className="glass-panel py-6 px-10 rounded-full flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-ydi-gold">
                flight
              </span>
              <span className="font-label text-xs font-extrabold tracking-widest uppercase">
                Round-Trip Flights
              </span>
            </div>
            <div className="w-px h-6 bg-white/10 hidden md:block"></div>
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-ydi-gold">
                hotel
              </span>
              <span className="font-label text-xs font-extrabold tracking-widest uppercase">
                Premium Accommodation
              </span>
            </div>
            <div className="w-px h-6 bg-white/10 hidden md:block"></div>
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-ydi-gold">
                restaurant
              </span>
              <span className="font-label text-xs font-extrabold tracking-widest uppercase">
                Full Board Feeding
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="py-32 bg-ydi-royal-green relative border-y border-white/5">
        <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl md:text-6xl font-headline font-bold tracking-tight text-white">
              Empowering Africa's <br />
              <span className="text-ydi-gold">Next Generation</span> <br />
              of Diplomats
            </h2>
            <p className="text-white/70 font-body leading-relaxed max-w-xl">
              The Youth Diplomacy Institute (YDI) is a transformative platform
              dedicated to nurturing the geopolitical intelligence of young
              African leaders. We bridge the gap between academic theory and
              high-stakes international policy execution.
            </p>
            <div className="pt-4">
              <Link
                to="/about"
                className="text-ydi-gold font-bold inline-flex items-center gap-2 group"
              >
                Learn more about our mission
                <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">
                  arrow_forward
                </span>
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-[#014d25] p-8 rounded-2xl border border-white/5 space-y-2 hover:border-ydi-gold/30 transition-all group">
              <div className="text-ydi-gold text-4xl font-headline font-black">
                60%
              </div>
              <p className="text-xs font-label uppercase tracking-widest text-white/70 font-bold">
                of Africa is under 30
              </p>
            </div>
            <div className="bg-[#014d25] p-8 rounded-2xl border border-white/5 space-y-2 hover:border-ydi-gold/30 transition-all group mt-8">
              <div className="text-ydi-gold text-4xl font-headline font-black">
                54
              </div>
              <p className="text-xs font-label uppercase tracking-widest text-white/70 font-bold">
                Nations Represented
              </p>
            </div>
            <div className="bg-[#014d25] p-8 rounded-2xl border border-white/5 space-y-2 hover:border-ydi-gold/30 transition-all group -mt-4">
              <div className="text-ydi-gold text-4xl font-headline font-black">
                10+
              </div>
              <p className="text-xs font-label uppercase tracking-widest text-white/70 font-bold">
                Global Partners
              </p>
            </div>
            <div className="bg-[#014d25] p-8 rounded-2xl border border-white/5 space-y-2 hover:border-ydi-gold/30 transition-all group mt-4">
              <div className="text-white text-4xl font-headline font-black">
                1
              </div>
              <p className="text-xs font-label uppercase tracking-widest text-white/70 font-bold">
                Unified Vision
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-32 relative bg-ydi-royal-green overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(220,182,64,0.1)_0%,transparent_70%)] pointer-events-none"></div>

        <div className="container mx-auto px-6 relative z-10 text-center">
          <div className="inline-block px-4 py-1.5 bg-ydi-gold/10 border border-ydi-gold/30 rounded-full mb-8">
            <span className="text-ydi-gold font-label text-xs font-black tracking-widest uppercase">
              FULLY FUNDED OPPORTUNITY
            </span>
          </div>

          <h2 className="text-4xl md:text-7xl font-headline font-bold tracking-tighter text-white mb-16 max-w-4xl mx-auto">
            The YDI MAU 2026 <br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-ydi-gold to-yellow-500">
              Scholarship Scheme
            </span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            <div className="glass-panel p-10 rounded-3xl text-left border-t-2 border-t-ydi-gold/40">
              <div className="w-12 h-12 rounded-xl bg-ydi-gold/20 flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-ydi-gold">
                  flight_takeoff
                </span>
              </div>
              <h3 className="text-2xl font-headline font-bold mb-4 text-white">
                Travel & Stay
              </h3>
              <ul className="space-y-4 text-white/70 font-body">
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-ydi-gold text-sm mt-1">
                    check_circle
                  </span>
                  Round-trip flight to Accra
                </li>
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-ydi-gold text-sm mt-1">
                    check_circle
                  </span>
                  5-Star Shared Accommodation
                </li>
              </ul>
            </div>

            <div className="glass-panel p-10 rounded-3xl text-left border-t-2 border-t-ydi-gold/40 relative transform md:-translate-y-6">
              <div className="w-12 h-12 rounded-xl bg-ydi-gold/20 flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-ydi-gold">
                  auto_awesome
                </span>
              </div>
              <h3 className="text-2xl font-headline font-bold mb-4 text-white">
                Conference Access
              </h3>
              <ul className="space-y-4 text-white/70 font-body">
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-ydi-gold text-sm mt-1">
                    check_circle
                  </span>
                  Full Delegate Participation
                </li>
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-ydi-gold text-sm mt-1">
                    check_circle
                  </span>
                  Premium Summit Materials
                </li>
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-ydi-gold text-sm mt-1">
                    check_circle
                  </span>
                  Official Certification
                </li>
              </ul>
            </div>

            <div className="glass-panel p-10 rounded-3xl text-left border-t-2 border-t-ydi-gold/40">
              <div className="w-12 h-12 rounded-xl bg-ydi-gold/20 flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-ydi-gold">
                  local_taxi
                </span>
              </div>
              <h3 className="text-2xl font-headline font-bold mb-4 text-white">
                Logistics
              </h3>
              <ul className="space-y-4 text-white/70 font-body">
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-ydi-gold text-sm mt-1">
                    check_circle
                  </span>
                  Internal Transportation
                </li>
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-ydi-gold text-sm mt-1">
                    check_circle
                  </span>
                  Daily Full Board Catering
                </li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col items-center gap-4">
            <Link
              to="/scholarships"
              className="px-12 py-6 bg-ydi-gold text-black font-headline font-black text-xl rounded-2xl neon-glow-secondary transition-all hover:scale-105 active:scale-95 text-center"
            >
              Apply Now ($10.99 Registration Fee)
            </Link>
            <p className="text-white/60 font-label text-[10px] uppercase tracking-widest font-bold">
              Applications close Mar 30th, 2026
            </p>
          </div>
        </div>
      </section>

      <section className="py-32 bg-ydi-royal-green pb-48">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <div className="space-y-4">
              <span className="text-ydi-gold font-label text-xs font-extrabold tracking-widest uppercase">
                INCUBATING LEADERSHIP
              </span>
              <h2 className="text-4xl md:text-6xl font-headline font-bold tracking-tight text-white">
                Our Core Programs
              </h2>
            </div>
            <p className="text-white/70 font-body max-w-sm">
              Strategic initiatives designed to transform active citizens into
              global diplomats.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 bg-[#014d25] rounded-4xl overflow-hidden border border-white/5 flex flex-col md:flex-row">
              <div className="p-10 flex-1 space-y-6">
                <div className="w-10 h-10 rounded-full bg-ydi-gold/20 flex items-center justify-center">
                  <span className="material-symbols-outlined text-ydi-gold">
                    forum
                  </span>
                </div>
                <h3 className="text-3xl font-headline font-bold text-white">
                  Dialogue Platforms
                </h3>
                <p className="text-white/70 font-body">
                  Structured high-level discussions between youth leaders and
                  African policy makers.
                </p>

                <div className="bg-[#013b1c] p-10 rounded-2xl  border border-white/5 shadow-inner">
                  <Link
                    to="/scholarships"
                    className="w-full py-5 bg-ydi-gold/20 border border-ydi-gold/30 text-ydi-gold font-bold rounded-lg text-xs tracking-widest uppercase flex items-center justify-center text-center"
                  >
                    Go to Registration
                  </Link>
                </div>
              </div>
            </div>

            <div className="bg-[#014d25] p-10 rounded-4xl border border-white/5 space-y-6 group hover:border-ydi-gold/30 transition-all">
              <div className="w-12 h-12 rounded-xl bg-ydi-gold/20 flex items-center justify-center">
                <span className="material-symbols-outlined text-ydi-gold">
                  model_training
                </span>
              </div>
              <h3 className="text-3xl font-headline font-bold text-white">
                Immersive Bootcamps
              </h3>
              <p className="text-white/70 font-body">
                14-day intensive simulations of crisis management and
                negotiation strategies.
              </p>
              <div className="relative rounded-2xl overflow-hidden aspect-video">
                <img
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all"
                  alt="Bootcamp"
                  src={dialogImage}
                />
              </div>
            </div>

            <div className="lg:col-span-3 bg-[#014d25] p-10 rounded-4xl border border-white/5 flex flex-col md:flex-row items-center gap-12 group hover:border-ydi-gold/20 transition-all">
              <div className="flex-1 space-y-6">
                <div className="w-12 h-12 rounded-xl bg-ydi-gold/20 flex items-center justify-center">
                  <span className="material-symbols-outlined text-ydi-gold">
                    account_balance
                  </span>
                </div>
                <h3 className="text-3xl font-headline font-bold text-white">
                  Youth AU / UN Models
                </h3>
                <p className="text-white/70 font-body max-w-xl">
                  Experience the world's most influential decision-making
                  bodies. Our models provide authentic simulations of the
                  African Union and United Nations, equipping you with the
                  legislative and oratorical skills to lead.
                </p>
                <Link
                  to="/programs"
                  className="px-6 py-3 border-b-2 border-ydi-gold text-ydi-gold font-bold uppercase tracking-widest text-xs inline-block"
                >
                  View Upcoming Models
                </Link>
              </div>
              <div className="grid grid-cols-2 gap-4 w-full md:w-1/3">
                <div className="h-40 rounded-2xl overflow-hidden relative">
                  <img
                    className="w-full h-full object-cover"
                    alt="Plenary hall"
                    src={PlenaryImage}
                  />
                </div>
                <div className="h-40 rounded-2xl overflow-hidden relative translate-y-8">
                  <img
                    className="w-full h-full object-cover"
                    alt="conference"
                    src={conference}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="fixed bottom-0 left-0 w-full z-50 pointer-events-none">
        <div className="bg-ydi-gold/20 backdrop-blur-xl border-t border-ydi-gold/30 px-6 py-3 text-center flex flex-col md:flex-row items-center justify-center gap-4 pointer-events-auto">
          <p className="text-white font-body text-sm font-medium">
            Don't miss out! Applications for the{" "}
            <span className="text-ydi-gold font-bold">
              Fully Funded MAU 2026 Scholarship
            </span>{" "}
            are closing soon.
          </p>
          <Link
            to="/scholarships"
            className="px-6 py-2 bg-ydi-gold text-black font-headline font-bold text-xs rounded-full neon-glow-primary hover:scale-105 transition-transform text-center"
          >
            Submit Application
          </Link>
        </div>
      </div>
    </div>
  );
}
