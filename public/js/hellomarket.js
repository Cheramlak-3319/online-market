// import { cart, addToCart } from '../data/cart.js';


// let cartQuantity = 0;

// function UpdateCart() {
//     cart.forEach((item) => {
//         cartQuantity += item.quantity;
//         console.log(cartQuantity);
//     })

//     document.querySelector('.cart-quantity').innerHTML = `${cartQuantity}`;
// }




document.addEventListener("DOMContentLoaded", function() {
    const addToCartButtons = document.querySelectorAll('.js-add-to-cart');
    let cart = [];

    addToCartButtons.forEach(button => {
        button.addEventListener('click', function(event) {
            const productName = event.target.dataset.productName;
            console.log(productName);
            const selectedQuantity = event.target.parentElement.querySelector('select').value;

            // Here you can add logic to add the product to the cart
            addToCart(productName, selectedQuantity);
        });
    });

    function addToCart(productName, quantity) {
        // Example logic: you can update the UI to show the product added to cart
        const addedToCartContainer = document.querySelector('.added-to-cart');
        addedToCartContainer.textContent = `Added ${quantity} ${productName} to cart`;





        cart.push(addedToCartContainer);

        for (let i = 0; i < cart.length; i++) {
            console.log(cart[i]);
        }
    }
});






// document.querySelectorAll('.js-add-to-cart').forEach((button) => {

//     button.addEventListener('click', () => {
//         const productName = button.dataset.productName;
//         addToCart(productName)
//             // UpdateCart()
//     })
// })