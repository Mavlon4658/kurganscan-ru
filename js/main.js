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

barsBtn.onclick = () => {
    mobileMenu.classList.toggle('hidden');
    barsBtn.querySelectorAll('img').forEach(el => {
        el.classList.toggle('hidden');
    })
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