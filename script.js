let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};

let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach((link) => {
        link.classList.remove("active");

        let activeLink = document.querySelector(
          'header nav a[href*="' + id + '"]',
        );

        if (activeLink) {
          activeLink.classList.add("active");
        }
      });
    }
  });

  menuIcon.classList.remove("bx-x");
  navbar.classList.remove("active");
};

const typingText = document.querySelector(".typing-text");

const words = [
  "PPLG Student",
  "Programmer",
  "Web Developer",
  "Flutter Developer",
  "UI/UX Disigner",
  "Creative Learner",
  "Investor Saham",
];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect() {
  let currentWord = words[wordIndex];

  if (deleting) {
    typingText.textContent = currentWord.substring(0, charIndex--);
  } else {
    typingText.textContent = currentWord.substring(0, charIndex++);
  }

  let speed = deleting ? 70 : 120;

  if (!deleting && charIndex === currentWord.length + 1) {
    deleting = true;
    speed = 1200;
  } else if (deleting && charIndex === 0) {
    deleting = false;
    wordIndex++;

    if (wordIndex === words.length) {
      wordIndex = 0;
    }

    speed = 400;
  }

  setTimeout(typeEffect, speed);
}

typeEffect();

const form = document.querySelector(".contact form");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  alert(
    "Pesan berhasil disiapkan. Silakan hubungkan form ini dengan WhatsApp atau backend jika ingin pesan benar-benar terkirim.",
  );
});
