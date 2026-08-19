import { Link } from "wouter";
import { ProductCard } from "@/components/sections/ProductCard";
import { AnimatedSection } from "@/components/AnimatedSection";

const featuredItems = [
  {
    id: "f1",
    name: "Artisan Brass Latte",
    price: 5.75,
    description: "Two shots of espresso poured over textured oat milk, infused with house-cardamom syrup and a dusting of grated orange zest.",
    image: "https://images.unsplash.com/photo-1541167760496-1628856ab772?auto=format&fit=crop&w=600&q=80",
    dietary: ["Vegetarian", "Organic"],
    badge: "BESTSELLER"
  },
  {
    id: "f2",
    name: "Farm-to-Table Shakshuka",
    price: 18.00,
    description: "Two poached pasture-raised eggs nestled in a simmered sauce of roasted bell peppers, fresh heirloom tomatoes, cumin, and goat cheese crumbles, served with flatbread.",
    image: "https://images.unsplash.com/photo-1590412200988-a436bb7050a8?auto=format&fit=crop&w=600&q=80",
    dietary: ["Vegetarian", "Organic"],
    badge: "SEASONAL FAVORITE"
  },
  {
    id: "f3",
    name: "Heirloom Avocado Toast",
    price: 16.00,
    description: "Smashed organic avocados on house sourdough, topped with pickled watermelon radishes, heirloom cherry tomatoes, raw pumpkin seeds, and extra virgin olive oil.",
    image: "https://images.unsplash.com/photo-1541532713592-79a0317b6b77?auto=format&fit=crop&w=600&q=80",
    dietary: ["Vegan", "Organic"],
    badge: "POPULAR"
  }
];

export default function FeaturedSection() {
  return (
    <section className="bg-secondary py-20 md:py-28 border-b border-[#E8DDD5]">
      <div className="container mx-auto px-4 md:px-8">
        
        {/* Section Header */}
        <AnimatedSection direction="up" className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#C17849]">
            Curated Culinary Plates
          </span>
          <h2 className="text-3xl md:text-5xl font-serif font-black uppercase text-[#3C2415] tracking-tight mt-3 mb-4">
            Today's Featured Specials
          </h2>
          <div className="w-16 h-0.5 bg-[#C17849] mx-auto mb-5" />
          <p className="text-[#6B5B4E] font-light leading-relaxed text-sm md:text-base">
            Every dish is made to order using pasture-raised eggs, organic olive oils, and seasonal greens sourced directly from small California farms.
          </p>
        </AnimatedSection>

        {/* Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {featuredItems.map((item, index) => (
            <AnimatedSection
              key={item.id}
              direction="up"
              delay={index * 0.1}
            >
              <ProductCard {...item} />
            </AnimatedSection>
          ))}
        </div>

        {/* View All Menu CTA */}
        <AnimatedSection direction="up" className="text-center">
          <Link href="/menu">
            <button className="px-8 py-3.5 bg-[#3C2415] hover:bg-[#C17849] text-white text-xs font-bold tracking-widest uppercase transition-bounce hover:-translate-y-0.5 rounded-full shadow-sm hover:shadow-md cursor-pointer">
              VIEW THE FULL MENU
            </button>
          </Link>
        </AnimatedSection>

      </div>
    </section>
  );
}
