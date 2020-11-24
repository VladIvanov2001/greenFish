const paletteColors = document.querySelectorAll('.main-info__aside__palette-content-item');
const sizes = document.querySelectorAll('.main-info__aside__size-content-item');

console.log(paletteColors)

paletteColors.forEach((color) =>{
    color.addEventListener('click', () =>{
        paletteColors.forEach((color)=>{
            color.classList.remove('active-palette');
        })
        color.classList.add('active-palette');
    })
})

sizes.forEach((size) =>{
    size.addEventListener('click', () =>{
        console.log('click')
        sizes.forEach((size)=>{
            size.classList.remove('active-size');
        })
        size.classList.add('active-size');
    })
})
