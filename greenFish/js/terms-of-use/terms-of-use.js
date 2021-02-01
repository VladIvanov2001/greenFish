const acc = document.getElementsByClassName('terms-list__acc')
for (let i = 0; i < acc.length; i++){
  acc[i].addEventListener('click',function(){
    this.classList.toggle('acc-active')
    let content = this.nextElementSibling
    if (content.style.maxHeight){
      content.style.maxHeight = null
    }
    else{
      let inc = 48
      if(document.documentElement.clientWidth < 768){
        inc = 62
      }
      content.style.maxHeight = content.scrollHeight + inc + "px"
      content.style.height = content.scrollHeight + inc + "px"
    }
  })
}