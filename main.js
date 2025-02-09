/** @format */

"use strict";

const nav = document.querySelector(".nav");
const navBtn = document.querySelector(".nav-toggle");

navBtn.addEventListener("click", function (e) {
  nav.classList.toggle("sticky");
});

// STICKY REMOVE 
const navs = document.querySelectorAll(".navs");
navs.forEach((button) => {
  button.addEventListener("click", function () {
    nav.classList.remove("sticky");
  });
});

// NAV ACTIVE 
const navLink = document.querySelectorAll(".navs");
navLink.forEach((link) => {
  link.addEventListener("click", () => {
    navLink.forEach((l) => l.classList.remove("navActive"));
    link.classList.add("navActive");
  });
});

// SLIDER
const slides = document.querySelectorAll(".slides");
const goToSlides = function (slide) {
  slides.forEach((s, index) => {
    s.style.transform = `translateX(${(index - slide) * 100}%)`;
  });
};
goToSlides(0);

let currentSlide = 0;
const maxSlide = slides.length - 1;
const nextslide = function () {
  if (currentSlide === maxSlide) {
    currentSlide = 0;
  } else {
    currentSlide++;
  }
  goToSlides(currentSlide);
};
setInterval(nextslide, 4000);

// SECTION REAVEAL
document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll(".section");
  const revealSection = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  };
  const observer = new IntersectionObserver(revealSection, {
    root: null,
    threshold: 0.1,
  });
  sections.forEach((section) => observer.observe(section));
});

const preloader = document.querySelector("#preloader");
if (preloader) {
  window.addEventListener("load", () => {
    preloader.remove();
  });
}
