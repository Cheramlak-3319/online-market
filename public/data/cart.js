export var cart = JSON.parse(localStorage.getItem('cart'));

if (!cart) {
    cart = [{
        productId: "661e8d8074df31af9ac0997a",
        quantity: 1
    }]
}





export function saveToStorage() {
    localStorage.setItem('cart', JSON.stringify(cart));

}



function updatedCartItems() {
    const updatedCart = [];
    cart.forEach((item) => {
        updatedCart.push(item.productId)
        console.log(updatedCart)
        for (let i = 0; i < cart.length; i++) {
            for (let j = 0; j < cart.length; j++) {
                if (i === j) {
                    continue;
                }
            }
        }
    })
    cart = updatedCart;
    saveToStorage();
}



updatedCartItems()



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