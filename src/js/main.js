'use strict';
window.addEventListener('DOMContentLoaded', () => {
    const mainSlidesCount = document.querySelectorAll('.main-slider__item');
    const mainSlidesDup = document.querySelectorAll('.swiper-slide-duplicate');
    const swiperMain = new Swiper('.main-slider__wrapper', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,
        watchSlidesProgress: true,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        // If we need pagination
        pagination: {
          el: '.main-slider__pagination',
          type: 'bullets',
          clickable: true,
          progressbarOpposite: true,
          renderBullet: function (index, className) {
            return `<span class="main-slider__dot swiper-pagination-bullet"></span>`;
          },
        },
      
        // Navigation arrows
      
        // And if we need scrollbar
        scrollbar: {
          el: '.swiper-scrollbar',
        },
        on: {
            slideChange: function(){
                const offer = document.querySelector('.main-slider__current');
                const dots = document.querySelectorAll('.main-slider__dot');
                dots.forEach((item,i) => {
                    if(item.classList.contains('swiper-pagination-bullet-active')) {
                        offer.innerText = i + 1 +'/4';
                    }
                });
            }
        },
      });
      const swiperSub = new Swiper('.sub-slider__wrapper', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,
        slidesPerView: 2,
        slidesPerGroup: 1,
        watchSlidesProgress: true,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        
        // Navigation arrows
        pagination: {
          el: '.sub-slider__counter',
          type: 'fraction',
        },
        navigation: {
          
          nextEl: '#sub-slider-next',
          prevEl: '#sub-slider-prev',
        },
        breakpoints: {
          320: {
              slidesPerView: 1,
              spaceBetween: 0,
          },
          1024: {
            slidesPerView: 2,
            slidesPerGroup: 1,
          }
        },
        // And if we need scrollbar
        scrollbar: {
          el: '.swiper-scrollbar',
        },
        on: {
            slideChange: function(){
              const subSliderBar = document.querySelector('.sub-slider__timer');
            }
        },
      });
});