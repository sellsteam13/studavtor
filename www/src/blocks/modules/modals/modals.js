document.addEventListener('DOMContentLoaded', () => {
    modalBind('.modal-fb', '.call-fb');
    modalBind('.modal-thanks', '.call-thanks');
    modalBind('.modal-filter', '.call-filter');
});


const modalBind = (modal, trigger) => {
    const modals = document.querySelectorAll('.modal');
    const overlay = document.querySelector('.overlay');
    const body = document.body;
    const currTriggers = document.querySelectorAll(trigger);
    const currModal = document.querySelector(modal);
    const closeBtns = currModal.querySelectorAll('.modal-close');
    currTriggers.forEach(each => {
        each.addEventListener('click', (e) => {
            e.preventDefault();
            if (!body.classList.contains('overlay-toggled')) {
                overlay.style.display = 'flex';
                currModal.style.display = 'flex';
                setTimeout(() => {
                    body.style.overflow = 'hidden';
                    body.classList.add('overlay-toggled');
                    currModal.classList.add('animated');
                }, 50);
            } else {
                modals.forEach(key => {
                    key.classList.remove('animated');
                    setTimeout(() => {
                        key.style.display = 'none';
                    }, 300);
                });
                setTimeout(() => {
                    currModal.style.display = 'flex';
                    setTimeout(() => {
                        currModal.classList.add('animated');
                    }, 50);
                }, 350);
            }
        });
        document.body.addEventListener('click', (evnt) => {
            if (evnt.target.classList.contains('overlay')) {
                body.style.overflow = '';
                body.classList.remove('overlay-toggled');
                modals.forEach(key => {
                    key.classList.remove('animated');
                });
                setTimeout(() => {
                    overlay.style.display = 'none';
                    currModal.style.display = 'none';
                }, 300);
            }
        });
    });
    closeBtns.forEach(closeBtn => {
        closeBtn.addEventListener('click', (e) => {
            e.preventDefault();
            body.style.overflow = '';
            body.classList.remove('overlay-toggled');
            modals.forEach(key => {
                key.classList.remove('animated');
            });
            setTimeout(() => {
                overlay.style.display = 'none';
                currModal.style.display = 'none';
            }, 300);
        });
    });
};


const callModal = (modal) => {
    const modals = document.querySelectorAll('.modal');
    const overlay = document.querySelector('.overlay');
    const body = document.body;
    const currModal = document.querySelector(modal);
    const closeBtns = currModal.querySelectorAll('.modal-close');

    /** main func */
    if (!body.classList.contains('overlay-toggled')) {
        overlay.style.display = 'flex';
        currModal.style.display = 'flex';
        setTimeout(() => {
            body.style.overflow = 'hidden';
            body.classList.add('overlay-toggled');
            currModal.classList.add('animated');
        }, 50);
    } else {
        modals.forEach(key => {
            key.classList.remove('animated');
            setTimeout(() => {
                key.style.display = 'none';
            }, 300);
        });
        setTimeout(() => {
            currModal.style.display = 'flex';
            setTimeout(() => {
                currModal.classList.add('animated');
            }, 50);
        }, 350);
    }

    /** click out of container */
    document.body.addEventListener('click', (evnt) => {
        if (evnt.target.classList.contains('overlay')) {
            body.style.overflow = '';
            body.classList.remove('overlay-toggled');
            modals.forEach(key => {
                key.classList.remove('animated');
            });
            setTimeout(() => {
                overlay.style.display = 'none';
                currModal.style.display = 'none';
            }, 300);
        }
    });

    /** close btn */
    closeBtns.forEach(closeBtn => {
        closeBtn.addEventListener('click', (e) => {
            e.preventDefault();
            body.style.overflow = '';
            body.classList.remove('overlay-toggled');
            modals.forEach(key => {
                key.classList.remove('animated');
            });
            setTimeout(() => {
                overlay.style.display = 'none';
                currModal.style.display = 'none';
            }, 300);
        });
    });
};

window.callModal = callModal;

window.modalBind = modalBind;