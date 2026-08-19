import { Link } from "wouter";
import { motion } from "framer-motion";
import { Sparkles, Calendar, Coffee } from "lucide-react";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/AnimatedSection";
import ResponsiveImage from "@/components/ResponsiveImage";

const hookahFlavors = [
  "Double Apple", "Mint", "Watermelon", "Blue Mist",
  "Peach Ice", "Grape Mint", "Lemon Mint", "Blueberry",
  "Orange Cream", "Pineapple", "Rose", "Coconut",
];

const packages = [
  {
    name: "Classic Session",
    price: "Starting at $25",
    desc: "A timeless setup using premium clay bowls, classic heat management, and single core flavors.",
    features: ["Choice of premium flavor", "Standard washable hose", "Full session duration", "Regular coal servicing"],
  },
  {
    name: "Ice Experience",
    price: "Starting at $30",
    desc: "An elevated session utilizing our signature ice-chill hose extensions for a cooler, smoother draw.",
    features: ["Choice of premium flavor", "Ice-chilled hose (Included)", "Smoother draw profiles", "Full session duration"],
    highlight: true,
  },
  {
    name: "Fruit Head Special",
    price: "Starting at $35",
    desc: "For the true connoisseur. Savor your tobacco packed inside a fresh citrus fruit bowl head.",
    features: ["Choice of premium flavor", "Fresh orange/pineapple head", "Enhanced natural aroma", "Extended session burn time"],
  },
];

