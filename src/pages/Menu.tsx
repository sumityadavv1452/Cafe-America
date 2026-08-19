import { motion } from "framer-motion";
import MenuSection from "@/components/sections/MenuSection";

export default function Menu() {
  return (
    <div className="flex flex-col w-full bg-cream min-h-screen">
      
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
            ARTISAN COFFEE & KITCHEN
          </motion.span>
          <motion.h1
            className="text-4xl md:text-6xl font-serif font-black uppercase tracking-tight mb-4 text-[#FDFAF7]"
            initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            Our Menu Choices
          </motion.h1>
          <motion.p
            className="text-[#FDFAF7]/80 max-w-xl mx-auto text-sm md:text-base font-light tracking-wide leading-relaxed"
            initial={{ opacity: 0, y: 20, filter: "blur(6px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            Every single bean is micro-lot roasted and every dish is prepared to order using local organic ingredients.
          </motion.p>
        </div>
      </div>

      {/* Main filterable menu grid */}
      <MenuSection />

    </div>
  );
}
