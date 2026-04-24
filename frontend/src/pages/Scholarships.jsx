import { useState } from "react";

export default function Scholarships() {
  const [formData, setFormData] = useState({
    full_name: "",
    email: "",
    phone: "",
    institution: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setMessage("");

    try {
      const response = await fetch("/api/v1/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setMessage("Registration successful. Redirecting to payment.");
      } else {
        setMessage("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setMessage("Network error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-ydi-royal-green pt-24 pb-20 animate-smooth-enter text-on-surface font-body">
      <section className="relative overflow-hidden py-16 md:py-24 px-4 sm:px-6 flex flex-col items-center text-center">
        <div className="relative z-10 max-w-4xl">
          <span className="font-label text-ydi-gold text-[10px] md:text-sm tracking-[0.3em] uppercase mb-4 block font-bold">
            International Opportunity
          </span>
          <h1 className="font-headline text-4xl sm:text-6xl md:text-8xl font-bold tracking-tight text-white leading-tight mb-6 md:mb-8">
            YDI MAU 2026 <br className="hidden sm:block" /> Funded Scholarship
          </h1>
          <p className="text-base sm:text-xl md:text-2xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            Ensuring that merit, passion, and potential not financial capacity
            determine access to this transformative diplomatic experience.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
          <div className="bg-white rounded-xl shadow-2xl p-6 sm:p-10 flex flex-col relative overflow-hidden group">
            <h3 className="font-headline text-2xl md:text-3xl font-bold text-ydi-royal-green mb-2">
              Fully Funded Scholarship
            </h3>
            <div className="text-ydi-gold font-label text-[10px] md:text-sm tracking-widest uppercase mb-6 md:mb-8 font-bold">
              Prestigious Tier
            </div>
            <ul className="space-y-4 md:space-y-6 grow">
              {[
                "Round-trip flight to Accra, Ghana",
                "Premium Accommodation",
                "Feeding (Daily Meals)",
                "Local transportation logistics",
                "Conference materials & Certification",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 md:gap-4">
                  <span className="material-symbols-outlined text-ydi-gold shrink-0 text-xl md:text-2xl">
                    check_circle
                  </span>
                  <span className="text-gray-700 text-sm md:text-lg">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
            <div className="mt-8 md:mt-10 pt-6 md:pt-10 border-t border-gray-100">
              <p className="text-gray-500 font-label text-[10px] uppercase tracking-tighter font-bold">
                Availability: Merit-Based Selection
              </p>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-2xl p-6 sm:p-10 flex flex-col group">
            <h3 className="font-headline text-2xl md:text-3xl font-bold text-ydi-royal-green mb-2">
              Partially Funded Scholarship
            </h3>
            <div className="text-ydi-gold font-label text-[10px] md:text-sm tracking-widest uppercase mb-6 md:mb-8 font-bold">
              Accessible Tier
            </div>
            <ul className="space-y-4 md:space-y-6 grow">
              {[
                "Subsidized conference fees",
                "Access to all digital & physical materials",
                "Official Summit Certification",
                "Full session participation and networking",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 md:gap-4">
                  <span className="material-symbols-outlined text-ydi-gold shrink-0 text-xl md:text-2xl">
                    check_circle
                  </span>
                  <span className="text-gray-700 text-sm md:text-lg">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
            <div className="mt-8 md:mt-10 pt-6 md:pt-10 border-t border-gray-100">
              <p className="text-gray-500 font-label text-[10px] uppercase tracking-tighter font-bold">
                Availability: High-Potential Candidates
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-12 md:py-20">
        <div className="relative rounded-2xl md:rounded-xl overflow-hidden p-0.5 md:p-1 bg-ydi-gold">
          <div className="bg-white flex flex-col md:flex-row items-center justify-between rounded-2xl md:rounded-xl p-8 sm:p-12 relative overflow-hidden">
            <div className="relative z-10 md:w-3/5 text-center md:text-left">
              <h2 className="font-headline text-2xl sm:text-4xl md:text-5xl font-extrabold text-ydi-royal-green mb-4">
                Compete for the Overall{" "}
                <span className="text-transparent bg-clip-text bg-linear-to-r from-ydi-gold via-yellow-600 to-ydi-gold font-black">
                  Best Delegate Award
                </span>
              </h2>
              <p className="text-base sm:text-xl text-gray-700">
                Win a Fully Funded Trip to{" "}
                <span className="text-ydi-royal-green font-bold">Morocco</span>,
                including travel, accommodation, and participation in an
                international engagement opportunity.
              </p>
            </div>
            <div className="relative z-10 md:w-1/3 mt-8 md:mt-0 flex justify-center">
              <div className="w-32 h-32 sm:w-48 sm:h-48 rounded-full bg-ydi-gold flex items-center justify-center p-1 shadow-lg">
                <div className="bg-white rounded-full w-full h-full flex items-center justify-center">
                  <span className="material-symbols-outlined text-5xl sm:text-6xl text-ydi-royal-green">
                    military_tech
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-12 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-start">
          <div className="bg-white rounded-xl shadow-xl p-6 sm:p-10">
            <h2 className="font-headline text-3xl sm:text-5xl font-bold text-ydi-royal-green mb-8 md:mb-12">
              How to Apply
            </h2>
            <div className="space-y-8 md:space-y-12">
              {[
                {
                  step: 1,
                  title: "Complete the online form",
                  desc: "Provide your accurate personal details and academic background to help us understand your profile.",
                },
                {
                  step: 2,
                  title: "Pay registration fee",
                  desc: (
                    <>
                      A non-refundable registration fee of{" "}
                      <span className="text-ydi-royal-green font-bold">
                        $10.99
                      </span>{" "}
                      is required to process your application and verify intent.
                    </>
                  ),
                },
                {
                  step: 3,
                  title: "Submit essays and CV",
                  desc: "Upload your statement of purpose and professional resume to showcase your leadership potential.",
                },
              ].map((item, i) => (
                <div key={i} className="flex gap-4 md:gap-8 group">
                  <div className="shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-lg bg-ydi-royal-green flex items-center justify-center text-ydi-gold font-headline font-bold text-lg md:text-xl">
                    {item.step}
                  </div>
                  <div>
                    <h4 className="font-headline text-xl md:text-2xl font-bold text-ydi-royal-green mb-1 md:mb-2">
                      {item.title}
                    </h4>
                    <p className="text-gray-700 text-sm md:text-lg">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white border border-gray-100 rounded-xl p-6 sm:p-10 relative shadow-2xl mt-8 md:mt-0">
            <div className="absolute -top-4 left-6 sm:left-10 bg-ydi-gold text-gray-900 px-4 md:px-6 py-2 rounded-xl font-label font-bold text-[10px] md:text-xs tracking-widest uppercase">
              Application Portal
            </div>

            <form
              onSubmit={handleSubmit}
              className="space-y-4 md:space-y-6 mt-4"
            >
              <div className="space-y-1 md:space-y-2">
                <label className="font-label text-[10px] uppercase tracking-widest text-gray-500 px-1 font-bold">
                  Full Name
                </label>
                <input
                  name="full_name"
                  value={formData.full_name}
                  onChange={handleChange}
                  required
                  className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 md:px-6 py-3 md:py-4 text-sm md:text-base text-ydi-royal-green focus:ring-2 focus:ring-ydi-gold transition-all outline-none"
                  type="text"
                />
              </div>

              <div className="space-y-1 md:space-y-2">
                <label className="font-label text-[10px] uppercase tracking-widest text-gray-500 px-1 font-bold">
                  Email Address
                </label>
                <input
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 md:px-6 py-3 md:py-4 text-sm md:text-base text-ydi-royal-green focus:ring-2 focus:ring-ydi-gold transition-all outline-none"
                  type="email"
                />
              </div>

              <div className="space-y-1 md:space-y-2">
                <label className="font-label text-[10px] uppercase tracking-widest text-gray-500 px-1 font-bold">
                  Phone Number
                </label>
                <input
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 md:px-6 py-3 md:py-4 text-sm md:text-base text-ydi-royal-green focus:ring-2 focus:ring-ydi-gold transition-all outline-none"
                  type="tel"
                />
              </div>

              <div className="space-y-1 md:space-y-2">
                <label className="font-label text-[10px] uppercase tracking-widest text-gray-500 px-1 font-bold">
                  University / Institution
                </label>
                <input
                  name="institution"
                  value={formData.institution}
                  onChange={handleChange}
                  required
                  className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 md:px-6 py-3 md:py-4 text-sm md:text-base text-ydi-royal-green focus:ring-2 focus:ring-ydi-gold transition-all outline-none"
                  type="text"
                />
              </div>

              <div className="pt-4">
                <button
                  disabled={isSubmitting}
                  className={`w-full bg-ydi-gold text-gray-900 py-4 md:py-5 rounded-xl font-headline font-bold text-base md:text-xl uppercase tracking-tight shadow-lg transition-all ${isSubmitting ? "opacity-70 cursor-not-allowed" : "hover:scale-[1.02] active:scale-[0.98]"}`}
                  type="submit"
                >
                  {isSubmitting
                    ? "Processing"
                    : "Submit Application & Pay $10.99"}
                </button>

                {message && (
                  <p
                    className={`text-center font-label text-xs uppercase mt-4 tracking-widest font-bold ${message.includes("error") || message.includes("wrong") ? "text-red-500" : "text-ydi-royal-green"}`}
                  >
                    {message}
                  </p>
                )}

                <p className="text-center text-gray-400 font-label text-[9px] md:text-[10px] uppercase mt-6 tracking-widest opacity-80 font-bold">
                  Secure Payment Gateway
                </p>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
