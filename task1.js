function createProduct(obj, callback) {
    obj.id = getId();
    callback(obj);
}

let counter = 1;

function getId() {
    return counter++;
}

const logProduct = (product) => { 
    console.log(`Product: ${product}`);
};

const logTotalPrice = (product) => {
    const totalPrice = product.price * product.quantity; 
    console.log(`Total Price: ${totalPrice}`);
};

const product = { name: "Phone", price: 500, quantity: 2 };

createProduct(product, logProduct);
createProduct(product, logTotalPrice);
