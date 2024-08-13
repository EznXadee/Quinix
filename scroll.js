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
