const express = require('express')
const router = express.Router();



const { homePage, cheakoutPage, orderPage, trackingPage, paymentForOrders, paymentCheaking } = require('../controller/controller')


router.get('/home', homePage)
router.get('/cheakout', cheakoutPage)
router.get('/order', orderPage)
router.get('/track', trackingPage)





router.post('/hellocash', paymentForOrders)
router.get('/waiting', paymentCheaking)




module.exports = { router }