const burger = document.querySelector(".burger");
const nav = document.querySelector("nav");
const navEl = document.querySelector("[data-NavEl]").children;
const toggleNav = () => {
  if (window.innerWidth < 600) {
    nav.classList.toggle("none");
    document.body.classList.toggle("fixed-body");
    if (burger.children[0].classList.contains("fa-bars")) {
      burger.children[0].classList.remove("fa-bars");
      burger.children[0].classList.add("fa-times-circle");
    } else {
      burger.children[0].classList.remove("fa-times-circle");
      burger.children[0].classList.add("fa-bars");
    }
  }
};
const NavElList = Array.from(navEl);

burger.addEventListener("click", () => toggleNav());
NavElList.forEach((e) => {
  e.addEventListener("click", () => toggleNav());
});
