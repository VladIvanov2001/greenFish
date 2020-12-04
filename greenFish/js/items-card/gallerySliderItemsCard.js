const galleryThumbs = new Swiper('.gallery-thumbs', {
    spaceBetween: 5,
    slidesPerView: 5,
    loop: true,
    freeMode: true,
    loopedSlides: 5,
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
    loopedSlides: 5,
    thumbs: {
        swiper: galleryThumbs,
    },
});

const paletteItems = document.querySelectorAll('.item-card__palette__colors-item');
const sizeItems = document.querySelectorAll('.item-card__size__params-item')
const paletteValue = document.querySelector('.palette-number');
const mainPictureOnSlider = document.querySelector('.gallery-top .swiper-slide-active img');
const minusBtn = document.querySelector('.item-card__count__choice-amount-minus');
const plusBtn = document.querySelector('.item-card__count__choice-amount-plus');
const itemsCounter = document.querySelector('.item-card__count__choice-number')

paletteItems.forEach((paletteItem) => {
    paletteItem.addEventListener('click', () => {
        paletteItems.forEach((paletteItem) => {
            paletteItem.classList.remove('active-palette');
        });
        paletteValue.textContent = `#${paletteItem.getAttribute('data-value')}`;
        mainPictureOnSlider.src = paletteItem.firstElementChild.src;
        paletteItem.classList.add('active-palette');
    })
});

sizeItems.forEach(size => {
    size.addEventListener('click', () => {
        sizeItems.forEach(size=>{
            size.classList.remove('active-palette');
        });
        size.classList.add('active-palette');
    })
})

minusBtn.addEventListener('click', () =>{
    let counter = itemsCounter.textContent;
    if (+counter > 1){
        itemsCounter.textContent = `${--counter}`;
    }
})


plusBtn.addEventListener('click', () =>{
    let counter = itemsCounter.textContent;
    itemsCounter.textContent = `${++counter}`;
})
