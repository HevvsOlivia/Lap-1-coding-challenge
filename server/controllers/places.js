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

// Creating route for single place

router.get('/places/:id', (req, res) => {
    try {
        const placeId = parseInt(req.params.id);
        const selectedPlace = Place.findById(placeId);
        res.send(selectedPlace);
    } catch (err) {
        res.status(404).send("Error! Choose a number between 1 and 10!");
        console.log(err);
    }
});

module.exports = router;
