const basketSwiper = new Swiper('.swiper-container-checked', {
    slidesPerView: 'auto',
    breakpoints: {
        0: {
            spaceBetween: 8
        },
        768: {
            spaceBetween: 15
        },
        1200: {
            spaceBetween: 31
        },
        1410: {
            spaceBetween: 32
        }
    }
});
