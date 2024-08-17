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