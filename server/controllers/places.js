const express = require('express');
const router = express.Router();

const Place = require('../models/place');

// Creating a route for retrieving all places

router.get("/places", (req, res) => {
    const placesData = Place.all;
    res.send(placesData);
    console.log(placesData);
})


// Creating route for random place

router.get("/places/random", (req, res) => {
    const placesData = Place.all;
    const randomPlace = Place.getRandomPlace(placesData);
    res.send(randomPlace);
})

module.exports = router;
