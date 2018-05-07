const path = require('path');
const fileSystem = require('fs');
const express = require('express');
const router = express.Router();

const jsonFile = path.join(__dirname,'../data/data.json');

router.get('/', function (req, res) {
    fileSystem.readFile(jsonFile, 'utf8', function (err, data) {
        if (err) return res.sendStatus(404);
        let hotelName = req.query.hotelName;
        let starsNumber = req.query.starsNumber;
        let hotels = JSON.parse(data);
        hotels = hotels.filter(function (hotel) { 
                    return hotel.name.toLowerCase().includes(hotelName.toLowerCase()) 
                            && ((starsNumber == undefined) ? true : starsNumber.includes(hotel.stars.toString())) });
        res.json(hotels);
    });
});

module.exports = router;