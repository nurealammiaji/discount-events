document.getElementById('btn-apply-one').addEventListener('click', function(){
    let realPriceOne = document.getElementById('real-price-one');
    let realPriceOneElement = realPriceOne.innerText;
    let realPriceOneElementNumeric = parseFloat(realPriceOneElement);

    let applyDiscountOne = realPriceOneElementNumeric / 100 * 30;
    let applyDiscountOnePrice = realPriceOneElementNumeric - applyDiscountOne;

    let discountPriceOne = document.getElementById('discount-price-one');
    discountPriceOne.innerText = applyDiscountOnePrice;
    realPriceOne.style.textDecoration= "line-through";
})

document.getElementById('btn-apply-two').addEventListener('click', function(){
    let realPriceTwo = document.getElementById('real-price-two');
    let realPriceTwoElement = realPriceTwo.innerText;
    let realPriceTwoElementNumeric = parseFloat(realPriceTwoElement);

    let applyDiscountTwo = realPriceTwoElementNumeric / 100 * 30;
    let applyDiscountTwoPrice = realPriceTwoElementNumeric - applyDiscountTwo;

    let discountPriceTwo = document.getElementById('discount-price-two');

    let DiscountTwoField = document.getElementById('discount-two-field');
    let DiscountTwoFieldValue = DiscountTwoField.value;
    if (DiscountTwoFieldValue == "DISC30") {
        discountPriceTwo.innerText = applyDiscountTwoPrice;
    }
})