import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/AnimatedSection";

const features = [
  {
    icon: "☕",
    title: "Artisan Roasting",
    body: "Single-origin beans roasted fresh daily in-house for maximum flavor.",
  },
  {
    icon: "🌿",
    title: "Organic & Local",
    body: "100% organic ingredients sourced from local farms within 50 miles.",
  },
  {
    icon: "👨‍🍳",
    title: "Master Baristas",
    body: "Award-winning team trained in world-class coffee craftsmanship.",
  },
  {
    icon: "🏡",
    title: "Cozy Atmosphere",
    body: "Warm, welcoming spaces designed for work, meetings, and relaxation.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-secondary py-24 md:py-32 border-b border-[#E8DDD5]">
      <div className="container mx-auto px-4 md:px-8">
        
        {/* Section Header */}
        <AnimatedSection direction="up" className="text-center max-w-2xl mx-auto mb-16">
          <span className="font-accent text-[#C17849] text-xl font-medium tracking-wide">
            Why Choose Us
          </span>
          <h2 className="text-3xl md:text-5xl font-serif font-black uppercase text-primary tracking-tight mt-2 mb-4">
            More Than Just Coffee
          </h2>
          <div className="w-16 h-1 bg-accent mx-auto mb-5" />
        </AnimatedSection>

        {/* Feature Grid */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, i) => (
            <StaggerItem key={i} className="h-full">
              <div className="why-us__card h-full">
                
                {/* Icon Wrapper */}
                <div className="w-12 h-12 bg-[#C17849]/10 rounded-xl flex items-center justify-center text-xl mb-6">
                  {feature.icon}
                </div>

                {/* Title */}
                <h3 className="font-serif font-semibold text-xl text-primary mb-3">
                  {feature.title}
                </h3>

                {/* Body Copy */}
                <p className="font-sans text-sm text-[#6B5B4E] leading-relaxed">
                  {feature.body}
                </p>

              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

      </div>
    </section>
  );
}