export default function Experiences() {
  return (
    <div className="flex flex-col w-full bg-[#FDFAF7] min-h-screen">
      
      {/* Hero Banner Section */}
      <section className="relative overflow-hidden min-h-[50vh] flex items-center justify-center bg-[#1A0F08]">
        <div className="absolute inset-0 w-full h-full scale-102 pointer-events-none">
          <ResponsiveImage
            baseName="hookah-lounge"
            alt="Premium Hookah Lounge Atmosphere at Cafe America"
            className="w-full h-full object-cover"
            priority={true}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#3C2415] via-[#3C2415]/70 to-[#1A0F08]/90" />
        </div>
        
        <div className="relative z-10 flex flex-col items-center justify-center text-center px-6 max-w-2xl mx-auto text-[#FDFAF7]">
          <motion.span
            className="text-[#C17849] text-xs font-bold uppercase tracking-[0.25em] mb-3 block"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            THE SUNSET RETREAT
          </motion.span>
          <motion.h1
            className="text-4xl md:text-6xl font-serif font-black uppercase tracking-tight mb-4 text-[#FDFAF7]"
            initial={{ opacity: 0, y: 24, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            Hookah & Lounge
          </motion.h1>
          <motion.p
            className="text-[#FDFAF7]/80 text-sm md:text-base font-light tracking-wide leading-relaxed"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.55 }}
          >
            Relax, unwind, and converse in our comfortable lounge space. Hand-selected premium shisha blends, custom ice setups, and organic kitchen plates.
          </motion.p>
        </div>
      </section>

      {/* Hookah Packages */}
      <section className="py-24 md:py-32 border-b border-[#E8DDD5] bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <AnimatedSection className="text-center max-w-xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#C17849]">
              Choose Your Setup
            </span>
            <h2 className="text-3xl md:text-5xl font-serif font-black uppercase text-[#3C2415] tracking-tight mt-2">
              Lounge Packages
            </h2>
            <div className="w-12 h-0.5 bg-[#C17849] mx-auto mt-4" />
          </AnimatedSection>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto" staggerDelay={0.12}>
            {packages.map((pkg) => (
              <StaggerItem key={pkg.name}>
                <motion.div
                  className={`p-8 h-full flex flex-col justify-between border rounded-2xl transition-all duration-300 ${
                    pkg.highlight
                      ? "bg-[#3C2415] text-[#FDFAF7] border-[#C17849]/40 shadow-xl"
                      : "bg-[#FDFAF7] text-[#2D2926] border-[#E8DDD5] shadow-soft"
                  }`}
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.3 }}
                >
                  <div>
                    {pkg.highlight && (
                      <span className="inline-flex bg-[#C17849] text-white text-[9px] font-bold tracking-widest uppercase px-3 py-1 rounded-full mb-4 items-center gap-1">
                        <Sparkles className="w-2.5 h-2.5" />
                        RECOMMENDED SETUP
                      </span>
                    )}
                    <h3 className="font-serif font-bold text-xl uppercase tracking-wide mb-1">
                      {pkg.name}
                    </h3>
                    <span className="text-[#C17849] font-sans font-bold text-lg block mb-4">
                      {pkg.price}
                    </span>
                    <p className={`text-xs font-light leading-relaxed mb-6 ${pkg.highlight ? "text-[#FDFAF7]/75" : "text-[#6B5B4E]"}`}>
                      {pkg.desc}
                    </p>
                    <ul className="space-y-3 flex-1 mb-8">
                      {pkg.features.map((f) => (
                        <li key={f} className="text-xs flex items-center gap-2.5 font-light">
                          <span className="w-1.5 h-1.5 bg-[#C17849] rounded-full flex-shrink-0" />
                          <span>{f}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <a
                    href="tel:7145446961"
                    className={`block text-center py-3.5 font-sans font-semibold text-xs tracking-widest uppercase rounded-full transition-colors ${
                      pkg.highlight
                        ? "bg-[#C17849] text-white hover:bg-[#A0622D]"
                        : "border border-[#C17849] text-[#C17849] hover:bg-[#C17849] hover:text-white"
                    }`}
                  >
                    RESERVE NOW
                  </a>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Flavor List */}
      <section className="py-24 bg-[#FDFAF7] border-b border-[#E8DDD5]">
        <div className="container mx-auto px-4 max-w-4xl">
          <AnimatedSection className="text-center mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#C17849]">
              Premium Blends
            </span>
            <h2 className="text-2xl md:text-4xl font-serif font-black uppercase text-[#3C2415] mt-2">
              Popular Flavors
            </h2>
            <div className="w-12 h-0.5 bg-[#C17849] mx-auto mt-4" />
          </AnimatedSection>
          
          <StaggerContainer className="flex flex-wrap justify-center gap-3" staggerDelay={0.04}>
            {hookahFlavors.map((flavor) => (
              <StaggerItem key={flavor}>
                <motion.span
                  className="px-5 py-2.5 border border-[#E8DDD5] bg-white text-[#2D2926] font-bold text-xs uppercase tracking-wide cursor-default hover:border-[#C17849] hover:text-[#C17849] transition-colors duration-250 block rounded-full"
                >
                  {flavor}
                </motion.span>
              </StaggerItem>
            ))}
          </StaggerContainer>
          
          <AnimatedSection className="text-center mt-10 text-[#6B5B4E] text-xs font-light">
            ✦ Ask your server for custom mix recommendations and double-apple specials.
          </AnimatedSection>
        </div>
      </section>

      {/* Bottom CTA */}
      <AnimatedSection direction="none">
        <section className="bg-[#3C2415] text-[#FDFAF7] py-20 text-center px-6 relative overflow-hidden">
          {/* Subtle design element */}
          <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none flex items-center justify-center">
            <Coffee className="w-96 h-96" />
          </div>

          <div className="relative z-10 max-w-xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-serif font-black uppercase tracking-tight mb-3 text-[#FDFAF7]">
              Unwind With Us
            </h2>
            <p className="text-[#FDFAF7]/70 text-sm font-light mb-8 leading-relaxed">
              Lounge space fills up quickly on Friday and Saturday nights. Call ahead to guarantee your seating or host a private evening.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="tel:7145446961"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#C17849] hover:bg-[#A0622D] text-white font-sans font-bold text-xs tracking-widest uppercase transition-bounce hover:-translate-y-0.5 rounded-full"
              >
                <Calendar className="w-4 h-4" />
                CALL 714-544-6961
              </a>
              <Link href="/menu" className="w-full sm:w-auto">
                <span className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 border border-[#FDFAF7]/40 hover:bg-[#FDFAF7] hover:text-[#3C2415] text-[#FDFAF7] font-sans font-bold text-xs tracking-widest uppercase transition-all duration-300 cursor-pointer rounded-full">
                  EXPLORE MENU
                </span>
              </Link>
            </div>
          </div>
        </section>
      </AnimatedSection>

    </div>
  );
}
