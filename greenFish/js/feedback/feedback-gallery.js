const galleryPopup = document.querySelector('.feedback-gallery-popup')
const gallery = document.querySelectorAll('.feedback-main-list-item__gallery')
const showMore = document.createElement('a')
showMore.classList.add('feedback-main-list-item__more')

gallery.forEach(element => {
  if (element.children.length > 3) {
    for (let i = 3; i < element.children.length; i++) {
      element.children[i].style.display = 'none'
    }
    let copyShowMore = showMore.cloneNode()
    copyShowMore.innerHTML = '+' + (element.children.length - 3)
    element.appendChild(copyShowMore)
  }
})

const gallerySliderThumbs = new Swiper('.feedback-gallery_thumbs', {
  direction: "vertical",
  spaceBetween: 10,
  slidesPerView: 7,
  freeMode: true,
  watchSlidesVisibility: true,
  watchSlidesProgress: true,
})

const gallerySlider = new Swiper('.feedback-gallery', {
  navigation: {
    nextEl: '.feedback-gallery-popup__next',
    prevEl: '.feedback-gallery-popup__prev'
  },
  spaceBetween: 10,
  thumbs: {
    swiper: gallerySliderThumbs
  }
})

const galleryPopupOpen = document.querySelectorAll('.feedback-main-list-item__more')
galleryPopupOpen.forEach(button => {
  button.addEventListener('click', function () {
    galleryPopup.style.visibility = 'visible'
    document.body.style.overflow = 'hidden'
    let images = button.parentElement.querySelectorAll('img')
    images.forEach(element => {
      gallerySlider.appendSlide(`<div class="swiper-slide"><img src="${element.getAttribute("src")}"></div>`)
      gallerySliderThumbs.appendSlide(`<div class="swiper-slide"><img src="${element.getAttribute("src")}"></div>`)
    })
  })
})

const galleryPopupClose = document.querySelector('.feedback-gallery-popup__close')
galleryPopupClose.addEventListener('click', () => {
  gallerySlider.removeAllSlides()
  gallerySliderThumbs.removeAllSlides()
  galleryPopup.style.visibility = 'hidden'
  document.body.style.overflow = 'visible'
})