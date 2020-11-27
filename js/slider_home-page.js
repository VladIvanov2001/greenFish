function sliderTabs(mySwiper) {
    const swiperMenuItems = document.querySelectorAll('.item');
    swiperMenuItems.forEach((swiperMenuItem, idx) => {
        swiperMenuItem.addEventListener('click', () => {
            swiperMenuItems.forEach(swiperMenuItem => {
                swiperMenuItem.classList.remove('active');
            })
            swiperMenuItem.classList.add('active');
            mySwiper.slideTo(idx + 1);
        })
    })
}

function swipeEventOnSlider(mySwiper) {
    const swiperMenuItems = document.querySelectorAll('.item');
    mySwiper.on('slideChange', () => {
        swiperMenuItems.forEach(swiperMenuItem => {
            swiperMenuItem.classList.remove('active');
        })
        swiperMenuItems[mySwiper.realIndex].classList.add('active');
    })
}


function init() {
    const mySwiper = new Swiper('.swiper-container', {
        direction: 'horizontal',
        loop: true,
        pagination: {
            el: '.swiper-pagination',
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
    const prevButton = document.querySelector('.swiper-button-prev');
    const nextButton = document.querySelector('.swiper-button-next');
    sliderTabs(mySwiper);
    swipeEventOnSlider(mySwiper);
}

init();
