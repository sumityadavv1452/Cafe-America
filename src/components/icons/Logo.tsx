import React from "react";

interface LogoProps {
  className?: string;
}

export const ArtisanSealLogo: React.FC<LogoProps> = ({ className = "w-10 h-10" }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 200 200"
      fill="none"
      className={className}
    >
      <circle cx="100" cy="100" r="90" stroke="currentColor" strokeWidth="2.5" />
      <circle cx="100" cy="100" r="82" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" />
      <path id="logoTextPath" d="M 100, 100 m -62, 0 a 62,62 0 1,1 124,0 a 62,62 0 1,1 -124,0" fill="none"/>
      <text font-family="'Outfit', sans-serif" font-size="11.5" font-weight="900" letter-spacing="4" fill="currentColor">
        <textPath href="#logoTextPath" startOffset="50%" text-anchor="middle">CAFE AMERICA • BROOKLYN</textPath>
      </text>
      <g transform="translate(85, 75)" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
        {/* Coffee Leaf Design */}
        <path d="M15 45 C 15 25, 5 20, 5 10 C 5 5, 10 5, 15 15 C 20 5, 25 5, 25 10 C 25 20, 15 25, 15 45 Z" fill="currentColor" fill-opacity="0.15" />
        <path d="M15 45 L 15 10" />
        <path d="M15 25 C 15 25, 28 20, 28 15 C 28 10, 20 12, 15 25 Z" fill="currentColor" fill-opacity="0.1" />
      </g>
    </svg>
  );
};

export const StackedLogo: React.FC<LogoProps> = ({ className = "w-48 h-auto" }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 300 120"
      fill="none"
      className={className}
    >
      <text x="50%" y="45" font-family="'Playfair Display', serif" font-size="34" font-weight="900" fill="currentColor" text-anchor="middle" letter-spacing="6">CAFE</text>
      <line x1="70" y1="62" x2="230" y2="62" stroke="currentColor" stroke-width="1.5" />
      <circle cx="150" cy="62" r="3.5" fill="currentColor" />
      <text x="50%" y="98" font-family="'Outfit', sans-serif" font-size="26" font-weight="900" fill="currentColor" text-anchor="middle" letter-spacing="8">AMERICA</text>
    </svg>
  );
};
