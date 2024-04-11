const HC_PRINCIPAL = "1256263";
const HC_PASSWORD = "moges123";
const HC_SYSTEM = "lucy";
const ejs = require('ejs');







const authenticateUser = async(res) => {
    try {
        const response = await fetch(
            'https://api.hellocash.net/authenticate', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    'principal': "",
                    'credentials': "moges123",
                    'system': "lucy"
                })
            });

        const tokenData = await response.json();
        console.log("Response: " + JSON.stringify(tokenData));
        return tokenData['token'];
    } catch (error) {
        throw new Error('token error');
    }

}




const ceateHcInvoice = async(req, res, from, amount) => {
    console.log(from, amount);
    amount = Number(amount);
    try {
        const signedToken = await authenticateUser(res);
        console.log(signedToken);
        const response = await fetch(
            'https://api.hellocash.net/invoices', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${signedToken}` },
                body: JSON.stringify({
                    amount: 5.0,
                    from: from,
                    notifyfrom: true,
                })
            });


        console.log('Payment request Successful');
        const encodedResponse = await response.json();
        return encodedResponse;
    } catch (error) {
        console.error(`Error: ${error.message}`);
    }
}






const updateInvoice = async(req, res) => {
    try {
        const signedToken = await authenticateUser(res);
        const response = await fetch(
            'https://api.hellocash.net/invoices?descending=true&limit=50', {
                method: 'GET',
                headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${signedToken}` }
            }
        );
        const data = await response.json();
        console.log(data);
        const output = JSON.stringify(data);
        const findUser = await Invoice.findOne({ traceNumber });
        console.log(findUser.code);
        console.log(findUser.amount);
        const amount = findUser.amount;
        for (const item of data) {
            const code = item['code']
            console.log(code);
            const status = item['status'];
            if (findUser.code === code) {
                if (status === 'PROCESSED') {
                    console.log('still pending')
                    break;
                } else if (status === 'PENDING') {

                    res.redirect('http://localhost:6500/chere-market/track');
                    return;
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