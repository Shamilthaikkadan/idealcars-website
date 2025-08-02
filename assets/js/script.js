const menuBtn = document.getElementById("menuBtn");
const navItems = document.getElementById("navItems");

// Toggle nav visibility
menuBtn.addEventListener("click", (e) => {
  e.stopPropagation(); // Prevent event from bubbling to body
  navItems.classList.toggle("show");
});

// Close on outside click
document.body.addEventListener("click", (e) => {
  if (!navItems.contains(e.target) && !menuBtn.contains(e.target)) {
    navItems.classList.remove("show");
  }
});

// Highlight active nav item based on current page
const navLinks = document.querySelectorAll(".nav_items li a");
const currentPage = window.location.pathname.split("/").pop(); // Get current file name

navLinks.forEach((link) => {
  const linkPage = link.getAttribute("href");
  if (
    linkPage === currentPage ||
    (linkPage === "index.html" && currentPage === "")
  ) {
    link.parentElement.classList.add("active");
  } else {
    link.parentElement.classList.remove("active");
  }
});

// Hide preloader after full page (including images) is loaded
window.addEventListener("load", () => {
  const preloader = document.getElementById("preloader");
  if (preloader) {
    preloader.classList.add("hide");
    setTimeout(() => preloader.remove(), 500);
  }
});