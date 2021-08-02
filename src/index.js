import "./styles.css";

// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the header
var header = document.getElementById("header");
var hero = document.getElementById("hero")
var heroWave = document.getElementById("hero-wave")
// Get the offset position of the navbar
var sticky = header.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
    if (window.pageYOffset > heroWave.offsetTop) {
        header.classList.add("shadow-xl");
    } else {
        header.classList.remove("shadow-xl");
    }
}

const menuButton = document.getElementById("menu-button")
const menu = document.getElementById("mobile-menu")
const backdrop = document.getElementById("backdrop")

menuButton.addEventListener("click", () => {
    menu.classList.toggle("hidden")
    backdrop.classList.toggle("hidden")
})

backdrop.addEventListener("click", () => {
    menu.classList.toggle("hidden")
    backdrop.classList.toggle("hidden")
})

menu.addEventListener("click", () => {
    menu.classList.toggle("hidden")
    backdrop.classList.toggle("hidden")
})