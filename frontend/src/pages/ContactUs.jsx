import { useState } from "react";
import locationImage from "../assets/location.jpg";

export default function Contact() {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqs = [
    {
      question: "When is the MAU 2026 deadline?",
      answer:
        "The priority deadline for applications is March 31, 2026. We encourage early submission to secure your spot.",
    },
    {
      question: "Who is eligible for the scholarship?",
      answer:
        "Young leaders aged 18-30 from developing nations are eligible. We prioritize candidates with a proven track record of community impact and financial need.",
    },
  ];

  return (
    <div className="bg-ydi-royal-green relative overflow-hidden pt-24 pb-20 animate-smooth-enter text-on-surface font-body">
      <header className="pt-12 md:pt-16 pb-12 md:pb-16 px-4 sm:px-6 text-center max-w-4xl mx-auto">
        <h1 className="font-headline text-4xl sm:text-6xl md:text-8xl font-bold tracking-tight text-white mb-6">
          Get in Touch
        </h1>
        <p className="font-body text-base sm:text-lg md:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
          Have questions about the YDI MAU 2026 Conference or our youth
          programs? Our team is here to help.
        </p>
      </header>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-8 md:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8 items-stretch">
          <div className="lg:col-span-5 flex flex-col space-y-6">
            <div className="bg-white p-6 md:p-8 rounded-xl h-full shadow-xl flex flex-col justify-between">
              <div>
                <div className="mb-8 md:mb-12">
                  <span className="font-label uppercase tracking-widest text-ydi-gold text-[10px] md:text-xs font-extrabold mb-2 block">
                    Connect With Us
                  </span>
                  <h2 className="font-headline text-2xl md:text-3xl font-bold text-gray-800">
                    The Global Hub
                  </h2>
                </div>

                <div className="space-y-8 md:space-y-10">
                  <div className="flex items-start gap-4 md:gap-5">
                    <div className="shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-xl bg-gray-50 flex items-center justify-center text-ydi-gold border border-gray-100 shadow-sm">
                      <span className="material-symbols-outlined text-xl md:text-2xl">
                        location_on
                      </span>
                    </div>
                    <div>
                      <h4 className="font-headline font-bold text-gray-800 text-base md:text-lg">
                        Headquarters
                      </h4>
                      <p className="text-gray-600 text-sm md:text-base font-body">
                        Accra, Ghana - Host City for MAU 2026
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 md:gap-5">
                    <div className="shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-xl bg-gray-50 flex items-center justify-center text-ydi-gold border border-gray-100 shadow-sm">
                      <span className="material-symbols-outlined text-xl md:text-2xl">
                        mail
                      </span>
                    </div>
                    <div>
                      <h4 className="font-headline font-bold text-gray-800 text-base md:text-lg">
                        Email
                      </h4>
                      <p className="text-gray-600 text-sm md:text-base font-body">
                        info@youthdiplomacy.org
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 md:gap-5">
                    <div className="shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-xl bg-gray-50 flex items-center justify-center text-ydi-gold border border-gray-100 shadow-sm">
                      <span className="material-symbols-outlined text-xl md:text-2xl">
                        share
                      </span>
                    </div>
                    <div>
                      <h4 className="font-headline font-bold text-gray-800 text-base md:text-lg">
                        Follow Us
                      </h4>
                      <div className="flex gap-3 md:gap-4 mt-3">
                        {["public", "forum", "photo_camera"].map((icon, i) => (
                          <a
                            key={i}
                            href="#"
                            className="p-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors text-gray-600 flex items-center justify-center"
                          >
                            <span className="material-symbols-outlined text-sm md:text-base">
                              {icon}
                            </span>
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 md:mt-12 rounded-xl overflow-hidden grayscale hover:grayscale-0 transition-all duration-700 h-40 md:h-48 border border-gray-100">
                <img
                  className="w-full h-full object-cover"
                  alt="location"
                  src={locationImage}
                />
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="bg-white p-6 sm:p-8 md:p-10 rounded-xl shadow-xl text-gray-800 h-full">
              <form className="space-y-4 md:space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                  <div className="space-y-1 md:space-y-2">
                    <label className="font-label text-[10px] uppercase tracking-widest font-bold text-gray-500">
                      Full Name
                    </label>
                    <input
                      className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 md:py-4 text-sm md:text-base text-gray-800 focus:ring-1 focus:ring-ydi-gold focus:border-ydi-gold transition-all outline-none"
                      type="text"
                    />
                  </div>
                  <div className="space-y-1 md:space-y-2">
                    <label className="font-label text-[10px] uppercase tracking-widest font-bold text-gray-500">
                      Email Address
                    </label>
                    <input
                      className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 md:py-4 text-sm md:text-base text-gray-800 focus:ring-1 focus:ring-ydi-gold focus:border-ydi-gold transition-all outline-none"
                      type="email"
                    />
                  </div>
                </div>

                <div className="space-y-1 md:space-y-2">
                  <label className="font-label text-[10px] uppercase tracking-widest font-bold text-gray-500">
                    Inquiry Type
                  </label>
                  <select className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 md:py-4 text-sm md:text-base text-gray-800 focus:ring-1 focus:ring-ydi-gold focus:border-ydi-gold transition-all outline-none appearance-none">
                    <option>Scholarship Help</option>
                    <option>Partnerships</option>
                    <option>General Inquiry</option>
                  </select>
                </div>

                <div className="space-y-1 md:space-y-2">
                  <label className="font-label text-[10px] uppercase tracking-widest font-bold text-gray-500">
                    Your Message
                  </label>
                  <textarea
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 md:py-4 text-sm md:text-base text-gray-800 focus:ring-1 focus:ring-ydi-gold focus:border-ydi-gold transition-all outline-none"
                    placeholder="How can we support your diplomatic journey?"
                    rows="5"
                  ></textarea>
                </div>

                <button
                  className="w-full bg-ydi-gold text-gray-900 font-headline font-bold py-4 md:py-5 rounded-xl text-sm md:text-base hover:shadow-[0_0_30px_rgba(220,182,64,0.4)] transition-all active:scale-[0.98]"
                  type="button"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 sm:px-6 py-16 md:py-24">
        <div className="bg-white p-6 sm:p-10 md:p-12 rounded-xl shadow-xl">
          <div className="text-center mb-10 md:mb-16">
            <span className="font-label uppercase tracking-[0.3em] text-ydi-gold text-[10px] md:text-xs font-bold mb-3 block">
              Knowledge Base
            </span>
            <h2 className="font-headline text-3xl md:text-5xl font-bold text-gray-800">
              Frequently Asked
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className={`bg-gray-50 border rounded-xl overflow-hidden transition-colors ${
                  openFaq === index
                    ? "border-ydi-gold"
                    : "border-gray-100 hover:border-ydi-gold/30"
                }`}
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full px-6 md:px-8 py-5 md:py-6 flex justify-between items-center text-left focus:outline-none"
                >
                  <span className="font-headline font-bold text-gray-800 text-base md:text-lg">
                    {faq.question}
                  </span>
                  <span
                    className={`material-symbols-outlined text-ydi-gold transition-transform duration-300 ${
                      openFaq === index ? "rotate-180" : ""
                    }`}
                  >
                    expand_more
                  </span>
                </button>

                <div
                  className={`px-6 md:px-8 overflow-hidden transition-all duration-300 ease-in-out ${
                    openFaq === index
                      ? "max-h-40 pb-6 opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="text-gray-600 text-sm md:text-base font-body">
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
