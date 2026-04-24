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
    <div className="bg-ydi-royal-green pt-24 pb-20 overflow-hidden text-on-surface font-body">
      <header className="relative w-full min-h-[40vh] md:h-[60vh] flex flex-col items-center justify-center text-center px-6 mb-12 md:mb-16">
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
          <h1 className="font-headline text-5xl sm:text-7xl md:text-8xl font-bold tracking-tighter text-white">
            About YDI
          </h1>
          <p className="font-label text-ydi-gold text-base sm:text-xl md:text-2xl tracking-widest uppercase drop-shadow-sm max-w-3xl mx-auto">
            Shaping the conscience and character of a global community.
          </p>
        </div>

        <div className="absolute bottom-0 left-0 w-full h-0.5 ydi-trail-gold opacity-30"></div>
      </header>

      <section className="max-w-7xl mx-auto px-4 sm:px-8 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-24 md:mb-32">
        <div className="bg-white p-8 md:p-10 rounded-lg shadow-xl relative overflow-hidden group">
          <div className="absolute top-0 left-0 w-2 h-full bg-ydi-gold"></div>
          <h2 className="font-headline text-2xl md:text-3xl font-bold mb-4 md:mb-6 text-ydi-royal-green">
            Our Mission
          </h2>
          <p className="font-body text-base md:text-lg leading-relaxed text-ydi-royal-green">
            To train, mentor, and empower young people with diplomatic skills,
            global awareness, and leadership competencies needed to influence
            policy, promote peace, and drive international cooperation.
          </p>
        </div>

        <div className="bg-white p-8 md:p-10 rounded-lg shadow-xl relative overflow-hidden group">
          <div className="absolute top-0 left-0 w-2 h-full bg-ydi-royal-green"></div>
          <h2 className="font-headline text-2xl md:text-3xl font-bold mb-4 md:mb-6 text-ydi-royal-green">
            Our Vision
          </h2>
          <p className="font-body text-base md:text-lg leading-relaxed text-ydi-royal-green">
            To strengthen the capacity of young Africans to meaningfully engage
            in diplomacy, global governance, and sustainable development at
            local, regional, and global levels.
          </p>
        </div>
      </section>

      <section className="w-full bg-white/5 py-16 md:py-24 mb-24 md:mb-32 relative border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 flex flex-col md:flex-row items-center gap-8 md:gap-24">
          <div className="shrink-0">
            <span className="font-headline text-[8rem] sm:text-[10rem] md:text-[12rem] font-black leading-none text-ydi-gold drop-shadow-md">
              60%
            </span>
          </div>
          <div className="max-w-xl w-full">
            <div className="bg-white p-6 md:p-10 rounded-lg shadow-xl">
              <p className="font-body text-xl sm:text-2xl md:text-3xl font-bold text-ydi-royal-green leading-tight mb-4 md:mb-6">
                Over 60% of Africa's population is under the age of 30.
              </p>
              <p className="font-body text-sm md:text-lg text-ydi-royal-green">
                The need to intentionally invest in youth diplomatic capacity is
                both urgent and strategic. We are building a sustainable
                pipeline of young diplomats and change-makers across the
                continent.
              </p>
            </div>
          </div>
        </div>
        <div className="absolute top-0 right-0 w-1/3 h-0.5 ydi-trail-gold opacity-20 hidden md:block"></div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-8 mb-24 md:mb-32">
        <div className="mb-12 md:mb-16 text-center md:text-left">
          <h2 className="font-headline text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">
            Leadership & Advisory Council
          </h2>
          <p className="font-label text-[10px] md:text-sm uppercase tracking-widest text-ydi-gold font-bold">
            Guided by senior diplomats, academics, and international development
            practitioners.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {[
            {
              name: "Dr. Kwame Mensah",
              role: "Executive Director",
              img: Member1,
            },
            {
              name: "Amb. Sarah Okoro",
              role: "Advisory Council Chair",
              img: Member2,
            },
            { name: "David Tetteh", role: "Head of Programmes", img: Member3 },
            {
              name: "Elena Rodriguez",
              role: "Global Relations Advisor",
              img: Member4,
            },
            {
              name: "Prof. John Adu",
              role: "Advisory Council Member",
              img: Member5,
            },
            { name: "Marcus Chen", role: "Lead Tech Strategist", img: Member6 },
          ].map((member, i) => (
            <div
              key={i}
              className="bg-white p-8 rounded-lg shadow-xl flex flex-col items-center text-center transition-transform hover:scale-[1.02]"
            >
              <div className="w-24 h-24 rounded-full mb-6 overflow-hidden border-2 border-ydi-gold/20 p-1">
                <img
                  alt={member.name}
                  className="w-full h-full object-cover rounded-full"
                  src={member.img}
                />
              </div>
              <h3 className="font-headline text-xl font-bold text-ydi-royal-green">
                {member.name}
              </h3>
              <p className="font-label text-[10px] uppercase tracking-widest text-ydi-gold font-bold mt-1">
                {member.role}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-4 sm:px-8 mb-20">
        <div className="bg-white p-8 sm:p-12 md:p-16 rounded-4xl md:rounded-4xl border border-ydi-gold/30 flex flex-col items-center text-center relative overflow-hidden shadow-lg">
          <div className="absolute inset-0 bg-ydi-royal-green/5 blur-3xl rounded-full"></div>

          <div className="relative z-10 w-full">
            <h2 className="font-headline text-2xl sm:text-3xl md:text-5xl font-bold text-ydi-royal-green mb-8 md:mb-10 max-w-2xl mx-auto leading-tight">
              Ready to shape the future? Join us at the MAU 2026 Conference in
              Accra.
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                to="/scholarships"
                className="w-full sm:w-auto px-8 md:px-10 py-4 bg-ydi-gold text-ydi-royal-green font-headline font-bold text-sm md:text-base rounded-full shadow-md hover:opacity-90 transition-all transform hover:-translate-y-1 text-center"
              >
                Apply for Scholarship
              </Link>
              <Link
                to="/register"
                className="w-full sm:w-auto px-8 md:px-10 py-4 border-2 border-ydi-royal-green text-ydi-royal-green font-headline font-bold text-sm md:text-base rounded-full hover:bg-ydi-royal-green hover:text-white transition-all text-center"
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
