import { cart, addToCart } from '../data/cart.js';


let cartQuantity = 0;

function UpdateCart() {
    cart.forEach((item) => {
        cartQuantity += item.quantity;
        console.log(cartQuantity);
    })

    document.querySelector('.cart-quantity').innerHTML = `${cartQuantity}`;
}


document.querySelectorAll('.js-add-to-cart').forEach((button) => {

    button.addEventListener('click', () => {
        const productId = button.dataset.productId;
        addToCart(productId)
        UpdateCart()
    })
})