const snippets = document.querySelectorAll('.about-events-main-snippets__item')
let activeSnippet = document.querySelector('.about-events-main-snippets__item.active_snippet')
const bigImg = document.querySelector('.about-events-gallery__img')
const bitImgText = document.querySelector('.about-events-gallery__text')
bitImgText.innerHTML = activeSnippet.getAttribute('alt')

snippets.forEach((snippet) => {
  snippet.addEventListener('click', function(){
    if(this !== activeSnippet){
      activeSnippet.classList.remove('active_snippet')
      activeSnippet = this
      activeSnippet.classList.add('active_snippet')
      bigImg.setAttribute('src',this.getAttribute('src'))
      bitImgText.innerHTML = this.getAttribute('alt')
    }
  })
})

var aboutSwiper = new Swiper('.about-events-slider',{
  slidesPerView: 'auto',
  spaceBetween: 8,
  loop: true
})