import { Link } from "react-router-dom";
import Member1 from "../assets/avatar1.jfif";
import Member2 from "../assets/avatar2.jfif";
import Member3 from "../assets/avatar3.jfif";
import Member4 from "../assets/avatar2.jfif";
import Member5 from "../assets/avatar1.jfif";
import Member6 from "../assets/avatar3.jfif";
import AfricanMap from "../assets/AfricanMap.jpg";

export default function About() {
  return (
    <div className="bg-ydi-royal-green pt-24 pb-20 overflow-hidden">
      <header className="relative w-full h-102.25 flex flex-col items-center justify-center text-center px-6 mb-16">
        <div className="absolute inset-0 z-0 opacity-20 pointer-events-none overflow-hidden mix-blend-overlay">
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-full"
            style={{
              backgroundImage: `url(${AfricanMap})`,
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center center",
            }}
          ></div>
        </div>

        <div className="relative z-10 space-y-4">
          <h1 className="font-headline text-7xl md:text-8xl font-bold tracking-tighter text-white">
            About YDI
          </h1>
          <p className="font-label text-ydi-gold text-xl md:text-2xl tracking-widest uppercase drop-shadow-sm">
            Shaping the conscience and character of a global community.
          </p>
        </div>

        <div className="absolute bottom-0 left-0 w-full h-0.5 ydi-trail-gold opacity-30"></div>
      </header>

      <section className="max-w-7xl mx-auto px-8 grid md:grid-cols-2 gap-8 mb-32">
        <div className="bg-white p-10 rounded-lg shadow-xl relative overflow-hidden group">
          <div className="absolute top-0 left-0 w-2 h-full bg-ydi-gold"></div>
          <h2 className="font-headline text-3xl font-bold mb-6 text-ydi-royal-green">
            Our Mission
          </h2>
          <p className="font-body text-lg leading-relaxed text-ydi-royal-green">
            To train, mentor, and empower young people with diplomatic skills,
            global awareness, and leadership competencies needed to influence
            policy, promote peace, and drive international cooperation.
          </p>
        </div>

        <div className="bg-white p-10 rounded-lg shadow-xl relative overflow-hidden group">
          <div className="absolute top-0 left-0 w-2 h-full bg-ydi-royal-green"></div>
          <h2 className="font-headline text-3xl font-bold mb-6 text-ydi-royal-green">
            Our Vision
          </h2>
          <p className="font-body text-lg leading-relaxed text-ydi-royal-green">
            To strengthen the capacity of young Africans to meaningfully engage
            in diplomacy, global governance, and sustainable development at
            local, regional, and global levels.
          </p>
        </div>
      </section>

      <section className="w-full bg-white/5 py-24 mb-32 relative border-y border-white/5">
        <div className="max-w-7xl mx-auto px-8 flex flex-col md:flex-row items-center gap-12 md:gap-24">
          <div className="shrink-0">
            <span className="font-headline text-[12rem] font-black leading-none text-ydi-gold drop-shadow-md">
              60%
            </span>
          </div>
          <div className="max-w-xl">
            <div className="bg-white p-10 rounded-lg shadow-xl">
              <p className="font-body text-2xl md:text-3xl font-bold text-ydi-royal-green leading-tight mb-6">
                Over 60% of Africa's population is under the age of 30.
              </p>
              <p className="font-body text-lg text-ydi-royal-green">
                The need to intentionally invest in youth diplomatic capacity is
                both urgent and strategic. We are building a sustainable
                pipeline of young diplomats and change-makers across the
                continent.
              </p>
            </div>
          </div>
        </div>
        <div className="absolute top-0 right-0 w-1/3 h-0.5 ydi-trail-gold opacity-20"></div>
      </section>

      <section className="max-w-7xl mx-auto px-8 mb-32">
        <div className="mb-16">
          <h2 className="font-headline text-5xl font-bold tracking-tight text-white mb-4">
            Leadership & Advisory Council
          </h2>
          <p className="font-label text-sm uppercase tracking-widest text-ydi-gold font-bold">
            Guided by senior diplomats, academics, and international development
            practitioners.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-xl flex flex-col items-center text-center">
            <div className="w-24 h-24 rounded-full mb-6 overflow-hidden border-2 border-ydi-royal-green/20 p-1">
              <img
                alt="Member1"
                className="w-full h-full object-cover rounded-full"
                src={Member1}
              />
            </div>
            <h3 className="font-headline text-xl font-bold text-ydi-royal-green">
              Dr. Kwame Mensah
            </h3>
            <p className="font-label text-xs uppercase tracking-widest text-ydi-gold font-bold mt-1">
              Executive Director
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-xl flex flex-col items-center text-center">
            <div className="w-24 h-24 rounded-full mb-6 overflow-hidden border-2 border-ydi-gold/20 p-1">
              <img
                alt="Member2"
                className="w-full h-full object-cover rounded-full"
                src={Member2}
              />
            </div>
            <h3 className="font-headline text-xl font-bold text-ydi-royal-green">
              Amb. Sarah Okoro
            </h3>
            <p className="font-label text-xs uppercase tracking-widest text-ydi-gold font-bold mt-1">
              Advisory Council Chair
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-xl flex flex-col items-center text-center">
            <div className="w-24 h-24 rounded-full mb-6 overflow-hidden border-2 border-ydi-royal-green/20 p-1">
              <img
                alt="Member3"
                className="w-full h-full object-cover rounded-full"
                src={Member3}
              />
            </div>
            <h3 className="font-headline text-xl font-bold text-ydi-royal-green">
              David Tetteh
            </h3>
            <p className="font-label text-xs uppercase tracking-widest text-ydi-gold font-bold mt-1">
              Head of Programmes
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-xl flex flex-col items-center text-center">
            <div className="w-24 h-24 rounded-full mb-6 overflow-hidden border-2 border-gray-200 p-1">
              <img
                alt="Member4"
                className="w-full h-full object-cover rounded-full"
                src={Member4}
              />
            </div>
            <h3 className="font-headline text-xl font-bold text-ydi-royal-green">
              Elena Rodriguez
            </h3>
            <p className="font-label text-xs uppercase tracking-widest text-ydi-royal-green font-bold mt-1">
              Global Relations Advisor
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-xl flex flex-col items-center text-center">
            <div className="w-24 h-24 rounded-full mb-6 overflow-hidden border-2 border-gray-200 p-1">
              <img
                alt="Member5"
                className="w-full h-full object-cover rounded-full"
                src={Member5}
              />
            </div>
            <h3 className="font-headline text-xl font-bold text-ydi-royal-green">
              Prof. John Adu
            </h3>
            <p className="font-label text-xs uppercase tracking-widest text-ydi-royal-green font-bold mt-1">
              Advisory Council Member
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-xl flex flex-col items-center text-center">
            <div className="w-24 h-24 rounded-full mb-6 overflow-hidden border-2 border-gray-200 p-1">
              <img
                alt="Member6"
                className="w-full h-full object-cover rounded-full"
                src={Member6}
              />
            </div>
            <h3 className="font-headline text-xl font-bold text-ydi-royal-green">
              Marcus Chen
            </h3>
            <p className="font-label text-xs uppercase tracking-widest text-ydi-royal-green font-bold mt-1">
              Lead Tech Strategist
            </p>
          </div>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-8 mb-20">
        <div className="bg-white p-16 rounded-4xl border border-ydi-gold/30 flex flex-col items-center text-center relative overflow-hidden shadow-lg">
          <div className="absolute inset-0 bg-ydi-royal-green/5 blur-3xl rounded-full"></div>

          <div className="relative z-10">
            <h2 className="font-headline text-4xl md:text-5xl font-bold text-ydi-royal-green mb-10 max-w-2xl mx-auto">
              Ready to shape the future? Join us at the MAU 2026 Conference in
              Accra.
            </h2>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                to="/scholarships"
                className="px-10 py-4 bg-ydi-gold text-ydi-royal-green font-headline font-bold rounded-full shadow-md hover:opacity-90 transition-all transform hover:-translate-y-1 text-center"
              >
                Apply for Scholarship
              </Link>
              <Link
                to="/register"
                className="px-10 py-4 border-2 border-ydi-royal-green text-ydi-royal-green font-headline font-bold rounded-full hover:bg-ydi-royal-green hover:text-white transition-all text-center"
              >
                Register Now
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
