let price = document.getElementById('price');
let coffeeNumber = document.getElementById('coffeeNumber');
let teaNumber = document.getElementById('teaNumber');
let bagelNumber = document.getElementById('bagelNumber');

let coffeeAmount = 0;
let teaAmount = 0;
let bagelAmount = 0;

coffeeNumber.addEventListener('change', e => {
    coffeeAmount = parseInt(coffeeNumber.value);

    if(isNaN(coffeeAmount)) {
        coffeeAmount = 0;
    }

    console.log("TEST");
    updatePrice();
});

teaNumber.addEventListener('change', e => {
    teaAmount = parseInt(teaNumber.value);

    if(isNaN(teaAmount)) {
        teaAmount = 0;
    }

    updatePrice();
});

bagelNumber.addEventListener('change', e => {
    bagelAmount = parseInt(bagelNumber.value);

    if(isNaN(bagelAmount)) {
        bagelAmount = 0;
    }

    updatePrice();
});

function updatePrice() {
    let totalAmount = (coffeeAmount * 5.00) + (teaAmount * 2.00) + (bagelAmount * 10.00);
    price.textContent = "Price: $" + totalAmount;
}

updatePrice();