const navToggle = document.querySelector("#nav-toggle");
const mobileNav = document.querySelector("#mobile-nav");

function setNav(open) {
  mobileNav.classList.toggle("open", open);
  document.body.classList.toggle("nav-open", open);
  navToggle.setAttribute("aria-expanded", String(open));
  navToggle.setAttribute("aria-label", open ? "Close navigation" : "Open navigation");
}

navToggle.addEventListener("click", () => setNav(!mobileNav.classList.contains("open")));
mobileNav.addEventListener("click", (event) => {
  if (event.target.closest("a")) setNav(false);
});
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") setNav(false);
});
window.addEventListener("resize", () => {
  if (window.innerWidth >= 768 && mobileNav.classList.contains("open")) setNav(false);
});

document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", (event) => {
    const destination = document.querySelector(link.getAttribute("href"));
    if (!destination) return;
    event.preventDefault();
    destination.scrollIntoView({
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth",
      block: "start"
    });
  });
});

const revealItems = document.querySelectorAll(".reveal");
if ("IntersectionObserver" in window && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("visible");
        revealObserver.unobserve(entry.target);
      });
    },
    { threshold: 0.12 }
  );
  revealItems.forEach((item) => revealObserver.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add("visible"));
}

const demoModal = document.querySelector("#demo-modal");
const modalOpeners = document.querySelectorAll("[data-open-modal]");
const modalCloser = document.querySelector("#close-modal");

function setModal(open) {
  demoModal.classList.toggle("hidden", !open);
  demoModal.classList.toggle("flex", open);
  demoModal.setAttribute("aria-hidden", String(!open));
  if (open) modalCloser.focus();
}

modalOpeners.forEach((button) => button.addEventListener("click", () => setModal(true)));
modalCloser.addEventListener("click", () => setModal(false));
demoModal.addEventListener("click", (event) => {
  if (event.target === demoModal) setModal(false);
});
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && !demoModal.classList.contains("hidden")) setModal(false);
});

document.querySelector("#year").textContent = new Date().getFullYear();
