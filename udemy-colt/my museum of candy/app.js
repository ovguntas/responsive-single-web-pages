let lastKnownScrollPosition = 0;
let ticking = false;
const navbar = document.querySelector("#mainNavbar");

function changeNavbar() {
    navbar.classList.add("scrolledNavbar")
}

document.addEventListener('scroll', function (e) {
    lastKnownScrollPosition = window.scrollY;
    if (lastKnownScrollPosition != 0) {
        changeNavbar();
    } else {
        navbar.classList.remove("scrolledNavbar")
    }
});