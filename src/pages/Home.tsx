import Hero from "@/components/sections/Hero";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import FeaturedSection from "@/components/sections/FeaturedSection";
import AboutSection from "@/components/sections/AboutSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import InstagramFeed from "@/components/sections/InstagramFeed";
import LocationSection from "@/components/sections/LocationSection";
import NewsletterSignup from "@/components/sections/NewsletterSignup";

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      <Hero />
      <WhyChooseUs />
      <FeaturedSection />
      <AboutSection />
      <TestimonialsSection />
      <InstagramFeed />
      <LocationSection />
      <NewsletterSignup />
    </div>
  );
}
