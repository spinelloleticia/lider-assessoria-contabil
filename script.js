// ========================================
// LÍDER ASSESSORIA CONTÁBIL
// Funcionalidades do site
// ========================================

// WhatsApp: código do Brasil + DDD 97 + número
const WHATSAPP_NUMBER = "5597981175782";

const whatsappMessage =
  "Olá! Vim pelo site da Líder Assessoria Contábil e gostaria de mais informações.";

// Função para abrir o WhatsApp
function openWhatsApp(message = whatsappMessage) {
  const url =
    `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

  window.open(url, "_blank", "noopener,noreferrer");
}

// Botões gerais de WhatsApp
document.querySelectorAll("[data-whatsapp]").forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    openWhatsApp();
  });
});

// Botões específicos de cada serviço
document.querySelectorAll("[data-service]").forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();

    const service = link.dataset.service;

    const message =
      `Olá! Vim pelo site da Líder Assessoria Contábil e gostaria de informações sobre ${service}.`;

    openWhatsApp(message);
  });
});

// Menu para celulares
const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");

if (menuToggle && nav) {
  menuToggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("open");

    menuToggle.setAttribute("aria-expanded", String(isOpen));

    menuToggle.setAttribute(
      "aria-label",
      isOpen ? "Fechar menu" : "Abrir menu"
    );
  });

  // Fecha o menu depois que a pessoa escolhe uma seção
  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("open");

      menuToggle.setAttribute("aria-expanded", "false");
      menuToggle.setAttribute("aria-label", "Abrir menu");
    });
  });
}

// Atualiza automaticamente o ano do rodapé
const yearElement = document.getElementById("year");

if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}

// Animação suave dos cartões ao aparecerem na tela
const cards = document.querySelectorAll(
  ".value-card, .service-card, .team-members article, .check-item"
);

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.12
    }
  );

  cards.forEach((card) => {
    card.classList.add("reveal");
    observer.observe(card);
  });
} else {
  cards.forEach((card) => {
    card.classList.add("visible");
  });
}