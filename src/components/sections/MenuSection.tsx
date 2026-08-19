import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, ShoppingBag, Leaf, Wheat, Sparkles } from "lucide-react";
import { useCart } from "@/context/CartContext";

interface MenuItem {
  id: string;
  name: string;
  price: number;
  description: string;
  image: string;
  category: "coffee" | "breakfast" | "lunch" | "dessert";
  dietary: ("Vegan" | "Gluten-Free" | "Vegetarian" | "Organic")[];
  badge?: "POPULAR" | "NEW" | "SEASONAL" | "CHEF'S CHOICE";
}

const menuItems: MenuItem[] = [
  {
    id: "m1",
    name: "Estate Espresso",
    price: 4.50,
    description: "Single-origin micro-lot espresso roasted fresh in-house. Bright apricot notes, jasmine aromatics, and a velvety cocoa finish.",
    image: "https://images.unsplash.com/photo-151097252790b-af4f40d91fd3?auto=format&fit=crop&w=600&q=80",
    category: "coffee",
    dietary: ["Organic", "Gluten-Free"],
    badge: "CHEF'S CHOICE",
  },
  {
    id: "m2",
    name: "Golden Hour Latte",
    price: 6.50,
    description: "Signature double espresso poured over textured organic oat milk, infused with turmeric, ginger, cardamom, and a drizzle of local wildflower honey.",
    image: "https://images.unsplash.com/photo-1541167760496-1628856ab772?auto=format&fit=crop&w=600&q=80",
    category: "coffee",
    dietary: ["Organic", "Vegetarian"],
    badge: "POPULAR",
  },
  {
    id: "m3",
    name: "Avocado Toast Royale",
    price: 18.00,
    description: "Smashed organic Hass avocados on thick-cut house sourdough, topped with heirloom cherry tomatoes, pickled red onion, micro-greens, pumpkin seeds, and white truffle oil.",
    image: "https://images.unsplash.com/photo-1541532713592-79a0317b6b77?auto=format&fit=crop&w=600&q=80",
    category: "breakfast",
    dietary: ["Organic", "Vegan"],
    badge: "POPULAR",
  },
  {
    id: "m4",
    name: "Cardamom Morning Bun",
    price: 6.00,
    description: "Flaky, multi-layered Danish pastry dough laminated with unsalted butter, rolled in freshly crushed organic cardamom and raw cane sugar.",
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=600&q=80",
    category: "dessert",
    dietary: ["Vegetarian"],
    badge: "NEW",
  },
  {
    id: "m5",
    name: "Artisan Shakshuka",
    price: 19.00,
    description: "Two poached pasture-raised eggs nestled in a simmered sauce of roasted bell peppers, fresh heirloom vine tomatoes, smoked paprika, and goat cheese crumbles, served with warm flatbread.",
    image: "https://images.unsplash.com/photo-1590412200988-a436bb7050a8?auto=format&fit=crop&w=600&q=80",
    category: "breakfast",
    dietary: ["Organic", "Vegetarian"],
    badge: "SEASONAL",
  },
  {
    id: "m6",
    name: "Organic Mezze Bowl",
    price: 21.00,
    description: "House-made garlic hummus, fire-charred eggplant babaganoush, Kalamata olives, Persian cucumber ribbons, pickled turnips, organic greens, and fresh hand-stretched flatbread.",
    image: "https://images.unsplash.com/photo-1541518763669-27fef04b14ea?auto=format&fit=crop&w=600&q=80",
    category: "lunch",
    dietary: ["Organic", "Vegan"],
  },
  {
    id: "m7",
    name: "Truffle Gruyere Melt",
    price: 17.50,
    description: "Aged Swiss Gruyère and sharp raw cheddar cheese infused with black summer truffle tapenade, pressed golden on thick pain de campagne, served with roasted tomato bisque.",
    image: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=600&q=80",
    category: "lunch",
    dietary: ["Organic", "Vegetarian"],
    badge: "POPULAR",
  },
  {
    id: "m8",
    name: "Honey Lavender Custard Tart",
    price: 9.50,
    description: "Delicate shortbread tart shell filled with wild lavender-infused pastry cream, coated in a local honeycomb glaze and dressed with edible flower petals.",
    image: "https://images.unsplash.com/photo-1508737027454-e6454ef45afd?auto=format&fit=crop&w=600&q=80",
    category: "dessert",
    dietary: ["Vegetarian"],
    badge: "NEW",
  },
  {
    id: "m9",
    name: "Cold Brew Tonic Infusion",
    price: 5.75,
    description: "Our signature 18-hour cold brew layered over premium artisanal tonic water, finished with fresh organic elderflower reduction syrup and a flame-singed sprig of rosemary.",
    image: "https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=600&q=80",
    category: "coffee",
    dietary: ["Organic", "Vegan", "Gluten-Free"],
  },
];

type CategoryFilter = "all" | "coffee" | "breakfast" | "lunch" | "dessert";

