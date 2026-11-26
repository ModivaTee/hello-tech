// Footer year
document.getElementById("year").textContent = new Date().getFullYear();

// Header border on scroll
const header = document.querySelector(".site-header");
const onScroll = () => header.classList.toggle("scrolled", window.scrollY > 10);
window.addEventListener("scroll", onScroll, { passive: true });
onScroll();

// Mobile menu
const toggle = document.querySelector(".nav-toggle");
const nav = document.getElementById("nav");
toggle.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  toggle.setAttribute("aria-expanded", String(open));
});
nav.querySelectorAll("a").forEach((a) =>
  a.addEventListener("click", () => {
    nav.classList.remove("open");
    toggle.setAttribute("aria-expanded", "false");
  })
);

// "Enquire" buttons pre-select the package in the contact form
const packageSelect = document.getElementById("package-select");
document.querySelectorAll("[data-package]").forEach((btn) =>
  btn.addEventListener("click", () => { packageSelect.value = btn.dataset.package; })
);

// Gallery lightbox
const lightbox = document.getElementById("lightbox");
const lightboxImg = lightbox.querySelector("img");
document.querySelectorAll(".shot").forEach((shot) =>
  shot.addEventListener("click", () => {
    const img = shot.querySelector("img");
    lightboxImg.src = shot.dataset.full;
    lightboxImg.alt = img.alt;
    lightbox.showModal();
  })
);
lightbox.addEventListener("click", () => lightbox.close());

// Reveal on scroll
const revealEls = document.querySelectorAll(".card, .steps li, .shot, .price-card, .extra-card, .section-head, .about-photo");
if ("IntersectionObserver" in window) {
  const io = new IntersectionObserver(
    (entries) =>
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add("visible");
          io.unobserve(e.target);
        }
      }),
    { threshold: 0.12 }
  );
  revealEls.forEach((el) => {
    el.classList.add("reveal");
    io.observe(el);
  });
}

// Contact form
// To receive real submissions, set FORM_ENDPOINT to a form service URL
// (e.g. Formspree: https://formspree.io/f/your-id). Until then, the form
// opens the visitor's email app with the details pre-filled.
const FORM_ENDPOINT = "";
const CONTACT_EMAIL = "molujimi@gmail.com";

const form = document.getElementById("contact-form");
const status = form.querySelector(".form-status");

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  status.className = "form-status";

  let valid = true;
  form.querySelectorAll("[required]").forEach((el) => {
    const ok = el.value.trim() !== "" && (el.type !== "email" || /^\S+@\S+\.\S+$/.test(el.value));
    el.classList.toggle("invalid", !ok);
    if (!ok) valid = false;
  });
  if (!valid) {
    status.textContent = "Please fill in your name, a valid email, and the occasion.";
    status.classList.add("err");
    return;
  }

  const data = Object.fromEntries(new FormData(form));

  if (FORM_ENDPOINT) {
    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error();
      form.reset();
      status.textContent = "Thank you! We'll be in touch within one business day.";
      status.classList.add("ok");
    } catch {
      status.textContent = `Something went wrong. Please email us at ${CONTACT_EMAIL}.`;
      status.classList.add("err");
    }
    return;
  }

  const body = Object.entries(data)
    .filter(([, v]) => v)
    .map(([k, v]) => `${k[0].toUpperCase() + k.slice(1)}: ${v}`)
    .join("\n");
  window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
    `Event enquiry from ${data.name}`
  )}&body=${encodeURIComponent(body)}`;
  status.textContent = "Opening your email app…";
  status.classList.add("ok");
});
