import { useRef } from "react";
import { Link } from "wouter";
import { ArrowRight, Star } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);

  // Parallax scroll effects
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 800], [0, 260]);
  const opacity = useTransform(scrollY, [0, 800], [1, 0]);

  // Split headline text arrays for staggered word entrance
  const line1Words = "Where Every Cup".split(" ");
  const line2Words = "Tells a Story".split(" ");

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const wordVariants = {
    hidden: { opacity: 0, y: 35 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.9,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  const itemFadeUp = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.9,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <section
      ref={heroRef}
      className="relative h-[100dvh] w-full flex items-end justify-center overflow-hidden bg-[#1A0F08]"
    >
      {/* Background Cinematic Visual with Ken Burns Zoom & Parallax */}
      <motion.div
        style={{ y, opacity }}
        className="absolute inset-0 w-full h-full pointer-events-none z-0"
      >
        <img
          src="https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=1920&q=80"
          alt="Artisanal Cafe Interior Layout"
          className="w-full h-full object-cover ken-burns-bg"
          loading="eager"
        />
        {/* Dark Warm Contrast Vignette */}
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(180deg, rgba(26,15,8,0.3) 0%, rgba(26,15,8,0.85) 100%)",
          }}
        />
      </motion.div>

      {/* Content Canvas */}
      <div className="container mx-auto px-4 md:px-8 relative z-10 text-center text-[#FDFAF7] pb-24 md:pb-28 max-w-4xl">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center gap-6"
        >
          {/* Section Indicator Badge */}
          <motion.div
            variants={itemFadeUp}
            className="flex items-center gap-3.5"
          >
            <span className="text-[#C17849] text-xs">◆</span>
            <span className="font-accent text-[#C17849] text-xl font-medium tracking-wide">
              Est. 2012 · Premium Coffeehouse
            </span>
            <span className="text-[#C17849] text-xs">◆</span>
          </motion.div>

          {/* Staggered Main Title Header */}
          <h1 className="flex flex-col items-center justify-center text-center mt-1 leading-[1.1] tracking-tight">
            {/* Line 1 */}
            <span className="flex flex-wrap justify-center gap-x-3 text-4xl sm:text-5xl md:text-7xl font-serif font-black uppercase text-[#FDFAF7]">
              {line1Words.map((word, i) => (
                <motion.span
                  key={`l1-${i}`}
                  variants={wordVariants}
                  className="inline-block"
                >
                  {word}
                </motion.span>
              ))}
            </span>
            
            {/* Line 2 */}
            <span className="flex flex-wrap justify-center gap-x-3 text-4xl sm:text-5xl md:text-7xl font-serif font-medium italic text-[#C17849] mt-2">
              {line2Words.map((word, i) => (
                <motion.span
                  key={`l2-${i}`}
                  variants={wordVariants}
                  className="inline-block"
                >
                  {word}
                </motion.span>
              ))}
            </span>
          </h1>

          {/* Subtext */}
          <motion.p
            variants={itemFadeUp}
            className="text-[#FDFAF7]/80 text-sm sm:text-base md:text-lg max-w-xl leading-relaxed font-light font-sans tracking-wide mt-2"
          >
            Savor craft roasted coffee, fresh daily bakeries, and organic culinary items in a beautifully relaxed atmosphere.
          </motion.p>

          {/* Actions Button Row */}
          <motion.div
            variants={itemFadeUp}
            className="flex flex-col sm:flex-row items-center gap-4 mt-3 w-full sm:w-auto"
          >
            <Link href="/menu" className="w-full sm:w-auto">
              <button className="group w-full sm:w-auto px-10 py-4 bg-[#C17849] hover:bg-[#A0622D] text-white font-sans font-semibold text-xs tracking-wider uppercase rounded-full transition-bounce hover:-translate-y-0.5 hover:shadow-hover flex items-center justify-center gap-2 cursor-pointer">
                Explore Menu
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
            </Link>
            <Link href="/order" className="w-full sm:w-auto">
              <button className="w-full sm:w-auto px-10 py-4 border border-[#FDFAF7]/40 hover:border-[#FDFAF7] hover:bg-[#FDFAF7] hover:text-[#3C2415] text-[#FDFAF7] font-sans font-semibold text-xs tracking-wider uppercase rounded-full transition-all duration-350 hover:-translate-y-0.5 cursor-pointer">
                Book a Table
              </button>
            </Link>
          </motion.div>

          {/* Trust Signals Bar */}
          <motion.div
            variants={itemFadeUp}
            className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-0 divide-y sm:divide-y-0 sm:divide-white/10 pt-10 mt-6 w-full text-xs text-[#FDFAF7]/60 font-light"
          >
            {/* Google Rating */}
            <div className="flex items-center justify-center gap-2 pb-3 sm:pb-0 sm:border-r sm:border-white/10">
              <div className="flex text-[#C17849]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-[#C17849] stroke-[#C17849]" />
                ))}
              </div>
              <span className="font-sans">4.9/5 Google Rating</span>
            </div>

            {/* Sourcing */}
            <div className="flex items-center justify-center gap-2 py-3 sm:py-0 sm:border-r sm:border-white/10">
              <span className="font-sans">☕ Locally Roasted Artisan Beans</span>
            </div>

            {/* Recognition */}
            <div className="flex items-center justify-center gap-2 pt-3 sm:pt-0">
              <span className="font-sans">🏆 Voted Best Cafe in Orange County</span>
            </div>
          </motion.div>

        </motion.div>
      </div>

      {/* Interactive scroll down indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 scroll-indicator-bounce">
        <div className="w-6 h-10 border border-[#FDFAF7]/30 rounded-full flex justify-center p-1.5 opacity-60">
          <div className="w-1.5 h-2 bg-[#FDFAF7] rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
}
