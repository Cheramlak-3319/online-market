const ejs = require('ejs');
require('dotenv').config






const authenticateUser = async(res) => {
    try {
        const response = await fetch(
            'https://api.hellocash.net/authenticate', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    'principal': process.env.HC_PRINCIPAL,
                    'credentials': process.env.HC_PASSWORD,
                    'system': process.env.HC_SYSTEM
                })
            });

        const tokenData = await response.json();
        console.log(tokenData);
        console.log("Response: " + JSON.stringify(tokenData));
        return tokenData['token'];
    } catch (error) {
        throw new Error('token error');
    }

}




const ceateHcInvoice = async(req, res, mobile, price) => {
    console.log(mobile, price);
    try {
        const signedToken = await authenticateUser(res);
        console.log(signedToken);
        const response = await fetch(
            'https://api.hellocash.net/invoices', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${signedToken}` },
                body: JSON.stringify({
                    amount: price,
                    from: mobile,
                    notifyfrom: true,
                })
            });
        const data = await response.json();
        return data.code;
    } catch (error) {
        console.error(`Error: ${error.message}`);
    }
}






const updateInvoice = async(req, res, description) => {
    try {
        const signedToken = await authenticateUser(res);
        const response = await fetch(
            'https://api.hellocash.net/invoices?descending=true&limit=50', {
                method: 'GET',
                headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${signedToken}` }
            }
        );
        const data = await response.json();
        const output = JSON.stringify(data);
        for (const item of data) {
            const code = item['code']
            const status = item['status'];
            if (description === code) {
                if (status === 'PROCESSED') {
                    console.log('processd')
                    res.redirect('http://localhost:6500/chere-market/back');
                } else if (status === 'PENDING') {
                    console.log('still pending')
                } else {
                    console.log('try again');
                    break;
                }
            }
        }

    } catch (error) {
        console.error(`Error: ${error.message}`);
    }
}







module.exports = { authenticateUser, ceateHcInvoice, updateInvoice }