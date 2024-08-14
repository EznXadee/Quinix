// JavaScript to add/remove the 'scrolled' class on scroll
document.addEventListener("DOMContentLoaded", function() {
    const navbar = document.getElementById("navbar-section");

    window.addEventListener("scroll", function() {
        if (window.scrollY > 50) { // Adjust this value as needed
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }
    });
});

// Select the hamburger button and the sidebar menu
const hamBurger = document.getElementById('ham-burger');
const sideBarMenu = document.getElementById('sidebar-menu');

// Add an event listener to the hamburger button
hamBurger.addEventListener('click', () => {
    // Toggle the 'show' class on the sidebar menu
    sideBarMenu.classList.toggle('show');
});
