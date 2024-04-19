const Product = require('../model/product.model')
const Order = require('../model/order.model')
const hcLucy = require('../controller/hellocash.controller')
const { LocalStorage } = require('node-localstorage');
const localStorage = new LocalStorage('./scratch');
const homePage = async(req, res) => {
    res.render('hellomarket');
}


const creatingProduct = async(req, res) => {
    const { name } = req.body;
    try {
        const findProduct = await Product.findOne({ name });
        if (!findProduct) {
            const newProduct = await Product.create(req.body);
            res.status(200).json({ newProduct: newProduct })
        } else {
            console.log('already product added')
        }
    } catch (error) {

    }
}




const findProduct = async(req, res) => {
    const { productId } = req.params;
    try {
        let product = await Product.findById(productId);
        res.render('hellomarket', { name: product.name, image: product.image, price: product, price: product.price })
    } catch (error) {
        console.error('Error finding product:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
}








const findAllProduct = async(req, res) => {
    try {
        const products = await Product.find();
        res.render('hellomarket', { products });
    } catch (error) {
        console.error('Error finding product:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
}



const cheakoutPage = async(req, res) => {
    res.render('checkout');
}



const paymentVerification = async(req, res) => {
    res.render('order');
}

const orderModelCreating = async(req, res) => {
    const time = Date.now();
    const traceNumber = time.toString();
    const { from, amount, cart } = req.body;
    console.log(from, amount, cart, traceNumber);
    try {
        const findProduct = await Order.findOne({ traceNumber });
        if (!findProduct) {
            const newProduct = await Order.create({
                productId: traceNumber,
                mobile: from,
                price: amount,
                products: cart
            });
        }
        await bankSelecctingPage(req, res)
    } catch (error) {

    }

}



const bankSelecctingPage = async(req, res) => {
    res.render('bankcontroller');
}










































































const paymentForOrders = async(req, res) => {
    const { from, amount } = req.body;
    console.log(from, amount);
    const description = await hcLucy.ceateHcInvoice(req, res, from, amount);
    console.log(description);
    localStorage.setItem(`description`, description)
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

module.exports = { homePage, cheakoutPage, bankSelecctingPage, trackingPage, paymentForOrders, paymentCheaking, waitingPage, creatingProduct, findProduct, findAllProduct, orderModelCreating, paymentVerification }