// script.js

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

// Toggle the 'active' class on click
hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
});

// Close the menu when a link is clicked
document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}));