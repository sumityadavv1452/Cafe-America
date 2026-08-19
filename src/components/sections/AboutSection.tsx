import { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { AnimatedSection } from "@/components/AnimatedSection";

// Viewport-triggered Count Up Component
function CountUp({ end, duration = 1.5, suffix = "", decimals = 0 }: { end: number; duration?: number; suffix?: string; decimals?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (!isInView) return;
    const totalFrames = Math.round(duration * 60);
    let frame = 0;

    const counter = setInterval(() => {
      frame++;
      const progress = frame / totalFrames;
      // Ease out quad
      const current = end * (progress * (2 - progress));
      setCount(current);

      if (frame === totalFrames) {
        clearInterval(counter);
        setCount(end);
      }
    }, 1000 / 60);

    return () => clearInterval(counter);
  }, [isInView, end, duration]);

  return <span ref={ref}>{count.toFixed(decimals)}{suffix}</span>;
}

const teamMembers = [
  {
    name: "Elias Marhaba",
    role: "Co-Founder & Head Roaster",
    bio: "Elias travels globally to secure direct-trade agreements, overseeing custom roasting profiles on our vintage Probat roaster.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80"
  },
  {
    name: "Julian Marhaba",
    role: "Co-Founder & Executive Chef",
    bio: "Julian designs our seasonal farm-to-table menu, partnering with organic growers to bring fresh ingredients to your plate.",
    image: "https://images.unsplash.com/photo-1583394838336-acd977736f90?auto=format&fit=crop&w=300&q=80"
  },
  {
    name: "Aria Chen",
    role: "Lead Barista",
    bio: "A regional Latte Art champion, Aria oversees barista training, ensuring extraction variables are consistently balanced.",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80"
  }
];

export default function AboutSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Parallax scroll controls for overlapping collage
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const yImageA = useTransform(scrollYProgress, [0, 1], [0, 50]);
  const yImageB = useTransform(scrollYProgress, [0, 1], [0, -50]);

  return (
    <section
      ref={containerRef}
      className="bg-[#FDFAF7] text-[#2D2926] py-24 md:py-32 border-b border-[#E8DDD5] overflow-hidden"
    >
      <div className="container mx-auto px-4 md:px-8">
        
        {/* Asymmetric 2-Column Row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
          
          {/* Column 1 (Left): Story narrative */}
          <AnimatedSection direction="left" className="flex flex-col gap-6 max-w-xl">
            <span className="font-accent text-[#C17849] text-xl font-medium tracking-wide">
              Our Story
            </span>
            <h2 className="text-3xl md:text-5xl font-serif font-black uppercase text-[#3C2415] tracking-tight leading-[1.15]">
              Crafting Coffee, Cultivating Community
            </h2>
            <div className="w-16 h-0.5 bg-[#C17849]" />
            
            <p className="text-[#6B5B4E] font-sans font-light leading-relaxed text-sm md:text-base">
              Founded in 2012 by a group of passionate coffee enthusiasts, Cafe America began with a simple mission: to roast exceptional beans and create a space where neighbors could gather, connect, and thrive.
            </p>
            
            <p className="text-[#6B5B4E] font-sans font-light leading-relaxed text-sm md:text-base">
              Every cup we serve is a testament to our direct-trade sourcing, careful artisan roasting, and culinary passion. We believe in sustainable practices, local farm partnerships, and the magic of shared hospitality.
            </p>

            {/* Micro details panel with CountUp counters */}
            <div className="grid grid-cols-2 gap-6 pt-6 border-t border-[#E8DDD5] mt-2">
              <div>
                <span className="font-serif font-bold text-3xl text-[#3C2415]">
                  <CountUp end={100} suffix="%" />
                </span>
                <p className="text-xs uppercase tracking-wider text-[#A0622D] font-semibold mt-1">Organic Sourcing</p>
              </div>
              <div>
                <span className="font-serif font-bold text-3xl text-[#3C2415]">
                  <CountUp end={1.2} decimals={1} suffix="M+" />
                </span>
                <p className="text-xs uppercase tracking-wider text-[#A0622D] font-semibold mt-1">Cups Poured</p>
              </div>
            </div>
          </AnimatedSection>

          {/* Column 2 (Right): Creative Image Collage with Parallax */}
          <div className="relative w-full h-[480px] sm:h-[600px] flex items-center justify-center lg:justify-end">
            
            {/* Image A (Large background, offset left) */}
            <motion.div
              style={{ y: yImageA }}
              whileHover={{ scale: 1.01 }}
              transition={{ duration: 0.4 }}
              className="absolute left-0 top-12 w-[75%] aspect-[4/5] bg-white border-[6px] border-white shadow-soft overflow-hidden rounded-lg z-10 cursor-pointer"
            >
              <img
                src="https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&w=800&q=80"
                alt="Artisan coffee roasting process"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                loading="lazy"
              />
            </motion.div>

            {/* Image B (Foreground, offset bottom-right) */}
            <motion.div
              style={{ y: yImageB }}
              whileHover={{ scale: 1.01 }}
              transition={{ duration: 0.4 }}
              className="absolute right-0 bottom-4 w-[50%] aspect-square bg-white border-[6px] border-white shadow-medium overflow-hidden rounded-lg z-20 cursor-pointer"
            >
              <img
                src="https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=600&q=80"
                alt="Rustic homemade sourdough loaf"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                loading="lazy"
              />
            </motion.div>

            {/* Floating Stat Badge with CountUp */}
            <div className="absolute left-[35%] top-[25%] bg-[#C17849] text-white p-6 rounded-2xl shadow-strong z-30 max-w-[190px] border border-white/10 backdrop-blur-md overflow-hidden group">
              {/* Glass reflection shine overlay */}
              <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/15 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out" />
              <span className="font-serif font-black text-2xl md:text-3xl block leading-none mb-1">
                <CountUp end={14} suffix="+" />
              </span>
              <span className="text-[10px] uppercase font-bold tracking-widest leading-normal text-white/95">
                Years of Artisan Heritage
              </span>
            </div>

          </div>

        </div>

        {/* Team profiles row */}
        <div className="pt-16 border-t border-[#E8DDD5]">
          <AnimatedSection direction="up" className="text-center max-w-xl mx-auto mb-16">
            <span className="font-accent text-[#C17849] text-xl font-medium tracking-wide">
              Meet the Makers
            </span>
            <h3 className="text-2xl md:text-4xl font-serif font-black uppercase text-[#3C2415] mt-2 mb-4">
              Our Artisan Crew
            </h3>
            <div className="w-12 h-0.5 bg-[#C17849] mx-auto" />
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <AnimatedSection
                key={member.name}
                direction="up"
                delay={index * 0.12}
                className="bg-white border border-[#E8DDD5] p-8 flex flex-col items-center text-center rounded-2xl shadow-soft hover:shadow-medium hover:border-[#C17849]/30 transition-all duration-300"
              >
                {/* Profile Image */}
                <div className="w-24 h-24 rounded-full overflow-hidden bg-gray-50 border-2 border-[#C17849] p-0.5 mb-6">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover rounded-full grayscale hover:grayscale-0 transition-all duration-300"
                  />
                </div>
                
                {/* Profile Title & Bio */}
                <h4 className="font-serif font-bold text-lg text-[#3C2415] uppercase tracking-wide">
                  {member.name}
                </h4>
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#C17849] mb-4 block">
                  {member.role}
                </span>
                <p className="text-[#6B5B4E] text-xs md:text-sm font-light leading-relaxed">
                  {member.bio}
                </p>
              </AnimatedSection>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
