const HC_PRINCIPAL = "1256263";
const HC_PASSWORD = "moges@123";
const HC_SYSTEM = "lucy";
const ejs = require('ejs');







const authenticateUser = async(res) => {
    try {
        const response = await fetch(
            'https://api.hellocash.net/authenticate', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    'principal': "1256263",
                    'credentials': "moges@123",
                    'system': "lucy"
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
                    amount: amount,
                    from: from,
                    notifyfrom: true,
                })
            });


        console.log('Payment request Successful');
        const encodedResponse = await response.json();
        console.log(encodedResponse.description);
        const valuedData = encodedResponse.description;
        return valuedData;
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
            const code = item['description']
            console.log(code);
            const status = item['status'];
            if (description === code) {
                if (status === 'PROCESSED') {
                    res.redirect('http://localhost:6500/chere-market/home');
                    break;
                } else if (status === 'PENDING') {
                    console.log('still pending')
                    res.redirect('http://localhost:6500/chere-market/waiting');
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