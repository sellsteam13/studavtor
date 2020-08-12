document.addEventListener('DOMContentLoaded', () => {
    if (document.querySelector('.filter-promocode__btn')) {
        document.querySelector('.filter-promocode__btn').addEventListener('click', (e) => {
            e.preventDefault();
            document.querySelector('.filter-promocode').classList.add('is-opened');
            document.querySelector('.filter-promocode input').focus();
        });
    }
});