const checkedValue = document.getElementById('menu__toggle');

checkedValue.addEventListener('click', () => {
    checkedValue.checked ? document.body.style.overflow = 'hidden' : document.body.style.overflow = 'initial';
});
