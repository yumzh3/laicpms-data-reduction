const header = document.querySelector("[data-header]");
const navToggle = document.querySelector(".nav-toggle");
const nav = document.querySelector("#site-nav");
const year = document.querySelector("[data-year]");

// YouTube requires an HTTP referrer, which file:// previews cannot provide.
// Use the untracked local video while previewing, and YouTube after deployment.
const isLocalPreview = window.location.protocol === "file:";
const localDemo = document.querySelector(".local-demo");
document.documentElement.classList.toggle("local-preview", isLocalPreview);
if (isLocalPreview && localDemo) localDemo.src = localDemo.dataset.localSrc;

year.textContent = new Date().getFullYear();

window.addEventListener(
  "scroll",
  () => header.classList.toggle("scrolled", window.scrollY > 24),
  { passive: true },
);

navToggle.addEventListener("click", () => {
  const isOpen = navToggle.getAttribute("aria-expanded") === "true";
  navToggle.setAttribute("aria-expanded", String(!isOpen));
  nav.classList.toggle("open", !isOpen);
});

nav.addEventListener("click", (event) => {
  if (!event.target.matches("a")) return;
  nav.classList.remove("open");
  navToggle.setAttribute("aria-expanded", "false");
});

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    });
  },
  { threshold: 0.12 },
);

document.querySelectorAll(".reveal").forEach((element) => observer.observe(element));
