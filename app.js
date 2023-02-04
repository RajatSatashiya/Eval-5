const locationTitle = document.querySelector(".location");
const hideLogo = document.querySelector(".hide");
const navLinks = document.querySelectorAll(".nav-link");
const navbar = document.querySelector("nav");

window.addEventListener("scroll", () => {
  if (window.scrollY >= locationTitle.offsetTop) {
    hideLogo.style.visibility = "visible";
  } else if (window.scrollY < locationTitle.offsetTop) {
    hideLogo.style.visibility = "hidden";
  }
});

navLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();

    const id = e.target.getAttribute("href").slice(1);
    const element = document.getElementById(id);
    const position = element.offsetTop;

    window.scrollTo({
      top: position - navbar.getBoundingClientRect().height,
    });
  });
});
