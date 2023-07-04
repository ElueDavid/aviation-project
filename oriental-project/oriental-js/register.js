var menu = document.querySelector(".menu");
var navLinks = document.querySelector(".nav-links");
menu.addEventListener("click", () => {
    menu.classList.toggle("active")
    navLinks.classList.toggle("active")
})