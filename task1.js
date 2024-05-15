let counter = 1;

function createProduct(obj, callback) {
    obj.id = getId();
    callback(obj);
}

function getId() {
    return counter++;
}

createProduct(
    { name: "Phone", price: 500, quantity: 2 },
    product => console.log(`Product: ${product.name}, Price: ${product.price}, Quantity: ${product.quantity}`)
);

createProduct(
    { name: "Phone", price: 500, quantity: 2 },
    product => console.log(`Total Price: ${product.price * product.quantity}`)
);

