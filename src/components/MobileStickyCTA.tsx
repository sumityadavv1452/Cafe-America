import { useEffect, useState } from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { ShoppingBag } from "lucide-react";

export function MobileStickyCTA() {
  const [shouldAnimate, setShouldAnimate] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShouldAnimate(true);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40 md:hidden">
      <Link href="/order">
        <motion.button
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="bg-[#C17849] text-white px-6 py-3.5 rounded-full shadow-strong flex items-center gap-2 font-sans font-bold text-xs tracking-widest uppercase border border-white/10 hover:bg-[#A0622D] cursor-pointer"
          animate={
            shouldAnimate
              ? {
                  scale: [1, 1.05, 1, 1.05, 1],
                  y: [0, -4, 0, -4, 0],
                }
              : {}
          }
          transition={
            shouldAnimate
              ? {
                  duration: 1.5,
                  repeat: Infinity,
                  repeatDelay: 4,
                  ease: "easeInOut",
                }
              : {}
          }
        >
          <ShoppingBag className="w-4 h-4" /> Order Now
        </motion.button>
      </Link>
    </div>
  );
}
