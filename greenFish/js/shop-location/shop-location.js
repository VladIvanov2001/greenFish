const shopLocationsItems = document.querySelectorAll('.shops-location__list__item');
const checkButtons = document.querySelectorAll('.item-checkbox');

shopLocationsItems.forEach((shopLocationItem) =>{
    shopLocationItem.addEventListener('click', ()=>{
        checkButtons.forEach((checkButton) =>{
            checkButton.checked = true;
        })
    })

});
