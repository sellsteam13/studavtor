import Swiper, { Navigation } from 'swiper';
Swiper.use([Navigation]);

document.addEventListener('DOMContentLoaded', () => {
    if (document.querySelector('.reviews')) {
        const allSliders = document.querySelectorAll('.reviews-slider');
        allSliders.forEach(slider => {
            const swiperReviewsSlider = new Swiper(slider, {
                slidesPerView: 'auto',
                centeredSlides: true,
                spaceBetween: window.innerWidth < 631 ? 8 : 30,
                loop: true,
                navigation: {
                    prevEl: '.reviews-slider__prev',
                    nextEl: '.reviews-slider__next'
                }
            });
        });
    }
});