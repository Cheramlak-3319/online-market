const express = require('express')
const router = express.Router();



const { homePage, orderModelCreating, bankSelecctingPage, trackingPage, paymentForOrders, waitingPage, creatingProduct, findProduct, findAllProduct, cheakoutPage, paymentVerification } = require('../controller/controller')


router.get('/home', homePage)
router.post('/order', orderModelCreating)
router.get('/select-bank', bankSelecctingPage)
router.get('/cheakout', cheakoutPage)
router.get('/track', trackingPage)
router.get('/order', paymentVerification)




router.post('/hellocash', paymentForOrders)
router.get('/waiting', waitingPage)

//product adding
router.post('/product-added', creatingProduct)
router.get('/product-added/:productId', findProduct)
router.get('/product-added', findAllProduct)


module.exports = { router }