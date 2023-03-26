document.getElementById('btn-apply').addEventListener('click', function(){
    let realPrice = document.getElementById('real-price');
    let realPriceValue = realPrice.innerText;
    let realPriceValueNumeric = parseFloat(realPriceValue);

    let discountPrice = document.getElementById('discount-price');
    let discountPriceValue = discountPrice.innerText;
    let discountPriceValueNumeric = parseFloat(discountPriceValue);

    let applyDiscount = realPriceValueNumeric / 100 * 30;
    let applyDiscountPrice = realPriceValueNumeric - applyDiscount;
    discountPrice.innerText = applyDiscountPrice;
})