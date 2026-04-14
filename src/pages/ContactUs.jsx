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
        "The priority deadline for applications is March 31, 2026.We encourage early submission to secure your spot.",
    },
    {
      question: "Who is eligible for the scholarship?",
      answer:
        "Young leaders aged 18-30 from developing nations are eligible. We prioritize candidates with a proven track record of community impact and financial need.",
    },
  ];

  return (
    <div className="bg-ydi-royal-green relative overflow-hidden pt-24 pb-20 animate-smooth-enter">
      <header className="pt-16 pb-16 px-6 text-center max-w-4xl mx-auto">
        <h1 className="font-headline text-6xl md:text-8xl font-bold tracking-tight text-white mb-6">
          Get in Touch
        </h1>
        <p className="font-body text-lg md:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
          Have questions about the YDI MAU 2026 Conference or our youth
          programs? Our team is here to help.
        </p>
      </header>

      <section className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          <div className="lg:col-span-5 flex flex-col space-y-6">
            <div className="bg-white p-8 rounded-xl h-full shadow-xl flex flex-col justify-between">
              <div>
                <div className="mb-12">
                  <span className="font-label uppercase tracking-widest text-ydi-gold text-xs font-extrabold mb-2 block">
                    Connect With Us
                  </span>
                  <h2 className="font-headline text-3xl font-bold text-gray-800">
                    The Global Hub
                  </h2>
                </div>

                <div className="space-y-10">
                  <div className="flex items-start gap-5">
                    <div className="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center text-ydi-gold border border-gray-100 shadow-sm">
                      <span className="material-symbols-outlined">
                        location_on
                      </span>
                    </div>
                    <div>
                      <h4 className="font-headline font-bold text-gray-800 text-lg">
                        Headquarters
                      </h4>
                      <p className="text-gray-600 font-body">
                        Accra, Ghana - Host City for MAU 2026
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-5">
                    <div className="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center text-ydi-gold border border-gray-100 shadow-sm">
                      <span className="material-symbols-outlined">mail</span>
                    </div>
                    <div>
                      <h4 className="font-headline font-bold text-gray-800 text-lg">
                        Email
                      </h4>
                      <p className="text-gray-600 font-body">
                        info@youthdiplomacy.org
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-5">
                    <div className="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center text-ydi-gold border border-gray-100 shadow-sm">
                      <span className="material-symbols-outlined">share</span>
                    </div>
                    <div>
                      <h4 className="font-headline font-bold text-gray-800 text-lg">
                        Follow Us
                      </h4>
                      <div className="flex gap-4 mt-3">
                        <a
                          href="#"
                          className="p-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors text-gray-600 flex items-center justify-center"
                        >
                          <span className="material-symbols-outlined text-sm">
                            public
                          </span>
                        </a>
                        <a
                          href="#"
                          className="p-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors text-gray-600 flex items-center justify-center"
                        >
                          <span className="material-symbols-outlined text-sm">
                            forum
                          </span>
                        </a>
                        <a
                          href="#"
                          className="p-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors text-gray-600 flex items-center justify-center"
                        >
                          <span className="material-symbols-outlined text-sm">
                            photo_camera
                          </span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-12 rounded-xl overflow-hidden grayscale hover:grayscale-0 transition-all duration-700 h-48 border border-gray-100">
                <img
                  className="w-full h-full object-cover"
                  alt="location"
                  src={locationImage}
                />
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="bg-white p-10 rounded-xl shadow-xl text-gray-800 h-full">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="font-label text-[10px] uppercase tracking-widest font-bold text-gray-500">
                      Full Name
                    </label>
                    <input
                      className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-4 text-gray-800 placeholder:text-gray-400 focus:ring-1 focus:ring-ydi-gold focus:border-ydi-gold transition-all outline-none"
                      type="text"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="font-label text-[10px] uppercase tracking-widest font-bold text-gray-500">
                      Email Address
                    </label>
                    <input
                      className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-4 text-gray-800 placeholder:text-gray-400 focus:ring-1 focus:ring-ydi-gold focus:border-ydi-gold transition-all outline-none"
                      type="email"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="font-label text-[10px] uppercase tracking-widest font-bold text-gray-500">
                    Inquiry Type
                  </label>
                  <select className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-4 text-gray-800 placeholder:text-gray-400 focus:ring-1 focus:ring-ydi-gold focus:border-ydi-gold transition-all outline-none appearance-none">
                    <option>Scholarship Help</option>
                    <option>Partnerships</option>
                    <option>General Inquiry</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="font-label text-[10px] uppercase tracking-widest font-bold text-gray-500">
                    Your Message
                  </label>
                  <textarea
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-4 text-gray-800 placeholder:text-gray-400 focus:ring-1 focus:ring-ydi-gold focus:border-ydi-gold transition-all outline-none"
                    placeholder="How can we support your diplomatic journey?"
                    rows="6"
                  ></textarea>
                </div>

                <button
                  className="w-full bg-ydi-gold text-gray-900 font-headline font-bold py-5 rounded-xl hover:shadow-[0_0_30px_rgba(220,182,64,0.4)] transition-all scale-100 active:scale-[0.98]"
                  type="button"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-6 py-24">
        <div className="bg-white p-12 rounded-xl shadow-xl">
          <div className="text-center mb-16">
            <span className="font-label uppercase tracking-[0.3em] text-ydi-gold text-xs font-bold mb-3 block">
              Knowledge Base
            </span>
            <h2 className="font-headline text-4xl md:text-5xl font-bold text-gray-800">
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
                  className="w-full px-8 py-6 flex justify-between items-center text-left focus:outline-none"
                >
                  <span className="font-headline font-bold text-gray-800 text-lg">
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
                  className={`px-8 overflow-hidden transition-all duration-300 ease-in-out ${
                    openFaq === index
                      ? "max-h-40 pb-6 opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="text-gray-600 font-body">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
