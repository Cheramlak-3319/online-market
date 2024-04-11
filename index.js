const express = require('express');
const PORT = 6500;

const { errorHandler, endpointNotFoundError } = require('./middleware/error_handler.middleware');



const app = express();
const { router } = require('./route/route')
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set('view engine', 'ejs')
app.use(express.static('public'))


app.use('/chere-market', router)

app.use('*', endpointNotFoundError);

app.use(errorHandler);

app.listen(PORT, console.log('app is listning'));