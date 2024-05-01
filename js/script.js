let burger_btn = document.querySelector('.hamburger');
let header_top = document.querySelector('.nav__links');

function burger() {
    burger_btn.classList.toggle('hamburger_active');
    header_top.classList.toggle('nav__links_active');
}
burger_btn.addEventListener("click", burger);