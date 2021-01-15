const minusBtns = document.querySelectorAll('.item-count-minus');
const plusBtns = document.querySelectorAll('.item-count-plus');
const itemsCounter = document.querySelectorAll('.item-count');
const costForOneItems = document.querySelectorAll('.cost-for-one-item');
const finalCosts = document.querySelectorAll('.final-cost');

minusBtns.forEach((minusBtn, idx) => {
    let itemCounter = itemsCounter[idx];
    let costForOneItem = costForOneItems[idx];
    console.log(costForOneItem);
    let finalCost = finalCosts[idx];
    console.log(finalCost)

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
    })
});
