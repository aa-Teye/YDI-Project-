import { Link } from "react-router-dom";
import NetworkImage from "../assets/Network.jpg";

export default function Programs() {
  return (
    <div className="bg-ydi-royal-green pt-24 pb-20 overflow-hidden">
      <section className="relative min-h-125 flex items-center justify-center px-8 overflow-hidden mb-16">
        <div className="absolute top-1/4 -left-20 w-150 h-75 bg-white/5 blur-[120px] rounded-full rotate-45"></div>
        <div className="absolute bottom-1/4 -right-20 w-150 h-75 bg-ydi-gold/10 blur-[120px] rounded-full -rotate-45"></div>

        <div className="relative z-10 max-w-5xl text-center">
          <div className="inline-block px-4 py-1 mb-6 bg-white/10 border border-white/20 rounded-full">
            <span className="font-label text-[10px] tracking-[0.2em] text-ydi-gold uppercase">
              Institutional Framework 2.0
            </span>
          </div>
          <h1 className="font-headline text-6xl md:text-8xl font-bold tracking-tighter text-white mb-8 leading-[0.9]">
            OUR SCOPE <br /> OF{" "}
            <span className="text-gradient-gold">IMPACT</span>
          </h1>
          <p className="font-body text-xl text-slate-200 max-w-2xl mx-auto leading-relaxed">
            A holistic approach to youth development, diplomacy, and global
            leadership encompassing education, practice, research, and social
            impact.
          </p>
        </div>

        <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
          <img
            className="w-full h-full object-cover"
            alt="network"
            src={NetworkImage}
          />
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-8 py-24">
        <div className="mb-16">
          <h2 className="font-headline text-sm uppercase tracking-[0.3em] text-ydi-gold mb-2">
            Flagship Initiatives
          </h2>
          <div className="h-0.5 w-12 bg-ydi-gold"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-xl shadow-lg group hover:-translate-y-1 transition-all duration-300 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
              <span className="material-symbols-outlined text-8xl text-ydi-royal-green">
                public
              </span>
            </div>
            <span className="font-label text-xs font-bold text-ydi-gold tracking-widest uppercase mb-4 block">
              Strategic Simulation
            </span>
            <h3 className="font-headline text-3xl font-bold text-ydi-royal-green mb-4">
              Youth AU / UN Model Conferences
            </h3>
            <p className="text-gray-700 leading-relaxed text-lg mb-8">
              Hands-on diplomatic experience through Model African Union and
              Model United Nations simulations, exposing youth to international
              procedures and resolutions drafting.
            </p>
            <div className="mt-auto flex items-center gap-2 text-ydi-royal-green font-label text-sm font-bold tracking-tight cursor-pointer group/link">
              EXPLORE SIMULATIONS{" "}
              <span className="material-symbols-outlined text-base group-hover/link:translate-x-1 transition-transform">
                arrow_forward
              </span>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg group hover:-translate-y-1 transition-all duration-300 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
              <span className="material-symbols-outlined text-8xl text-ydi-royal-green">
                military_tech
              </span>
            </div>
            <span className="font-label text-xs font-bold text-ydi-gold tracking-widest uppercase mb-4 block">
              Elite Capacity
            </span>
            <h3 className="font-headline text-3xl font-bold text-ydi-royal-green mb-4">
              Leadership Training & Bootcamps
            </h3>
            <p className="text-gray-700 leading-relaxed text-lg mb-8">
              Intensive 3-7 day immersive sessions offering structured
              certification in ethical leadership, negotiation, and
              peacebuilding.
            </p>
            <div className="mt-auto flex items-center gap-2 text-ydi-royal-green font-label text-sm font-bold tracking-tight cursor-pointer group/link">
              VIEW CURRICULUM{" "}
              <span className="material-symbols-outlined text-base group-hover/link:translate-x-1 transition-transform">
                arrow_forward
              </span>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg group hover:-translate-y-1 transition-all duration-300 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
              <span className="material-symbols-outlined text-8xl text-ydi-royal-green">
                forum
              </span>
            </div>
            <span className="font-label text-xs font-bold text-ydi-gold tracking-widest uppercase mb-4 block">
              Policy Dialogue
            </span>
            <h3 className="font-headline text-3xl font-bold text-ydi-royal-green mb-4">
              Dialogue Platforms
            </h3>
            <p className="text-gray-700 leading-relaxed text-lg mb-8">
              Facilitating high-level and grassroots dialogues between youth,
              policymakers, and diplomats to promote inclusion and
              consensus-building.
            </p>
            <div className="mt-auto flex items-center gap-2 text-ydi-royal-green font-label text-sm font-bold tracking-tight cursor-pointer group/link">
              JOIN THE CONVERSATION{" "}
              <span className="material-symbols-outlined text-base group-hover/link:translate-x-1 transition-transform">
                arrow_forward
              </span>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg group hover:-translate-y-1 transition-all duration-300 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
              <span className="material-symbols-outlined text-8xl text-ydi-royal-green">
                workspace_premium
              </span>
            </div>
            <span className="font-label text-xs font-bold text-ydi-gold tracking-widest uppercase mb-4 block">
              Merit Opportunities
            </span>
            <h3 className="font-headline text-3xl font-bold text-ydi-royal-green mb-4">
              Scholarships & Fellowships
            </h3>
            <p className="text-gray-700 leading-relaxed text-lg mb-8">
              Providing merit and need-based opportunities for education,
              international exposure, and connecting young leaders with
              diplomats.
            </p>
            <Link
              to="/scholarships"
              className="mt-auto flex items-center gap-2 text-ydi-royal-green font-label text-sm font-bold tracking-tight cursor-pointer group/link hover:text-ydi-gold transition-colors"
            >
              APPLY NOW{" "}
              <span className="material-symbols-outlined text-base group-hover/link:translate-x-1 transition-transform">
                arrow_forward
              </span>
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-black/10 py-24 relative">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-4">
            <div>
              <h2 className="font-headline text-sm uppercase tracking-[0.3em] text-ydi-gold mb-2">
                Specialized Hubs
              </h2>
              <h3 className="font-headline text-4xl font-bold text-white">
                Targeted Impact Spheres
              </h3>
            </div>
            <p className="font-body text-slate-300 max-w-md md:text-right">
              Advanced vertical focus areas designed to equip the next
              generation with technical diplomatic expertise.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-ydi-gold hover:-translate-y-1 transition-all duration-300 group">
              <div className="w-12 h-12 rounded-full bg-ydi-royal-green/10 flex items-center justify-center text-ydi-royal-green mb-6 group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined">work</span>
              </div>
              <h4 className="font-headline text-xl font-bold text-ydi-royal-green mb-3">
                Internships
              </h4>
              <p className="font-body text-gray-700 text-sm leading-relaxed">
                Connecting youth to placements in embassies, international
                organizations, and NGOs.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-ydi-gold hover:-translate-y-1 transition-all duration-300 group">
              <div className="w-12 h-12 rounded-full bg-ydi-royal-green/10 flex items-center justify-center text-ydi-royal-green mb-6 group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined">
                  settings_input_antenna
                </span>
              </div>
              <h4 className="font-headline text-xl font-bold text-ydi-royal-green mb-3">
                Digital Diplomacy
              </h4>
              <p className="font-body text-gray-700 text-sm leading-relaxed">
                Training youth in digital advocacy, strategic communication, and
                responsible online engagement.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-ydi-gold hover:-translate-y-1 transition-all duration-300 group">
              <div className="w-12 h-12 rounded-full bg-ydi-royal-green/10 flex items-center justify-center text-ydi-royal-green mb-6 group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined">eco</span>
              </div>
              <h4 className="font-headline text-xl font-bold text-ydi-royal-green mb-3">
                Climate Diplomacy
              </h4>
              <p className="font-body text-gray-700 text-sm leading-relaxed">
                Preparing youth to engage in climate negotiations and
                environmental policy discussions.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-8 py-32 text-center">
        <div className="bg-white/5 p-16 rounded-4xl border border-white/10 relative overflow-hidden">
          <div className="absolute inset-0 bg-linear-to-br from-white/5 to-transparent"></div>
          <div className="relative z-10">
            <h2 className="font-headline text-5xl font-bold text-white mb-6">
              Ready to lead the future?
            </h2>
            <p className="font-body text-slate-200 text-xl mb-10 max-w-xl mx-auto">
              Join a network of over 10,000 young diplomats shaping global
              policy today.
            </p>
            <div className="flex flex-col md:flex-row justify-center gap-4">
              <Link
                to="/programs"
                className="bg-ydi-gold text-gray-900 px-10 py-4 rounded-full font-headline font-bold uppercase tracking-widest hover:scale-105 transition-all shadow-lg text-center"
              >
                Enroll in Programs
              </Link>
              <Link
                to="#"
                className="border border-ydi-gold text-ydi-gold px-10 py-4 rounded-full font-headline font-bold uppercase tracking-widest hover:bg-ydi-gold/10 transition-all text-center"
              >
                Partner With Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
