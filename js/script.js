const menuBtn = document.querySelectorAll(".header-nav__btn");
const menu = document.querySelector(".header-nav");
const bla = document.querySelectorAll("div");
menuBtn.forEach((element) => {
  element.addEventListener("click", () => {
    menu.classList.toggle("show-menu");
  });
});
