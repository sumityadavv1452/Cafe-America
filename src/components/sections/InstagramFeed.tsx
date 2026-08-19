import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AnimatedSection } from "@/components/AnimatedSection";

interface GalleryItem {
  id: number;
  image: string;
  caption: string;
}

const galleryItems: GalleryItem[] = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&w=800&q=80",
    caption: "Our vintage Probat roasting machine extracting notes of cocoa and wild jasmine.",
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=800&q=80",
    caption: "A sunlit biophilic sanctuary, designed for connection and focused creativity.",
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-151097252790b-af4f40d91fd3?auto=format&fit=crop&w=800&q=80",
    caption: "Perfect extraction by our master baristas. Craft specialty coffee poured daily.",
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80",
    caption: "Flaky rustic sourdough loaves and sweet orange-blossom croissants fresh out of the oven.",
  },
  {
    id: 5,
    image: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=800&q=80",
    caption: "Our outdoor garden patio seating is open. Sit slow and enjoy the breeze.",
  },
  {
    id: 6,
    image: "https://images.unsplash.com/photo-1541167760496-1628856ab772?auto=format&fit=crop&w=800&q=80",
    caption: "Delicate latte art poured over warm textured organic oat milk.",
  },
];

export default function InstagramFeed() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  // Keyboard navigation for lightbox
  useEffect(() => {
    if (lightboxIndex === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightboxIndex(null);
      if (e.key === "ArrowRight") {
        setLightboxIndex((prev) => (prev !== null ? (prev + 1) % galleryItems.length : null));
      }
      if (e.key === "ArrowLeft") {
        setLightboxIndex((prev) =>
          prev !== null ? (prev - 1 + galleryItems.length) % galleryItems.length : null
        );
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxIndex]);

  // Lock scroll when lightbox is open
  useEffect(() => {
    if (lightboxIndex !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [lightboxIndex]);

  return (
    <section className="bg-background-dark text-[#F5F0EB] py-24 md:py-32 border-b border-white/5 overflow-hidden">
      <div className="container mx-auto px-4 md:px-8">
        
        {/* Section Header */}
        <AnimatedSection direction="up" className="text-center max-w-2xl mx-auto mb-16">
          <span className="font-accent text-[#C17849] text-xl font-medium tracking-wide">
            Our Gallery
          </span>
          <h2 className="text-3xl md:text-5xl font-serif font-black uppercase text-[#F5F0EB] tracking-tight mt-2 mb-4">
            Moments Shared
          </h2>
          <div className="w-16 h-1 bg-[#C17849] mx-auto mb-6" />
          
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[#C17849] hover:text-[#F5F0EB] font-sans font-semibold text-xs tracking-wider uppercase transition-colors"
            aria-label="Instagram Link"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
            </svg>
            @cafeamerica_tustin
          </a>
        </AnimatedSection>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {galleryItems.map((item, index) => (
            <AnimatedSection
              key={item.id}
              direction="up"
              delay={index * 0.08}
              className="relative aspect-square overflow-hidden rounded-2xl group cursor-pointer border border-white/5"
              style={{ contentVisibility: "auto" } as React.CSSProperties}
            >
              <div className="w-full h-full" onClick={() => setLightboxIndex(index)}>
                {/* Image */}
                <img
                  src={item.image}
                  alt={`Gallery showcase ${item.id}`}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                  loading="lazy"
                />

                {/* Branded Accent Hover Overlay */}
                <div className="absolute inset-0 bg-[#C17849]/85 opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex flex-col justify-center items-center p-6 text-center z-10">
                  <svg className="w-8 h-8 text-white mb-3 transform -translate-y-2 group-hover:translate-y-0 transition-transform duration-500 ease-bounce" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="11" cy="11" r="8"></circle>
                    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                    <line x1="11" y1="8" x2="11" y2="14"></line>
                    <line x1="8" y1="11" x2="14" y2="11"></line>
                  </svg>
                  <span className="font-sans font-bold text-xs uppercase tracking-widest text-white">
                    Zoom Image
                  </span>
                  <p className="text-white/80 text-[11px] mt-2 font-light line-clamp-2 px-2">
                    {item.caption}
                  </p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

      </div>

      {/* Lightbox Full Screen Modal */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/95 z-[2000] flex flex-col items-center justify-center p-4 md:p-8"
          >
            {/* Backdrop Close Click */}
            <div className="absolute inset-0 z-0" onClick={() => setLightboxIndex(null)} />

            {/* Top Close Bar */}
            <div className="absolute top-4 right-4 md:top-8 md:right-8 z-10 flex items-center gap-4">
              <span className="text-white/60 text-xs tracking-wider uppercase font-semibold">
                {lightboxIndex + 1} / {galleryItems.length}
              </span>
              <button
                onClick={() => setLightboxIndex(null)}
                className="w-10 h-10 bg-white/10 hover:bg-white/20 text-white rounded-full flex items-center justify-center transition-colors cursor-pointer"
                aria-label="Close Lightbox"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
            </div>

            {/* Main Image Slider Wrapper */}
            <div className="relative max-w-4xl w-full h-[60dvh] md:h-[75dvh] flex items-center justify-center z-10">
              
              {/* Prev Button */}
              <button
                onClick={() =>
                  setLightboxIndex((prev) =>
                    prev !== null ? (prev - 1 + galleryItems.length) % galleryItems.length : null
                  )
                }
                className="absolute left-0 md:-left-16 w-12 h-12 bg-white/5 hover:bg-white/15 text-white rounded-full flex items-center justify-center transition-colors cursor-pointer select-none"
                aria-label="Previous Slide"
              >
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="15 18 9 12 15 6"></polyline>
                </svg>
              </button>

              {/* Next Button */}
              <button
                onClick={() =>
                  setLightboxIndex((prev) => (prev !== null ? (prev + 1) % galleryItems.length : null))
                }
                className="absolute right-0 md:-right-16 w-12 h-12 bg-white/5 hover:bg-white/15 text-white rounded-full flex items-center justify-center transition-colors cursor-pointer select-none"
                aria-label="Next Slide"
              >
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="9 18 15 12 9 6"></polyline>
                </svg>
              </button>

              {/* Active Image with Slide animation */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={lightboxIndex}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  className="w-full h-full flex flex-col items-center justify-center"
                >
                  <img
                    src={galleryItems[lightboxIndex].image}
                    alt={galleryItems[lightboxIndex].caption}
                    className="max-w-full max-h-[80%] object-contain rounded-lg shadow-strong select-none"
                  />
                  <p className="text-white/80 text-center text-sm font-light mt-6 max-w-xl leading-relaxed px-4">
                    {galleryItems[lightboxIndex].caption}
                  </p>
                </motion.div>
              </AnimatePresence>

            </div>

          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
