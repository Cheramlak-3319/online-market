let cart = JSON.parse(localStorage.getItem('cart')) || [];
let order = [];


// function removeDuplicatesFromCart() {
//     const uniqueCart = [];
//     const productIds = new Set();

//     cart.forEach(item => {
//         if (!productIds.has(item.productId)) {
//             productIds.add(item.productId);
//             uniqueCart.push(item);
//         }
//     });

//     return uniqueCart;
// }

// // Remove duplicates from the cart
// cart = removeDuplicatesFromCart();

// // Update the cart in local storage




let totalItem = 0;
let OrderdCartHTML = '';
let productPrice = 0;
cart.forEach((item) => {
    productPrice += (item.quantity * ((item.price) / 100));
    totalItem += Number(item.quantity);
    OrderdCartHTML += `<div class="cart-item-container js-cart">
                    <div class="delivery-date">
                    </div>

                    <div class="cart-item-details-grid">
                        <img class="product-image" src="/images/products/${item.productImage}.jpg">

                        <div class="cart-item-details">
                            <div class="product-name">
                                ${item.name}
                            </div>
                            <div class="product-price">
                                $${((item.price)/100).toFixed(2)}
                            </div>
                            <div class="product-quantity">
                                <span>
                    Quantity: <span class="quantity-label">${item.quantity}</span>
                                </span>
                                <span class="update-quantity-link link-primary">
                    Update
                  </span>
                                <span class="delete-quantity-link link-primary js-delete-link" data-product-id="">
                    Delete
                  </span>
                            </div>
                        </div>

                        <div class="delivery-options">
                        <div class="delivery-options-title">
                        Choose a delivery option:
                        </div>
                        
                        </div>
                    </div>
                </div>
  `
})



document.querySelector('.js-delivery-products').innerHTML = OrderdCartHTML;

const Shipping = Number(5);
const totalBeforTax = Number((productPrice + Shipping).toFixed(2));
const EsimatedTax = Number((productPrice * 0.1).toFixed(2));
let orderTotal = (EsimatedTax + totalBeforTax + Shipping).toFixed(2);
document.querySelector('.js-tax-befor').innerHTML = `${totalBeforTax}`
document.querySelector('.js-payment-summary-shipping').innerHTML = `$${Shipping}`
    // document.querySelector('.js-tax-befor').innerHTML = `${productPrice}`
document.querySelector('.js-payment-tax').innerHTML = `${EsimatedTax}`
document.querySelector('.js-items-quantity').innerHTML = `Items (${totalItem})`
document.querySelector('.js-order-total').innerHTML = `${orderTotal}`

const product = { total: orderTotal };

order.push(product)

localStorage.setItem('order', JSON.stringify(order));

document.querySelector('.js-place-order').addEventListener('click', () => {
    localStorage.setItem('order', JSON.stringify(order));
    window.location.href = 'http://localhost:6500/chere-market/order'
})

































// import { products } from "../data/products.js";
// import dayjs from 'https://unpkg.com/dayjs@1.11.10/esm/index.js';
// import { deliveryOptions } from "../data/deliveryDate.js";









// let cartQuantityHtml = '';
// let totalprice = 0;
// let price = 0;



// cart.forEach((item) => {
//     let productName = item.productName;
//     let matchingProduct;


//     Product.forEach((product) => {
//         if (product.name === productName) {
//             matchingProduct = product;
//             console.log(matchingProduct)

//             // totalprice = product.priceCents * item.quantity;
//             // price += totalprice;
//         }
//     })



//     // const deliveryOptionId = item.deliveryOptionId;


//     // let deliveryOption;

//     // deliveryOptions.forEach((option) => {
//     //     if (option.id === deliveryOptionId) {
//     //         deliveryOption = option;
//     //     }
//     // })

//     const today = dayjs();
//     const deliveryDate = today.add(deliveryOption.deliveryTime, 'days');
//     const dateString = deliveryDate.format('dddd MMMM D YYYY');



//     cartQuantityHtml += `
//   <div class="cart-item-container js-cart-${matchingProduct.id}">
//                     <div class="delivery-date">
//                         Delivery date: ${dateString}
//                     </div>

//                     <div class="cart-item-details-grid">
//                         <img class="product-image" src="${matchingProduct.image}">

//                         <div class="cart-item-details">
//                             <div class="product-name">
//                                 ${matchingProduct.name}
//                             </div>
//                             <div class="product-price">
//                                 $${((matchingProduct.priceCents)/100).toFixed(2)}
//                             </div>
//                             <div class="product-quantity">
//                                 <span>
//                     Quantity: <span class="quantity-label">2</span>
//                                 </span>
//                                 <span class="update-quantity-link link-primary">
//                     Update
//                   </span>
//                                 <span class="delete-quantity-link link-primary js-delete-link" data-product-id="${matchingProduct.id}">
//                     Delete
//                   </span>
//                             </div>
//                         </div>

//                         <div class="delivery-options">
//                         <div class="delivery-options-title">
//                         Choose a delivery option:
//                         </div>
//                         ${deliveryOptionHtml(matchingProduct,item)}
//                         </div>
//                     </div>
//                 </div>
//   `
// })

// // const totalPrice = (((price / 100) + (999 / 100)) * 0.10) + ((price / 100) + (999 / 100));


// document.querySelector('.js-order-summary').innerHTML = cartQuantityHtml;

// // document.querySelector('.js-payment-summary-total').innerHTML = `$${(price / 100).toFixed(2)}`;

// // document.querySelector('.js-payment-summary-shipping').innerHTML = `$${(999 / 100).toFixed(2)}`;

// // document.querySelector('.js-tax-befor').innerHTML = `$${((price / 100)+(999 / 100)).toFixed(2)}`;


// // document.querySelector('.js-payment-tax').innerHTML = `$${(((price / 100)+(999 / 100))*0.10).toFixed(2)}`;


// // document.querySelector('.js-order-total').innerHTML = `$${(totalPrice).toFixed(2)}`;




// function deliveryOptionHtml(matchingProduct, cartItem) {
//     let html = '';

//     deliveryOptions.forEach((deliveryOption) => {


//         const today = dayjs();
//         const deliveryDate = today.add(deliveryOption.deliveryTime, 'days');
//         const dateString = deliveryDate.format('dddd MMMM D YYYY');
//         const priceString = deliveryOption.priceCents === 0 ? 'FREE' : `$${(deliveryOption.priceCents / 100).toFixed(2)}`;
//         let isCheaked = deliveryOption.id === cartItem.deliveryOptionId;


//         html += `
//     <div class="delivery-option js-delivery-option"
//     data-product-id=${matchingProduct.productId} data-delivery-option-id=${deliveryOption.id}>
//         <input type="radio" 
//         class="delivery-option-input" name="${matchingProduct.id}"
//         ${isCheaked?'cheaked':''}
//         >
//         <div>
//             <div class="delivery-option-date">
//             ${dateString}
//             </div>
//             <div class="delivery-option-price">
//                 ${priceString}-shipping
//             </div>
//         </div>
//     </div>
//         `

//     })

//     return html;

// }



// document.querySelectorAll('.js-delete-link').forEach((link) => {
//     link.addEventListener('click', () => {
//         const productId = link.dataset.productId;
//         removeFromCart(productId);
//         document.querySelector(`.js-cart-${productId}`).remove();
//     })
// })









// document.querySelectorAll('.js-delivery-option').forEach((ele) => {
//     ele.addEventListener('click', () => {
//         const { productId, deliveryOptionId } = ele.dataset;
//         updateDeliveryOption(productId, deliveryOptionId)
//     })
// })