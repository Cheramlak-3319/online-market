export var cart = JSON.parse(localStorage.getItem('cart'));

if (!cart) {
    cart = [{
        productId: "e43638ce-6aa0-4b85-b27f-e1d07eb679c6",
        quantity: 1,
        deliveryOptionId: '3'
    }]
}


export function saveToStorage() {
    localStorage.setItem('cart', JSON.stringify(cart));

}






export function addToCart(productId) {
    let matchingItem;
    cart.forEach((item) => {
        if (productId === item.productId) {
            matchingItem = item;
        }


        if (matchingItem) {
            matchingItem.quantity = 1;
        } else {
            cart.push({
                productId: productId,
                quantity: 1,
                deliveryOptionId: '1'
            });
        }
    })
    saveToStorage()
    console.log(cart);
}








export function removeFromCart(productId) {
    const newCart = [];
    cart.forEach((cartItem) => {
        if (cartItem.productId !== productId) {
            newCart.push(cartItem)
        }
    })
    cart = newCart;
    console.log(cart);
    saveToStorage();
}





export function updateDeliveryOption(productId, deliveryOptionId) {
    let matchingItem;
    cart.forEach((item) => {
        if (productId === item.productId) {
            matchingItem = item;
        }
    })
    matchingItem.deliveryOptionId = deliveryOptionId;
    saveToStorage();
}