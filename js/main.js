let navBtn = document.querySelector(".header__burger-container");
let navList = document.querySelector("header ul");
let navItems = document.querySelectorAll(".header__list");
let navBurger = document.querySelector(".header__burger");

navBtn.addEventListener("click", toggleBtn);

function toggleBtn() {
  navList.classList.toggle("open");
  navBurger.classList.toggle("open");
  navItems.forEach((item) => item.classList.toggle("open"));
}
