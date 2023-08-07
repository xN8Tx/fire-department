"use strict";

const burgerHandler = () => {
  const burger = document.querySelector(".header__fixed_burger");
  const menu = document.querySelector(".header__menu");

  burger.addEventListener("click", () => {
    burger.classList.toggle("active");
    menu.classList.toggle("active");
  });
};

const fixedHeaderHandler = () => {
  const fixedHeader = document.querySelector(".header__fixed");

  window.addEventListener("scroll", (event) => {
    if (window.scrollY) {
      if (scrollY > 550) {
        fixedHeader.classList.add("active");
      }
      if (scrollY < 550) {
        fixedHeader.classList.remove("active");
      }
    }
  });
};

document.addEventListener("DOMContentLoaded", () => {
  // HEADER
  burgerHandler();
  fixedHeaderHandler();
});
