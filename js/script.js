const menuBtn = document.querySelectorAll(".header-nav__btn");
const menu = document.querySelector(".header-nav");
// const hideMenuBtn = document.querySelector(".header-nav__btn--hide");
const bla = document.querySelectorAll("div");
menuBtn.forEach((element) => {
  element.addEventListener("click", () => {
    menu.classList.toggle("show-menu");
  });
});
