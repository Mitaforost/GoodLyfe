$(document).ready(function () {
    $(".carousel__inner").slick({
        arrows: false,
        dots: true,
        autoplay: true,
        autoplaySpeed: 5000,
    });
});
const hamburger = document.querySelector('.header__hamburger'),
    menu = document.querySelector('.header__active'),
    closeElement = document.querySelector('.menu__close');

hamburger.addEventListener('click', () =>{
    menu.classList.add('active');
});
closeElement.addEventListener('click', () =>{
    menu.classList.remove('active');
});