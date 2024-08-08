document.addEventListener('DOMContentLoaded', function () {

var swiper = new Swiper(".slide-content", {
    slidesPerView: 4,
    spaceBetween: 30,
    loop: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      
    centeredSlide: 'true',
    
    grabCursor: 'true',
    
    
  });
});