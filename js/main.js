const overflowHidden = () => {
    document.querySelector('body').style.overflow = 'hidden';
}

const overflowVisible = () => {
    document.querySelector('body').style.overflow = 'visible';
}

let newSwp = new Swiper('.newSwp', {
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    pagination: {
        el: '.newSwp-paginatoin',
        clickable: true,
    },
    navigation: {
        nextEl: '.newSwp-btnNext',
        prevEl: '.newSwp-btnPrev',
    }
})

let barsBtn = document.querySelector('.bars_btn'),
    mobileMenu = document.querySelector('.mobile_menu');

if (barsBtn) {
    barsBtn.onclick = () => {
        mobileMenu.classList.toggle('hidden');
        barsBtn.querySelectorAll('img').forEach(el => {
            el.classList.toggle('hidden');
        })
    }
}

let areaSwp = new Swiper('.area .swiper', {
    slidesPerView: 1,
    spaceBetween: 25,
    breakpoints: {
        1024: {
            slidesPerView: 4,
        },
        700: {
            slidesPerView: 3,
        },
        500: {
            slidesPerView: 2,
        },
    },
    pagination: {
        el: '.area .swp-pagination',
        clickable: true,
    }
})

let conditionChildSwp = new Swiper('.condition-child-swp', {
    slidesPerView: 5,
    spaceBetween: 7,
    breakpoints: {
        1024: {
            spaceBetween: 11,
        }
    },
})

let conditionParentSwp = new Swiper('.condition-parent-swp', {
    slidesPerView: 1,
    effect: 'fade',
    loop: true,
    navigation: {
        nextEl: '.condition-child-swp-next',
        prevEl: '.condition-child-swp-prev',
    },
    thumbs: {
        swiper: conditionChildSwp,
    },
})

let clientSwpChild = new Swiper('.client-child-swp', {
    slidesPerView: 5,
    spaceBetween: 7,
    breakpoints: {
        1024: {
            slidesPerView: 4,
            spaceBetween: 12,
        }
    }
})

let clientSwpParent = new Swiper('.client-swp-parent', {
    slidesPerView: 1,
    effect: 'fade',
    loop: true,
    navigation: {
        nextEl: '.client-child-swp-next',
        prevEl: '.client-child-swp-prev',
    },
    thumbs: {
        swiper: clientSwpChild,
    }
})

let modalSwpChild = new Swiper('.modal-child-swp', {
    slidesPerView: 5,
    spaceBetween: 7,
    breakpoints: {
        1024: {
            slidesPerView: 4,
            spaceBetween: 12,
        }
    }
})

let modalSwpParent = new Swiper('.modal-swp-parent', {
    slidesPerView: 1,
    effect: 'fade',
    loop: true,
    navigation: {
        nextEl: '.modal-child-swp-next',
        prevEl: '.modal-child-swp-prev',
    },
    thumbs: {
        swiper: modalSwpChild,
    }
})

let modalClass = ['.seel-overlay', '.job-overlay', '.overlay', '.service-overlay', '.form-result', '.auto-modal'];

modalClass.forEach(cls => {
    let modal = document.querySelector(cls),
        modalClose = document.querySelector(cls + ' .main-modal__close'),
        modalOpen = document.querySelectorAll(cls + '__open');

    if (modalOpen.length) {
        modalOpen.forEach(el => {
            el.onclick = e => {
                e.preventDefault();
                modal.classList.remove('hidden');
                modal.classList.add('flex');
                overflowHidden();
            }
        })
    }

    if (modalClose) {
        modalClose.onclick = () => {
            modal.classList.remove('flex');
            modal.classList.add('hidden');
            overflowVisible();
        }
    }
})