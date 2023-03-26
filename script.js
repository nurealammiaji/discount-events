document.getElementById('btn-apply').addEventListener('click', function(){
    let realPrice = document.getElementById('real-price');
    let realPriceValue = realPrice.innerText;
    let realPriceValueNumeric = parseFloat(realPriceValue);
    console.log(realPriceValueNumeric);

    let discountPrice = document.getElementById('discount-price');
    let discountPriceValue = discountPrice.innerText;
    let discountPriceValueNumeric = parseFloat(discountPriceValue);
    console.log(discountPriceValueNumeric);

    let applyDiscount = realPriceValueNumeric / 100;
    let thirtyPercent = applyDiscount * 30;
    discountPrice.innerText = thirtyPercent;
    console.log(thirtyPercent.toFixed(2));
})