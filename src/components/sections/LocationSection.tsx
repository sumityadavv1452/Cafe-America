import { useState } from "react";
import { Phone, Calendar, Clock, Users, User, Mail, MapPin } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { AnimatedSection } from "@/components/AnimatedSection";

export default function LocationSection() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    guests: "2",
    date: "",
    time: "18:00",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate booking API request
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
      setForm({
        name: "",
        email: "",
        phone: "",
        guests: "2",
        date: "",
        time: "18:00",
      });
      setTimeout(() => setSuccess(false), 5000);
    }, 1200);
  };

  return (
    <section className="bg-[#F5F0EB] text-primary py-24 md:py-32 border-b border-border">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start max-w-6xl mx-auto">
          
          {/* Column 1 (Left): Reservation info & Details */}
          <div className="flex flex-col gap-8">
            <AnimatedSection direction="left" className="flex flex-col gap-4">
              <span className="font-accent text-[#C17849] text-xl font-medium tracking-wide">
                Book a Table
              </span>
              <h2 className="text-3xl md:text-5xl font-serif font-black uppercase text-[#3C2415] tracking-tight leading-[1.15]">
                Experience Shared Hospitality
              </h2>
              <div className="w-16 h-1 bg-[#C17849]" />
              <p className="text-[#6B5B4E] font-sans font-light leading-relaxed text-sm md:text-base mt-2">
                Whether it's a weekend brunch with friends, a weekday business lunch, or a special evening gathering, we hold tables to make your experience memorable.
              </p>
            </AnimatedSection>

            {/* Direct Call Trigger */}
            <AnimatedSection direction="left" delay={0.1}>
              <div className="bg-[#FDFAF7]/80 border border-[#E8DDD5] p-6 rounded-2xl flex items-center gap-4">
                <div className="w-12 h-12 bg-[#C17849]/10 rounded-full flex items-center justify-center text-[#C17849] flex-shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs uppercase tracking-wider text-[#A0622D] font-bold block">
                    Direct Booking Line
                  </span>
                  <a
                    href="tel:7145446961"
                    className="font-serif font-bold text-lg md:text-xl text-[#3C2415] hover:text-[#C17849] transition-colors underline decoration-[#C17849]"
                  >
                    Call to Reserve: (714) 544-6961
                  </a>
                </div>
              </div>
            </AnimatedSection>

            {/* Address & Hours List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-2">
              <AnimatedSection direction="left" delay={0.15} className="flex gap-4">
                <MapPin className="w-5 h-5 text-[#C17849] flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-serif font-bold text-sm uppercase text-[#3C2415] tracking-wider mb-2">Our Address</h4>
                  <p className="text-[#6B5B4E] text-sm leading-relaxed font-light font-sans">
                    12932 Newport Ave<br />
                    Tustin, CA 92780
                  </p>
                </div>
              </AnimatedSection>

              <AnimatedSection direction="left" delay={0.2} className="flex gap-4">
                <Clock className="w-5 h-5 text-[#C17849] flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-serif font-bold text-sm uppercase text-[#3C2415] tracking-wider mb-2">Hours of Operation</h4>
                  <p className="text-[#6B5B4E] text-sm leading-relaxed font-light font-sans">
                    Mon – Thu: 11 AM – 1 AM<br />
                    Fri – Sat: Open Late till 2 AM
                  </p>
                </div>
              </AnimatedSection>
            </div>
          </div>

          {/* Column 2 (Right): Inline Reservation booking form */}
          <AnimatedSection direction="right" className="w-full">
            <div className="bg-white/90 backdrop-blur-md border border-[#E8DDD5] p-8 md:p-10 rounded-2xl shadow-soft relative overflow-hidden">
              <h3 className="font-serif font-bold text-xl md:text-2xl text-[#3C2415] uppercase tracking-wide mb-6">
                Online Reservation Request
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                
                {/* Full Name */}
                <div className="space-y-2">
                  <label htmlFor="res-name" className="text-xs font-bold uppercase tracking-wider text-[#3C2415] flex items-center gap-1.5">
                    <User className="w-3.5 h-3.5 text-[#C17849]" /> Full Name <span className="text-[#C17849]">*</span>
                  </label>
                  <input
                    id="res-name"
                    type="text"
                    required
                    placeholder="E.g., Sophia Martinez"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full h-12 px-4 rounded-xl border border-[#E8DDD5] bg-white outline-none focus:border-[#C17849] transition-all duration-200"
                  />
                </div>

                {/* Email & Phone grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="res-email" className="text-xs font-bold uppercase tracking-wider text-[#3C2415] flex items-center gap-1.5">
                      <Mail className="w-3.5 h-3.5 text-[#C17849]" /> Email <span className="text-[#C17849]">*</span>
                    </label>
                    <input
                      id="res-email"
                      type="email"
                      required
                      placeholder="sophia@example.com"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full h-12 px-4 rounded-xl border border-[#E8DDD5] bg-white outline-none focus:border-[#C17849] transition-all duration-200"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="res-phone" className="text-xs font-bold uppercase tracking-wider text-[#3C2415] flex items-center gap-1.5">
                      <Phone className="w-3.5 h-3.5 text-[#C17849]" /> Phone Number <span className="text-[#C17849]">*</span>
                    </label>
                    <input
                      id="res-phone"
                      type="tel"
                      required
                      placeholder="(714) 555-0199"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className="w-full h-12 px-4 rounded-xl border border-[#E8DDD5] bg-white outline-none focus:border-[#C17849] transition-all duration-200"
                    />
                  </div>
                </div>

                {/* Guests, Date & Time Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  
                  {/* Guests Dropdown */}
                  <div className="space-y-2">
                    <label htmlFor="res-guests" className="text-xs font-bold uppercase tracking-wider text-[#3C2415] flex items-center gap-1.5">
                      <Users className="w-3.5 h-3.5 text-[#C17849]" /> Guests
                    </label>
                    <div className="relative">
                      <select
                        id="res-guests"
                        value={form.guests}
                        onChange={(e) => setForm({ ...form, guests: e.target.value })}
                        className="w-full h-12 pl-4 pr-10 rounded-xl border border-[#E8DDD5] bg-white outline-none focus:border-[#C17849] appearance-none font-sans text-sm cursor-pointer"
                      >
                        <option value="1">1 Guest</option>
                        <option value="2">2 Guests</option>
                        <option value="3">3 Guests</option>
                        <option value="4">4 Guests</option>
                        <option value="5">5 Guests</option>
                        <option value="6">6+ Guests</option>
                      </select>
                      <div className="absolute right-3.5 top-4 pointer-events-none text-[#6B5B4E]">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                          <polyline points="6 9 12 15 18 9"></polyline>
                        </svg>
                      </div>
                    </div>
                  </div>

                  {/* Date Input */}
                  <div className="space-y-2">
                    <label htmlFor="res-date" className="text-xs font-bold uppercase tracking-wider text-[#3C2415] flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-[#C17849]" /> Date <span className="text-[#C17849]">*</span>
                    </label>
                    <input
                      id="res-date"
                      type="date"
                      required
                      value={form.date}
                      onChange={(e) => setForm({ ...form, date: e.target.value })}
                      className="w-full h-12 px-4 rounded-xl border border-[#E8DDD5] bg-white outline-none focus:border-[#C17849] font-sans text-sm cursor-pointer"
                    />
                  </div>

                  {/* Time Input */}
                  <div className="space-y-2">
                    <label htmlFor="res-time" className="text-xs font-bold uppercase tracking-wider text-[#3C2415] flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-[#C17849]" /> Time <span className="text-[#C17849]">*</span>
                    </label>
                    <input
                      id="res-time"
                      type="time"
                      required
                      value={form.time}
                      onChange={(e) => setForm({ ...form, time: e.target.value })}
                      className="w-full h-12 px-4 rounded-xl border border-[#E8DDD5] bg-white outline-none focus:border-[#C17849] font-sans text-sm cursor-pointer"
                    />
                  </div>

                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full h-12 bg-[#C17849] hover:bg-[#A0622D] text-white font-sans font-semibold text-sm tracking-wider uppercase rounded-full transition-bounce hover:-translate-y-0.5 hover:shadow-hover flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                >
                  {loading ? (
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  ) : (
                    "Request Reservation"
                  )}
                </button>

              </form>

              {/* Success Overlay Trigger */}
              <AnimatePresence>
                {success && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 bg-[#FDFAF7] z-20 flex flex-col items-center justify-center text-center p-8"
                  >
                    <div className="w-16 h-16 bg-[#7D8B69]/10 rounded-full flex items-center justify-center text-[#7D8B69] mb-6">
                      <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </div>
                    <h4 className="font-serif font-bold text-2xl text-[#3C2415] uppercase tracking-wide mb-3">
                      Request Received!
                    </h4>
                    <p className="text-[#6B5B4E] text-sm font-light leading-relaxed max-w-sm">
                      Your reservation request has been successfully submitted. We will review availability and contact you shortly to confirm.
                    </p>
                    <button
                      onClick={() => setSuccess(false)}
                      className="mt-8 px-6 py-2.5 bg-[#C17849] hover:bg-[#A0622D] text-white text-xs font-bold tracking-widest uppercase rounded-full transition-colors cursor-pointer"
                    >
                      Done
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </AnimatedSection>

        </div>
      </div>
    </section>
  );
}