export default function MenuSection() {
  const { addToCart } = useCart();
  const [activeCategory, setActiveCategory] = useState<CategoryFilter>("all");
  const [addedStates, setAddedStates] = useState<Record<string, boolean>>({});

  const categories = [
    { key: "all", label: "All Offerings" },
    { key: "coffee", label: "Specialty Coffee" },
    { key: "breakfast", label: "Breakfast & Brunch" },
    { key: "lunch", label: "Artisan Lunch" },
    { key: "dessert", label: "Pastries & Sweets" },
  ];

  const filteredItems = useMemo(() => {
    if (activeCategory === "all") return menuItems;
    return menuItems.filter((item) => item.category === activeCategory);
  }, [activeCategory]);

  const handleAdd = (item: MenuItem) => {
    addToCart({
      id: item.id,
      name: item.name,
      price: item.price,
      image: item.image,
    });
    setAddedStates((prev) => ({ ...prev, [item.id]: true }));
    setTimeout(() => {
      setAddedStates((prev) => ({ ...prev, [item.id]: false }));
    }, 1200);
  };

  return (
    <section className="bg-[#FDFAF7] text-[#2D2926] py-24 md:py-32 border-b border-[#E8DDD5]">
      <div className="container mx-auto px-4 md:px-8">
        
        {/* Header Title Area */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="font-accent text-[#C17849] text-xl font-medium tracking-wide">
            Our Offerings
          </span>
          <h2 className="text-3xl md:text-5xl font-serif font-black uppercase text-[#3C2415] tracking-tight mt-2 mb-4">
            Sensory Masterpieces
          </h2>
          <div className="w-16 h-0.5 bg-[#C17849] mx-auto" />
        </div>

        {/* Tab Filters Bar */}
        <div className="flex justify-center mb-16">
          <div className="flex overflow-x-auto no-scrollbar gap-3 pb-2 -mx-4 px-4 scroll-smooth max-w-full">
            {categories.map((cat) => {
              const isActive = activeCategory === cat.key;
              return (
                <button
                  key={cat.key}
                  onClick={() => setActiveCategory(cat.key as CategoryFilter)}
                  className={`px-6 py-2.5 rounded-full font-sans font-semibold text-xs tracking-wider uppercase whitespace-nowrap transition-all duration-300 cursor-pointer ${
                    isActive
                      ? "bg-[#3C2415] text-[#FDFAF7] border border-[#3C2415]"
                      : "bg-transparent text-[#6B5B4E] border border-[#E8DDD5] hover:border-[#3C2415] hover:text-[#3C2415]"
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Menu Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => {
              const isAdded = addedStates[item.id];
              return (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4 }}
                  className="bg-white border border-[#E8DDD5] rounded-2xl overflow-hidden flex flex-col md:flex-row h-full group hover:border-[#C17849]/40 hover:shadow-hover transition-all duration-300"
                >
                  {/* Slow Zoom Card Graphic */}
                  <div className="relative w-full md:w-[40%] h-52 md:h-auto overflow-hidden min-h-[220px]">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      loading="lazy"
                    />
                    
                    {/* Visual Badge Overlay */}
                    {item.badge && (
                      <span className="absolute top-4 left-4 bg-[#C17849] text-white text-[9px] font-bold tracking-widest uppercase px-3 py-1 rounded-full shadow-sm flex items-center gap-1">
                        <Sparkles className="w-2.5 h-2.5" />
                        {item.badge}
                      </span>
                    )}
                  </div>

                  {/* Right Details Panel */}
                  <div className="p-6 md:p-8 flex flex-col justify-between flex-1">
                    <div>
                      {/* Name & Pricing Row */}
                      <div className="flex justify-between items-start gap-4 mb-3">
                        <h3 className="font-serif font-bold text-lg md:text-xl text-[#3C2415] tracking-wide leading-snug">
                          {item.name}
                        </h3>
                        <span className="text-[#C17849] font-sans font-bold text-lg whitespace-nowrap">
                          ${item.price.toFixed(2)}
                        </span>
                      </div>

                      {/* Description */}
                      <p className="text-[#6B5B4E] text-sm font-light leading-relaxed mb-4">
                        {item.description}
                      </p>

                      {/* Dietary Information */}
                      <div className="flex flex-wrap gap-2 mb-6">
                        {item.dietary.map((tag) => (
                          <span
                            key={tag}
                            className="text-[9px] font-bold uppercase tracking-wider text-[#7D8B69] bg-[#7D8B69]/5 border border-[#7D8B69]/25 px-2.5 py-0.5 rounded-full flex items-center gap-1"
                          >
                            {tag === "Vegan" || tag === "Vegetarian" ? (
                              <Leaf className="w-2.5 h-2.5" />
                            ) : (
                              <Wheat className="w-2.5 h-2.5" />
                            )}
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Inline Cart Add CTA */}
                    <div>
                      <button
                        onClick={() => handleAdd(item)}
                        className={`w-full md:w-auto px-6 py-2.5 flex items-center justify-center gap-2 font-sans font-semibold text-xs tracking-wider uppercase rounded-full transition-bounce hover:-translate-y-0.5 cursor-pointer ${
                          isAdded
                            ? "bg-[#7D8B69] text-white"
                            : "bg-[#3C2415] hover:bg-[#A0622D] text-white"
                        }`}
                      >
                        {isAdded ? (
                          <>
                            <Check className="w-3.5 h-3.5" /> Added!
                          </>
                        ) : (
                          <>
                            <ShoppingBag className="w-3.5 h-3.5" /> Add to Order
                          </>
                        )}
                      </button>
                    </div>

                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}
