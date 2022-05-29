const burger = document.querySelector("#ham");
const nav = document.querySelector(".nav");
const navItems = document.querySelectorAll(".nav-link");
const navClose = document.querySelector("#close_nav");

burger.addEventListener("click", () => {
  nav.classList.add("show");
});
for (const navItem of navItems) {
  navItem.addEventListener("click", () => {
    nav.classList.remove("show");
  });
}
navClose.addEventListener("click", () => nav.classList.remove("show"));

const faders = document.querySelectorAll(".fade-in");
const sliders = document.querySelectorAll(".slide-in");

const appearOptions = {
  threshold: 0,
  rootMargin: "0px 0px -100px 0px",
};

const appearOnScroll = new IntersectionObserver(function (
  entries,
  appearOnScroll
) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      return;
    } else {
      entry.target.classList.add("appear");
      appearOnScroll.unobserve(entry.target);
    }
  });
},
appearOptions);

faders.forEach((fader) => {
  appearOnScroll.observe(fader);
});

sliders.forEach((slider) => {
  appearOnScroll.observe(slider);
  // console.log(slider)
});

function show() {
  alert(
    "Thank you for submitting. Your message has been recieved and a reply would be sent shortly."
  );
}

// Sticky Navbar
const navbar = document.querySelector(".header");
let sticky = navbar.offsetTop;
const navbarScroll = () => {
  if (window.pageYOffset > sticky) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
};
window.onscroll = navbarScroll;
