const homePage = async(req, res) => {
    res.render('homePage');
}

const amazonPage = async(req, res) => {
    res.render('amazon');
}

const orderPage = async(req, res) => {
    res.render('order');
}


const trackingPage = async(req, res) => {
    res.render('tracking');
}

module.exports = { homePage, amazonPage, orderPage, trackingPage }