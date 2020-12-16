const galleryThumbs = new Swiper('.gallery-thumbs', {
    spaceBetween: 5,
    slidesPerView: 5,
    loop: true,
    freeMode: true,
    loopedSlides: 8,
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
    loopedSlides: 8,
    thumbs: {
        swiper: galleryThumbs,
    },
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
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

const selectedFile = document.getElementById('btn-loader');
const downloadedFiles = document.getElementById('list');
const writeBtn = document.querySelector('.review__add-review-write-btn');
const filesForSend = [];
let counterOfPhotos = 0;

writeBtn.addEventListener('click', () => {
    document.querySelector('.full-table-for-review').style.display = 'flex';
    writeBtn.textContent = 'отправить'
});

selectedFile.addEventListener('change', (event) => {
    const fileList = event.target.files;
    filesForSend.push(fileList);
    const file = document.createElement('p');
    file.textContent = fileList[0].name;
    file.classList.add('loaded-files');
    downloadedFiles.appendChild(file);
    file.addEventListener('click', () => {
        file.parentNode.removeChild(file);
        filesForSend.splice(counter, 1);
        counter--;
    })
    counter++;
}, false)

const swiperForItem = new Swiper('.items-choice-customers', {
    slidesPerView: 2,
    spaceBetween: 10,
    freeMode: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
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

