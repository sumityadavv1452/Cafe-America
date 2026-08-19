import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { ShoppingBag } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { ArtisanSealLogo } from "@/components/icons/Logo";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [animateBadge, setAnimateBadge] = useState(false);
  const [location] = useLocation();
  const { cartCount } = useCart();

  // Scroll detection handler
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Trigger scale animation on cart count changes
  useEffect(() => {
    if (cartCount > 0) {
      setAnimateBadge(true);
      const timer = setTimeout(() => setAnimateBadge(false), 400);
      return () => clearTimeout(timer);
    }
  }, [cartCount]);

  // Body scroll lock on mobile menu open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Menu", href: "/menu" },
    { label: "Our Story", href: "/about" },
    { label: "Experiences", href: "/experiences" },
    { label: "Order Online", href: "/order" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-[1000] transition-all duration-400 ease-in-out ${
          scrolled
            ? "bg-[#FDFAF7]/95 backdrop-blur-md text-[#2D2926] shadow-soft border-b border-[#E8DDD5] h-16 flex items-center"
            : "bg-transparent text-white h-20 flex items-center"
        }`}
      >
        <div className="container mx-auto px-4 md:px-8 flex items-center justify-between w-full">
          
          {/* Logo Brand Area */}
          <Link href="/">
            <div className="flex items-center gap-3 cursor-pointer group">
              <ArtisanSealLogo
                className={`w-10 h-10 transition-colors duration-300 ${
                  scrolled ? "text-[#3C2415]" : "text-[#FDFAF7]"
                }`}
              />
              <div className="flex flex-col text-left">
                <span
                  className={`font-serif font-bold text-base md:text-lg tracking-wider uppercase leading-none transition-colors ${
                    scrolled ? "text-[#3C2415]" : "text-[#FDFAF7]"
                  }`}
                >
                  Cafe America
                </span>
                <span className="text-[8px] uppercase tracking-[0.25em] font-semibold font-sans text-[#C17849] leading-none mt-1">
                  Artisan Coffee & Kitchen
                </span>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-2">
            {navLinks.map((link) => {
              const isActive = location === link.href;
              return (
                <Link key={link.href} href={link.href}>
                  <span
                    className={`px-4 py-2 text-xs font-semibold uppercase tracking-wider transition-colors cursor-pointer relative ${
                      isActive
                        ? scrolled
                          ? "text-[#3C2415]"
                          : "text-[#FDFAF7]"
                        : scrolled
                        ? "text-[#6B5B4E] hover:text-[#3C2415]"
                        : "text-[#FDFAF7]/80 hover:text-[#FDFAF7]"
                    }`}
                  >
                    {link.label}
                    {isActive && (
                      <span className="absolute bottom-1 left-4 right-4 h-0.5 bg-[#C17849]" />
                    )}
                  </span>
                </Link>
              );
            })}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center gap-6">
            {/* Shopping Cart Button */}
            <Link href="/order">
              <button
                className={`relative p-2 transition-colors cursor-pointer flex items-center justify-center ${
                  scrolled ? "text-[#3C2415] hover:text-[#C17849]" : "text-[#FDFAF7] hover:text-[#C17849]"
                }`}
                aria-label="Open Cart"
              >
                <ShoppingBag className="w-5.5 h-5.5" />
                {cartCount > 0 && (
                  <span
                    className={`absolute -top-1 -right-1 bg-[#C17849] text-white text-[9px] font-bold w-4.5 h-4.5 rounded-full flex items-center justify-center border border-[#FDFAF7] transition-transform duration-300 ${
                      animateBadge ? "scale-125" : "scale-100"
                    }`}
                  >
                    {cartCount}
                  </span>
                )}
              </button>
            </Link>

            <Link href="/order">
              <button className="px-6 py-2.5 bg-[#C17849] hover:bg-[#A0622D] text-white font-sans font-semibold text-xs tracking-wider uppercase rounded-full transition-bounce hover:-translate-y-0.5 hover:shadow-hover cursor-pointer">
                Reserve a Table
              </button>
            </Link>
          </div>

          {/* Mobile Actions Header Row */}
          <div className="flex lg:hidden items-center gap-4 z-[1001]">
            {/* Cart Icon for Mobile */}
            <Link href="/order">
              <button
                className={`relative p-2 transition-colors cursor-pointer ${
                  open ? "text-[#FDFAF7]" : scrolled ? "text-[#3C2415]" : "text-[#FDFAF7]"
                }`}
                aria-label="Open Cart"
              >
                <ShoppingBag className="w-5.5 h-5.5" />
                {cartCount > 0 && (
                  <span
                    className={`absolute -top-1 -right-1 bg-[#C17849] text-white text-[9px] font-bold w-4.5 h-4.5 rounded-full flex items-center justify-center border border-[#FDFAF7] transition-transform duration-300 ${
                      animateBadge ? "scale-125" : "scale-100"
                    }`}
                  >
                    {cartCount}
                  </span>
                )}
              </button>
            </Link>

            {/* Custom Hamburger Trigger */}
            <button
              onClick={() => setOpen(!open)}
              className={`p-2 focus:outline-none flex items-center justify-center ${
                open ? "menu-open" : ""
              } ${scrolled ? "text-[#3C2415]" : "text-white"}`}
              aria-label="Toggle Menu"
            >
              <div className="hamburger-box">
                <span className="hamburger-line hamburger-line-1"></span>
                <span className="hamburger-line hamburger-line-2"></span>
                <span className="hamburger-line hamburger-line-3"></span>
              </div>
            </button>
          </div>

        </div>
      </header>

      {/* Spacer to prevent page content overlap (except for home page where we want absolute overlay) */}
      {location !== "/" && <div className="h-20" />}

      {/* Mobile Full Screen Menu Overlay */}
      <div className={`mobile-menu-overlay ${open ? "menu-active" : ""}`}>
        <nav className="flex flex-col items-center">
          {navLinks.map((link, index) => {
            const isActive = location === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
              >
                <span
                  style={{ transitionDelay: `${index * 60}ms` }}
                  className={`mobile-menu-link cursor-pointer hover:text-[#C17849] transition-colors block ${
                    isActive ? "text-[#C17849]" : "text-[#FDFAF7]"
                  }`}
                >
                  {link.label}
                </span>
              </Link>
            );
          })}
        </nav>

        {/* Social Icons at Bottom */}
        <div
          style={{ transitionDelay: `${navLinks.length * 60}ms` }}
          className={`flex gap-6 mt-12 text-[#FDFAF7]/60 transition-all duration-500 transform translate-y-8 opacity-0 ${
            open ? "translate-y-0 opacity-100" : ""
          }`}
        >
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#C17849] transition-colors"
            aria-label="Instagram Link"
          >
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
            </svg>
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#C17849] transition-colors"
            aria-label="Facebook Link"
          >
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
            </svg>
          </a>
        </div>
      </div>
    </>
  );
}
