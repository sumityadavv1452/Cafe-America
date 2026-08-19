# Cafe America 🌿 Hookah Lounge & Middle Eastern Restaurant

Welcome to the official web application repository for **Cafe America**, Tustin's premier 100% Halal Middle Eastern restaurant and luxury hookah lounge.

---

## 🚀 Live Deployment
- **Live Site**: [https://www.cafeamerica.org](https://www.cafeamerica.org)
- **Hosted on**: Vercel

---

## 🛠️ Tech Stack & Technologies
- **Framework**: [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Routing**: [Wouter](https://github.com/molefrog/wouter)
- **Icons**: [Lucide React](https://lucide.dev/) & [React Icons](https://react-icons.github.io/react-icons/)
- **Deployment**: [Vercel](https://vercel.com/) (`vercel.json` configured)

---

## ✨ Features
- **Responsive Layout**: Fluid design optimized across desktop, tablet, and mobile breakpoints.
- **Interactive Menu & Cart**: Browse Halal items with category filters and real-time cart state.
- **Online Reservation Request**: Instant table booking form with validation.
- **Direct WhatsApp & Phone Integration**: Quick-action floating widgets for orders and customer inquiries.
- **Modern Performance**: Responsive picture element sets with WebP and AVIF modern format fallbacks.

---

## 💻 Getting Started (Local Development)

### Prerequisites
- Node.js (v18+ recommended)
- npm (comes with Node.js)

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/sumityadavv1452/News-Authenticator.git
   cd cafe-america
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Environment Setup:
   > **Note**: A `.env.local` file is required for local environment overrides. Refer to `.env.example` for details.
   ```bash
   cp .env.example .env.local
   ```

4. Start the local development server:
   ```bash
   npm run dev
   ```
   The app will run at `http://localhost:5173`.

---

## 📦 Build & Production

To build the static bundle for production:
```bash
npm run build
```

To preview the build locally:
```bash
npm run serve
```
