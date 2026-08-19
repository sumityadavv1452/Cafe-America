import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AnimatedSection } from "@/components/AnimatedSection";

export default function NewsletterSignup() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setLoading(true);
    // Simulate API newsletter signup
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
      setEmail("");
    }, 1200);
  };

  return (
    <section className="bg-background-dark text-[#F5F0EB] py-24 border-b border-white/5 overflow-hidden">
      <div className="container mx-auto px-4 md:px-8 max-w-2xl text-center">
        
        {/* Section Header */}
        <AnimatedSection direction="up" className="flex flex-col items-center">
          <span className="font-accent text-[#C17849] text-xl font-medium tracking-wide">
            Stay in the Loop
          </span>
          <h2 className="text-3xl md:text-5xl font-serif font-black uppercase text-[#F5F0EB] tracking-tight mt-2 mb-4">
            Join the Club
          </h2>
          <div className="w-16 h-1 bg-[#C17849] mb-6" />
          <p className="text-[#A08E81] text-sm md:text-base font-sans font-light leading-relaxed max-w-lg mb-8">
            Subscribe to receive exclusive event invites, secret recipes, and local community updates straight to your inbox.
          </p>
        </AnimatedSection>

        {/* Signup form with transition */}
        <AnimatedSection direction="up" delay={0.1} className="w-full max-w-md mx-auto">
          <AnimatePresence mode="wait">
            {!success ? (
              <motion.form
                key="form"
                onSubmit={handleSubmit}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="flex flex-col sm:flex-row items-center gap-3 w-full"
              >
                <input
                  type="email"
                  required
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full h-12 px-6 rounded-full border border-white/20 bg-transparent text-[#F5F0EB] placeholder-[#A08E81]/60 outline-none focus:border-[#C17849] transition-all duration-200 text-sm font-sans"
                  disabled={loading}
                />
                
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full sm:w-auto h-12 px-8 bg-[#C17849] hover:bg-[#A0622D] text-white font-sans font-semibold text-xs tracking-wider uppercase rounded-full transition-bounce hover:-translate-y-0.5 hover:shadow-hover flex items-center justify-center whitespace-nowrap cursor-pointer disabled:opacity-50"
                >
                  {loading ? (
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  ) : (
                    "Subscribe Now"
                  )}
                </button>
              </motion.form>
            ) : (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                className="bg-[#26170E] border border-[#C17849]/30 p-6 rounded-2xl text-center flex flex-col items-center gap-2 max-w-sm mx-auto"
              >
                <div className="w-10 h-10 bg-[#7D8B69]/10 rounded-full flex items-center justify-center text-[#7D8B69] mb-1">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <h4 className="font-serif font-bold text-[#F5F0EB] text-base uppercase tracking-wide">
                  Welcome to the Inner Circle!
                </h4>
                <p className="text-[#A08E81] text-xs font-light leading-relaxed">
                  Please check your inbox shortly to confirm your subscription. We look forward to sharing our updates with you.
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </AnimatedSection>

        {/* Privacy statement */}
        <AnimatedSection direction="up" delay={0.15}>
          <p className="text-[#A08E81] text-[11px] font-sans font-light tracking-wide mt-6">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </AnimatedSection>

      </div>
    </section>
  );
}
