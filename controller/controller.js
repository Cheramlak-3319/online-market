const hcLucy = require('../controller/hellocash.controller')
const { LocalStorage } = require('node-localstorage');
const localStorage = new LocalStorage('./scratch');
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
    const description = await hcLucy.ceateHcInvoice(req, res, from, amount);
    console.log(description);
    localStorage.setItem('description', description)
    await trackingPage(req, res);
}


const trackingPage = async(req, res) => {
    res.render('tracking');
}


const paymentCheaking = async(req, res) => {
    await homePage(req, res)
}


const waitingPage = async(req, res) => {
    const description = localStorage.getItem('description');
    console.log(description);
    await hcLucy.updateInvoice(req, res, description);
}

module.exports = { homePage, cheakoutPage, orderPage, trackingPage, paymentForOrders, paymentCheaking, waitingPage }