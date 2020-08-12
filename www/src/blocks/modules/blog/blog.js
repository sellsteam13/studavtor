import Swiper, { Navigation } from 'swiper';
Swiper.use([Navigation]);

document.addEventListener('DOMContentLoaded', () => {
    if (document.querySelector('.blog-simillar-slider')) {
        const sliderInners = document.querySelectorAll('.blog-simillar-slider');
        sliderInners.forEach(slider => {
            const swiperSlider = new Swiper(slider, {
                slidesPerView: window.innerWidth > 1180 ? 4 : 'auto',
                centeredSlides: window.innerWidth > 1180 ? false : true,
                spaceBetween: window.innerWidth > 1180 ? 20 : 9,
                loop: true,
                autoHeight: true,
                navigation: {
                    nextEl: '.blog-simillar-slider__next',
                    prevEl: '.blog-simillar-slider__prev'
                }
            });
        });
    }
});