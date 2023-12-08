// navbar Fix
window.onscroll = function () {
  const header = document.querySelector("header");
  const fixedNav = header.offsetTop;

  if (window.pageYOffset > fixedNav) {
    header.classList.add("navbar-fixed");
  } else {
    header.classList.remove("navbar-fixed");
  }
};

// Hamburger
const humburger = document.querySelector("#hamburger");
const navMenu = document.querySelector("#nav-menu");

hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("hamburger-active");
  navMenu.classList.toggle("hidden");
});

//download
document
  .getElementById("downloadButton")
  .addEventListener("click", function () {
    window.location.href = "dist/CV/CV Muhammad Fikri Ramadhan.pdf";
  });
document
  .getElementById("downloadButton1")
  .addEventListener("click", function () {
    window.location.href = "dist/CV/CV Muhammad Fikri Ramadhan.pdf";
  });
