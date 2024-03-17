// Selecting DOM Elements:
let menuIcon = document.querySelector("#menu-bar-icone");
let navbar = document.querySelector(".navbar-container");

// Toggle Menu Icon and Navbar:
// When the menu icon is clicked (menuIcon.onclick), it toggles a class (fa-xmark) on the menu icon itself, 
// and it toggles an active class on the navbar container. This class toggling is achieved through classList.toggle() method.
menuIcon.onclick = () => {
  menuIcon.classList.toggle("fa-xmark");
  navbar.classList.toggle("active");
};

let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

// Scroll Event:
window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector(`header nav a[href*='${id}']`)
          .classList.add("active");
      });
    }
  });

  let header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 100);

  menuIcon.classList.remove("fa-xmark");
  navbar.classList.remove("active");
};

// Scroll Reveal Animation: The script uses the ScrollReveal library to animate certain elements on scroll.
ScrollReveal({
  distance: "80px",
  duration: 2000,
  delay: 200,
});

ScrollReveal().reveal(".home-container, heading", { origin: "top" });
ScrollReveal().reveal(
  ".home-img, .services-container, .project-card, .skills-container img, .certificates-card img",
  { origin: "bottom" }
);
ScrollReveal().reveal(".home-container h1, .about-img, .contact form", {
  origin: "left",
});
ScrollReveal().reveal(".home-container p, .about-container", {
  origin: "right",
});





// The JavaScript code handles the following functionalities:

// Toggling the mobile menu.
// Highlighting the active section in the navigation menu as the user scrolls.
// Adding a sticky behavior to the header on scroll.
// Animating certain elements on scroll using the ScrollReveal library.