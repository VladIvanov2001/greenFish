const minusBtns = document.querySelectorAll('.item-count-minus');
const plusBtns = document.querySelectorAll('.item-count-plus');
const itemsCounter = document.querySelectorAll('.item-count');
const costForOneItems = document.querySelectorAll('.cost-for-one-item');
const finalCosts = document.querySelectorAll('.final-cost');
const sendByPost = document.getElementById('mail');
let finalOrderPriceTablet = document.querySelector('.final-order-tablet__sum-numbers span');
let finalOrderAmountTablet = document.querySelector('.final-order-tablet__count .title-small span');
let finalOrderAmountDesktop = document.querySelector('.final-count span');
let finalOrderPriceDesktop = document.querySelector('.final-sum span');

sendByPost.disabled = true;

function checkAccessForMail(count){
    if(count >= 5){
        sendByPost.disabled = false;
        document.querySelector('.info-about-mail').classList.add('info-about-mail-active');
    }
    else {
        sendByPost.disabled = true;
        document.querySelector('.info-about-mail').classList.remove('info-about-mail-active');
    }
}

function countFinalAmount() {
    let result = 0;
    itemsCounter.forEach(elem =>{
        result += Number(elem.textContent);
    });
    return result;
}

function countFinalPrice() {
    let result = 0;
    finalCosts.forEach(elem =>{
        result += Number(elem.textContent.replace(',', '.'));
    });
    return result;
}

minusBtns.forEach((minusBtn, idx) => {
    let itemCounter = itemsCounter[idx];
    let costForOneItem = costForOneItems[idx];
    let finalCost = finalCosts[idx];
    minusBtn.addEventListener('click', () => {
        let counter = itemCounter.textContent;
        if (+counter > 1) {
            itemCounter.textContent = `${--counter}`;
        }
        const price = costForOneItem.textContent.replace(',', '.');
        let result = Number(price) * counter;
        if (!(result.toString().includes('.'))) {
            result = `${result},0`
        } else {
            result = result.toString().replace('.', ',')
        }
        finalCost.textContent = `${result}`;
        const finalCount = countFinalAmount();
        let finalPrice = countFinalPrice();

        finalOrderPriceTablet.textContent = `${finalPrice}`;
        finalOrderPriceDesktop.textContent = `${finalPrice}`;
        checkAccessForMail(finalCount);
        finalOrderAmountTablet.textContent = `${finalCount}`;
        finalOrderAmountDesktop.textContent = `${finalCount}`;
    })
})

plusBtns.forEach((plusBtn, idx) => {
    let itemCounter = itemsCounter[idx];
    let costForOneItem = costForOneItems[idx];
    let finalCost = finalCosts[idx];
    plusBtn.addEventListener('click', () => {
        let counter = itemCounter.textContent;
        itemCounter.textContent = `${++counter}`;
        const price = costForOneItem.textContent.replace(',', '.');
        let result = Number(price) * counter;
        if (!(result.toString().includes('.'))) {
            result = `${result},0`
        } else {
            result = result.toString().replace('.', ',')
        }
        finalCost.textContent = `${result}`;
        const finalCount = countFinalAmount();
        finalOrderAmountTablet.textContent = `${finalCount}`;
        finalOrderAmountDesktop.textContent = `${finalCount}`;
        checkAccessForMail(finalCount);
        let finalPrice = countFinalPrice();
        finalOrderPriceTablet.textContent = `${finalPrice}`;
        finalOrderPriceDesktop.textContent = `${finalPrice}`;
    })
});
