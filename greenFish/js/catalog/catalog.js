const paletteColors = document.querySelectorAll('.main-info__aside__palette-content-item');
const sizes = document.querySelectorAll('.main-info__aside__size-content-item');
const phoneInput = document.querySelector('.request-contact-info-name-input');
const btnForSortingInTablet = document.querySelector('.main-info__catalog__options-sorting');

for (const dropdown of document.querySelectorAll(".custom-select-wrapper")) {
    dropdown.addEventListener('click', function () {
        this.querySelector('.custom-select').classList.toggle('open');
    })
}

for (const option of document.querySelectorAll(".custom-option")) {
    option.addEventListener('click', function () {
        if (!this.classList.contains('selected')) {
            this.parentNode.querySelector('.custom-option.selected').classList.remove('selected');
            this.classList.add('selected');
            this.closest('.custom-select').querySelector('.custom-select__trigger span').textContent = this.textContent;
        }
    })
}

window.addEventListener('click', function (e) {
    for (const select of document.querySelectorAll('.custom-select')) {
        if (!select.contains(e.target)) {
            select.classList.remove('open');
        }
    }
});

paletteColors.forEach((color) => {
    color.addEventListener('click', () => {
        paletteColors.forEach((color) => {
            color.classList.remove('active-palette');
        });
        color.classList.add('active-palette');
    })
});

sizes.forEach((size) => {
    size.addEventListener('click', () => {
        sizes.forEach((size) => {
            size.classList.remove('active-size');
        });
        size.classList.add('active-size');
    })
});

const maskOptions = {
    mask: '+{375}(00)000-00-00'
};
phoneInput.addEventListener('click', () => {
    const mask = IMask(phoneInput, maskOptions);
    console.log(phoneInput.value.length);
    if (phoneInput.value.length === 0) {
        phoneInput.value = '+375('
    }
})

btnForSortingInTablet.addEventListener('', )

const mask = IMask(element, maskOptions);

