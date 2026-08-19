import { Switch, Route, Router as WouterRouter } from "wouter";
import { lazy, Suspense } from "react";
import { CartProvider } from "@/context/CartContext";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { MobileStickyCTA } from "@/components/MobileStickyCTA";

const Home = lazy(() => import("@/pages/Home"));
const Menu = lazy(() => import("@/pages/Menu"));
const About = lazy(() => import("@/pages/About"));
const Contact = lazy(() => import("@/pages/Contact"));
const Experiences = lazy(() => import("@/pages/Experiences"));
const OrderOnline = lazy(() => import("@/pages/OrderOnline"));
const NotFound = lazy(() => import("@/pages/not-found"));

function Router() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <Navbar />
      <main className="flex-1 flex flex-col">
        <Suspense fallback={
          <div className="min-h-screen flex items-center justify-center bg-cream">
            <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
          </div>
        }>
          <Switch>
            <Route path="/" component={Home} />
            <Route path="/menu" component={Menu} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route path="/experiences" component={Experiences} />
            <Route path="/order" component={OrderOnline} />
            <Route component={NotFound} />
          </Switch>
        </Suspense>
      </main>
      <Footer />
      <WhatsAppButton />
      <MobileStickyCTA />
    </div>
  );
}

function App() {
  return (
    <CartProvider>
      <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
        <Router />
      </WouterRouter>
    </CartProvider>
  );
}

export default App;
