import { cart, addToCart } from '../data/cart.js';




const product = document.querySelector('js-product-grid').value = `<%=product%>`;


console.log(product)



// let productHtml = '';

// Product.forEach((product) => {
//     productHtml += `<div class="product-container">
//   <div class="product-image-container">
//       <img class="product-image">
//   </div>
//   <div class="product-name limit-text-to-2-lines">
//   </div>
//   <div class="product-rating-container">
//       <img class="product-rating-stars" src="/images/ratings/rating
//       <div class="product-rating-count link-primary">
//       </div>
//   </div>
//   <div class="product-price">
//   </div>
//   <div class="product-quantity-container">
//       <select>
// <option selected value=${1}>1</option>
// <option value=${2}>2</option>
// <option value=${3}>3</option>
// <option value=${4}>4</option>
// <option value=${5}>5</option>
// <option value=${6}>6</option>
// <option value=${7}>7</option>
// <option value=${8}>8</option>
// <option value=${9}>9</option>
// <option value=${10}>10</option>
// </select>
//   </div>
//   <div class="product-spacer"></div>
//   <div class="added-to-cart">
//       <img src="images/icons/checkmark.png"> Added
//   </div>
//   <button class="add-to-cart-button button-primary js-add-to-cart"
// Add to Cart
// </button>
// </div>`;
// })
// document.querySelector('.js-product-grid').innerHTML = productHtml;

// let cartQuantity = 0;

// function UpdateCart() {
//     cart.forEach((item) => {
//         cartQuantity += item.quantity;
//         console.log(cartQuantity);
//     })

//     document.querySelector('.cart-quantity').innerHTML = `${cartQuantity}`;
// }


// document.querySelectorAll('.js-add-to-cart').forEach((button) => {

//     button.addEventListener('click', () => {
//         const productId = button.dataset.productId;
//         addToCart(productId)
//         UpdateCart()
//     })
// })