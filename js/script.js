const menuBtn = document.querySelector(".header-nav__btn");
const menu = document.querySelector(".header-nav__list");

menuBtn.addEventListener("click", () => {
  menu.classList.toggle("show-menu");
});
