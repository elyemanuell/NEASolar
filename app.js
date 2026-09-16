// NEASolar — interacción de interfaz
const WHATSAPP_NUMBER = "5493756000000"; // Reemplazar por el número real antes de publicar.
const WHATSAPP_MESSAGE = "Hola, quiero solicitar un relevamiento energético con NEASolar.";

function whatsappLink() {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;
}

document.querySelectorAll(".js-whatsapp").forEach((el) => {
  el.setAttribute("href", whatsappLink());
});

const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = new Date().getFullYear();

document.querySelectorAll(".faq-question").forEach((button) => {
  button.addEventListener("click", () => {
    const expanded = button.getAttribute("aria-expanded") === "true";
    const answer = button.nextElementSibling;
    button.setAttribute("aria-expanded", String(!expanded));
    answer.style.maxHeight = expanded ? null : `${answer.scrollHeight}px`;
  });
});

const menuToggle = document.querySelector(".menu-toggle");
const mobileNav = document.querySelector(".mobile-nav");

if (menuToggle && mobileNav) {
  menuToggle.addEventListener("click", () => {
    const open = menuToggle.getAttribute("aria-expanded") === "true";
    menuToggle.setAttribute("aria-expanded", String(!open));
    mobileNav.classList.toggle("open", !open);
  });

  mobileNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      menuToggle.setAttribute("aria-expanded", "false");
      mobileNav.classList.remove("open");
    });
  });
}
