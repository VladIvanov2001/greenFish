const galleryThumbs = new Swiper('.gallery-thumbs', {
    spaceBetween: 5,
    slidesPerView: 5,
    loop: true,
    freeMode: true,
    loopedSlides: 3,
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
    loopedSlides:3,
    thumbs: {
        swiper: galleryThumbs,
    },
});
