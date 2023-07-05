var ham = document.querySelector(".hambgr");
var dashav = document.querySelector(".dashboard-nav");
var cancel = document.querySelector(".cancel");
var profileClick = document.querySelector(".profile-click");
var profileOpt = document.querySelector(".profile-option");

ham.addEventListener("click", () => {
    dashav.classList.add("active")
});
cancel.addEventListener("click", () => {
    dashav.classList.remove("active")
});
profileClick.addEventListener("click", () => {
    profileOpt.classList.toggle("active")
});



