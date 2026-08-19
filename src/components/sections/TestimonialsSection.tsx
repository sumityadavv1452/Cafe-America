import { useState } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { AnimatedSection } from "@/components/AnimatedSection";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  quote: string;
  rating: number;
  image: string;
}

const testimonialsData: Testimonial[] = [
  {
    id: 1,
    name: "Sophia Martinez",
    role: "Local Food Critic",
    quote: "The cardamom latte is a revelation. I come here every morning to work, and the cozy atmosphere and master baristas make it the best spot in town.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&q=80"
  },
  {
    id: 2,
    name: "David Vance",
    role: "Community Organizer",
    quote: "Cafe America hosted our private brunch, and it was perfect. The shakshuka is packed with flavor, and the service was warm and attentive.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80"
  },
  {
    id: 3,
    name: "Elena Rostova",
    role: "Coffee Connoisseur",
    quote: "Absolute gem! The direct-trade coffee quality is unmatched. You can taste the care they put into roasting in every single cup.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80"
  }
];

export default function TestimonialsSection() {
  const [mobileIndex, setMobileIndex] = useState(0);

  const handleNext = () => {
    setMobileIndex((prev) => (prev + 1) % testimonialsData.length);
  };

  const handlePrev = () => {
    setMobileIndex((prev) => (prev - 1 + testimonialsData.length) % testimonialsData.length);
  };

  return (
    <section className="bg-secondary text-primary py-24 md:py-32 border-b border-[#E8DDD5] overflow-hidden">
      <div className="container mx-auto px-4 md:px-8">
        
        {/* Section Header */}
        <AnimatedSection direction="up" className="text-center max-w-2xl mx-auto mb-16">
          <span className="font-accent text-[#C17849] text-xl font-medium tracking-wide">
            Testimonials
          </span>
          <h2 className="text-3xl md:text-5xl font-serif font-black uppercase text-[#3C2415] tracking-tight mt-2 mb-4">
            Loved by the Locals
          </h2>
          <div className="w-16 h-1 bg-[#C17849] mx-auto mb-6" />
          
          {/* Trust Signal Row */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 text-sm text-[#6B5B4E] font-medium mt-4">
            <div className="flex text-[#C17849]">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-[#C17849] stroke-[#C17849]" />
              ))}
            </div>
            <span>Google Rating <strong className="text-[#3C2415]">4.9/5 stars</strong> based on 847 reviews</span>
          </div>
        </AnimatedSection>

        {/* Desktop View: 3 cards side-by-side */}
        <div className="hidden lg:grid grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonialsData.map((test, index) => (
            <AnimatedSection
              key={test.id}
              direction="up"
              delay={index * 0.15}
              className="bg-white/80 border border-[#E8DDD5] p-10 flex flex-col justify-between rounded-2xl shadow-soft relative overflow-hidden group hover:border-[#C17849]/40 hover:-translate-y-1 transition-all duration-300 h-full"
            >
              {/* Large Floating Quotation Mark */}
              <span className="absolute right-8 top-4 font-serif text-[120px] leading-none text-[#C17849]/10 select-none pointer-events-none group-hover:text-[#C17849]/15 transition-colors duration-300">
                “
              </span>

              <div className="relative z-10 flex flex-col flex-grow">
                {/* Individual Rating Stars */}
                <div className="flex gap-1 mb-6 text-[#C17849]">
                  {[...Array(test.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#C17849] stroke-[#C17849]" />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-[#6B5B4E] text-base font-light italic leading-relaxed mb-8 flex-grow">
                  "{test.quote}"
                </p>
              </div>

              {/* Author Profile */}
              <div className="flex items-center gap-4 pt-6 border-t border-[#E8DDD5]/60 mt-4 relative z-10">
                <img
                  src={test.image}
                  alt={test.name}
                  className="w-12 h-12 rounded-full object-cover border border-[#E8DDD5] flex-shrink-0"
                />
                <div>
                  <h4 className="font-serif font-bold text-[#3C2415] text-sm tracking-wide">
                    {test.name}
                  </h4>
                  <span className="text-[11px] font-medium uppercase tracking-wider text-[#A0622D]">
                    {test.role}
                  </span>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Mobile View: Swipable Slider with Touch Support */}
        <div className="lg:hidden max-w-md mx-auto relative px-2">
          <AnimatePresence mode="wait">
            <motion.div
              key={mobileIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.35, ease: "easeInOut" }}
              className="bg-white/80 border border-[#E8DDD5] p-8 flex flex-col justify-between rounded-2xl shadow-soft relative overflow-hidden h-[340px]"
            >
              {/* Large Floating Quotation Mark */}
              <span className="absolute right-6 top-4 font-serif text-[100px] leading-none text-[#C17849]/10 select-none pointer-events-none">
                “
              </span>

              <div className="flex flex-col flex-grow">
                {/* Individual Rating Stars */}
                <div className="flex gap-1 mb-5 text-[#C17849]">
                  {[...Array(testimonialsData[mobileIndex].rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#C17849] stroke-[#C17849]" />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-[#6B5B4E] text-sm font-light italic leading-relaxed mb-6 flex-grow overflow-y-auto pr-2">
                  "{testimonialsData[mobileIndex].quote}"
                </p>
              </div>

              {/* Author Profile */}
              <div className="flex items-center gap-4 pt-4 border-t border-[#E8DDD5]/60 mt-2">
                <img
                  src={testimonialsData[mobileIndex].image}
                  alt={testimonialsData[mobileIndex].name}
                  className="w-10 h-10 rounded-full object-cover border border-[#E8DDD5] flex-shrink-0"
                />
                <div>
                  <h4 className="font-serif font-bold text-[#3C2415] text-sm tracking-wide">
                    {testimonialsData[mobileIndex].name}
                  </h4>
                  <span className="text-[10px] font-medium uppercase tracking-wider text-[#A0622D]">
                    {testimonialsData[mobileIndex].role}
                  </span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Slider Pagination Controls */}
          <div className="flex items-center justify-between mt-6 px-4">
            <button
              onClick={handlePrev}
              className="w-9 h-9 border border-[#E8DDD5] rounded-full hover:border-[#C17849] hover:text-[#C17849] flex items-center justify-center transition-colors cursor-pointer text-[#3C2415]"
              aria-label="Previous Testimonial"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            {/* Dots */}
            <div className="flex gap-2">
              {testimonialsData.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setMobileIndex(i)}
                  className={`h-1.5 transition-all duration-300 rounded-full cursor-pointer ${
                    mobileIndex === i ? "w-6 bg-[#C17849]" : "w-1.5 bg-[#E8DDD5] hover:bg-[#C17849]/50"
                  }`}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={handleNext}
              className="w-9 h-9 border border-[#E8DDD5] rounded-full hover:border-[#C17849] hover:text-[#C17849] flex items-center justify-center transition-colors cursor-pointer text-[#3C2415]"
              aria-label="Next Testimonial"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
