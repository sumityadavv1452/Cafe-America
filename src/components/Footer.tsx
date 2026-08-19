import { Link } from "wouter";

export function Footer() {
  const socialLinks = [
    {
      name: "Instagram",
      url: "https://instagram.com",
      icon: (
        <svg className="w-4.5 h-4.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
        </svg>
      ),
    },
    {
      name: "Facebook",
      url: "https://facebook.com",
      icon: (
        <svg className="w-4.5 h-4.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
        </svg>
      ),
    },
    {
      name: "Yelp",
      url: "https://yelp.com",
      icon: (
        <svg className="w-4.5 h-4.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
        </svg>
      ),
    },
    {
      name: "TripAdvisor",
      url: "https://tripadvisor.com",
      icon: (
        <svg className="w-4.5 h-4.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"></circle>
          <circle cx="8" cy="12" r="2.5"></circle>
          <circle cx="16" cy="12" r="2.5"></circle>
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
        </svg>
      ),
    },
  ];

  return (
    <footer className="bg-primary text-[#F5F0EB] pt-24 pb-12 border-t border-white/5">
      <div className="container mx-auto px-4 md:px-8">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Column 1: Brand Info */}
          <div className="flex flex-col items-start gap-4">
            <div className="flex items-center gap-3">
              <span className="font-serif font-black text-2xl uppercase tracking-wider text-white">
                CAFE AMERICA
              </span>
            </div>
            <p className="text-[#A08E81] text-sm leading-relaxed font-light font-sans max-w-xs mt-2">
              Tustin's premier Middle Eastern coffeehouse and farm-to-table kitchen, craft roasting and sourcing organic ingredients since 2012.
            </p>
            
            {/* Social Icons with filled backgrounds on hover */}
            <div className="flex items-center gap-3 mt-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-white/80 hover:text-white hover:bg-[#C17849] hover:border-[#C17849] transition-all duration-300 cursor-pointer"
                  aria-label={`${social.name} Link`}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-[#C17849] mb-6 font-sans">
              Navigation
            </h4>
            <ul className="flex flex-col gap-3 font-sans text-sm">
              <li>
                <Link href="/">
                  <span className="footer-link cursor-pointer">Home Showcase</span>
                </Link>
              </li>
              <li>
                <Link href="/menu">
                  <span className="footer-link cursor-pointer">Our Menu</span>
                </Link>
              </li>
              <li>
                <Link href="/experiences">
                  <span className="footer-link cursor-pointer">Experiences & Hookah</span>
                </Link>
              </li>
              <li>
                <Link href="/about">
                  <span className="footer-link cursor-pointer">Our Heritage</span>
                </Link>
              </li>
              <li>
                <Link href="/order">
                  <span className="footer-link cursor-pointer">Order Online</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact & Halal Badge */}
          <div className="flex flex-col gap-6">
            <div>
              <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-[#C17849] mb-4 font-sans">
                Get in Touch
              </h4>
              <ul className="flex flex-col gap-2.5 font-sans text-sm text-[#A08E81]">
                <li>
                  <a href="tel:7145446961" className="text-white hover:text-[#C17849] transition-colors font-bold">
                    (714) 544-6961
                  </a>
                </li>
                <li>
                  <a href="mailto:cafeamerica1@gmail.com" className="hover:text-white transition-colors">
                    cafeamerica1@gmail.com
                  </a>
                </li>
                <li>
                  12932 Newport Ave<br />
                  Tustin, CA 92780
                </li>
              </ul>
            </div>

            {/* Organic Badge */}
            <div>
              <span className="bg-[#7D8B69] text-[#F5F0EB] px-4 py-2 rounded-full text-[10px] font-bold tracking-widest uppercase border border-white/10 inline-flex items-center gap-1.5">
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"></path>
                </svg>
                100% Organic Sourced
              </span>
            </div>
          </div>

          {/* Column 4: Operational Hours */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-[#C17849] mb-6 font-sans">
              Operational Hours
            </h4>
            <ul className="flex flex-col gap-3 font-sans text-sm text-[#A08E81]">
              <li className="flex justify-between border-b border-white/5 pb-2">
                <span>Mon – Thu</span>
                <span className="text-white font-medium">11:00 AM – 1:00 AM</span>
              </li>
              <li className="flex justify-between border-b border-white/5 pb-2">
                <span>Friday</span>
                <span className="text-white font-medium">11:00 AM – 2:00 AM</span>
              </li>
              <li className="flex justify-between border-b border-white/5 pb-2">
                <span>Saturday</span>
                <span className="text-white font-medium">6:00 PM – 2:00 AM</span>
              </li>
              <li className="flex justify-between">
                <span>Sunday</span>
                <span className="text-white font-medium">6:00 PM – 1:00 AM</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Copyright Bar */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] font-sans text-[#A08E81] tracking-wider uppercase">
          <p>© {new Date().getFullYear()} Cafe America. All rights reserved.</p>
          <p>
            Crafted by <span className="text-white font-semibold">Antigravity Agency</span> for Cafe America
          </p>
          <div className="flex gap-4">
            <Link href="/privacy">
              <span className="hover:text-white cursor-pointer transition-colors">Privacy Policy</span>
            </Link>
            <span className="text-white/20">|</span>
            <Link href="/terms">
              <span className="hover:text-white cursor-pointer transition-colors">Terms of Service</span>
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
