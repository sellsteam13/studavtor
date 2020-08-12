document.addEventListener('DOMContentLoaded', () => {
    if (document.querySelector('.header.is-transparent')) {
        const body = document.body;
        const header = document.querySelector('.header');
        window.addEventListener('scroll', () => {
            if (body.getBoundingClientRect().top < -88) {
                header.classList.remove('is-transparent');
            } else {
                header.classList.add('is-transparent');
            }
        });
    }
    if (document.querySelector('.header__burger')) {
        const body = document.body;
        document.querySelector('.header__burger').addEventListener('click', () => {
            body.classList.toggle('mobile-menu-opened');
        });
    }
});