import { motion } from "framer-motion";
import { Link } from "wouter";
import AboutSection from "@/components/sections/AboutSection";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/AnimatedSection";

const milestones = [
  { year: "2012", event: "Cafe America opens its doors in Tustin, CA, roasting single-origin Ethiopian coffees." },
  { year: "2015", event: "Expansion of our farm-to-table lunch kitchen, partnering with California organic farms." },
  { year: "2019", event: "Awarded 'Best Specialty Coffee & Kitchen Space' by Orange County Culinary Guild." },
  { year: "2023", event: "Upgraded our roasting lab and serving 12,000+ guest reviews, continuing to roast locally." },
];

export default function About() {
  return (
    <div className="flex flex-col w-full bg-[#FDFAF7] min-h-screen">
      
      {/* Header Banner */}
      <div className="bg-[#3C2415] py-20 text-center text-white overflow-hidden relative">
        <div className="absolute inset-0 bg-black/10 pointer-events-none" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-xs font-bold uppercase tracking-[0.25em] text-[#C17849] mb-3 block"
          >
            OUR HERITAGE
          </motion.span>
          <motion.h1
            className="text-4xl md:text-6xl font-serif font-black uppercase tracking-tight mb-4 text-[#FDFAF7]"
            initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            Our Story
          </motion.h1>
          <motion.p
            className="text-[#FDFAF7]/80 max-w-xl mx-auto text-sm md:text-base font-light tracking-wide leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            Honoring the tradition of craft roasting and slow-cooked kitchen dishes.
          </motion.p>
        </div>
      </div>

      {/* Main Narrative & Team section */}
      <AboutSection />

      {/* Timeline Section */}
      <section className="bg-white py-20 md:py-28 border-b border-[#E8DDD5]">
        <div className="container mx-auto px-4 max-w-3xl">
          <AnimatedSection className="text-center mb-16">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#C17849]">
              Our Journey
            </span>
            <h2 className="text-2xl md:text-4xl font-serif font-black uppercase text-[#3C2415] tracking-tight mt-2">
              Key Milestones
            </h2>
            <div className="w-12 h-0.5 bg-[#C17849] mx-auto mt-4" />
          </AnimatedSection>
          
          <StaggerContainer className="relative" staggerDelay={0.15}>
            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-[#C17849]/20" />
            {milestones.map((m, i) => (
              <StaggerItem key={m.year}>
                <div className={`flex items-start gap-6 mb-12 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} flex-row`}>
                  <div className="relative flex-1 md:text-right pl-14 md:pl-0">
                    <span className="absolute left-0 md:static w-12 h-12 bg-[#3C2415] text-[#C17849] font-black text-sm flex items-center justify-center shrink-0 border border-[#C17849]/25 rounded-xl">
                      {m.year}
                    </span>
                    <p className="text-[#6B5B4E] font-light text-sm md:text-base leading-relaxed mt-2 md:mt-4">{m.event}</p>
                  </div>
                  <div className="hidden md:flex w-px bg-transparent flex-1" />
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Trust Panels */}
      <section className="grid grid-cols-1 md:grid-cols-2">
        <AnimatedSection direction="left" className="bg-[#3C2415] text-white px-8 md:px-16 py-20 flex flex-col justify-center">
          <span className="text-xs font-bold uppercase tracking-wider text-[#C17849] mb-3">SOURCING INTEGRITY</span>
          <h3 className="text-xl md:text-2xl font-serif font-black uppercase tracking-wide mb-4 text-[#FDFAF7]">Local & Organic Farms</h3>
          <p className="text-[#FDFAF7]/70 text-sm font-light leading-relaxed mb-6">
            All kitchen ingredients—from pasture-raised poultry to seasonal organic heirloom greens—are sourced directly from organic, family-owned California farms.
          </p>
          <div className="flex">
            <span className="px-5 py-2.5 border border-[#C17849] text-[#C17849] font-bold text-xs tracking-widest uppercase rounded-full">
              100% ORGANIC & LOCAL
            </span>
          </div>
        </AnimatedSection>
        
        <AnimatedSection direction="right" className="bg-[#3C2415] text-white px-8 md:px-16 py-20 flex flex-col justify-center border-t md:border-t-0 md:border-l border-[#C17849]/15">
          <span className="text-xs font-bold uppercase tracking-wider text-[#C17849] mb-3">EXPERIENCE DIRECT TRADE</span>
          <h3 className="text-xl md:text-2xl font-serif font-black uppercase tracking-wide mb-4 text-[#FDFAF7]">Direct Roasting Lab</h3>
          <p className="text-[#FDFAF7]/70 text-sm font-light leading-relaxed mb-6">
            We purchase green coffee directly from grower cooperatives at premium prices, custom roasting in small batches inside our Tustin headquarters.
          </p>
          <Link href="/experiences">
            <div className="flex">
              <span className="px-5 py-2.5 bg-[#C17849] hover:bg-[#A0622D] text-white font-bold text-xs tracking-widest uppercase transition-bounce hover:-translate-y-0.5 rounded-full cursor-pointer">
                OUR LAB EXPERIENCES →
              </span>
            </div>
          </Link>
        </AnimatedSection>
      </section>

    </div>
  );
}
