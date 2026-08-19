import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

createRoot(document.getElementById("root")!).render(<App />);

// ==========================================
// SECTION 12: PURE JS SCROLL ANIMATION ENGINE
// ==========================================
const observeAnimations = () => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animated");
          // Stop observing once animated
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.15,
    }
  );

  const queryAndObserve = () => {
    const targets = document.querySelectorAll(
      '.fade-in-up:not(.animated), .fade-in:not(.animated), .scale-in:not(.animated), .blur-in:not(.animated)'
    );
    targets.forEach((el) => observer.observe(el));
  };

  // Run initial query
  queryAndObserve();

  // Watch for dynamic route transitions and React updates
  const mutationObserver = new MutationObserver(() => {
    queryAndObserve();
  });

  mutationObserver.observe(document.body, {
    childList: true,
    subtree: true,
  });
};

if (typeof window !== "undefined") {
  if (document.readyState === "complete" || document.readyState === "interactive") {
    observeAnimations();
  } else {
    window.addEventListener("DOMContentLoaded", observeAnimations);
  }
}
