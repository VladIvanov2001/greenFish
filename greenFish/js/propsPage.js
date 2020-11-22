const copyBtn = document.querySelector('.props__container__copy');
const text = document.querySelector('.q');
const q = document.querySelector('.props');

copyBtn.addEventListener('click', function copyText() {
    const el = document.createElement('textarea');
    el.value = text.innerHTML;
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
    const successfulMessage = document.createElement('span');
    successfulMessage.textContent = 'Реквизиты скопированы, можно вставить в документ';
    q.appendChild(successfulMessage);
    copyBtn.removeEventListener('click', copyText());
});
