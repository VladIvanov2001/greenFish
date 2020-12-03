const galleryThumbs = new Swiper('.gallery-thumbs', {
    spaceBetween: 20,
    slidesPerView: 4,
    loop: true,
    freeMode: true,
    loopedSlides: 4,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

});
const galleryTop = new Swiper('.gallery-top', {
    spaceBetween: 10,
    loop: true,
    loopedSlides:4,
    thumbs: {
        swiper: galleryThumbs,
    },
});
