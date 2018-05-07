const express = require('express');
const path = require('path');
const hotelsController = require('./backend/controllers/hotels');
const app = express();

app.use('/hotels', hotelsController);
app.use(express.static('./dist'));

app.listen(3000, function () {
    console.log('AlMundo APP is running in port 3000!');
});
