let searchBtn = document.querySelector('#search-btn');
let searchBar = document.querySelector('.search-bar-container');

let formBtn = document.querySelector('#login-btn');
let loginForm = document.querySelector('.login-form-container');
let formClose = document.querySelector('#form-close');
let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');
let videoBtn = document.querySelectorAll('.vid-btn');

window.onscroll = () => {
    searchBtn.classList.remove('fa-times');
    searchBar.classList.remove('active');
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
    loginForm.classList.remove('active');

}
menu.addEventListener('click', () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
});
searchBtn.addEventListener('click', () => {
    searchBtn.classList.toggle('fa-times');
    searchBar.classList.toggle('active');
});
formBtn.addEventListener('click', () => {
    loginForm.classList.add('active');

});
formClose.addEventListener('click', () => {
    loginForm.classList.remove('active');

});


videoBtn.forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelector('.controls .active').classList.remove('active');
        btn.classList.add('active');
        let src = btn.getAttribute('data-src');
        document.querySelector('#video-slider').src = src;
    });
});
//  var swiper = new Swiper(".review-slider", {
//      spaceBetween: 20,
//      loop:true,
//  });



// images 

// var slides = document.querySelector('.slider-items').children;
// var nexSlide = document.querySelector('.right-slide');
// var preSlide = document.querySelector('.left-slide');
// var totalSlides = slides.length;
// var index = 0;

// nexSlide.onclick = function () {
//     next('next');
// }
// preSlide.onclick = function () {
//     next('prev');
// }
// function next(direction) {
//     if (direction == 'next') {
//         index++;
//         if (index == totalSlides) {
//             index = 0;
//         }
//     }
//     else {
//         if (index == 0) {
//             index = totalSlides - 1;
//         }
//         else {
//             index--;
//         }
//     }
//     for (i = 0; i < slides.length; i++) {
//         slides[i].classList.remove('active');
//     }
//     slides[index].classList.add('active');
// }
// setInterval(next, 7000);


// images 