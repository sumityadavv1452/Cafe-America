import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { X, MessageCircle, Phone, ShoppingBag } from "lucide-react";

export function WhatsAppButton() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-5 z-50 flex flex-col items-end gap-3">
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 12, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.95 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="bg-white rounded-2xl shadow-2xl p-5 w-72 border border-gray-100"
          >
            <div className="flex items-center gap-3 mb-4 pb-4 border-b border-gray-100">
              <img
                src="https://static.wixstatic.com/media/2faa09_d607c608edfd498a817582629b6ccf54~mv2.webp"
                alt="Cafe America"
                className="w-10 h-10 object-contain rounded-full"
              />
              <div>
                <p className="font-bold text-gray-900 text-sm">Cafe America</p>
                <p className="text-xs text-green-600 font-medium">● Usually replies quickly</p>
              </div>
            </div>

            <p className="text-gray-700 text-sm mb-4 leading-relaxed">
              Hi there! How can we help you today? Order food, ask about our menu, or book a hookah session.
            </p>

            <div className="flex flex-col gap-2">
              <a
                href="https://wa.me/17145446961?text=Hi%2C%20I%27d%20like%20to%20place%20an%20order"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-[#25D366] text-white px-4 py-2.5 rounded-lg font-semibold text-sm hover:bg-[#1ebe5d] transition-colors"
              >
                <ShoppingBag className="w-4 h-4" /> Order via WhatsApp
              </a>
              <a
                href="tel:7145446961"
                className="flex items-center gap-2 bg-gray-900 text-white px-4 py-2.5 rounded-lg font-semibold text-sm hover:bg-gray-800 transition-colors"
              >
                <Phone className="w-4 h-4" /> Call 714-544-6961
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        onClick={() => setOpen(!open)}
        className="w-14 h-14 rounded-full shadow-xl flex items-center justify-center text-white relative"
        style={{ backgroundColor: open ? "#1A1A1A" : "#25D366" }}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.94 }}
        transition={{ duration: 0.2 }}
        aria-label="Chat on WhatsApp"
      >
        <AnimatePresence mode="wait">
          {open ? (
            <motion.span key="close"
              initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.15 }}
            >
              <X className="w-6 h-6" />
            </motion.span>
          ) : (
            <motion.span key="whatsapp"
              initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.15 }}
            >
              <MessageCircle className="w-6 h-6" />
            </motion.span>
          )}
        </AnimatePresence>
        {!open && (
          <span className="absolute -top-1 -right-1 w-4 h-4 bg-primary rounded-full border-2 border-white animate-pulse" />
        )}
      </motion.button>
    </div>
  );
}
