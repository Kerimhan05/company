// import Swiper from 'https://unpkg.com/swiper@8/swiper-bundle.esm.browser.min.js'

const swiper = new Swiper('.swiper', {
    // Navigation arrows
    navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
    },

    // And if we need scrollbar
});

let menuBtn = document.querySelector('.header__menu-btn');
let menu = document.querySelector('.menu');
menuBtn.addEventListener('click', function(){
    menu.classList.toggle('active');
})
