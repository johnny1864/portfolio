"use strict";

window.addEventListener("load", function() {
  const nav = document.querySelector("nav");

  window.addEventListener("scroll", function() {
    let distanceScrolled = window.scrollY;

    if (distanceScrolled > 75) {
      nav.classList.add("scroll-nav");
    } else {
      nav.classList.remove("scroll-nav");
    }
  });
}); // END OF LOAD FUNCTION