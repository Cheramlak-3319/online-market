const express = require('express')
const router = express.Router();



const { orderModelCreating, thankYouPage, trackingPage, paymentForOrders, waitingPage, creatingProduct, findProduct, findAllProduct, cheakoutPage, paymentVerification, orderedProdctCreateInvoice } = require('../controller/controller')




//all post methodes in order
router.post('/product-added', creatingProduct)
router.post('/order', orderModelCreating)
router.post('/order-cheaking', orderedProdctCreateInvoice)
router.post('/hellocash', paymentForOrders)




// all get methods in order
router.get('/home', findAllProduct)
router.get('/cheakout', cheakoutPage)
router.get('/order', paymentVerification)
router.get('/track', trackingPage)
router.get('/back', thankYouPage)









router.get('/waiting', waitingPage)

//product adding


module.exports = { router }