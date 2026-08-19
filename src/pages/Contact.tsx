import { motion } from "framer-motion";
import LocationSection from "@/components/sections/LocationSection";

export default function Contact() {
  return (
    <div className="flex flex-col w-full bg-cream min-h-screen">
      
      {/* Header Banner */}
      <div className="bg-primary py-20 text-center text-white overflow-hidden relative">
        <div className="absolute inset-0 bg-black/10 pointer-events-none" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-xs font-bold uppercase tracking-[0.25em] text-accent mb-3 block"
          >
            GET IN TOUCH
          </motion.span>
          <motion.h1
            className="text-4xl md:text-6xl font-serif font-black uppercase tracking-tight mb-4"
            initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            Contact Us
          </motion.h1>
          <motion.p
            className="text-gray-300 max-w-xl mx-auto text-sm md:text-base font-light tracking-wide leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            Have a question, feedback, or catering request? We'd love to hear from you.
          </motion.p>
        </div>
      </div>

      {/* Reusable Verified Location and Contact Form Grid */}
      <LocationSection />

    </div>
  );
}
