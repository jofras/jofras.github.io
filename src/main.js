import "./components/navbar.js";
import "./components/project-card.js";
import "./theme.js";

// Scroll progress bar
const progressBar = document.createElement("div");
progressBar.className = "scroll-progress";
document.body.prepend(progressBar);

window.addEventListener("scroll", () => {
  const scrolled = window.scrollY;
  const total = document.documentElement.scrollHeight - window.innerHeight;
  const pct = total > 0 ? (scrolled / total) * 100 : 0;
  progressBar.style.setProperty("--progress", pct + "%");
}, { passive: true });

// Scroll-triggered reveal animations
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.07, rootMargin: "0px 0px -30px 0px" });

document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
