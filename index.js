const express = require('express');
const PORT = 6500;
const app = express();
const { router } = require('./route/route')
app.use(express.json());

app.set('view engine', 'ejs')
app.use(express.static('public'))


app.use('/chere-market', router)


app.listen(PORT, console.log('app is listning'));