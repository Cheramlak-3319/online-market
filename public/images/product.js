function addToCart(price, num) {
    const innerValue = Number(document.querySelector('.cart').value);
    let cartQuantity = innerValue || 1;
    const totalCost = cartQuantity * price;
    let value0, value1, value2, value3, value4, value5 = 0;
    if (num == 0) {
        value0 = Math.ceil(((totalCost + (totalCost * 0.15)) + 50) / 100) || 0;
        sessionStorage.setItem('value0', JSON.stringify(value0))
        document.querySelector('.value-display' + num).innerHTML = `$${value0}`
    } else if (num == 1) {
        value1 = Math.ceil(((totalCost + (totalCost * 0.15)) + 50) / 100) || 0;
        sessionStorage.setItem('value1', JSON.stringify(value1))
        document.querySelector('.value-display' + num).innerHTML = `$${value1}`
    } else if (num == 2) {
        value2 = Math.ceil(((totalCost + (totalCost * 0.15)) + 50) / 100) || 0;
        sessionStorage.setItem('value2', JSON.stringify(value2))
        document.querySelector('.value-display' + num).innerHTML = `$${value2}`
    } else if (num == 3) {
        value3 = Math.ceil(((totalCost + (totalCost * 0.15)) + 50) / 100) || 0;
        sessionStorage.setItem('value3', JSON.stringify(value3))
        document.querySelector('.value-display' + num).innerHTML = `$${value3}`
    } else if (num == 4) {
        value4 = Math.ceil(((totalCost + (totalCost * 0.15)) + 50) / 100) || 0;
        sessionStorage.setItem('value4', JSON.stringify(value4))
        document.querySelector('.value-display' + num).innerHTML = `$${value4}`
    } else if (num == 5) {
        value5 = Math.ceil(((totalCost + (totalCost * 0.15)) + 50) / 100) || 0;
        sessionStorage.setItem('value5', JSON.stringify(value5))
        document.querySelector('.value-display' + num).innerHTML = `$${value5}`
    }
    return value0, value1, value2, value3, value4, value5;
}

function totalPrice() {
    value0 = Number(sessionStorage.getItem('value0'));
    value1 = Number(sessionStorage.getItem('value1'));
    value2 = Number(sessionStorage.getItem('value2'));
    value3 = Number(sessionStorage.getItem('value3'));
    value4 = Number(sessionStorage.getItem('value4'));
    value5 = Number(sessionStorage.getItem('value5'));
    console.log(value0, value1, value2, value3, value4, value5);
    if (value0 === 'null') {
        value0 = 0;
    } else if (value1 === 'null') {
        value1 = 0;
    } else if (value2 === 'null') {
        value2 = 0;
    } else if (value3 === 'null') {
        value3 = 0;
    } else if (value4 === 'null') {
        value4 = 0;
    } else if (value5 === 'null') {
        value5 = 0;
    }
    const totalPrice = value0 + value1 + value2 + value3 + value4 + value5;
    document.querySelector('.total-p').innerHTML = `$${totalPrice}`
    return totalPrice;
}

function resetPrice() {
    value0 = sessionStorage.setItem('value0', JSON.stringify(0));
    value1 = sessionStorage.setItem('value1', JSON.stringify(0));
    value2 = sessionStorage.setItem('value2', JSON.stringify(0));
    value3 = sessionStorage.setItem('value3', JSON.stringify(0));
    value4 = sessionStorage.setItem('value4', JSON.stringify(0));
    value5 = sessionStorage.setItem('value5', JSON.stringify(0));
    console.log(value0, value1, value2, value3, value4, value5);
    const totalPrice = value0 + value1 + value2 + value3 + value4 + value5;
    console.log(totalPrice);
    document.querySelector('.total-p').innerHTML = `$${0}`
}