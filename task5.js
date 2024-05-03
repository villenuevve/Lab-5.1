function applyDiscountAndId(fruits) {
    return fruits.map((fruit, index) => {
        const discountedPrice = fruit.price * 0.8;
        return {
            ...fruit,
            id: index + 1,
            price: discountedPrice
        };
    });
}


const fruits = [
    { name: "apple", price: 200 },
    { name: "orange", price: 300 },
    { name: "grapes", price: 750 }
];

const discountedFruits = applyDiscountAndId(fruits); 
console.log(discountedFruits);