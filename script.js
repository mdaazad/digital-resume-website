// Show current year in footer
const year = document.querySelector("#year");

if (year) {
    year.innerText = new Date().getFullYear();
}

const greeting = document.querySelector("#greeting");

if (greeting) {

    const hour = new Date().getHours();

    if (hour < 12) {
        greeting.innerText = "Good Morning ☀️";
    }
    else if (hour < 18) {
        greeting.innerText = "Good Afternoon 🌤️";
    }
    else {
        greeting.innerText = "Good Evening 🌙";
    }

}

// Dark / Light mode toggle
const themeToggle = document.querySelector("#themeToggle");

// Load saved theme on every page
if (localStorage.getItem("theme") === "light") {
    document.body.classList.add("light-mode");
}

// Toggle theme when button is clicked
if (themeToggle) {
    themeToggle.addEventListener("click", function () {
        document.body.classList.toggle("light-mode");

        if (document.body.classList.contains("light-mode")) {
            localStorage.setItem("theme", "light");
        } else {
            localStorage.setItem("theme", "dark");
        }
    });
}

// Highlight active navigation link
const navLinks = document.querySelectorAll("nav a");
const currentPage = window.location.pathname.split("/").pop();

navLinks.forEach(function(link) {
    if (link.getAttribute("href") === currentPage) {
        link.classList.add("active-link");
    }
});

// Back to Top button
const backToTopButton = document.createElement("button");
backToTopButton.innerText = "↑ Top";
backToTopButton.id = "backToTop";

document.body.appendChild(backToTopButton);

backToTopButton.addEventListener("click", function() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});