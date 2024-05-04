/////////////Burger
let burger_btn = document.querySelector(".hamburger");
let cross_btn = document.querySelector(".cross");
let menu = document.querySelector(".hamburger__menu");
function burgerOpen() {
  menu.classList.toggle("hamburger__menu_active");
}
burger_btn.addEventListener("click", burgerOpen);

function burgerClose() {
  menu.classList.toggle("hamburger__menu_active");
}
cross_btn.addEventListener("click", burgerClose);

//////////////////////WORKS

let more_btn = document.querySelector(".works__more");
let images = document.querySelectorAll(".works__image");

function imageHidden() {
  let hiddenImages = document.querySelectorAll(".works__image_hidden");
  let visibleImages = document.querySelectorAll(
    ".works__image:not(.works__image_hidden)"
  );
  let countToShow = 5;

  if (hiddenImages.length > 0) {
    for (let i = 0; i < countToShow && i < hiddenImages.length; i++) {
      hiddenImages[i].classList.remove("works__image_hidden");
    }
  } else {
    let countToHide = Math.min(visibleImages.length, 5);
    for (
      let i = visibleImages.length - 1;
      i >= visibleImages.length - countToHide;
      i--
    ) {
      visibleImages[i].classList.add("works__image_hidden");
    }
  }
}

more_btn.addEventListener("click", imageHidden);

//////////////////////Accordion

let accordion_btns = document.querySelectorAll(".footer__inner");
let accordion_inner = document.querySelectorAll(".footer__list");
let plus = document.querySelectorAll(".plus");

accordion_btns.forEach(function (accordion_btn, index) {
  accordion_btn.addEventListener("click", function () {
    accordion_inner[index].classList.toggle("footer__inner_active");
    plus[index].classList.toggle("plus_active");

    if (accordion_inner[index].style.maxHeight) {
        accordion_inner[index].style.maxHeight = null;
    } else {
        accordion_inner[index].style.maxHeight = accordion_inner[index].scrollHeight + "px";
    }
  });
});
