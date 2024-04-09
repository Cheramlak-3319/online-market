const express = require('express')
const router = express.Router();
const { homePage, amazonPage, orderPage, trackingPage } = require('../controller/controller')
router.get('/home', homePage)
router.get('/amazon', amazonPage)
router.get('/order', orderPage)
router.get('/track', trackingPage)



module.exports = { router }