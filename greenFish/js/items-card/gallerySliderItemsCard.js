const galleryThumbs = new Swiper('.gallery-thumbs', {
    spaceBetween: 13,
    slidesPerView: 'auto',
    freeMode: true
});
const galleryTop = new Swiper('.gallery-top', {
    spaceBetween: 10,
    slidesPerView: 'auto',
    loop: true,
    thumbs: {
        swiper: galleryThumbs,
    },
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    }
});

const paletteItems = document.querySelectorAll('.item-card__palette__colors-item');
const sizeItems = document.querySelectorAll('.item-card__size__params-item')
const paletteValue = document.querySelector('.palette-number');
const mainPictureOnSlider = document.querySelectorAll('.gallery-top .swiper-slide[data-swiper-slide-index="0"] img');
const minusBtn = document.querySelector('.item-card__count__choice-amount-minus');
const plusBtn = document.querySelector('.item-card__count__choice-amount-plus');
const itemsCounter = document.querySelector('.item-card__count__choice-number')
const thumbGalleryFirstItem = document.querySelector('.gallery-thumbs .swiper-slide:first-child img')

paletteItems.forEach((paletteItem) => {
    paletteItem.addEventListener('click', () => {
        paletteItems.forEach((paletteItem) => {
            paletteItem.classList.remove('active-palette');
        });
        paletteValue.textContent = `#${paletteItem.getAttribute('data-value')}`;
        paletteItem.classList.add('active-palette');
        mainPictureOnSlider.forEach((galleryItem) => {
            galleryItem.src = paletteItem.firstElementChild.src;
        })
        thumbGalleryFirstItem.src = paletteItem.firstElementChild.src;
    })
});

sizeItems.forEach(size => {
    size.addEventListener('click', () => {
        sizeItems.forEach(size => {
            size.classList.remove('active-palette');
        });
        size.classList.add('active-palette');
    })
})

minusBtn.addEventListener('click', () => {
    let counter = itemsCounter.textContent;
    if (+counter > 1) {
        itemsCounter.textContent = `${--counter}`;
    }
})


plusBtn.addEventListener('click', () => {
    let counter = itemsCounter.textContent;
    itemsCounter.textContent = `${++counter}`;
})


const reviewThumbs = new Swiper('.review-thumbs', {
    spaceBetween: 5,
    slidesPerView: 4,
    loop: true,
    freeMode: true,
    loopedSlides: 4,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,

});
const reviewTop = new Swiper('.review-top', {
    spaceBetween: 10,
    loop: true,
    loopedSlides: 4,
    thumbs: {
        swiper: reviewThumbs,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

const swiperForItem = new Swiper('.items-choice-customers', {
    slidesPerView: 'auto',
    breakpoints: {
        0: {
            spaceBetween: 8
        },
        1200: {
            spaceBetween: 15
        }
    }
});

const swiperForReview = new Swiper('.reviews-pictures', {
    slidesPerView: 1,
    spaceBetween: 10,
    freeMode: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});

