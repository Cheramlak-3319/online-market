document.addEventListener("DOMContentLoaded", function() {
    const addToCartButtons = document.querySelectorAll('.js-add-to-cart');
    let cart = [];
    let totalQuantity = 0;

    addToCartButtons.forEach(button => {
        button.addEventListener('click', function(event) {
            const productName = event.target.dataset.productName;
            console.log(productName);
            const productImage = event.target.dataset.productImage;
            console.log(productImage);
            const productPrice = event.target.dataset.productPrice;
            console.log(productPrice);
            const selectedQuantity = event.target.parentElement.querySelector('select').value;

            // Here you can add logic to add the product to the cart
            addToCart(productName, selectedQuantity, productPrice, productImage);

        });
    });

    function addToCart(productName, quantity, price, productImage) {
        const product = { name: productName, quantity: quantity, price: price, productImage: productImage };
        // Example logic: you can update the UI to show the product added to cart
        const addedToCartContainer = document.querySelector('.added-to-cart');
        addedToCartContainer.textContent = `quantity productName`;

        totalQuantity += Number(quantity);

        document.querySelector('.cart-quantity').innerHTML = `${totalQuantity}`
        cart.push(product);

        for (let i = 0; i < cart.length; i++) {
            console.log(cart[i]);
        }
        localStorage.setItem('cart', JSON.stringify(cart));
    }
});



























// document.querySelectorAll('.js-add-to-cart').forEach((button) => {

//     button.addEventListener('click', () => {
//         const productName = button.dataset.productName;
//         addToCart(productName)
//             // UpdateCart()
//     })
// })