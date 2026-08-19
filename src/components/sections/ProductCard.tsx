import React, { useState } from "react";
import { Plus, Check } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useCart } from "@/context/CartContext";

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  description: string;
  image: string;
  dietary?: string[];
  badge?: string;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  id,
  name,
  price,
  description,
  image,
  dietary = [],
  badge,
}) => {
  const { addToCart } = useCart();
  const [added, setAdded] = useState(false);

  const handleAdd = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart({ id, name, price, image });
    setAdded(true);
    setTimeout(() => setAdded(false), 1800);
  };

  return (
    <motion.div
      whileHover={{ y: -8, transition: { duration: 0.3, ease: "easeOut" } }}
      className="bg-white border border-gray-100 group relative flex flex-col h-full shadow-sm hover:shadow-xl transition-shadow duration-300"
    >
      {/* Badge Overlay */}
      {badge && (
        <span className="absolute top-4 left-4 z-10 bg-accent text-white text-[9px] font-bold tracking-widest uppercase px-2.5 py-1">
          {badge}
        </span>
      )}

      {/* Product Image Container */}
      <div className="relative aspect-4/3 overflow-hidden bg-gray-50">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
      </div>

      {/* Card Content */}
      <div className="p-6 flex flex-col flex-1">
        {/* Dietary Tags */}
        {dietary.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mb-2.5">
            {dietary.map((tag) => (
              <span
                key={tag}
                className="text-[9px] font-bold uppercase tracking-wider text-primary border border-primary/20 px-2 py-0.5"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        {/* Title & Price Row */}
        <div className="flex justify-between items-baseline gap-2 mb-2">
          <h3 className="font-serif font-black text-lg md:text-xl text-primary uppercase tracking-wide group-hover:text-accent transition-colors duration-200">
            {name}
          </h3>
          <span className="font-sans font-extrabold text-sm md:text-base text-accent whitespace-nowrap">
            ${price.toFixed(2)}
          </span>
        </div>

        {/* Description */}
        <p className="text-gray-500 text-xs md:text-sm font-light leading-relaxed mb-6 flex-1">
          {description}
        </p>

        {/* Action Button */}
        <button
          onClick={handleAdd}
          className={`w-full py-3 flex items-center justify-center gap-2 font-sans font-bold text-xs uppercase tracking-widest transition-all duration-300 border cursor-pointer ${
            added
              ? "bg-primary text-white border-primary"
              : "bg-white text-charcoal border-charcoal/20 hover:bg-charcoal hover:text-white"
          }`}
        >
          <AnimatePresence mode="wait" initial={false}>
            {added ? (
              <motion.span
                key="added"
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -5 }}
                className="flex items-center gap-1.5"
              >
                <Check className="w-3.5 h-3.5" /> Added Successfully
              </motion.span>
            ) : (
              <motion.span
                key="add"
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -5 }}
                className="flex items-center gap-1.5"
              >
                <Plus className="w-3.5 h-3.5 text-accent" /> Add to Order
              </motion.span>
            )}
          </AnimatePresence>
        </button>
      </div>
    </motion.div>
  );
};
