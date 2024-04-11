const hcLucy = require('../controller/hellocash.controller')


const homePage = async(req, res) => {
    res.render('hellomarket');
}

const cheakoutPage = async(req, res) => {
    res.render('checkout');
}

const orderPage = async(req, res) => {
    res.render('order');
}



const paymentForOrders = async(req, res) => {
    const { from, amount } = req.body;
    console.log(from, amount);
    await hcLucy.ceateHcInvoice(req, res, from, amount);
    await trackingPage(req, res);
}


const trackingPage = async(req, res) => {
    res.render('tracking');
}


const paymentCheaking = async(req, res) => {
    await homePage(req, res)
}



module.exports = { homePage, cheakoutPage, orderPage, trackingPage, paymentForOrders, paymentCheaking }