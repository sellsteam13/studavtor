import Swiper, { Navigation } from 'swiper';
Swiper.use([Navigation]);

document.addEventListener('DOMContentLoaded', () => {
    if (document.querySelector('.help-slider') && window.innerWidth > 1180) {
        const sliderInners = document.querySelectorAll('.help-slider-track');
        sliderInners.forEach(slider => {
            const swiperSlider = new Swiper(slider, {
                slidesPerView: 4,
                spaceBetween: 12,
                loop: true,
                autoHeight: true,
                navigation: {
                    nextEl: '.help-slider__next',
                    prevEl: '.help-slider__prev'
                }
            });
        });
    }
});