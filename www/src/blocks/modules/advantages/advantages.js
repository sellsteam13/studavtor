// import Swiper, { Navigation, EffectFade } from 'swiper';
// Swiper.use([Navigation]);

// document.addEventListener('DOMContentLoaded', () => {
//     if (document.querySelector('.advantages') && window.innerWidth < 1181) {
//         const wrapper = document.querySelector('.advantages');
//         const sliderInner = wrapper.querySelector('.advantages-list');

//         const sliderWrapper = document.createElement('div');
//         sliderWrapper.className = 'swiper-wrapper';

//         const slides = sliderInner.querySelectorAll('.advantages-list__item');

//         slides.forEach(slide => {
//             slide.classList.add('swiper-slide');
//             sliderWrapper.appendChild(slide);
//         });

//         sliderInner.style.overflow = 'hidden';
//         sliderInner.appendChild(sliderWrapper);

//         const swiperSlider = new Swiper(sliderInner, {
//             // slidesPerColumn: 3,
//             slidesPerView: 3,
//             loop: false,
//             slidesPerColumnFill: 'column'
//         });
//     }
// });