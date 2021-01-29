const catImg = document.querySelector('.not_found-info-main__cat')
const link = document.querySelector('.not_found-info__text a')

if(document.documentElement.clientWidth >= 1200){
  link.addEventListener('mouseover',()=>{
    catImg.classList.add('hover')
  })
  
  link.addEventListener('mouseout',()=>{
    catImg.classList.remove('hover')
  })
}
