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
    <div className="bg-ydi-royal-green pt-24 pb-20 animate-smooth-enter">
      <section className="relative overflow-hidden py-24 px-6 flex flex-col items-center text-center">
        <div className="relative z-10 max-w-4xl">
          <span className="font-label text-ydi-gold tracking-[0.3em] uppercase mb-4 block">
            International Opportunity
          </span>
          <h1 className="font-headline text-6xl md:text-8xl font-bold tracking-tight text-white leading-tight mb-8">
            YDI MAU 2026 <br /> Funded Scholarship
          </h1>
          <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            Ensuring that merit, passion, and potential not financial capacity
            determine access to this transformative diplomatic experience.
          </p>
        </div>
      </section>
      <section className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-2 gap-10">
          <div className="bg-white rounded-xl shadow-2xl p-10 flex flex-col relative overflow-hidden group">
            <h3 className="font-headline text-3xl font-bold text-ydi-royal-green mb-2">
              Fully Funded Scholarship
            </h3>
            <div className="text-ydi-gold font-label text-sm tracking-widest uppercase mb-8">
              Prestigious Tier
            </div>
            <ul className="space-y-6 grow">
              <li className="flex items-center gap-4">
                <span
                  className="material-symbols-outlined text-ydi-gold"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  check_circle
                </span>
                <span className="text-gray-700 text-lg">
                  Round-trip flight to Accra, Ghana
                </span>
              </li>
              <li className="flex items-center gap-4">
                <span
                  className="material-symbols-outlined text-ydi-gold"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  check_circle
                </span>
                <span className="text-gray-700 text-lg">
                  Premium Accommodation
                </span>
              </li>
              <li className="flex items-center gap-4">
                <span
                  className="material-symbols-outlined text-ydi-gold"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  check_circle
                </span>
                <span className="text-gray-700 text-lg">
                  Feeding (Daily Meals)
                </span>
              </li>
              <li className="flex items-center gap-4">
                <span
                  className="material-symbols-outlined text-ydi-gold"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  check_circle
                </span>
                <span className="text-gray-700 text-lg">
                  Local transportation logistics
                </span>
              </li>
              <li className="flex items-center gap-4">
                <span
                  className="material-symbols-outlined text-ydi-gold"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  check_circle
                </span>
                <span className="text-gray-700 text-lg">
                  Conference materials & Certification
                </span>
              </li>
            </ul>
            <div className="mt-10 pt-10 border-t border-gray-100">
              <p className="text-gray-500 font-label text-xs uppercase tracking-tighter">
                Availability: Merit-Based Selection
              </p>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-2xl p-10 flex flex-col group">
            <h3 className="font-headline text-3xl font-bold text-ydi-royal-green mb-2">
              Partially Funded Scholarship
            </h3>
            <div className="text-ydi-gold font-label text-sm tracking-widest uppercase mb-8">
              Accessible Tier
            </div>
            <ul className="space-y-6 grow">
              <li className="flex items-center gap-4">
                <span
                  className="material-symbols-outlined text-ydi-gold"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  check_circle
                </span>
                <span className="text-gray-700 text-lg">
                  Subsidized conference fees
                </span>
              </li>
              <li className="flex items-center gap-4">
                <span
                  className="material-symbols-outlined text-ydi-gold"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  check_circle
                </span>
                <span className="text-gray-700 text-lg">
                  Access to all digital & physical materials
                </span>
              </li>
              <li className="flex items-center gap-4">
                <span
                  className="material-symbols-outlined text-ydi-gold"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  check_circle
                </span>
                <span className="text-gray-700 text-lg">
                  Official Summit Certification
                </span>
              </li>
              <li className="flex items-center gap-4">
                <span
                  className="material-symbols-outlined text-ydi-gold"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  check_circle
                </span>
                <span className="text-gray-700 text-lg">
                  Full session participation and networking
                </span>
              </li>
            </ul>
            <div className="mt-10 pt-10 border-t border-gray-100">
              <p className="text-gray-500 font-label text-xs uppercase tracking-tighter">
                Availability: High-Potential Candidates
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="relative rounded-xl overflow-hidden p-1 bg-ydi-gold">
          <div className="bg-white flex flex-col md:flex-row items-center justify-between rounded-xl p-12 relative overflow-hidden">
            <div className="relative z-10 md:w-3/5">
              <h2 className="font-headline text-4xl md:text-5xl font-extrabold text-ydi-royal-green mb-4">
                Compete for the Overall{" "}
                <span className="text-ydi-gold">Best Delegate Award</span>
              </h2>
              <p className="text-xl text-gray-700">
                Win a Fully Funded Trip to{" "}
                <span className="text-ydi-royal-green font-bold">Morocco</span>,
                including travel, accommodation, and participation in an
                international engagement opportunity.
              </p>
            </div>
            <div className="relative z-10 md:w-1/3 mt-10 md:mt-0 flex justify-center">
              <div className="w-48 h-48 rounded-full bg-ydi-gold flex items-center justify-center p-1 shadow-lg">
                <div className="bg-white rounded-full w-full h-full flex items-center justify-center">
                  <span
                    className="material-symbols-outlined text-6xl text-ydi-royal-green"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    military_tech
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-20 items-start">
          <div className="bg-white rounded-xl shadow-xl p-10">
            <h2 className="font-headline text-5xl font-bold text-ydi-royal-green mb-12">
              How to Apply
            </h2>
            <div className="space-y-12">
              <div className="flex gap-8 group">
                <div className="shrink-0 w-12 h-12 rounded-lg bg-ydi-royal-green flex items-center justify-center text-ydi-gold font-headline font-bold text-xl">
                  1
                </div>
                <div>
                  <h4 className="font-headline text-2xl font-bold text-ydi-royal-green mb-2">
                    Complete the online form
                  </h4>
                  <p className="text-gray-700 text-lg">
                    Provide your accurate personal details and academic
                    background to help us understand your profile.
                  </p>
                </div>
              </div>
              <div className="flex gap-8 group">
                <div className="shrink-0 w-12 h-12 rounded-lg bg-ydi-royal-green flex items-center justify-center text-ydi-gold font-headline font-bold text-xl">
                  2
                </div>
                <div>
                  <h4 className="font-headline text-2xl font-bold text-ydi-royal-green mb-2">
                    Pay registration fee
                  </h4>
                  <p className="text-gray-700 text-lg">
                    A non-refundable registration fee of{" "}
                    <span className="text-ydi-royal-green font-bold">
                      $10.99
                    </span>{" "}
                    is required to process your application and verify intent.
                  </p>
                </div>
              </div>
              <div className="flex gap-8 group">
                <div className="shrink-0 w-12 h-12 rounded-lg bg-ydi-royal-green flex items-center justify-center text-ydi-gold font-headline font-bold text-xl">
                  3
                </div>
                <div>
                  <h4 className="font-headline text-2xl font-bold text-ydi-royal-green mb-2">
                    Submit essays and CV
                  </h4>
                  <p className="text-gray-700 text-lg">
                    Upload your statement of purpose and professional resume to
                    showcase your leadership potential.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white border border-gray-100 rounded-xl p-10 relative shadow-2xl">
            <div className="absolute -top-4 left-10 bg-ydi-gold text-gray-900 px-6 py-2 rounded-xl font-label font-bold text-xs tracking-widest uppercase">
              Application Portal
            </div>

            <form onSubmit={handleSubmit} className="space-y-6 mt-4">
              <div className="space-y-2">
                <label className="font-label text-xs uppercase tracking-widest text-gray-500 px-1">
                  Full Name
                </label>
                <input
                  name="full_name"
                  value={formData.full_name}
                  onChange={handleChange}
                  required
                  className="w-full bg-gray-50 border border-gray-200 rounded-xl px-6 py-4 text-ydi-royal-green focus:ring-2 focus:ring-ydi-gold transition-all outline-none placeholder:text-gray-400"
                  type="text"
                />
              </div>

              <div className="space-y-2">
                <label className="font-label text-xs uppercase tracking-widest text-gray-500 px-1">
                  Email Address
                </label>
                <input
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-gray-50 border border-gray-200 rounded-xl px-6 py-4 text-ydi-royal-green focus:ring-2 focus:ring-ydi-gold transition-all outline-none placeholder:text-gray-400"
                  type="email"
                />
              </div>

              <div className="space-y-2">
                <label className="font-label text-xs uppercase tracking-widest text-gray-500 px-1">
                  Phone Number
                </label>
                <input
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full bg-gray-50 border border-gray-200 rounded-xl px-6 py-4 text-ydi-royal-green focus:ring-2 focus:ring-ydi-gold transition-all outline-none placeholder:text-gray-400"
                  type="telephone"
                />
              </div>
              <div className="space-y-2">
                <label className="font-label text-xs uppercase tracking-widest text-gray-500 px-1">
                  University / Institution
                </label>
                <input
                  name="institution"
                  value={formData.institution}
                  onChange={handleChange}
                  required
                  className="w-full bg-gray-50 border border-gray-200 rounded-xl px-6 py-4 text-ydi-royal-green focus:ring-2 focus:ring-ydi-gold transition-all outline-none placeholder:text-gray-400"
                  type="text"
                />
              </div>

              <div className="pt-4">
                <button
                  disabled={isSubmitting}
                  className={`w-full bg-ydi-gold text-gray-900 py-5 rounded-xl font-headline font-bold text-xl uppercase tracking-tight shadow-lg transition-all ${isSubmitting ? "opacity-70 cursor-not-allowed" : "hover:scale-[1.02] active:scale-[0.98]"}`}
                  type="submit"
                >
                  {isSubmitting
                    ? "Processing"
                    : "Submit Application & Pay $10.99"}
                </button>

                {message && (
                  <p
                    className={`text-center font-label text-sm uppercase mt-4 tracking-widest ${message.includes("error") || message.includes("wrong") ? "text-red-500" : "text-ydi-royal-green"}`}
                  >
                    {message}
                  </p>
                )}

                <p className="text-center text-gray-400 font-label text-[10px] uppercase mt-6 tracking-widest opacity-80">
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
