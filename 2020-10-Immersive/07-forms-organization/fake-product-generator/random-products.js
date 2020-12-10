const faker = require('faker');

const MAX = 100;
const products = [];

function getRandomInt(max=100) {
  return Math.floor(Math.random() * Math.floor(max));
}

while (products.length <= MAX) {
    const name = faker.commerce.productName();
    const originalPrice = faker.commerce.price();
    if (getRandomInt() < 30) {
        price = originalPrice - (originalPrice * (getRandomInt(50) / 100));
        price = price.toFixed(2);
    } else {
        price = originalPrice;
    }
    products.push({
        name,
        price,
        originalPrice
    });
}

console.log(JSON.stringify(products));
