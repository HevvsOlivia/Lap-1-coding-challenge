const express = require('express');
const cors = require('cors');
const app = express();


app.use(express.json());
app.use(cors());

const Place = require('./models/place');

app.get('/', (req, res) => {
    res.send("Hello world!")
});




// creating homepage



// Creating a rout for retrieving all places

app.get("/places", (req, res)=> {
    const placesData = Place.all;
    res.send(placesData);
    console.log(placesData);
})


app.listen(3000, () => console.log(`Express departing now from port 3000!`));

module.exports = app;
